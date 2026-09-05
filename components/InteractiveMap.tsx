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
  ListFilter,
} from 'lucide-react';

interface InteractiveMapProps {
  dishes: Dish[];
  selectedDish: Dish | null;
  onSelectDish: (dish: Dish) => void;
  city: CityLocation;
  radiusMiles?: number;
  isRadarScanning?: boolean;
  onViewDetail?: (dish: Dish) => void;
  onToggleDishList?: () => void;
  isDishListActive?: boolean;
}

type MapStyle = 'voyager' | 'light' | 'dark' | 'osm';

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
  if (style === 'dark') {
    return `https://${s}.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png`;
  }
  if (style === 'light') {
    return `https://${s}.basemaps.cartocdn.com/light_all/${z}/${x}/${y}.png`;
  }
  // Default: Bright Crisp CartoDB Voyager Streets
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
      className="relative w-full h-full overflow-hidden select-none bg-[#07130F] font-sans"
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
      {/* 1. TILE LAYER                                                        */}
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

      {/* Subtle Map Ambient Edge Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(7,19,15,0.85)]" />

      {/* ===================================================================== */}
      {/* 2. SVG OVERLAY: GLOWING RADAR PERIMETER & SCAN CONE                    */}
      {/* ===================================================================== */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="oasisRadarGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#35E27F" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#123D2A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#35E27F" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glowing Search Radius Perimeter Ring */}
        <circle
          cx={cityCenterCoords.x}
          cy={cityCenterCoords.y}
          r={radiusPixels}
          fill="rgba(53, 226, 127, 0.04)"
          stroke="#35E27F"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="filter drop-shadow-[0_0_8px_rgba(53,226,127,0.6)]"
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
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35E27F] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#35E27F] border-2 border-[#07130F] shadow-[0_0_12px_rgba(53,226,127,0.9)]" />
        </span>
        <span className="mt-1 px-2.5 py-0.5 rounded-full bg-[#0B1A14]/95 backdrop-blur-md text-[9px] font-bold text-[#35E27F] uppercase tracking-widest border border-[#1B3B2F] whitespace-nowrap shadow-md">
          {city.name} Oasis Hub ({radiusMiles}mi)
        </span>
      </div>

      {/* ===================================================================== */}
      {/* 4. CUSTOM PIN MARKERS                                                 */}
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
              className={`absolute -translate-x-1/2 -translate-y-full pointer-events-auto cursor-pointer group transition-all duration-200 ${
                isSelected
                  ? 'scale-115 z-35'
                  : isHovered
                  ? 'scale-105 z-30'
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
              {/* Pin Container */}
              <div className="flex flex-col items-center filter drop-shadow-md">
                {/* Capsule Pill */}
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#35E27F] text-[#07130F] border-[#35E27F] ring-2 ring-[#35E27F]/40 shadow-lg'
                      : isHovered
                      ? 'bg-[#0B1A14] text-[#F5F7F3] border-[#35E27F] shadow-md'
                      : 'bg-[#0B1A14]/95 text-[#F5F7F3] border-[#1B3B2F] shadow-sm'
                  }`}
                >
                  <ShieldCheck className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#07130F]' : 'text-[#35E27F]'}`} />
                  <span className={`font-bold ${isSelected ? 'text-[#07130F]' : 'text-[#F5F7F3]'}`}>{dish.protein}g</span>
                  <span className={`text-[9px] ${isSelected ? 'text-[#07130F]/60' : 'text-[#A8B5AE]'}`}>&bull;</span>
                  <span className={`truncate max-w-[90px] font-medium ${isSelected ? 'text-[#07130F]' : 'text-[#35E27F]'}`}>
                    {dish.cookingFat.replace('100% Grass-Fed ', '')}
                  </span>
                </div>

                {/* Restaurant Label Cardlet */}
                <div
                  className={`mt-0.5 px-2 py-0.5 rounded-md text-[10px] font-bold tracking-tight whitespace-nowrap border shadow-sm transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#123D2A] text-[#35E27F] border-[#35E27F]'
                      : 'bg-[#0B1A14]/95 backdrop-blur-md text-[#A8B5AE] border-[#1B3B2F] group-hover:border-[#35E27F]/60 group-hover:text-[#F5F7F3]'
                  }`}
                >
                  {dish.restaurant}
                </div>

                {/* Beacon Needle & Dot */}
                <div className="relative flex flex-col items-center mt-0.5">
                  <div
                    className={`w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] ${
                      isSelected ? 'border-t-[#35E27F]' : 'border-t-[#1B3B2F]'
                    }`}
                  />
                  {/* Anchor Dot */}
                  <div className="relative mt-0.5 flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#35E27F] opacity-75" />
                    <span
                      className={`relative inline-flex rounded-full h-2 w-2 bg-[#35E27F] border border-[#07130F] shadow-[0_0_8px_rgba(53,226,127,0.8)] ${
                        isSelected ? 'scale-125' : ''
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
      {/* 5. FLOATING MAP CONTROLS & HUD                                        */}
      {/* ===================================================================== */}
      {/* Top Left: Street Level Indicator Badge */}
      <div className="absolute top-3 left-3 z-30 flex items-center gap-2">
        <div className="px-3 py-1.5 rounded-xl bg-[#0B1A14]/90 backdrop-blur-md border border-[#1B3B2F] text-[#F5F7F3] text-[11px] font-medium flex items-center gap-1.5 shadow-sm">
          <Compass className="w-3.5 h-3.5 text-[#35E27F]" />
          <span>{city.name}</span>
          <span className="text-[#1B3B2F]">&bull;</span>
          <span className="text-[#35E27F] font-bold">Radar Z{zoom}</span>
        </div>
      </div>

      {/* Top Right: View Controls & Cartography Style Switcher */}
      <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5">
        {/* Dish List View Quick Switcher Button */}
        {onToggleDishList && (
          <button
            id="map-toggle-dish-list-btn"
            onClick={onToggleDishList}
            className={`px-3 py-1.5 rounded-xl backdrop-blur-md border text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm flex items-center gap-1.5 active:scale-95 ${
              isDishListActive
                ? 'bg-[#35E27F] text-[#07130F] border-[#35E27F]'
                : 'bg-[#0B1A14]/90 text-[#F5F7F3] border-[#1B3B2F] hover:border-[#35E27F]/50 hover:bg-[#0F231B]'
            }`}
            title="Toggle Dish List View"
          >
            <ListFilter className={`w-3.5 h-3.5 ${isDishListActive ? 'text-[#07130F]' : 'text-[#35E27F]'}`} />
            <span className="hidden xs:inline">Dish List</span>
            <span
              className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                isDishListActive
                  ? 'bg-[#07130F]/20 text-[#07130F]'
                  : 'bg-[#123D2A] text-[#35E27F] border border-[#1B3B2F]'
              }`}
            >
              {dishes.length}
            </span>
          </button>
        )}

        <div className="relative">
          <button
            id="map-style-toggle-btn"
            onClick={() => setShowStyleMenu(!showStyleMenu)}
            className="px-3 py-1.5 rounded-xl bg-[#0B1A14]/90 backdrop-blur-md border border-[#1B3B2F] hover:border-[#35E27F]/50 text-[#F5F7F3] transition-all duration-200 cursor-pointer shadow-sm flex items-center gap-1.5 text-xs font-medium"
            title="Switch map cartography style"
          >
            <Layers className="w-3.5 h-3.5 text-[#35E27F]" />
            <span className="hidden sm:inline capitalize text-[#A8B5AE]">
              {mapStyle === 'voyager' ? 'Day Streets' : mapStyle === 'light' ? 'Soft Light' : mapStyle === 'dark' ? 'Dark Minimal' : 'OSM Roads'}
            </span>
          </button>

          {showStyleMenu && (
            <div className="absolute right-0 mt-1.5 w-44 bg-[#0B1A14] backdrop-blur-xl rounded-xl shadow-xl border border-[#1B3B2F] py-1.5 z-40 text-xs font-medium text-[#F5F7F3]">
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#A8B5AE] border-b border-[#1B3B2F]">
                Cartography Mode
              </div>
              <button
                onClick={() => {
                  setMapStyle('dark');
                  setShowStyleMenu(false);
                }}
                className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-[#0F231B] cursor-pointer ${
                  mapStyle === 'dark' ? 'text-[#35E27F] font-bold bg-[#123D2A]/50' : 'text-[#F5F7F3]'
                }`}
              >
                <span>Dark Minimalist</span>
                {mapStyle === 'dark' && <span className="text-[#35E27F] font-bold">✓</span>}
              </button>
              <button
                onClick={() => {
                  setMapStyle('voyager');
                  setShowStyleMenu(false);
                }}
                className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-[#0F231B] cursor-pointer ${
                  mapStyle === 'voyager' ? 'text-[#35E27F] font-bold bg-[#123D2A]/50' : 'text-[#F5F7F3]'
                }`}
              >
                <span>Daylight Streets</span>
                {mapStyle === 'voyager' && <span className="text-[#35E27F] font-bold">✓</span>}
              </button>
              <button
                onClick={() => {
                  setMapStyle('light');
                  setShowStyleMenu(false);
                }}
                className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-[#0F231B] cursor-pointer ${
                  mapStyle === 'light' ? 'text-[#35E27F] font-bold bg-[#123D2A]/50' : 'text-[#F5F7F3]'
                }`}
              >
                <span>Clean Monotone</span>
                {mapStyle === 'light' && <span className="text-[#35E27F] font-bold">✓</span>}
              </button>
              <button
                onClick={() => {
                  setMapStyle('osm');
                  setShowStyleMenu(false);
                }}
                className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-[#0F231B] cursor-pointer ${
                  mapStyle === 'osm' ? 'text-[#35E27F] font-bold bg-[#123D2A]/50' : 'text-[#F5F7F3]'
                }`}
              >
                <span>OpenStreetMap</span>
                {mapStyle === 'osm' && <span className="text-[#35E27F] font-bold">✓</span>}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Right: Zoom In, Zoom Out, Recenter Buttons */}
      <div className="absolute bottom-4 right-4 z-30 flex flex-col gap-1 bg-[#0B1A14]/90 backdrop-blur-md p-1.5 rounded-xl border border-[#1B3B2F] shadow-lg">
        <button
          id="map-zoom-in-btn"
          onClick={() => setZoom((z) => Math.min(17, z + 1))}
          className="p-2 rounded-lg text-[#A8B5AE] hover:text-[#35E27F] hover:bg-[#0F231B] transition-colors cursor-pointer active:scale-95"
          title="Zoom In (+)"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          id="map-zoom-out-btn"
          onClick={() => setZoom((z) => Math.max(11, z - 1))}
          className="p-2 rounded-lg text-[#A8B5AE] hover:text-[#35E27F] hover:bg-[#0F231B] transition-colors cursor-pointer active:scale-95"
          title="Zoom Out (-)"
        >
          <Minus className="w-4 h-4" />
        </button>
        <div className="w-full h-px bg-[#1B3B2F] my-0.5" />
        <button
          id="map-recenter-btn"
          onClick={() => {
            setCenter({ lat: city.lat, lng: city.lng });
            setPanOffset({ x: 0, y: 0 });
            setZoom(city.zoom || 14);
          }}
          className="p-2 rounded-lg text-[#35E27F] hover:bg-[#0F231B] transition-colors cursor-pointer active:scale-95"
          title="Recenter Map (🧭)"
        >
          <Navigation className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
