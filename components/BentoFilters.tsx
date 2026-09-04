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
    <div className="space-y-4 glass-panel text-white p-4 sm:p-5 rounded-3xl">
      {/* Top Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-emerald-300 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="dish-search-input"
            type="text"
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            placeholder="Search healthy dishes, smoked brisket, pasture steak, wild salmon..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl glass-pill-dark border border-white/20 text-xs font-semibold text-white placeholder-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-[#b6f7c1]/40 focus:border-[#b6f7c1] transition-all shadow-inner"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end shrink-0">
          <span className="text-xs font-semibold text-emerald-200/80 whitespace-nowrap">
            Showing <strong className="text-[#b6f7c1] font-black">{filteredCount}</strong> of{' '}
            <span className="text-emerald-100 font-bold">{totalDishesCount}</span>
          </span>
          {hasActiveFilters && (
            <button
              id="reset-filters-btn"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill hover:bg-white/[0.15] text-[#b6f7c1] text-xs font-bold transition-all cursor-pointer border border-[#b6f7c1]/40 shadow-xs"
            >
              <RotateCcw className="w-3 h-3 text-[#b6f7c1]" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Squircles Row */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
        {/* Seed-Oil Free */}
        <button
          id="filter-seed-oil-btn"
          onClick={() => toggleFilter('seedOilFree')}
          className={`p-3 rounded-2xl transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-2 group ${
            filters.seedOilFree
              ? 'bg-gradient-to-b from-[#b6f7c1]/25 to-white/[0.08] backdrop-blur-xl border-2 border-[#b6f7c1] shadow-[0_8px_20px_rgba(182,247,193,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] ring-1 ring-[#b6f7c1]/30'
              : 'glass-pill border border-white/15 hover:border-white/30 hover:bg-white/[0.12]'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
              filters.seedOilFree
                ? 'bg-[#b6f7c1] text-[#0a2e1f] shadow-md shadow-[#b6f7c1]/30 scale-105 font-black'
                : 'glass-pill-dark border border-white/15 text-[#b6f7c1] group-hover:scale-105 shadow-xs'
            }`}
          >
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span
              className={`text-xs font-black block leading-tight ${
                filters.seedOilFree ? 'text-[#b6f7c1]' : 'text-stone-100'
              }`}
            >
              Seed-Oil Free
            </span>
            <span className="text-[10px] text-emerald-300/70 font-medium">Zero Canola/Soy</span>
          </div>
        </button>

        {/* Grass-Fed / Pasture */}
        <button
          id="filter-grass-fed-btn"
          onClick={() => toggleFilter('grassFed')}
          className={`p-3 rounded-2xl transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-2 group ${
            filters.grassFed
              ? 'bg-gradient-to-b from-[#b6f7c1]/25 to-white/[0.08] backdrop-blur-xl border-2 border-[#b6f7c1] shadow-[0_8px_20px_rgba(182,247,193,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] ring-1 ring-[#b6f7c1]/30'
              : 'glass-pill border border-white/15 hover:border-white/30 hover:bg-white/[0.12]'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
              filters.grassFed
                ? 'bg-[#b6f7c1] text-[#0a2e1f] shadow-md shadow-[#b6f7c1]/30 scale-105 font-black'
                : 'glass-pill-dark border border-white/15 text-[#b6f7c1] group-hover:scale-105 shadow-xs'
            }`}
          >
            <Beef className="w-5 h-5" />
          </div>
          <div>
            <span
              className={`text-xs font-black block leading-tight ${
                filters.grassFed ? 'text-[#b6f7c1]' : 'text-stone-100'
              }`}
            >
              Grass-Fed
            </span>
            <span className="text-[10px] text-emerald-300/70 font-medium">100% Pasture</span>
          </div>
        </button>

        {/* Gluten-Free */}
        <button
          id="filter-gluten-free-btn"
          onClick={() => toggleFilter('glutenFree')}
          className={`p-3 rounded-2xl transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-2 group ${
            filters.glutenFree
              ? 'bg-gradient-to-b from-[#b6f7c1]/25 to-white/[0.08] backdrop-blur-xl border-2 border-[#b6f7c1] shadow-[0_8px_20px_rgba(182,247,193,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] ring-1 ring-[#b6f7c1]/30'
              : 'glass-pill border border-white/15 hover:border-white/30 hover:bg-white/[0.12]'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
              filters.glutenFree
                ? 'bg-[#b6f7c1] text-[#0a2e1f] shadow-md shadow-[#b6f7c1]/30 scale-105 font-black'
                : 'glass-pill-dark border border-white/15 text-[#b6f7c1] group-hover:scale-105 shadow-xs'
            }`}
          >
            <WheatOff className="w-5 h-5" />
          </div>
          <div>
            <span
              className={`text-xs font-black block leading-tight ${
                filters.glutenFree ? 'text-[#b6f7c1]' : 'text-stone-100'
              }`}
            >
              Gluten-Free
            </span>
            <span className="text-[10px] text-emerald-300/70 font-medium">Strict Celiac</span>
          </div>
        </button>

        {/* Keto / Clean Fats */}
        <button
          id="filter-keto-btn"
          onClick={() => toggleFilter('keto')}
          className={`p-3 rounded-2xl transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-2 group ${
            filters.keto
              ? 'bg-gradient-to-b from-[#b6f7c1]/25 to-white/[0.08] backdrop-blur-xl border-2 border-[#b6f7c1] shadow-[0_8px_20px_rgba(182,247,193,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] ring-1 ring-[#b6f7c1]/30'
              : 'glass-pill border border-white/15 hover:border-white/30 hover:bg-white/[0.12]'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
              filters.keto
                ? 'bg-[#b6f7c1] text-[#0a2e1f] shadow-md shadow-[#b6f7c1]/30 scale-105 font-black'
                : 'glass-pill-dark border border-white/15 text-[#b6f7c1] group-hover:scale-105 shadow-xs'
            }`}
          >
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span
              className={`text-xs font-black block leading-tight ${
                filters.keto ? 'text-[#b6f7c1]' : 'text-stone-100'
              }`}
            >
              Keto Ratio
            </span>
            <span className="text-[10px] text-emerald-300/70 font-medium">High Fuel Fat</span>
          </div>
        </button>

        {/* Dairy-Free */}
        <button
          id="filter-dairy-free-btn"
          onClick={() => toggleFilter('dairyFree')}
          className={`p-3 rounded-2xl transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-2 group ${
            filters.dairyFree
              ? 'bg-gradient-to-b from-[#b6f7c1]/25 to-white/[0.08] backdrop-blur-xl border-2 border-[#b6f7c1] shadow-[0_8px_20px_rgba(182,247,193,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] ring-1 ring-[#b6f7c1]/30'
              : 'glass-pill border border-white/15 hover:border-white/30 hover:bg-white/[0.12]'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
              filters.dairyFree
                ? 'bg-[#b6f7c1] text-[#0a2e1f] shadow-md shadow-[#b6f7c1]/30 scale-105 font-black'
                : 'glass-pill-dark border border-white/15 text-[#b6f7c1] group-hover:scale-105 shadow-xs'
            }`}
          >
            <MilkOff className="w-5 h-5" />
          </div>
          <div>
            <span
              className={`text-xs font-black block leading-tight ${
                filters.dairyFree ? 'text-[#b6f7c1]' : 'text-stone-100'
              }`}
            >
              Dairy-Free
            </span>
            <span className="text-[10px] text-emerald-300/70 font-medium">A2 / Plant Based</span>
          </div>
        </button>
      </div>

      {/* Tactile Sliders for Min Protein & Max Carbs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <div className="p-3.5 rounded-2xl glass-pill border border-white/15 flex flex-col justify-between gap-2.5 shadow-xs">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-emerald-100 font-extrabold">Min Protein Threshold</span>
            <span className="px-2.5 py-0.5 rounded-lg glass-pill-dark text-[#b6f7c1] font-black border border-[#b6f7c1]/30">
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
            className="w-full accent-[#b6f7c1] cursor-pointer h-2 bg-white/10 rounded-lg"
          />
        </div>

        <div className="p-3.5 rounded-2xl glass-pill border border-white/15 flex flex-col justify-between gap-2.5 shadow-xs">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-emerald-100 font-extrabold">Max Net Carbs Cap</span>
            <span className="px-2.5 py-0.5 rounded-lg glass-pill-dark text-[#b6f7c1] font-black border border-[#b6f7c1]/30">
              &le; {filters.maxCarbs}g
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
            className="w-full accent-[#b6f7c1] cursor-pointer h-2 bg-white/10 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
