'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  Heart,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Flame,
  Sparkles,
  MapPin,
  Eye,
} from 'lucide-react';

export interface ReelItem {
  id: string;
  title: string;
  dishName: string;
  restaurant: string;
  views: string;
  duration: string;
  cookingFat: string;
  protein: string;
  calories: string;
  image: string;
  chefQuote: string;
  avatar: string;
}

export const REELS_DATA: ReelItem[] = [
  {
    id: 'reel-1',
    title: '🥩 Wagyu Tallow Sear',
    dishName: 'Grass-Fed Ribeye Bowl',
    restaurant: 'Primal Harvest Kitchen',
    views: '14.2k',
    duration: '0:18',
    cookingFat: 'Beef Tallow',
    protein: '48g Protein',
    calories: '590 kcal',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    chefQuote: 'Searing at 550°F in 100% grass-fed suet tallow for maximum golden crust and zero industrial smoke.',
    avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'reel-2',
    title: '🫒 Single-Estate EVOO',
    dishName: 'Wood-Fired Wild Salmon',
    restaurant: 'Bison & Bough',
    views: '8.9k',
    duration: '0:14',
    cookingFat: 'Cold-Pressed EVOO',
    protein: '42g Protein',
    calories: '520 kcal',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    chefQuote: 'First cold extraction EVOO with polyphenol count >400mg/kg. Never mixed with canola or vegetable oils.',
    avatar: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'reel-3',
    title: '🧈 Cultured Ghee Sizzle',
    dishName: 'Pasture-Raised Duck Breast',
    restaurant: 'Verde Fire Hearth',
    views: '21.5k',
    duration: '0:22',
    cookingFat: 'Grass-Fed Ghee',
    protein: '39g Protein',
    calories: '480 kcal',
    image: 'https://images.unsplash.com/photo-1514944298352-f472851a7e44?auto=format&fit=crop&w=800&q=80',
    chefQuote: 'Slow-simmered organic butter with milk solids removed, yielding a nutty high-heat cooking medium.',
    avatar: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'reel-4',
    title: '🥑 6g Carb Keto Assembly',
    dishName: 'Avocado Green Goddess Bowl',
    restaurant: 'Heritage Garden Kitchen',
    views: '11.1k',
    duration: '0:16',
    cookingFat: 'Avocado Oil',
    protein: '32g Protein',
    calories: '460 kcal',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    chefQuote: 'Cold expeller pressed ripe Hass avocados for the cleanest monounsaturated keto dressing imaginable.',
    avatar: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'reel-5',
    title: '🥩 Marrow Canoe Roast',
    dishName: 'Roasted Beef Marrow',
    restaurant: 'Tallow & Ember',
    views: '17.4k',
    duration: '0:20',
    cookingFat: 'Bone Marrow Fat',
    protein: '28g Protein',
    calories: '540 kcal',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    chefQuote: 'Split femur bones from local pasture-finished steers, charred over white oak and rosemary.',
    avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'reel-6',
    title: '🍗 100% Tallow-Fried Wings',
    dishName: 'Crispy Pastured Wings',
    restaurant: 'Crisp & Kettle Co.',
    views: '29.8k',
    duration: '0:15',
    cookingFat: 'Pure Beef Tallow',
    protein: '44g Protein',
    calories: '610 kcal',
    image: 'https://images.unsplash.com/photo-1527477378370-520593b48227?auto=format&fit=crop&w=800&q=80',
    chefQuote: 'No seed oils ever touch our fryers. Triple-dipped in clarified grass-fed tallow for supreme crunch.',
    avatar: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=200&q=80',
  },
];

interface ReelsBarProps {
  onOpenMap?: () => void;
}

