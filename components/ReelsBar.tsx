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
} from 'lucide-react';
import {
  Reel,
  ReelCity,
  CookingFat,
  REELS_DATA,
  CITIES_LIST,
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

const COOKING_FAT_TAGS: { label: string; value: CookingFat | 'all' }[] = [
  { label: 'All Verified Fats', value: 'all' },
  { label: 'Beef Tallow', value: 'Beef Tallow' },
  { label: 'Cold-Pressed EVOO', value: 'Cold-Pressed EVOO' },
  { label: 'Grass-Fed Ghee', value: 'Grass-Fed Ghee' },
  { label: 'Avocado Oil', value: 'Avocado Oil' },
  { label: 'Bone Marrow', value: 'Bone Marrow' },
];

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
  const [selectedFatFilter, setSelectedFatFilter] = useState<CookingFat | 'all'>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Combine default dataset with any UGC user-submitted reels
  const allReels = useMemo(() => {
    return [...customReels, ...REELS_DATA];
  }, [customReels]);

  // Filter reels by selected city
  const cityReels = useMemo(() => {
    let filtered = allReels.filter((r) => r.city === selectedCity);
    if (selectedFatFilter !== 'all') {
      filtered = filtered.filter((r) => r.cooking_fat === selectedFatFilter);
    }
    return filtered;
  }, [allReels, selectedCity, selectedFatFilter]);

  // Nationwide fallback reels (when selected city has 0 reels, e.g. San Francisco or Nashville)
  const nationwideReels = useMemo(() => {
    if (selectedFatFilter !== 'all') {
      return allReels.filter((r) => r.cooking_fat === selectedFatFilter);
    }
    return allReels;
  }, [allReels, selectedFatFilter]);

  const hasCityReels = cityReels.length > 0;
  const displayReels = hasCityReels ? cityReels : nationwideReels;

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 320;
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

  return (
    <section
      id="kitchen-reels-section"
      aria-label="Kitchen Proof & Sizzle Reels Live Proof"
      className="w-full space-y-4 rounded-3xl glass-panel text-stone-100 p-5 sm:p-6 lg:p-7 relative overflow-hidden"
    >
      {/* Background Ambience Glow */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#134631]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#52b788]/10 rounded-full blur-3xl pointer-events-none" />

      {/* ======================================================================= */}
      {/* SECOND ROW: Section Title, Subtitle, Fat Tags, and Add Reel Button     */}
      {/* ======================================================================= */}
      <div className="relative z-10 space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Left Title with Pulsing Beacon */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b6f7c1] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#52b788]" />
            </span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-lg lg:text-xl font-black text-white tracking-tight leading-none">
                  Kitchen Proof &amp; Sizzle Reels Live Proof
                </h2>
                <span className="px-2.5 py-0.5 rounded-full glass-pill-dark text-[#b6f7c1] text-[10px] font-black uppercase tracking-wider border border-[#b6f7c1]/30">
                  {selectedCity}
                </span>
              </div>
              <p className="text-xs text-emerald-200/70 font-medium mt-1">
                Real customer mukbangs &amp; kitchen sears verifying 100% seed-oil-free cooking.
              </p>
            </div>
          </div>

          {/* Right Controls: Instruction + Add Reel Button */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="hidden lg:inline-block text-xs font-semibold text-emerald-300/75 italic">
              Tap any reel to view certified cooking fats &rarr;
            </span>

            {/* Scroll buttons for desktop */}
            <div className="hidden sm:flex items-center gap-1 glass-pill p-1 rounded-xl border border-white/15">
              <button
                onClick={() => handleScroll('left')}
                className="p-1.5 rounded-lg hover:bg-white/10 text-emerald-200 hover:text-white transition-all cursor-pointer"
                title="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="p-1.5 rounded-lg hover:bg-white/10 text-emerald-200 hover:text-white transition-all cursor-pointer"
                title="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Creator UGC "Add Reel" Button */}
            <button
              id="add-reel-ugc-btn"
              onClick={() => setIsAddReelOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-btn-plus text-[#0a2e1f] text-xs font-black transition-all cursor-pointer active:scale-95 shrink-0"
              title="Submit a seed-oil-free reel from Instagram or Facebook"
            >
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
              <span>Add Reel</span>
            </button>
          </div>
        </div>

        {/* Cooking Fat Tags & Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400/80 shrink-0 mr-1 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-[#b6f7c1]" />
            <span>Fats:</span>
          </span>
          {COOKING_FAT_TAGS.map((tag) => (
            <button
              key={tag.value}
              onClick={() => setSelectedFatFilter(tag.value)}
              className={`px-3 py-1.5 rounded-full text-xs font-black whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                selectedFatFilter === tag.value
                  ? 'bg-gradient-to-b from-[#b6f7c1] to-[#80ed99] text-[#0a2e1f] shadow-md shadow-[#b6f7c1]/20 font-extrabold border border-white/70'
                  : 'glass-pill hover:bg-white/[0.14] text-emerald-100 border border-white/15'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* ======================================================================= */}
      {/* CITY PLACEHOLDER WHEN 0 REELS (e.g. San Francisco, CA or Nashville, TN) */}
      {/* ======================================================================= */}
      {!hasCityReels && (
        <div
          id="scout-city-placeholder"
          className="relative z-10 p-5 sm:p-6 rounded-2xl glass-card border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl glass-pill text-[#b6f7c1] flex items-center justify-center shrink-0 border border-[#b6f7c1]/30">
              <Video className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white">
                Be first to scout {selectedCity} &mdash; Comment SOS + {selectedCity.split(',')[0]}
              </h3>
              <p className="text-xs text-emerald-200/70 mt-0.5">
                No verified reels uploaded for {selectedCity} yet. Help us certify local restaurants or browse nationwide viral reels below.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAddReelOpen(true)}
            className="px-5 py-2.5 rounded-xl glass-btn-plus text-[#0a2e1f] text-xs font-black transition-all cursor-pointer active:scale-95 shrink-0 flex items-center gap-2"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Add Reel for {selectedCity.split(',')[0]}</span>
          </button>
        </div>
      )}

      {/* ======================================================================= */}
      {/* HORIZONTALLY SCROLLABLE SNAP REEL TRAY (CARDS)                           */}
      {/* ======================================================================= */}
      <div
        ref={scrollContainerRef}
        id="reels-horizontal-tray"
        className="relative z-10 flex gap-4 overflow-x-auto pb-3 pt-1 snap-x snap-mandatory scrollbar-none -mx-1 px-1"
        style={{ scrollBehavior: 'smooth' }}
      >
        {displayReels.map((reel) => {
          return (
            <div
              key={reel.id}
              onClick={() => setActiveModalReel(reel)}
              className="group relative w-[220px] sm:w-[240px] md:w-[260px] aspect-[9/16] shrink-0 rounded-2xl overflow-hidden glass-card cursor-pointer snap-start flex flex-col justify-between"
            >
              {/* Card Image Thumbnail */}
              {reel.thumbnail ? (
                <Image
                  src={reel.thumbnail}
                  alt={reel.dish_name || reel.restaurant}
                  fill
                  sizes="(max-width: 768px) 240px, 260px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full bg-[#134631] flex items-center justify-center">
                  <Flame className="w-12 h-12 text-[#b6f7c1]/40" />
                </div>
              )}

              {/* Dark Gradient Overlay for optimal legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/70 group-hover:from-black/95 transition-all pointer-events-none" />

              {/* Card Top Header: Creator Handle + Fat Pill */}
              <div className="relative z-10 p-3 flex items-start justify-between gap-2">
                {/* Creator Avatar / Handle */}
                <div className="flex items-center gap-1.5 glass-pill-dark px-2.5 py-1 rounded-full border border-white/15">
                  <div className="w-4 h-4 rounded-full bg-[#134631] text-[#b6f7c1] text-[9px] font-black flex items-center justify-center uppercase">
                    {reel.creator_handle.replace('@', '').charAt(0) || 'C'}
                  </div>
                  <span className="text-[10px] font-bold text-white/90 truncate max-w-[90px]">
                    {reel.creator_handle}
                  </span>
                </div>

                {/* Cooking Fat Green Pill */}
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full glass-pill-dark text-[#b6f7c1] text-[10px] font-extrabold border border-[#b6f7c1]/40 shadow-xs">
                  <Flame className="w-3 h-3 text-[#b6f7c1]" />
                  <span className="truncate max-w-[85px]">{reel.cooking_fat}</span>
                </span>
              </div>

              {/* Center Floating Play Button */}
              <div className="relative z-10 self-center my-auto">
                <div className="w-12 h-12 rounded-full glass-btn-plus text-[#0a2e1f] flex items-center justify-center font-black transition-all duration-300">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="relative z-10 p-3.5 space-y-1.5">
                {/* Views and Verified Clean Badge */}
                <div className="flex items-center justify-between text-[11px]">
                  <span className="inline-flex items-center gap-1 text-white/90 font-medium">
                    <Eye className="w-3.5 h-3.5 text-[#b6f7c1]" />
                    <span>{reel.views}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#b6f7c1]">
                    <CheckCircle2 className="w-3 h-3 text-[#b6f7c1]" />
                    <span>Verified Clean</span>
                  </span>
                </div>

                {/* Dish Name or Viral Hook */}
                <h3 className="text-xs font-black text-white leading-tight line-clamp-2 drop-shadow-sm group-hover:text-[#b6f7c1] transition-colors">
                  {reel.dish_name || reel.caption_for_app}
                </h3>

                {/* Restaurant & City */}
                <div className="flex items-center justify-between text-[11px] text-emerald-200/80 pt-0.5">
                  <span className="font-bold truncate max-w-[130px]">
                    {reel.restaurant}
                  </span>
                  <span className="text-[10px] text-white/70 shrink-0 font-medium">
                    {reel.macros_text}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section Sub-footer indicator */}
      <div className="relative z-10 pt-1 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-emerald-300/70">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#b6f7c1]" />
          <span>
            Showing <strong>{displayReels.length} verified proof reels</strong> &bull; {hasCityReels ? `Local to ${selectedCity}` : 'Nationwide Clean Scouts'}
          </span>
        </div>

        <button
          onClick={() => setIsAddReelOpen(true)}
          className="text-xs font-bold text-[#b6f7c1] hover:underline cursor-pointer"
        >
          Spotted clean dining? Scout a new reel &rarr;
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
          // Also immediately open it in preview
          setActiveModalReel(newReel);
        }}
        defaultCity={selectedCity}
      />
    </section>
  );
}
