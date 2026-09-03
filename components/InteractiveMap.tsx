'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Dish, CityLocation, INITIAL_DISHES, CITY_LOCATIONS } from '@/lib/mockData';
import { Compass } from 'lucide-react';

// Fix default Leaflet icon paths for bundlers and Next.js (browser-only)
if (typeof window !== 'undefined') {
  const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  if (L.Marker && L.Marker.prototype && L.Marker.prototype.options) {
    L.Marker.prototype.options.icon = DefaultIcon;
  }
}

// Helper to validate finite coordinates
export function isValidLatLng(lat: any, lng: any): boolean {
  return (
    typeof lat === 'number' &&
    typeof lng === 'number' &&
    Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    !isNaN(lat) &&
    !isNaN(lng) &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180
  );
}

// Global safeguard on Leaflet's toLatLng/LatLng constructor to prevent unhandled NaN exceptions
if (typeof window !== 'undefined') {
  const OriginalLatLng = L.LatLng;
  function SafeLatLng(this: any, lat: any, lng: any, alt?: any) {
    const safeLat = typeof lat === 'number' && Number.isFinite(lat) && !isNaN(lat) ? lat : 40.7128;
    const safeLng = typeof lng === 'number' && Number.isFinite(lng) && !isNaN(lng) ? lng : -74.006;
    return new (OriginalLatLng as any)(safeLat, safeLng, alt);
  }
  SafeLatLng.prototype = OriginalLatLng.prototype;
  (L as any).LatLng = SafeLatLng;

  const originalToLatLng = L.latLng;
  (L as any).latLng = function (a: any, b?: any, c?: any): any {
    try {
      const result = originalToLatLng(a, b, c);
      if (
        result &&
        (!Number.isFinite(result.lat) ||
          !Number.isFinite(result.lng) ||
          isNaN(result.lat) ||
          isNaN(result.lng))
      ) {
        return originalToLatLng(40.7128, -74.006);
      }
      return result;
    } catch {
      return originalToLatLng(40.7128, -74.006);
    }
  };
}

// Helper component to handle flying to city / dish changes and container resizing
function MapViewUpdater({
  center,
  zoom,
  selectedDish,
}: {
  center: [number, number];
  zoom: number;
  selectedDish?: Dish | null;
}) {
  const map = useMap();
  const prevCenterRef = useRef<string>('');
  const prevDishIdRef = useRef<string | null>(null);

  // ResizeObserver to handle container layout changes (e.g. mobile toggle between list and map)
  useEffect(() => {
    const container = map.getContainer();
    if (!container) return;

    // Invalidate immediately after mount with a small delay once container is rendered
    const timer = setTimeout(() => {
      try {
        map.invalidateSize();
      } catch (err) {
        console.warn('Map invalidateSize error:', err);
      }
    }, 100);

    const ro = new ResizeObserver(() => {
      try {
        const size = map.getSize();
        if (size && size.x > 0 && size.y > 0) {
          map.invalidateSize();
        }
      } catch {
        // Silently ignore resize observer errors
      }
    });

    ro.observe(container);

    return () => {
      clearTimeout(timer);
      ro.disconnect();
    };
  }, [map]);

  // Handle center / zoom changes safely
  useEffect(() => {
    const validLat = Number.isFinite(center[0]) && !isNaN(center[0]) ? center[0] : 40.7128;
    const validLng = Number.isFinite(center[1]) && !isNaN(center[1]) ? center[1] : -74.006;
    const validZoom = Number.isFinite(zoom) && !isNaN(zoom) && zoom > 0 ? zoom : 13;
    const centerKey = `${validLat.toFixed(4)},${validLng.toFixed(4)},${validZoom}`;

    // Skip on initial mount if already at center to avoid redundant animation on unmeasured container
    if (!prevCenterRef.current) {
      prevCenterRef.current = centerKey;
      return;
    }

    if (prevCenterRef.current === centerKey) {
      return;
    }
    prevCenterRef.current = centerKey;

    try {
      const size = map.getSize();
      // If map container is hidden (0 width/height), do setView without flyTo animation
      if (!size || size.x <= 0 || size.y <= 0) {
        map.setView([validLat, validLng], validZoom);
      } else {
        map.flyTo([validLat, validLng], validZoom, {
          duration: 1.0,
          easeLinearity: 0.25,
        });
      }
    } catch {
      try {
        map.setView([validLat, validLng], validZoom);
      } catch {
        // Safe fallback
      }
    }
  }, [center, zoom, map]);

  // Pan to selected dish if clicked and changed
  useEffect(() => {
    if (!selectedDish) {
      prevDishIdRef.current = null;
      return;
    }

    if (prevDishIdRef.current === selectedDish.id) {
      return;
    }
    prevDishIdRef.current = selectedDish.id;

    const lat = Number(selectedDish.coordinates?.lat);
    const lng = Number(selectedDish.coordinates?.lng);

    if (isValidLatLng(lat, lng)) {
      try {
        const size = map.getSize();
        if (size && size.x > 0 && size.y > 0) {
          map.panTo([lat, lng], {
            animate: true,
            duration: 0.6,
          });
        } else {
          map.setView([lat, lng]);
        }
      } catch {
        try {
          map.setView([lat, lng]);
        } catch {
          // Safe fallback
        }
      }
    }
  }, [selectedDish, map]);

  return null;
}

