'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  Dish,
  INITIAL_DISHES,
  CITY_LOCATIONS,
  CityLocation,
} from '@/lib/mockData';
import DishCard from '@/components/DishCard';
import DishDetailModal from '@/components/DishDetailModal';
import MenuScannerModal from '@/components/MenuScannerModal';
import InteractiveMap from '@/components/InteractiveMap';
import BentoFilters, { FilterState } from '@/components/BentoFilters';
import ReelsBar from '@/components/ReelsBar';
import { Reel, ReelCity } from '@/lib/reelsData';
import {
  Compass,
  MapPin,
  Sparkles,
  ScanLine,
  Flame,
  ChevronDown,
  ShieldCheck,
  X,
  Radar,
  ChevronRight,
  ArrowRight,
  Plus,
} from 'lucide-react';

const CITIES_DROPDOWN: { id: ReelCity; label: string; cityName: string; state: string }[] = [
  { id: 'Austin, TX', label: 'Austin TX', cityName: 'Austin', state: 'TX' },
  { id: 'New York, NY', label: 'New York NY', cityName: 'New York', state: 'NY' },
  { id: 'Los Angeles, CA', label: 'Los Angeles CA', cityName: 'Los Angeles', state: 'CA' },
  { id: 'San Francisco, CA', label: 'San Francisco CA', cityName: 'San Francisco', state: 'CA' },
  { id: 'Miami, FL', label: 'Miami FL', cityName: 'Miami', state: 'FL' },
  { id: 'Chicago, IL', label: 'Chicago IL', cityName: 'Chicago', state: 'IL' },
  { id: 'Denver, CO', label: 'Denver CO', cityName: 'Denver', state: 'CO' },
  { id: 'Seattle, WA', label: 'Seattle WA', cityName: 'Seattle', state: 'WA' },
  { id: 'San Diego, CA', label: 'San Diego CA', cityName: 'San Diego', state: 'CA' },
  { id: 'Nashville, TN', label: 'Nashville TN', cityName: 'Nashville', state: 'TN' },
  { id: 'Washington, DC', label: 'Washington DC', cityName: 'Washington', state: 'DC' },
];

