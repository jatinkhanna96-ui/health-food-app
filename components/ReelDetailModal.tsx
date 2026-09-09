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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-md overflow-y-auto">
      <div
        id="reel-detail-modal"
        className="relative w-full max-w-4xl bg-white border border-[#E8DEC8] text-[#231815] rounded-[28px] overflow-hidden my-auto flex flex-col max-h-[92vh] shadow-2xl"
      >
        {/* Modal Top Bar */}
        <div className="p-3.5 sm:p-5 bg-[#FAF6EE] border-b border-[#E8DEC8] flex items-center justify-between gap-2.5 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#EBF4ED] text-[#2D5A34] flex items-center justify-center border border-[#C5DEC9] shrink-0 shadow-xs">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D5A34]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h3 className="text-sm sm:text-base font-serif font-black text-[#231815] leading-tight truncate max-w-[170px] sm:max-w-none">
                  {reel.restaurant}
                </h3>
                {reel.type === 'fallback-nationwide' && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#FEF5E7] text-[#C86A1D] text-[10px] font-bold uppercase tracking-wider border border-[#F6D8A8] shrink-0">
                    Nationwide Viral
                  </span>
                )}
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EBF4ED] text-[#2D5A34] text-[10px] font-bold uppercase tracking-wider border border-[#C5DEC9] shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-[#2D5A34]" />
                  <span>Verified Clean</span>
                </span>
              </div>
              <p className="text-xs text-[#6B5E55] mt-0.5 flex items-center gap-1.5 truncate">
                <MapPin className="w-3 h-3 text-[#C86A1D] shrink-0" />
                <span className="shrink-0 text-[#231815] font-semibold">{reel.city}</span>
                <span className="text-[#E8DEC8]">&bull;</span>
                <span className="text-[#C86A1D] font-mono font-bold truncate">{reel.creator_handle}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {reel.reel_url && (
              <button
                onClick={handleShare}
                className="p-2 rounded-xl bg-white hover:bg-[#F4EDE2] text-[#231815] border border-[#E8DEC8] transition-all cursor-pointer text-xs font-bold flex items-center gap-1.5 shadow-xs"
                title="Copy Reel Link"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#2D5A34]" />
                    <span className="hidden sm:inline text-[#2D5A34]">Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-[#6B5E55]" />
                    <span className="hidden sm:inline">Share</span>
                  </>
                )}
              </button>
            )}

            <button
              id="close-reel-modal-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-white hover:bg-[#F4EDE2] text-[#6B5E55] hover:text-[#231815] border border-[#E8DEC8] transition-all cursor-pointer shadow-xs"
              title="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Content: Split Grid on Desktop */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 min-h-0">
          {/* Left Column: Embed / Player View (5 cols) */}
          <div className="md:col-span-6 lg:col-span-5 bg-[#FAF6EE] p-4 sm:p-5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#E8DEC8]">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-[#E8DEC8] flex flex-col shadow-xl">
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
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#FAF6EE]">
                      <Sparkles className="w-10 h-10 text-[#C86A1D] mb-2" />
                      <p className="text-xs text-[#6B5E55]">Community Scout Requested</p>
                    </div>
                  )}
                  {reel.reel_url && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-end p-6 text-center space-y-3">
                      <p className="text-xs text-white/90 font-medium">
                        Watch directly on {isFacebook ? 'Facebook' : 'Instagram'}:
                      </p>
                      <a
                        href={reel.reel_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C86A1D] hover:bg-[#A95513] text-white text-xs font-bold transition-all shadow-md"
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
                <span className="text-[11px] text-[#6B5E55] flex items-center gap-1 font-medium">
                  <Eye className="w-3.5 h-3.5 text-[#2D5A34]" />
                  <span>{reel.views} views</span>
                </span>
                <a
                  href={reel.reel_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#C86A1D] hover:underline inline-flex items-center gap-1"
                >
                  <span>Creator: {reel.creator_handle}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Full Macros & Health Verification */}
          <div className="md:col-span-6 lg:col-span-7 p-5 sm:p-7 space-y-5 flex flex-col justify-between bg-white">
            <div className="space-y-4">
              {/* Top Macro Breakdown Grid */}
              <div>
                <span className="text-[11px] font-bold uppercase text-[#2D5A34] tracking-wider block mb-2.5 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#C86A1D]" />
                  <span>Full Verified Macros &amp; Nutrition</span>
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-3 rounded-xl bg-[#EBF4ED] border border-[#C5DEC9] text-center">
                    <span className="text-[10px] text-[#2D5A34] uppercase font-bold block">Protein</span>
                    <span className="text-base sm:text-lg font-black text-[#2D5A34]">{reel.protein}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#E8DEC8] text-center">
                    <span className="text-[10px] text-[#6B5E55] uppercase font-bold block">Fiber</span>
                    <span className="text-base sm:text-lg font-black text-[#231815]">{reel.fiber}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#E8DEC8] text-center">
                    <span className="text-[10px] text-[#6B5E55] uppercase font-bold block">Calories</span>
                    <span className="text-base sm:text-lg font-black text-[#231815]">{reel.calories}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#E8DEC8] text-center">
                    <span className="text-[10px] text-[#6B5E55] uppercase font-bold block">Sugar</span>
                    <span className="text-base sm:text-lg font-black text-[#231815]">{reel.sugar}</span>
                  </div>
                </div>
              </div>

              {/* Hook / Caption Card */}
              <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DEC8] space-y-1.5">
                <span className="text-[10px] font-bold uppercase text-[#2D5A34] tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#2D5A34]" />
                  <span>On-Camera Review</span>
                </span>
                <p className="text-sm font-medium text-[#231815] leading-snug">
                  &ldquo;{reel.caption_for_app || reel.caption}&rdquo;
                </p>
              </div>

              {/* Off-Delivery / Local Insight Card (if why or why_off_delivery exists) */}
              {(reel.why || reel.why_off_delivery) && (
                <div className="p-4 rounded-2xl bg-[#FEF5E7] border border-[#F6D8A8] space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase text-[#C86A1D] tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C86A1D]" />
                      <span>Why It&apos;s Off-Delivery (Must Eat On-Spot)</span>
                    </span>
                    {reel.price && (
                      <span className="text-xs font-black text-white bg-[#C86A1D] px-2 py-0.5 rounded-md font-mono">
                        ₹{reel.price}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-[#231815] leading-relaxed">
                    {reel.why_off_delivery || reel.why}
                  </p>
                </div>
              )}

              {/* Creator Credit & Location Info */}
              <div className="p-3.5 rounded-2xl bg-[#FAF6EE] flex items-center justify-between text-xs border border-[#E8DEC8]">
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#8C7E72] block">
                    Location &amp; Spot
                  </span>
                  <span className="text-[#231815] font-bold">
                    {reel.restaurant} &bull; {reel.city}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase text-[#8C7E72] block">
                    Creator Credit
                  </span>
                  <span className="text-[#C86A1D] font-bold font-mono">
                    {reel.creator_handle}
                  </span>
                </div>
              </div>

              {/* Health & Diet Tags */}
              {reel.tags && reel.tags.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#6B5E55] tracking-wider block mb-2">
                    Verified Diet Tags
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {reel.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-[#FAF6EE] text-[#6B5E55] text-[11px] font-semibold border border-[#E8DEC8]"
                      >
                        #{tag}
                      </span>
                    ))}
                    <span className="px-2.5 py-1 rounded-lg bg-[#EBF4ED] text-[#2D5A34] text-[11px] font-bold border border-[#C5DEC9]">
                      #100%-seed-oil-free
                    </span>
                  </div>
                </div>
              )}

              {/* Featured Dish Name */}
              {reel.dish_name && (
                <div className="p-3.5 rounded-2xl bg-[#FAF6EE] flex items-center gap-3 border border-[#E8DEC8]">
                  <div className="w-9 h-9 rounded-xl bg-[#FEF5E7] text-[#C86A1D] flex items-center justify-center shrink-0 font-bold border border-[#F6D8A8]">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#C86A1D] uppercase tracking-wider block">
                      Target Clean Dish
                    </span>
                    <span className="text-xs font-bold text-[#231815]">
                      {reel.dish_name}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* CTAs: View on Map & View Clean Dish → */}
            <div className="pt-4 border-t border-[#E8DEC8] flex flex-wrap items-center gap-3">
              <button
                id="modal-view-on-map-btn"
                onClick={() => {
                  onViewOnMap?.(reel.restaurant, String(reel.city));
                  onClose();
                }}
                className="flex-1 min-w-[140px] px-4 py-3 rounded-xl bg-white hover:bg-[#FAF6EE] text-[#231815] text-xs font-bold border border-[#E8DEC8] transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2 shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C86A1D]" />
                <span>View on Map</span>
              </button>

              <button
                id="modal-view-clean-dish-btn"
                onClick={() => {
                  onViewCleanDish?.(reel.restaurant, reel.dish_name);
                  onClose();
                }}
                className="flex-1 min-w-[140px] px-4 py-3 rounded-xl bg-[#C86A1D] hover:bg-[#A95513] text-white text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2 shadow-md"
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
