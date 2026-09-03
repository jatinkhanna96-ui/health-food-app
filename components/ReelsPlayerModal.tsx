'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CreatorShort } from '@/lib/mockData';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronDown,
  ChevronUp,
  Heart,
  Share2,
  Bookmark,
  CheckCircle2,
  Eye,
  Maximize2,
  Sparkles,
  Check,
  MapPin,
} from 'lucide-react';

interface ReelsPlayerModalProps {
  reels: CreatorShort[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ReelsPlayerModal({
  reels,
  initialIndex,
  isOpen,
  onClose,
}: ReelsPlayerModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [likedReels, setLikedReels] = useState<Record<string, boolean>>({});
  const [savedReels, setSavedReels] = useState<Record<string, boolean>>({});
  const [copiedToast, setCopiedToast] = useState(false);
  const [showPlayStateBadge, setShowPlayStateBadge] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Sync index when opened with a specific card
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsPlaying(true);
      setProgress(0);
    }
  }, [isOpen, initialIndex]);

  const currentReel = reels[currentIndex] || reels[0];

  // Handle Play/Pause
  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setShowPlayStateBadge(true);
    setTimeout(() => setShowPlayStateBadge(false), 800);
  }, []);

  // Handle Mute/Unmute
  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  }, [isMuted]);

  // Navigate to next reel
  const handleNext = useCallback(() => {
    if (currentIndex < reels.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
      setIsPlaying(true);
    } else {
      // Loop back to first reel
      setCurrentIndex(0);
      setProgress(0);
      setIsPlaying(true);
    }
  }, [currentIndex, reels.length]);

  // Navigate to previous reel
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
      setIsPlaying(true);
    } else {
      setCurrentIndex(reels.length - 1);
      setProgress(0);
      setIsPlaying(true);
    }
  }, [currentIndex, reels.length]);

  // Handle Time Update
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 0;
    setCurrentTime(curr);
    setDuration(dur);
    if (dur > 0) {
      setProgress((curr / dur) * 100);
    }
  };

  // Handle Progress Bar Click / Scrubbing
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !videoRef.current || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = percent * duration;
    setProgress(percent * 100);
  };

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ' || e.key === 'k') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'm') {
        toggleMute();
      } else if (e.key === 'ArrowDown' || e.key === 'j') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, togglePlay, toggleMute, handleNext, handlePrev, onClose]);

  // Handle Like
  const toggleLike = (reelId: string) => {
    setLikedReels((prev) => ({ ...prev, [reelId]: !prev[reelId] }));
  };

  // Handle Save
  const toggleSave = (reelId: string) => {
    setSavedReels((prev) => ({ ...prev, [reelId]: !prev[reelId] }));
  };

  // Handle Share
  const handleShare = (reel: CreatorShort) => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2200);
  };

  // Handle Fullscreen
  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      videoRef.current.requestFullscreen().catch(() => {});
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  if (!isOpen || !currentReel) return null;

  const isLiked = !!likedReels[currentReel.id];
  const isSaved = !!savedReels[currentReel.id];

  return (
    <div
      id="reels-player-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-0 sm:p-4 overflow-hidden animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Container / Phone-format player */}
      <div
        id="reels-player-container"
        className="relative w-full h-full sm:h-auto sm:max-h-[92vh] sm:w-[410px] md:w-[440px] aspect-[9/16] bg-slate-950 sm:rounded-3xl overflow-hidden shadow-2xl border sm:border-slate-800 flex flex-col items-center justify-center select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HTML5 Native Video Tag */}
        <video
          ref={videoRef}
          key={currentReel.id}
          src={currentReel.videoUrl}
          poster={currentReel.thumbnail}
          autoPlay
          playsInline
          loop
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onClick={togglePlay}
          className="w-full h-full object-cover cursor-pointer bg-black"
        />

        {/* Dark Vignette Overlays for Legibility */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/95 via-transparent to-black/70"
          aria-hidden="true"
        />

        {/* Temporary Play/Pause Center Indicator */}
        {showPlayStateBadge && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 animate-in fade-in zoom-in-75 duration-200">
            <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl">
              {isPlaying ? (
                <Play className="w-8 h-8 fill-current ml-1" />
              ) : (
                <Pause className="w-8 h-8 fill-current" />
              )}
            </div>
          </div>
        )}

        {/* Top Header Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-30">
          <div className="flex items-center gap-2">
            <span
              className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md backdrop-blur-md ${
                currentReel.platform === 'TikTok'
                  ? 'bg-cyan-500/90 text-white border border-cyan-400/40'
                  : currentReel.platform === 'YouTube'
                  ? 'bg-red-600/90 text-white border border-red-500/40'
                  : 'bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 text-white border border-pink-400/40'
              }`}
            >
              {currentReel.platform}
            </span>

            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold">
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
              <span>{currentReel.views}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Mute Button */}
            <button
              id="reel-mute-toggle-btn"
              onClick={toggleMute}
              className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/15 flex items-center justify-center backdrop-blur-md transition-transform active:scale-90 cursor-pointer"
              title={isMuted ? 'Unmute (M)' : 'Mute (M)'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-rose-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-emerald-400" />
              )}
            </button>

            {/* Fullscreen Button */}
            <button
              id="reel-fullscreen-toggle-btn"
              onClick={toggleFullscreen}
              className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/15 flex items-center justify-center backdrop-blur-md transition-transform active:scale-90 cursor-pointer"
              title="Fullscreen"
            >
              <Maximize2 className="w-4 h-4 text-slate-300" />
            </button>

            {/* Close Button */}
            <button
              id="reels-modal-close-btn"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/15 flex items-center justify-center backdrop-blur-md transition-transform active:scale-90 cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Action Rail (TikTok / Instagram style) */}
        <div className="absolute right-3 bottom-24 flex flex-col items-center gap-4 z-30">
          {/* Like Button */}
          <button
            id={`reel-like-btn-${currentReel.id}`}
            onClick={() => toggleLike(currentReel.id)}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${
                isLiked
                  ? 'bg-rose-500 border-rose-400 text-white scale-110 shadow-lg shadow-rose-500/40'
                  : 'bg-black/50 border-white/20 text-white hover:bg-black/70 group-hover:scale-105'
              }`}
            >
              <Heart
                className={`w-5 h-5 ${isLiked ? 'fill-current text-white' : 'text-white'}`}
              />
            </div>
            <span className="text-[10px] font-bold text-white drop-shadow-md">
              {isLiked ? 'Liked' : 'Like'}
            </span>
          </button>

          {/* Bookmark / Save Button */}
          <button
            id={`reel-save-btn-${currentReel.id}`}
            onClick={() => toggleSave(currentReel.id)}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${
                isSaved
                  ? 'bg-amber-500 border-amber-400 text-white scale-110 shadow-lg shadow-amber-500/40'
                  : 'bg-black/50 border-white/20 text-white hover:bg-black/70 group-hover:scale-105'
              }`}
            >
              <Bookmark
                className={`w-5 h-5 ${isSaved ? 'fill-current text-white' : 'text-white'}`}
              />
            </div>
            <span className="text-[10px] font-bold text-white drop-shadow-md">
              {isSaved ? 'Saved' : 'Save'}
            </span>
          </button>

          {/* Share Button */}
          <button
            id={`reel-share-btn-${currentReel.id}`}
            onClick={() => handleShare(currentReel)}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-full bg-black/50 border border-white/20 hover:bg-black/70 flex items-center justify-center text-white backdrop-blur-md transition-all group-hover:scale-105">
              <Share2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-white drop-shadow-md">Share</span>
          </button>

          {/* Next & Prev Vertical Reel Switchers */}
          <div className="flex flex-col gap-1.5 pt-2">
            <button
              id="reel-prev-nav-btn"
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 border border-white/15 flex items-center justify-center text-white backdrop-blur-md transition-transform active:scale-90 cursor-pointer"
              title="Previous Reel (Up Arrow)"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <button
              id="reel-next-nav-btn"
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 border border-white/15 flex items-center justify-center text-white backdrop-blur-md transition-transform active:scale-90 cursor-pointer"
              title="Next Reel (Down Arrow)"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Creator & Title Content Info */}
        <div className="absolute bottom-6 left-3 right-16 z-30 space-y-2">
          {/* Creator Profile Chip */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500 border border-white/40 flex items-center justify-center text-xs font-black text-slate-950 shadow-md">
              {currentReel.creator.charAt(0)}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-xs sm:text-sm font-extrabold text-white truncate drop-shadow-md">
                  {currentReel.creator}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              </div>
              <span className="text-[11px] font-semibold text-slate-300">
                {currentReel.handle}
              </span>
            </div>
          </div>

          {/* Video Title */}
          <p className="text-xs sm:text-sm font-bold text-white leading-snug drop-shadow-lg pr-2 line-clamp-3">
            {currentReel.title}
          </p>

          {/* Seed-Oil Free Vetted Tag & Location */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {currentReel.location && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-black/60 border border-white/20 text-emerald-300 text-[10px] font-bold backdrop-blur-md">
                <MapPin className="w-3 h-3 text-emerald-400" />
                {currentReel.location}
              </span>
            )}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-bold backdrop-blur-md">
              <Sparkles className="w-3 h-3" />
              Seed-Oil-Free Verified Spot
            </span>
            <span className="text-[10px] text-slate-400 font-medium">
              Reel {currentIndex + 1} of {reels.length}
            </span>
          </div>
        </div>

        {/* Seekable Progress Bar & Duration at Bottom */}
        <div className="absolute bottom-1 left-3 right-3 z-30 space-y-1">
          <div
            ref={progressBarRef}
            onClick={handleSeek}
            className="w-full h-1.5 bg-white/30 hover:h-2.5 rounded-full overflow-hidden cursor-pointer transition-all duration-150 relative group"
          >
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full relative"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[9px] font-bold text-slate-400 px-0.5">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Toast Notification when Share clicked */}
        {copiedToast && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 z-40 bg-emerald-500 text-slate-950 px-3.5 py-1.5 rounded-full font-bold text-xs flex items-center gap-1.5 shadow-xl animate-in fade-in zoom-in-90 duration-150">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
            <span>Reel link copied to clipboard!</span>
          </div>
        )}
      </div>

      {/* Floating Desktop Next / Previous Arrows */}
      <div className="hidden lg:flex flex-col gap-3 fixed right-8 top-1/2 -translate-y-1/2 z-40">
        <button
          id="desktop-prev-reel-btn"
          onClick={handlePrev}
          className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
          title="Previous Reel (Up Arrow)"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
        <button
          id="desktop-next-reel-btn"
          onClick={handleNext}
          className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
          title="Next Reel (Down Arrow)"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
