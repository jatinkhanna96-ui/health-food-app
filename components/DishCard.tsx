'use client';

import React from 'react';
import Image from 'next/image';
import { Dish } from '@/lib/mockData';
import {
  ShieldCheck,
  Star,
  MapPin,
  Sparkles,
  Plus,
  Beef,
  WheatOff,
  MilkOff,
  CheckCircle2,
  Zap,
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
  // Format clean fat description if not prefixed
  const cleanFatDisplay = dish.cookingFat.toLowerCase().includes('tallow') && !dish.cookingFat.toLowerCase().includes('grass-fed')
    ? `100% Grass-Fed ${dish.cookingFat}`
    : dish.cookingFat;

  return (
    <div
      id={`dish-card-${dish.id}`}
      onClick={() => onSelect(dish)}
      className={`group relative rounded-3xl bg-white/5 backdrop-blur-md border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden hover:scale-[1.02] ${
        isSelected
          ? 'border-emerald-500/80 ring-2 ring-emerald-500/50 shadow-[0_0_35px_rgba(16,185,129,0.3)] bg-white/8'
          : 'border-white/10 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]'
      }`}
    >
      <div>
        {/* Top Image Container */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-zinc-950">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            referrerPolicy="no-referrer"
          />

          {/* Cinematic Dark Shading Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-zinc-950/60 pointer-events-none" />

          {/* Highly Visible "Verified Clean" Badge with Shield */}
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-emerald-950/85 backdrop-blur-md text-emerald-300 text-[11px] font-black tracking-wider uppercase shadow-[0_0_16px_rgba(16,185,129,0.4)] flex items-center gap-1.5 border border-emerald-500/60">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="leading-none">Verified Clean</span>
          </div>

          {/* Rating Pod in Warm Gold */}
          <div className="absolute top-3 right-3 flex items-center gap-1">
            <span className="px-2.5 py-1 rounded-full bg-zinc-950/85 backdrop-blur-md text-amber-400 text-xs font-black shadow-md flex items-center gap-1 border border-amber-400/30">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{dish.rating.toFixed(1)}</span>
            </span>
          </div>

          {/* Empowering Nutritional Microcopy Banner over Bottom of Image */}
          <div className="absolute bottom-2.5 inset-x-2.5 sm:inset-x-3">
            <div className="px-3 py-1.5 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs font-bold text-zinc-100 shadow-lg">
              <div className="flex items-center gap-1.5 min-w-0">
                <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate text-[11px] sm:text-xs">
                  <strong className="text-white font-black">{dish.calories} Clean Calories</strong>
                  <span className="text-zinc-400 mx-1.5">&bull;</span>
                  <span className="text-emerald-400 font-extrabold">{dish.protein}g Muscle-Building Protein</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 space-y-3.5">
          {/* Restaurant & Location */}
          <div className="space-y-1">
            <h3 className="font-black text-white text-base group-hover:text-emerald-300 transition-colors duration-300 leading-snug line-clamp-1">
              {dish.name}
            </h3>
            <p className="text-xs font-semibold text-zinc-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{dish.restaurant}</span>
              <span className="text-zinc-600">&bull;</span>
              <span className="text-zinc-500 truncate">{dish.city}</span>
            </p>
          </div>

          {/* Highlighted Healthy Cooking Fat in Emerald Pill / Tag */}
          <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:border-emerald-500/50 transition-colors">
            <div className="w-6 h-6 rounded-full bg-emerald-500/25 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0 text-xs font-black shadow-inner">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-xs leading-tight min-w-0">
              <span className="text-zinc-400 text-[10px] font-bold block uppercase tracking-wider">
                Vetted Cooking Fat:
              </span>
              <span className="font-black text-emerald-300 text-xs break-words">
                {cleanFatDisplay}
              </span>
            </div>
          </div>

          {/* Functional Diet Badges */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {dish.isGrassFed && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-950/50 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                <Beef className="w-3 h-3 text-emerald-400" />
                <span>100% Pasture</span>
              </span>
            )}
            {dish.isGlutenFree && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-950/40 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                <WheatOff className="w-3 h-3 text-amber-400" />
                <span>Zero Gluten</span>
              </span>
            )}
            {dish.isDairyFree && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-zinc-900 text-zinc-300 text-[10px] font-bold border border-white/10">
                <MilkOff className="w-3 h-3 text-zinc-400" />
                <span>Dairy-Free</span>
              </span>
            )}
            {dish.isKeto && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-950/50 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>Clean Keto</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Details: Price on left, Plus button on right */}
      <div className="px-4 sm:px-5 pb-4 pt-3 flex items-center justify-between border-t border-white/10 bg-white/3">
        <div>
          <span className="text-lg font-black text-amber-400 block leading-tight tracking-tight">
            ${dish.price.toFixed(2)}
          </span>
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
            {dish.reviewsCount} Lab-Vetted Audits
          </span>
        </div>

        <button
          id={`view-dish-btn-${dish.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(dish);
          }}
          className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 flex items-center justify-center font-black cursor-pointer shadow-lg shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300"
          title="Inspect Dish Macro Profile & Kitchen Proof"
        >
          <Plus className="w-5 h-5 stroke-[3]" />
        </button>
      </div>
    </div>
  );
}
