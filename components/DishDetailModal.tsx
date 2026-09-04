'use client';

import React from 'react';
import Image from 'next/image';
import { Dish } from '@/lib/mockData';
import {
  X,
  ShieldCheck,
  Flame,
  Star,
  MapPin,
  CheckCircle2,
  Beef,
  WheatOff,
  MilkOff,
  Sparkles,
  Zap,
} from 'lucide-react';

interface DishDetailModalProps {
  dish: Dish | null;
  onClose: () => void;
}

export default function DishDetailModal({ dish, onClose }: DishDetailModalProps) {
  if (!dish) return null;

  const totalMacroGrams = dish.protein + dish.carbs + dish.fat;
  const proteinPct = Math.round((dish.protein / totalMacroGrams) * 100);
  const carbsPct = Math.round((dish.carbs / totalMacroGrams) * 100);
  const fatPct = Math.round((dish.fat / totalMacroGrams) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        id="dish-detail-modal"
        className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 text-zinc-100 rounded-3xl overflow-hidden my-6 sm:my-8 flex flex-col max-h-[90vh] shadow-[0_0_50px_rgba(0,0,0,0.8)]"
      >
        {/* Header Image with Close Button */}
        <div className="relative w-full h-64 sm:h-72 bg-black shrink-0">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/60" />

          {/* Close button in dark glass pill pod */}
          <button
            id="close-dish-modal-btn"
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2.5 rounded-full bg-zinc-950/80 hover:bg-zinc-900 text-white transition-all duration-300 cursor-pointer shadow-xl border border-white/20 active:scale-95"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Top Veto Badges */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex flex-wrap gap-1.5 sm:gap-2 max-w-[calc(100%-65px)]">
            <span className="px-3 py-1.5 rounded-full bg-emerald-950/85 backdrop-blur-md text-emerald-300 text-xs font-black flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.35)] uppercase border border-emerald-500/50">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verified Clean Zone</span>
            </span>
            {dish.isGrassFed && (
              <span className="px-3 py-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md text-emerald-300 text-xs font-bold border border-white/15 flex items-center gap-1.5 shadow-md">
                <Beef className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% Grass-Fed</span>
              </span>
            )}
          </div>

          {/* Title & Restaurant on Image */}
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 text-white space-y-1">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
                {dish.name}
              </span>
              <span className="text-lg sm:text-2xl font-black text-amber-400 drop-shadow-sm shrink-0">
                ${dish.price.toFixed(2)}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-zinc-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span className="truncate">{dish.restaurant}</span>
              <span className="text-zinc-600">&bull;</span>
              <span className="text-zinc-400 truncate">{dish.restaurantAddress}</span>
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 text-zinc-100">
          {/* Empowering Nutritional Microcopy Visualizer */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3.5">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Bio-Individual Energy Breakdown</span>
              </h4>
              <span className="text-xs font-bold text-emerald-400">
                {dish.calories} Clean Calories &bull; {dish.protein}g Muscle Protein
              </span>
            </div>

            {/* Macro Bar */}
            <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden flex border border-white/10">
              <div
                style={{ width: `${proteinPct}%` }}
                className="bg-emerald-500 h-full transition-all duration-500"
                title={`Protein: ${dish.protein}g (${proteinPct}%)`}
              />
              <div
                style={{ width: `${carbsPct}%` }}
                className="bg-amber-400 h-full transition-all duration-500"
                title={`Carbs: ${dish.carbs}g (${carbsPct}%)`}
              />
              <div
                style={{ width: `${fatPct}%` }}
                className="bg-emerald-300 h-full transition-all duration-500"
                title={`Clean Fat: ${dish.fat}g (${fatPct}%)`}
              />
            </div>

            {/* 4 Macro Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 pt-1 text-center">
              <div className="p-3 rounded-2xl bg-zinc-900/80 border border-emerald-500/30 shadow-inner">
                <span className="text-[10px] font-extrabold text-emerald-400 block uppercase tracking-wider">
                  Muscle Protein
                </span>
                <span className="text-lg font-black text-white">{dish.protein}g</span>
                <span className="text-[10px] text-zinc-400 block font-bold">{proteinPct}% Ratio</span>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-900/80 border border-white/10 shadow-inner">
                <span className="text-[10px] font-extrabold text-amber-400 block uppercase tracking-wider">
                  Clean Carbs
                </span>
                <span className="text-lg font-black text-white">{dish.carbs}g</span>
                <span className="text-[10px] text-zinc-400 block font-bold">{carbsPct}% Glycogen</span>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-900/80 border border-emerald-500/30 shadow-inner">
                <span className="text-[10px] font-extrabold text-emerald-300 block uppercase tracking-wider">
                  Fuel Fats
                </span>
                <span className="text-lg font-black text-white">{dish.fat}g</span>
                <span className="text-[10px] text-zinc-400 block font-bold">{fatPct}% Ketones</span>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-900/80 border border-white/10 shadow-inner">
                <span className="text-[10px] font-extrabold text-zinc-300 block uppercase tracking-wider">
                  Prebiotic Fiber
                </span>
                <span className="text-lg font-black text-white">{dish.fiber}g</span>
                <span className="text-[10px] text-zinc-400 block font-bold">Microbiome</span>
              </div>
            </div>
          </div>

          {/* Cooking Medium Audit */}
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <div className="w-7 h-7 rounded-full bg-emerald-500 text-zinc-950 flex items-center justify-center font-black text-xs shrink-0 shadow-md">
              ✓
            </div>
            <div>
              <h5 className="font-extrabold text-emerald-300 text-sm">
                Strict Cooking Medium: {dish.cookingFat}
              </h5>
              <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                {dish.chefNotes}
              </p>
            </div>
          </div>

          {/* Verified Clean Ingredients List */}
          <div className="space-y-2.5">
            <h4 className="font-extrabold text-white text-sm">100% Vetted Ingredients</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dish.ingredients.map((ing, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900/80 border border-white/10 text-xs font-semibold text-zinc-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{ing}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Culinary Highlights */}
          <div className="space-y-2.5">
            <h4 className="font-extrabold text-white text-sm">Biohacker Highlights</h4>
            <div className="flex flex-wrap gap-2">
              {dish.highlights.map((hl, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-300 text-xs font-bold border border-emerald-500/30"
                >
                  ✨ {hl}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 px-5 sm:px-6 border-t border-white/10 bg-zinc-950 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold justify-center sm:justify-start">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
            <span>{dish.rating} Vetted Rating</span>
            <span className="text-zinc-500 font-normal truncate">({dish.reviewsCount} verified audits)</span>
          </div>

          <button
            id="modal-close-action-btn"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black transition-all duration-300 cursor-pointer active:scale-95 shadow-lg shadow-emerald-500/25 text-center"
          >
            Return to Oasis
          </button>
        </div>
      </div>
    </div>
  );
}
