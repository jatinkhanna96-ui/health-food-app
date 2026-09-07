'use client';

import React from 'react';
import {
  ShieldCheck,
  Zap,
  Brain,
  HeartPulse,
  Search,
  RotateCcw,
  Sparkles,
  Flame,
  WheatOff,
  MilkOff,
  Apple,
} from 'lucide-react';

export interface FilterState {
  search: string;
  seedOilFree: boolean;
  grassFed: boolean;
  glutenFree: boolean;
  keto: boolean;
  dairyFree: boolean;
  highProtein: boolean;
  lowCalorie: boolean;
  lowSugar: boolean;
  lowCarb: boolean;
  highFiber: boolean;
  vegetarian?: boolean;
  minProtein: number;
  maxCarbs: number;
  benefitPostWorkout?: boolean;
  benefitBrainFuel?: boolean;
  benefitGutSoothers?: boolean;
}

interface BentoFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  totalDishesCount: number;
  filteredCount: number;
}

const QUICK_SEARCH_EXAMPLES = [
  'High-protein lunch',
  'Low-calorie dinner',
  'Healthy chicken near me',
  'High-protein breakfast',
  'Low-sugar dessert',
];

export default function BentoFilters({
  filters,
  onChange,
  onReset,
  totalDishesCount,
  filteredCount,
}: BentoFiltersProps) {
  // Toggle the 3 primary personalization cards
  const toggleBenefit = (benefit: 'postWorkout' | 'brainFuel' | 'gutSoothers') => {
    if (benefit === 'postWorkout') {
      const next = !filters.benefitPostWorkout;
      onChange({
        ...filters,
        benefitPostWorkout: next,
        minProtein: next ? 40 : 0,
      });
    } else if (benefit === 'brainFuel') {
      const next = !filters.benefitBrainFuel;
      onChange({
        ...filters,
        benefitBrainFuel: next,
        lowCarb: next,
        maxCarbs: next ? 20 : 50,
      });
    } else if (benefit === 'gutSoothers') {
      const next = !filters.benefitGutSoothers;
      onChange({
        ...filters,
        benefitGutSoothers: next,
        seedOilFree: true,
        glutenFree: next,
        dairyFree: next,
      });
    }
  };

  const toggleFilter = (key: keyof FilterState) => {
    onChange({
      ...filters,
      [key]: !filters[key],
    });
  };

  const hasActiveFilters =
    filters.benefitPostWorkout ||
    filters.benefitBrainFuel ||
    filters.benefitGutSoothers ||
    filters.highProtein ||
    filters.lowCalorie ||
    filters.lowSugar ||
    filters.lowCarb ||
    filters.highFiber ||
    filters.vegetarian ||
    filters.seedOilFree ||
    filters.grassFed ||
    filters.glutenFree ||
    filters.keto ||
    filters.dairyFree ||
    filters.minProtein > 0 ||
    filters.maxCarbs < 50 ||
    filters.search.trim().length > 0;

  return (
    <div className="space-y-3.5 sm:space-y-5 bg-[#0B1A14] border border-[#1B3B2F] text-[#F5F7F3] p-3.5 sm:p-6 rounded-2xl sm:rounded-[22px] shadow-sm">
      {/* ===================================================================== */}
      {/* 1. SEARCH SECTION (Section 2)                                         */}
      {/* ===================================================================== */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="dish-search-input"
            className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#35E27F] uppercase block"
          >
            WHAT ARE YOU LOOKING FOR?
          </label>
          <span className="text-xs text-[#A8B5AE] font-medium hidden sm:inline">
            {filteredCount} matching {filteredCount === 1 ? 'dish' : 'dishes'}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-[#35E27F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="dish-search-input"
              suppressHydrationWarning
              type="text"
              value={filters.search}
              onChange={(e) => onChange({ ...filters, search: e.target.value })}
              placeholder='Try "high-protein lunch near me"'
              className="w-full pl-10 pr-4 py-2 sm:py-3 rounded-xl bg-[#07130F] border border-[#1B3B2F] text-xs font-semibold text-[#F5F7F3] placeholder:text-[#A8B5AE] focus:outline-none focus:border-[#35E27F] transition-all duration-200"
            />
            {filters.search && (
              <button
                onClick={() => onChange({ ...filters, search: '' })}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8B5AE] hover:text-[#F5F7F3] text-xs font-bold"
              >
                &times;
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end shrink-0">
            <div className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#0F231B] border border-[#1B3B2F] text-[11px] sm:text-xs font-medium text-[#A8B5AE] whitespace-nowrap flex items-center gap-1.5 sm:gap-2">
              <span>Nearby:</span>
              <strong className="text-[#35E27F] font-bold">{filteredCount}</strong>
              <span className="text-[#1B3B2F]">&bull;</span>
              <span className="text-[#F5F7F3] font-semibold">{totalDishesCount} in City</span>
            </div>
            {hasActiveFilters && (
              <button
                id="reset-filters-btn"
                onClick={onReset}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-[#0F231B] hover:bg-[#142C23] text-[#A8B5AE] hover:text-[#F5F7F3] text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer border border-[#1B3B2F] active:scale-95 shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#35E27F]" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Supporting microcopy */}
        <p className="text-[11px] sm:text-xs text-[#A8B5AE] font-normal">
          Search by dish, diet, nutrition goal or ingredient.
        </p>

        {/* Quick Example Search Pills - Horizontal scrolling on mobile */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none flex-nowrap sm:flex-wrap -mx-1 px-1">
          <span className="text-[10px] font-semibold text-[#A8B5AE] uppercase tracking-wider mr-0.5 shrink-0">
            Try:
          </span>
          {QUICK_SEARCH_EXAMPLES.map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => onChange({ ...filters, search: example })}
              className={`text-[10px] sm:text-[11px] px-2.5 py-1 rounded-lg border transition-all duration-150 cursor-pointer shrink-0 whitespace-nowrap ${
                filters.search.toLowerCase() === example.toLowerCase()
                  ? 'bg-[#35E27F] text-[#07130F] font-bold border-[#35E27F]'
                  : 'bg-[#0F231B] text-[#A8B5AE] hover:text-[#F5F7F3] border-[#1B3B2F] hover:border-[#35E27F]/40'
              }`}
            >
              {example}
            </button>
          ))}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 2. HEALTH GOAL & PERSONALIZATION (Section 3 & 11)                     */}
      {/* ===================================================================== */}
      <div className="space-y-3 pt-2 border-t border-[#1B3B2F]/60">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F5F7F3] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#35E27F]" />
            <span>WHAT FITS YOU TODAY?</span>
          </span>
          <span className="text-[10px] text-[#35E27F] font-bold uppercase tracking-wider">
            WHAT MATTERS TO YOU?
          </span>
        </div>

        {/* 3 Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
          {/* Option 1: More Protein */}
          <div
            id="filter-more-protein-card"
            onClick={() => toggleBenefit('postWorkout')}
            className={`p-3 sm:p-4 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-2.5 sm:gap-3 group border ${
              filters.benefitPostWorkout
                ? 'bg-[#123D2A] border-[#35E27F] shadow-[0_0_16px_rgba(53,226,127,0.15)]'
                : 'bg-[#0F231B] border-[#1B3B2F] hover:border-[#265241]'
            }`}
          >
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                  filters.benefitPostWorkout
                    ? 'bg-[#35E27F] text-[#07130F] font-bold'
                    : 'bg-[#07130F] text-[#35E27F] border border-[#1B3B2F]'
                }`}
              >
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold block leading-tight text-[#F5F7F3]">
                  More Protein
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#A8B5AE] font-medium truncate block mt-0.5">
                  40g+ protein &bull; Great for recovery
                </span>
              </div>
            </div>

            <div className="shrink-0 flex items-center">
              <div
                className={`w-9 sm:w-10 h-5 rounded-full transition-colors duration-200 p-0.5 flex items-center ${
                  filters.benefitPostWorkout ? 'bg-[#35E27F]' : 'bg-[#1B3B2F]'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-transform duration-200 shadow-sm ${
                    filters.benefitPostWorkout ? 'translate-x-4 sm:translate-x-5 bg-[#07130F]' : 'translate-x-0 bg-[#A8B5AE]'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Option 2: Less Carbs & Sugar */}
          <div
            id="filter-less-carbs-card"
            onClick={() => toggleBenefit('brainFuel')}
            className={`p-3 sm:p-4 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-2.5 sm:gap-3 group border ${
              filters.benefitBrainFuel
                ? 'bg-[#123D2A] border-[#35E27F] shadow-[0_0_16px_rgba(53,226,127,0.15)]'
                : 'bg-[#0F231B] border-[#1B3B2F] hover:border-[#265241]'
            }`}
          >
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                  filters.benefitBrainFuel
                    ? 'bg-[#35E27F] text-[#07130F] font-bold'
                    : 'bg-[#07130F] text-[#35E27F] border border-[#1B3B2F]'
                }`}
              >
                <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold block leading-tight text-[#F5F7F3]">
                  Less Carbs &amp; Sugar
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#A8B5AE] font-medium truncate block mt-0.5">
                  Lower carbs &bull; Low added sugar
                </span>
              </div>
            </div>

            <div className="shrink-0 flex items-center">
              <div
                className={`w-9 sm:w-10 h-5 rounded-full transition-colors duration-200 p-0.5 flex items-center ${
                  filters.benefitBrainFuel ? 'bg-[#35E27F]' : 'bg-[#1B3B2F]'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-transform duration-200 shadow-sm ${
                    filters.benefitBrainFuel ? 'translate-x-4 sm:translate-x-5 bg-[#07130F]' : 'translate-x-0 bg-[#A8B5AE]'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Option 3: Fewer Processed Ingredients */}
          <div
            id="filter-fewer-processed-card"
            onClick={() => toggleBenefit('gutSoothers')}
            className={`p-3 sm:p-4 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-2.5 sm:gap-3 group border ${
              filters.benefitGutSoothers
                ? 'bg-[#123D2A] border-[#35E27F] shadow-[0_0_16px_rgba(53,226,127,0.15)]'
                : 'bg-[#0F231B] border-[#1B3B2F] hover:border-[#265241]'
            }`}
          >
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                  filters.benefitGutSoothers
                    ? 'bg-[#35E27F] text-[#07130F] font-bold'
                    : 'bg-[#07130F] text-[#35E27F] border border-[#1B3B2F]'
                }`}
              >
                <HeartPulse className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold block leading-tight text-[#F5F7F3]">
                  Fewer Processed Ingredients
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#A8B5AE] font-medium truncate block mt-0.5">
                  Gluten &amp; dairy-free &bull; Whole foods
                </span>
              </div>
            </div>

            <div className="shrink-0 flex items-center">
              <div
                className={`w-9 sm:w-10 h-5 rounded-full transition-colors duration-200 p-0.5 flex items-center ${
                  filters.benefitGutSoothers ? 'bg-[#35E27F]' : 'bg-[#1B3B2F]'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-transform duration-200 shadow-sm ${
                    filters.benefitGutSoothers ? 'translate-x-4 sm:translate-x-5 bg-[#07130F]' : 'translate-x-0 bg-[#A8B5AE]'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 Required Filters: High Protein, Low Calorie, Low Sugar, Low Carb, High Fibre, Gluten Free, Dairy Free, Seed-Oil Free */}
        <div className="pt-1.5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
            {/* High Protein */}
            <button
              id="filter-high-protein-toggle"
              onClick={() => toggleFilter('highProtein')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.highProtein
                  ? 'bg-[#35E27F] border-[#35E27F] text-[#07130F] font-bold shadow-sm'
                  : 'bg-[#0F231B] border-[#1B3B2F] text-[#F5F7F3] hover:border-[#35E27F]/40'
              }`}
            >
              <span className="truncate">High Protein</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.highProtein ? 'bg-[#07130F]' : 'bg-[#1B3B2F]'}`} />
            </button>

            {/* Low Calorie */}
            <button
              id="filter-low-calorie-toggle"
              onClick={() => toggleFilter('lowCalorie')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.lowCalorie
                  ? 'bg-[#35E27F] border-[#35E27F] text-[#07130F] font-bold shadow-sm'
                  : 'bg-[#0F231B] border-[#1B3B2F] text-[#F5F7F3] hover:border-[#35E27F]/40'
              }`}
            >
              <span className="truncate">Low Calorie</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.lowCalorie ? 'bg-[#07130F]' : 'bg-[#1B3B2F]'}`} />
            </button>

            {/* Low Sugar */}
            <button
              id="filter-low-sugar-toggle"
              onClick={() => toggleFilter('lowSugar')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.lowSugar
                  ? 'bg-[#35E27F] border-[#35E27F] text-[#07130F] font-bold shadow-sm'
                  : 'bg-[#0F231B] border-[#1B3B2F] text-[#F5F7F3] hover:border-[#35E27F]/40'
              }`}
            >
              <span className="truncate">Low Sugar</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.lowSugar ? 'bg-[#07130F]' : 'bg-[#1B3B2F]'}`} />
            </button>

            {/* Low Carb */}
            <button
              id="filter-low-carb-toggle"
              onClick={() => toggleFilter('lowCarb')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.lowCarb
                  ? 'bg-[#35E27F] border-[#35E27F] text-[#07130F] font-bold shadow-sm'
                  : 'bg-[#0F231B] border-[#1B3B2F] text-[#F5F7F3] hover:border-[#35E27F]/40'
              }`}
            >
              <span className="truncate">Low Carb</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.lowCarb ? 'bg-[#07130F]' : 'bg-[#1B3B2F]'}`} />
            </button>

            {/* High Fibre */}
            <button
              id="filter-high-fibre-toggle"
              onClick={() => toggleFilter('highFiber')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.highFiber
                  ? 'bg-[#35E27F] border-[#35E27F] text-[#07130F] font-bold shadow-sm'
                  : 'bg-[#0F231B] border-[#1B3B2F] text-[#F5F7F3] hover:border-[#35E27F]/40'
              }`}
            >
              <span className="truncate">High Fibre</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.highFiber ? 'bg-[#07130F]' : 'bg-[#1B3B2F]'}`} />
            </button>

            {/* Gluten Free */}
            <button
              id="filter-gluten-free-toggle"
              onClick={() => toggleFilter('glutenFree')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.glutenFree
                  ? 'bg-[#35E27F] border-[#35E27F] text-[#07130F] font-bold shadow-sm'
                  : 'bg-[#0F231B] border-[#1B3B2F] text-[#F5F7F3] hover:border-[#35E27F]/40'
              }`}
            >
              <span className="truncate">Gluten Free</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.glutenFree ? 'bg-[#07130F]' : 'bg-[#1B3B2F]'}`} />
            </button>

            {/* Dairy Free */}
            <button
              id="filter-dairy-free-toggle"
              onClick={() => toggleFilter('dairyFree')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.dairyFree
                  ? 'bg-[#35E27F] border-[#35E27F] text-[#07130F] font-bold shadow-sm'
                  : 'bg-[#0F231B] border-[#1B3B2F] text-[#F5F7F3] hover:border-[#35E27F]/40'
              }`}
            >
              <span className="truncate">Dairy Free</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.dairyFree ? 'bg-[#07130F]' : 'bg-[#1B3B2F]'}`} />
            </button>

            {/* Seed-Oil Free */}
            <button
              id="filter-seed-oil-free-toggle"
              onClick={() => toggleFilter('seedOilFree')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.seedOilFree
                  ? 'bg-[#35E27F] border-[#35E27F] text-[#07130F] font-bold shadow-sm'
                  : 'bg-[#0F231B] border-[#1B3B2F] text-[#F5F7F3] hover:border-[#35E27F]/40'
              }`}
            >
              <span className="truncate">Seed-Oil Free</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.seedOilFree ? 'bg-[#07130F]' : 'bg-[#1B3B2F]'}`} />
            </button>

            {/* Vegetarian */}
            <button
              id="filter-vegetarian-toggle"
              onClick={() => toggleFilter('vegetarian')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.vegetarian
                  ? 'bg-[#35E27F] border-[#35E27F] text-[#07130F] font-bold shadow-sm'
                  : 'bg-[#0F231B] border-[#1B3B2F] text-[#F5F7F3] hover:border-[#35E27F]/40'
              }`}
            >
              <span className="truncate">Vegetarian</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.vegetarian ? 'bg-[#07130F]' : 'bg-[#1B3B2F]'}`} />
            </button>
          </div>
        </div>

        {/* Sliders for Min Protein & Max Carbs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
          <div className="p-2.5 sm:p-3 rounded-xl bg-[#0F231B] border border-[#1B3B2F] flex flex-col justify-between gap-1.5 sm:gap-2">
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold">
              <span className="text-[#F5F7F3] flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#35E27F]" />
                <span>Min Protein</span>
              </span>
              <span className="px-2 py-0.5 rounded-md bg-[#123D2A] text-[#35E27F] font-bold text-[10px] sm:text-[11px] border border-[#1B3B2F]">
                {filters.minProtein}g+
              </span>
            </div>
            <input
              id="min-protein-slider"
              suppressHydrationWarning
              type="range"
              min="0"
              max="60"
              step="5"
              value={filters.minProtein}
              onChange={(e) => onChange({ ...filters, minProtein: Number(e.target.value) })}
              className="w-full accent-[#35E27F] cursor-pointer h-1.5 bg-[#1B3B2F] rounded-lg"
            />
          </div>

          <div className="p-2.5 sm:p-3 rounded-xl bg-[#0F231B] border border-[#1B3B2F] flex flex-col justify-between gap-1.5 sm:gap-2">
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold">
              <span className="text-[#F5F7F3] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#35E27F]" />
                <span>Max Carbs</span>
              </span>
              <span className="px-2 py-0.5 rounded-md bg-[#123D2A] text-[#35E27F] font-bold text-[10px] sm:text-[11px] border border-[#1B3B2F]">
                &le; {filters.maxCarbs}g
              </span>
            </div>
            <input
              id="max-carbs-slider"
              suppressHydrationWarning
              type="range"
              min="5"
              max="50"
              step="5"
              value={filters.maxCarbs}
              onChange={(e) => onChange({ ...filters, maxCarbs: Number(e.target.value) })}
              className="w-full accent-[#35E27F] cursor-pointer h-1.5 bg-[#1B3B2F] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
