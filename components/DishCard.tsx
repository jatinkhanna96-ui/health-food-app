'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Dish } from '@/lib/mockData';
import {
  Flame,
  ShieldCheck,
  Star,
  MapPin,
  Sparkles,
  ChevronRight,
  Beef,
  WheatOff,
  MilkOff,
  Heart,
  Plus,
} from 'lucide-react';

interface DishCardProps {
  dish: Dish;
  isSelected?: boolean;
  onSelect: (dish: Dish) => void;
  onOpenDetails: (dish: Dish) => void;
  index?: number;
}

export default function DishCard({
  dish,
  isSelected = false,
  onSelect,
  onOpenDetails,
  index = 0,
}: DishCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      id={`dish-card-${dish.id}`}
      layout="position"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min((index % 6) * 0.04, 0.2),
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={() => onSelect(dish)}
      className={`group relative rounded-3xl bg-white transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between border ${
        isSelected
          ? 'ring-2 ring-[#C8102E] border-[#C8102E] shadow-[0_12px_32px_rgba(200,16,46,0.18)]'
          : 'border-stone-200/90 hover:border-stone-300 shadow-[0_4px_20px_rgba(28,25,23,0.06)] hover:shadow-[0_12px_30px_rgba(28,25,23,0.1)]'
      }`}
    >
      <div className="flex flex-col flex-1">
        {/* Top Image Container */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-stone-100 shrink-0">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            referrerPolicy="no-referrer"
          />

          {/* Soft Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent pointer-events-none" />

          {/* Seed-Oil Free Badge */}
          {dish.isSeedOilFree && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-black tracking-wide uppercase shadow-md flex items-center gap-1 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Seed-Oil Free</span>
            </div>
          )}

          {/* Top Right Heart Favorite Action */}
          <button
            type="button"
            id={`dish-like-btn-${dish.id}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-stone-800 flex items-center justify-center transition-all shadow-md active:scale-90 z-10"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isLiked ? 'fill-[#C8102E] text-[#C8102E]' : 'text-stone-700'
              }`}
            />
          </button>

          {/* Bottom Image Macro Bar */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-bold">
            <div className="flex items-center gap-1 bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/15">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-stone-100 font-semibold">{dish.calories} kcal</span>
            </div>

            <div className="flex items-center gap-2 bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/15 font-mono text-[11px]">
              <span className="text-emerald-400 font-black">{dish.protein}g P</span>
              <span className="text-stone-300">{dish.carbs}g C</span>
              <span className="text-amber-300">{dish.fat}g F</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 space-y-3">
          {/* Restaurant & Location */}
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="font-black text-stone-900 text-base group-hover:text-[#C8102E] transition-colors leading-snug line-clamp-1">
                {dish.name}
              </h3>
              <p className="text-xs font-semibold text-stone-500 flex items-center gap-1 mt-0.5 truncate">
                <MapPin className="w-3 h-3 text-[#C8102E] shrink-0" />
                <span className="truncate text-stone-700">{dish.restaurant}</span>
                <span className="text-stone-300">•</span>
                <span className="font-bold text-stone-500 shrink-0">{dish.city}</span>
              </p>
            </div>

            <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200 shrink-0 text-amber-800 text-xs font-bold">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span>{dish.rating}</span>
            </div>
          </div>

          {/* Cooking Fat Verification Pill */}
          <div className="p-2.5 rounded-2xl bg-stone-50 border border-stone-200/70 flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0 text-[10px] font-black">
              ✓
            </div>
            <div className="text-[11px] leading-tight text-stone-700 truncate">
              <span className="text-stone-500 font-medium">Cooking Fat: </span>
              <span className="font-bold text-stone-900">{dish.cookingFat}</span>
            </div>
          </div>

          {/* Diet Badges */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {dish.isGrassFed && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-rose-50 text-rose-800 text-[10px] font-bold border border-rose-200">
                <Beef className="w-3 h-3 text-[#C8102E]" />
                Grass-Fed
              </span>
            )}
            {dish.isGlutenFree && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 text-[10px] font-bold border border-amber-200">
                <WheatOff className="w-3 h-3 text-amber-600" />
                Gluten-Free
              </span>
            )}
            {dish.isDairyFree && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 text-[10px] font-bold border border-blue-200">
                <MilkOff className="w-3 h-3 text-blue-600" />
                Dairy-Free
              </span>
            )}
            {dish.isKeto && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 text-[10px] font-bold border border-purple-200">
                <Sparkles className="w-3 h-3 text-purple-600" />
                Keto
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer with Standout Price & Action Button (Arby's Style) */}
      <div className="px-4 pb-4 pt-2.5 flex items-center justify-between border-t border-stone-100">
        <div>
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Price</span>
          <span className="text-base font-black text-stone-900">
            ${dish.price.toFixed(2)}
          </span>
        </div>

        <button
          id={`view-dish-btn-${dish.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(dish);
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#C8102E] hover:bg-[#A80D26] text-white text-xs font-black transition-all shadow-md shadow-rose-900/10 active:scale-95 cursor-pointer"
        >
          <span>Inspect</span>
          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>
      </div>
    </motion.div>
  );
}

