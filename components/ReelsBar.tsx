'use client';

import React, { useState, useRef, useMemo } from 'react';
import Image from 'next/image';
import {
  Play,
  Flame,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Eye,
  Plus,
  Compass,
  CheckCircle2,
  Share2,
  MapPin,
  Utensils,
  Video,
  Zap,
  Radio,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import {
  Reel,
  ReelCity,
  REELS_DATA,
  getCityReels,
  fetchNewReels,
} from '@/lib/reelsData';
import ReelDetailModal from './ReelDetailModal';
import AddReelModal from './AddReelModal';

interface ReelsBarProps {
  selectedCity: ReelCity;
  onSelectCity?: (city: ReelCity) => void;
  onOpenMap?: () => void;
  onInspectDish?: (restaurant: string, dishName?: string) => void;
  customReels?: Reel[];
  onAddReel?: (reel: Reel) => void;
}

export default function ReelsBar({
  selectedCity,
  onSelectCity,
  onOpenMap,
  onInspectDish,
  customReels = [],
  onAddReel,
}: ReelsBarProps) {
  const [activeModalReel, setActiveModalReel] = useState<Reel | null>(null);
  const [isAddReelOpen, setIsAddReelOpen] = useState(false);
  const [huntedReels, setHuntedReels] = useState<Reel[]>([]);
  const [isHunting, setIsHunting] = useState(false);
  const [copiedSos, setCopiedSos] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Combine default dataset, hunted reels, and UGC user-submitted reels
  const allReels = useMemo(() => {
    return [...customReels, ...huntedReels, ...REELS_DATA];
  }, [customReels, huntedReels]);

  // City reels sorted by type: real first, then fallback-nationwide, then scout-card last
  const displayReels = useMemo(() => {
    return getCityReels(selectedCity, allReels);
  }, [selectedCity, allReels]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 180;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleViewOnMap = (restaurant: string, city: string) => {
    onOpenMap?.();
  };

  const handleViewCleanDish = (restaurant: string, dishName?: string) => {
    onInspectDish?.(restaurant, dishName);
  };

  const triggerDailyHunter = () => {
    setIsHunting(true);
    setTimeout(() => {
      const updated = fetchNewReels(selectedCity, allReels);
      setHuntedReels(updated.filter((r) => !REELS_DATA.some((orig) => orig.id === r.id)));
      setIsHunting(false);
    }, 1200);
  };

  const handleSosComment = (e: React.MouseEvent, city: string) => {
    e.stopPropagation();
    const tag = `SOS ${city}`;
    navigator.clipboard?.writeText(tag);
    setCopiedSos(city);
    setTimeout(() => setCopiedSos(null), 2500);
  };

  return (
    <section
      id="kitchen-reels-section"
      aria-label="Community Kitchen Proof & Sizzle Reels"
      className="w-full space-y-2.5 rounded-[26px] bg-white border border-[#E8DEC8] text-[#231815] p-3.5 sm:p-5 relative overflow-hidden shadow-[0_4px_20px_-4px_rgba(140,100,50,0.06)]"
    >
      {/* Warm Ambient Glow */}
      <div className="absolute -right-16 -top-16 w-56 h-56 bg-[#F5C842]/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-[#C86A1D]/10 rounded-full blur-2xl pointer-events-none" />

      {/* ======================================================================= */}
      {/* SECOND ROW: Section Title, Subtitle, and Reel Controls                  */}
      {/* ======================================================================= */}
      <div className="relative z-10 space-y-1.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          {/* Title & Microcopy */}
          <div className="flex items-start sm:items-center gap-2 sm:gap-2.5">
            <span className="relative flex h-2.5 w-2.5 shrink-0 mt-1 sm:mt-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C86A1D] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C86A1D] shadow-[0_0_8px_rgba(200,106,29,0.6)]" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h2 className="text-sm sm:text-base lg:text-lg font-extrabold text-[#231815] tracking-tight leading-tight">
                  Community Kitchen Proof &amp; Sizzle Reels
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-[#FDF5D9] text-[#8C5D0D] text-[9px] font-bold uppercase tracking-wider border border-[#F4E3A8] shrink-0">
                  {selectedCity}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#6B5E55] font-medium mt-0.5">
                Tap any reel to view real kitchen prep, macros &amp; certified cooking fats
              </p>
            </div>
          </div>

          {/* Right Controls: Daily Hunter + Scroll buttons + Upload Reel */}
          <div className="flex items-center justify-between sm:justify-end gap-1.5 w-full sm:w-auto shrink-0 flex-wrap">
            {/* Daily Hunter Trigger */}
            <button
              onClick={triggerDailyHunter}
              disabled={isHunting}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FAF6EE] hover:bg-[#F7F1E5] text-[#6B5E55] hover:text-[#231815] text-[10px] font-semibold border border-[#E8DEC8] transition-all cursor-pointer active:scale-95 disabled:opacity-50"
              title="Search community hashtags for verified clean reels"
            >
              <Radio className={`w-2.5 h-2.5 text-[#C86A1D] ${isHunting ? 'animate-spin' : ''}`} />
              <span>{isHunting ? 'Hunting...' : 'Community Scout'}</span>
            </button>

            {/* Desktop scroll arrows */}
            <div className="hidden sm:flex items-center gap-0.5 bg-[#FAF6EE] p-0.5 rounded-lg border border-[#E8DEC8]">
              <button
                onClick={() => handleScroll('left')}
                className="p-1 rounded-md text-[#6B5E55] hover:text-[#C86A1D] hover:bg-[#F7F1E5] transition-all cursor-pointer"
                title="Scroll Left"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="p-1 rounded-md text-[#6B5E55] hover:text-[#C86A1D] hover:bg-[#F7F1E5] transition-all cursor-pointer"
                title="Scroll Right"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Upload Reel Button */}
            <button
              id="add-reel-ugc-btn"
              onClick={() => setIsAddReelOpen(true)}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#C86A1D] hover:bg-[#A84E18] text-white text-[11px] font-bold transition-all cursor-pointer active:scale-95 shrink-0 shadow-xs"
              title="Share a clean meal video"
            >
              <Plus className="w-3 h-3 stroke-[2.5]" />
              <span>Upload Reel</span>
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================================= */}
      {/* HORIZONTALLY SCROLLABLE SNAP REEL TRAY (16:9 VERTICAL CARDS - 30% REDUCED) */}
      {/* ======================================================================= */}
      <div
        ref={scrollContainerRef}
        id="reels-horizontal-tray"
        className="relative z-10 flex gap-2.5 sm:gap-3 overflow-x-auto pb-1.5 pt-0.5 snap-x snap-mandatory scrollbar-none -mx-0.5 px-0.5"
        style={{ scrollBehavior: 'smooth' }}
      >
        {displayReels.map((reel) => {
          const isScout = reel.type === 'scout-card';
          const isNationwide = reel.type === 'fallback-nationwide';

          // Format top badge: "56g Protein / 12g Fiber / 549 cal / 3g Sugar"
          const macroBadge =
            reel.protein !== '--'
              ? `${reel.protein}P / ${reel.fiber}F / ${reel.calories}cal / ${reel.sugar}S`
              : 'Community Video Scout';

          if (isScout) {
            return (
              <div
                key={reel.id}
                className="group relative w-[145px] sm:w-[160px] md:w-[170px] aspect-[9/16] shrink-0 rounded-2xl overflow-hidden bg-gradient-to-b from-white via-[#FAF6EE] to-[#F7F1E5] border-2 border-dashed border-[#C86A1D]/40 p-2.5 sm:p-3 flex flex-col justify-between shadow-xs snap-start transition-all duration-200 hover:border-[#C86A1D]"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-1">
                  <span className="px-1.5 py-0.5 rounded-full bg-[#FDF5D9] text-[#8C5D0D] text-[8.5px] font-bold uppercase tracking-wider border border-[#F4E3A8]">
                    Scout Needed
                  </span>
                  <span className="text-[8.5px] font-bold text-[#6B5E55] bg-white px-1.5 py-0.5 rounded-full border border-[#E8DEC8]">
                    Community
                  </span>
                </div>

                {/* Center Call to Action */}
                <div className="my-auto space-y-1.5 text-center px-0.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#FAF6EE] text-[#C86A1D] flex items-center justify-center mx-auto border border-[#E8DEC8] shadow-xs">
                    <Video className="w-4 h-4 sm:w-4.5 sm:h-4.5 animate-pulse text-[#C86A1D]" />
                  </div>
                  <h3 className="text-[11px] sm:text-xs font-extrabold text-[#231815] leading-snug">
                    Scout {selectedCity.split(',')[0]}
                  </h3>
                  <p className="text-[9px] text-[#6B5E55] leading-tight line-clamp-3">
                    {reel.caption_for_app || reel.caption}
                  </p>
                </div>

                {/* Bottom Actions: Upload & Comment SOS */}
                <div className="space-y-1.5 pt-1.5 border-t border-[#E8DEC8]">
                  <button
                    onClick={() => setIsAddReelOpen(true)}
                    className="w-full py-1.5 px-1.5 rounded-lg bg-[#C86A1D] hover:bg-[#A84E18] text-white text-[10px] font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1 shadow-xs"
                  >
                    <Plus className="w-3 h-3 stroke-[2.5]" />
                    <span>Upload Reel</span>
                  </button>

                  <button
                    onClick={(e) => handleSosComment(e, selectedCity)}
                    className="w-full py-1 px-1 rounded-lg bg-white hover:bg-[#FAF6EE] text-[#6B5E55] hover:text-[#231815] text-[9px] font-semibold border border-[#E8DEC8] transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-2.5 h-2.5 text-[#C86A1D]" />
                    <span className="truncate">
                      {copiedSos === selectedCity ? 'Copied!' : `SOS ${selectedCity.split(',')[0]}`}
                    </span>
                  </button>
                </div>
              </div>
            );
          }

          return (
            <div
              key={reel.id}
              onClick={() => setActiveModalReel(reel)}
              className="group relative w-[145px] sm:w-[160px] md:w-[170px] aspect-[9/16] shrink-0 rounded-2xl overflow-hidden bg-[#231815] border border-[#E8DEC8] cursor-pointer snap-start flex flex-col justify-between shadow-md hover:border-[#C86A1D] transition-all duration-200 hover:scale-[1.01]"
            >
              {/* Card Image Thumbnail */}
              {reel.thumbnail ? (
                <Image
                  src={reel.thumbnail}
                  alt={reel.dish_name || reel.restaurant}
                  fill
                  sizes="(max-width: 768px) 145px, 170px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full bg-[#FAF6EE] flex items-center justify-center">
                  <Flame className="w-7 h-7 text-[#C86A1D]" />
                </div>
              )}

              {/* Dark Gradient Overlay for optimal legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/60 group-hover:from-black/90 transition-all pointer-events-none" />

              {/* Card Top: Creator Avatar + Top Macro Badge */}
              <div className="relative z-10 p-1.5 sm:p-2 space-y-1">
                {/* Creator Avatar & Handle */}
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded-full border border-white/20 min-w-0 max-w-[60%] shrink">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#C86A1D] text-white text-[8px] font-bold flex items-center justify-center uppercase shrink-0">
                      {reel.creator_handle.replace('@', '').charAt(0) || 'C'}
                    </div>
                    <span className="text-[8.5px] font-bold text-white truncate min-w-0">
                      {reel.creator_handle}
                    </span>
                  </div>

                  {/* Badges container */}
                  <div className="flex items-center gap-1 shrink-0">
                    {isNationwide && (
                      <span className="px-1.5 py-0.5 rounded-full bg-[#C86A1D] text-white text-[8px] font-extrabold uppercase tracking-wider shrink-0 shadow-xs">
                        Viral
                      </span>
                    )}
                    {reel.price && (
                      <span className="px-1.5 py-0.5 rounded-full bg-[#F5C842] text-[#231815] text-[8px] font-extrabold uppercase tracking-wider shrink-0 shadow-xs">
                        ₹{reel.price}
                      </span>
                    )}
                  </div>
                </div>

                {/* Top Badge: "56gP / 12gF / 549cal / 3gS" */}
                <div className="w-full bg-black/75 backdrop-blur-md px-1.5 py-0.5 rounded-lg border border-white/15 shadow-xs">
                  <span className="text-[8px] sm:text-[8.5px] font-bold text-[#F5C842] leading-tight block tracking-tight truncate">
                    {macroBadge}
                  </span>
                </div>
              </div>

              {/* Center Floating Play Button */}
              <div className="relative z-10 self-center my-auto">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F5C842] text-[#231815] flex items-center justify-center font-bold shadow-[0_0_12px_rgba(245,200,66,0.6)] group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
                </div>
              </div>

              {/* Card Bottom: Dish name + Restaurant + Views + Verified Clean */}
              <div className="relative z-10 p-2 sm:p-2.5 space-y-1 bg-gradient-to-t from-black via-black/80 to-transparent pt-3">
                {/* Views & Verified Clean badge */}
                <div className="flex items-center justify-between text-[8.5px] gap-1">
                  <span className="inline-flex items-center gap-0.5 text-white/80 font-semibold shrink-0">
                    <Eye className="w-2.5 h-2.5 text-[#F5C842] shrink-0" />
                    <span>{reel.views}</span>
                  </span>

                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-[#2D5A34]/90 text-white text-[8px] sm:text-[8.5px] font-bold border border-[#2D5A34] shrink-0">
                    <CheckCircle2 className="w-2 h-2 text-white shrink-0" />
                    <span>Clean</span>
                  </span>
                </div>

                {/* Off-Delivery indicator if why is present */}
                {(reel.why || reel.why_off_delivery) && (
                  <div className="text-[8px] font-bold text-white bg-[#C86A1D]/90 px-1.5 py-0.5 rounded border border-[#C86A1D] truncate">
                    ⚡ {reel.why || reel.why_off_delivery}
                  </div>
                )}

                {/* Dish Name */}
                <h3 className="text-[10.5px] sm:text-[11.5px] font-bold text-[#F5F7F3] leading-snug line-clamp-2 drop-shadow-sm group-hover:text-[#35E27F] transition-colors">
                  {reel.dish_name || reel.caption_for_app}
                </h3>

                {/* Restaurant */}
                <div className="flex items-center justify-between text-[9px] text-[#A8B5AE] pt-0.5">
                  <span className="font-bold text-[#b6f7c1] truncate max-w-[85px] sm:max-w-[100px]">
                    {reel.restaurant}
                  </span>
                  <span className="text-[8px] sm:text-[8.5px] text-[#A8B5AE] shrink-0 font-medium">
                    Watch &rarr;
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section Sub-footer indicator */}
      <div className="relative z-10 pt-0.5 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[10px] sm:text-[11px] text-[#A8B5AE]">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#35E27F]" />
          <span>
            Showing <strong className="text-[#F5F7F3]">{displayReels.length} reels</strong> &bull; {selectedCity} &bull; 100% Verified Clean
          </span>
        </div>

        <button
          onClick={() => setIsAddReelOpen(true)}
          className="text-[10px] sm:text-[11px] font-bold text-[#35E27F] hover:underline cursor-pointer"
        >
          Film yourself eating clean &amp; share with community &rarr;
        </button>
      </div>

      {/* Modal: Embedded Instagram / Facebook Reel Preview */}
      <ReelDetailModal
        reel={activeModalReel}
        onClose={() => setActiveModalReel(null)}
        onViewOnMap={handleViewOnMap}
        onViewCleanDish={handleViewCleanDish}
      />

      {/* Modal: Add Reel (Creator UGC) */}
      <AddReelModal
        isOpen={isAddReelOpen}
        onClose={() => setIsAddReelOpen(false)}
        onAddReel={(newReel) => {
          onAddReel?.(newReel);
          setActiveModalReel(newReel);
        }}
        defaultCity={selectedCity}
      />
    </section>
  );
}
