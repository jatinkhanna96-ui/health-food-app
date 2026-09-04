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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        id="reel-detail-modal"
        className="relative w-full max-w-4xl glass-panel text-stone-100 rounded-3xl overflow-hidden my-auto flex flex-col max-h-[92vh]"
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-black/40 backdrop-blur-md border-b border-white/15 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl glass-pill text-[#b6f7c1] flex items-center justify-center border border-[#b6f7c1]/30 shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#b6f7c1]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white leading-none">
                  {reel.restaurant}
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full glass-pill-dark text-[#b6f7c1] text-[10px] font-bold uppercase tracking-wider border border-[#b6f7c1]/30">
                  <CheckCircle2 className="w-3 h-3 text-[#b6f7c1]" />
                  <span>Verified Clean</span>
                </span>
              </div>
              <p className="text-xs text-emerald-200/70 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#b6f7c1]" />
                <span>{reel.city}</span>
                <span className="text-emerald-500">•</span>
                <span>{reel.creator_handle}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl glass-pill hover:bg-white/15 text-emerald-200 border border-white/20 transition-all cursor-pointer shadow-xs text-xs font-bold flex items-center gap-1.5"
              title="Copy Reel Link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#b6f7c1]" />
                  <span className="hidden sm:inline text-[#b6f7c1]">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>

            <button
              id="close-reel-modal-btn"
              onClick={onClose}
              className="p-2 rounded-xl glass-pill hover:bg-white/15 text-emerald-100 border border-white/20 transition-all cursor-pointer"
              title="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Content: Split Grid on Desktop */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 min-h-0">
          {/* Left Column: Embed / Player View (5 cols) */}
          <div className="md:col-span-6 lg:col-span-5 bg-black/40 p-4 sm:p-5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/15">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden glass-card border border-white/20 flex flex-col">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col items-center justify-end p-6 text-center space-y-3">
                    <p className="text-xs text-white/90 font-medium">
                      Instagram embed is restricted in this preview. Watch directly on {isFacebook ? 'Facebook' : 'Instagram'}:
                    </p>
                    <a
                      href={reel.reel_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-btn-plus text-[#0a2e1f] text-xs font-black"
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
              <span className="text-[11px] text-emerald-300/70 flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-[#b6f7c1]" />
                <span>{reel.views} authentic views</span>
              </span>
              <a
                href={reel.reel_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-[#b6f7c1] hover:underline inline-flex items-center gap-1"
              >
                <span>Open {isFacebook ? 'Facebook' : 'Instagram'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Full Metadata & Health Proof (7 cols) */}
          <div className="md:col-span-6 lg:col-span-7 p-5 sm:p-7 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill-dark text-[#b6f7c1] text-xs font-extrabold border border-[#b6f7c1]/40 shadow-xs">
                  <Flame className="w-3.5 h-3.5 text-[#b6f7c1]" />
                  <span>{reel.cooking_fat}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full glass-pill text-emerald-200 text-xs font-bold border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{reel.macros_text}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full glass-pill-dark text-emerald-300/80 text-xs font-medium border border-white/10">
                  <span>📍 {reel.city}</span>
                </span>
              </div>

              {/* Viral Hook / Caption Card */}
              <div className="p-4 rounded-2xl glass-card space-y-1.5">
                <span className="text-[10px] font-black uppercase text-[#b6f7c1] tracking-wider">
                  Live Proof &bull; Viral Hook
                </span>
                <p className="text-sm font-semibold text-white leading-snug">
                  &ldquo;{reel.caption_for_app}&rdquo;
                </p>
              </div>

              {/* Eating Scene & Creator */}
              <div className="p-3.5 rounded-2xl glass-pill flex items-center justify-between text-xs border border-white/15">
                <div>
                  <span className="text-[10px] font-bold uppercase text-emerald-400/80 block">
                    Proof Scene
                  </span>
                  <span className="text-emerald-100 font-medium">
                    {reel.eating_type}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase text-emerald-400/80 block">
                    Creator Scout
                  </span>
                  <span className="text-[#b6f7c1] font-bold font-mono">
                    {reel.creator_handle}
                  </span>
                </div>
              </div>

              {/* Health & Diet Tags */}
              <div>
                <span className="text-[11px] font-black uppercase text-emerald-400/80 tracking-wider block mb-2">
                  Certified Standards
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {reel.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg glass-pill text-[#b6f7c1] text-[11px] font-bold border border-white/15"
                    >
                      #{tag}
                    </span>
                  ))}
                  <span className="px-2.5 py-1 rounded-lg glass-pill text-[#b6f7c1] text-[11px] font-bold border border-white/15">
                    #zero-seed-oils
                  </span>
                </div>
              </div>

              {/* Dish Info if available */}
              {reel.dish_name && (
                <div className="p-3.5 rounded-2xl glass-card flex items-center gap-3 border border-white/15">
                  <div className="w-10 h-10 rounded-xl glass-pill text-[#b6f7c1] flex items-center justify-center shrink-0 border border-[#b6f7c1]/20">
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
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-3">
              <button
                id="modal-view-on-map-btn"
                onClick={() => {
                  onViewOnMap?.(reel.restaurant, reel.city);
                  onClose();
                }}
                className="flex-1 min-w-[140px] px-4 py-2.5 rounded-xl glass-pill hover:bg-white/15 text-[#b6f7c1] text-xs font-black border border-white/20 transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-[#b6f7c1]" />
                <span>View on Map</span>
              </button>

              <button
                id="modal-view-clean-dish-btn"
                onClick={() => {
                  onViewCleanDish?.(reel.restaurant, reel.dish_name);
                  onClose();
                }}
                className="flex-1 min-w-[140px] px-4 py-2.5 rounded-xl glass-btn-plus text-[#0a2e1f] text-xs font-black transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2"
              >
                <span>View Clean Dish &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
