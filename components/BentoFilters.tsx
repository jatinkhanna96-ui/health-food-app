'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
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

function BentoFilters({
  filters,
  onChange,
  onReset,
  totalDishesCount,
  filteredCount,
}: BentoFiltersProps) {
  // Local state for 0ms immediate input responsiveness with debounced propagation
  const [localSearch, setLocalSearch] = useState(filters.search);
  const [localProtein, setLocalProtein] = useState(filters.minProtein);
  const [localCarbs, setLocalCarbs] = useState(filters.maxCarbs);

  useEffect(() => {
    setLocalSearch(filters.search);
  }, [filters.search]);

  useEffect(() => {
    setLocalProtein(filters.minProtein);
  }, [filters.minProtein]);

  useEffect(() => {
    setLocalCarbs(filters.maxCarbs);
  }, [filters.maxCarbs]);

  // Debounced search commit (160ms) - typing feels buttery smooth without re-render lag
  useEffect(() => {
    const handler = setTimeout(() => {
      if (localSearch !== filters.search) {
        onChange({ ...filters, search: localSearch });
      }
    }, 160);
    return () => clearTimeout(handler);
  }, [localSearch, filters, onChange]);

  // Debounced slider commit (100ms) - smooth 60fps dragging
  useEffect(() => {
    const handler = setTimeout(() => {
      if (localProtein !== filters.minProtein) {
        onChange({ ...filters, minProtein: localProtein });
      }
    }, 100);
    return () => clearTimeout(handler);
  }, [localProtein, filters, onChange]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (localCarbs !== filters.maxCarbs) {
        onChange({ ...filters, maxCarbs: localCarbs });
      }
    }, 100);
    return () => clearTimeout(handler);
  }, [localCarbs, filters, onChange]);

  const handleClearSearch = useCallback(() => {
    setLocalSearch('');
    onChange({ ...filters, search: '' });
  }, [filters, onChange]);

  const handleExampleSearch = useCallback(
    (example: string) => {
      setLocalSearch(example);
      onChange({ ...filters, search: example });
    },
    [filters, onChange]
  );

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
    <div className="space-y-3.5 sm:space-y-5 bg-white border border-[#E8DEC8] text-[#231815] p-3.5 sm:p-6 rounded-[26px] shadow-[0_4px_20px_-4px_rgba(140,100,50,0.06)]">
      {/* ===================================================================== */}
      {/* 1. SEARCH SECTION (Section 2)                                         */}
      {/* ===================================================================== */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="dish-search-input"
            className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#C86A1D] uppercase block"
          >
            WHAT ARE YOU LOOKING FOR?
          </label>
          <span className="text-xs text-[#6B5E55] font-medium hidden sm:inline">
            {filteredCount} matching {filteredCount === 1 ? 'dish' : 'dishes'}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-[#C86A1D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="dish-search-input"
              suppressHydrationWarning
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder='Try "high-protein lunch near me"'
              className="w-full pl-10 pr-4 py-2 sm:py-3 rounded-xl bg-[#FAF6EE] border border-[#E8DEC8] text-xs font-semibold text-[#231815] placeholder:text-[#9E9084] focus:outline-none focus:border-[#C86A1D] focus:bg-white transition-all duration-200"
            />
            {localSearch && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9E9084] hover:text-[#231815] text-xs font-bold"
              >
                &times;
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end shrink-0">
            <div className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#FAF6EE] border border-[#E8DEC8] text-[11px] sm:text-xs font-medium text-[#6B5E55] whitespace-nowrap flex items-center gap-1.5 sm:gap-2">
              <span>Nearby:</span>
              <strong className="text-[#2D5A34] font-bold">{filteredCount}</strong>
              <span className="text-[#E8DEC8]">&bull;</span>
              <span className="text-[#231815] font-semibold">{totalDishesCount} in City</span>
            </div>
            {hasActiveFilters && (
              <button
                id="reset-filters-btn"
                onClick={onReset}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-[#FAF6EE] hover:bg-[#F7F1E5] text-[#6B5E55] hover:text-[#C86A1D] text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer border border-[#E8DEC8] active:scale-95 shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#C86A1D]" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Supporting microcopy */}
        <p className="text-[11px] sm:text-xs text-[#6B5E55] font-normal">
          Search by dish, diet, nutrition goal or ingredient.
        </p>

        {/* Quick Example Search Pills - Horizontal scrolling on mobile */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none flex-nowrap sm:flex-wrap -mx-1 px-1">
          <span className="text-[10px] font-semibold text-[#6B5E55] uppercase tracking-wider mr-0.5 shrink-0">
            Try:
          </span>
          {QUICK_SEARCH_EXAMPLES.map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => handleExampleSearch(example)}
              className={`text-[10px] sm:text-[11px] px-2.5 py-1 rounded-lg border transition-all duration-150 cursor-pointer shrink-0 whitespace-nowrap ${
                localSearch.toLowerCase() === example.toLowerCase()
                  ? 'bg-[#C86A1D] text-white font-bold border-[#C86A1D]'
                  : 'bg-[#FAF6EE] text-[#6B5E55] hover:text-[#231815] border-[#E8DEC8] hover:border-[#D4C3A3]'
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
      <div className="space-y-3 pt-2 border-t border-[#E8DEC8]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[#231815] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C86A1D]" />
            <span>WHAT FITS YOU TODAY?</span>
          </span>
          <span className="text-[10px] text-[#C86A1D] font-bold uppercase tracking-wider">
            WHOLESOME CHOICES
          </span>
        </div>

        {/* 3 Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
          {/* Option 1: More Protein */}
          <div
            id="filter-more-protein-card"
            onClick={() => toggleBenefit('postWorkout')}
            className={`p-3 sm:p-4 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-2.5 sm:gap-3 group border ${
              filters.benefitPostWorkout
                ? 'bg-[#EBF4ED] border-2 border-[#2D5A34] shadow-[0_4px_16px_rgba(45,90,52,0.12)]'
                : 'bg-[#FAF6EE] border border-[#E8DEC8] hover:border-[#D4C3A3]'
            }`}
          >
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                  filters.benefitPostWorkout
                    ? 'bg-[#2D5A34] text-white font-bold'
                    : 'bg-white text-[#C86A1D] border border-[#E8DEC8]'
                }`}
              >
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold block leading-tight text-[#231815]">
                  More Protein
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#6B5E55] font-medium truncate block mt-0.5">
                  40g+ protein &bull; Great for recovery
                </span>
              </div>
            </div>

            <div className="shrink-0 flex items-center">
              <div
                className={`w-9 sm:w-10 h-5 rounded-full transition-colors duration-200 p-0.5 flex items-center ${
                  filters.benefitPostWorkout ? 'bg-[#2D5A34]' : 'bg-[#E8DEC8]'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-transform duration-200 shadow-sm ${
                    filters.benefitPostWorkout ? 'translate-x-4 sm:translate-x-5 bg-white' : 'translate-x-0 bg-[#9E9084]'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Option 2: Less Carbs & Sugar */}
          <div
            id="filter-less-carbs-card"
            onClick={() => toggleBenefit('brainFuel')}
            className={`p-3 sm:p-4 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-2.5 sm:gap-3 group border ${
              filters.benefitBrainFuel
                ? 'bg-[#EBF4ED] border-2 border-[#2D5A34] shadow-[0_4px_16px_rgba(45,90,52,0.12)]'
                : 'bg-[#FAF6EE] border border-[#E8DEC8] hover:border-[#D4C3A3]'
            }`}
          >
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                  filters.benefitBrainFuel
                    ? 'bg-[#2D5A34] text-white font-bold'
                    : 'bg-white text-[#C86A1D] border border-[#E8DEC8]'
                }`}
              >
                <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold block leading-tight text-[#231815]">
                  Less Carbs &amp; Sugar
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#6B5E55] font-medium truncate block mt-0.5">
                  Lower carbs &bull; Low added sugar
                </span>
              </div>
            </div>

            <div className="shrink-0 flex items-center">
              <div
                className={`w-9 sm:w-10 h-5 rounded-full transition-colors duration-200 p-0.5 flex items-center ${
                  filters.benefitBrainFuel ? 'bg-[#2D5A34]' : 'bg-[#E8DEC8]'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-transform duration-200 shadow-sm ${
                    filters.benefitBrainFuel ? 'translate-x-4 sm:translate-x-5 bg-white' : 'translate-x-0 bg-[#9E9084]'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Option 3: Fewer Processed Ingredients */}
          <div
            id="filter-fewer-processed-card"
            onClick={() => toggleBenefit('gutSoothers')}
            className={`p-3 sm:p-4 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-2.5 sm:gap-3 group border ${
              filters.benefitGutSoothers
                ? 'bg-[#EBF4ED] border-2 border-[#2D5A34] shadow-[0_4px_16px_rgba(45,90,52,0.12)]'
                : 'bg-[#FAF6EE] border border-[#E8DEC8] hover:border-[#D4C3A3]'
            }`}
          >
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                  filters.benefitGutSoothers
                    ? 'bg-[#2D5A34] text-white font-bold'
                    : 'bg-white text-[#C86A1D] border border-[#E8DEC8]'
                }`}
              >
                <HeartPulse className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold block leading-tight text-[#231815]">
                  Fewer Processed Ingredients
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#6B5E55] font-medium truncate block mt-0.5">
                  Gluten &amp; dairy-free &bull; Whole foods
                </span>
              </div>
            </div>

            <div className="shrink-0 flex items-center">
              <div
                className={`w-9 sm:w-10 h-5 rounded-full transition-colors duration-200 p-0.5 flex items-center ${
                  filters.benefitGutSoothers ? 'bg-[#2D5A34]' : 'bg-[#E8DEC8]'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-transform duration-200 shadow-sm ${
                    filters.benefitGutSoothers ? 'translate-x-4 sm:translate-x-5 bg-white' : 'translate-x-0 bg-[#9E9084]'
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
                  ? 'bg-[#2D5A34] border-[#2D5A34] text-white font-bold shadow-sm'
                  : 'bg-[#FAF6EE] border-[#E8DEC8] text-[#231815] hover:border-[#C86A1D]/50'
              }`}
            >
              <span className="truncate">High Protein</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.highProtein ? 'bg-white' : 'bg-[#E8DEC8]'}`} />
            </button>

            {/* Low Calorie */}
            <button
              id="filter-low-calorie-toggle"
              onClick={() => toggleFilter('lowCalorie')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.lowCalorie
                  ? 'bg-[#2D5A34] border-[#2D5A34] text-white font-bold shadow-sm'
                  : 'bg-[#FAF6EE] border-[#E8DEC8] text-[#231815] hover:border-[#C86A1D]/50'
              }`}
            >
              <span className="truncate">Low Calorie</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.lowCalorie ? 'bg-white' : 'bg-[#E8DEC8]'}`} />
            </button>

            {/* Low Sugar */}
            <button
              id="filter-low-sugar-toggle"
              onClick={() => toggleFilter('lowSugar')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.lowSugar
                  ? 'bg-[#2D5A34] border-[#2D5A34] text-white font-bold shadow-sm'
                  : 'bg-[#FAF6EE] border-[#E8DEC8] text-[#231815] hover:border-[#C86A1D]/50'
              }`}
            >
              <span className="truncate">Low Sugar</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.lowSugar ? 'bg-white' : 'bg-[#E8DEC8]'}`} />
            </button>

            {/* Low Carb */}
            <button
              id="filter-low-carb-toggle"
              onClick={() => toggleFilter('lowCarb')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.lowCarb
                  ? 'bg-[#2D5A34] border-[#2D5A34] text-white font-bold shadow-sm'
                  : 'bg-[#FAF6EE] border-[#E8DEC8] text-[#231815] hover:border-[#C86A1D]/50'
              }`}
            >
              <span className="truncate">Low Carb</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.lowCarb ? 'bg-white' : 'bg-[#E8DEC8]'}`} />
            </button>

            {/* High Fibre */}
            <button
              id="filter-high-fibre-toggle"
              onClick={() => toggleFilter('highFiber')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.highFiber
                  ? 'bg-[#2D5A34] border-[#2D5A34] text-white font-bold shadow-sm'
                  : 'bg-[#FAF6EE] border-[#E8DEC8] text-[#231815] hover:border-[#C86A1D]/50'
              }`}
            >
              <span className="truncate">High Fibre</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.highFiber ? 'bg-white' : 'bg-[#E8DEC8]'}`} />
            </button>

            {/* Gluten Free */}
            <button
              id="filter-gluten-free-toggle"
              onClick={() => toggleFilter('glutenFree')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.glutenFree
                  ? 'bg-[#2D5A34] border-[#2D5A34] text-white font-bold shadow-sm'
                  : 'bg-[#FAF6EE] border-[#E8DEC8] text-[#231815] hover:border-[#C86A1D]/50'
              }`}
            >
              <span className="truncate">Gluten Free</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.glutenFree ? 'bg-white' : 'bg-[#E8DEC8]'}`} />
            </button>

            {/* Dairy Free */}
            <button
              id="filter-dairy-free-toggle"
              onClick={() => toggleFilter('dairyFree')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.dairyFree
                  ? 'bg-[#2D5A34] border-[#2D5A34] text-white font-bold shadow-sm'
                  : 'bg-[#FAF6EE] border-[#E8DEC8] text-[#231815] hover:border-[#C86A1D]/50'
              }`}
            >
              <span className="truncate">Dairy Free</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.dairyFree ? 'bg-white' : 'bg-[#E8DEC8]'}`} />
            </button>

            {/* Seed-Oil Free */}
            <button
              id="filter-seed-oil-free-toggle"
              onClick={() => toggleFilter('seedOilFree')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.seedOilFree
                  ? 'bg-[#2D5A34] border-[#2D5A34] text-white font-bold shadow-sm'
                  : 'bg-[#FAF6EE] border-[#E8DEC8] text-[#231815] hover:border-[#C86A1D]/50'
              }`}
            >
              <span className="truncate">Seed-Oil Free</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.seedOilFree ? 'bg-white' : 'bg-[#E8DEC8]'}`} />
            </button>

            {/* Vegetarian */}
            <button
              id="filter-vegetarian-toggle"
              onClick={() => toggleFilter('vegetarian')}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 flex items-center justify-between text-[11px] sm:text-xs cursor-pointer ${
                filters.vegetarian
                  ? 'bg-[#2D5A34] border-[#2D5A34] text-white font-bold shadow-sm'
                  : 'bg-[#FAF6EE] border-[#E8DEC8] text-[#231815] hover:border-[#C86A1D]/50'
              }`}
            >
              <span className="truncate">Vegetarian</span>
              <span className={`w-1.5 h-1.5 rounded-full ${filters.vegetarian ? 'bg-white' : 'bg-[#E8DEC8]'}`} />
            </button>
          </div>
        </div>

        {/* Sliders for Min Protein & Max Carbs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
          <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#E8DEC8] flex flex-col justify-between gap-1.5 sm:gap-2">
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold">
              <span className="text-[#231815] flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#C86A1D]" />
                <span>Min Protein</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-[#EBF4ED] text-[#2D5A34] font-bold text-[10px] sm:text-[11px] border border-[#D5E8D8]">
                {localProtein}g+
              </span>
            </div>
            <input
              id="min-protein-slider"
              suppressHydrationWarning
              type="range"
              min="0"
              max="60"
              step="5"
              value={localProtein}
              onChange={(e) => setLocalProtein(Number(e.target.value))}
              className="w-full accent-[#C86A1D] cursor-pointer h-2 bg-[#E8DEC8] rounded-lg"
            />
          </div>

          <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#E8DEC8] flex flex-col justify-between gap-1.5 sm:gap-2">
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold">
              <span className="text-[#231815] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C86A1D]" />
                <span>Max Carbs</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-[#FDF5D9] text-[#8C5D0D] font-bold text-[10px] sm:text-[11px] border border-[#F4E3A8]">
                &le; {localCarbs}g
              </span>
            </div>
            <input
              id="max-carbs-slider"
              suppressHydrationWarning
              type="range"
              min="5"
              max="50"
              step="5"
              value={localCarbs}
              onChange={(e) => setLocalCarbs(Number(e.target.value))}
              className="w-full accent-[#C86A1D] cursor-pointer h-2 bg-[#E8DEC8] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(BentoFilters);
