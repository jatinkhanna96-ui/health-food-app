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
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Share2,
  ExternalLink,
  CheckCircle2,
  Music,
  Send,
  MoreVertical,
  Maximize2,
  Check,
  Sparkles,
} from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  handle: string;
  text: string;
  likes: number;
  timeAgo: string;
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'c1',
    author: 'Sarah Jenkins',
    handle: '@sarah_wellness',
    text: 'Finally a place that actually uses real cold-pressed extra virgin olive oil! Going here this weekend.',
    likes: 42,
    timeAgo: '2h ago',
  },
  {
    id: 'c2',
    author: 'David Morales',
    handle: '@dave_keto',
    text: 'The macro breakdown on this dish is incredible. 45g protein and zero seed oils is so hard to find.',
    likes: 19,
    timeAgo: '5h ago',
  },
  {
    id: 'c3',
    author: 'Maya Lin',
    handle: '@mayalifestyle',
    text: 'Tested this kitchen myself last week. Super clean ingredients and lovely staff!',
    likes: 8,
    timeAgo: '1d ago',
  },
];

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

  // YouTube Shorts interaction states
  const [likedReels, setLikedReels] = useState<Record<string, boolean>>({});
  const [dislikedReels, setDislikedReels] = useState<Record<string, boolean>>({});
  const [subscribedChannels, setSubscribedChannels] = useState<Record<string, boolean>>({});
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [newCommentText, setNewCommentText] = useState('');
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
      setIsCommentsOpen(false);
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
    setTimeout(() => setShowPlayStateBadge(false), 700);
  }, []);

  // Handle Mute/Unmute
  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  }, [isMuted]);

  // Navigate to next short
  const handleNext = useCallback(() => {
    if (currentIndex < reels.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
    setProgress(0);
    setIsPlaying(true);
  }, [currentIndex, reels.length]);

  // Navigate to previous short
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(reels.length - 1);
    }
    setProgress(0);
    setIsPlaying(true);
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
      // Don't intercept typing in the comment box
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === 'Escape') {
        if (isCommentsOpen) {
          setIsCommentsOpen(false);
        } else {
          onClose();
        }
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
      } else if (e.key === 'c') {
        setIsCommentsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isCommentsOpen, togglePlay, toggleMute, handleNext, handlePrev, onClose]);

  // Handle Like
  const toggleLike = (reelId: string) => {
    setLikedReels((prev) => {
      const next = !prev[reelId];
      if (next && dislikedReels[reelId]) {
        setDislikedReels((d) => ({ ...d, [reelId]: false }));
      }
      return { ...prev, [reelId]: next };
    });
  };

  // Handle Dislike
  const toggleDislike = (reelId: string) => {
    setDislikedReels((prev) => {
      const next = !prev[reelId];
      if (next && likedReels[reelId]) {
        setLikedReels((l) => ({ ...l, [reelId]: false }));
      }
      return { ...prev, [reelId]: next };
    });
  };

  // Handle Subscribe
  const toggleSubscribe = (creator: string) => {
    setSubscribedChannels((prev) => ({ ...prev, [creator]: !prev[creator] }));
  };

  // Handle Share
  const handleShare = (reel: CreatorShort) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2000);
    }
  };

  // Open Separate Popup Window (like real popout)
  const openSeparateWindow = () => {
    try {
      const popup = window.open(
        window.location.href,
        '_blank',
        'width=440,height=820,menubar=no,toolbar=no,location=no,status=no'
      );
      if (popup) {
        popup.focus();
      }
    } catch {
      // fallback
    }
  };

  // Add Comment
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    const newC: Comment = {
      id: `comment-${Date.now()}`,
      author: 'You',
      handle: '@healthydiner',
      text: newCommentText.trim(),
      likes: 1,
      timeAgo: 'Just now',
    };
    setComments([newC, ...comments]);
    setNewCommentText('');
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  if (!isOpen || !currentReel) return null;

  const isLiked = !!likedReels[currentReel.id];
  const isDisliked = !!dislikedReels[currentReel.id];
  const isSubscribed = !!subscribedChannels[currentReel.creator];

  return (
    <div
      id="yt-shorts-player-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-0 sm:p-4 overflow-hidden animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* YouTube Shorts Top Bar Header */}
      <div className="absolute top-3 left-4 right-4 z-50 flex items-center justify-between text-white pointer-events-none">
        {/* YT Shorts Brand Logo */}
        <div className="flex items-center gap-2 pointer-events-auto bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
          {/* YouTube Shorts Iconic S-Badge */}
          <div className="w-5 h-5 rounded-md bg-[#FF0000] flex items-center justify-center text-white shadow-sm">
            <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
          </div>
          <span className="font-black tracking-tight text-sm text-white">Shorts</span>
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/30">
            Healthy Food
          </span>
        </div>

        {/* Window Controls */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Open Separate Window */}
          <button
            id="open-separate-window-btn"
            type="button"
            onClick={openSeparateWindow}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-bold border border-white/20 backdrop-blur-md transition-all cursor-pointer hover:border-emerald-400/50"
            title="Open in separate popup window"
          >
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            <span>Separate Window</span>
          </button>

          {/* Close Button */}
          <button
            id="yt-shorts-close-btn"
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-transform active:scale-90 cursor-pointer"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Shorts Container: Center 9:16 Video + Action Rail (+ Comments Panel if open) */}
      <div
        id="yt-shorts-stage"
        className="relative flex items-center justify-center gap-3 sm:gap-4 max-w-full h-full sm:h-auto sm:max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 9:16 Vertical Video Screen */}
        <div
          id="yt-shorts-video-frame"
          className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:w-[410px] md:w-[430px] aspect-[9/16] bg-black sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col items-center justify-center"
        >
          {/* Native HTML5 Video Element */}
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

          {/* Vignette Gradients */}
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/95 via-transparent to-black/60"
            aria-hidden="true"
          />

          {/* Temporary Play/Pause Center Indicator */}
          {showPlayStateBadge && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 animate-in fade-in zoom-in-75 duration-200">
              <div className="w-16 h-16 rounded-full bg-black/70 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-2xl">
                {isPlaying ? (
                  <Play className="w-8 h-8 fill-current ml-1" />
                ) : (
                  <Pause className="w-8 h-8 fill-current" />
                )}
              </div>
            </div>
          )}

          {/* Top Video Overlay Controls (Sound & Info) */}
          <div className="absolute top-16 sm:top-4 left-3 right-3 flex items-center justify-between z-30">
            <span className="px-2.5 py-1 rounded-full bg-black/50 text-white text-[10px] font-mono font-bold backdrop-blur-md border border-white/15">
              Short {currentIndex + 1} of {reels.length}
            </span>

            <button
              id="yt-shorts-sound-btn"
              type="button"
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
          </div>

          {/* Bottom Video Meta: Channel Avatar + Subscribe, Title, Sound Strip */}
          <div className="absolute bottom-5 left-3 right-3 z-30 space-y-2 pointer-events-auto">
            {/* Channel Info Row */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-9 h-9 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-xs font-black text-white shadow-md shrink-0">
                  {currentReel.creator.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-xs sm:text-sm font-black text-white truncate drop-shadow-md">
                      {currentReel.creator}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </div>
                  <span className="text-[11px] text-stone-300 font-medium">
                    {currentReel.handle}
                  </span>
                </div>
              </div>

              {/* YouTube Shorts Subscribe Button */}
              <button
                id={`yt-subscribe-btn-${currentReel.id}`}
                type="button"
                onClick={() => toggleSubscribe(currentReel.creator)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer shadow-md shrink-0 active:scale-95 ${
                  isSubscribed
                    ? 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                    : 'bg-white hover:bg-emerald-50 text-stone-900'
                }`}
              >
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>

            {/* Video Caption */}
            <p className="text-xs sm:text-sm font-bold text-white leading-snug drop-shadow-md line-clamp-2">
              {currentReel.title}
            </p>

            {/* Sound Track / Audio Strip */}
            <div className="flex items-center gap-2 text-[11px] text-stone-200 font-medium pt-0.5">
              <Music className="w-3.5 h-3.5 text-emerald-400 animate-pulse shrink-0" />
              <span className="truncate">Original audio • Healthy Food Reviews</span>
              {currentReel.location && (
                <span className="px-2 py-0.5 rounded-md bg-black/60 text-[10px] text-emerald-300 border border-white/10 shrink-0">
                  📍 {currentReel.location}
                </span>
              )}
            </div>

            {/* Bottom Scrubber Progress Bar */}
            <div className="pt-1 space-y-1">
              <div
                ref={progressBarRef}
                onClick={handleSeek}
                className="w-full h-1.5 hover:h-2 bg-white/25 rounded-full overflow-hidden cursor-pointer transition-all relative"
              >
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-[9px] font-mono text-stone-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right YouTube Shorts Action Rail (Like, Dislike, Comments, Share, Next, Prev) */}
        <div
          id="yt-shorts-action-rail"
          className="flex flex-col items-center gap-3 shrink-0 z-40"
        >
          {/* Like Button */}
          <button
            id="yt-shorts-like-btn"
            type="button"
            onClick={() => toggleLike(currentReel.id)}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-md ${
                isLiked
                  ? 'bg-emerald-600 text-white scale-110 shadow-emerald-600/30'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 group-hover:scale-105'
              }`}
            >
              <ThumbsUp className={`w-5 h-5 ${isLiked ? 'fill-current text-white' : ''}`} />
            </div>
            <span className="text-[10px] font-bold text-white drop-shadow-md">
              {isLiked ? '14.9K' : '14.8K'}
            </span>
          </button>

          {/* Dislike Button */}
          <button
            id="yt-shorts-dislike-btn"
            type="button"
            onClick={() => toggleDislike(currentReel.id)}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-md ${
                isDisliked
                  ? 'bg-rose-600 text-white scale-110'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 group-hover:scale-105'
              }`}
            >
              <ThumbsDown className={`w-5 h-5 ${isDisliked ? 'fill-current text-white' : ''}`} />
            </div>
            <span className="text-[10px] font-bold text-white drop-shadow-md">Dislike</span>
          </button>

          {/* Comments Toggle Button */}
          <button
            id="yt-shorts-comments-btn"
            type="button"
            onClick={() => setIsCommentsOpen(!isCommentsOpen)}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-md ${
                isCommentsOpen
                  ? 'bg-emerald-600 text-white scale-110 ring-2 ring-emerald-400'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 group-hover:scale-105'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-white drop-shadow-md">
              {comments.length}
            </span>
          </button>

          {/* Share Button */}
          <button
            id="yt-shorts-share-btn"
            type="button"
            onClick={() => handleShare(currentReel)}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all group-hover:scale-105 shadow-md">
              <Share2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-white drop-shadow-md">Share</span>
          </button>

          {/* Up & Down Shorts Navigator Arrows */}
          <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
            <button
              id="yt-shorts-prev-btn"
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all active:scale-90 cursor-pointer shadow-md"
              title="Previous Short (Up Arrow)"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <button
              id="yt-shorts-next-btn"
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all active:scale-90 cursor-pointer shadow-md"
              title="Next Short (Down Arrow)"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* YouTube Shorts Side Comments Panel (Slides out like on desktop YT Shorts) */}
        {isCommentsOpen && (
          <div
            id="yt-shorts-comments-panel"
            className="hidden sm:flex flex-col w-[340px] md:w-[380px] h-[640px] max-h-[90vh] bg-stone-900/95 backdrop-blur-xl rounded-3xl border border-white/15 p-4 text-white shadow-2xl z-40 animate-in slide-in-from-right-5 duration-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <h3 className="font-black text-sm text-white">Comments</h3>
                <span className="text-xs text-stone-400 font-mono">({comments.length})</span>
              </div>
              <button
                type="button"
                onClick={() => setIsCommentsOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Comments List */}
            <div className="flex-1 overflow-y-auto space-y-3.5 py-3 pr-1">
              {comments.map((c) => (
                <div key={c.id} className="space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-stone-200">{c.author}</span>
                    <span className="text-[10px] text-stone-400">{c.timeAgo}</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed">{c.text}</p>
                  <div className="flex items-center gap-2 text-[10px] text-stone-400 pt-0.5">
                    <button type="button" className="hover:text-emerald-400 flex items-center gap-1 cursor-pointer">
                      <ThumbsUp className="w-3 h-3" />
                      <span>{c.likes}</span>
                    </button>
                    <span>•</span>
                    <button type="button" className="hover:text-stone-200 cursor-pointer">Reply</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Comment Input */}
            <form onSubmit={handleAddComment} className="pt-2 border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder="Add a healthy food comment..."
                className="flex-1 bg-black/40 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-emerald-400"
              />
              <button
                type="submit"
                disabled={!newCommentText.trim()}
                className="w-8 h-8 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Toast Notification */}
      {copiedToast && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2 shadow-2xl animate-in fade-in zoom-in-90 duration-150">
          <Check className="w-4 h-4 stroke-[3]" />
          <span>Short link copied to clipboard!</span>
        </div>
      )}
    </div>
  );
}
