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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div
        id="dish-detail-modal"
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-8 flex flex-col max-h-[90vh]"
      >
        {/* Header Image with Close Button */}
        <div className="relative w-full h-64 sm:h-72 bg-slate-900 shrink-0">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Close button */}
          <button
            id="close-dish-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Veto Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {dish.isSeedOilFree && (
              <span className="px-3 py-1 rounded-full bg-emerald-500 text-black text-xs font-extrabold flex items-center gap-1 shadow-lg uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                Seed-Oil Free
              </span>
            )}
            {dish.isGrassFed && (
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-emerald-300 text-xs font-bold border border-emerald-500/30 flex items-center gap-1">
                <Beef className="w-3.5 h-3.5" />
                Grass-Fed
              </span>
            )}
          </div>

          {/* Title & Restaurant on Image */}
          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-black">{dish.name}</span>
              <span className="text-xl sm:text-2xl font-extrabold text-emerald-400">
                ${dish.price.toFixed(2)}
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-300 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{dish.restaurant}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 truncate">{dish.restaurantAddress}</span>
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
          {/* Macro Breakdown Visualizer */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>Macro &amp; Caloric Profile</span>
              </h4>
              <span className="text-xs font-bold text-slate-500">
                Total: <strong className="text-slate-900">{dish.calories} kcal</strong>
              </span>
            </div>

            {/* Macro Bar */}
            <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden flex">
              <div
                style={{ width: `${proteinPct}%` }}
                className="bg-emerald-500 h-full"
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
            <div className="grid grid-cols-4 gap-2 pt-1 text-center">
              <div className="p-2 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] font-bold text-emerald-600 block uppercase">
                  Protein
                </span>
                <span className="text-base font-black text-slate-900">{dish.protein}g</span>
                <span className="text-[10px] text-slate-400 block">{proteinPct}%</span>
              </div>
              <div className="p-2 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] font-bold text-blue-600 block uppercase">
                  Carbs
                </span>
                <span className="text-base font-black text-slate-900">{dish.carbs}g</span>
                <span className="text-[10px] text-slate-400 block">{carbsPct}%</span>
              </div>
              <div className="p-2 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] font-bold text-amber-600 block uppercase">Fat</span>
                <span className="text-base font-black text-slate-900">{dish.fat}g</span>
                <span className="text-[10px] text-slate-400 block">{fatPct}%</span>
              </div>
              <div className="p-2 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] font-bold text-purple-600 block uppercase">
                  Fiber
                </span>
                <span className="text-base font-black text-slate-900">{dish.fiber}g</span>
                <span className="text-[10px] text-slate-400 block">Prebiotic</span>
              </div>
            </div>
          </div>

          {/* Cooking Medium Audit */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
              ✓
            </div>
            <div>
              <h5 className="font-extrabold text-emerald-950 text-sm">
                Verified Cooking Medium: {dish.cookingFat}
              </h5>
              <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                {dish.chefNotes}
              </p>
            </div>
          </div>

          {/* Verified Ingredients List */}
          <div className="space-y-2">
            <h4 className="font-extrabold text-slate-900 text-sm">Ingredients Breakdown</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dish.ingredients.map((ing, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{ing}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="font-extrabold text-slate-900 text-sm">Culinary Highlights</h4>
            <div className="flex flex-wrap gap-2">
              {dish.highlights.map((hl, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200"
                >
                  ✨ {hl}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 px-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-amber-800 text-xs font-bold">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>{dish.rating} rating</span>
            <span className="text-slate-400">({dish.reviewsCount} verified diners)</span>
          </div>

          <button
            id="modal-close-action-btn"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            Back to Map
          </button>
        </div>
      </div>
    </div>
  );
}
