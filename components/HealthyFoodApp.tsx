'use client';

import React, { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Dish, CityLocation } from '@/lib/mockData';
import DishCard from '@/components/DishCard';
import DishDetailModal from '@/components/DishDetailModal';
import MenuScannerModal from '@/components/MenuScannerModal';
import BentoFilters, { FilterState } from '@/components/BentoFilters';
import {
  Compass,
  MapPin,
  ScanLine,
  Film,
  Flame,
  ChevronDown,
  List,
  Map,
} from 'lucide-react';

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

interface HealthyFoodAppProps {
  initialDishes: Dish[];
  cities: CityLocation[];
}

export default function HealthyFoodApp({
  initialDishes,
  cities,
}: HealthyFoodAppProps) {
  const [mobileView, setMobileView] = useState<'map' | 'list'>('list');
  const [showIntro, setShowIntro] = useState(false);
  const [dishes, setDishes] = useState<Dish[]>(initialDishes);
  const [selectedCity, setSelectedCity] = useState<CityLocation>(cities[0]);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(initialDishes[0]);
  const [detailDish, setDetailDish] = useState<Dish | null>(null);
  const [isScannerOpen, setIsScannerOpen] = useState(false);

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
    const cityDishes = dishes.filter((d) => d.city === city.name);
    if (cityDishes.length > 0) {
      setSelectedDish(cityDishes[0]);
    }
  };

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
      if (dish.city !== selectedCity.name) return false;

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
    if (filteredDishes.length > 0 && (!selectedDish || selectedDish.city !== selectedCity.name)) {
      setSelectedDish(filteredDishes[0]);
    }
  }, [filteredDishes, selectedDish, selectedCity]);

  const handleAddScannedDish = (newDish: Dish) => {
    setDishes((prev) => [newDish, ...prev]);
    setSelectedDish(newDish);
    setDetailDish(newDish);
  };

  if (showIntro) {
    return <IntroSequence onComplete={() => setShowIntro(false)} />;
  }

  const allCityDishesCount = dishes.filter((d) => d.city === selectedCity.name).length;

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-slate-100 font-sans text-slate-900 overflow-hidden relative">
      {/* 1. MAP VIEW CONTAINER */}
      <div
        id="app-map-container"
        className={`w-full lg:w-[460px] xl:w-[500px] h-[calc(100dvh-64px)] lg:h-full flex-col bg-slate-950 border-b lg:border-b-0 lg:border-r border-slate-800 shrink-0 relative ${
          mobileView === 'map' ? 'flex' : 'hidden lg:flex'
        }`}
      >
        <div className="p-4 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
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

          <div className="relative" suppressHydrationWarning>
            <select
              id="city-selector-dropdown"
              value={selectedCity.name}
              suppressHydrationWarning
              onChange={(e) => {
                const found = cities.find((c) => c.name === e.target.value);
                if (found) handleCityChange(found);
              }}
              className="appearance-none bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs pl-3 pr-8 py-1.5 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              {cities.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}, {c.state}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex-1 relative overflow-hidden">
          <InteractiveMap
            dishes={filteredDishes}
            selectedDish={selectedDish}
            onSelectDish={(dish) => {
              setSelectedDish(dish);
              setDetailDish(dish);
            }}
            city={selectedCity}
          />
        </div>

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
            <button
              id="map-view-details-btn"
              onClick={() => setDetailDish(selectedDish)}
              className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black shrink-0 transition-all cursor-pointer shadow-sm"
            >
              Inspect
            </button>
          </div>
        )}
      </div>

      {/* 2. MAIN CONTENT CONTAINER (FILTERS + DISH GRID) */}
      <div
        id="app-main-content-container"
        className={`flex-1 h-[calc(100dvh-64px)] lg:h-full flex-col overflow-y-auto bg-slate-100 pb-6 lg:pb-0 ${
          mobileView === 'list' ? 'flex' : 'hidden lg:flex'
        }`}
      >
        <header
          id="main-app-header"
          className="sticky top-0 z-30 px-4 sm:px-6 py-4 bg-white/90 backdrop-blur-md border-b border-slate-200/90 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-black shadow-md shadow-emerald-500/20">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1
                  id="app-main-title"
                  className="font-black text-lg md:text-xl tracking-tight text-slate-900 leading-none"
                >
                  Healthy Food in your Vicinity
                </h1>
                <button
                  id="replay-intro-btn"
                  onClick={() => setShowIntro(true)}
                  className="ml-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black text-white hover:bg-neutral-800 text-[11px] font-bold transition-all shadow-xs cursor-pointer"
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

          <div className="flex items-center gap-2.5">
            <button
              id="open-menu-scanner-btn"
              onClick={() => setIsScannerOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md cursor-pointer group"
            >
              <ScanLine className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
              <span>AI Menu Scanner</span>
            </button>
          </div>
        </header>

        <main className="p-4 sm:p-6 space-y-6 max-w-7xl w-full mx-auto">
          <BentoFilters
            filters={filters}
            onChange={setFilters}
            onReset={resetFilters}
            totalDishesCount={allCityDishesCount}
            filteredCount={filteredDishes.length}
          />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>Verified Clean Dishes in {selectedCity.name}, {selectedCity.state}</span>
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
              <div className="p-12 text-center bg-white rounded-3xl border border-dashed border-slate-300 space-y-3">
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

      {/* 3. MOBILE FIXED BOTTOM TAB BAR (Visible on screens < lg) */}
      <nav
        id="mobile-bottom-tab-bar"
        aria-label="Mobile Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 h-16 z-50 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 px-4 py-1.5 flex items-center"
      >
        <div className="grid grid-cols-2 gap-3 w-full max-w-md mx-auto h-full">
          <button
            id="mobile-nav-list-tab"
            onClick={() => setMobileView('list')}
            className={`flex flex-col items-center justify-center rounded-xl transition-all duration-200 cursor-pointer min-h-[44px] ${
              mobileView === 'list'
                ? 'text-emerald-400 bg-emerald-500/10 border-t-2 border-emerald-500 font-extrabold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 border-t-2 border-transparent font-semibold'
            }`}
          >
            <List className="w-4 h-4 mb-0.5" />
            <span className="text-[11px] tracking-wide uppercase">List</span>
          </button>

          <button
            id="mobile-nav-map-tab"
            onClick={() => setMobileView('map')}
            className={`flex flex-col items-center justify-center rounded-xl transition-all duration-200 cursor-pointer min-h-[44px] ${
              mobileView === 'map'
                ? 'text-emerald-400 bg-emerald-500/10 border-t-2 border-emerald-500 font-extrabold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 border-t-2 border-transparent font-semibold'
            }`}
          >
            <Map className="w-4 h-4 mb-0.5" />
            <span className="text-[11px] tracking-wide uppercase">Map</span>
          </button>
        </div>
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
