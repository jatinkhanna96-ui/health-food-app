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
  Beef,
  WheatOff,
  MilkOff,
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

export default function BentoFilters({
  filters,
  onChange,
  onReset,
  totalDishesCount,
  filteredCount,
}: BentoFiltersProps) {
  // Toggle the 3 primary functional benefit switches
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
        keto: next,
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

  const toggleVeto = (key: keyof FilterState) => {
    onChange({
      ...filters,
      [key]: !filters[key],
    });
  };

  const hasActiveFilters =
    filters.benefitPostWorkout ||
    filters.benefitBrainFuel ||
    filters.benefitGutSoothers ||
    filters.grassFed ||
    filters.glutenFree ||
    filters.keto ||
    filters.dairyFree ||
    filters.minProtein > 0 ||
    filters.maxCarbs < 50 ||
    filters.search.trim().length > 0;

  return (
    <div className="space-y-4 bg-white/5 backdrop-blur-md border border-white/10 text-zinc-100 p-4 sm:p-6 rounded-3xl shadow-2xl">
      {/* Top Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="dish-search-input"
            suppressHydrationWarning
            type="text"
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            placeholder="Search verified clean meals, pasture ribeye, smoked brisket, wild salmon..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-950/80 border border-white/10 text-xs font-semibold text-white placeholder:text-zinc-500 focus:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/60 transition-all duration-300 shadow-inner"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end shrink-0">
          <div className="px-3.5 py-2 rounded-xl bg-zinc-900/80 border border-white/10 text-xs font-semibold text-zinc-400 whitespace-nowrap flex items-center gap-2">
            <span>Safe Oasis:</span>
            <strong className="text-emerald-400 font-black">{filteredCount}</strong>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-300 font-bold">{totalDishesCount} Vetted</span>
          </div>
          {hasActiveFilters && (
            <button
              id="reset-filters-btn"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-bold transition-all duration-300 cursor-pointer border border-white/10 hover:border-emerald-500/40 shadow-xs active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Benefit-Driven Filter Switches (Post-Workout Fuel, Brain Fuel, Gut Soothers) */}
      <div>
        <div className="flex items-center justify-between pb-2">
          <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Functional Benefit Filters (Active Health Outcomes)</span>
          </span>
          <span className="text-[10px] text-zinc-500 font-semibold hidden sm:inline">
            Tap to toggle bio-individual metabolic modes
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Benefit 1: Post-Workout Fuel */}
          <div
            id="filter-post-workout-toggle"
            onClick={() => toggleBenefit('postWorkout')}
            className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 group border hover:scale-[1.02] ${
              filters.benefitPostWorkout
                ? 'bg-emerald-500/10 border-emerald-500/70 shadow-[0_0_24px_rgba(16,185,129,0.25)] ring-1 ring-emerald-500/40'
                : 'bg-zinc-950/60 border-white/10 hover:border-white/20 hover:bg-zinc-900/60'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all shrink-0 ${
                  filters.benefitPostWorkout
                    ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.6)] font-black'
                    : 'bg-white/5 text-emerald-400 border border-white/10 group-hover:scale-105'
                }`}
              >
                <Zap className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span
                  className={`text-sm font-black block leading-tight ${
                    filters.benefitPostWorkout ? 'text-white' : 'text-zinc-200'
                  }`}
                >
                  Post-Workout Fuel
                </span>
                <span className="text-[11px] text-zinc-400 font-medium truncate block mt-0.5">
                  40g+ Muscle Protein &bull; Fast Recovery
                </span>
              </div>
            </div>

            {/* Premium Toggle Switch */}
            <div className="shrink-0 flex items-center">
              <div
                className={`w-11 h-6 rounded-full transition-colors duration-300 p-0.5 flex items-center ${
                  filters.benefitPostWorkout
                    ? 'bg-emerald-500/40 border border-emerald-400'
                    : 'bg-zinc-800 border border-zinc-700'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-transform duration-300 shadow-md ${
                    filters.benefitPostWorkout
                      ? 'translate-x-5 bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]'
                      : 'translate-x-0.5 bg-zinc-500'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Benefit 2: Brain Fuel */}
          <div
            id="filter-brain-fuel-toggle"
            onClick={() => toggleBenefit('brainFuel')}
            className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 group border hover:scale-[1.02] ${
              filters.benefitBrainFuel
                ? 'bg-emerald-500/10 border-emerald-500/70 shadow-[0_0_24px_rgba(16,185,129,0.25)] ring-1 ring-emerald-500/40'
                : 'bg-zinc-950/60 border-white/10 hover:border-white/20 hover:bg-zinc-900/60'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all shrink-0 ${
                  filters.benefitBrainFuel
                    ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.6)] font-black'
                    : 'bg-white/5 text-emerald-400 border border-white/10 group-hover:scale-105'
                }`}
              >
                <Brain className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span
                  className={`text-sm font-black block leading-tight ${
                    filters.benefitBrainFuel ? 'text-white' : 'text-zinc-200'
                  }`}
                >
                  Brain Fuel
                </span>
                <span className="text-[11px] text-zinc-400 font-medium truncate block mt-0.5">
                  Ketogenic Fats &bull; Zero Fog &bull; Low Glycemic
                </span>
              </div>
            </div>

            {/* Premium Toggle Switch */}
            <div className="shrink-0 flex items-center">
              <div
                className={`w-11 h-6 rounded-full transition-colors duration-300 p-0.5 flex items-center ${
                  filters.benefitBrainFuel
                    ? 'bg-emerald-500/40 border border-emerald-400'
                    : 'bg-zinc-800 border border-zinc-700'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-transform duration-300 shadow-md ${
                    filters.benefitBrainFuel
                      ? 'translate-x-5 bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]'
                      : 'translate-x-0.5 bg-zinc-500'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Benefit 3: Gut Soothers */}
          <div
            id="filter-gut-soothers-toggle"
            onClick={() => toggleBenefit('gutSoothers')}
            className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 group border hover:scale-[1.02] ${
              filters.benefitGutSoothers
                ? 'bg-emerald-500/10 border-emerald-500/70 shadow-[0_0_24px_rgba(16,185,129,0.25)] ring-1 ring-emerald-500/40'
                : 'bg-zinc-950/60 border-white/10 hover:border-white/20 hover:bg-zinc-900/60'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all shrink-0 ${
                  filters.benefitGutSoothers
                    ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.6)] font-black'
                    : 'bg-white/5 text-emerald-400 border border-white/10 group-hover:scale-105'
                }`}
              >
                <HeartPulse className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span
                  className={`text-sm font-black block leading-tight ${
                    filters.benefitGutSoothers ? 'text-white' : 'text-zinc-200'
                  }`}
                >
                  Gut Soothers
                </span>
                <span className="text-[11px] text-zinc-400 font-medium truncate block mt-0.5">
                  Gluten &amp; Dairy-Free &bull; Pure Digestion
                </span>
              </div>
            </div>

            {/* Premium Toggle Switch */}
            <div className="shrink-0 flex items-center">
              <div
                className={`w-11 h-6 rounded-full transition-colors duration-300 p-0.5 flex items-center ${
                  filters.benefitGutSoothers
                    ? 'bg-emerald-500/40 border border-emerald-400'
                    : 'bg-zinc-800 border border-zinc-700'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-transform duration-300 shadow-md ${
                    filters.benefitGutSoothers
                      ? 'translate-x-5 bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]'
                      : 'translate-x-0.5 bg-zinc-500'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Clean Veto Switches & Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
        {/* Seed-Oil Free Veto */}
        <button
          id="filter-seed-oil-free-toggle"
          onClick={() => toggleVeto('seedOilFree')}
          className={`px-3 py-2.5 rounded-xl border transition-all duration-300 flex items-center justify-between text-xs font-bold cursor-pointer hover:scale-[1.02] ${
            filters.seedOilFree
              ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
              : 'bg-zinc-950/60 border-white/10 text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Seed-Oil Free</span>
          </span>
          <span className={`w-2 h-2 rounded-full ${filters.seedOilFree ? 'bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'bg-zinc-600'}`} />
        </button>

        {/* 100% Grass-Fed */}
        <button
          id="filter-grass-fed-toggle"
          onClick={() => toggleVeto('grassFed')}
          className={`px-3 py-2.5 rounded-xl border transition-all duration-300 flex items-center justify-between text-xs font-bold cursor-pointer hover:scale-[1.02] ${
            filters.grassFed
              ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
              : 'bg-zinc-950/60 border-white/10 text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <span className="flex items-center gap-2">
            <Beef className="w-4 h-4 text-emerald-400" />
            <span>100% Grass-Fed</span>
          </span>
          <span className={`w-2 h-2 rounded-full ${filters.grassFed ? 'bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'bg-zinc-600'}`} />
        </button>

        {/* Gluten-Free */}
        <button
          id="filter-gluten-free-toggle"
          onClick={() => toggleVeto('glutenFree')}
          className={`px-3 py-2.5 rounded-xl border transition-all duration-300 flex items-center justify-between text-xs font-bold cursor-pointer hover:scale-[1.02] ${
            filters.glutenFree
              ? 'bg-amber-950/50 border-amber-500/60 text-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.2)]'
              : 'bg-zinc-950/60 border-white/10 text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <span className="flex items-center gap-2">
            <WheatOff className="w-4 h-4 text-amber-400" />
            <span>Strict Celiac Safe</span>
          </span>
          <span className={`w-2 h-2 rounded-full ${filters.glutenFree ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'bg-zinc-600'}`} />
        </button>

        {/* Dairy-Free */}
        <button
          id="filter-dairy-free-toggle"
          onClick={() => toggleVeto('dairyFree')}
          className={`px-3 py-2.5 rounded-xl border transition-all duration-300 flex items-center justify-between text-xs font-bold cursor-pointer hover:scale-[1.02] ${
            filters.dairyFree
              ? 'bg-zinc-900 border-emerald-500/50 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
              : 'bg-zinc-950/60 border-white/10 text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <span className="flex items-center gap-2">
            <MilkOff className="w-4 h-4 text-zinc-300" />
            <span>Dairy-Free / A2</span>
          </span>
          <span className={`w-2 h-2 rounded-full ${filters.dairyFree ? 'bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'bg-zinc-600'}`} />
        </button>
      </div>

      {/* Tactile Biohacker Sliders for Min Protein & Max Carbs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 flex flex-col justify-between gap-2.5 shadow-inner">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-zinc-300 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-emerald-400" />
              <span>Min Muscle Protein</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-black border border-emerald-500/30">
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
            className="w-full accent-emerald-500 cursor-pointer h-2 bg-zinc-800 rounded-lg"
          />
        </div>

        <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 flex flex-col justify-between gap-2.5 shadow-inner">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-zinc-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Max Net Glycemic Carbs</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 font-black border border-amber-500/30">
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
            className="w-full accent-amber-500 cursor-pointer h-2 bg-zinc-800 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
