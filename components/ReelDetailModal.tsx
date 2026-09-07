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
  Zap,
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
  const isInstagram = reel.reel_url?.includes('instagram.com');
  const isFacebook = reel.reel_url?.includes('facebook.com');

  const handleShare = () => {
    if (reel.reel_url) {
      navigator.clipboard?.writeText(reel.reel_url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#07130F]/85 backdrop-blur-md overflow-y-auto">
      <div
        id="reel-detail-modal"
        className="relative w-full max-w-4xl bg-[#0a2e1f] border border-[#1B3B2F] text-[#F5F7F3] rounded-2xl overflow-hidden my-auto flex flex-col max-h-[92vh] shadow-2xl"
      >
        {/* Modal Top Bar */}
        <div className="p-3.5 sm:p-5 bg-[#07130F] border-b border-[#1B3B2F] flex items-center justify-between gap-2.5 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#123D2A] text-[#35E27F] flex items-center justify-center border border-[#1B3B2F] shrink-0 shadow-xs">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#35E27F]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h3 className="text-sm sm:text-base font-bold text-[#F5F7F3] leading-tight truncate max-w-[170px] sm:max-w-none">
                  {reel.restaurant}
                </h3>
                {reel.type === 'fallback-nationwide' && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#f97316]/20 text-[#f97316] text-[10px] font-bold uppercase tracking-wider border border-[#f97316]/40 shrink-0">
                    Nationwide Viral
                  </span>
                )}
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#123D2A] text-[#b6f7c1] text-[10px] font-bold uppercase tracking-wider border border-[#1B3B2F] shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-[#35E27F]" />
                  <span>Verified Clean</span>
                </span>
              </div>
              <p className="text-xs text-[#A8B5AE] mt-0.5 flex items-center gap-1.5 truncate">
                <MapPin className="w-3 h-3 text-[#35E27F] shrink-0" />
                <span className="shrink-0 text-[#F5F7F3] font-medium">{reel.city}</span>
                <span className="text-[#1B3B2F]">&bull;</span>
                <span className="text-[#35E27F] font-mono font-bold truncate">{reel.creator_handle}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {reel.reel_url && (
              <button
                onClick={handleShare}
                className="p-2 rounded-xl bg-[#0F231B] hover:bg-[#123D2A] text-[#F5F7F3] border border-[#1B3B2F] transition-all cursor-pointer text-xs font-semibold flex items-center gap-1.5"
                title="Copy Reel Link"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#35E27F]" />
                    <span className="hidden sm:inline text-[#35E27F]">Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-[#A8B5AE]" />
                    <span className="hidden sm:inline">Share</span>
                  </>
                )}
              </button>
            )}

            <button
              id="close-reel-modal-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-[#0F231B] hover:bg-[#123D2A] text-[#A8B5AE] hover:text-[#F5F7F3] border border-[#1B3B2F] transition-all cursor-pointer"
              title="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Content: Split Grid on Desktop */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 min-h-0">
          {/* Left Column: Embed / Player View (5 cols) */}
          <div className="md:col-span-6 lg:col-span-5 bg-[#07130F] p-4 sm:p-5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#1B3B2F]">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-xl overflow-hidden bg-black border border-[#1B3B2F] flex flex-col shadow-xl">
              {embedUrl && !iframeError ? (
                <iframe
                  src={embedUrl}
                  className="w-full h-full border-0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  onError={() => setIframeError(true)}
                  title={`${reel.restaurant} reel`}
                />
              ) : (
                <div className="relative w-full h-full">
                  {reel.thumbnail ? (
                    <Image
                      src={reel.thumbnail}
                      alt={reel.dish_name || reel.restaurant}
                      fill
                      className="object-cover"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#0a2e1f]">
                      <Sparkles className="w-10 h-10 text-[#35E27F] mb-2" />
                      <p className="text-xs text-[#A8B5AE]">Community Scout Requested</p>
                    </div>
                  )}
                  {reel.reel_url && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-end p-6 text-center space-y-3">
                      <p className="text-xs text-[#F5F7F3]/90 font-medium">
                        Watch directly on {isFacebook ? 'Facebook' : 'Instagram'}:
                      </p>
                      <a
                        href={reel.reel_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all shadow-md"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Watch on {isFacebook ? 'Facebook' : 'Instagram'}</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Direct Link & Creator Credit Below Embed */}
            {reel.reel_url && (
              <div className="mt-3 flex items-center justify-between w-full max-w-[320px] text-xs">
                <span className="text-[11px] text-[#A8B5AE] flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-[#35E27F]" />
                  <span>{reel.views} views</span>
                </span>
                <a
                  href={reel.reel_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#35E27F] hover:underline inline-flex items-center gap-1"
                >
                  <span>Creator: {reel.creator_handle}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Full Macros & Health Verification */}
          <div className="md:col-span-6 lg:col-span-7 p-5 sm:p-7 space-y-5 flex flex-col justify-between bg-[#0a2e1f]">
            <div className="space-y-4">
              {/* Top Macro Breakdown Grid */}
              <div>
                <span className="text-[11px] font-bold uppercase text-[#b6f7c1] tracking-wider block mb-2.5 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#35E27F]" />
                  <span>Full Verified Macros &amp; Nutrition</span>
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-3 rounded-xl bg-[#07130F] border border-[#1B3B2F] text-center">
                    <span className="text-[10px] text-[#A8B5AE] uppercase font-bold block">Protein</span>
                    <span className="text-base sm:text-lg font-extrabold text-[#35E27F]">{reel.protein}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#07130F] border border-[#1B3B2F] text-center">
                    <span className="text-[10px] text-[#A8B5AE] uppercase font-bold block">Fiber</span>
                    <span className="text-base sm:text-lg font-extrabold text-[#b6f7c1]">{reel.fiber}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#07130F] border border-[#1B3B2F] text-center">
                    <span className="text-[10px] text-[#A8B5AE] uppercase font-bold block">Calories</span>
                    <span className="text-base sm:text-lg font-extrabold text-[#F5F7F3]">{reel.calories}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#07130F] border border-[#1B3B2F] text-center">
                    <span className="text-[10px] text-[#A8B5AE] uppercase font-bold block">Sugar</span>
                    <span className="text-base sm:text-lg font-extrabold text-[#35E27F]">{reel.sugar}</span>
                  </div>
                </div>
              </div>

              {/* Hook / Caption Card */}
              <div className="p-4 rounded-xl bg-[#07130F] border border-[#1B3B2F] space-y-1.5">
                <span className="text-[10px] font-bold uppercase text-[#35E27F] tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#35E27F]" />
                  <span>On-Camera Review</span>
                </span>
                <p className="text-sm font-medium text-[#F5F7F3] leading-snug">
                  &ldquo;{reel.caption_for_app || reel.caption}&rdquo;
                </p>
              </div>

              {/* Off-Delivery / Local Insight Card (if why or why_off_delivery exists) */}
              {(reel.why || reel.why_off_delivery) && (
                <div className="p-4 rounded-xl bg-[#123D2A]/80 border border-[#35E27F]/40 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase text-[#35E27F] tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#35E27F]" />
                      <span>Why It&apos;s Off-Delivery (Must Eat On-Spot)</span>
                    </span>
                    {reel.price && (
                      <span className="text-xs font-black text-[#07130F] bg-[#35E27F] px-2 py-0.5 rounded-md font-mono">
                        ₹{reel.price}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-[#F5F7F3] leading-relaxed">
                    {reel.why_off_delivery || reel.why}
                  </p>
                </div>
              )}

              {/* Creator Credit & Location Info */}
              <div className="p-3.5 rounded-xl bg-[#07130F] flex items-center justify-between text-xs border border-[#1B3B2F]">
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#A8B5AE] block">
                    Location &amp; Spot
                  </span>
                  <span className="text-[#F5F7F3] font-bold">
                    {reel.restaurant} &bull; {reel.city}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase text-[#A8B5AE] block">
                    Creator Credit
                  </span>
                  <span className="text-[#35E27F] font-bold font-mono">
                    {reel.creator_handle}
                  </span>
                </div>
              </div>

              {/* Health & Diet Tags */}
              {reel.tags && reel.tags.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#A8B5AE] tracking-wider block mb-2">
                    Verified Diet Tags
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {reel.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-[#07130F] text-[#b6f7c1] text-[11px] font-medium border border-[#1B3B2F]"
                      >
                        #{tag}
                      </span>
                    ))}
                    <span className="px-2.5 py-1 rounded-lg bg-[#123D2A] text-[#35E27F] text-[11px] font-bold border border-[#1B3B2F]">
                      #100%-seed-oil-free
                    </span>
                  </div>
                </div>
              )}

              {/* Featured Dish Name */}
              {reel.dish_name && (
                <div className="p-3.5 rounded-xl bg-[#07130F] flex items-center gap-3 border border-[#1B3B2F]">
                  <div className="w-9 h-9 rounded-xl bg-[#123D2A] text-[#35E27F] flex items-center justify-center shrink-0 font-bold border border-[#1B3B2F]">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#35E27F] uppercase tracking-wider block">
                      Target Clean Dish
                    </span>
                    <span className="text-xs font-bold text-[#F5F7F3]">
                      {reel.dish_name}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* CTAs: View on Map & View Clean Dish → */}
            <div className="pt-4 border-t border-[#1B3B2F] flex flex-wrap items-center gap-3">
              <button
                id="modal-view-on-map-btn"
                onClick={() => {
                  onViewOnMap?.(reel.restaurant, String(reel.city));
                  onClose();
                }}
                className="flex-1 min-w-[140px] px-4 py-3 rounded-xl bg-[#07130F] hover:bg-[#0F231B] text-[#F5F7F3] text-xs font-semibold border border-[#1B3B2F] transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-[#35E27F]" />
                <span>View on Map</span>
              </button>

              <button
                id="modal-view-clean-dish-btn"
                onClick={() => {
                  onViewCleanDish?.(reel.restaurant, reel.dish_name);
                  onClose();
                }}
                className="flex-1 min-w-[140px] px-4 py-3 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2 shadow-sm"
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
