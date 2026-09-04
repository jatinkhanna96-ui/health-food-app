'use client';

import React from 'react';
import Image from 'next/image';
import { Dish } from '@/lib/mockData';
import {
  Flame,
  ShieldCheck,
  Star,
  MapPin,
  Sparkles,
  Plus,
  Beef,
  WheatOff,
  MilkOff,
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
  return (
    <div
      id={`dish-card-${dish.id}`}
      onClick={() => onSelect(dish)}
      className={`group relative rounded-3xl bg-white border transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between ${
        isSelected
          ? 'ring-2 ring-[#2D6A4F] border-[#2D6A4F] shadow-[0_12px_32px_-4px_rgba(45,106,79,0.18)] scale-[1.01]'
          : 'border-[#DCE6DE] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-4px_rgba(45,106,79,0.12)] hover:border-[#2D6A4F]/50'
      }`}
    >
      <div>
        {/* Top Image Container */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#F2F6F3]">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />

          {/* Subtle Top & Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

          {/* Seed Oil Free Badge */}
          {dish.isSeedOilFree && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#2D6A4F] text-white text-[10px] font-black tracking-wider uppercase shadow-md flex items-center gap-1 border border-[#52B788]/40">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>Seed-Oil Free</span>
            </div>
          )}

          {/* Rating */}
          <div className="absolute top-3 right-3 flex items-center gap-1">
            <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-stone-900 text-xs font-extrabold shadow-sm flex items-center gap-1 border border-stone-200">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{dish.rating}</span>
            </span>
          </div>

          {/* Bottom Image Macro Stats Bar */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/10 font-bold">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>{dish.calories} kcal</span>
            </div>

            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/10 font-bold">
              <span className="text-[#A7D7B5] font-extrabold">{dish.protein}g P</span>
              <span className="text-stone-300">{dish.carbs}g C</span>
              <span className="text-amber-300">{dish.fat}g F</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 space-y-3">
          {/* Restaurant & Location */}
          <div className="space-y-0.5">
            <h3 className="font-extrabold text-stone-900 text-base group-hover:text-[#2D6A4F] transition-colors leading-snug line-clamp-1">
              {dish.name}
            </h3>
            <p className="text-xs font-semibold text-stone-500 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
              <span className="truncate">{dish.restaurant}</span>
            </p>
          </div>

          {/* Cooking Fat Verification Pill */}
          <div className="p-2.5 rounded-2xl bg-[#F4F8F5] border border-[#DCE6DE] flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#E2EFE5] flex items-center justify-center text-[#2D6A4F] shrink-0 text-[10px] font-bold">
              ✓
            </div>
            <div className="text-[11px] leading-tight text-stone-700 truncate">
              <span className="text-stone-400 font-medium">Cooking Fat: </span>
              <span className="font-bold text-stone-900">{dish.cookingFat}</span>
            </div>
          </div>

          {/* Diet Badges */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {dish.isGrassFed && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-teal-50 text-teal-900 text-[10px] font-bold border border-teal-200">
                <Beef className="w-3 h-3" />
                Grass-Fed
              </span>
            )}
            {dish.isGlutenFree && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-50 text-amber-900 text-[10px] font-bold border border-amber-200">
                <WheatOff className="w-3 h-3" />
                Gluten-Free
              </span>
            )}
            {dish.isDairyFree && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-indigo-50 text-indigo-900 text-[10px] font-bold border border-indigo-200">
                <MilkOff className="w-3 h-3" />
                Dairy-Free
              </span>
            )}
            {dish.isKeto && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-cyan-50 text-cyan-900 text-[10px] font-bold border border-cyan-200">
                <Sparkles className="w-3 h-3" />
                Keto
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Details: Price on left, Circular '+' button on right */}
      <div className="px-5 pb-4 pt-1 flex items-center justify-between border-t border-[#EDF2EE]">
        <div>
          <span className="text-base font-black text-[#2D6A4F] block leading-tight">
            ${dish.price.toFixed(2)}
          </span>
          <span className="text-[10px] font-bold text-stone-400">
            {dish.reviewsCount} reviews
          </span>
        </div>

        <button
          id={`view-dish-btn-${dish.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(dish);
          }}
          className="w-9 h-9 rounded-full bg-[#2D6A4F] hover:bg-[#22543D] text-white flex items-center justify-center font-black shadow-md shadow-[#2D6A4F]/25 transition-all group-hover:scale-105 active:scale-95 cursor-pointer"
          title="Inspect Dish Details & Macros"
        >
          <Plus className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}



