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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div
        id="dish-detail-modal"
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 my-8 flex flex-col max-h-[90vh]"
      >
        {/* Header Image with Close Button */}
        <div className="relative w-full h-64 sm:h-72 bg-[#FAF8F5] shrink-0">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          {/* Close button in white pill pod */}
          <button
            id="close-dish-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-white text-stone-800 backdrop-blur-md transition-all cursor-pointer shadow-md border border-stone-200"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Veto Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {dish.isSeedOilFree && (
              <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-black flex items-center gap-1.5 shadow-md uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
                Seed-Oil Free
              </span>
            )}
            {dish.isGrassFed && (
              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-stone-900 text-xs font-bold border border-stone-200 flex items-center gap-1.5 shadow-sm">
                <Beef className="w-3.5 h-3.5 text-teal-600" />
                100% Grass-Fed
              </span>
            )}
          </div>

          {/* Title & Restaurant on Image */}
          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-black text-white">{dish.name}</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400">
                ${dish.price.toFixed(2)}
              </span>
            </div>
            <p className="text-sm font-semibold text-stone-200 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{dish.restaurant}</span>
              <span className="text-stone-400">•</span>
              <span className="text-stone-300 truncate">{dish.restaurantAddress}</span>
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-800">
          {/* Macro Breakdown Visualizer */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/90 space-y-3.5">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-stone-900 text-sm flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>Macro &amp; Caloric Profile</span>
              </h4>
              <span className="text-xs font-bold text-stone-500">
                Energy: <strong className="text-stone-900">{dish.calories} kcal</strong>
              </span>
            </div>

            {/* Macro Bar */}
            <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden flex">
              <div
                style={{ width: `${proteinPct}%` }}
                className="bg-emerald-500 h-full transition-all"
                title={`Protein: ${dish.protein}g (${proteinPct}%)`}
              />
              <div
                style={{ width: `${carbsPct}%` }}
                className="bg-sky-500 h-full transition-all"
                title={`Carbs: ${dish.carbs}g (${carbsPct}%)`}
              />
              <div
                style={{ width: `${fatPct}%` }}
                className="bg-amber-500 h-full transition-all"
                title={`Fat: ${dish.fat}g (${fatPct}%)`}
              />
            </div>

            {/* 4 Macro Stat Cards */}
            <div className="grid grid-cols-4 gap-2.5 pt-1 text-center font-sans">
              <div className="p-2.5 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <span className="text-[10px] font-extrabold text-emerald-700 block uppercase">
                  Protein
                </span>
                <span className="text-base font-black text-stone-900">{dish.protein}g</span>
                <span className="text-[10px] text-stone-400 block font-bold">{proteinPct}%</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <span className="text-[10px] font-extrabold text-sky-700 block uppercase">
                  Net Carbs
                </span>
                <span className="text-base font-black text-stone-900">{dish.carbs}g</span>
                <span className="text-[10px] text-stone-400 block font-bold">{carbsPct}%</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <span className="text-[10px] font-extrabold text-amber-700 block uppercase">Clean Fat</span>
                <span className="text-base font-black text-stone-900">{dish.fat}g</span>
                <span className="text-[10px] text-stone-400 block font-bold">{fatPct}%</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <span className="text-[10px] font-extrabold text-indigo-700 block uppercase">
                  Fiber
                </span>
                <span className="text-base font-black text-stone-900">{dish.fiber}g</span>
                <span className="text-[10px] text-stone-400 block font-bold">Prebiotic</span>
              </div>
            </div>
          </div>

          {/* Cooking Medium Audit */}
          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
              ✓
            </div>
            <div>
              <h5 className="font-extrabold text-emerald-950 text-sm">
                Verified Cooking Medium: {dish.cookingFat}
              </h5>
              <p className="text-xs text-emerald-900 mt-1 leading-relaxed">
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
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs font-semibold text-stone-700"
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
                  className="px-3 py-1 rounded-full bg-[#FAF8F5] text-stone-700 text-xs font-bold border border-stone-200"
                >
                  ✨ {hl}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 px-6 border-t border-stone-200 bg-[#FAF8F5] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-amber-800 text-xs font-bold">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>{dish.rating} rating</span>
            <span className="text-stone-400 font-normal">({dish.reviewsCount} verified diners)</span>
          </div>

          <button
            id="modal-close-action-btn"
            onClick={onClose}
            className="px-5 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
          >
            Back to Map
          </button>
        </div>
      </div>
    </div>
  );
}


