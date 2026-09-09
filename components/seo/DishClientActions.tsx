'use client';

import React, { useState } from 'react';
import { Share2, Bookmark, Check, Navigation, ExternalLink, Sparkles } from 'lucide-react';
import { Dish } from '@/lib/seoData';
import { getGoogleMapsDirectionsUrl } from '@/lib/utils';

interface DishClientActionsProps {
  dish: Dish;
}

export default function DishClientActions({ dish }: DishClientActionsProps) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleShare = async () => {
    if (typeof window === 'undefined') return;
    const url = window.location.href;
    const shareData = {
      title: `${dish.dish_name} at ${dish.restaurant_name}`,
      text: `${dish.calories} kcal, ${dish.protein_g}g protein, ${dish.cooking_fat} verified clean dining.`,
      url,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // no-op
    }
  };

  const handleToggleSave = () => {
    setSaved((prev) => !prev);
  };

  const mapsUrl = getGoogleMapsDirectionsUrl({
    restaurant: dish.restaurant_name,
    address: dish.address,
    city: dish.city,
  });

  return (
    <div className="flex flex-wrap items-center gap-2.5 pt-2">
      {/* Share / Copy Link Button */}
      <button
        id="seo-share-dish-btn"
        onClick={handleShare}
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF6EE] text-[#231815] border border-[#E8DEC8] text-xs font-bold transition-all cursor-pointer active:scale-95 shadow-xs"
        title="Share this clean dish link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-[#2D5A34]" />
            <span className="text-[#2D5A34]">Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5 text-[#C86A1D]" />
            <span>Share Dish</span>
          </>
        )}
      </button>

      {/* Save to Favorites Button */}
      <button
        id="seo-save-dish-btn"
        onClick={handleToggleSave}
        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer active:scale-95 shadow-xs ${
          saved
            ? 'bg-[#C86A1D] text-white border-[#C86A1D]'
            : 'bg-white hover:bg-[#FAF6EE] text-[#231815] border-[#E8DEC8]'
        }`}
        title="Save to your clean dining list"
      >
        <Bookmark
          className={`w-3.5 h-3.5 ${
            saved ? 'fill-current text-white' : 'text-[#C86A1D]'
          }`}
        />
        <span>{saved ? 'Saved to List' : 'Save Dish'}</span>
      </button>

      {/* Get Directions / Open in Maps */}
      <a
        id="seo-maps-directions-link"
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF6EE] hover:bg-[#F4EDE2] text-[#6B5E55] hover:text-[#231815] border border-[#E8DEC8] text-xs font-bold transition-all cursor-pointer active:scale-95"
      >
        <Navigation className="w-3.5 h-3.5 text-[#2D5A34]" />
        <span>Directions</span>
        <ExternalLink className="w-3 h-3 text-[#8C7E72]" />
      </a>
    </div>
  );
}
