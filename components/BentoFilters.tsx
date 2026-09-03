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
  MapPin,
  ChevronDown,
  UtensilsCrossed,
  Flame,
} from 'lucide-react';
import { CityLocation } from '@/lib/mockData';

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
  selectedCityName?: string;
  onCityChange?: (cityName: string) => void;
  availableCities?: CityLocation[];
  cityDishCounts?: Record<string, number>;
}

export default function BentoFilters({
  filters,
  onChange,
  onReset,
  totalDishesCount,
  filteredCount,
  selectedCityName = 'All Locations',
  onCityChange,
  availableCities = [],
  cityDishCounts = {},
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
    filters.search.trim().length > 0 ||
    selectedCityName !== 'All Locations';

  return (
    <div className="space-y-4 bg-white p-4 sm:p-5 rounded-3xl border border-stone-200/90 shadow-[0_4px_24px_rgba(28,25,23,0.05)]">
      {/* Top Search & Location Dropdown Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Search Bar with Arby's style input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="dish-search-input"
            type="text"
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            placeholder="Search healthy dishes, steak, tallow, salmon, bowls..."
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            suppressHydrationWarning
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/15 transition-all shadow-inner"
          />
        </div>

        {/* Location Dropdown */}
        <div className="relative shrink-0 flex items-center">
          <div className="relative w-full sm:w-auto">
            <MapPin className="w-3.5 h-3.5 text-[#C8102E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              id="feed-city-selector-dropdown"
              value={selectedCityName}
              onChange={(e) => onCityChange?.(e.target.value)}
              suppressHydrationWarning
              className="w-full sm:w-auto appearance-none pl-9 pr-9 py-2.5 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200 text-xs font-bold text-stone-800 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/15 cursor-pointer transition-all shadow-sm"
            >
              <option value="All Locations" className="bg-white text-stone-900">
                📍 All Locations ({totalDishesCount})
              </option>
              {availableCities.map((c) => (
                <option key={c.name} value={c.name} className="bg-white text-stone-900">
                  {c.name}, {c.state} ({cityDishCounts[c.name] ?? 0})
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Count & Reset Actions */}
        <div className="flex items-center gap-2.5 justify-between sm:justify-end shrink-0">
          <span className="text-xs font-bold text-stone-500 whitespace-nowrap">
            Showing <strong className="text-stone-900">{filteredCount}</strong> of{' '}
            <span className="text-stone-400">{totalDishesCount}</span>
          </span>
          {hasActiveFilters && (
            <button
              id="reset-filters-btn"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-all border border-stone-200 cursor-pointer shadow-sm active:scale-95"
            >
              <RotateCcw className="w-3 h-3 text-[#C8102E]" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Location Filter Pills Row (Horizontal Scroll) */}
      <div className="space-y-2 pt-1 border-t border-stone-100">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 font-black text-stone-800">
            <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>Deliver to / Location Zone</span>
          </div>
          <span className="text-[11px] font-semibold text-stone-500">
            Current: <strong className="text-[#C8102E]">{selectedCityName}</strong>
          </span>
        </div>

        <div
          id="feed-location-pills-carousel"
          className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1 pt-0.5"
        >
          {/* All Locations Pill */}
          <button
            id="feed-location-pill-all"
            type="button"
            onClick={() => onCityChange?.('All Locations')}
            className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              selectedCityName === 'All Locations'
                ? 'bg-[#C8102E] text-white shadow-md shadow-rose-900/15 font-black'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
            }`}
          >
            <span>All Locations</span>
            <span
              className={`px-1.5 py-0.5 rounded-md text-[10px] font-black ${
                selectedCityName === 'All Locations'
                  ? 'bg-white/20 text-white'
                  : 'bg-stone-200 text-stone-600'
              }`}
            >
              {totalDishesCount}
            </span>
          </button>

          {/* City Pills */}
          {availableCities.map((city) => {
            const isSelected = selectedCityName === city.name;
            const count = cityDishCounts[city.name] ?? 0;
            return (
              <button
                key={city.name}
                id={`feed-location-pill-${city.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                type="button"
                onClick={() => onCityChange?.(city.name)}
                className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#C8102E] text-white shadow-md shadow-rose-900/15 font-black'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
                }`}
              >
                <span>{city.name}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-black ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-stone-200 text-stone-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dietary Veto Badges Bento Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {/* Seed-Oil Free */}
        <button
          id="filter-seed-oil-btn"
          onClick={() => toggleFilter('seedOilFree')}
          className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
            filters.seedOilFree
              ? 'bg-[#C8102E] border-[#C8102E] text-white shadow-md shadow-rose-900/15'
              : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
            <span
              className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded-md ${
                filters.seedOilFree ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-600'
              }`}
            >
              VETO
            </span>
          </div>
          <span className="text-xs font-black leading-tight">Seed-Oil Free</span>
        </button>

        {/* Grass-Fed / Wild */}
        <button
          id="filter-grass-fed-btn"
          onClick={() => toggleFilter('grassFed')}
          className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
            filters.grassFed
              ? 'bg-[#932016] border-[#932016] text-white shadow-md shadow-rose-900/15'
              : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <Beef className="w-4 h-4 stroke-[2.5]" />
            <span
              className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded-md ${
                filters.grassFed ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-600'
              }`}
            >
              CLEAN
            </span>
          </div>
          <span className="text-xs font-black leading-tight">Grass-Fed</span>
        </button>

        {/* Gluten-Free */}
        <button
          id="filter-gluten-free-btn"
          onClick={() => toggleFilter('glutenFree')}
          className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
            filters.glutenFree
              ? 'bg-amber-600 border-amber-600 text-white shadow-md shadow-amber-900/15'
              : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <WheatOff className="w-4 h-4 stroke-[2.5]" />
            <span
              className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded-md ${
                filters.glutenFree ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-600'
              }`}
            >
              CELIAC
            </span>
          </div>
          <span className="text-xs font-black leading-tight">Gluten Free</span>
        </button>

        {/* Keto / Low Carb */}
        <button
          id="filter-keto-btn"
          onClick={() => toggleFilter('keto')}
          className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
            filters.keto
              ? 'bg-purple-600 border-purple-600 text-white shadow-md shadow-purple-900/15'
              : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <Sparkles className="w-4 h-4 stroke-[2.5]" />
            <span
              className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded-md ${
                filters.keto ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-600'
              }`}
            >
              MACRO
            </span>
          </div>
          <span className="text-xs font-black leading-tight">Keto Ratio</span>
        </button>

        {/* Dairy Free */}
        <button
          id="filter-dairy-free-btn"
          onClick={() => toggleFilter('dairyFree')}
          className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
            filters.dairyFree
              ? 'bg-sky-600 border-sky-600 text-white shadow-md shadow-sky-900/15'
              : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <MilkOff className="w-4 h-4 stroke-[2.5]" />
            <span
              className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded-md ${
                filters.dairyFree ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-600'
              }`}
            >
              A2/DF
            </span>
          </div>
          <span className="text-xs font-black leading-tight">Dairy-Free</span>
        </button>
      </div>

      {/* Sliders for Min Protein & Max Carbs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between gap-2.5">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-stone-700">Min Protein Threshold</span>
            <span className="px-2.5 py-0.5 rounded-md bg-rose-100 text-[#C8102E] border border-rose-200 font-mono font-bold">
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
            suppressHydrationWarning
            className="w-full accent-[#C8102E] cursor-pointer"
          />
        </div>

        <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between gap-2.5">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-stone-700">Max Net Carbs Cap</span>
            <span className="px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 border border-blue-200 font-mono font-bold">
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
            suppressHydrationWarning
            className="w-full accent-blue-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

