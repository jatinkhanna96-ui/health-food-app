'use client';

import React from 'react';
import Image from 'next/image';
import { Dish } from '@/lib/mockData';
import { formatPrice } from '@/lib/utils';
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

const DishCard = React.memo(function DishCard({
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
      className={`group relative rounded-[26px] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${
        isSelected
          ? 'bg-[#FFFDF9] border-2 border-[#C86A1D] shadow-[0_12px_36px_-6px_rgba(200,106,29,0.22)] ring-2 ring-[#C86A1D]/20'
          : 'bg-white border border-[#E8DEC8] hover:border-[#D4C3A3] hover:shadow-[0_16px_36px_-8px_rgba(140,100,50,0.12)] shadow-[0_4px_20px_-4px_rgba(140,100,50,0.06)]'
      }`}
    >
      <div className="w-full">
        {/* Top Image Container - Proportional culinary aspect ratio, zero stretching */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] md:h-52 overflow-hidden bg-[#F7F1E5] shrink-0">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            referrerPolicy="no-referrer"
          />

          {/* Clean Subtle Gradient at bottom for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

          {/* Top Overlays: Kitchen Verified & Rating Pill in a Single Flex Row to Prevent Any Icon Overlap */}
          <div className="absolute top-2.5 inset-x-2.5 sm:top-3 sm:inset-x-3 z-10 flex items-center justify-between gap-1.5 sm:gap-2 pointer-events-none">
            {/* Wholesome Verification Indicator */}
            <div className="pointer-events-auto px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/95 backdrop-blur-md text-[#2D5A34] text-[10px] sm:text-[11px] font-bold tracking-wide border border-[#E8DEC8] flex items-center gap-1.5 shadow-xs shrink min-w-0 max-w-[72%]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A34] shrink-0" />
              <span className="truncate">Kitchen Verified</span>
            </div>

            {/* Rating Pill */}
            <div className="pointer-events-auto shrink-0">
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/95 backdrop-blur-md text-[#231815] text-[11px] sm:text-xs font-bold shadow-xs flex items-center gap-1 border border-[#E8DEC8]">
                <Star className="w-3 h-3 fill-[#F5C842] text-[#F5C842] shrink-0" />
                <span>{dish.rating.toFixed(1)}</span>
              </span>
            </div>
          </div>

          {/* Nutrition Data Bar */}
          <div className="absolute bottom-2 inset-x-2 sm:bottom-2.5 sm:inset-x-3 z-10 pointer-events-none">
            <div className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8DEC8] flex items-center justify-between text-[11px] sm:text-xs font-semibold text-[#231815] shadow-xs">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 truncate">
                <span className="text-[#231815] font-bold shrink-0">{dish.calories} kcal</span>
                <span className="text-[#E8DEC8] shrink-0">&bull;</span>
                <span className="text-[#2D5A34] font-bold truncate">{dish.protein}g protein</span>
              </div>
              <div className="w-12 sm:w-16 h-1.5 bg-[#E8DEC8] rounded-full overflow-hidden shrink-0 ml-2">
                <div
                  className="h-full bg-[#2D5A34] rounded-full transition-all duration-500"
                  style={{ width: `${proteinPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-3.5 sm:p-5 space-y-2.5 sm:space-y-3">
          {/* Restaurant & Location */}
          <div className="space-y-0.5 sm:space-y-1">
            <h3 className="font-bold text-[#231815] text-sm sm:text-base group-hover:text-[#C86A1D] transition-colors duration-200 leading-snug line-clamp-1">
              {dish.name}
            </h3>
            <p className="text-[11px] sm:text-xs font-medium text-[#6B5E55] flex items-center gap-1.5 min-w-0">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C86A1D] shrink-0" />
              <span className="truncate font-semibold min-w-0">{dish.restaurant}</span>
              <span className="text-[#DFD2BC] shrink-0">&bull;</span>
              <span className="truncate min-w-0">{dish.city}</span>
            </p>
          </div>

          {/* Useful Consumer-Friendly Tags */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5">
            {dish.protein >= 35 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#EBF4ED] text-[#2D5A34] text-[10px] sm:text-[11px] font-bold border border-[#D5E8D8] shrink-0">
                High Protein
              </span>
            )}
            {dish.calories <= 550 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#FDF5D9] text-[#8C5D0D] text-[10px] sm:text-[11px] font-semibold border border-[#F4E3A8] shrink-0">
                Lower Calorie
              </span>
            )}
            {dish.isKeto && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#FDF5D9] text-[#8C5D0D] text-[10px] sm:text-[11px] font-semibold border border-[#F4E3A8] shrink-0">
                Low Sugar
              </span>
            )}
            {dish.isSeedOilFree && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#FAF6EE] text-[#6B5E55] text-[10px] sm:text-[11px] font-medium border border-[#E8DEC8] shrink-0">
                Seed-Oil Free
              </span>
            )}
            {dish.isGlutenFree && (
              <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-lg bg-[#FAF6EE] text-[#6B5E55] text-[10px] sm:text-[11px] font-medium border border-[#E8DEC8] shrink-0">
                Gluten-Free
              </span>
            )}
            {dish.isDairyFree && (
              <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-lg bg-[#FAF6EE] text-[#6B5E55] text-[10px] sm:text-[11px] font-medium border border-[#E8DEC8] shrink-0">
                Dairy-Free
              </span>
            )}
          </div>

          {/* Why It Fits - Wholesome Reason Box */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-[#FAF6EE] border border-[#E8DEC8] space-y-1 sm:space-y-1.5">
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#C86A1D] block">
              Why it fits
            </span>
            <div className="grid grid-cols-2 gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-[#231815]">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-[#2D5A34] font-bold text-xs shrink-0">✓</span>
                <span className="truncate min-w-0">{dish.protein}g protein</span>
              </div>
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-[#2D5A34] font-bold text-xs shrink-0">✓</span>
                <span className="truncate min-w-0">{dish.calories} cal</span>
              </div>
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-[#2D5A34] font-bold text-xs shrink-0">✓</span>
                <span className="truncate min-w-0 font-medium">{dish.cookingFat}</span>
              </div>
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-[#2D5A34] font-bold text-xs shrink-0">✓</span>
                <span className="truncate min-w-0">
                  {dish.highlights?.[0] || (dish.isKeto ? 'Low added sugar' : 'Whole foods')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Strip */}
      <div className="px-3.5 sm:px-5 pb-3 sm:pb-4 pt-2.5 sm:pt-3 flex items-center justify-between border-t border-[#E8DEC8] bg-[#FAF6EE]/50 gap-2 sm:gap-3">
        <div>
          <span className="text-base sm:text-lg font-bold text-[#231815] block leading-tight tracking-tight">
            {formatPrice(dish.price, dish.city, dish.id)}
          </span>
          <span className="text-[9px] sm:text-[10px] font-medium text-[#6B5E55] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A34] inline-block" />
            <span>Menu confirmed</span>
          </span>
        </div>

        <button
          id={`view-dish-btn-${dish.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(dish);
          }}
          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#C86A1D] hover:bg-[#A84E18] text-white text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer shadow-xs flex items-center gap-1 sm:gap-1.5 active:scale-95 shrink-0 whitespace-nowrap"
          title="See what is inside this dish"
        >
          <span>See Details</span>
          <Plus className="w-3.5 h-3.5 stroke-[2.5] shrink-0" />
        </button>
      </div>
    </div>
  );
});

export default DishCard;
