'use client';

import React from 'react';
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
  return (
    <motion.div
      id={`dish-card-${dish.id}`}
      layout="position"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min((index % 6) * 0.05, 0.25),
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={() => onSelect(dish)}
      className={`group relative rounded-2xl bg-white border transition-colors duration-300 overflow-hidden cursor-pointer flex flex-col justify-between ${
        isSelected
          ? 'ring-2 ring-emerald-500 border-emerald-500 shadow-xl shadow-emerald-500/10'
          : 'border-slate-200/90 hover:border-emerald-400 hover:shadow-lg'
      }`}
    >
      <div className="flex flex-col flex-1">
        {/* Top Image Container */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 shrink-0">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            referrerPolicy="no-referrer"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Seed Oil Free Badge */}
          {dish.isSeedOilFree && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-500 text-black text-[11px] font-extrabold tracking-wide uppercase shadow-md flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Seed-Oil Free</span>
            </div>
          )}

          {/* Price & Rating */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold border border-white/10">
              ${dish.price.toFixed(2)}
            </span>
          </div>

          {/* Bottom Image Macro Stats Bar */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-bold">
            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>{dish.calories} kcal</span>
            </div>

            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
              <span className="text-emerald-400 font-extrabold">{dish.protein}g P</span>
              <span className="text-slate-300">{dish.carbs}g C</span>
              <span className="text-amber-300">{dish.fat}g F</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 space-y-3">
          {/* Restaurant & Location */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-extrabold text-slate-900 text-base group-hover:text-emerald-600 transition-colors leading-snug line-clamp-1">
                {dish.name}
              </h3>
              <p className="text-xs font-semibold text-slate-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="truncate">{dish.restaurant}</span>
                <span className="text-slate-300">•</span>
                <span className="font-bold text-slate-700 shrink-0">{dish.city}</span>
              </p>
            </div>

            <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60 shrink-0 text-amber-800 text-xs font-bold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{dish.rating}</span>
            </div>
          </div>

          {/* Cooking Fat Verification Pill */}
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 text-[10px] font-bold">
              ✓
            </div>
            <div className="text-[11px] leading-tight text-slate-700 truncate">
              <span className="text-slate-400 font-medium">Cooking Fat: </span>
              <span className="font-bold text-slate-900">{dish.cookingFat}</span>
            </div>
          </div>

          {/* Diet Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {dish.isGrassFed && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200/80">
                <Beef className="w-3 h-3" />
                Grass-Fed
              </span>
            )}
            {dish.isGlutenFree && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 text-[10px] font-bold border border-amber-200/80">
                <WheatOff className="w-3 h-3" />
                Gluten-Free
              </span>
            )}
            {dish.isDairyFree && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 text-[10px] font-bold border border-blue-200/80">
                <MilkOff className="w-3 h-3" />
                Dairy-Free
              </span>
            )}
            {dish.isKeto && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 text-[10px] font-bold border border-purple-200/80">
                <Sparkles className="w-3 h-3" />
                Keto
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Details Button */}
      <div className="px-4 pb-4 pt-1 flex items-center justify-between border-t border-slate-100">
        <span className="text-[11px] font-bold text-slate-400">
          {dish.reviewsCount} reviews
        </span>
        <button
          id={`view-dish-btn-${dish.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(dish);
          }}
          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          <span>Full Breakdown</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
