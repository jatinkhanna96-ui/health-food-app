'use client';

import React, { useRef } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import {
  getCravingCategoriesForCountry,
  getCravingById,
  CravingCategory,
} from '@/lib/cravingCategories';

interface CravingDiscoveryRowProps {
  selectedCraving: string | null;
  onSelectCraving: (cravingId: string) => void;
  onClearCraving?: () => void;
  country: 'US' | 'IN';
  matchingCount?: number;
}

export default function CravingDiscoveryRow({
  selectedCraving,
  onSelectCraving,
  onClearCraving,
  country,
  matchingCount,
}: CravingDiscoveryRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const categories = getCravingCategoriesForCountry(country);
  const activeCategory = selectedCraving ? getCravingById(selectedCraving) : undefined;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full space-y-2.5 bg-white border border-[#E8DEC8] p-3.5 sm:p-4 rounded-[24px] shadow-[0_4px_20px_-4px_rgba(140,100,50,0.06)]">
      {/* Header Row: Title & Navigation Controls */}
      <div className="flex items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#FAF0DC] border border-[#E8DEC8] flex items-center justify-center text-[#C86A1D]">
            <Flame className="w-4 h-4 fill-[#C86A1D]" />
          </div>
          <div>
            <h3 className="font-serif font-black text-sm sm:text-base text-[#231815] tracking-tight leading-none">
              What are you craving?
            </h3>
            <p className="text-[10px] sm:text-[11px] text-[#6B5E55] font-medium mt-0.5">
              Pick your craving to discover clean, seed-oil-free &amp; high-protein versions
            </p>
          </div>
        </div>

        {/* Scroll Arrows on Desktop */}
        <div className="hidden sm:flex items-center gap-1 shrink-0">
          <button
            onClick={() => scroll('left')}
            className="w-7 h-7 rounded-full bg-[#FAF6EE] hover:bg-[#F3EAD7] border border-[#E8DEC8] text-[#231815] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-7 h-7 rounded-full bg-[#FAF6EE] hover:bg-[#F3EAD7] border border-[#E8DEC8] text-[#231815] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Horizontally Scrollable Category Chips/Cards (Swiggy / Zomato style) */}
      <div
        ref={scrollRef}
        className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1.5 pt-0.5 px-0.5 scrollbar-none snap-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* 'All' Reset Chip */}
        <button
          onClick={() => onClearCraving?.()}
          className={`snap-start flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
            !selectedCraving
              ? 'bg-[#231815] text-white shadow-xs scale-102 ring-2 ring-[#231815]/20'
              : 'bg-[#FAF6EE] text-[#6B5E55] hover:text-[#231815] hover:bg-[#F4ECE0] border border-[#E8DEC8]'
          }`}
        >
          <span className="text-sm">🍽️</span>
          <span>All Cravings</span>
        </button>

        {/* Category Chips */}
        {categories.map((cat) => {
          const isSelected = selectedCraving === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCraving(cat.id)}
              className={`snap-start group relative flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                isSelected
                  ? 'bg-[#C86A1D] text-white shadow-sm scale-102 ring-2 ring-[#C86A1D]/25'
                  : 'bg-[#FAF6EE] text-[#231815] hover:bg-[#F4ECE0] hover:border-[#C86A1D]/40 border border-[#E8DEC8]'
              }`}
            >
              <span className="text-base group-hover:scale-110 transition-transform">{cat.emoji}</span>
              <span>{cat.label}</span>
              {isSelected && matchingCount !== undefined && (
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-black">
                  {matchingCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Craving Transformation Banner (e.g. Burgers -> Better Burgers) */}
      {activeCategory && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 sm:p-3 rounded-2xl bg-[#FAF0DC] border border-[#E8DEC8] shadow-2xs animate-fadeIn">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xl shrink-0">{activeCategory.emoji}</span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C86A1D] bg-white/80 px-2 py-0.2 rounded-md border border-[#E8DEC8]">
                  Craving: {activeCategory.label}
                </span>
                <span className="text-xs font-black text-[#231815]">
                  &rarr; {activeCategory.betterLabel}
                </span>
              </div>
              <p className="text-[11px] text-[#6B5E55] font-medium truncate mt-0.5">
                {activeCategory.betterSubtext}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
            {matchingCount !== undefined && (
              <span className="text-xs font-extrabold text-[#2D5A34] bg-white px-2.5 py-1 rounded-xl border border-[#CDE5D0]">
                {matchingCount} {matchingCount === 1 ? 'option' : 'options'}
              </span>
            )}
            <button
              onClick={() => onClearCraving?.()}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white hover:bg-[#F7EFE4] text-[#C86A1D] text-xs font-bold border border-[#E8DEC8] transition-all cursor-pointer active:scale-95"
              title="Clear craving filter"
            >
              <span>Clear</span>
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
