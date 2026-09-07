'use client';

import React from 'react';
import Image from 'next/image';
import { Dish } from '@/lib/mockData';
import { formatPrice, getGoogleMapsDirectionsUrl } from '@/lib/utils';
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
  Navigation,
  ExternalLink,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-[#07130F]/80 backdrop-blur-md overflow-y-auto">
      <div
        id="dish-detail-modal"
        className="relative w-full max-w-2xl bg-[#0B1A14] border border-[#1B3B2F] text-[#F5F7F3] rounded-2xl overflow-hidden my-3 sm:my-8 flex flex-col max-h-[92vh] sm:max-h-[90vh] shadow-2xl"
      >
        {/* Header Image with Close Button */}
        <div className="relative w-full h-48 sm:h-72 bg-[#07130F] shrink-0 overflow-hidden">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A14] via-[#0B1A14]/40 to-transparent" />

          {/* Close button */}
          <button
            id="close-dish-modal-btn"
            onClick={onClose}
            className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-10 p-2 sm:p-2.5 rounded-full bg-[#0B1A14]/80 hover:bg-[#0F231B] text-[#F5F7F3] transition-all duration-200 cursor-pointer shadow-md border border-[#1B3B2F] active:scale-95"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Top Veto Badges */}
          <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 flex flex-wrap gap-1 sm:gap-2 max-w-[calc(100%-60px)]">
            <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#123D2A] text-[#35E27F] text-[11px] sm:text-xs font-bold flex items-center gap-1.5 border border-[#1B3B2F]">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#35E27F] shrink-0" />
              <span>Restaurant Confirmed</span>
            </span>
            {dish.isGrassFed && (
              <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#0B1A14]/90 backdrop-blur-md text-[#DDFBE9] text-[11px] sm:text-xs font-semibold border border-[#1B3B2F] flex items-center gap-1.5 shadow-sm">
                <Beef className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#35E27F] shrink-0" />
                <span>Grass-Fed</span>
              </span>
            )}
            {dish.isSeedOilFree && (
              <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#0B1A14]/90 backdrop-blur-md text-[#35E27F] text-[11px] sm:text-xs font-semibold border border-[#1B3B2F] flex items-center gap-1.5 shadow-sm">
                <span>Seed-Oil Free</span>
              </span>
            )}
          </div>

          {/* Title, Restaurant, Price & Location on Image */}
          <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-4 sm:left-6 sm:right-6 text-[#F5F7F3] space-y-0.5 sm:space-y-1">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-base sm:text-2xl md:text-3xl font-bold text-[#F5F7F3] leading-tight line-clamp-1 sm:line-clamp-none">
                {dish.name}
              </span>
              <span className="text-base sm:text-2xl font-bold text-[#35E27F] shrink-0">
                {formatPrice(dish.price, dish.city, dish.id)}
              </span>
            </div>
            <div className="flex items-center justify-between gap-2 flex-wrap pt-0.5">
              <p className="text-[11px] sm:text-sm font-medium text-[#A8B5AE] flex items-center gap-1.5 truncate">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#35E27F] shrink-0" />
                <span className="text-[#F5F7F3] font-semibold">{dish.restaurant}</span>
                <span className="text-[#1B3B2F]">&bull;</span>
                <span className="text-[#DDFBE9]">{formatPrice(dish.price, dish.city, dish.id)} &bull; 1.2 mi</span>
                <span className="text-[#1B3B2F]">&bull;</span>
                <span className="truncate">{dish.city}</span>
              </p>

              <a
                id="dish-detail-directions-header-btn"
                href={getGoogleMapsDirectionsUrl({
                  restaurant: dish.restaurant,
                  address: dish.restaurantAddress,
                  city: dish.city,
                  coordinates: dish.coordinates,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0F231B]/90 hover:bg-[#1B4D36] text-[#35E27F] text-xs font-bold border border-[#1B3B2F] transition-all cursor-pointer shadow-sm active:scale-95"
                title={`Open directions to ${dish.restaurant} in Google Maps`}
              >
                <Navigation className="w-3 h-3 fill-current" />
                <span>Directions</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-[#F5F7F3]">
          {/* 1. WHY IT FITS */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#0F231B] border border-[#1B3B2F] space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-[#F5F7F3] text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#35E27F]" />
                <span>Why It Fits</span>
              </h4>
              <span className="text-xs font-semibold text-[#35E27F]">
                Matches your dietary preferences
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0B1A14] border border-[#1B3B2F]">
                <span className="text-[#35E27F] font-bold">✓</span>
                <span>{dish.protein}g protein for satiety & recovery</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0B1A14] border border-[#1B3B2F]">
                <span className="text-[#35E27F] font-bold">✓</span>
                <span>{dish.calories} total calories</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0B1A14] border border-[#1B3B2F]">
                <span className="text-[#35E27F] font-bold">✓</span>
                <span>Prepared with {dish.cookingFat}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0B1A14] border border-[#1B3B2F]">
                <span className="text-[#35E27F] font-bold">✓</span>
                <span>{dish.highlights?.[0] || 'Whole-food ingredients, no artificial additives'}</span>
              </div>
            </div>
          </div>

          {/* 2. WHAT'S IN IT (Ingredients) */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-[#F5F7F3] text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#35E27F]" />
              <span>What&apos;s In It</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dish.ingredients.map((ing, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0F231B] border border-[#1B3B2F] text-xs font-medium text-[#F5F7F3]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35E27F]" />
                  <span>{ing}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. WHAT WE KNOW (Nutrition Breakdown) */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#0F231B] border border-[#1B3B2F] space-y-3.5">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-[#F5F7F3] text-sm">
                What We Know &bull; Nutrition Details
              </h4>
              <span className="text-xs font-semibold text-[#A8B5AE]">
                Cooking oil: <span className="text-[#35E27F]">{dish.cookingFat}</span>
              </span>
            </div>

            {/* Macro Bar */}
            <div className="w-full h-2.5 bg-[#07130F] rounded-full overflow-hidden flex border border-[#1B3B2F]">
              <div
                style={{ width: `${proteinPct}%` }}
                className="bg-[#35E27F] h-full transition-all duration-300"
                title={`Protein: ${dish.protein}g (${proteinPct}%)`}
              />
              <div
                style={{ width: `${carbsPct}%` }}
                className="bg-[#DDFBE9] h-full transition-all duration-300"
                title={`Carbs: ${dish.carbs}g (${carbsPct}%)`}
              />
              <div
                style={{ width: `${fatPct}%` }}
                className="bg-[#123D2A] h-full transition-all duration-300"
                title={`Fat: ${dish.fat}g (${fatPct}%)`}
              />
            </div>

            {/* 4 Macro Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 pt-1 text-center">
              <div className="p-3 rounded-xl bg-[#0B1A14] border border-[#1B3B2F]">
                <span className="text-[10px] font-bold text-[#35E27F] block uppercase tracking-wider">
                  Protein
                </span>
                <span className="text-lg font-bold text-[#F5F7F3]">{dish.protein}g</span>
                <span className="text-[10px] text-[#A8B5AE] block font-medium">{proteinPct}% of macros</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0B1A14] border border-[#1B3B2F]">
                <span className="text-[10px] font-bold text-[#DDFBE9] block uppercase tracking-wider">
                  Carbs
                </span>
                <span className="text-lg font-bold text-[#F5F7F3]">{dish.carbs}g</span>
                <span className="text-[10px] text-[#A8B5AE] block font-medium">{carbsPct}% of macros</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0B1A14] border border-[#1B3B2F]">
                <span className="text-[10px] font-bold text-[#35E27F] block uppercase tracking-wider">
                  Fat
                </span>
                <span className="text-lg font-bold text-[#F5F7F3]">{dish.fat}g</span>
                <span className="text-[10px] text-[#A8B5AE] block font-medium">{dish.cookingFat}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0B1A14] border border-[#1B3B2F]">
                <span className="text-[10px] font-bold text-[#A8B5AE] block uppercase tracking-wider">
                  Fiber
                </span>
                <span className="text-lg font-bold text-[#F5F7F3]">{dish.fiber}g</span>
                <span className="text-[10px] text-[#A8B5AE] block font-medium">Dietary fiber</span>
              </div>
            </div>
          </div>

          {/* Cooking Method & Chef Notes */}
          <div className="p-4 rounded-xl bg-[#123D2A]/30 border border-[#1B3B2F] flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#123D2A] text-[#35E27F] border border-[#1B3B2F] flex items-center justify-center font-bold text-xs shrink-0">
              ✓
            </div>
            <div>
              <h5 className="font-bold text-[#F5F7F3] text-sm">
                Cooking Oil &amp; Preparation: <span className="text-[#35E27F]">{dish.cookingFat}</span>
              </h5>
              <p className="text-xs text-[#A8B5AE] mt-1 leading-relaxed">
                {dish.chefNotes}
              </p>
            </div>
          </div>

          {/* 4. WHERE THE INFORMATION COMES FROM (Source Transparency) */}
          <div className="p-4 rounded-xl bg-[#0B1A14] border border-[#1B3B2F] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#35E27F]">
                Where the information comes from
              </span>
              <span className="text-[10px] font-semibold text-[#A8B5AE] bg-[#0F231B] px-2 py-0.5 rounded border border-[#1B3B2F]">
                Restaurant Confirmed
              </span>
            </div>
            <p className="text-xs text-[#A8B5AE] leading-relaxed">
              Details provided directly from {dish.restaurant}&apos;s official menu and confirmed kitchen prep methods. We provide transparency so you can make informed decisions based on what matters to you.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 px-5 sm:px-6 border-t border-[#1B3B2F] bg-[#07130F]/90 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-1.5 text-[#F5F7F3] text-xs font-medium justify-center sm:justify-start">
            <Star className="w-4 h-4 fill-[#35E27F] text-[#35E27F] shrink-0" />
            <span className="font-bold text-[#F5F7F3]">{dish.rating} Customer Rating</span>
            <span className="text-[#A8B5AE] truncate">({dish.reviewsCount} customer reviews)</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              id="dish-detail-maps-btn"
              href={getGoogleMapsDirectionsUrl({
                restaurant: dish.restaurant,
                address: dish.restaurantAddress,
                city: dish.city,
                coordinates: dish.coordinates,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#123D2A] hover:bg-[#184d35] text-[#35E27F] border border-[#1B3B2F] text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 text-center"
              title={`Get directions to ${dish.restaurant} on Google Maps`}
            >
              <Navigation className="w-3.5 h-3.5 fill-current" />
              <span>Directions on Maps</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>

            <button
              id="modal-close-action-btn"
              onClick={onClose}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 text-center"
            >
              Back to Dishes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
