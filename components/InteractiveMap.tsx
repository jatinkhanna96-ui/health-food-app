'use client';

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { Dish, CityLocation } from '@/lib/mockData';
import { formatPrice, getGoogleMapsDirectionsUrl } from '@/lib/utils';
import {
  Plus,
  Minus,
  Navigation,
  MapPin,
  ShieldCheck,
  Star,
  Compass,
  Sparkles,
  ChevronRight,
  Zap,
  ListFilter,
  ExternalLink,
  X,
  Flame,
  Info,
} from 'lucide-react';

interface InteractiveMapProps {
  dishes: Dish[];
  selectedDish: Dish | null;
  onSelectDish: (dish: Dish | null) => void;
  city: CityLocation;
  radiusMiles?: number;
  isRadarScanning?: boolean;
  onViewDetail?: (dish: Dish) => void;
  onToggleDishList?: () => void;
  isDishListActive?: boolean;
}

export type MapStyle = 'voyager' | 'osm' | 'light' | 'dark';

// Mercator Projection Math helpers
function lngToTileX(lng: number, z: number): number {
  return ((lng + 180) / 360) * Math.pow(2, z);
}

function latToTileY(lat: number, z: number): number {
  const latRad = (lat * Math.PI) / 180;
  return ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * Math.pow(2, z);
}

function pixelToLng(px: number, z: number): number {
  return (px / (256 * Math.pow(2, z))) * 360 - 180;
}

function pixelToLat(py: number, z: number): number {
  const n = Math.PI - (2 * Math.PI * py) / (256 * Math.pow(2, z));
  return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
}

function getTileUrl(style: MapStyle, z: number, x: number, y: number): string {
  const subdomains = ['a', 'b', 'c', 'd'];
  const s = subdomains[Math.abs(x + y) % subdomains.length];
  
  if (style === 'osm') {
    // OpenStreetMap standard - highly legible, colorful roads & landmarks
    return `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
  }
  if (style === 'dark') {
    // CartoDB Dark Matter
    return `https://${s}.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png`;
  }
  if (style === 'light') {
    // CartoDB Positron - clean monotone
    return `https://${s}.basemaps.cartocdn.com/light_all/${z}/${x}/${y}.png`;
  }
  // Default: Bright, crisp CartoDB Voyager Streets with clear street names, parks & waterways
  return `https://${s}.basemaps.cartocdn.com/rastertiles/voyager/${z}/${x}/${y}.png`;
}

