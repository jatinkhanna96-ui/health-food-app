'use client';

import React from 'react';
import {
  ShieldCheck,
  Beef,
  WheatOff,
  MilkOff,
  Sparkles,
  Search,
  RotateCcw,
  SlidersHorizontal,
} from 'lucide-react';

export interface FilterState {
  search: string;
  seedOilFree: boolean;
  grassFed: boolean;
  glutenFree: boolean;
  keto: boolean;
  dairyFree: boolean;
  minProtein: number;
  maxCarbs: number;
}

interface BentoFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  totalDishesCount: number;
  filteredCount: number;
}

export default function BentoFilters({
  filters,
  onChange,
  onReset,
  totalDishesCount,
  filteredCount,
}: BentoFiltersProps) {
  const toggleFilter = (key: keyof FilterState) => {
    onChange({
      ...filters,
      [key]: !filters[key],
    });
  };

  const hasActiveFilters =
    filters.seedOilFree ||
    filters.grassFed ||
    filters.glutenFree ||
    filters.keto ||
    filters.dairyFree ||
    filters.minProtein > 0 ||
    filters.maxCarbs < 50 ||
    filters.search.trim().length > 0;

  return (
    <div className="space-y-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-stone-200/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)]">
      {/* Top Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="dish-search-input"
            type="text"
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            placeholder="Search healthy dishes, smoked brisket, pasture steak, wild salmon..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F2F6F3] border border-[#DCE6DE] text-xs font-semibold text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/25 focus:border-[#2D6A4F] transition-all shadow-inner"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end shrink-0">
          <span className="text-xs font-semibold text-stone-500 whitespace-nowrap">
            Showing <strong className="text-[#2D6A4F] font-bold">{filteredCount}</strong> of{' '}
            <span className="text-stone-700 font-bold">{totalDishesCount}</span>
          </span>
          {hasActiveFilters && (
            <button
              id="reset-filters-btn"
              onClick={onReset}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-all cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3 h-3 text-stone-500" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Squircles Row (Refined Botanical Palette) */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
        {/* Seed-Oil Free */}
        <button
          id="filter-seed-oil-btn"
          onClick={() => toggleFilter('seedOilFree')}
          className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-2 group ${
            filters.seedOilFree
              ? 'bg-[#EBF5EF] border-2 border-[#2D6A4F] shadow-sm shadow-[#2D6A4F]/10 ring-1 ring-[#2D6A4F]/20'
              : 'bg-[#F9FBF9] border border-[#DCE6DE] hover:border-[#2D6A4F]/40 hover:bg-white'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
              filters.seedOilFree
                ? 'bg-[#2D6A4F] text-white shadow-md shadow-[#2D6A4F]/20 scale-105 font-bold'
                : 'bg-white border border-[#DCE6DE] text-stone-600 group-hover:scale-105 shadow-xs'
            }`}
          >
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span
              className={`text-xs font-extrabold block leading-tight ${
                filters.seedOilFree ? 'text-[#1B4332]' : 'text-stone-800'
              }`}
            >
              Seed-Oil Free
            </span>
            <span className="text-[10px] text-stone-400 font-medium">Zero Canola/Soy</span>
          </div>
        </button>

        {/* Grass-Fed / Pasture */}
        <button
          id="filter-grass-fed-btn"
          onClick={() => toggleFilter('grassFed')}
          className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-2 group ${
            filters.grassFed
              ? 'bg-teal-50/90 border-2 border-teal-500 shadow-md shadow-teal-500/20 ring-2 ring-teal-500/20'
              : 'bg-[#FAF8F5] border border-stone-200 hover:border-stone-300 hover:bg-white'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
              filters.grassFed
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30 scale-105 font-bold'
                : 'bg-white border border-stone-200/80 text-stone-600 group-hover:scale-105 shadow-xs'
            }`}
          >
            <Beef className="w-5 h-5" />
          </div>
          <div>
            <span
              className={`text-xs font-extrabold block leading-tight ${
                filters.grassFed ? 'text-teal-900' : 'text-stone-800'
              }`}
            >
              Grass-Fed
            </span>
            <span className="text-[10px] text-stone-400 font-medium">100% Pasture</span>
          </div>
        </button>

        {/* Gluten-Free */}
        <button
          id="filter-gluten-free-btn"
          onClick={() => toggleFilter('glutenFree')}
          className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-2 group ${
            filters.glutenFree
              ? 'bg-amber-50/90 border-2 border-amber-500 shadow-md shadow-amber-500/20 ring-2 ring-amber-500/20'
              : 'bg-[#FAF8F5] border border-stone-200 hover:border-stone-300 hover:bg-white'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
              filters.glutenFree
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30 scale-105 font-bold'
                : 'bg-white border border-stone-200/80 text-stone-600 group-hover:scale-105 shadow-xs'
            }`}
          >
            <WheatOff className="w-5 h-5" />
          </div>
          <div>
            <span
              className={`text-xs font-extrabold block leading-tight ${
                filters.glutenFree ? 'text-amber-900' : 'text-stone-800'
              }`}
            >
              Gluten-Free
            </span>
            <span className="text-[10px] text-stone-400 font-medium">Strict Celiac</span>
          </div>
        </button>

        {/* Keto / Clean Fats */}
        <button
          id="filter-keto-btn"
          onClick={() => toggleFilter('keto')}
          className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-2 group ${
            filters.keto
              ? 'bg-cyan-50/90 border-2 border-cyan-500 shadow-md shadow-cyan-500/20 ring-2 ring-cyan-500/20'
              : 'bg-[#FAF8F5] border border-stone-200 hover:border-stone-300 hover:bg-white'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
              filters.keto
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 scale-105 font-bold'
                : 'bg-white border border-stone-200/80 text-stone-600 group-hover:scale-105 shadow-xs'
            }`}
          >
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span
              className={`text-xs font-extrabold block leading-tight ${
                filters.keto ? 'text-cyan-900' : 'text-stone-800'
              }`}
            >
              Keto Ratio
            </span>
            <span className="text-[10px] text-stone-400 font-medium">High Fuel Fat</span>
          </div>
        </button>

        {/* Dairy-Free */}
        <button
          id="filter-dairy-free-btn"
          onClick={() => toggleFilter('dairyFree')}
          className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-2 group ${
            filters.dairyFree
              ? 'bg-indigo-50/90 border-2 border-indigo-500 shadow-md shadow-indigo-500/20 ring-2 ring-indigo-500/20'
              : 'bg-[#FAF8F5] border border-stone-200 hover:border-stone-300 hover:bg-white'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
              filters.dairyFree
                ? 'bg-indigo-500 text-slate-950 shadow-md shadow-indigo-500/30 scale-105 font-bold'
                : 'bg-white border border-stone-200/80 text-stone-600 group-hover:scale-105 shadow-xs'
            }`}
          >
            <MilkOff className="w-5 h-5" />
          </div>
          <div>
            <span
              className={`text-xs font-extrabold block leading-tight ${
                filters.dairyFree ? 'text-indigo-900' : 'text-stone-800'
              }`}
            >
              Dairy-Free
            </span>
            <span className="text-[10px] text-stone-400 font-medium">A2 / Plant Based</span>
          </div>
        </button>
      </div>

      {/* Tactile Sliders for Min Protein & Max Carbs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between gap-2.5 shadow-xs">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-stone-700">Min Protein Threshold</span>
            <span className="px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 font-bold">
              {filters.minProtein}g+
            </span>
          </div>
          <input
            id="min-protein-slider"
            type="range"
            min="0"
            max="60"
            step="5"
            value={filters.minProtein}
            onChange={(e) => onChange({ ...filters, minProtein: Number(e.target.value) })}
            className="w-full accent-emerald-500 cursor-pointer h-2 bg-stone-200 rounded-lg"
          />
        </div>

        <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between gap-2.5 shadow-xs">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-stone-700">Max Net Carbs Cap</span>
            <span className="px-2.5 py-0.5 rounded-lg bg-teal-100 text-teal-800 font-bold">
              ≤ {filters.maxCarbs}g
            </span>
          </div>
          <input
            id="max-carbs-slider"
            type="range"
            min="5"
            max="50"
            step="5"
            value={filters.maxCarbs}
            onChange={(e) => onChange({ ...filters, maxCarbs: Number(e.target.value) })}
            className="w-full accent-teal-600 cursor-pointer h-2 bg-stone-200 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}



