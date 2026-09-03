'use client';

import React from 'react';
import {
  ShieldCheck,
  Egg,
  Fish,
  Sparkles,
  Salad,
  Flame,
  UtensilsCrossed,
  Leaf,
  Heart,
  Soup,
} from 'lucide-react';

export interface CategoryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  subtitle: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'all',
    name: 'All Healthy Picks',
    subtitle: 'Full Menu',
    icon: <UtensilsCrossed className="w-5 h-5" />,
  },
  {
    id: 'bowls',
    name: 'Power Bowls',
    subtitle: 'Greens & Grain-Free',
    icon: <Salad className="w-5 h-5" />,
  },
  {
    id: 'seed-oil-free',
    name: 'Zero Seed Oils',
    subtitle: 'EVOO & Avocado',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    id: 'seafood',
    name: 'Wild Seafood',
    subtitle: 'Salmon & Omega-3s',
    icon: <Fish className="w-5 h-5" />,
  },
  {
    id: 'clean-protein',
    name: 'Clean Proteins',
    subtitle: 'Pastured & Organic',
    icon: <Egg className="w-5 h-5" />,
  },
  {
    id: 'olive-oil',
    name: 'Cold-Pressed EVOO',
    subtitle: 'Mediterranean',
    icon: <Leaf className="w-5 h-5" />,
  },
  {
    id: 'keto',
    name: 'Keto & Low Carb',
    subtitle: 'Clean Energy',
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    id: 'gut-health',
    name: 'Gut Health',
    subtitle: 'Bone Broth & Ferments',
    icon: <Heart className="w-5 h-5" />,
  },
];

interface CategoryCarouselProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export default function CategoryCarousel({
  activeCategory,
  onSelectCategory,
}: CategoryCarouselProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-black uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
          <Leaf className="w-3.5 h-3.5 text-emerald-600" />
          <span>Healthy Food Categories</span>
        </h3>
        <span className="text-[11px] font-bold text-emerald-700">
          Scroll healthy picks ›
        </span>
      </div>

      <div
        id="healthy-category-carousel"
        className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-2 pt-1 -mx-1 px-1"
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`cat-pill-${cat.id}`}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`shrink-0 flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all cursor-pointer group ${
                isActive ? 'scale-105' : 'hover:scale-102'
              }`}
            >
              {/* Circular / Squircle Icon Container */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-sm ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-700/20 ring-2 ring-emerald-500 ring-offset-2 ring-offset-[#F4F8F5]'
                    : 'bg-white text-stone-700 border border-stone-200 group-hover:border-emerald-500/50 group-hover:text-emerald-700 group-hover:shadow-md'
                }`}
              >
                {cat.icon}
              </div>

              {/* Category Name & Subtitle */}
              <div className="text-center">
                <span
                  className={`text-xs font-black block whitespace-nowrap leading-tight transition-colors ${
                    isActive ? 'text-emerald-700 font-black' : 'text-stone-800 group-hover:text-stone-900'
                  }`}
                >
                  {cat.name}
                </span>
                <span className="text-[10px] text-stone-400 font-semibold block whitespace-nowrap">
                  {cat.subtitle}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