export default function InteractiveMap({
  dishes,
  selectedDish,
  onSelectDish,
  city,
  radiusMiles = 5,
  isRadarScanning = false,
  onViewDetail,
  onToggleDishList,
  isDishListActive = false,
}: InteractiveMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 500, height: 500 });
  const [zoom, setZoom] = useState(14);
  const [center, setCenter] = useState({ lat: city.lat, lng: city.lng });
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredDish, setHoveredDish] = useState<Dish | null>(null);

  // Standard clean OpenStreetMap tile cartography
  const [mapStyle] = useState<MapStyle>('osm');
  const [radarAngle, setRadarAngle] = useState(0);
  const [showLegend, setShowLegend] = useState(true);

  const isLightMode = mapStyle !== 'dark';

  // Auto-fit & observe container dimensions safely with requestAnimationFrame
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;

    const updateSize = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const currentContainer = containerRef.current;
        const width = Math.round(currentContainer.clientWidth);
        const height = Math.round(currentContainer.clientHeight);

        if (width > 0 && height > 0) {
          setContainerSize((prev) => {
            if (prev.width === width && prev.height === height) {
              return prev;
            }
            return { width, height };
          });
        }
      });
    };

    // Initial measurement
    if (container.clientWidth > 0 && container.clientHeight > 0) {
      setContainerSize({
        width: Math.round(container.clientWidth),
        height: Math.round(container.clientHeight),
      });
    }

    const observer = new ResizeObserver(() => {
      updateSize();
    });

    observer.observe(container);

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      observer.disconnect();
    };
  }, []);

  // Update center and default zoom when city changes
  useEffect(() => {
    setCenter({ lat: city.lat, lng: city.lng });
    setPanOffset({ x: 0, y: 0 });
    setZoom(city.zoom || 14);
    setHoveredDish(null);
  }, [city]);

  // Center on dish if selectedDish changes and differs from current city center
  useEffect(() => {
    if (selectedDish) {
      if (selectedDish.city === city.name) {
        setCenter({
          lat: selectedDish.coordinates.lat,
          lng: selectedDish.coordinates.lng,
        });
        setPanOffset({ x: 0, y: 0 });
      }
    }
  }, [selectedDish, city.name]);

  // Radar sweep animation
  useEffect(() => {
    if (!isRadarScanning) return;
    let animId: number;
    const animate = () => {
      setRadarAngle((prev) => (prev + 0.05) % (Math.PI * 2));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isRadarScanning]);

  // Commit pan drag offset to center coordinates
  const commitPan = useCallback(
    (offset: { x: number; y: number }) => {
      if (offset.x === 0 && offset.y === 0) return;
      const Z = Math.round(zoom);
      const cPixelX = lngToTileX(center.lng, Z) * 256;
      const cPixelY = latToTileY(center.lat, Z) * 256;

      const newCenterPixelX = cPixelX - offset.x;
      const newCenterPixelY = cPixelY - offset.y;

      const newLng = pixelToLng(newCenterPixelX, Z);
      const newLat = pixelToLat(newCenterPixelY, Z);

      setCenter({ lat: newLat, lng: newLng });
      setPanOffset({ x: 0, y: 0 });
    },
    [center.lat, center.lng, zoom]
  );

  const dragStartClientPos = useRef<{ x: number; y: number } | null>(null);
  const touchStartClientPos = useRef<{ x: number; y: number } | null>(null);

  // Helper to prevent drag/dismissal when interacting with buttons, links, or the popover card
  const isInteractiveTarget = (el: EventTarget | null): boolean => {
    if (!el || !(el instanceof HTMLElement)) return false;
    return !!(
      el.closest('#interactive-map-dish-popover') ||
      el.closest('button') ||
      el.closest('a') ||
      el.closest('input') ||
      el.closest('[role="button"]')
    );
  };

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    if (isInteractiveTarget(e.target)) return;
    dragStartClientPos.current = { x: e.clientX, y: e.clientY };
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragging) {
      setIsDragging(false);
      commitPan(panOffset);
    }
    // If the user clicked on empty map space without dragging, dismiss active dish callout
    if (dragStartClientPos.current) {
      const dist = Math.hypot(
        e.clientX - dragStartClientPos.current.x,
        e.clientY - dragStartClientPos.current.y
      );
      if (dist < 6 && selectedDish && !isInteractiveTarget(e.target)) {
        onSelectDish(null);
      }
      dragStartClientPos.current = null;
    }
  };

  // Touch Handlers for Mobile Pan
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isInteractiveTarget(e.target)) return;
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      touchStartClientPos.current = { x: touch.clientX, y: touch.clientY };
      setIsDragging(true);
      setDragStart({ x: touch.clientX - panOffset.x, y: touch.clientY - panOffset.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      const touch = e.touches[0];
      setPanOffset({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isDragging) {
      setIsDragging(false);
      commitPan(panOffset);
    }
    if (touchStartClientPos.current && e.changedTouches.length === 1) {
      const touch = e.changedTouches[0];
      const dist = Math.hypot(
        touch.clientX - touchStartClientPos.current.x,
        touch.clientY - touchStartClientPos.current.y
      );
      if (dist < 8 && selectedDish && !isInteractiveTarget(e.target)) {
        onSelectDish(null);
      }
      touchStartClientPos.current = null;
    }
  };

  // Wheel Zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom((z) => Math.min(17, z + 1));
    } else if (e.deltaY > 0) {
      setZoom((z) => Math.max(11, z - 1));
    }
  };

  // Coordinates Converter (GPS to Screen Pixels)
  const getScreenCoords = useCallback(
    (lat: number, lng: number) => {
      const Z = Math.round(zoom);
      const cPixelX = lngToTileX(center.lng, Z) * 256;
      const cPixelY = latToTileY(center.lat, Z) * 256;

      const pPixelX = lngToTileX(lng, Z) * 256;
      const pPixelY = latToTileY(lat, Z) * 256;

      const x = containerSize.width / 2 + (pPixelX - cPixelX) + panOffset.x;
      const y = containerSize.height / 2 + (pPixelY - cPixelY) + panOffset.y;
      return { x, y };
    },
    [center.lat, center.lng, zoom, containerSize.width, containerSize.height, panOffset.x, panOffset.y]
  );

  // Compute Active Visible Tiles
  const visibleTiles = useMemo(() => {
    const Z = Math.round(zoom);
    const numTiles = Math.pow(2, Z);

    const cPixelX = lngToTileX(center.lng, Z) * 256;
    const cPixelY = latToTileY(center.lat, Z) * 256;

    const screenMinX = cPixelX - containerSize.width / 2 - panOffset.x;
    const screenMaxX = cPixelX + containerSize.width / 2 - panOffset.x;
    const screenMinY = cPixelY - containerSize.height / 2 - panOffset.y;
    const screenMaxY = cPixelY + containerSize.height / 2 - panOffset.y;

    const minTileX = Math.floor(screenMinX / 256);
    const maxTileX = Math.floor(screenMaxX / 256);
    const minTileY = Math.floor(screenMinY / 256);
    const maxTileY = Math.floor(screenMaxY / 256);

    const tiles: { key: string; url: string; left: number; top: number }[] = [];

    for (let tx = minTileX; tx <= maxTileX; tx++) {
      for (let ty = minTileY; ty <= maxTileY; ty++) {
        const wrappedX = ((tx % numTiles) + numTiles) % numTiles;
        if (ty < 0 || ty >= numTiles) continue;

        const tilePixelLeft = tx * 256;
        const tilePixelTop = ty * 256;

        const left = containerSize.width / 2 + (tilePixelLeft - cPixelX) + panOffset.x;
        const top = containerSize.height / 2 + (tilePixelTop - cPixelY) + panOffset.y;

        tiles.push({
          key: `${Z}-${tx}-${ty}`,
          url: getTileUrl(mapStyle, Z, wrappedX, ty),
          left,
          top,
        });
      }
    }
    return tiles;
  }, [center.lng, center.lat, zoom, panOffset.x, panOffset.y, containerSize.width, containerSize.height, mapStyle]);

  // Center coordinates of selected city in screen pixels
  const cityCenterCoords = useMemo(() => {
    return getScreenCoords(city.lat, city.lng);
  }, [getScreenCoords, city.lat, city.lng]);

  // Radius in screen pixels
  const radiusPixels = useMemo(() => {
    const Z = Math.round(zoom);
    const metersPerPixel = (156543.03392 * Math.cos((center.lat * Math.PI) / 180)) / Math.pow(2, Z);
    const radiusMeters = radiusMiles * 1609.34;
    return radiusMeters / metersPerPixel;
  }, [zoom, center.lat, radiusMiles]);

  // Radar Sweeping Cone SVG Path
  const radarArcPath = useMemo(() => {
    if (!isRadarScanning) return '';
    const cx = cityCenterCoords.x;
    const cy = cityCenterCoords.y;
    const r = radiusPixels;
    const arcSpan = Math.PI / 4;
    const startAngle = radarAngle;
    const endAngle = radarAngle + arcSpan;

    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);

    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;
  }, [isRadarScanning, cityCenterCoords, radiusPixels, radarAngle]);

  // Screen coords for selected dish (for popover positioning)
  const selectedDishCoords = useMemo(() => {
    if (!selectedDish || selectedDish.city !== city.name) return null;
    return getScreenCoords(selectedDish.coordinates.lat, selectedDish.coordinates.lng);
  }, [selectedDish, getScreenCoords, city.name]);

  // Determine if selected dish is within the visible viewport bounds
  const isSelectedDishInView = useMemo(() => {
    if (!selectedDishCoords) return false;
    return (
      selectedDishCoords.x >= 20 &&
      selectedDishCoords.x <= containerSize.width - 20 &&
      selectedDishCoords.y >= 20 &&
      selectedDishCoords.y <= containerSize.height - 20
    );
  }, [selectedDishCoords, containerSize.width, containerSize.height]);

  return (
    <div
      ref={containerRef}
      id="oasis-cartography-map"
      className={`relative w-full h-full overflow-hidden select-none font-sans transition-colors duration-300 ${
        isLightMode ? 'bg-[#F2F5F3]' : 'bg-[#07130F]'
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* ===================================================================== */}
      {/* 1. TILE LAYER (NO DARK VIGNETTE OVERLAY)                               */}
      {/* ===================================================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {visibleTiles.map((tile) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={tile.key}
            src={tile.url}
            alt=""
            loading="eager"
            referrerPolicy="no-referrer"
            draggable={false}
            className="absolute select-none pointer-events-none"
            style={{
              left: `${tile.left}px`,
              top: `${tile.top}px`,
              width: '256px',
              height: '256px',
            }}
          />
        ))}
      </div>

      {/* Subtle border framing instead of pitch-black vignette */}
      <div className="absolute inset-0 pointer-events-none ring-1 ring-black/10 z-5" />

      {/* ===================================================================== */}
      {/* 2. SVG OVERLAY: SEARCH RADIUS PERIMETER & RADAR BEAM                 */}
      {/* ===================================================================== */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="oasisRadarGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#059669" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Search Radius Perimeter Ring */}
        <circle
          cx={cityCenterCoords.x}
          cy={cityCenterCoords.y}
          r={radiusPixels}
          fill={isLightMode ? 'rgba(16, 185, 129, 0.04)' : 'rgba(53, 226, 127, 0.05)'}
          stroke={isLightMode ? '#059669' : '#35E27F'}
          strokeWidth="2"
          strokeDasharray="6 4"
          className={isLightMode ? 'filter drop-shadow-[0_0_4px_rgba(5,150,105,0.4)]' : 'filter drop-shadow-[0_0_8px_rgba(53,226,127,0.6)]'}
        />

        {/* Dynamic Radar Sweeping Beam */}
        {isRadarScanning && radarArcPath && (
          <path d={radarArcPath} fill="url(#oasisRadarGradient)" />
        )}
      </svg>

      {/* ===================================================================== */}
      {/* 3. CITY HUB BEACON & RADIUS LABEL                                     */}
      {/* ===================================================================== */}
      <div
        className="absolute z-10 pointer-events-none -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        style={{ left: `${cityCenterCoords.x}px`, top: `${cityCenterCoords.y}px` }}
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981] border-2 border-white shadow-md" />
        </span>
        <span
          className={`mt-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider whitespace-nowrap shadow-md border ${
            isLightMode
              ? 'bg-white/95 text-[#047857] border-[#10B981]/40'
              : 'bg-[#0B1A14]/95 text-[#35E27F] border-[#1B3B2F]'
          }`}
        >
          {city.name} Center ({radiusMiles} mi radius)
        </span>
      </div>

      {/* Radius Perimeter Top Label Tag */}
      <div
        className="absolute z-10 pointer-events-none -translate-x-1/2 -translate-y-full"
        style={{ left: `${cityCenterCoords.x}px`, top: `${cityCenterCoords.y - radiusPixels - 6}px` }}
      >
        <span
          className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border shadow-sm ${
            isLightMode
              ? 'bg-white/95 text-[#065F46] border-[#059669]/30'
              : 'bg-[#0B1A14]/90 text-[#35E27F] border-[#1B3B2F]'
          }`}
        >
          {radiusMiles} mi Boundary
        </span>
      </div>

      {/* ===================================================================== */}
      {/* 4. CUSTOM PIN MARKERS (HIGH-CONTRAST & CLEAR)                          */}
      {/* ===================================================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {dishes.map((dish) => {
          const { x, y } = getScreenCoords(dish.coordinates.lat, dish.coordinates.lng);
          const isSelected = selectedDish?.id === dish.id;
          const isHovered = hoveredDish?.id === dish.id;

          // Don't render if far off-screen
          if (x < -140 || x > containerSize.width + 140 || y < -140 || y > containerSize.height + 140) {
            return null;
          }

          // Clean cooking fat abbreviation
          const cleanFat = dish.cookingFat
            .replace('100% Grass-Fed ', '')
            .replace('Cold-Pressed ', '')
            .replace('Extra Virgin ', '');

          return (
            <div
              key={dish.id}
              className={`absolute -translate-x-1/2 -translate-y-full pointer-events-auto cursor-pointer group transition-transform duration-200 ${
                isSelected
                  ? 'scale-110 z-35'
                  : isHovered
                  ? 'scale-105 z-30'
                  : 'hover:scale-105 z-25'
              }`}
              style={{ left: `${x}px`, top: `${y}px` }}
              onClick={(e) => {
                e.stopPropagation();
                if (selectedDish?.id === dish.id) {
                  onSelectDish(null);
                } else {
                  onSelectDish(dish);
                }
              }}
              onMouseEnter={() => setHoveredDish(dish)}
              onMouseLeave={() => setHoveredDish(null)}
            >
              {/* Pin Container */}
              <div className="flex flex-col items-center filter drop-shadow-md">
                {/* Main Marker Capsule */}
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all duration-200 shadow-md border ${
                    isSelected
                      ? 'bg-[#10B981] text-white border-[#059669] ring-3 ring-[#10B981]/40 shadow-lg scale-105'
                      : isLightMode
                      ? isHovered
                        ? 'bg-[#064E3B] text-white border-[#064E3B]'
                        : 'bg-white text-[#0F172A] border-[#059669]'
                      : isHovered
                      ? 'bg-[#0B1A14] text-[#F5F7F3] border-[#35E27F]'
                      : 'bg-[#0B1A14]/95 text-[#F5F7F3] border-[#1B3B2F]'
                  }`}
                >
                  <ShieldCheck
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isSelected ? 'text-white' : isLightMode ? 'text-[#059669]' : 'text-[#35E27F]'
                    }`}
                  />
                  <span className="font-extrabold">{dish.protein}g pro</span>
                  <span className="opacity-40">&bull;</span>
                  <span className="text-[10px] font-bold text-[#10B981] ${isSelected ? '!text-white' : ''}">
                    {formatPrice(dish.price, dish.city, dish.id)}
                  </span>
                </div>

                {/* Restaurant Name Tag below */}
                <div
                  className={`mt-0.5 px-2 py-0.5 rounded-md text-[10px] font-bold tracking-tight whitespace-nowrap shadow-sm border transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#064E3B] text-white border-[#10B981]'
                      : isLightMode
                      ? 'bg-slate-900/90 text-white border-slate-700 group-hover:bg-[#064E3B] group-hover:border-[#10B981]'
                      : 'bg-[#0B1A14]/95 text-[#A8B5AE] border-[#1B3B2F] group-hover:text-white group-hover:border-[#35E27F]'
                  }`}
                >
                  <span>{dish.restaurant}</span>
                  <span className="ml-1 opacity-75 font-normal">({cleanFat})</span>
                </div>

                {/* Pointer Needle & Anchor Dot */}
                <div className="relative flex flex-col items-center mt-0.5">
                  <div
                    className={`w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] ${
                      isSelected
                        ? 'border-t-[#10B981]'
                        : isLightMode
                        ? 'border-t-slate-800'
                        : 'border-t-[#1B3B2F]'
                    }`}
                  />
                  <div className="relative mt-0.5 flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#10B981] opacity-75" />
                    <span
                      className={`relative inline-flex rounded-full h-2 w-2 bg-[#10B981] border-2 border-white shadow-sm ${
                        isSelected ? 'scale-125 ring-2 ring-[#10B981]' : ''
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ===================================================================== */}
      {/* 5. INTERACTIVE SELECTED DISH POPOVER CALLOUT CARD                      */}
      {/* ===================================================================== */}
      {selectedDish && selectedDishCoords && isSelectedDishInView && (
        <div
          id="interactive-map-dish-popover"
          className="absolute z-40 pointer-events-auto transform -translate-x-1/2"
          style={{
            left: `${Math.max(160, Math.min(containerSize.width - 160, selectedDishCoords.x))}px`,
            top: `${Math.max(60, selectedDishCoords.y - 105)}px`,
          }}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="w-[290px] sm:w-[320px] rounded-2xl shadow-xl p-3 border border-[#1B3B2F] bg-[#0B1A14]/95 backdrop-blur-md text-[#F5F7F3] animate-in zoom-in-95 fade-in duration-200"
          >
            {/* Header: Close Button & Restaurant */}
            <div className="flex items-start justify-between gap-2 pb-2 border-b border-[#1B3B2F]">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <a
                    href={getGoogleMapsDirectionsUrl({
                      restaurant: selectedDish.restaurant,
                      address: selectedDish.restaurantAddress,
                      city: selectedDish.city,
                      coordinates: selectedDish.coordinates,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => e.stopPropagation()}
                    className="text-[11px] font-bold uppercase tracking-wider text-[#35E27F] hover:text-[#52ee96] truncate flex items-center gap-1 cursor-pointer transition-colors"
                    title={`View ${selectedDish.restaurant} on Google Maps`}
                  >
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="truncate">{selectedDish.restaurant}</span>
                  </a>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#10291D] text-[#A8B5AE] border border-[#1B3B2F] font-semibold shrink-0">
                    ⭐ {selectedDish.rating}
                  </span>
                </div>
                {selectedDish.restaurantAddress && (
                  <p className="text-[10px] text-[#A8B5AE] truncate mt-0.5">
                    {selectedDish.restaurantAddress}
                  </p>
                )}
                <h4 className="font-bold text-sm truncate leading-snug mt-0.5 text-[#F5F7F3]">
                  {selectedDish.name}
                </h4>
              </div>
              <button
                id="close-dish-popover-btn"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectDish(null);
                }}
                className="p-1.5 rounded-lg hover:bg-white/10 text-[#A8B5AE] hover:text-[#F5F7F3] transition-colors cursor-pointer"
                title="Dismiss Callout"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail + Highlights Row */}
            <div className="flex gap-2.5 mt-2.5 items-center">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 relative border border-[#1B3B2F] bg-[#07130F]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="w-full h-full object-cover"
                />
                {selectedDish.isSeedOilFree && (
                  <span className="absolute bottom-0 inset-x-0 bg-[#0E2F20] text-[#86EFAC] text-[7px] font-bold uppercase tracking-wider text-center py-0.5 border-t border-[#1B3B2F]">
                    No Seed Oils
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1 space-y-1">
                {/* Macros Chips */}
                <div className="flex items-center gap-1.5 flex-wrap text-[11px]">
                  <span className="font-semibold text-[#35E27F]">
                    {selectedDish.protein}g Protein
                  </span>
                  <span className="text-[#1B3B2F]">&bull;</span>
                  <span className="text-[#A8B5AE] font-medium">
                    {selectedDish.calories} kcal
                  </span>
                  <span className="text-[#1B3B2F]">&bull;</span>
                  <span className="font-bold text-[#F5F7F3]">
                    {formatPrice(selectedDish.price, selectedDish.city, selectedDish.id)}
                  </span>
                </div>

                {/* Cooking Fat Badge */}
                <div className="text-[10px] text-[#A8B5AE] font-medium truncate flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#35E27F] shrink-0" />
                  <span className="truncate">Cooked in: {selectedDish.cookingFat}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-3 pt-2.5 border-t border-[#1B3B2F] flex items-center gap-2">
              {onViewDetail && (
                <button
                  id="map-callout-view-details-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewDetail(selectedDish);
                  }}
                  className="flex-1 py-1.5 px-2.5 rounded-xl bg-[#143B2A] hover:bg-[#1B4D36] text-[#DDFBE9] border border-[#1B3B2F] text-xs font-semibold transition-all shadow-xs flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-80" />
                </button>
              )}

              <a
                id="map-callout-directions-btn"
                href={getGoogleMapsDirectionsUrl({
                  restaurant: selectedDish.restaurant,
                  address: selectedDish.restaurantAddress,
                  city: selectedDish.city,
                  coordinates: selectedDish.coordinates,
                })}
                target="_blank"
                rel="noopener noreferrer"
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
                className="py-1.5 px-3 rounded-xl bg-[#0F261D] hover:bg-[#15382B] text-[#A8B5AE] hover:text-[#DDFBE9] border border-[#1B3B2F] text-xs font-semibold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer shadow-xs"
                title={`Get directions to ${selectedDish.restaurant} on Google Maps`}
              >
                <Navigation className="w-3.5 h-3.5 fill-current shrink-0 text-[#35E27F]" />
                <span>Directions</span>
                <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 6. TOP FLOATING HUD & CONTROLS (HIGH LEGIBILITY)                      */}
      {/* ===================================================================== */}
      <div className="absolute top-3 inset-x-3 z-30 flex items-center justify-between gap-2 pointer-events-none">
        {/* Top Left: Informative City & Dish Count Banner */}
        <div className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#0B1A14]/95 backdrop-blur-md border border-slate-200 dark:border-[#1B3B2F] text-slate-800 dark:text-[#F5F7F3] text-xs font-semibold shadow-md">
          <Compass className="w-3.5 h-3.5 text-emerald-600 dark:text-[#35E27F] shrink-0" />
          <span className="truncate max-w-[130px] sm:max-w-[200px]">
            {city.name}
          </span>
          <span className="text-slate-300 dark:text-slate-700">&bull;</span>
          <span className="text-emerald-700 dark:text-[#35E27F] font-bold">
            {dishes.length} options
          </span>
        </div>

        {/* Top Right: List View */}
        <div className="pointer-events-auto flex items-center gap-1.5">
          {/* Dish List View Button */}
          {onToggleDishList && (
            <button
              id="map-toggle-dish-list-btn"
              onClick={onToggleDishList}
              className={`px-3 py-1.5 rounded-xl backdrop-blur-md border text-xs font-bold transition-all duration-200 cursor-pointer shadow-md flex items-center gap-1.5 active:scale-95 ${
                isDishListActive
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white/95 dark:bg-[#0B1A14]/90 text-slate-800 dark:text-[#F5F7F3] border-slate-200 dark:border-[#1B3B2F] hover:border-emerald-500'
              }`}
              title="Toggle Dish List View"
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">List</span>
              <span className="px-1.5 py-0.2 rounded-md bg-emerald-100 dark:bg-[#123D2A] text-emerald-800 dark:text-[#35E27F] text-[10px] font-bold">
                {dishes.length}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 7. BOTTOM MAP CONTROLS & COMPACT LEGEND                               */}
      {/* ===================================================================== */}
      {/* Bottom Left: Visual Map Legend / Helper Guide */}
      <div className="absolute bottom-3 left-3 z-30 pointer-events-auto">
        {showLegend ? (
          <div
            className={`p-2.5 rounded-2xl shadow-lg border text-xs backdrop-blur-md max-w-[260px] animate-in fade-in duration-150 ${
              isLightMode
                ? 'bg-white/95 text-slate-800 border-slate-200'
                : 'bg-[#0B1A14]/95 text-[#F5F7F3] border-[#1B3B2F]'
            }`}
          >
            <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-black/5 dark:border-white/10 font-bold">
              <span className="flex items-center gap-1 text-[11px] text-emerald-700 dark:text-[#35E27F]">
                <Info className="w-3.5 h-3.5" />
                <span>Map Guide</span>
              </span>
              <button
                onClick={() => setShowLegend(false)}
                className="text-[10px] text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                Hide
              </button>
            </div>
            <div className="space-y-1.5 mt-1.5 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 border border-white shadow-xs shrink-0" />
                <span>Verified healthy dish &amp; restaurant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full border-2 border-dashed border-emerald-600 shrink-0" />
                <span>{radiusMiles}-mile vicinity perimeter</span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-[#A8B5AE] pt-0.5">
                💡 <em>Click any pin to inspect nutrition, cooking oils &amp; directions</em>
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowLegend(true)}
            className="p-2 rounded-xl bg-white/95 dark:bg-[#0B1A14]/95 text-slate-700 dark:text-[#A8B5AE] border border-slate-200 dark:border-[#1B3B2F] text-xs font-semibold shadow-md flex items-center gap-1.5 cursor-pointer hover:text-emerald-600"
          >
            <Info className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[11px]">Legend</span>
          </button>
        )}
      </div>

      {/* Bottom Right: Zoom In, Zoom Out, Recenter Navigation Buttons */}
      <div className="absolute bottom-3 right-3 z-30 flex flex-col gap-1 bg-white/95 dark:bg-[#0B1A14]/95 backdrop-blur-md p-1 rounded-xl border border-slate-200 dark:border-[#1B3B2F] shadow-lg">
        <button
          id="map-zoom-in-btn"
          onClick={() => setZoom((z) => Math.min(17, z + 1))}
          className="p-2 rounded-lg text-slate-700 dark:text-[#A8B5AE] hover:text-emerald-600 dark:hover:text-[#35E27F] hover:bg-slate-100 dark:hover:bg-[#0F231B] transition-colors cursor-pointer active:scale-95"
          title="Zoom In (+)"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          id="map-zoom-out-btn"
          onClick={() => setZoom((z) => Math.max(11, z - 1))}
          className="p-2 rounded-lg text-slate-700 dark:text-[#A8B5AE] hover:text-emerald-600 dark:hover:text-[#35E27F] hover:bg-slate-100 dark:hover:bg-[#0F231B] transition-colors cursor-pointer active:scale-95"
          title="Zoom Out (-)"
        >
          <Minus className="w-4 h-4" />
        </button>
        <div className="w-full h-px bg-slate-200 dark:bg-[#1B3B2F] my-0.5" />
        <button
          id="map-recenter-btn"
          onClick={() => {
            setCenter({ lat: city.lat, lng: city.lng });
            setPanOffset({ x: 0, y: 0 });
            setZoom(city.zoom || 14);
          }}
          className="p-2 rounded-lg text-emerald-600 dark:text-[#35E27F] hover:bg-emerald-50 dark:hover:bg-[#0F231B] transition-colors cursor-pointer active:scale-95"
          title={`Recenter Map to ${city.name}`}
        >
          <Navigation className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
