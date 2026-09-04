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
      className={`group relative rounded-3xl bg-[#0e3827] border transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between ${
        isSelected
          ? 'ring-2 ring-[#b6f7c1] border-[#b6f7c1] shadow-[0_12px_32px_-4px_rgba(182,247,193,0.25)] scale-[1.01]'
          : 'border-[#b6f7c1]/20 shadow-lg hover:shadow-2xl hover:border-[#b6f7c1]/60'
      }`}
    >
      <div>
        {/* Top Image Container */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#0a2e1f]">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />

          {/* Subtle Top & Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

          {/* Seed Oil Free Badge */}
          {dish.isSeedOilFree && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0a2e1f]/90 backdrop-blur-md text-[#b6f7c1] text-[10px] font-black tracking-wider uppercase shadow-md flex items-center gap-1 border border-[#b6f7c1]/40">
              <ShieldCheck className="w-3.5 h-3.5 text-[#b6f7c1]" />
              <span>Seed-Oil Free</span>
            </div>
          )}

          {/* Rating */}
          <div className="absolute top-3 right-3 flex items-center gap-1">
            <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-300 text-xs font-extrabold shadow-sm flex items-center gap-1 border border-white/10">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{dish.rating}</span>
            </span>
          </div>

          {/* Bottom Image Macro Stats Bar */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/10 font-bold">
              <Flame className="w-3.5 h-3.5 text-[#b6f7c1]" />
              <span>{dish.calories} kcal</span>
            </div>

            <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/10 font-bold text-xs">
              <span className="text-[#b6f7c1] font-extrabold">{dish.protein}g P</span>
              <span className="text-stone-300">{dish.carbs}g C</span>
              <span className="text-amber-300">{dish.fat}g F</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 space-y-3">
          {/* Restaurant & Location */}
          <div className="space-y-0.5">
            <h3 className="font-black text-white text-base group-hover:text-[#b6f7c1] transition-colors leading-snug line-clamp-1">
              {dish.name}
            </h3>
            <p className="text-xs font-semibold text-emerald-200/70 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#b6f7c1] shrink-0" />
              <span className="truncate">{dish.restaurant}</span>
            </p>
          </div>

          {/* Cooking Fat Verification Pill */}
          <div className="p-2.5 rounded-2xl bg-[#082419] border border-[#b6f7c1]/20 flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#134631] flex items-center justify-center text-[#b6f7c1] shrink-0 text-[10px] font-bold border border-[#b6f7c1]/30">
              ✓
            </div>
            <div className="text-[11px] leading-tight text-stone-200 truncate">
              <span className="text-emerald-400/80 font-medium">Cooking Fat: </span>
              <span className="font-extrabold text-[#b6f7c1]">{dish.cookingFat}</span>
            </div>
          </div>

          {/* Diet Badges */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {dish.isGrassFed && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#134631] text-[#b6f7c1] text-[10px] font-bold border border-[#b6f7c1]/20">
                <Beef className="w-3 h-3" />
                Grass-Fed
              </span>
            )}
            {dish.isGlutenFree && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-950/60 text-amber-200 text-[10px] font-bold border border-amber-500/30">
                <WheatOff className="w-3 h-3" />
                Gluten-Free
              </span>
            )}
            {dish.isDairyFree && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-indigo-950/60 text-indigo-200 text-[10px] font-bold border border-indigo-500/30">
                <MilkOff className="w-3 h-3" />
                Dairy-Free
              </span>
            )}
            {dish.isKeto && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-cyan-950/60 text-cyan-200 text-[10px] font-bold border border-cyan-500/30">
                <Sparkles className="w-3 h-3" />
                Keto
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Details: Price on left, Circular '+' button on right */}
      <div className="px-5 pb-4 pt-2 flex items-center justify-between border-t border-[#b6f7c1]/15">
        <div>
          <span className="text-base font-black text-[#b6f7c1] block leading-tight">
            ${dish.price.toFixed(2)}
          </span>
          <span className="text-[10px] font-bold text-emerald-300/60">
            {dish.reviewsCount} verified audits
          </span>
        </div>

        <button
          id={`view-dish-btn-${dish.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(dish);
          }}
          className="w-9 h-9 rounded-full bg-[#b6f7c1] hover:bg-[#a0f3ae] text-[#0a2e1f] flex items-center justify-center font-black shadow-md shadow-[#b6f7c1]/20 transition-all group-hover:scale-105 active:scale-95 cursor-pointer"
          title="Inspect Dish Details & Macros"
        >
          <Plus className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
