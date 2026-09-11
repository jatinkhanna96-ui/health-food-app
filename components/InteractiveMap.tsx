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
  ChevronLeft,
  Zap,
  ListFilter,
  ExternalLink,
  X,
  Flame,
  Info,
  Maximize2,
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
  
  if (style === 'dark') {
    // CartoDB Dark Matter
    return `https://${s}.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png`;
  }
  if (style === 'light') {
    // CartoDB Positron - clean monotone
    return `https://${s}.basemaps.cartocdn.com/light_all/${z}/${x}/${y}.png`;
  }
  // Default and 'voyager' / 'osm':
  // Use CartoDB Voyager raster tiles. This is open, fast, compliant with web usage policies,
  // and completely avoids OpenStreetMap volunteer-server blocking errors.
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
  const carouselScrollRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 500, height: 500 });
  const [zoom, setZoom] = useState(14);
  const [center, setCenter] = useState({ lat: city.lat, lng: city.lng });
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredDish, setHoveredDish] = useState<Dish | null>(null);

  // CartoDB Voyager tile cartography: high performance, open web policy, zero block warnings
  const [mapStyle] = useState<MapStyle>('voyager');
  const [radarAngle, setRadarAngle] = useState(0);
  const [showLegend, setShowLegend] = useState(false); // Closed by default to keep map clean and uncluttered

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

  // Update center and default zoom when city or radius changes
  useEffect(() => {
    setCenter({ lat: city.lat, lng: city.lng });
    setPanOffset({ x: 0, y: 0 });

    // Choose appropriate zoom based on search radius
    let targetZoom = 13.5;
    if (radiusMiles <= 1) {
      targetZoom = 14.5;
    } else if (radiusMiles <= 3) {
      targetZoom = 13.5;
    } else if (radiusMiles <= 5) {
      targetZoom = 12.5;
    } else {
      targetZoom = 11.5;
    }
    setZoom(targetZoom);
    setHoveredDish(null);
  }, [city.lat, city.lng, radiusMiles]);

  // Scroll active chip into view in bottom quick-select carousel
  useEffect(() => {
    if (selectedDish && carouselScrollRef.current) {
      const chipEl = document.getElementById(`map-dish-chip-${selectedDish.id}`);
      if (chipEl) {
        chipEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [selectedDish]);

  // Animate Radar Beam Sweep when scanning
  useEffect(() => {
    if (!isRadarScanning) return;
    let animationFrameId: number;
    const animate = () => {
      setRadarAngle((prev) => (prev + 0.045) % (Math.PI * 2));
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isRadarScanning]);

  // Center on selected dish when selected
  useEffect(() => {
    if (selectedDish && selectedDish.city === city.name) {
      setCenter({
        lat: selectedDish.coordinates.lat,
        lng: selectedDish.coordinates.lng,
      });
      setPanOffset({ x: 0, y: 0 });
    }
  }, [selectedDish, city.name]);

  // Pan commit helper
  const commitPan = useCallback(
    (currentOffset: { x: number; y: number }) => {
      if (currentOffset.x === 0 && currentOffset.y === 0) return;
      const Z = Math.round(zoom);
      const cPixelX = lngToTileX(center.lng, Z) * 256;
      const cPixelY = latToTileY(center.lat, Z) * 256;

      const newCenterPixelX = cPixelX - currentOffset.x;
      const newCenterPixelY = cPixelY - currentOffset.y;

      const newLng = pixelToLng(newCenterPixelX, Z);
      const newLat = pixelToLat(newCenterPixelY, Z);

      setCenter({ lat: newLat, lng: newLng });
      setPanOffset({ x: 0, y: 0 });
    },
    [center, zoom]
  );

  // Helper to check if event target is an interactive child
  const isInteractiveTarget = (target: EventTarget | null) => {
    if (!(target instanceof HTMLElement)) return false;
    return (
      target.closest('button') !== null ||
      target.closest('a') !== null ||
      target.closest('#interactive-map-dish-popover') !== null ||
      target.closest('#map-bottom-quick-dish-bar') !== null
    );
  };

  // Drag tracking for distinguishing simple map clicks from pan drags
  const dragStartClientPos = useRef<{ x: number; y: number } | null>(null);
  const touchStartClientPos = useRef<{ x: number; y: number } | null>(null);

  // Mouse Handlers for Desktop Pan
  const handleMouseDown = (e: React.MouseEvent) => {
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

    const tiles: { key: string; url: string; left: number; top: number; z: number; x: number; y: number }[] = [];

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
          z: Z,
          x: wrappedX,
          y: ty,
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

  // De-cluttering & collision separation:
  // When dishes are very close to each other on screen (< 38px), fan them out in a clean radial arc
  // so no two markers ever overlap or obscure each other.
  const positionedDishes = useMemo(() => {
    const rawList = dishes.map((dish, idx) => {
      const coords = getScreenCoords(dish.coordinates.lat, dish.coordinates.lng);
      return {
        dish,
        displayIdx: idx + 1,
        rawX: coords.x,
        rawY: coords.y,
      };
    });

    const CLUSTER_PX = 38;
    const visited = new Set<string>();
    const clusters: Array<typeof rawList> = [];

    for (let i = 0; i < rawList.length; i++) {
      const item = rawList[i];
      if (visited.has(item.dish.id)) continue;

      const group = [item];
      visited.add(item.dish.id);

      for (let j = i + 1; j < rawList.length; j++) {
        const other = rawList[j];
        if (visited.has(other.dish.id)) continue;
        const dist = Math.hypot(item.rawX - other.rawX, item.rawY - other.rawY);
        if (dist < CLUSTER_PX) {
          group.push(other);
          visited.add(other.dish.id);
        }
      }
      clusters.push(group);
    }

    const output: Array<{
      dish: Dish;
      displayIdx: number;
      x: number;
      y: number;
      isClustered: boolean;
    }> = [];

    for (const group of clusters) {
      if (group.length === 1) {
        output.push({
          dish: group[0].dish,
          displayIdx: group[0].displayIdx,
          x: group[0].rawX,
          y: group[0].rawY,
          isClustered: false,
        });
      } else {
        const N = group.length;
        const radius = Math.min(42, 22 + N * 3.5);
        group.forEach((item, k) => {
          const angle = (k / N) * (Math.PI * 2) - Math.PI / 2;
          output.push({
            dish: item.dish,
            displayIdx: item.displayIdx,
            x: item.rawX + Math.cos(angle) * radius,
            y: item.rawY + Math.sin(angle) * radius,
            isClustered: true,
          });
        });
      }
    }

    return output;
  }, [dishes, getScreenCoords]);

  // Screen coords for selected dish (for popover positioning)
  const selectedDishCoords = useMemo(() => {
    if (!selectedDish || selectedDish.city !== city.name) return null;
    const found = positionedDishes.find((p) => p.dish.id === selectedDish.id);
    if (found) {
      return { x: found.x, y: found.y };
    }
    return getScreenCoords(selectedDish.coordinates.lat, selectedDish.coordinates.lng);
  }, [selectedDish, positionedDishes, city.name, getScreenCoords]);

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

  // Fit all pins neatly in view
  const handleFitAllDishes = useCallback(() => {
    if (dishes.length === 0) {
      setCenter({ lat: city.lat, lng: city.lng });
      setPanOffset({ x: 0, y: 0 });
      setZoom(14);
      return;
    }
    const lats = dishes.map((d) => d.coordinates.lat);
    const lngs = dishes.map((d) => d.coordinates.lng);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);

    const midLat = (minLat + maxLat) / 2;
    const midLng = (minLng + maxLng) / 2;

    const latSpan = Math.max(0.008, maxLat - minLat);
    const lngSpan = Math.max(0.008, maxLng - minLng);

    const maxSpan = Math.max(latSpan, lngSpan);
    let fitZoom = Math.floor(Math.log2(360 / maxSpan) - 2.5);
    fitZoom = Math.max(12, Math.min(16, fitZoom));

    setCenter({ lat: midLat, lng: midLng });
    setPanOffset({ x: 0, y: 0 });
    setZoom(fitZoom);
  }, [dishes, city.lat, city.lng]);

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
      {/* 1. TILE LAYER (CARTO VOYAGER, ZERO BLOCKS, COMPLIANT WITH TILE POLICY)  */}
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
            crossOrigin="anonymous"
            draggable={false}
            className="absolute select-none pointer-events-none"
            style={{
              left: `${tile.left}px`,
              top: `${tile.top}px`,
              width: '256px',
              height: '256px',
            }}
            onError={(e) => {
              const target = e.currentTarget;
              const fallback = `https://basemaps.cartocdn.com/rastertiles/voyager/${tile.z}/${tile.x}/${tile.y}.png`;
              if (target.src !== fallback) {
                target.src = fallback;
              }
            }}
          />
        ))}
      </div>

      {/* Subtle border framing */}
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
      {/* 4. CUSTOM PIN MARKERS (CLEAN, COMPACT & COLLISION-FREE)               */}
      {/* ===================================================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {positionedDishes.map(({ dish, displayIdx, x, y }) => {
          const isSelected = selectedDish?.id === dish.id;
          const isHovered = hoveredDish?.id === dish.id;

          // Don't render if far off-screen
          if (x < -140 || x > containerSize.width + 140 || y < -140 || y > containerSize.height + 140) {
            return null;
          }

          return (
            <div
              key={dish.id}
              className={`absolute -translate-x-1/2 -translate-y-full pointer-events-auto cursor-pointer group transition-all duration-200 ${
                isSelected
                  ? 'scale-110 z-40'
                  : isHovered
                  ? 'scale-105 z-35'
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
              {/* Floating Hover Tooltip: Dish Name & Restaurant Preview */}
              {isHovered && !isSelected && (
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-xl bg-[#1E293B] text-white text-xs shadow-xl border border-slate-700 pointer-events-none z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="font-bold flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-500 text-slate-950 font-black text-[9px] flex items-center justify-center">
                      {displayIdx}
                    </span>
                    <span className="truncate max-w-[200px]">{dish.name}</span>
                  </div>
                  <div className="text-[10px] text-slate-300 flex items-center gap-1 mt-0.5 font-medium">
                    <span className="truncate max-w-[140px]">{dish.restaurant}</span>
                    <span>&bull;</span>
                    <span className="text-emerald-400 font-bold">{dish.protein}g protein</span>
                    <span>&bull;</span>
                    <span className="text-amber-300 font-bold">{formatPrice(dish.price, dish.city, dish.id)}</span>
                  </div>
                  {/* Arrow pointing down */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1E293B]" />
                </div>
              )}

              {/* Pin Capsule */}
              <div className="flex flex-col items-center filter drop-shadow-md">
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 shadow-md border ${
                    isSelected
                      ? 'bg-[#059669] text-white border-[#047857] ring-4 ring-[#10B981]/40 shadow-lg scale-105'
                      : isHovered
                      ? 'bg-[#064E3B] text-white border-[#059669] shadow-lg'
                      : 'bg-white text-slate-900 border-[#059669]/70 hover:border-[#059669]'
                  }`}
                >
                  {/* Index badge #1, #2... matching list & carousel */}
                  <span
                    className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black shrink-0 ${
                      isSelected || isHovered
                        ? 'bg-white text-[#064E3B]'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {displayIdx}
                  </span>

                  {/* Price */}
                  <span className="font-extrabold whitespace-nowrap text-[11px]">
                    {formatPrice(dish.price, dish.city, dish.id)}
                  </span>

                  {/* Protein Tag */}
                  <span
                    className={`text-[10px] font-semibold ${
                      isSelected || isHovered ? 'text-emerald-100' : 'text-emerald-700'
                    }`}
                  >
                    {dish.protein}g
                  </span>
                </div>

                {/* Only when selected: Show concise restaurant name tag */}
                {isSelected && (
                  <div className="mt-0.5 px-2 py-0.5 rounded-md text-[10px] font-bold tracking-tight whitespace-nowrap shadow-sm border bg-[#064E3B] text-white border-[#10B981] animate-in fade-in zoom-in-95 duration-150">
                    <span className="truncate max-w-[160px] inline-block align-bottom">{dish.restaurant}</span>
                  </div>
                )}

                {/* Pointer Needle & Anchor Dot */}
                <div className="relative flex flex-col items-center mt-0.5">
                  <div
                    className={`w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] ${
                      isSelected
                        ? 'border-t-[#059669]'
                        : isHovered
                        ? 'border-t-[#064E3B]'
                        : 'border-t-[#059669]'
                    }`}
                  />
                  <div className="relative mt-0.5 flex items-center justify-center">
                    {isSelected && (
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#10B981] opacity-75" />
                    )}
                    <span
                      className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                        isSelected
                          ? 'bg-[#10B981] ring-2 ring-white scale-125'
                          : 'bg-[#059669]'
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
            top: `${Math.max(50, Math.min(containerSize.height - 240, selectedDishCoords.y - 120))}px`,
          }}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="w-[290px] sm:w-[320px] rounded-2xl shadow-xl p-3 border border-[#E8DEC8] bg-white/95 backdrop-blur-md text-[#231815] animate-in zoom-in-95 fade-in duration-200"
          >
            {/* Header: Close Button & Restaurant */}
            <div className="flex items-start justify-between gap-2 pb-2 border-b border-[#E8DEC8]">
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
                    className="text-[11px] font-bold uppercase tracking-wider text-[#C86A1D] hover:text-[#A95513] truncate flex items-center gap-1 cursor-pointer transition-colors"
                    title={`View ${selectedDish.restaurant} on Google Maps`}
                  >
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="truncate">{selectedDish.restaurant}</span>
                  </a>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#FAF6EE] text-[#6B5E55] border border-[#E8DEC8] font-semibold shrink-0">
                    ⭐ {selectedDish.rating}
                  </span>
                </div>
                {selectedDish.restaurantAddress && (
                  <p className="text-[10px] text-[#6B5E55] truncate mt-0.5">
                    {selectedDish.restaurantAddress}
                  </p>
                )}
                <h4 className="font-serif font-bold text-sm truncate leading-snug mt-0.5 text-[#231815]">
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
                className="p-1.5 rounded-lg hover:bg-[#FAF6EE] text-[#6B5E55] hover:text-[#231815] transition-colors cursor-pointer"
                title="Dismiss Callout"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail + Highlights Row */}
            <div className="flex gap-2.5 mt-2.5 items-center">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 relative border border-[#E8DEC8] bg-[#FAF6EE]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="w-full h-full object-cover"
                />
                {selectedDish.isSeedOilFree && (
                  <span className="absolute bottom-0 inset-x-0 bg-[#EBF4ED] text-[#2D5A34] text-[7px] font-bold uppercase tracking-wider text-center py-0.5 border-t border-[#C5DEC9]">
                    No Seed Oils
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1 space-y-1">
                {/* Macros Chips */}
                <div className="flex items-center gap-1.5 flex-wrap text-[11px]">
                  <span className="font-bold text-[#2D5A34]">
                    {selectedDish.protein}g Pro
                  </span>
                  <span className="text-[#E8DEC8]">&bull;</span>
                  <span className="text-[#6B5E55] font-medium">
                    {selectedDish.calories} kcal
                  </span>
                  <span className="text-[#E8DEC8]">&bull;</span>
                  <span className="font-black text-[#231815]">
                    {formatPrice(selectedDish.price, selectedDish.city, selectedDish.id)}
                  </span>
                </div>

                {/* Cooking Fat Badge */}
                <div className="text-[10px] text-[#6B5E55] font-medium truncate flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#2D5A34] shrink-0" />
                  <span className="truncate">Cooked in: {selectedDish.cookingFat}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-3 pt-2.5 border-t border-[#E8DEC8] flex items-center gap-2">
              {onViewDetail && (
                <button
                  id="map-callout-view-details-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewDetail(selectedDish);
                  }}
                  className="flex-1 py-1.5 px-2.5 rounded-xl bg-[#C86A1D] hover:bg-[#A95513] text-white border border-[#C86A1D] text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-90" />
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
                className="py-1.5 px-3 rounded-xl bg-white hover:bg-[#FAF6EE] text-[#6B5E55] hover:text-[#231815] border border-[#E8DEC8] text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer shadow-xs"
                title={`Get directions to ${selectedDish.restaurant} on Google Maps`}
              >
                <Navigation className="w-3.5 h-3.5 fill-current shrink-0 text-[#2D5A34]" />
                <span>Directions</span>
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

        {/* Top Right: List View Toggle */}
        <div className="pointer-events-auto flex items-center gap-1.5">
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
      {/* 7. BOTTOM QUICK-SELECT DISH CAROUSEL (EASY SELECTION)                 */}
      {/* ===================================================================== */}
      {dishes.length > 0 && (
        <div
          id="map-bottom-quick-dish-bar"
          className="absolute bottom-3 left-14 right-14 sm:left-24 sm:right-20 z-30 pointer-events-auto flex items-center gap-1.5"
        >
          {/* Scroll Left / Prev */}
          <button
            id="map-prev-dish-btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const curIdx = selectedDish ? dishes.findIndex((d) => d.id === selectedDish.id) : 0;
              const prevIdx = (curIdx - 1 + dishes.length) % dishes.length;
              const prevDish = dishes[prevIdx];
              onSelectDish(prevDish);
              setCenter({ lat: prevDish.coordinates.lat, lng: prevDish.coordinates.lng });
              setPanOffset({ x: 0, y: 0 });
            }}
            className="p-1.5 rounded-xl bg-white/95 text-slate-700 shadow-md border border-slate-200 hover:bg-emerald-50 hover:text-emerald-700 transition-colors shrink-0 cursor-pointer active:scale-95"
            title="Previous Dish"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Horizontal Chip Carousel */}
          <div
            ref={carouselScrollRef}
            className="flex-1 overflow-x-auto no-scrollbar py-0.5 flex items-center gap-1.5 scroll-smooth"
          >
            {dishes.map((dish, i) => {
              const isSel = selectedDish?.id === dish.id;
              return (
                <button
                  key={dish.id}
                  id={`map-dish-chip-${dish.id}`}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isSel) {
                      onSelectDish(null);
                    } else {
                      onSelectDish(dish);
                      setCenter({ lat: dish.coordinates.lat, lng: dish.coordinates.lng });
                      setPanOffset({ x: 0, y: 0 });
                    }
                  }}
                  className={`shrink-0 px-2.5 py-1.5 rounded-xl text-xs font-semibold shadow-xs border transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-95 ${
                    isSel
                      ? 'bg-[#059669] text-white border-[#059669] ring-2 ring-[#10B981]/50 shadow-md'
                      : 'bg-white/95 text-slate-800 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/60'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
                      isSel ? 'bg-white text-[#064E3B]' : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="font-bold truncate max-w-[110px] sm:max-w-[150px]">
                    {dish.name}
                  </span>
                  <span
                    className={`text-[11px] font-extrabold ${
                      isSel ? 'text-emerald-100' : 'text-emerald-700'
                    }`}
                  >
                    {formatPrice(dish.price, dish.city, dish.id)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Scroll Right / Next */}
          <button
            id="map-next-dish-btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const curIdx = selectedDish ? dishes.findIndex((d) => d.id === selectedDish.id) : -1;
              const nextIdx = (curIdx + 1) % dishes.length;
              const nextDish = dishes[nextIdx];
              onSelectDish(nextDish);
              setCenter({ lat: nextDish.coordinates.lat, lng: nextDish.coordinates.lng });
              setPanOffset({ x: 0, y: 0 });
            }}
            className="p-1.5 rounded-xl bg-white/95 text-slate-700 shadow-md border border-slate-200 hover:bg-emerald-50 hover:text-emerald-700 transition-colors shrink-0 cursor-pointer active:scale-95"
            title="Next Dish"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 8. BOTTOM MAP CONTROLS & COMPACT LEGEND                               */}
      {/* ===================================================================== */}
      {/* Bottom Left: Visual Map Legend / Helper Guide */}
      <div className="absolute bottom-3 left-3 z-30 pointer-events-auto">
        {showLegend ? (
          <div
            className={`p-2.5 rounded-2xl shadow-lg border text-xs backdrop-blur-md max-w-[240px] animate-in fade-in duration-150 ${
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
                <span>Verified healthy dish</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full border-2 border-dashed border-emerald-600 shrink-0" />
                <span>{radiusMiles}-mile vicinity perimeter</span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-[#A8B5AE] pt-0.5">
                💡 <em>Click any pin or bottom card to inspect nutrition &amp; directions</em>
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowLegend(true)}
            className="p-2 rounded-xl bg-white/95 dark:bg-[#0B1A14]/95 text-slate-700 dark:text-[#A8B5AE] border border-slate-200 dark:border-[#1B3B2F] text-xs font-semibold shadow-md flex items-center gap-1.5 cursor-pointer hover:text-emerald-600"
            title="Show Map Legend"
          >
            <Info className="w-3.5 h-3.5 text-emerald-600" />
          </button>
        )}
      </div>

      {/* Bottom Right: Zoom In, Zoom Out, Fit Bounds, Recenter Navigation Buttons */}
      <div className="absolute bottom-3 right-3 z-30 flex flex-col gap-1 bg-white/95 backdrop-blur-md p-1 rounded-xl border border-slate-200 shadow-lg">
        <button
          id="map-zoom-in-btn"
          type="button"
          onClick={() => setZoom((z) => Math.min(17, z + 1))}
          className="p-2 rounded-lg text-slate-700 hover:text-emerald-600 hover:bg-slate-100 transition-colors cursor-pointer active:scale-95"
          title="Zoom In (+)"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          id="map-zoom-out-btn"
          type="button"
          onClick={() => setZoom((z) => Math.max(11, z - 1))}
          className="p-2 rounded-lg text-slate-700 hover:text-emerald-600 hover:bg-slate-100 transition-colors cursor-pointer active:scale-95"
          title="Zoom Out (-)"
        >
          <Minus className="w-4 h-4" />
        </button>
        <button
          id="map-fit-bounds-btn"
          type="button"
          onClick={handleFitAllDishes}
          className="p-2 rounded-lg text-slate-700 hover:text-emerald-600 hover:bg-slate-100 transition-colors cursor-pointer active:scale-95"
          title="Fit All Dishes on Map"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
        <div className="w-full h-px bg-slate-200 my-0.5" />
        <button
          id="map-recenter-btn"
          type="button"
          onClick={() => {
            setCenter({ lat: city.lat, lng: city.lng });
            setPanOffset({ x: 0, y: 0 });
            setZoom(city.zoom || 14);
          }}
          className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors cursor-pointer active:scale-95"
          title={`Recenter Map to ${city.name}`}
        >
          <Navigation className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