export default function ReelsBar({ onOpenMap }: ReelsBarProps) {
  const [activeReelIndex, setActiveReelIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [likedReels, setLikedReels] = useState<Record<string, boolean>>({});
  const [showHeartAnim, setShowHeartAnim] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Story progress timer
  useEffect(() => {
    if (activeReelIndex === null || !isPlaying) return;

    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (activeReelIndex < REELS_DATA.length - 1) {
            setActiveReelIndex(activeReelIndex + 1);
            return 0;
          } else {
            setActiveReelIndex(null);
            return 0;
          }
        }
        return prev + 1.2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [activeReelIndex, isPlaying]);

  const handleOpenReel = (index: number) => {
    setActiveReelIndex(index);
    setIsPlaying(true);
    setProgress(0);
  };

  const handleNext = () => {
    if (activeReelIndex === null) return;
    if (activeReelIndex < REELS_DATA.length - 1) {
      setActiveReelIndex(activeReelIndex + 1);
      setProgress(0);
    } else {
      setActiveReelIndex(null);
    }
  };

  const handlePrev = () => {
    if (activeReelIndex === null) return;
    if (activeReelIndex > 0) {
      setActiveReelIndex(activeReelIndex - 1);
      setProgress(0);
    }
  };

  const toggleLike = (reelId: string) => {
    setLikedReels((prev) => ({ ...prev, [reelId]: !prev[reelId] }));
    setShowHeartAnim(true);
    setTimeout(() => setShowHeartAnim(false), 800);
  };

  const activeReel = activeReelIndex !== null ? REELS_DATA[activeReelIndex] : null;

  return (
    <section aria-label="Kitchen Reels" className="w-full space-y-3">
      {/* Header for Reels Tray */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2D6A4F]" />
          </span>
          <h3 className="text-sm sm:text-base font-black text-stone-900 tracking-tight flex items-center gap-1.5">
            <span>Kitchen Proof &amp; Sizzle Reels</span>
            <span className="text-[11px] font-extrabold text-[#2D6A4F] bg-[#E8F3EC] px-2 py-0.5 rounded-full border border-[#C8E2D1]">
              Live Proof
            </span>
          </h3>
        </div>
        <span className="text-xs font-bold text-stone-500 hidden sm:inline">
          Tap any reel to view certified cooking fats
        </span>
      </div>

      {/* Horizontal Reels Story Tray */}
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-3.5 sm:gap-4 overflow-x-auto pb-2 pt-1 scrollbar-none snap-x snap-mandatory"
      >
        {REELS_DATA.map((reel, index) => (
          <div
            key={reel.id}
            onClick={() => handleOpenReel(index)}
            className="group relative shrink-0 w-[130px] sm:w-[145px] h-[195px] sm:h-[215px] rounded-2xl p-[2.5px] bg-gradient-to-tr from-[#2D6A4F] via-[#52B788] to-[#B7E4C7] shadow-sm hover:shadow-xl hover:shadow-[#2D6A4F]/15 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1.5 cursor-pointer snap-start"
          >
            {/* Inner Container with Image & Overlays */}
            <div className="w-full h-full rounded-[14px] overflow-hidden relative bg-stone-900 flex flex-col justify-between p-2.5">
              {/* Background Food Picture */}
              <Image
                src={reel.image}
                alt={reel.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 130px, 145px"
              />

              {/* Ambient Dark Gradient for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 pointer-events-none" />

              {/* Top Row: Avatar & Cooking Fat Badge */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <div className="w-6 h-6 rounded-full overflow-hidden border border-white/80 shrink-0 relative shadow-sm">
                  <Image src={reel.avatar} alt={reel.restaurant} fill className="object-cover" />
                </div>
                <span className="text-[9px] font-black px-1.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-emerald-300 border border-emerald-400/40">
                  {reel.cookingFat}
                </span>
              </div>

              {/* Center: Pulsing Play Button */}
              <div className="relative z-10 self-center my-auto w-8 h-8 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-md group-hover:bg-[#2D6A4F] group-hover:border-emerald-400 transition-all">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>

              {/* Bottom Info: Title & Views */}
              <div className="relative z-10 space-y-0.5">
                <p className="text-[11px] font-black text-white leading-tight line-clamp-2 drop-shadow-xs">
                  {reel.title}
                </p>
                <div className="flex items-center justify-between text-[9px] font-bold text-stone-300">
                  <span className="truncate max-w-[75px]">{reel.restaurant}</span>
                  <span className="text-emerald-300 flex items-center gap-0.5">
                    <Eye className="w-2.5 h-2.5" /> {reel.views}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* INSTAGRAM-STYLE FULL-SCREEN REEL VIEWER LIGHTBOX                         */}
      {/* ========================================================================= */}
      {activeReel && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
          {/* Close Backdrop Click */}
          <div className="absolute inset-0" onClick={() => setActiveReelIndex(null)} />

          {/* Reel Lightbox Box (9:16 vertical ratio) */}
          <div className="relative z-10 w-full max-w-[380px] sm:max-w-[400px] h-[88vh] max-h-[720px] rounded-3xl overflow-hidden bg-stone-950 shadow-2xl flex flex-col justify-between border border-stone-800 animate-in fade-in zoom-in-95 duration-200">
            {/* Background Media */}
            <div className="absolute inset-0">
              <Image
                src={activeReel.image}
                alt={activeReel.title}
                fill
                className={`object-cover ${isPlaying ? 'scale-105 transition-transform duration-7000' : ''}`}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/70 pointer-events-none" />
            </div>

            {/* Tap areas for next/previous reel */}
            <button
              onClick={handlePrev}
              disabled={activeReelIndex === 0}
              className="absolute left-0 top-16 bottom-28 w-1/3 z-10 cursor-pointer disabled:cursor-default"
              aria-label="Previous Reel"
            />
            <button
              onClick={handleNext}
              className="absolute right-0 top-16 bottom-28 w-1/3 z-10 cursor-pointer"
              aria-label="Next Reel"
            />

            {/* Heart Animation Trigger on Like */}
            {showHeartAnim && (
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <Heart className="w-24 h-24 text-rose-500 fill-rose-500 animate-ping opacity-90" />
              </div>
            )}

            {/* TOP BAR: Story Progress + Profile Info */}
            <div className="relative z-20 p-4 space-y-3">
              {/* Instagram Story Progress Bars */}
              <div className="flex items-center gap-1.5">
                {REELS_DATA.map((_, i) => (
                  <div key={i} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white transition-all duration-100"
                      style={{
                        width:
                          i < (activeReelIndex ?? 0)
                            ? '100%'
                            : i === activeReelIndex
                            ? `${progress}%`
                            : '0%',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Profile & Controls Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-emerald-400 relative">
                    <Image src={activeReel.avatar} alt={activeReel.restaurant} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-white text-xs leading-none">
                        {activeReel.restaurant}
                      </span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-[10px] font-medium text-stone-300">
                      Verified Kitchen Reel &bull; {activeReel.duration}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Audio Mute/Unmute */}
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-300" />}
                  </button>

                  {/* Play/Pause */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </button>

                  {/* Close Modal */}
                  <button
                    onClick={() => setActiveReelIndex(null)}
                    className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* BOTTOM CARD: Food Provenance, Quote, & Action */}
            <div className="relative z-20 p-4 space-y-3 bg-gradient-to-t from-black via-black/80 to-transparent pt-8">
              {/* Cooking Medium Guarantee Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-[11px] font-black text-emerald-300 border border-emerald-400/30">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>Verified: {activeReel.cookingFat}</span>
              </div>

              {/* Reel Title & Dish */}
              <div>
                <h3 className="text-lg font-black text-white leading-tight">
                  {activeReel.title}
                </h3>
                <p className="text-xs font-bold text-stone-300 mt-0.5">
                  Featured Dish: <strong className="text-white">{activeReel.dishName}</strong>
                </p>
              </div>

              {/* Chef Quote / Kitchen Note */}
              <p className="text-xs text-stone-300 italic bg-white/10 p-2.5 rounded-xl backdrop-blur-xs border border-white/10 leading-relaxed">
                &ldquo;{activeReel.chefQuote}&rdquo;
              </p>

              {/* Macros & Stats */}
              <div className="flex items-center gap-2 text-xs font-black">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                  {activeReel.protein}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-stone-900 text-stone-200 border border-stone-700">
                  {activeReel.calories}
                </span>
              </div>

              {/* Bottom Actions Row */}
              <div className="flex items-center gap-2.5 pt-1">
                <button
                  onClick={() => toggleLike(activeReel.id)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    likedReels[activeReel.id]
                      ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                      : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                  }`}
                  title="Like Reel"
                >
                  <Heart className={`w-4 h-4 ${likedReels[activeReel.id] ? 'fill-rose-500' : ''}`} />
                </button>

                <button
                  onClick={() => {
                    setActiveReelIndex(null);
                    if (onOpenMap) onOpenMap();
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#2D6A4F] hover:bg-[#24583C] text-white text-xs font-black transition-all cursor-pointer shadow-lg shadow-[#2D6A4F]/30 flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Locate Kitchen on Map</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
