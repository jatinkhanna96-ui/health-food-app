'use client';

import React from 'react';
import Image from 'next/image';
import { Dish } from '@/lib/mockData';
import {
  Star,
  MapPin,
  Plus,
  WheatOff,
  MilkOff,
  Check,
  Zap,
  Leaf,
  ShieldCheck,
} from 'lucide-react';

interface DishCardProps {
  dish: Dish;
  isSelected?: boolean;
  onSelect: (dish: Dish) => void;
  onOpenDetails: (dish: Dish) => void;
}

export default function DishCard({
  dish,
  isSelected = false,
  onSelect,
  onOpenDetails,
}: DishCardProps) {
  // Format clean fat description
  const cleanFatDisplay =
    dish.cookingFat.toLowerCase().includes('tallow') &&
    !dish.cookingFat.toLowerCase().includes('grass-fed')
      ? `100% Grass-Fed ${dish.cookingFat}`
      : dish.cookingFat;

  // Protein bar width percentage based on 60g max scale
  const proteinPercent = Math.min(100, Math.round((dish.protein / 60) * 100));

  return (
    <div
      id={`dish-card-${dish.id}`}
      onClick={() => onSelect(dish)}
      className={`group relative rounded-[20px] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${
        isSelected
          ? 'bg-[#0E221A] border border-[#35E27F] shadow-[0_0_24px_-4px_rgba(53,226,127,0.25)]'
          : 'bg-[#0B1A14] border border-[#1B3B2F] hover:border-[#35E27F]/40 hover:bg-[#0E2019]'
      }`}
    >
      <div className="w-full">
        {/* Top Image Container - Proportional culinary aspect ratio, zero stretching */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] md:h-52 overflow-hidden bg-[#07130F] shrink-0">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            referrerPolicy="no-referrer"
          />

          {/* Clean Dark Vignette at bottom for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A14] via-transparent to-black/30 pointer-events-none" />

          {/* Sophisticated Verification Indicator */}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#07130F]/85 backdrop-blur-md text-[#F5F7F3] text-[10px] sm:text-[11px] font-semibold tracking-wide border border-[#1B3B2F] flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35E27F]" />
            <span className="text-[#35E27F] font-bold">✓</span>
            <span>Restaurant Confirmed</span>
          </div>

          {/* Rating Pill */}
          <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 flex items-center gap-1">
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#07130F]/85 backdrop-blur-md text-[#F5F7F3] text-[11px] sm:text-xs font-bold shadow-sm flex items-center gap-1 border border-[#1B3B2F]">
              <Star className="w-3 h-3 fill-[#35E27F] text-[#35E27F]" />
              <span>{dish.rating.toFixed(1)}</span>
            </span>
          </div>

          {/* Nutrition Data Bar */}
          <div className="absolute bottom-2 inset-x-2 sm:bottom-2.5 sm:inset-x-3">
            <div className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#07130F]/90 backdrop-blur-md border border-[#1B3B2F] flex items-center justify-between text-[11px] sm:text-xs font-semibold text-[#F5F7F3]">
              <div className="flex items-center gap-2">
                <span className="text-[#F5F7F3] font-bold">{dish.calories} kcal</span>
                <span className="text-[#1B3B2F]">&bull;</span>
                <span className="text-[#35E27F] font-bold">{dish.protein}g protein</span>
              </div>
              <div className="w-14 sm:w-16 h-1.5 bg-[#1B3B2F] rounded-full overflow-hidden shrink-0">
                <div
                  className="h-full bg-[#35E27F] rounded-full transition-all duration-500"
                  style={{ width: `${proteinPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-3 sm:p-5 space-y-2.5 sm:space-y-3">
          {/* Restaurant & Location */}
          <div className="space-y-0.5 sm:space-y-1">
            <h3 className="font-bold text-[#F5F7F3] text-sm sm:text-base group-hover:text-[#35E27F] transition-colors duration-200 leading-snug line-clamp-1">
              {dish.name}
            </h3>
            <p className="text-[11px] sm:text-xs font-medium text-[#A8B5AE] flex items-center gap-1.5">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#35E27F] shrink-0" />
              <span className="truncate">{dish.restaurant}</span>
              <span className="text-[#1B3B2F]">&bull;</span>
              <span className="truncate">{dish.city}</span>
            </p>
          </div>

          {/* Useful Consumer-Friendly Tags */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5">
            {dish.protein >= 35 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#123D2A]/70 text-[#35E27F] text-[10px] sm:text-[11px] font-bold border border-[#1B3B2F]">
                High Protein
              </span>
            )}
            {dish.calories <= 550 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#0F231B] text-[#DDFBE9] text-[10px] sm:text-[11px] font-semibold border border-[#1B3B2F]">
                Lower Calorie
              </span>
            )}
            {dish.isKeto && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#0F231B] text-[#DDFBE9] text-[10px] sm:text-[11px] font-semibold border border-[#1B3B2F]">
                Low Sugar
              </span>
            )}
            {dish.isSeedOilFree && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#0F231B] text-[#A8B5AE] text-[10px] sm:text-[11px] font-medium border border-[#1B3B2F]">
                Seed-Oil Free
              </span>
            )}
            {dish.isGlutenFree && (
              <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-lg bg-[#0F231B] text-[#A8B5AE] text-[10px] sm:text-[11px] font-medium border border-[#1B3B2F]">
                Gluten-Free
              </span>
            )}
            {dish.isDairyFree && (
              <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-lg bg-[#0F231B] text-[#A8B5AE] text-[10px] sm:text-[11px] font-medium border border-[#1B3B2F]">
                Dairy-Free
              </span>
            )}
          </div>

          {/* Why It Fits - Section 5 Direct Reason */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-[#0F231B] border border-[#1B3B2F] space-y-1 sm:space-y-1.5">
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#35E27F] block">
              Why it fits
            </span>
            <div className="grid grid-cols-2 gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-[#F5F7F3]">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="text-[#35E27F] font-bold text-xs">✓</span>
                <span className="truncate">{dish.protein}g protein</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="text-[#35E27F] font-bold text-xs">✓</span>
                <span className="truncate">{dish.calories} cal</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="text-[#35E27F] font-bold text-xs">✓</span>
                <span className="truncate">{dish.cookingFat}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="text-[#35E27F] font-bold text-xs">✓</span>
                <span className="truncate">
                  {dish.highlights?.[0] || (dish.isKeto ? 'Low added sugar' : 'Whole foods')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Strip */}
      <div className="px-3 sm:px-5 pb-3 sm:pb-4 pt-2.5 sm:pt-3 flex items-center justify-between border-t border-[#1B3B2F] bg-[#07130F]/40 gap-2 sm:gap-3">
        <div>
          <span className="text-base sm:text-lg font-bold text-[#F5F7F3] block leading-tight tracking-tight">
            ${dish.price.toFixed(2)}
          </span>
          <span className="text-[9px] sm:text-[10px] font-medium text-[#A8B5AE] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35E27F] inline-block" />
            <span>Menu confirmed</span>
          </span>
        </div>

        <button
          id={`view-dish-btn-${dish.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(dish);
          }}
          className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm flex items-center gap-1 sm:gap-1.5 active:scale-95 whitespace-nowrap"
          title="See what is inside this dish"
        >
          <span>See What&apos;s In It</span>
          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
