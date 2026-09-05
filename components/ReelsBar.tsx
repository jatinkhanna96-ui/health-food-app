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
  { label: 'All Cooking Fats', value: 'all' },
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
    const scrollAmount = 220;
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
      aria-label="See How It's Made"
      className="w-full space-y-4 rounded-2xl bg-[#0B1A14] border border-[#1B3B2F] text-[#F5F7F3] p-5 sm:p-6 lg:p-7 relative overflow-hidden shadow-sm"
    >
      {/* Background Ambience Glow */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#35E27F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#123D2A]/30 rounded-full blur-3xl pointer-events-none" />

      {/* ======================================================================= */}
      {/* SECOND ROW: Section Title, Subtitle, Fat Tags, and Add Reel Button     */}
      {/* ======================================================================= */}
      <div className="relative z-10 space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Left Title with Pulsing Beacon */}
          <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0 mt-1 sm:mt-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35E27F] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#35E27F] shadow-[0_0_8px_rgba(53,226,127,0.8)]" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#F5F7F3] tracking-tight leading-tight">
                  See How It&apos;s Made
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-[#123D2A] text-[#35E27F] text-[10px] font-bold uppercase tracking-wider border border-[#1B3B2F] shrink-0">
                  {selectedCity}
                </span>
              </div>
              <p className="text-xs text-[#A8B5AE] font-normal mt-0.5">
                Real kitchens and food creators showing you what goes inside your food
              </p>
            </div>
          </div>

          {/* Right Controls: Instruction + Add Reel Button */}
          <div className="flex items-center justify-between sm:justify-end gap-2.5 w-full sm:w-auto shrink-0">
            <span className="hidden lg:inline-block text-xs font-medium text-[#35E27F]">
              Tap any reel to see what&apos;s in the dish &rarr;
            </span>

            {/* Scroll buttons for desktop */}
            <div className="hidden sm:flex items-center gap-1 bg-[#0F231B] p-1 rounded-xl border border-[#1B3B2F]">
              <button
                onClick={() => handleScroll('left')}
                className="p-1.5 rounded-lg text-[#A8B5AE] hover:text-[#35E27F] hover:bg-[#123D2A] transition-all cursor-pointer"
                title="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="p-1.5 rounded-lg text-[#A8B5AE] hover:text-[#35E27F] hover:bg-[#123D2A] transition-all cursor-pointer"
                title="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Creator UGC "Add Reel" Button */}
            <button
              id="add-reel-ugc-btn"
              onClick={() => setIsAddReelOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all cursor-pointer active:scale-95 shrink-0 ml-auto sm:ml-0"
              title="Submit a seed-oil-free reel from Instagram or Facebook"
            >
              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Add Reel</span>
            </button>
          </div>
        </div>

        {/* Cooking Fat Tags & Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#A8B5AE] shrink-0 mr-1 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-[#35E27F]" />
            <span>Fats:</span>
          </span>
          {COOKING_FAT_TAGS.map((tag) => (
            <button
              key={tag.value}
              onClick={() => setSelectedFatFilter(tag.value)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 border ${
                selectedFatFilter === tag.value
                  ? 'bg-[#35E27F] text-[#07130F] border-[#35E27F] font-bold'
                  : 'bg-[#0F231B] hover:bg-[#123D2A] text-[#A8B5AE] hover:text-[#F5F7F3] border-[#1B3B2F]'
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
          className="relative z-10 p-5 sm:p-6 rounded-xl bg-[#0F231B] border border-[#1B3B2F] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#123D2A] text-[#35E27F] flex items-center justify-center shrink-0 border border-[#1B3B2F]">
              <Video className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#F5F7F3]">
                Be first to scout {selectedCity} &mdash; Comment SOS + {selectedCity.split(',')[0]}
              </h3>
              <p className="text-xs text-[#A8B5AE] mt-0.5">
                No verified reels uploaded for {selectedCity} yet. Help us certify local restaurants or browse nationwide verified reels below.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAddReelOpen(true)}
            className="px-4 py-2 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all cursor-pointer active:scale-95 shrink-0 flex items-center gap-2"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
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
        className="relative z-10 flex gap-3 sm:gap-3.5 overflow-x-auto pb-3 pt-1 snap-x snap-mandatory scrollbar-none -mx-1 px-1"
        style={{ scrollBehavior: 'smooth' }}
      >
        {displayReels.map((reel) => {
          return (
            <div
              key={reel.id}
              onClick={() => setActiveModalReel(reel)}
              className="group relative w-[132px] sm:w-[144px] md:w-[156px] aspect-[9/16] shrink-0 rounded-xl overflow-hidden bg-[#07130F] border border-[#1B3B2F] cursor-pointer snap-start flex flex-col justify-between shadow-sm hover:border-[#35E27F]/70 transition-all duration-200 hover:scale-[1.01]"
            >
              {/* Card Image Thumbnail */}
              {reel.thumbnail ? (
                <Image
                  src={reel.thumbnail}
                  alt={reel.dish_name || reel.restaurant}
                  fill
                  sizes="(max-width: 768px) 144px, 156px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full bg-[#07130F] flex items-center justify-center">
                  <Flame className="w-8 h-8 text-[#35E27F]" />
                </div>
              )}

              {/* Dark Gradient Overlay for optimal legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07130F] via-black/40 to-black/60 group-hover:from-[#07130F]/95 transition-all pointer-events-none" />

              {/* Card Top Header: Creator Handle + Fat Pill */}
              <div className="relative z-10 p-2 flex items-start justify-between gap-1">
                {/* Creator Avatar / Handle */}
                <div className="flex items-center gap-1 bg-[#0B1A14]/90 backdrop-blur-md px-1.5 py-0.5 rounded-full border border-[#1B3B2F] min-w-0 max-w-[55%]">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#123D2A] text-[#35E27F] text-[8px] font-bold flex items-center justify-center uppercase shrink-0">
                    {reel.creator_handle.replace('@', '').charAt(0) || 'C'}
                  </div>
                  <span className="text-[9px] font-medium text-[#F5F7F3] truncate">
                    {reel.creator_handle}
                  </span>
                </div>

                {/* Cooking Fat Warm Culinary Pill */}
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-[#123D2A]/90 backdrop-blur-md text-[#35E27F] text-[8px] font-bold shrink-0 max-w-[45%] border border-[#1B3B2F]">
                  <Flame className="w-2.5 h-2.5 text-[#35E27F] shrink-0" />
                  <span className="truncate">{reel.cooking_fat}</span>
                </span>
              </div>

              {/* Center Floating Play Button */}
              <div className="relative z-10 self-center my-auto">
                <div className="w-8 h-8 rounded-full bg-[#35E27F] text-[#07130F] flex items-center justify-center font-bold shadow-[0_0_10px_rgba(53,226,127,0.4)] group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="relative z-10 p-2 sm:p-2.5 space-y-1">
                {/* Views and Verified Badge */}
                <div className="flex items-center justify-between text-[9px] sm:text-[10px]">
                  <span className="inline-flex items-center gap-1 text-[#A8B5AE] font-medium">
                    <Eye className="w-3 h-3 text-[#35E27F]" />
                    <span>{reel.views}</span>
                  </span>

                  <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-[#35E27F]">
                    <CheckCircle2 className="w-2.5 h-2.5 text-[#35E27F]" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Dish Name or Viral Hook */}
                <h3 className="text-[11px] font-bold text-[#F5F7F3] leading-snug line-clamp-2 drop-shadow-sm group-hover:text-[#35E27F] transition-colors">
                  {reel.dish_name || reel.caption_for_app}
                </h3>

                {/* Restaurant & City */}
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-[#A8B5AE] pt-0.5">
                  <span className="font-semibold text-[#F5F7F3] truncate max-w-[70px] sm:max-w-[80px]">
                    {reel.restaurant}
                  </span>
                  <span className="text-[9px] text-[#35E27F] shrink-0 font-bold truncate max-w-[55px]">
                    {reel.macros_text}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section Sub-footer indicator */}
      <div className="relative z-10 pt-1 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#A8B5AE]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#35E27F]" />
          <span>
            Showing <strong className="text-[#F5F7F3]">{displayReels.length} cooking reels</strong> &bull; {hasCityReels ? `Local to ${selectedCity}` : 'Nationwide Community Highlights'}
          </span>
        </div>

        <button
          onClick={() => setIsAddReelOpen(true)}
          className="text-xs font-medium text-[#35E27F] hover:underline cursor-pointer"
        >
          Found a great dish? Share a reel &rarr;
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
