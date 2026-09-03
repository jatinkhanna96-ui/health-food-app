'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { CREATOR_SHORTS, CreatorShort } from '@/lib/mockData';
import ReelsPlayerModal from './ReelsPlayerModal';
import {
  Play,
  Pause,
  TrendingUp,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  MapPin,
} from 'lucide-react';

export default function CreatorFeed() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [inlinePlayingId, setInlinePlayingId] = useState<string | null>(null);
  const [inlineMuted, setInlineMuted] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openReelModal = (index: number) => {
    setInlinePlayingId(null);
    setActiveModalIndex(index);
  };

  const toggleInlinePlay = (e: React.MouseEvent, shortId: string) => {
    e.stopPropagation();
    if (inlinePlayingId === shortId) {
      setInlinePlayingId(null);
    } else {
      setInlinePlayingId(shortId);
    }
  };

  const toggleInlineMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInlineMuted((prev) => !prev);
  };

  return (
    <section id="creator-field-notes-feed" className="space-y-3.5">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-rose-100 border border-rose-200 flex items-center justify-center text-[#C8102E] shadow-sm">
            <TrendingUp className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-black text-stone-900 tracking-tight flex items-center gap-2">
              <span>Creator Field Notes</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#C8102E] text-white tracking-wider flex items-center gap-1 shadow-sm">
                <Sparkles className="w-2.5 h-2.5" />
                Playable Reels
              </span>
            </h2>
            <p className="text-xs text-stone-500 font-medium">
              Click any reel to play full screen, or tap play to preview in-feed
            </p>
          </div>
        </div>

        {/* Desktop Carousel Controls */}
        <div className="hidden sm:flex items-center gap-1.5">
          <button
            id="creator-scroll-left-btn"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="w-8 h-8 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 flex items-center justify-center transition-all shadow-sm cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            id="creator-scroll-right-btn"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="w-8 h-8 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 flex items-center justify-center transition-all shadow-sm cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Snap-to-scroll Horizontal Carousel */}
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-3.5 sm:gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-1 pt-0.5"
      >
        {CREATOR_SHORTS.map((short: CreatorShort, index: number) => {
          const isInlinePlaying = inlinePlayingId === short.id;

          return (
            <div
              key={short.id}
              id={`creator-short-card-${short.id}`}
              onClick={() => openReelModal(index)}
              className="snap-start shrink-0 w-[200px] sm:w-[220px] md:w-[240px] aspect-[9/16] relative rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer bg-stone-900"
            >
              {/* Either Inline Video or Background Thumbnail Image */}
              {isInlinePlaying ? (
                <video
                  src={short.videoUrl}
                  poster={short.thumbnail}
                  autoPlay
                  playsInline
                  loop
                  muted={inlineMuted}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={short.thumbnail}
                  alt={short.title}
                  fill
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 220px, 240px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  referrerPolicy="no-referrer"
                />
              )}

              {/* Dark Gradient Overlay for optimal legibility */}
              <div
                className={`absolute inset-0 transition-colors pointer-events-none ${
                  isInlinePlaying
                    ? 'bg-gradient-to-t from-black/80 via-transparent to-black/50'
                    : 'bg-gradient-to-t from-black/90 via-black/30 to-black/60 group-hover:from-black/95 group-hover:via-black/40'
                }`}
              />

              {/* Top Bar: Platform Badge & Controls */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                {/* Platform Badge */}
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase backdrop-blur-md shadow-xs ${
                    short.platform === 'TikTok'
                      ? 'bg-cyan-500/80 text-white border border-cyan-400/40'
                      : short.platform === 'YouTube'
                      ? 'bg-[#C8102E] text-white border border-rose-400/40'
                      : 'bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-amber-600/90 text-white border border-pink-400/40'
                  }`}
                >
                  {short.platform}
                </span>

                {/* Inline Controls (when playing) or View Count */}
                {isInlinePlaying ? (
                  <div className="flex items-center gap-1">
                    <button
                      onClick={toggleInlineMute}
                      className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                      title={inlineMuted ? 'Unmute' : 'Mute'}
                    >
                      {inlineMuted ? (
                        <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openReelModal(index);
                      }}
                      className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                      title="Expand Full Screen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold">
                    <Eye className="w-3 h-3 text-amber-400" />
                    <span>{short.views}</span>
                  </div>
                )}
              </div>

              {/* Center Play/Pause Trigger */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button
                  type="button"
                  onClick={(e) => toggleInlinePlay(e, short.id)}
                  aria-label={isInlinePlaying ? 'Pause video' : 'Play video'}
                  className="w-12 h-12 rounded-full bg-black/40 group-hover:bg-[#C8102E] backdrop-blur-md border border-white/40 group-hover:border-rose-400 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  {isInlinePlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  )}
                </button>
              </div>

              {/* Bottom Content: Title, Location, Creator, Handle */}
              <div className="absolute bottom-3 left-3 right-3 z-10 space-y-1.5">
                {/* Location Badge */}
                {short.location && (
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-bold text-amber-300">
                    <MapPin className="w-2.5 h-2.5 text-[#C8102E] shrink-0" />
                    <span>{short.location}</span>
                  </div>
                )}

                {/* Video Title */}
                <h3 className="text-xs sm:text-sm font-extrabold text-white leading-snug line-clamp-2 drop-shadow-md group-hover:text-amber-200 transition-colors">
                  {short.title}
                </h3>

                {/* Creator Info */}
                <div className="flex items-center gap-1.5 pt-0.5">
                  <div className="w-5 h-5 rounded-full bg-[#C8102E]/80 border border-white/60 flex items-center justify-center text-[10px] font-black text-white shrink-0">
                    {short.creator.charAt(0)}
                  </div>
                  <div className="min-w-0 flex items-center gap-1">
                    <span className="text-[11px] font-bold text-stone-100 truncate">
                      {short.creator}
                    </span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  </div>
                </div>

                {/* Handle & Tap to expand indicator */}
                <div className="flex items-center justify-between text-[10px] text-stone-300 font-medium">
                  <span className="truncate">{short.handle}</span>
                  <span className="text-amber-300 font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5 shrink-0">
                    Play Full Reel
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Interactive Reels Player Modal */}
      {activeModalIndex !== null && (
        <ReelsPlayerModal
          reels={CREATOR_SHORTS}
          initialIndex={activeModalIndex}
          isOpen={activeModalIndex !== null}
          onClose={() => setActiveModalIndex(null)}
        />
      )}
    </section>
  );
}

