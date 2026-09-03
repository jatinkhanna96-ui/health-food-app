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
  AlertCircle,
  ExternalLink,
  Beef,
  WheatOff,
  MilkOff,
  Sparkles,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm overflow-y-auto">
      <div
        id="dish-detail-modal"
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 my-8 flex flex-col max-h-[90vh]"
      >
        {/* Header Image with Close Button */}
        <div className="relative w-full h-64 sm:h-72 bg-stone-100 shrink-0">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {/* Close button */}
          <button
            id="close-dish-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer border border-white/20 shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Veto Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {dish.isSeedOilFree && (
              <span className="px-3 py-1 rounded-full bg-[#C8102E] text-white text-xs font-black flex items-center gap-1 shadow-md uppercase tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                Seed-Oil Free
              </span>
            )}
            {dish.isGrassFed && (
              <span className="px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-amber-300 text-xs font-bold border border-white/20 flex items-center gap-1">
                <Beef className="w-3.5 h-3.5" />
                Grass-Fed
              </span>
            )}
          </div>

          {/* Title & Restaurant on Image */}
          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-black text-white drop-shadow-md">{dish.name}</span>
              <span className="text-xl sm:text-2xl font-black text-amber-300 drop-shadow-md">
                ${dish.price.toFixed(2)}
              </span>
            </div>
            <p className="text-sm font-semibold text-stone-200 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{dish.restaurant}</span>
              <span className="text-stone-400">•</span>
              <span className="text-stone-300 truncate">{dish.restaurantAddress}</span>
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-800 bg-stone-50/50">
          {/* Macro Breakdown Visualizer */}
          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-stone-900 text-sm flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#C8102E]" />
                <span>Macro &amp; Caloric Profile</span>
              </h4>
              <span className="text-xs font-bold text-stone-500">
                Total: <strong className="text-stone-900 font-mono">{dish.calories} kcal</strong>
              </span>
            </div>

            {/* Macro Bar */}
            <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden flex">
              <div
                style={{ width: `${proteinPct}%` }}
                className="bg-[#C8102E] h-full"
                title={`Protein: ${dish.protein}g (${proteinPct}%)`}
              />
              <div
                style={{ width: `${carbsPct}%` }}
                className="bg-blue-500 h-full"
                title={`Carbs: ${dish.carbs}g (${carbsPct}%)`}
              />
              <div
                style={{ width: `${fatPct}%` }}
                className="bg-amber-500 h-full"
                title={`Fat: ${dish.fat}g (${fatPct}%)`}
              />
            </div>

            {/* 4 Macro Stat Cards */}
            <div className="grid grid-cols-4 gap-2.5 pt-1 text-center font-mono">
              <div className="p-2.5 rounded-xl bg-rose-50/60 border border-rose-100">
                <span className="text-[10px] font-bold text-[#C8102E] block uppercase">
                  Protein
                </span>
                <span className="text-base font-black text-stone-900">{dish.protein}g</span>
                <span className="text-[10px] text-stone-500 block">{proteinPct}%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100">
                <span className="text-[10px] font-bold text-blue-600 block uppercase">
                  Carbs
                </span>
                <span className="text-base font-black text-stone-900">{dish.carbs}g</span>
                <span className="text-[10px] text-stone-500 block">{carbsPct}%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-100">
                <span className="text-[10px] font-bold text-amber-600 block uppercase">Fat</span>
                <span className="text-base font-black text-stone-900">{dish.fat}g</span>
                <span className="text-[10px] text-stone-500 block">{fatPct}%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-purple-50/60 border border-purple-100">
                <span className="text-[10px] font-bold text-purple-600 block uppercase">
                  Fiber
                </span>
                <span className="text-base font-black text-stone-900">{dish.fiber}g</span>
                <span className="text-[10px] text-stone-500 block">Prebiotic</span>
              </div>
            </div>
          </div>

          {/* Cooking Medium Audit */}
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#C8102E] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
              ✓
            </div>
            <div>
              <h5 className="font-extrabold text-[#C8102E] text-sm">
                Verified Cooking Medium: {dish.cookingFat}
              </h5>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                {dish.chefNotes}
              </p>
            </div>
          </div>

          {/* Verified Ingredients List */}
          <div className="space-y-2.5">
            <h4 className="font-extrabold text-stone-900 text-sm">Ingredients Breakdown</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dish.ingredients.map((ing, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 text-xs font-semibold text-stone-700 shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{ing}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-2.5">
            <h4 className="font-extrabold text-stone-900 text-sm">Culinary Highlights</h4>
            <div className="flex flex-wrap gap-2">
              {dish.highlights.map((hl, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold border border-stone-200"
                >
                  ✨ {hl}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 px-6 border-t border-stone-200 bg-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-stone-900">{dish.rating} rating</span>
            <span className="text-stone-400">({dish.reviewsCount} verified diners)</span>
          </div>

          <button
            id="modal-close-action-btn"
            onClick={onClose}
            className="px-5 py-2.5 rounded-2xl bg-[#C8102E] hover:bg-[#A30D25] text-white text-xs font-black transition-all shadow-md cursor-pointer"
          >
            Back to Map
          </button>
        </div>
      </div>
    </div>
  );
}
