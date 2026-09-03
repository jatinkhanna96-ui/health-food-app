'use client';

import React, { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { INITIAL_DISHES, CITY_LOCATIONS, ALL_CITIES_LOCATION, Dish, CityLocation } from '@/lib/mockData';
import DishCard from '@/components/DishCard';
import DishDetailModal from '@/components/DishDetailModal';
import MenuScannerModal from '@/components/MenuScannerModal';
import BentoFilters, { FilterState } from '@/components/BentoFilters';
import CreatorFeed from '@/components/CreatorFeed';
import CategoryCarousel from '@/components/CategoryCarousel';
import HeroPromoBanner from '@/components/HeroPromoBanner';
import {
  Compass,
  MapPin,
  ScanLine,
  Flame,
  ChevronDown,
  List,
  Map as MapIcon,
  Beef,
  ShieldCheck,
} from 'lucide-react';

// Dynamically import InteractiveMap with SSR disabled to prevent Leaflet/browser canvas errors
const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-stone-100 text-stone-500 gap-2">
      <div className="w-6 h-6 border-2 border-[#C8102E] border-t-transparent rounded-full animate-spin"></div>
      <span className="text-xs font-mono font-medium">Loading Map Zones...</span>
    </div>
  ),
});

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);
  // 1. Mobile UX State: Toggle between full-screen 'list' and 'map' on mobile screens (< lg)
  const [mobileView, setMobileView] = useState<'map' | 'list'>('list');

  const [dishes, setDishes] = useState<Dish[]>(INITIAL_DISHES);
  const [selectedCity, setSelectedCity] = useState<CityLocation>(CITY_LOCATIONS[0]);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(INITIAL_DISHES[0]);
  const [detailDish, setDetailDish] = useState<Dish | null>(null);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Suppress benign browser-level ResizeObserver notifications
  useEffect(() => {
    const handleWindowError = (e: ErrorEvent) => {
      if (
        e.message?.includes('ResizeObserver loop completed with undelivered notifications') ||
        e.message?.includes('ResizeObserver loop limit exceeded') ||
        e.message?.includes('ResizeObserver loop')
      ) {
        e.stopImmediatePropagation();
        e.preventDefault();
      }
    };
    const handleUnhandledRejection = (e: PromiseRejectionEvent) => {
      if (e.reason?.message?.includes('ResizeObserver')) {
        e.preventDefault();
      }
    };
    window.addEventListener('error', handleWindowError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    return () => {
      window.removeEventListener('error', handleWindowError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  const [filters, setFilters] = useState<FilterState>({
    search: '',
    seedOilFree: true,
    grassFed: false,
    glutenFree: false,
    keto: false,
    dairyFree: false,
    minProtein: 0,
    maxCarbs: 50,
  });

  const handleCityChange = (city: CityLocation) => {
    setSelectedCity(city);
    const cityDishes =
      city.name === 'All Locations' ? dishes : dishes.filter((d) => d.city === city.name);
    if (cityDishes.length > 0) {
      setSelectedDish(cityDishes[0]);
    }
  };

  const handleCityNameChange = (cityName: string) => {
    if (cityName === 'All Locations') {
      handleCityChange(ALL_CITIES_LOCATION);
      return;
    }
    const found = CITY_LOCATIONS.find((c) => c.name === cityName);
    if (found) {
      handleCityChange(found);
    }
  };

  const cityDishCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const c of CITY_LOCATIONS) {
      counts[c.name] = dishes.filter((d) => d.city === c.name).length;
    }
    return counts;
  }, [dishes]);

  const resetFilters = () => {
    setActiveCategory('all');
    setFilters({
      search: '',
      seedOilFree: false,
      grassFed: false,
      glutenFree: false,
      keto: false,
      dairyFree: false,
      minProtein: 0,
      maxCarbs: 50,
    });
  };

  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      setFilters((prev) => ({ ...prev, search: '', seedOilFree: false, grassFed: false, keto: false }));
    } else if (catId === 'beef') {
      setFilters((prev) => ({ ...prev, search: 'beef', grassFed: true }));
    } else if (catId === 'seed-oil-free') {
      setFilters((prev) => ({ ...prev, seedOilFree: true }));
    } else if (catId === 'poultry') {
      setFilters((prev) => ({ ...prev, search: 'chicken' }));
    } else if (catId === 'keto') {
      setFilters((prev) => ({ ...prev, keto: true, maxCarbs: 20 }));
    } else if (catId === 'bowls') {
      setFilters((prev) => ({ ...prev, search: 'bowl' }));
    } else if (catId === 'seafood') {
      setFilters((prev) => ({ ...prev, search: 'salmon' }));
    } else if (catId === 'tallow') {
      setFilters((prev) => ({ ...prev, search: 'tallow' }));
    }
  };

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      if (selectedCity.name !== 'All Locations' && dish.city !== selectedCity.name) {
        return false;
      }

      if (filters.search.trim()) {
        const query = filters.search.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesRest = dish.restaurant.toLowerCase().includes(query);
        const matchesFat = dish.cookingFat.toLowerCase().includes(query);
        const matchesIng = dish.ingredients.some((ing) => ing.toLowerCase().includes(query));
        if (!matchesName && !matchesRest && !matchesFat && !matchesIng) {
          return false;
        }
      }

      if (filters.seedOilFree && !dish.isSeedOilFree) return false;
      if (filters.grassFed && !dish.isGrassFed) return false;
      if (filters.glutenFree && !dish.isGlutenFree) return false;
      if (filters.keto && !dish.isKeto) return false;
      if (filters.dairyFree && !dish.isDairyFree) return false;

      if (dish.protein < filters.minProtein) return false;
      if (dish.carbs > filters.maxCarbs) return false;

      return true;
    });
  }, [dishes, filters, selectedCity]);

  useEffect(() => {
    if (
      filteredDishes.length > 0 &&
      (!selectedDish ||
        (selectedCity.name !== 'All Locations' && selectedDish.city !== selectedCity.name))
    ) {
      setSelectedDish(filteredDishes[0]);
    }
  }, [filteredDishes, selectedDish, selectedCity]);

  const handleAddScannedDish = (newDish: Dish) => {
    setDishes((prev) => [newDish, ...prev]);
    setSelectedDish(newDish);
    setDetailDish(newDish);
  };

  const allCityDishesCount =
    selectedCity.name === 'All Locations'
      ? dishes.length
      : dishes.filter((d) => d.city === selectedCity.name).length;

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-[#F7F5F0] font-sans text-stone-900 overflow-hidden relative">
      {/* 
        MAP CONTAINER:
        - Desktop Layout: On lg screens and above, maintains side-by-side split screen (w-[460px] xl:w-[500px] h-full).
        - Mobile Layout: On screens < lg, conditionally rendered full-screen when mobileView === 'map', hidden when 'list'.
      */}
      <div
        id="interactive-map-panel"
        className={`w-full lg:w-[460px] xl:w-[500px] h-[calc(100dvh-64px)] lg:h-full flex-col bg-white border-b lg:border-b-0 lg:border-r border-stone-200 shrink-0 relative ${
          mobileView === 'map' ? 'flex' : 'hidden lg:flex'
        }`}
      >
        {/* Map Top Bar */}
        <div className="px-4 py-3.5 bg-white/95 backdrop-blur-xl border-b border-stone-200 flex items-center justify-between z-10 shrink-0 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-[#C8102E] shrink-0 shadow-xs">
                <MapPin className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C8102E]"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-stone-900 uppercase tracking-wider block leading-tight">
                  Active Map Zone
                </span>
                <span className="px-1.5 py-0.5 rounded-full bg-rose-100 border border-rose-200 text-[10px] font-mono font-black text-[#C8102E]">
                  LIVE
                </span>
              </div>
              <span className="text-[11px] text-stone-500 font-semibold">
                {filteredDishes.length} vetted in {selectedCity.name}
              </span>
            </div>
          </div>

          {/* City Selector */}
          <div className="relative" suppressHydrationWarning>
            <select
              id="city-selector-dropdown"
              value={selectedCity.name}
              suppressHydrationWarning
              onChange={(e) => handleCityNameChange(e.target.value)}
              className="appearance-none bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs pl-3 pr-8 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 cursor-pointer shadow-xs transition-all"
            >
              <option value="All Locations">All Locations ({dishes.length})</option>
              {CITY_LOCATIONS.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}, {c.state} ({cityDishCounts[c.name] ?? 0})
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Map Canvas */}
        <div className="flex-1 relative overflow-hidden">
          {isMounted ? (
            <InteractiveMap
              dishes={filteredDishes}
              selectedDish={selectedDish}
              onSelectDish={(dish) => {
                setSelectedDish(dish);
                setDetailDish(dish);
              }}
              city={selectedCity}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-stone-100 text-stone-500 gap-2">
              <div className="w-6 h-6 border-2 border-[#C8102E] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs font-mono font-medium">Loading Map Zones...</span>
            </div>
          )}
        </div>

        {/* Map Selected Dish Quick Card on Map Bottom */}
        {selectedDish && (
          <div className="p-3 bg-white/95 border-t border-stone-200 backdrop-blur-xl z-10 shrink-0 flex items-center justify-between gap-3 shadow-md">
            <div className="min-w-0">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#C8102E] block">
                Selected Pin
              </span>
              <h4 className="text-xs font-black text-stone-900 truncate leading-tight">
                {selectedDish.name}
              </h4>
              <p className="text-[11px] text-stone-600 truncate font-medium">
                {selectedDish.restaurant} • {selectedDish.protein}g Protein • {selectedDish.cookingFat}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                id="map-view-details-btn"
                onClick={() => setDetailDish(selectedDish)}
                className="px-3.5 py-1.5 rounded-xl bg-[#C8102E] hover:bg-[#A30D25] text-white text-xs font-black transition-all cursor-pointer shadow-sm"
              >
                Inspect
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 
        MAIN CONTENT / DISH LIST PANEL:
        - Desktop Layout: On lg screens and above, renders the right half of the split screen (flex-1 h-full).
        - Mobile Layout: On screens < lg, conditionally rendered full-screen when mobileView === 'list', hidden when 'map'.
      */}
      <div
        id="main-dish-list-panel"
        className={`flex-1 h-[calc(100dvh-64px)] lg:h-full flex-col overflow-y-auto bg-[#F7F5F0] ${
          mobileView === 'list' ? 'flex' : 'hidden lg:flex'
        }`}
      >
        {/* Arby's Fast-Casual Inspired Header */}
        <header
          id="main-app-header"
          className="sticky top-0 z-30 px-4 sm:px-6 py-3.5 bg-white/95 backdrop-blur-xl border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 shadow-xs"
        >
          {/* Brand & Identity */}
          <div className="flex items-center gap-3.5">
            <div className="relative group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#C8102E] flex items-center justify-center text-white shadow-md shadow-rose-900/20 shrink-0 transition-transform group-hover:scale-105">
                <Beef className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C8102E] border-2 border-white"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1
                  id="app-main-title"
                  className="font-black text-lg sm:text-xl md:text-2xl tracking-tight text-stone-900 leading-none flex items-center gap-2"
                >
                  <span className="tracking-tighter">VICINITY</span>
                  <span className="text-[10px] font-black tracking-widest text-[#C8102E] uppercase bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full hidden sm:inline-block">
                    100% Seed-Oil Free
                  </span>
                </h1>
              </div>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-stone-500 font-semibold text-xs">
                  Lab &amp; Chef Verified Clean-Fuel Dining
                </span>
                <span className="text-stone-300 hidden md:inline">•</span>
                <span className="text-emerald-700 text-[11px] font-bold hidden md:inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  No Canola • No Soybean Oil
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs & Location Switcher */}
          <div className="flex items-center gap-2.5">
            {/* Quick Header Location Selector Pill */}
            <div className="relative flex items-center">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800 transition-colors shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                <select
                  id="header-city-selector"
                  value={selectedCity.name}
                  onChange={(e) => handleCityNameChange(e.target.value)}
                  suppressHydrationWarning
                  className="bg-transparent font-bold text-xs text-stone-900 focus:outline-none cursor-pointer pr-1"
                >
                  <option value="All Locations">
                    All Locations ({dishes.length})
                  </option>
                  {CITY_LOCATIONS.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}, {c.state} ({cityDishCounts[c.name] ?? 0})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3 h-3 text-stone-400 pointer-events-none" />
              </div>
            </div>

            {/* AI Menu Scanner CTA Button */}
            <button
              id="open-menu-scanner-btn"
              onClick={() => setIsScannerOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#C8102E] hover:bg-[#A30D25] text-white text-xs font-black tracking-wide transition-all shadow-md shadow-rose-900/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
            >
              <ScanLine className="w-4 h-4 text-white group-hover:rotate-12 transition-transform stroke-[2.5]" />
              <span className="hidden xs:inline">Scan Menu (AI)</span>
              <span className="xs:hidden">Scan</span>
            </button>
          </div>
        </header>

        {/* Dashboard Content Body */}
        <main className="p-4 sm:p-6 space-y-6 max-w-7xl w-full mx-auto pb-12">
          {/* Fast-Casual Hero Promo Banner (Inspired by Arby's UI Reference) */}
          <HeroPromoBanner
            onExploreClick={() => {
              const el = document.getElementById('dishes-grid-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenScanner={() => setIsScannerOpen(true)}
          />

          {/* Pinterest-style Category Carousel (Meats, Keto, Bowls, Seed-Oil Free) */}
          <CategoryCarousel
            activeCategory={activeCategory}
            onSelectCategory={handleCategorySelect}
          />

          {/* Bento Filters Bar with Location Filter */}
          <BentoFilters
            filters={filters}
            onChange={setFilters}
            onReset={resetFilters}
            totalDishesCount={dishes.length}
            filteredCount={filteredDishes.length}
            selectedCityName={selectedCity.name}
            onCityChange={handleCityNameChange}
            availableCities={CITY_LOCATIONS}
            cityDishCounts={cityDishCounts}
          />

          {/* Creator Field Notes Viral Video Feed */}
          <CreatorFeed />

          {/* Dishes Grid */}
          <div id="dishes-grid-section" className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-black text-stone-900 flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#C8102E]" />
                <span>
                  Verified Dishes in{' '}
                  <span className="text-[#C8102E] underline decoration-rose-400/40 underline-offset-4">
                    {selectedCity.name === 'All Locations'
                      ? 'All Locations'
                      : `${selectedCity.name}, ${selectedCity.state}`}
                  </span>
                </span>
                <span className="text-xs font-bold text-stone-700 px-2.5 py-0.5 rounded-full bg-white border border-stone-200 shadow-xs">
                  {filteredDishes.length} items
                </span>
              </h2>
            </div>

            {filteredDishes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredDishes.map((dish, idx) => (
                  <DishCard
                    key={dish.id}
                    dish={dish}
                    index={idx}
                    isSelected={selectedDish?.id === dish.id}
                    onSelect={(d) => setSelectedDish(d)}
                    onOpenDetails={(d) => {
                      setSelectedDish(d);
                      setDetailDish(d);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="p-8 sm:p-12 text-center bg-white rounded-3xl border border-dashed border-stone-300 space-y-3 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 text-[#C8102E] flex items-center justify-center mx-auto">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-stone-900 text-sm">
                  No dishes match all active filters in {selectedCity.name}
                </h3>
                <p className="text-xs text-stone-500 max-w-md mx-auto font-medium">
                  Try adjusting your protein or carb thresholds, or click reset to view all
                  verified healthy dishes in this city zone.
                </p>
                <button
                  id="empty-reset-filters-btn"
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-xl bg-[#C8102E] hover:bg-[#A30D25] text-white text-xs font-black transition-all cursor-pointer shadow-sm"
                >
                  Reset Veto Filters
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* 
        Bottom Navigation for Mobile (< lg)
      */}
      <nav
        id="mobile-bottom-nav-bar"
        className="fixed bottom-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-lg border-t border-stone-200 z-50 flex lg:hidden items-center justify-around px-4 shadow-lg"
      >
        {/* List Tab Button */}
        <button
          id="mobile-tab-list-btn"
          onClick={() => setMobileView('list')}
          className={`flex-1 flex flex-col items-center justify-center h-full py-1.5 transition-all cursor-pointer relative ${
            mobileView === 'list'
              ? 'text-[#C8102E] font-black'
              : 'text-stone-500 hover:text-stone-800 font-semibold'
          }`}
        >
          {mobileView === 'list' && (
            <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-[#C8102E] rounded-full" />
          )}
          <List className={`w-5 h-5 mb-1 ${mobileView === 'list' ? 'text-[#C8102E] scale-110' : 'text-stone-400'} transition-transform`} />
          <span className="text-[11px] tracking-wide">
            List ({filteredDishes.length})
          </span>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-stone-200 shrink-0" />

        {/* Map Tab Button */}
        <button
          id="mobile-tab-map-btn"
          onClick={() => setMobileView('map')}
          className={`flex-1 flex flex-col items-center justify-center h-full py-1.5 transition-all cursor-pointer relative ${
            mobileView === 'map'
              ? 'text-[#C8102E] font-black'
              : 'text-stone-500 hover:text-stone-800 font-semibold'
          }`}
        >
          {mobileView === 'map' && (
            <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-[#C8102E] rounded-full" />
          )}
          <MapIcon className={`w-5 h-5 mb-1 ${mobileView === 'map' ? 'text-[#C8102E] scale-110' : 'text-stone-400'} transition-transform`} />
          <span className="text-[11px] tracking-wide">
            Map
          </span>
        </button>
      </nav>

      {/* Dish Detail Modal */}
      <DishDetailModal
        dish={detailDish}
        onClose={() => setDetailDish(null)}
      />

      {/* Menu Scanner Modal */}
      <MenuScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onAddDish={handleAddScannedDish}
        city={selectedCity}
      />
    </div>
  );
}