export default function HomePage() {
  const [dishes, setDishes] = useState<Dish[]>(INITIAL_DISHES);
  const [selectedCity, setSelectedCity] = useState<CityLocation>(() => {
    return CITY_LOCATIONS.find((c) => c.name === 'Austin') || CITY_LOCATIONS[0];
  });
  const [selectedDish, setSelectedDish] = useState<Dish | null>(INITIAL_DISHES[0]);
  const [detailDish, setDetailDish] = useState<Dish | null>(null);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [customReels, setCustomReels] = useState<Reel[]>([]);

  // Map Drawer & Radius Controls
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mapRadius, setMapRadius] = useState<number>(5);
  const [selectedCookingFat, setSelectedCookingFat] = useState<string>('all');
  const [isRadarScanning, setIsRadarScanning] = useState(false);

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

  const selectedReelCity: ReelCity = useMemo(() => {
    const match = CITIES_DROPDOWN.find((c) => c.cityName === selectedCity.name);
    return match ? match.id : (`${selectedCity.name}, ${selectedCity.state}` as ReelCity);
  }, [selectedCity]);

  // When city changes via dropdown
  const handleCitySelect = (cityId: ReelCity) => {
    const item = CITIES_DROPDOWN.find((c) => c.id === cityId);
    if (!item) return;
    const found = CITY_LOCATIONS.find((c) => c.name === item.cityName);
    if (found) {
      setSelectedCity(found);
      const cityDishes = dishes.filter((d) => d.city === found.name);
      if (cityDishes.length > 0) {
        setSelectedDish(cityDishes[0]);
      }
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
    setSelectedCookingFat('all');
  };

  // Quick Vibe Presets
  const applyVibePreset = (preset: 'high-protein' | 'carnivore' | 'keto' | 'celiac' | 'detox') => {
    switch (preset) {
      case 'high-protein':
        setFilters((prev) => ({ ...prev, minProtein: 45, maxCarbs: 50, seedOilFree: true }));
        break;
      case 'carnivore':
        setFilters((prev) => ({ ...prev, grassFed: true, seedOilFree: true, maxCarbs: 10, minProtein: 40 }));
        setSelectedCookingFat('Tallow');
        break;
      case 'keto':
        setFilters((prev) => ({ ...prev, keto: true, maxCarbs: 10, seedOilFree: true }));
        break;
      case 'celiac':
        setFilters((prev) => ({ ...prev, glutenFree: true, seedOilFree: true }));
        break;
      case 'detox':
        setFilters((prev) => ({ ...prev, seedOilFree: true, dairyFree: true, grassFed: true }));
        break;
    }
  };

  const triggerRadarScan = () => {
    setIsRadarScanning(true);
    setTimeout(() => {
      setIsRadarScanning(false);
      if (filteredDishes.length > 0) {
        setSelectedDish(filteredDishes[0]);
      }
    }, 2800);
  };

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      if (dish.city !== selectedCity.name) return false;

      if (selectedCookingFat !== 'all') {
        if (!dish.cookingFat.toLowerCase().includes(selectedCookingFat.toLowerCase())) {
          return false;
        }
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
  }, [dishes, filters, selectedCity, selectedCookingFat]);

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

  const handleInspectDishFromReel = (restaurant: string, dishName?: string) => {
    const match = dishes.find(
      (d) =>
        d.restaurant.toLowerCase().includes(restaurant.toLowerCase()) ||
        restaurant.toLowerCase().includes(d.restaurant.toLowerCase()) ||
        (dishName && d.name.toLowerCase().includes(dishName.toLowerCase()))
    );
    if (match) {
      const cityLoc = CITY_LOCATIONS.find((c) => c.name === match.city);
      if (cityLoc && cityLoc.name !== selectedCity.name) {
        setSelectedCity(cityLoc);
      }
      setSelectedDish(match);
      setDetailDish(match);
    } else {
      setIsMapOpen(true);
    }
  };

  const allCityDishesCount = dishes.filter((d) => d.city === selectedCity.name).length;

  return (
    <div className="min-h-screen bg-[#0a2e1f] text-[#e8f5ed] flex flex-col font-sans selection:bg-[#b6f7c1]/30 selection:text-[#0a2e1f]">
      {/* ========================================================================= */}
      {/* 1. SLIDE-OUT CARTOGRAPHY RADAR DRAWER                                      */}
      {/* ========================================================================= */}
      <div
        className={`fixed inset-0 z-40 bg-black/65 backdrop-blur-xs transition-opacity duration-300 ${
          isMapOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMapOpen(false)}
      />

      <aside
        id="vicinity-map-drawer"
        className={`fixed inset-y-0 left-0 z-50 w-full sm:w-[500px] md:w-[560px] lg:w-[620px] bg-[#082419]/90 backdrop-blur-2xl text-white shadow-[12px_0_40px_rgba(0,0,0,0.65)] flex flex-col border-r border-white/20 transition-transform duration-300 ease-out transform ${
          isMapOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-black/40 backdrop-blur-md border-b border-white/15 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl glass-pill text-[#b6f7c1] flex items-center justify-center shadow-md border border-[#b6f7c1]/30">
              <Radar className={`w-5 h-5 ${isRadarScanning ? 'animate-spin text-[#b6f7c1]' : ''}`} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-white text-base leading-tight">
                  Vicinity Radar
                </h3>
                <span className="w-2 h-2 rounded-full bg-[#b6f7c1] animate-ping" />
              </div>
              <p className="text-[11px] font-bold text-emerald-300/70 uppercase tracking-wider">
                {filteredDishes.length} Verified Kitchens in Range
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="close-map-drawer-btn"
              onClick={() => setIsMapOpen(false)}
              className="p-2 rounded-xl glass-pill hover:bg-white/20 text-emerald-100 border border-white/20 transition-colors shadow-xs cursor-pointer active:scale-95"
              title="Close Map Slider"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Drawer Options & Filter Deck */}
        <div className="p-3.5 bg-black/30 backdrop-blur-md border-b border-white/10 space-y-3 shrink-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-black uppercase text-emerald-300/90 tracking-wider flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#b6f7c1]" />
              <span>Search Perimeter:</span>
            </span>

            <div className="inline-flex rounded-xl glass-pill p-1 border border-white/15">
              {[1, 3, 5, 10].map((radius) => (
                <button
                  key={radius}
                  onClick={() => setMapRadius(radius)}
                  className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                    mapRadius === radius
                      ? 'glass-btn-plus text-[#0a2e1f]'
                      : 'text-emerald-200/80 hover:text-white'
                  }`}
                >
                  {radius} mi
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Map Area */}
        <div className="relative flex-1 bg-[#0a2e1f] overflow-hidden min-h-[300px]">
          <InteractiveMap
            dishes={filteredDishes}
            city={selectedCity}
            selectedDish={selectedDish}
            onSelectDish={(d) => setSelectedDish(d)}
            radiusMiles={mapRadius}
            isRadarScanning={isRadarScanning}
          />
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. TOP APP HEADER                                                         */}
      {/* ========================================================================= */}
      <header
        id="main-app-header"
        className="sticky top-0 z-30 px-4 sm:px-6 lg:px-8 py-3.5 bg-[#082419]/80 backdrop-blur-2xl border-b border-white/15 flex flex-wrap items-center justify-between gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
      >
        {/* Left Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl glass-pill flex items-center justify-center text-[#b6f7c1] shadow-md border border-[#b6f7c1]/35 shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-base sm:text-lg lg:text-xl tracking-tight text-white leading-none">
                Healthy Vicinity
              </span>
              <span className="px-2 py-0.5 rounded-full glass-pill-dark text-[#b6f7c1] text-[10px] font-black tracking-wider uppercase border border-[#b6f7c1]/35 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b6f7c1] animate-ping" />
                <span>LIVE</span>
              </span>
            </div>
            <p className="text-emerald-300/70 font-semibold text-[11px] sm:text-xs mt-0.5 flex items-center gap-1.5">
              <span>Bio-Individual Dining Engine &bull; Zero Seed Oils</span>
            </p>
          </div>
        </div>

        {/* Right Header Navigation Actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* City Dropdown */}
          <div className="relative">
            <select
              id="header-city-selector"
              value={selectedReelCity}
              onChange={(e) => handleCitySelect(e.target.value as ReelCity)}
              className="appearance-none glass-pill-dark hover:bg-white/10 text-white font-black text-xs pl-3.5 pr-8 py-2.5 rounded-2xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#b6f7c1]/40 cursor-pointer transition-all shadow-xs"
            >
              {CITIES_DROPDOWN.map((c) => (
                <option key={c.id} value={c.id} className="bg-[#082419] text-white">
                  📍 {c.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#b6f7c1] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Map Radar Button */}
          <button
            id="header-open-map-btn"
            onClick={() => setIsMapOpen(true)}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-2xl glass-pill hover:bg-white/15 text-[#b6f7c1] text-xs font-black border border-white/20 transition-all shadow-xs cursor-pointer group active:scale-95"
            title="Open Map Radar"
          >
            <Radar className="w-4 h-4 text-[#b6f7c1] group-hover:rotate-45 transition-transform" />
            <span>Map Radar</span>
            <span className="px-1.5 py-0.5 rounded-md glass-pill-dark text-[#b6f7c1] font-black text-[10px] border border-[#b6f7c1]/30">
              {filteredDishes.length}
            </span>
          </button>

          {/* AI Menu Scanner CTA Button */}
          <button
            id="open-menu-scanner-btn"
            onClick={() => setIsScannerOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl glass-btn-plus text-[#0a2e1f] text-xs font-black transition-all cursor-pointer group active:scale-95"
          >
            <ScanLine className="w-4 h-4 text-[#0a2e1f] group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">AI Menu Scanner</span>
            <span className="sm:hidden">Scan</span>
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MAIN VIEWPORT CONTENT                                                     */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-7 flex-1">
        {/* ========================================================================= */}
        {/* KITCHEN PROOF & SIZZLE REELS LIVE PROOF SECTION                            */}
        {/* ========================================================================= */}
        <ReelsBar
          selectedCity={selectedReelCity}
          onSelectCity={handleCitySelect}
          onOpenMap={() => setIsMapOpen(true)}
          onInspectDish={handleInspectDishFromReel}
          customReels={customReels}
          onAddReel={(newReel) => setCustomReels((prev) => [newReel, ...prev])}
        />

        {/* ========================================================================= */}
        {/* GUARANTEE SPOTLIGHT & QUICK FUEL PRESETS                                  */}
        {/* ========================================================================= */}
        <section className="relative rounded-3xl glass-panel text-white p-6 sm:p-9 overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#b6f7c1]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#134631]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-[11px] font-black text-[#b6f7c1] uppercase tracking-wider border border-[#b6f7c1]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#b6f7c1]" />
              <span>100% Seed-Oil-Free &bull; Pure Animal &amp; Fruit Fats</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white">
              CLEAN FUEL. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#b6f7c1] to-[#80ed99]">
                NUTRITION OPTIMIZED.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/90 font-medium leading-relaxed max-w-xl">
              Dine out without inflammatory industrial oils. Curating independent kitchens cooking exclusively in{' '}
              <strong className="text-white">beef tallow, cold-pressed extra virgin olive oil</strong>, and{' '}
              <strong className="text-white">grass-fed ghee</strong> across {selectedCity.name}.
            </p>

            {/* Quick Fuel Presets */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-300/80 block">
                ⚡ Quick Fuel Presets (1-Click Tune):
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'high-protein', label: '💪 High Protein (45g+)', tag: 'high-protein' as const },
                  { id: 'carnivore', label: '🥩 Carnivore Tallow', tag: 'carnivore' as const },
                  { id: 'keto', label: '🥑 Clean Keto', tag: 'keto' as const },
                  { id: 'celiac', label: '🌾 Celiac Safe', tag: 'celiac' as const },
                  { id: 'detox', label: '🛡️ Seed-Oil Detox', tag: 'detox' as const },
                ].map((vibe) => (
                  <button
                    key={vibe.id}
                    onClick={() => applyVibePreset(vibe.tag)}
                    className="px-3 py-1.5 rounded-xl glass-pill hover:bg-white/15 text-emerald-100 text-xs font-bold transition-all border border-white/15 active:scale-95 cursor-pointer shadow-xs"
                  >
                    {vibe.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                id="hero-open-map-btn"
                onClick={() => setIsMapOpen(true)}
                className="px-6 py-3 rounded-2xl glass-btn-plus text-[#0a2e1f] font-black text-xs sm:text-sm transition-all active:scale-95 cursor-pointer inline-flex items-center gap-2 group"
              >
                <Radar className="w-4 h-4 text-[#0a2e1f] group-hover:rotate-45 transition-transform" />
                <span>Explore Map Radar</span>
                <ChevronRight className="w-4 h-4 text-[#0a2e1f] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => setIsScannerOpen(true)}
                className="px-5 py-3 rounded-2xl glass-pill hover:bg-white/15 text-emerald-100 font-bold text-xs sm:text-sm transition-all border border-white/20 active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <ScanLine className="w-4 h-4 text-[#b6f7c1]" />
                <span>Scan Physical Menu</span>
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BENTO FILTERS MATRIX                                                      */}
        {/* ========================================================================= */}
        <section aria-label="Filters">
          <BentoFilters
            filters={filters}
            onChange={setFilters}
            onReset={resetFilters}
            totalDishesCount={allCityDishesCount}
            filteredCount={filteredDishes.length}
          />
        </section>

        {/* ========================================================================= */}
        {/* VERIFIED CLEAN DISHES GRID FEED                                           */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2.5">
              <Flame className="w-5 h-5 text-[#b6f7c1]" />
              <span>Verified Clean Dishes in {selectedCity.name}, {selectedCity.state}</span>
              <span className="text-xs font-black text-[#0a2e1f] bg-[#b6f7c1] px-2.5 py-0.5 rounded-full">
                {filteredDishes.length} Matches
              </span>
            </h2>

            <button
              onClick={() => setIsMapOpen(true)}
              className="text-xs font-extrabold text-[#b6f7c1] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View Map Radar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredDishes.map((dish) => (
                <DishCard
                  key={dish.id}
                  dish={dish}
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
            <div className="p-12 text-center glass-panel rounded-3xl space-y-3">
              <div className="w-12 h-12 rounded-2xl glass-pill text-[#b6f7c1] flex items-center justify-center mx-auto border border-[#b6f7c1]/30">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-white text-sm">
                No dishes match all active vetoes in {selectedCity.name}
              </h3>
              <p className="text-xs text-emerald-200/70 max-w-md mx-auto font-medium">
                Try loosening your protein/carb thresholds or reset filters to see all clean dishes.
              </p>
              <button
                id="empty-reset-filters-btn"
                onClick={resetFilters}
                className="px-5 py-2.5 rounded-xl glass-btn-plus text-[#0a2e1f] text-xs font-black transition-all cursor-pointer active:scale-95"
              >
                Reset Veto Filters
              </button>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* BOTTOM BANNER: 100% SEED-OIL-FREE & CLEAN FUEL. NUTRITION OPTIMIZED.     */}
        {/* ========================================================================= */}
        <footer className="p-6 sm:p-7 rounded-3xl glass-panel flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl glass-pill flex items-center justify-center text-[#b6f7c1] shrink-0 border border-[#b6f7c1]/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-white text-sm sm:text-base tracking-wider uppercase">
                100% SEED-OIL-FREE &bull; PURE ANIMAL &amp; FRUIT FATS
              </h4>
              <p className="text-xs text-[#b6f7c1] font-extrabold mt-0.5">
                CLEAN FUEL. NUTRITION OPTIMIZED.
              </p>
              <p className="text-[11px] text-emerald-300/70 mt-0.5">
                Every restaurant verified for authentic beef tallow, single-estate EVOO, and grass-fed ghee.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              id="footer-explore-map-btn"
              onClick={() => setIsMapOpen(true)}
              className="px-5 py-2.5 rounded-2xl glass-btn-plus text-[#0a2e1f] text-xs font-black transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
            >
              <Radar className="w-4 h-4 text-[#0a2e1f]" />
              <span>Explore Map</span>
            </button>
          </div>
        </footer>
      </main>

      {/* ========================================================================= */}
      {/* FLOATING MAP TRIGGER BUTTON                                               */}
      {/* ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          id="floating-map-toggle-btn"
          onClick={() => setIsMapOpen(true)}
          className="group px-5 py-3 rounded-full glass-panel text-white font-black text-xs shadow-2xl flex items-center gap-2.5 border border-white/25 hover:border-white/40 transition-all cursor-pointer active:scale-95"
          title="Slide out the interactive map from the left"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b6f7c1] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#52b788]" />
          </span>
          <span>Explore Map</span>
          <span className="px-1.5 py-0.5 rounded-md glass-pill-dark text-[#b6f7c1] text-[10px] font-black border border-[#b6f7c1]/30">
            {filteredDishes.length}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#b6f7c1] group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

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
