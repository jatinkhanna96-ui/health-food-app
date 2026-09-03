'use client';

import React, { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { INITIAL_DISHES, CITY_LOCATIONS, ALL_CITIES_LOCATION, Dish, CityLocation } from '@/lib/mockData';
import DishCard from '@/components/DishCard';
import DishDetailModal from '@/components/DishDetailModal';
import MenuScannerModal from '@/components/MenuScannerModal';
import BentoFilters, { FilterState } from '@/components/BentoFilters';
import CreatorFeed from '@/components/CreatorFeed';
import {
  Compass,
  MapPin,
  ScanLine,
  Film,
  Flame,
  ChevronDown,
  List,
  Map as MapIcon,
} from 'lucide-react';

// Dynamically import InteractiveMap and IntroSequence with SSR disabled to prevent Leaflet/browser canvas errors
const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-slate-400 gap-2">
      <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      <span className="text-xs font-mono font-medium">Loading Map Zones...</span>
    </div>
  ),
});

const IntroSequence = dynamic(() => import('@/components/IntroSequence'), {
  ssr: false,
});

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);
  // 1. Mobile UX State: Toggle between full-screen 'list' and 'map' on mobile screens (< lg)
  const [mobileView, setMobileView] = useState<'map' | 'list'>('list');

  const [showIntro, setShowIntro] = useState(false);
  const [dishes, setDishes] = useState<Dish[]>(INITIAL_DISHES);
  const [selectedCity, setSelectedCity] = useState<CityLocation>(CITY_LOCATIONS[0]);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(INITIAL_DISHES[0]);
  const [detailDish, setDetailDish] = useState<Dish | null>(null);
  const [isScannerOpen, setIsScannerOpen] = useState(false);

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
      if (
        e.reason?.message?.includes('ResizeObserver') ||
        e.reason?.message?.includes('spline')
      ) {
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

  if (showIntro && isMounted) {
    return <IntroSequence onComplete={() => setShowIntro(false)} />;
  }

  const allCityDishesCount =
    selectedCity.name === 'All Locations'
      ? dishes.length
      : dishes.filter((d) => d.city === selectedCity.name).length;

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-slate-100 font-sans text-slate-900 overflow-hidden relative">
      {/* 
        MAP CONTAINER:
        - 2. Desktop Layout: On lg screens and above, maintains side-by-side split screen (w-[460px] xl:w-[500px] h-full).
        - 3. Mobile Layout: On screens < lg, conditionally rendered full-screen when mobileView === 'map', hidden when 'list'.
      */}
      <div
        id="interactive-map-panel"
        className={`w-full lg:w-[460px] xl:w-[500px] h-[calc(100dvh-64px)] lg:h-full flex-col bg-slate-950 border-b lg:border-b-0 lg:border-r border-slate-800 shrink-0 relative ${
          mobileView === 'map' ? 'flex' : 'hidden lg:flex'
        }`}
      >
        {/* Map Top Bar */}
        <div className="p-3.5 sm:p-4 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-black text-white uppercase tracking-wider block leading-tight">
                Active Map Zone
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
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
              className="appearance-none bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs pl-3 pr-8 py-1.5 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="All Locations">All Locations ({dishes.length})</option>
              {CITY_LOCATIONS.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}, {c.state} ({cityDishCounts[c.name] ?? 0})
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
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
            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-slate-400 gap-2">
              <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs font-mono font-medium">Loading Map Zones...</span>
            </div>
          )}
        </div>

        {/* Map Selected Dish Quick Card on Map Bottom */}
        {selectedDish && (
          <div className="p-3 bg-slate-900/95 border-t border-slate-800 backdrop-blur-md z-10 shrink-0 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                Selected Pin
              </span>
              <h4 className="text-xs font-extrabold text-white truncate leading-tight">
                {selectedDish.name}
              </h4>
              <p className="text-[11px] text-slate-400 truncate">
                {selectedDish.restaurant} • {selectedDish.protein}g Protein • {selectedDish.cookingFat}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                id="map-view-details-btn"
                onClick={() => setDetailDish(selectedDish)}
                className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black transition-all cursor-pointer shadow-sm"
              >
                Inspect
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 
        MAIN CONTENT / DISH LIST PANEL:
        - 2. Desktop Layout: On lg screens and above, renders the right half of the split screen (flex-1 h-full).
        - 3. Mobile Layout: On screens < lg, conditionally rendered full-screen when mobileView === 'list', hidden when 'map'.
      */}
      <div
        id="main-dish-list-panel"
        className={`flex-1 h-[calc(100dvh-64px)] lg:h-full flex-col overflow-y-auto bg-slate-100 ${
          mobileView === 'list' ? 'flex' : 'hidden lg:flex'
        }`}
      >
        {/* Top Header */}
        <header
          id="main-app-header"
          className="sticky top-0 z-30 px-4 sm:px-6 py-3.5 sm:py-4 bg-white/90 backdrop-blur-md border-b border-slate-200/90 flex flex-wrap items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-black shadow-md shadow-emerald-500/20 shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1
                  id="app-main-title"
                  className="font-black text-base sm:text-lg md:text-xl tracking-tight text-slate-900 leading-none"
                >
                  Healthy Food in your Vicinity
                </h1>
                <button
                  id="replay-intro-btn"
                  onClick={() => setShowIntro(true)}
                  className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black text-white hover:bg-neutral-800 text-[11px] font-bold transition-all shadow-xs cursor-pointer"
                  title="Replay 3D Scroll Intro Sequence"
                >
                  <Film className="w-3 h-3 text-emerald-400" />
                  <span>3D Intro</span>
                </button>
              </div>
              <p className="text-slate-500 font-medium text-xs mt-0.5">
                Local macro discovery engine &amp; verified seed-oil-free dining
              </p>
            </div>
          </div>

          {/* Action CTAs & Location Switcher */}
          <div className="flex items-center gap-2">
            {/* Quick Header Location Selector */}
            <div className="relative flex items-center">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 transition-colors shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <select
                  id="header-city-selector"
                  value={selectedCity.name}
                  onChange={(e) => handleCityNameChange(e.target.value)}
                  suppressHydrationWarning
                  className="bg-transparent font-bold text-xs text-slate-900 focus:outline-none cursor-pointer pr-1"
                >
                  <option value="All Locations">All Locations ({dishes.length})</option>
                  {CITY_LOCATIONS.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}, {c.state} ({cityDishCounts[c.name] ?? 0})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3 h-3 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <button
              id="open-menu-scanner-btn"
              onClick={() => setIsScannerOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md cursor-pointer group"
            >
              <ScanLine className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
              <span className="hidden xs:inline">AI Menu Scanner</span>
              <span className="xs:hidden">Scanner</span>
            </button>
          </div>
        </header>

        {/* Dashboard Content Body */}
        <main className="p-4 sm:p-6 space-y-6 max-w-7xl w-full mx-auto pb-8">
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
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>
                  Verified Clean Dishes in{' '}
                  <span className="text-emerald-700 underline decoration-emerald-300 underline-offset-2">
                    {selectedCity.name === 'All Locations'
                      ? 'All Locations'
                      : `${selectedCity.name}, ${selectedCity.state}`}
                  </span>
                </span>
                <span className="text-xs font-bold text-slate-400">
                  ({filteredDishes.length})
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
              <div className="p-8 sm:p-12 text-center bg-white rounded-3xl border border-dashed border-slate-300 space-y-3">
                <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm">
                  No dishes match all active vetoes in {selectedCity.name}
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Try adjusting your protein or carb thresholds, or click reset to view all
                  verified healthy dishes in this city zone.
                </p>
                <button
                  id="empty-reset-filters-btn"
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-extrabold transition-all cursor-pointer shadow-md"
                >
                  Reset Veto Filters
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* 
        4. Bottom Navigation:
        - Fixed bottom tab bar for mobile (< lg)
        - Evenly spaced buttons: "List" and "Map" with Lucide icons
        - Highlights the active tab with Emerald-500 text/indicator
      */}
      <nav
        id="mobile-bottom-nav-bar"
        className="fixed bottom-0 left-0 right-0 h-16 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 z-50 flex lg:hidden items-center justify-around px-4 shadow-2xl"
      >
        {/* List Tab Button */}
        <button
          id="mobile-tab-list-btn"
          onClick={() => setMobileView('list')}
          className={`flex-1 flex flex-col items-center justify-center h-full py-1.5 transition-all cursor-pointer relative ${
            mobileView === 'list'
              ? 'text-emerald-400 font-extrabold'
              : 'text-slate-400 hover:text-slate-200 font-medium'
          }`}
        >
          {mobileView === 'list' && (
            <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          )}
          <List className={`w-5 h-5 mb-1 ${mobileView === 'list' ? 'text-emerald-400 scale-110' : 'text-slate-400'} transition-transform`} />
          <span className="text-[11px] tracking-wide">
            List ({filteredDishes.length})
          </span>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-slate-800 shrink-0" />

        {/* Map Tab Button */}
        <button
          id="mobile-tab-map-btn"
          onClick={() => setMobileView('map')}
          className={`flex-1 flex flex-col items-center justify-center h-full py-1.5 transition-all cursor-pointer relative ${
            mobileView === 'map'
              ? 'text-emerald-400 font-extrabold'
              : 'text-slate-400 hover:text-slate-200 font-medium'
          }`}
        >
          {mobileView === 'map' && (
            <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          )}
          <MapIcon className={`w-5 h-5 mb-1 ${mobileView === 'map' ? 'text-emerald-400 scale-110' : 'text-slate-400'} transition-transform`} />
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
