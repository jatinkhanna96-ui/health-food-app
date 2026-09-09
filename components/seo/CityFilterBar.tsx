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
      <div className="p-4 sm:p-5 rounded-[28px] bg-[#FFFFFF] border border-[#E8DEC8] shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search input */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-[#C86A1D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search dishes or restaurants in ${cityName}...`}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#E8DEC8] text-xs sm:text-sm text-[#231815] placeholder:text-[#6B5E55]/60 focus:outline-none focus:border-[#C86A1D] transition-all"
            />
          </div>

          {/* Sort By selector */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-[#6B5E55] font-medium hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#E8DEC8] text-xs text-[#231815] focus:outline-none focus:border-[#C86A1D] cursor-pointer"
            >
              <option value="default">Verified Order</option>
              <option value="protein">Highest Protein</option>
              <option value="calories">Lowest Calories</option>
            </select>
          </div>
        </div>

        {/* Fat filter pills + Toggles */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-[11px] text-[#6B5E55] uppercase tracking-wider font-semibold mr-1">
            Cooking Fat:
          </span>

          <button
            onClick={() => setSelectedFat('all')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedFat === 'all'
                ? 'bg-[#C86A1D] text-white shadow-xs'
                : 'bg-[#FAF6EE] text-[#6B5E55] hover:text-[#231815] border border-[#E8DEC8]'
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
                  ? 'bg-[#C86A1D] text-white shadow-xs'
                  : 'bg-[#FAF6EE] text-[#6B5E55] hover:text-[#231815] border border-[#E8DEC8]'
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
                ? 'bg-[#EBF4ED] text-[#2D5A34] border border-[#2D5A34]'
                : 'bg-[#FAF6EE] text-[#6B5E55] border border-[#E8DEC8]'
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
                ? 'bg-[#EBF4ED] text-[#2D5A34] border border-[#2D5A34]'
                : 'bg-[#FAF6EE] text-[#6B5E55] border border-[#E8DEC8]'
            }`}
          >
            <Beef className="w-3.5 h-3.5" />
            <span>Grass-Fed Only</span>
          </button>
        </div>
      </div>

      {/* Results Count Counter */}
      <div className="flex items-center justify-between text-xs text-[#6B5E55] px-1">
        <span>
          Showing <strong className="text-[#231815]">{filteredDishes.length}</strong> verified wholesome dishes in {cityName}, {state}
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
            className="text-[#C86A1D] hover:underline cursor-pointer font-bold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Dishes Grid */}
      {filteredDishes.length === 0 ? (
        <div className="p-12 text-center rounded-[28px] bg-[#FFFFFF] border border-[#E8DEC8] space-y-3 shadow-xs">
          <p className="font-serif font-bold text-base text-[#231815]">No dishes matched your filters.</p>
          <p className="text-xs text-[#6B5E55]">Try resetting the cooking fat or search query.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFat('all');
              setHighProteinOnly(false);
              setGrassFedOnly(false);
            }}
            className="px-5 py-2.5 rounded-2xl bg-[#C86A1D] hover:bg-[#B35912] text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
          >
            View All {cityName} Dishes
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredDishes.map((dish) => (
            <article
              key={dish.id}
              className="group flex flex-col justify-between rounded-[26px] bg-[#FFFFFF] border border-[#E8DEC8] hover:border-[#C86A1D]/60 transition-all duration-200 overflow-hidden shadow-xs hover:shadow-md"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF6EE]">
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
                  <div className="w-full h-full flex items-center justify-center bg-[#FAF6EE]">
                    <Flame className="w-10 h-10 text-[#C86A1D]/50" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1">
                  <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#231815] text-[10px] font-bold tracking-wide border border-[#E8DEC8] shadow-xs">
                    {dish.cooking_fat}
                  </span>

                  <span className="px-2 py-0.5 rounded-md bg-[#FDF2C8] backdrop-blur-md text-[#914605] text-[10px] font-bold border border-[#F3DFC1] shadow-xs">
                    ${dish.price.toFixed(2)}
                  </span>
                </div>

                {/* Zero Seed Oil Emblem */}
                <div className="absolute bottom-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EBF4ED]/95 backdrop-blur-md text-[#2D5A34] text-[9.5px] font-bold border border-[#C5DEC9]">
                    <ShieldCheck className="w-3 h-3 text-[#2D5A34]" />
                    <span>Seed-Oil-Free</span>
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-[#C86A1D] uppercase tracking-wider">
                    {dish.restaurant_name}
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#231815] leading-snug group-hover:text-[#C86A1D] transition-colors">
                    <Link
                      href={`/${citySlug}/${dish.id}`}
                      className="hover:underline focus:outline-none"
                    >
                      {dish.dish_name}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#6B5E55] line-clamp-1">
                    {dish.address}
                  </p>
                </div>

                {/* Macro Matrix */}
                <div className="grid grid-cols-4 gap-1.5 py-2 px-2.5 rounded-xl bg-[#FAF6EE] border border-[#E8DEC8] text-center">
                  <div>
                    <div className="text-[9.5px] text-[#6B5E55] uppercase font-bold">Calories</div>
                    <div className="text-xs font-black text-[#231815]">{dish.calories}</div>
                  </div>
                  <div>
                    <div className="text-[9.5px] text-[#C86A1D] uppercase font-bold">Protein</div>
                    <div className="text-xs font-black text-[#C86A1D]">{dish.protein_g}g</div>
                  </div>
                  <div>
                    <div className="text-[9.5px] text-[#6B5E55] uppercase font-bold">Carbs</div>
                    <div className="text-xs font-black text-[#231815]">{dish.carbs_g}g</div>
                  </div>
                  <div>
                    <div className="text-[9.5px] text-[#2D5A34] uppercase font-bold">Fat</div>
                    <div className="text-xs font-black text-[#2D5A34]">{dish.fat_g}g</div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-2 border-t border-[#E8DEC8] flex items-center justify-between">
                  <span className="text-[11px] text-[#2D5A34] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#2D5A34]" />
                    <span>Verified Kitchen</span>
                  </span>

                  <Link
                    href={`/${citySlug}/${dish.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#C86A1D] hover:underline"
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
