'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  Filter,
  Flame,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Beef,
  Droplet,
  CheckCircle2,
} from 'lucide-react';
import { Dish } from '@/lib/seoData';

interface CityFilterBarProps {
  initialDishes: Dish[];
  citySlug: string;
  cityName: string;
  state: string;
}

export default function CityFilterBar({
  initialDishes,
  citySlug,
  cityName,
  state,
}: CityFilterBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFat, setSelectedFat] = useState<string>('all');
  const [highProteinOnly, setHighProteinOnly] = useState(false);
  const [grassFedOnly, setGrassFedOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'protein' | 'calories' | 'default'>('default');

  // Extract unique cooking fats available in this city
  const availableFats = useMemo(() => {
    const fats = new Set<string>();
    initialDishes.forEach((d) => {
      if (d.cooking_fat) fats.add(d.cooking_fat);
    });
    return Array.from(fats);
  }, [initialDishes]);

  // Client-side dynamic filtering
  const filteredDishes = useMemo(() => {
    return initialDishes
      .filter((dish) => {
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = dish.dish_name.toLowerCase().includes(q);
          const matchRest = dish.restaurant_name.toLowerCase().includes(q);
          const matchFat = dish.cooking_fat.toLowerCase().includes(q);
          if (!matchName && !matchRest && !matchFat) return false;
        }

        if (selectedFat !== 'all' && dish.cooking_fat !== selectedFat) {
          return false;
        }

        if (highProteinOnly && dish.protein_g < 40) {
          return false;
        }

        if (grassFedOnly && !dish.is_grass_fed) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'protein') return b.protein_g - a.protein_g;
        if (sortBy === 'calories') return a.calories - b.calories;
        return 0;
      });
  }, [initialDishes, searchQuery, selectedFat, highProteinOnly, grassFedOnly, sortBy]);

  return (
    <div className="space-y-6">
      {/* Interactive Filter Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#0F231B] border border-[#1B3B2F] shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search input */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-[#35E27F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search dishes or restaurants in ${cityName}...`}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#07130F] border border-[#1B3B2F] text-xs sm:text-sm text-[#F5F7F3] placeholder:text-[#697A72] focus:outline-none focus:border-[#35E27F] transition-all"
            />
          </div>

          {/* Sort By selector */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-[#A8B5AE] font-medium hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2.5 rounded-xl bg-[#07130F] border border-[#1B3B2F] text-xs text-[#F5F7F3] focus:outline-none focus:border-[#35E27F] cursor-pointer"
            >
              <option value="default">Verified Order</option>
              <option value="protein">Highest Protein</option>
              <option value="calories">Lowest Calories</option>
            </select>
          </div>
        </div>

        {/* Fat filter pills + Toggles */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-[11px] text-[#A8B5AE] uppercase tracking-wider font-semibold mr-1">
            Cooking Fat:
          </span>

          <button
            onClick={() => setSelectedFat('all')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedFat === 'all'
                ? 'bg-[#35E27F] text-[#07130F] shadow-xs'
                : 'bg-[#07130F] text-[#A8B5AE] hover:text-[#F5F7F3] border border-[#1B3B2F]'
            }`}
          >
            All Verified Fats ({initialDishes.length})
          </button>

          {availableFats.map((fat) => (
            <button
              key={fat}
              onClick={() => setSelectedFat(fat === selectedFat ? 'all' : fat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedFat === fat
                  ? 'bg-[#35E27F] text-[#07130F] shadow-xs'
                  : 'bg-[#07130F] text-[#A8B5AE] hover:text-[#F5F7F3] border border-[#1B3B2F]'
              }`}
            >
              {fat}
            </button>
          ))}

          {/* High Protein Toggle (>40g) */}
          <button
            onClick={() => setHighProteinOnly((prev) => !prev)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ml-auto flex items-center gap-1.5 ${
              highProteinOnly
                ? 'bg-[#123D2A] text-[#35E27F] border border-[#35E27F]'
                : 'bg-[#07130F] text-[#A8B5AE] border border-[#1B3B2F]'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>High Protein (&gt;40g)</span>
          </button>

          {/* Grass Fed Toggle */}
          <button
            onClick={() => setGrassFedOnly((prev) => !prev)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              grassFedOnly
                ? 'bg-[#123D2A] text-[#35E27F] border border-[#35E27F]'
                : 'bg-[#07130F] text-[#A8B5AE] border border-[#1B3B2F]'
            }`}
          >
            <Beef className="w-3.5 h-3.5" />
            <span>Grass-Fed Only</span>
          </button>
        </div>
      </div>

      {/* Results Count Counter */}
      <div className="flex items-center justify-between text-xs text-[#A8B5AE] px-1">
        <span>
          Showing <strong className="text-[#F5F7F3]">{filteredDishes.length}</strong> verified clean dishes in {cityName}, {state}
        </span>
        {filteredDishes.length !== initialDishes.length && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFat('all');
              setHighProteinOnly(false);
              setGrassFedOnly(false);
              setSortBy('default');
            }}
            className="text-[#35E27F] hover:underline cursor-pointer font-medium"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Dishes Grid */}
      {filteredDishes.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-[#0F231B] border border-[#1B3B2F] space-y-3">
          <p className="text-sm font-semibold text-[#F5F7F3]">No dishes matched your filters.</p>
          <p className="text-xs text-[#A8B5AE]">Try resetting the cooking fat or search query.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFat('all');
              setHighProteinOnly(false);
              setGrassFedOnly(false);
            }}
            className="px-4 py-2 rounded-xl bg-[#35E27F] text-[#07130F] text-xs font-bold transition-all cursor-pointer"
          >
            View All {cityName} Dishes
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredDishes.map((dish) => (
            <article
              key={dish.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#0B1A14] border border-[#1B3B2F] hover:border-[#35E27F]/60 transition-all duration-200 overflow-hidden shadow-sm hover:shadow-md"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#07130F]">
                {dish.image ? (
                  <Image
                    src={dish.image}
                    alt={`${dish.dish_name} at ${dish.restaurant_name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#0F231B]">
                    <Flame className="w-10 h-10 text-[#35E27F]/50" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A14] via-transparent to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1">
                  <span className="px-2.5 py-1 rounded-md bg-[#07130F]/90 backdrop-blur-md text-[#35E27F] text-[10px] font-bold tracking-wide border border-[#1B3B2F]">
                    {dish.cooking_fat}
                  </span>

                  <span className="px-2 py-0.5 rounded-md bg-[#123D2A]/90 backdrop-blur-md text-[#b6f7c1] text-[10px] font-bold border border-[#1B3B2F]">
                    ${dish.price.toFixed(2)}
                  </span>
                </div>

                {/* Zero Seed Oil Emblem */}
                <div className="absolute bottom-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#123D2A]/90 backdrop-blur-md text-[#35E27F] text-[9.5px] font-bold border border-[#1B3B2F]">
                    <ShieldCheck className="w-3 h-3 text-[#35E27F]" />
                    <span>Seed-Oil-Free</span>
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="text-[11px] font-semibold text-[#35E27F] uppercase tracking-wider">
                    {dish.restaurant_name}
                  </div>
                  <h3 className="text-base font-bold text-[#F5F7F3] leading-snug group-hover:text-[#35E27F] transition-colors">
                    <Link
                      href={`/${citySlug}/${dish.id}`}
                      className="hover:underline focus:outline-none"
                    >
                      {dish.dish_name}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#A8B5AE] line-clamp-1">
                    {dish.address}
                  </p>
                </div>

                {/* Macro Matrix */}
                <div className="grid grid-cols-4 gap-1.5 py-2 px-2.5 rounded-xl bg-[#07130F] border border-[#1B3B2F] text-center">
                  <div>
                    <div className="text-[9.5px] text-[#A8B5AE] uppercase">Calories</div>
                    <div className="text-xs font-extrabold text-[#F5F7F3]">{dish.calories}</div>
                  </div>
                  <div>
                    <div className="text-[9.5px] text-[#35E27F] uppercase">Protein</div>
                    <div className="text-xs font-extrabold text-[#35E27F]">{dish.protein_g}g</div>
                  </div>
                  <div>
                    <div className="text-[9.5px] text-[#A8B5AE] uppercase">Carbs</div>
                    <div className="text-xs font-extrabold text-[#F5F7F3]">{dish.carbs_g}g</div>
                  </div>
                  <div>
                    <div className="text-[9.5px] text-[#A8B5AE] uppercase">Fat</div>
                    <div className="text-xs font-extrabold text-[#F5F7F3]">{dish.fat_g}g</div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-2 border-t border-[#1B3B2F] flex items-center justify-between">
                  <span className="text-[11px] text-[#A8B5AE] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#35E27F]" />
                    <span>Verified Kitchen</span>
                  </span>

                  <Link
                    href={`/${citySlug}/${dish.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#35E27F] hover:underline"
                  >
                    <span>Nutrition Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
