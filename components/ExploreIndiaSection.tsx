'use client';

import React from 'react';
import { ChevronRight, Sparkles, MapPin, Navigation, Loader2 } from 'lucide-react';

interface ExploreIndiaSectionProps {
  onSelectCityByName: (cityName: string) => void;
  onOpenLocationModal: () => void;
  selectedCityName: string;
  onUseMyLocation?: () => void;
  isLocating?: boolean;
}

const POPULAR_INDIAN_CITIES = [
  'Delhi',
  'Ghaziabad',
  'Noida',
  'Gurugram',
  'Mumbai',
  'Bengaluru',
  'Hyderabad',
  'Pune',
  'Chennai',
  'Ahmedabad',
  'Jaipur',
  'Kolkata',
  'Chandigarh',
] as const;

export default function ExploreIndiaSection({
  onSelectCityByName,
  onOpenLocationModal,
  selectedCityName,
  onUseMyLocation,
  isLocating = false,
}: ExploreIndiaSectionProps) {
  return (
    <section
      id="explore-india-section"
      aria-label="Explore healthy food in India"
      className="rounded-[26px] bg-[#FFFFFF] border border-[#E8DEC8] p-3.5 sm:p-4.5 shadow-xs relative overflow-hidden transition-all"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 pb-2.5 border-b border-[#E8DEC8]">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-base sm:text-lg shrink-0">🇮🇳</span>
          <div className="min-w-0">
            <h2 className="text-xs sm:text-sm font-serif font-bold text-[#231815] flex items-center gap-1.5 truncate">
              <span>Explore healthy food in India</span>
              <span className="hidden md:inline-flex px-2 py-0.5 rounded-full bg-[#EBF4ED] text-[#2D5A34] text-[10px] font-bold border border-[#C5DEC9]">
                Zero Seed Oils &bull; High Protein
              </span>
            </h2>
            <p className="text-[10px] sm:text-[11px] text-[#6B5E55] font-medium truncate">
              Discover verified clean, high-protein &amp; seed-oil-free dining across 31 Indian cities
            </p>
          </div>
        </div>

        {/* Action Controls: Use My Location & View All Cities */}
        <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
          {onUseMyLocation && (
            <button
              id="explore-india-near-me-btn"
              onClick={onUseMyLocation}
              disabled={isLocating}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#FAF6EE] hover:bg-[#F3DFC1] text-[#C86A1D] text-xs font-bold border border-[#E8DEC8] hover:border-[#C86A1D]/50 transition-all cursor-pointer active:scale-95 disabled:opacity-60 shadow-xs"
              title="Detect my location automatically"
            >
              {isLocating ? (
                <Loader2 className="w-3 h-3 animate-spin text-[#C86A1D]" />
              ) : (
                <Navigation className="w-3 h-3 text-[#C86A1D]" />
              )}
              <span>Near me</span>
            </button>
          )}

          <button
            id="view-more-indian-cities-cta"
            onClick={onOpenLocationModal}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#C86A1D] hover:text-[#A84F0C] hover:underline cursor-pointer transition-colors"
          >
            <span>All cities</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Popular Cities Row */}
      <div className="pt-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-0.5">
        <span className="text-[11px] font-bold text-[#6B5E55] shrink-0 uppercase tracking-wider hidden sm:inline">
          Popular:
        </span>
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap sm:flex-nowrap">
          {POPULAR_INDIAN_CITIES.map((city, idx) => {
            const isSelected = selectedCityName.toLowerCase() === city.toLowerCase();
            return (
              <React.Fragment key={city}>
                <button
                  id={`quick-india-city-${city.toLowerCase()}`}
                  onClick={() => onSelectCityByName(city)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer whitespace-nowrap active:scale-95 border ${
                    isSelected
                      ? 'bg-[#C86A1D] text-white font-bold border-[#C86A1D] shadow-xs'
                      : 'bg-[#FAF6EE] text-[#231815] hover:text-[#C86A1D] border-[#E8DEC8] hover:border-[#C86A1D]/40 hover:bg-[#FFF7ED]'
                  }`}
                >
                  {city}
                </button>
                {idx < POPULAR_INDIAN_CITIES.length - 1 && (
                  <span className="text-[#E8DEC8] text-xs select-none sm:inline hidden">
                    &bull;
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
