'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  X,
  ExternalLink,
  ShieldCheck,
  Flame,
  MapPin,
  Eye,
  CheckCircle2,
  Sparkles,
  Utensils,
  Share2,
  Check,
} from 'lucide-react';
import { Reel, getEmbedUrl } from '@/lib/reelsData';

interface ReelDetailModalProps {
  reel: Reel | null;
  onClose: () => void;
  onViewOnMap?: (restaurant: string, city: string) => void;
  onViewCleanDish?: (restaurant: string, dishName?: string) => void;
}

export default function ReelDetailModal({
  reel,
  onClose,
  onViewOnMap,
  onViewCleanDish,
}: ReelDetailModalProps) {
  const [copied, setCopied] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  if (!reel) return null;

  const embedUrl = getEmbedUrl(reel.reel_url);
  const isInstagram = reel.reel_url.includes('instagram.com');
  const isFacebook = reel.reel_url.includes('facebook.com');

  const handleShare = () => {
    navigator.clipboard?.writeText(reel.reel_url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        id="reel-detail-modal"
        className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 text-zinc-100 rounded-3xl overflow-hidden my-auto flex flex-col max-h-[92vh] shadow-[0_0_50px_rgba(0,0,0,0.9)]"
      >
        {/* Modal Top Bar */}
        <div className="p-3.5 sm:p-5 bg-zinc-900/90 border-b border-white/10 flex items-center justify-between gap-2.5 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h3 className="text-sm sm:text-lg font-black text-white leading-tight truncate max-w-[150px] sm:max-w-none">
                  {reel.restaurant}
                </h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/40 shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Verified Clean</span>
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5 flex items-center gap-1.5 truncate">
                <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="shrink-0 text-zinc-300">{reel.city}</span>
                <span className="text-zinc-600">&bull;</span>
                <span className="text-emerald-400 font-mono font-medium truncate">{reel.creator_handle}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/10 transition-all cursor-pointer shadow-sm text-xs font-bold flex items-center gap-1.5 hover:scale-[1.02]"
              title="Copy Reel Link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline text-emerald-300">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>

            <button
              id="close-reel-modal-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-all cursor-pointer hover:scale-[1.02]"
              title="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Content: Split Grid on Desktop */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 min-h-0">
          {/* Left Column: Embed / Player View (5 cols) */}
          <div className="md:col-span-6 lg:col-span-5 bg-black p-4 sm:p-5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 flex flex-col shadow-2xl">
              {!iframeError ? (
                <iframe
                  src={embedUrl}
                  className="w-full h-full border-0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  onError={() => setIframeError(true)}
                  title={`${reel.restaurant} reel`}
                />
              ) : (
                <div className="relative w-full h-full">
                  {reel.thumbnail && (
                    <Image
                      src={reel.thumbnail}
                      alt={reel.dish_name || reel.restaurant}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-end p-6 text-center space-y-3">
                    <p className="text-xs text-zinc-300 font-medium">
                      Instagram embed is restricted in this preview. Watch directly on {isFacebook ? 'Facebook' : 'Instagram'}:
                    </p>
                    <a
                      href={reel.reel_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black shadow-lg shadow-emerald-500/30 hover:scale-[1.02] transition-transform"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Watch Reel on {isFacebook ? 'Facebook' : 'Instagram'}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Link Below Embed */}
            <div className="mt-3 flex items-center justify-between w-full max-w-[320px]">
              <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                <span>{reel.views} authentic views</span>
              </span>
              <a
                href={reel.reel_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-emerald-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Open {isFacebook ? 'Facebook' : 'Instagram'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Full Metadata & Health Proof (7 cols) */}
          <div className="md:col-span-6 lg:col-span-7 p-5 sm:p-7 space-y-5 flex flex-col justify-between bg-zinc-950">
            <div className="space-y-4">
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 text-xs font-extrabold border border-emerald-500/40 shadow-xs">
                  <Flame className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{reel.cooking_fat}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-bold border border-amber-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{reel.macros_text}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-900 text-zinc-300 text-xs font-medium border border-white/10">
                  <span>📍 {reel.city}</span>
                </span>
              </div>

              {/* Viral Hook / Caption Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 backdrop-blur-md">
                <span className="text-[10px] font-black uppercase text-emerald-400 tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Live Proof &bull; Kitchen Witness</span>
                </span>
                <p className="text-sm font-semibold text-zinc-100 leading-snug">
                  &ldquo;{reel.caption_for_app}&rdquo;
                </p>
              </div>

              {/* Eating Scene & Creator */}
              <div className="p-3.5 rounded-2xl bg-zinc-900/80 flex items-center justify-between text-xs border border-white/10">
                <div>
                  <span className="text-[10px] font-bold uppercase text-zinc-500 block">
                    Proof Scene
                  </span>
                  <span className="text-zinc-200 font-medium">
                    {reel.eating_type}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase text-zinc-500 block">
                    Verified Creator
                  </span>
                  <span className="text-emerald-400 font-bold font-mono">
                    {reel.creator_handle}
                  </span>
                </div>
              </div>

              {/* Health & Diet Tags */}
              <div>
                <span className="text-[11px] font-black uppercase text-zinc-400 tracking-wider block mb-2">
                  Certified Standards
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {reel.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-300 text-[11px] font-bold border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-950/70 text-emerald-300 text-[11px] font-bold border border-emerald-500/40">
                    #zero-seed-oils
                  </span>
                </div>
              </div>

              {/* Dish Info if available */}
              {reel.dish_name && (
                <div className="p-3.5 rounded-2xl bg-emerald-950/40 flex items-center gap-3 border border-emerald-500/30">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-zinc-950 flex items-center justify-center shrink-0 font-bold">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                      Featured Dish
                    </span>
                    <span className="text-xs font-black text-white">
                      {reel.dish_name}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <button
                id="modal-view-on-map-btn"
                onClick={() => {
                  onViewOnMap?.(reel.restaurant, reel.city);
                  onClose();
                }}
                className="flex-1 min-w-[140px] px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-black border border-white/10 transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>View on Oasis Map</span>
              </button>

              <button
                id="modal-view-clean-dish-btn"
                onClick={() => {
                  onViewCleanDish?.(reel.restaurant, reel.dish_name);
                  onClose();
                }}
                className="flex-1 min-w-[140px] px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:scale-[1.02]"
              >
                <span>Inspect Clean Plate &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
