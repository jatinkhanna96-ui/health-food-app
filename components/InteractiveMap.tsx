'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Dish, CityLocation } from '@/lib/mockData';
import {
  Plus,
  Minus,
  Navigation,
  MapPin,
  Flame,
  ShieldCheck,
  Star,
  Crosshair,
} from 'lucide-react';

interface InteractiveMapProps {
  dishes: Dish[];
  selectedDish: Dish | null;
  onSelectDish: (dish: Dish) => void;
  city: CityLocation;
  radiusMiles?: number;
  isRadarScanning?: boolean;
}

export default function InteractiveMap({
  dishes,
  selectedDish,
  onSelectDish,
  city,
  radiusMiles = 5,
  isRadarScanning = false,
}: InteractiveMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredDish, setHoveredDish] = useState<Dish | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 400, height: 600 });
  const [radarAngle, setRadarAngle] = useState(0);

  // Observe container dimensions for drawer slide animations
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
          setContainerSize({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
        }
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Reset viewport when city changes
  useEffect(() => {
    setOffset({ x: 0, y: 0 });
    setZoom(1);
  }, [city]);

  // Radar scanning animation
  useEffect(() => {
    if (!isRadarScanning) return;
    let animId: number;
    const animate = () => {
      setRadarAngle((prev) => (prev + 0.06) % (Math.PI * 2));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isRadarScanning]);

  // Convert lat/lng to canvas x/y relative to city center
  const getCoordinates = useCallback(
    (lat: number, lng: number, width: number, height: number) => {
      const scale = 14000 * zoom;
      const x = width / 2 + (lng - city.lng) * scale + offset.x;
      const y = height / 2 - (lat - city.lat) * scale + offset.y;
      return { x, y };
    },
    [city.lat, city.lng, zoom, offset.x, offset.y]
  );

  // Render Map Canvas with High-DPI support
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const width = containerSize.width || 400;
    const height = containerSize.height || 600;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Clear background with warm cartographic canvas
    ctx.fillStyle = '#F5F2EB';
    ctx.fillRect(0, 0, width, height);

    // Draw stylized grid roads and city blocks
    ctx.strokeStyle = 'rgba(226, 219, 206, 0.9)';
    ctx.lineWidth = 1;

    const gridSize = 48 * zoom;
    const startX = (offset.x % gridSize) - gridSize;
    const startY = (offset.y % gridSize) - gridSize;

    for (let x = startX; x < width + gridSize; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = startY; y < height + gridSize; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw secondary arterial road lines
    ctx.strokeStyle = 'rgba(210, 200, 185, 0.85)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, height * 0.5 + offset.y * 0.4);
    ctx.lineTo(width, height * 0.5 + offset.y * 0.4);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width * 0.5 + offset.x * 0.4, 0);
    ctx.lineTo(width * 0.5 + offset.x * 0.4, height);
    ctx.stroke();

    // Draw stylized river / waterway curve
    ctx.strokeStyle = 'rgba(186, 218, 235, 0.6)';
    ctx.lineWidth = 24 * zoom;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(0, height * 0.45 + offset.y * 0.5);
    ctx.bezierCurveTo(
      width * 0.35 + offset.x * 0.3,
      height * 0.35 + offset.y * 0.5,
      width * 0.65 + offset.x * 0.3,
      height * 0.65 + offset.y * 0.5,
      width,
      height * 0.55 + offset.y * 0.5
    );
    ctx.stroke();

    // Draw City Center Indicator
    const centerCoord = getCoordinates(city.lat, city.lng, width, height);

    // Draw Radius Range Ring (Vicinity Boundary)
    const radiusPixels = radiusMiles * 28 * zoom;
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerCoord.x, centerCoord.y, radiusPixels, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 6]);
    ctx.stroke();
    ctx.fillStyle = 'rgba(16, 185, 129, 0.04)';
    ctx.fill();
    ctx.restore();

    // Radar scan sweep beam
    if (isRadarScanning) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerCoord.x, centerCoord.y);
      ctx.arc(centerCoord.x, centerCoord.y, radiusPixels * 1.2, radarAngle - 0.4, radarAngle);
      ctx.closePath();
      const gradient = ctx.createRadialGradient(
        centerCoord.x,
        centerCoord.y,
        0,
        centerCoord.x,
        centerCoord.y,
        radiusPixels * 1.2
      );
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.35)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
    }

    // City Center Beacon
    ctx.beginPath();
    ctx.arc(centerCoord.x, centerCoord.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#059669';
    ctx.fill();

    ctx.fillStyle = '#047857';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${city.name.toUpperCase()} HUB (${radiusMiles}mi)`, centerCoord.x, centerCoord.y - 10);

    // Draw dishes pins
    dishes.forEach((dish) => {
      const { x, y } = getCoordinates(dish.coordinates.lat, dish.coordinates.lng, width, height);
      const isSelected = selectedDish?.id === dish.id;
      const isHovered = hoveredDish?.id === dish.id;

      // Pulse ring for selected / hovered dish
      if (isSelected || isHovered) {
        ctx.beginPath();
        ctx.arc(x, y, 24, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? 'rgba(16, 185, 129, 0.25)' : 'rgba(20, 184, 166, 0.2)';
        ctx.fill();
        ctx.strokeStyle = isSelected ? '#10B981' : '#14B8A6';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Outer pin circle
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fillStyle = isSelected ? '#10B981' : '#064E3B';
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Inner protein text
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${dish.protein}g`, x, y);

      // Label under pin
      ctx.fillStyle = isSelected ? '#047857' : '#44403C';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(dish.restaurant, x, y + 22);
    });
  }, [
    dishes,
    selectedDish,
    hoveredDish,
    zoom,
    offset,
    city,
    radiusMiles,
    isRadarScanning,
    radarAngle,
    containerSize,
    getCoordinates,
  ]);


  // Handle Mouse Drag & Pan
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Check hit test for pins
    let found: Dish | null = null;
    for (const dish of dishes) {
      const { x, y } = getCoordinates(
        dish.coordinates.lat,
        dish.coordinates.lng,
        rect.width,
        rect.height
      );
      const dist = Math.hypot(mouseX - x, mouseY - y);
      if (dist < 20) {
        found = dish;
        break;
      }
    }
    setHoveredDish(found);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    for (const dish of dishes) {
      const { x, y } = getCoordinates(
        dish.coordinates.lat,
        dish.coordinates.lng,
        rect.width,
        rect.height
      );
      const dist = Math.hypot(mouseX - x, mouseY - y);
      if (dist < 22) {
        onSelectDish(dish);
        break;
      }
    }
  };

  // Touch Handlers for Mobile Pan & Tap
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({ x: touch.clientX - offset.x, y: touch.clientY - offset.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      const touch = e.touches[0];
      setOffset({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);
    if (e.changedTouches.length === 1) {
      const touch = e.changedTouches[0];
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const touchX = touch.clientX - rect.left;
      const touchY = touch.clientY - rect.top;

      for (const dish of dishes) {
        const { x, y } = getCoordinates(
          dish.coordinates.lat,
          dish.coordinates.lng,
          rect.width,
          rect.height
        );
        const dist = Math.hypot(touchX - x, touchY - y);
        if (dist < 26) {
          onSelectDish(dish);
          break;
        }
      }
    }
  };

  // Wheel Zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom((z) => Math.min(z * 1.15, 3.0));
    } else {
      setZoom((z) => Math.max(z * 0.88, 0.4));
    }
  };

  return (
    <div
      ref={containerRef}
      id="interactive-map-wrapper"
      className="relative w-full h-full min-h-[340px] bg-[#F5F2EB] overflow-hidden select-none touch-none"
    >
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        className={`w-full h-full block ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      />

      {/* Map Floating Zoom & Recenter Controls */}
      <div className="absolute bottom-5 right-5 z-20 flex flex-col gap-2 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl border border-stone-200/90 shadow-md">
        <button
          id="map-zoom-in-btn"
          onClick={() => setZoom((z) => Math.min(z * 1.25, 3.0))}
          className="p-2 rounded-xl text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors cursor-pointer"
          title="Zoom In"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          id="map-zoom-out-btn"
          onClick={() => setZoom((z) => Math.max(z * 0.8, 0.4))}
          className="p-2 rounded-xl text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors cursor-pointer"
          title="Zoom Out"
        >
          <Minus className="w-4 h-4" />
        </button>
        <button
          id="map-recenter-btn"
          onClick={() => {
            setOffset({ x: 0, y: 0 });
            setZoom(1);
          }}
          className="p-2 rounded-xl text-emerald-600 hover:bg-emerald-50 transition-colors cursor-pointer"
          title="Recenter City Zone"
        >
          <Navigation className="w-4 h-4" />
        </button>
      </div>

      {/* Hover Dish Tooltip */}
      {hoveredDish && (
        <div className="absolute top-5 left-5 z-20 p-3.5 rounded-2xl bg-white/95 border border-stone-200 text-stone-900 shadow-xl backdrop-blur-md max-w-xs space-y-1.5 pointer-events-none">
          <div className="flex items-center justify-between gap-2">
            <span className="font-extrabold text-xs text-stone-900 truncate">
              {hoveredDish.name}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
              {hoveredDish.protein}g Protein
            </span>
          </div>
          <p className="text-[11px] text-stone-500 font-semibold">
            {hoveredDish.restaurant} • {hoveredDish.cookingFat}
          </p>
        </div>
      )}
    </div>
  );
}