export interface InteractiveMapProps {
  dishes?: Dish[];
  selectedDish?: Dish | null;
  onSelectDish?: (dish: Dish) => void;
  city?: CityLocation;
}

export default function InteractiveMap({
  dishes = INITIAL_DISHES,
  selectedDish = null,
  onSelectDish,
  city = CITY_LOCATIONS[0],
}: InteractiveMapProps) {
  // Ensure component only mounts on the client side to avoid SSR window issues
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Compute map center from city or fallback to first dish with rigorous numeric validation
  const mapCenter = useMemo<[number, number]>(() => {
    const cityLat = Number(city?.lat);
    const cityLng = Number(city?.lng);
    if (isValidLatLng(cityLat, cityLng)) {
      return [cityLat, cityLng];
    }
    for (const d of dishes) {
      const dLat = Number(d.coordinates?.lat);
      const dLng = Number(d.coordinates?.lng);
      if (isValidLatLng(dLat, dLng)) {
        return [dLat, dLng];
      }
    }
    return [40.7128, -74.006];
  }, [city?.lat, city?.lng, dishes]);

  const mapZoom = Number.isFinite(city?.zoom) && city.zoom > 0 ? city.zoom : 13;

  // Generate distinct custom styled markers for each dish with macro callout
  const createDishIcon = (dish: Dish, isSelected: boolean) => {
    return L.divIcon({
      className: 'custom-dish-marker-container',
      html: `
        <div class="relative group cursor-pointer transition-all duration-300 ${
          isSelected ? 'scale-110 z-50' : 'hover:scale-105 z-20'
        }">
          ${
            isSelected
              ? '<div class="absolute -inset-2 bg-rose-500/30 rounded-full animate-ping"></div>'
              : ''
          }
          <div class="relative flex items-center gap-1.5 px-2.5 py-1 rounded-full border shadow-lg backdrop-blur-md ${
            isSelected
              ? 'bg-[#C8102E] border-rose-400 text-white font-black ring-4 ring-rose-500/20'
              : 'bg-white border-stone-200 text-stone-900 font-extrabold hover:border-[#C8102E]'
          }">
            <span class="w-2 h-2 rounded-full ${
              isSelected ? 'bg-white' : 'bg-[#C8102E]'
            }"></span>
            <span class="text-xs tracking-tight">${dish.protein}g</span>
          </div>
          <div class="w-0 h-0 border-x-4 border-x-transparent border-t-6 mx-auto ${
            isSelected ? 'border-t-[#C8102E]' : 'border-t-stone-400'
          }"></div>
        </div>
      `,
      iconSize: [60, 36],
      iconAnchor: [30, 36],
      popupAnchor: [0, -36],
    });
  };

  if (!mounted) {
    return (
      <div
        id="interactive-map-ssr-fallback"
        className="w-full h-full flex flex-col items-center justify-center bg-stone-100 text-stone-500 gap-2.5 p-6"
      >
        <div className="w-7 h-7 border-2 border-[#C8102E] border-t-transparent rounded-full animate-spin"></div>
        <span className="text-xs font-mono font-medium tracking-wide">
          Loading OpenStreetMap tiles...
        </span>
      </div>
    );
  }

  return (
    <div
      id="interactive-react-leaflet-wrapper"
      className="relative w-full h-full min-h-[340px] bg-stone-100 overflow-hidden"
    >
      {/* 100% Free OpenStreetMap via React-Leaflet */}
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        {/* OpenStreetMap TileLayer - 100% Free, No API Key Required */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />

        {/* Dynamic map view updater with size and coordinate safeguards */}
        <MapViewUpdater
          center={mapCenter}
          zoom={mapZoom}
          selectedDish={selectedDish}
        />

        {/* Dish Pins from INITIAL_DISHES / dishes prop with strict coordinate validation */}
        {dishes.map((dish) => {
          const lat = Number(dish.coordinates?.lat);
          const lng = Number(dish.coordinates?.lng);
          if (!isValidLatLng(lat, lng)) {
            return null;
          }

          const isSelected = selectedDish?.id === dish.id;
          const dishIcon = createDishIcon(dish, isSelected);

          return (
            <Marker
              key={dish.id}
              position={[lat, lng]}
              icon={dishIcon}
              eventHandlers={{
                click: () => {
                  if (onSelectDish) {
                    onSelectDish(dish);
                  }
                },
              }}
            >
              <Popup className="custom-dish-popup">
                <div className="p-3 space-y-2 w-64 text-stone-900 bg-white rounded-2xl">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-rose-50 text-[#C8102E] border border-rose-200 text-[10px] font-mono font-bold uppercase truncate max-w-[150px]">
                      {dish.cookingFat}
                    </span>
                    <span className="font-extrabold text-xs text-[#C8102E] shrink-0">
                      {dish.protein}g Protein
                    </span>
                  </div>

                  <div>
                    <h4 className="font-black text-sm text-stone-900 leading-tight">
                      {dish.name}
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5 truncate">
                      {dish.restaurant}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-stone-700 border-t border-stone-100 pt-2 font-medium">
                    <span className="font-bold text-stone-900">${dish.price.toFixed(2)}</span>
                    <span className="text-stone-500">{dish.calories} kcal</span>
                    <span className="text-blue-600 font-bold">{dish.carbs}g C</span>
                    <span className="text-amber-600 font-bold">{dish.fat}g F</span>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Floating Info Overlay (Top Left) */}
      <div className="absolute top-3.5 left-3.5 z-[400] px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse"></span>
        <span className="text-xs font-extrabold text-stone-900">
          {city?.name || 'City'}, {city?.state || ''}
        </span>
        <span className="text-[10px] text-stone-500 font-mono">
          ({dishes.length} Verified)
        </span>
      </div>

      {/* Attribution / OpenStreetMap Indicator (Top Right) */}
      <div className="absolute top-3.5 right-3.5 z-[400] flex items-center gap-1.5 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl border border-stone-200 shadow-md">
        <div className="flex items-center gap-1 px-2 py-0.5 text-[11px] font-bold text-stone-600">
          <Compass className="w-3.5 h-3.5 text-[#C8102E]" />
          <span>OpenStreetMap</span>
        </div>
      </div>
    </div>
  );
}
