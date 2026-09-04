'use client';

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { Dish, CityLocation } from '@/lib/mockData';
import {
  Plus,
  Minus,
  Navigation,
  MapPin,
  ShieldCheck,
  Star,
  Compass,
  Layers,
  Sparkles,
  ChevronRight,
  Zap,
} from 'lucide-react';

interface InteractiveMapProps {
  dishes: Dish[];
  selectedDish: Dish | null;
  onSelectDish: (dish: Dish) => void;
  city: CityLocation;
  radiusMiles?: number;
  isRadarScanning?: boolean;
  onViewDetail?: (dish: Dish) => void;
}

type MapStyle = 'dark' | 'voyager' | 'osm';

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
    return `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
  }
  if (style === 'voyager') {
    return `https://${s}.basemaps.cartocdn.com/rastertiles/voyager/${z}/${x}/${y}.png`;
  }
  // Default: Dark Minimalist Monochrome CartoDB Dark Matter
  return `https://${s}.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png`;
}

export default function InteractiveMap({
  dishes,
  selectedDish,
  onSelectDish,
  city,
  radiusMiles = 5,
  isRadarScanning = false,
  onViewDetail,
}: InteractiveMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 500, height: 500 });
  const [zoom, setZoom] = useState(14);
  const [center, setCenter] = useState({ lat: city.lat, lng: city.lng });
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredDish, setHoveredDish] = useState<Dish | null>(null);
  const [mapStyle, setMapStyle] = useState<MapStyle>('dark');
  const [radarAngle, setRadarAngle] = useState(0);
  const [showStyleMenu, setShowStyleMenu] = useState(false);

  // Auto-fit & observe container dimensions
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateSize = () => {
      if (container.clientWidth > 0 && container.clientHeight > 0) {
        setContainerSize({
          width: container.clientWidth,
          height: container.clientHeight,
        });
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(container);
    return () => observer.disconnect();
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

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
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

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      commitPan(panOffset);
    }
  };

  // Touch Handlers for Mobile Pan
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
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

  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      commitPan(panOffset);
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

  return (
    <div
      ref={containerRef}
      id="oasis-cartography-map"
      className="relative w-full h-full overflow-hidden select-none bg-zinc-950 font-sans"
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
      {/* 1. TILE LAYER: DARK MINIMALIST MONOCHROME CARTOGRAPHY                 */}
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
            className="absolute select-none pointer-events-none transition-opacity duration-150"
            style={{
              left: `${tile.left}px`,
              top: `${tile.top}px`,
              width: '256px',
              height: '256px',
            }}
          />
        ))}
      </div>

      {/* Dark Oasis Vignette Ambient Shading */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.85)]" />

      {/* ===================================================================== */}
      {/* 2. SVG OVERLAY: GLOWING EMERALD RADAR PERIMETER & SCAN CONE           */}
      {/* ===================================================================== */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="oasisRadarGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#10B981" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glowing Emerald Search Radius Perimeter Ring */}
        <circle
          cx={cityCenterCoords.x}
          cy={cityCenterCoords.y}
          r={radiusPixels}
          fill="rgba(16, 185, 129, 0.04)"
          stroke="#10b981"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="filter drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
        />

        {/* Dynamic Radar Sweeping Beam */}
        {isRadarScanning && radarArcPath && (
          <path d={radarArcPath} fill="url(#oasisRadarGradient)" />
        )}
      </svg>

      {/* ===================================================================== */}
      {/* 3. CITY OASIS HUB BEACON                                              */}
      {/* ===================================================================== */}
      <div
        className="absolute z-10 pointer-events-none -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        style={{ left: `${cityCenterCoords.x}px`, top: `${cityCenterCoords.y}px` }}
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border-2 border-zinc-950 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
        </span>
        <span className="mt-1 px-2.5 py-0.5 rounded-full bg-zinc-950/90 backdrop-blur-md text-[9px] font-black text-emerald-300 uppercase tracking-widest border border-emerald-500/40 whitespace-nowrap shadow-[0_0_12px_rgba(16,185,129,0.25)]">
          {city.name} Oasis Hub ({radiusMiles}mi)
        </span>
      </div>

      {/* ===================================================================== */}
      {/* 4. CUSTOM GLOWING EMERALD MARKERS (SAFE OASIS IN A DARK CITY)         */}
      {/* ===================================================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {dishes.map((dish) => {
          const { x, y } = getScreenCoords(dish.coordinates.lat, dish.coordinates.lng);
          const isSelected = selectedDish?.id === dish.id;
          const isHovered = hoveredDish?.id === dish.id;

          // Don't render if far off-screen
          if (x < -120 || x > containerSize.width + 120 || y < -120 || y > containerSize.height + 120) {
            return null;
          }

          return (
            <div
              key={dish.id}
              className={`absolute -translate-x-1/2 -translate-y-full pointer-events-auto cursor-pointer group transition-all duration-300 ${
                isSelected
                  ? 'scale-120 z-35'
                  : isHovered
                  ? 'scale-110 z-30'
                  : 'hover:scale-105 z-25'
              }`}
              style={{ left: `${x}px`, top: `${y}px` }}
              onClick={(e) => {
                e.stopPropagation();
                onSelectDish(dish);
              }}
              onMouseEnter={() => setHoveredDish(dish)}
              onMouseLeave={() => setHoveredDish(null)}
            >
              {/* Glowing Emerald Pin Container */}
              <div className="flex flex-col items-center filter drop-shadow-xl">
                {/* Glowing Capsule Pill */}
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black border transition-all duration-300 ${
                    isSelected
                      ? 'bg-emerald-950 text-white border-emerald-400 ring-2 ring-emerald-400/70 shadow-[0_0_24px_rgba(16,185,129,0.85)]'
                      : isHovered
                      ? 'bg-zinc-950 text-white border-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.6)]'
                      : 'bg-zinc-950/95 text-zinc-100 border-emerald-500/50 shadow-[0_0_14px_rgba(16,185,129,0.35)]'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="font-extrabold text-white">{dish.protein}g</span>
                  <span className="text-[9px] text-zinc-500">&bull;</span>
                  <span className="text-emerald-300 truncate max-w-[90px] font-bold">
                    {dish.cookingFat.replace('100% Grass-Fed ', '')}
                  </span>
                </div>

                {/* Restaurant Label Cardlet */}
                <div
                  className={`mt-0.5 px-2 py-0.5 rounded-lg text-[10px] font-black tracking-tight whitespace-nowrap border shadow-lg transition-all duration-300 ${
                    isSelected
                      ? 'bg-emerald-500 text-zinc-950 border-emerald-300 font-black'
                      : 'bg-zinc-900/95 backdrop-blur-md text-zinc-200 border-white/15 group-hover:border-emerald-500/50 group-hover:text-white'
                  }`}
                >
                  {dish.restaurant}
                </div>

                {/* Glowing Beacon Needle & Glowing Dot */}
                <div className="relative flex flex-col items-center mt-0.5">
                  <div
                    className={`w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] ${
                      isSelected ? 'border-t-emerald-400' : 'border-t-emerald-500/80'
                    }`}
                  />
                  {/* Glowing Emerald Anchor Dot */}
                  <div className="relative mt-0.5 flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 opacity-75" />
                    <span
                      className={`relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border border-zinc-950 shadow-[0_0_12px_rgba(16,185,129,0.9)] ${
                        isSelected ? 'ring-2 ring-emerald-300 scale-125' : ''
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
      {/* 5. FLOATING MAP CONTROLS & HUD IN DARK GLASS                          */}
      {/* ===================================================================== */}
      {/* Top Left: Street Level Indicator Badge */}
      <div className="absolute top-3 left-3 z-30 flex items-center gap-2">
        <div className="px-3 py-1.5 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-xl">
          <Compass className="w-3.5 h-3.5 text-emerald-400" />
          <span>{city.name}</span>
          <span className="text-zinc-600">&bull;</span>
          <span className="text-emerald-400 font-extrabold">Oasis Radar Z{zoom}</span>
        </div>
      </div>

      {/* Top Right: Cartography Style Switcher */}
      <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5">
        <div className="relative">
          <button
            id="map-style-toggle-btn"
            onClick={() => setShowStyleMenu(!showStyleMenu)}
            className="px-3 py-1.5 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-white/10 hover:border-emerald-500/40 text-zinc-200 hover:text-white transition-all duration-300 cursor-pointer shadow-xl flex items-center gap-1.5 text-xs font-bold"
            title="Switch map view"
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline capitalize">
              {mapStyle === 'dark' ? 'Dark Oasis' : mapStyle === 'voyager' ? 'Day Streets' : 'OSM Roads'}
            </span>
          </button>

          {showStyleMenu && (
            <div className="absolute right-0 mt-1.5 w-44 bg-zinc-950/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/15 py-1.5 z-40 text-xs font-bold text-zinc-200 animate-in fade-in zoom-in-95 duration-100">
              <div className="px-3 py-1 text-[10px] font-black uppercase tracking-wider text-zinc-500 border-b border-white/10">
                Cartography Mode
              </div>
              <button
                onClick={() => {
                  setMapStyle('dark');
                  setShowStyleMenu(false);
                }}
                className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-white/5 cursor-pointer ${
                  mapStyle === 'dark' ? 'text-emerald-400 font-black' : ''
                }`}
              >
                <span>Dark Minimalist</span>
                {mapStyle === 'dark' && <span className="text-emerald-400">✓</span>}
              </button>
              <button
                onClick={() => {
                  setMapStyle('voyager');
                  setShowStyleMenu(false);
                }}
                className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-white/5 cursor-pointer ${
                  mapStyle === 'voyager' ? 'text-emerald-400 font-black' : ''
                }`}
              >
                <span>Daylight Streets</span>
                {mapStyle === 'voyager' && <span className="text-emerald-400">✓</span>}
              </button>
              <button
                onClick={() => {
                  setMapStyle('osm');
                  setShowStyleMenu(false);
                }}
                className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-white/5 cursor-pointer ${
                  mapStyle === 'osm' ? 'text-emerald-400 font-black' : ''
                }`}
              >
                <span>OpenStreetMap</span>
                {mapStyle === 'osm' && <span className="text-emerald-400">✓</span>}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Right: Zoom In, Zoom Out, Recenter Buttons */}
      <div className="absolute bottom-4 right-4 z-30 flex flex-col gap-1.5 bg-zinc-950/90 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-2xl">
        <button
          id="map-zoom-in-btn"
          onClick={() => setZoom((z) => Math.min(17, z + 1))}
          className="p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer active:scale-95"
          title="Zoom In (+)"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          id="map-zoom-out-btn"
          onClick={() => setZoom((z) => Math.max(11, z - 1))}
          className="p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer active:scale-95"
          title="Zoom Out (-)"
        >
          <Minus className="w-4 h-4" />
        </button>
        <div className="w-full h-px bg-white/10 my-0.5" />
        <button
          id="map-recenter-btn"
          onClick={() => {
            setCenter({ lat: city.lat, lng: city.lng });
            setPanOffset({ x: 0, y: 0 });
            setZoom(city.zoom || 14);
          }}
          className="p-2 rounded-xl text-emerald-400 hover:text-emerald-300 hover:bg-white/10 transition-colors cursor-pointer active:scale-95"
          title="Recenter Map (🧭)"
        >
          <Navigation className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
