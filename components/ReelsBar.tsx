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
      aria-label="Kitchen Proof & Sizzle Reels Live Proof"
      className="w-full space-y-2.5 rounded-2xl bg-[#0a2e1f] border border-[#1B3B2F] text-[#F5F7F3] p-3 sm:p-4 lg:p-5 relative overflow-hidden shadow-md backdrop-blur-md"
    >
      {/* Background Ambience Glow */}
      <div className="absolute -right-16 -top-16 w-56 h-56 bg-[#35E27F]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-[#123D2A]/40 rounded-full blur-2xl pointer-events-none" />

      {/* ======================================================================= */}
      {/* SECOND ROW: Section Title, Subtitle, and Reel Controls                  */}
      {/* ======================================================================= */}
      <div className="relative z-10 space-y-1.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          {/* Title & Microcopy */}
          <div className="flex items-start sm:items-center gap-2 sm:gap-2.5">
            <span className="relative flex h-2.5 w-2.5 shrink-0 mt-1 sm:mt-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35E27F] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#35E27F] shadow-[0_0_8px_rgba(53,226,127,0.9)]" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h2 className="text-sm sm:text-base lg:text-lg font-extrabold text-[#F5F7F3] tracking-tight leading-tight">
                  Kitchen Proof &amp; Sizzle Reels Live Proof
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-[#123D2A] text-[#b6f7c1] text-[9px] font-bold uppercase tracking-wider border border-[#1B3B2F] shrink-0">
                  {selectedCity}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#A8B5AE] font-medium mt-0.5">
                Tap any reel to view macros / certified cooking fats
              </p>
            </div>
          </div>

          {/* Right Controls: Daily Hunter + Scroll buttons + Upload Reel */}
          <div className="flex items-center justify-between sm:justify-end gap-1.5 w-full sm:w-auto shrink-0 flex-wrap">
            {/* Daily Hunter Trigger */}
            <button
              onClick={triggerDailyHunter}
              disabled={isHunting}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0F231B] hover:bg-[#123D2A] text-[#b6f7c1] text-[10px] font-semibold border border-[#1B3B2F] transition-all cursor-pointer active:scale-95 disabled:opacity-50"
              title="Search Instagram hashtags #highprotein #highfiber for verified reels"
            >
              <Radio className={`w-2.5 h-2.5 text-[#35E27F] ${isHunting ? 'animate-spin' : ''}`} />
              <span>{isHunting ? 'Hunting...' : 'Daily Hunter'}</span>
            </button>

            {/* Desktop scroll arrows */}
            <div className="hidden sm:flex items-center gap-0.5 bg-[#0F231B] p-0.5 rounded-lg border border-[#1B3B2F]">
              <button
                onClick={() => handleScroll('left')}
                className="p-1 rounded-md text-[#A8B5AE] hover:text-[#35E27F] hover:bg-[#123D2A] transition-all cursor-pointer"
                title="Scroll Left"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="p-1 rounded-md text-[#A8B5AE] hover:text-[#35E27F] hover:bg-[#123D2A] transition-all cursor-pointer"
                title="Scroll Right"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Upload Reel Button */}
            <button
              id="add-reel-ugc-btn"
              onClick={() => setIsAddReelOpen(true)}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-[11px] font-bold transition-all cursor-pointer active:scale-95 shrink-0 shadow-xs"
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
                className="group relative w-[145px] sm:w-[160px] md:w-[170px] aspect-[9/16] shrink-0 rounded-xl overflow-hidden bg-gradient-to-b from-[#0F231B] via-[#0B1A14] to-[#07130F] border-2 border-dashed border-[#35E27F]/40 p-2.5 sm:p-3 flex flex-col justify-between shadow-md snap-start transition-all duration-200 hover:border-[#35E27F]"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-1">
                  <span className="px-1.5 py-0.5 rounded-full bg-[#123D2A] text-[#35E27F] text-[8.5px] font-bold uppercase tracking-wider border border-[#1B3B2F]">
                    Scout Needed
                  </span>
                  <span className="text-[8.5px] font-bold text-[#b6f7c1] bg-[#07130F] px-1.5 py-0.5 rounded-full border border-[#1B3B2F]">
                    Community
                  </span>
                </div>

                {/* Center Call to Action */}
                <div className="my-auto space-y-1.5 text-center px-0.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#123D2A] text-[#35E27F] flex items-center justify-center mx-auto border border-[#1B3B2F] shadow-xs">
                    <Video className="w-4 h-4 sm:w-4.5 sm:h-4.5 animate-pulse text-[#35E27F]" />
                  </div>
                  <h3 className="text-[11px] sm:text-xs font-extrabold text-[#F5F7F3] leading-snug">
                    Scout {selectedCity.split(',')[0]}
                  </h3>
                  <p className="text-[9px] text-[#A8B5AE] leading-tight line-clamp-3">
                    {reel.caption_for_app || reel.caption}
                  </p>
                </div>

                {/* Bottom Actions: Upload & Comment SOS */}
                <div className="space-y-1.5 pt-1.5 border-t border-[#1B3B2F]/80">
                  <button
                    onClick={() => setIsAddReelOpen(true)}
                    className="w-full py-1.5 px-1.5 rounded-lg bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-[10px] font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1 shadow-xs"
                  >
                    <Plus className="w-3 h-3 stroke-[2.5]" />
                    <span>Upload Reel</span>
                  </button>

                  <button
                    onClick={(e) => handleSosComment(e, selectedCity)}
                    className="w-full py-1 px-1 rounded-lg bg-[#07130F] hover:bg-[#123D2A] text-[#b6f7c1] text-[9px] font-semibold border border-[#1B3B2F] transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-2.5 h-2.5 text-[#35E27F]" />
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
              className="group relative w-[145px] sm:w-[160px] md:w-[170px] aspect-[9/16] shrink-0 rounded-xl overflow-hidden bg-[#07130F] border border-[#1B3B2F] cursor-pointer snap-start flex flex-col justify-between shadow-md hover:border-[#35E27F] transition-all duration-200 hover:scale-[1.01]"
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
                <div className="w-full h-full bg-[#0a2e1f] flex items-center justify-center">
                  <Flame className="w-7 h-7 text-[#35E27F]" />
                </div>
              )}

              {/* Dark Gradient Overlay for optimal legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07130F] via-black/40 to-black/70 group-hover:from-[#07130F]/95 transition-all pointer-events-none" />

              {/* Card Top: Creator Avatar + Top Macro Badge */}
              <div className="relative z-10 p-1.5 sm:p-2 space-y-1">
                {/* Creator Avatar & Handle */}
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1 bg-[#07130F]/90 backdrop-blur-md px-1.5 py-0.5 rounded-full border border-[#1B3B2F] min-w-0 max-w-[70%]">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#123D2A] text-[#35E27F] text-[8px] font-bold flex items-center justify-center uppercase shrink-0">
                      {reel.creator_handle.replace('@', '').charAt(0) || 'C'}
                    </div>
                    <span className="text-[8.5px] font-bold text-[#F5F7F3] truncate">
                      {reel.creator_handle}
                    </span>
                  </div>

                  {/* Nationwide Viral badge if applicable */}
                  {isNationwide && (
                    <span className="px-1.5 py-0.5 rounded-full bg-[#f97316] text-[#07130F] text-[8px] font-extrabold uppercase tracking-wider shrink-0 shadow-xs">
                      Viral
                    </span>
                  )}
                  {reel.price && (
                    <span className="px-1.5 py-0.5 rounded-full bg-[#35E27F] text-[#07130F] text-[8px] font-extrabold uppercase tracking-wider shrink-0 shadow-xs">
                      ₹{reel.price}
                    </span>
                  )}
                </div>

                {/* Top Badge: "56gP / 12gF / 549cal / 3gS" */}
                <div className="w-full bg-[#07130F]/95 backdrop-blur-md px-1.5 py-0.5 rounded-lg border border-[#35E27F]/40 shadow-xs">
                  <span className="text-[8px] sm:text-[8.5px] font-bold text-[#b6f7c1] leading-tight block tracking-tight truncate">
                    {macroBadge}
                  </span>
                </div>
              </div>

              {/* Center Floating Play Button */}
              <div className="relative z-10 self-center my-auto">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#35E27F] text-[#07130F] flex items-center justify-center font-bold shadow-[0_0_12px_rgba(53,226,127,0.6)] group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
                </div>
              </div>

              {/* Card Bottom: Dish name + Restaurant + Views + Verified Clean */}
              <div className="relative z-10 p-2 sm:p-2.5 space-y-1 bg-gradient-to-t from-[#07130F] via-[#07130F]/90 to-transparent pt-3">
                {/* Views & Verified Clean badge */}
                <div className="flex items-center justify-between text-[8.5px]">
                  <span className="inline-flex items-center gap-0.5 text-[#A8B5AE] font-semibold">
                    <Eye className="w-2.5 h-2.5 text-[#35E27F]" />
                    <span>{reel.views}</span>
                  </span>

                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-[#123D2A]/90 text-[#35E27F] text-[8px] sm:text-[8.5px] font-bold border border-[#1B3B2F]">
                    <CheckCircle2 className="w-2 h-2 text-[#35E27F]" />
                    <span>Clean</span>
                  </span>
                </div>

                {/* Off-Delivery indicator if why is present */}
                {(reel.why || reel.why_off_delivery) && (
                  <div className="text-[8px] font-bold text-[#35E27F] bg-[#123D2A]/90 px-1.5 py-0.5 rounded border border-[#35E27F]/40 truncate">
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
