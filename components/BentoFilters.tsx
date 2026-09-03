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
    <div className="space-y-3.5 bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-sm">
      {/* Top Search & Location Dropdown Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="dish-search-input"
            type="text"
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            placeholder="Search dish, steak, tallow, salmon, ramen..."
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            suppressHydrationWarning
            className="w-full pl-9 pr-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Feed Location Selector Dropdown */}
        <div className="relative shrink-0 flex items-center">
          <div className="relative w-full sm:w-auto">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              id="feed-city-selector-dropdown"
              value={selectedCityName}
              onChange={(e) => onCityChange?.(e.target.value)}
              suppressHydrationWarning
              className="w-full sm:w-auto appearance-none pl-8 pr-8 py-2 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer transition-colors"
            >
              <option value="All Locations">
                📍 All Locations ({totalDishesCount})
              </option>
              {availableCities.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}, {c.state} ({cityDishCounts[c.name] ?? 0})
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Count & Reset Actions */}
        <div className="flex items-center gap-2 justify-between sm:justify-end shrink-0">
          <span className="text-xs font-bold text-slate-500 whitespace-nowrap">
            Showing <strong className="text-slate-900">{filteredCount}</strong> of{' '}
            {totalDishesCount}
          </span>
          {hasActiveFilters && (
            <button
              id="reset-filters-btn"
              onClick={onReset}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Location Filter Pills Row (Horizontal Scroll) */}
      <div className="space-y-1.5 pt-0.5">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 font-extrabold text-slate-800">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Filter by Location</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-400">
            Active: <strong className="text-emerald-600">{selectedCityName}</strong>
          </span>
        </div>

        <div
          id="feed-location-pills-carousel"
          className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pb-0.5 pt-0.5"
        >
          {/* All Locations Pill */}
          <button
            id="feed-location-pill-all"
            type="button"
            onClick={() => onCityChange?.('All Locations')}
            className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedCityName === 'All Locations'
                ? 'bg-emerald-500 text-black shadow-sm shadow-emerald-500/30'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80'
            }`}
          >
            <span>All Locations</span>
            <span
              className={`px-1.5 py-0.2 rounded-md text-[10px] font-extrabold ${
                selectedCityName === 'All Locations'
                  ? 'bg-black/20 text-black'
                  : 'bg-slate-200 text-slate-600'
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
                className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-emerald-500 text-black shadow-sm shadow-emerald-500/30'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80'
                }`}
              >
                <span>{city.name}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-md text-[10px] font-extrabold ${
                    isSelected
                      ? 'bg-black/20 text-black'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Veto Badges Bento Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {/* Seed-Oil Free */}
        <button
          id="filter-seed-oil-btn"
          onClick={() => toggleFilter('seedOilFree')}
          className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
            filters.seedOilFree
              ? 'bg-emerald-500 border-emerald-500 text-black shadow-md shadow-emerald-500/20'
              : 'bg-slate-50 border-slate-200 hover:border-emerald-300 text-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <ShieldCheck className="w-4 h-4" />
            <span
              className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md ${
                filters.seedOilFree ? 'bg-black/20 text-black' : 'bg-slate-200 text-slate-600'
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
          className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
            filters.grassFed
              ? 'bg-emerald-900 border-emerald-900 text-emerald-200 shadow-md'
              : 'bg-slate-50 border-slate-200 hover:border-emerald-300 text-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <Beef className="w-4 h-4" />
            <span
              className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md ${
                filters.grassFed ? 'bg-emerald-800 text-emerald-200' : 'bg-slate-200 text-slate-600'
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
          className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
            filters.glutenFree
              ? 'bg-amber-500 border-amber-500 text-black shadow-md'
              : 'bg-slate-50 border-slate-200 hover:border-amber-300 text-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <WheatOff className="w-4 h-4" />
            <span
              className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md ${
                filters.glutenFree ? 'bg-black/20 text-black' : 'bg-slate-200 text-slate-600'
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
          className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
            filters.keto
              ? 'bg-purple-600 border-purple-600 text-white shadow-md'
              : 'bg-slate-50 border-slate-200 hover:border-purple-300 text-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <Sparkles className="w-4 h-4" />
            <span
              className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md ${
                filters.keto ? 'bg-purple-700 text-white' : 'bg-slate-200 text-slate-600'
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
          className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
            filters.dairyFree
              ? 'bg-blue-600 border-blue-600 text-white shadow-md'
              : 'bg-slate-50 border-slate-200 hover:border-blue-300 text-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <MilkOff className="w-4 h-4" />
            <span
              className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md ${
                filters.dairyFree ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-600'
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
        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between gap-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-700">Min Protein Threshold</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
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
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between gap-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-700">Max Net Carbs Cap</span>
            <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
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
            className="w-full accent-blue-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
