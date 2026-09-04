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
  Zap,
  CheckCircle2,
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
    benefitPostWorkout: false,
    benefitBrainFuel: false,
    benefitGutSoothers: false,
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
      benefitPostWorkout: false,
      benefitBrainFuel: false,
      benefitGutSoothers: false,
    });
    setSelectedCookingFat('all');
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

      // Benefit filter logic:
      if (filters.benefitPostWorkout && dish.protein < 40) {
        return false;
      }
      if (filters.benefitBrainFuel && !dish.isKeto && dish.carbs > 20) {
        return false;
      }
      if (filters.benefitGutSoothers && (!dish.isSeedOilFree || (!dish.isGlutenFree && !dish.isDairyFree))) {
        return false;
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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/25 selection:text-emerald-300">
      {/* ========================================================================= */}
      {/* THE MANIFESTO HEADER (STICKY AT TOP)                                       */}
      {/* "The Clean Zone: No seed oils. No hidden sugars. Just real food."         */}
      {/* ========================================================================= */}
      <div
        id="clean-zone-manifesto-header"
        className="sticky top-0 z-40 w-full bg-zinc-950/90 backdrop-blur-xl border-b border-emerald-500/20 py-2 sm:py-2.5 px-4 text-center transition-all shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-black tracking-wide text-zinc-100">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
          </span>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
            <span className="text-emerald-400 uppercase tracking-widest text-[11px] sm:text-xs font-black">
              The Clean Zone:
            </span>
            <span className="text-zinc-200">No seed oils.</span>
            <span className="text-zinc-600 hidden sm:inline">&bull;</span>
            <span className="text-zinc-200">No hidden sugars.</span>
            <span className="text-zinc-600 hidden sm:inline">&bull;</span>
            <span className="text-amber-400 font-extrabold">Just real food.</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE-OUT OASIS CARTOGRAPHY RADAR DRAWER                                  */}
      {/* ========================================================================= */}
      <div
        className={`fixed inset-0 z-45 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isMapOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMapOpen(false)}
      />

      <aside
        id="vicinity-map-drawer"
        className={`fixed inset-y-0 left-0 z-50 w-[calc(100%-48px)] sm:w-[540px] md:w-[600px] lg:w-[640px] max-w-[640px] bg-zinc-950 text-zinc-100 shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col border-r border-white/10 transition-transform duration-300 ease-out transform ${
          isMapOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-zinc-900/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shadow-md border border-emerald-500/30">
              <Radar className={`w-5 h-5 ${isRadarScanning ? 'animate-spin text-emerald-400' : ''}`} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-white text-base leading-tight">
                  The Oasis Map
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                {filteredDishes.length} Verified Clean Havens
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="close-map-drawer-btn"
              onClick={() => setIsMapOpen(false)}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-colors shadow-xs cursor-pointer active:scale-95"
              title="Close Map Slider"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Drawer Options & Filter Deck */}
        <div className="p-3.5 sm:px-5 bg-zinc-900/60 backdrop-blur-md border-b border-white/10 space-y-3 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <span className="text-[11px] font-black uppercase text-zinc-300 tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Oasis Radius:</span>
            </span>

            <div className="inline-flex rounded-xl bg-zinc-950 p-1 border border-white/10 self-start sm:self-auto gap-1">
              {[1, 3, 5, 10].map((radius) => (
                <button
                  key={radius}
                  onClick={() => setMapRadius(radius)}
                  className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                    mapRadius === radius
                      ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {radius} mi
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Map Area */}
        <div className="p-3 sm:p-4 flex-1 flex flex-col min-h-0 space-y-3 bg-zinc-950">
          <div className="relative flex-1 rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-2xl min-h-[300px]">
            <InteractiveMap
              dishes={filteredDishes}
              city={selectedCity}
              selectedDish={selectedDish}
              onSelectDish={(d) => setSelectedDish(d)}
              radiusMiles={mapRadius}
              isRadarScanning={isRadarScanning}
              onViewDetail={(d) => setDetailDish(d)}
            />
          </div>

          {/* Selected Dish Preview inside drawer */}
          {selectedDish ? (
            <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-white/10 text-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shadow-xl shrink-0 animate-in fade-in slide-in-from-bottom-2 duration-200">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 overflow-hidden shrink-0 border border-white/15 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedDish.image}
                    alt={selectedDish.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedDish.isSeedOilFree && (
                    <span className="absolute bottom-0 inset-x-0 bg-emerald-500 text-zinc-950 text-[8px] font-black uppercase text-center py-0.5">
                      Clean
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-black text-white truncate max-w-[180px]">
                      {selectedDish.restaurant}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 font-bold">
                      {selectedDish.cookingFat}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 font-semibold truncate mt-0.5">
                    {selectedDish.name} &bull; <span className="text-amber-400 font-black">${selectedDish.price.toFixed(2)}</span>
                  </p>
                  <p className="text-[10px] text-zinc-400 truncate">
                    {selectedDish.protein}g Muscle Protein &bull; {selectedDish.calories} Clean Calories
                  </p>
                </div>
              </div>

              <button
                id="map-view-dish-details-btn"
                onClick={() => setDetailDish(selectedDish)}
                className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black transition-all cursor-pointer shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-1.5 shrink-0 active:scale-95 hover:scale-[1.02]"
              >
                <span>Inspect Plate</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-400 text-xs flex items-center justify-between shrink-0">
              <span className="flex items-center gap-2 text-[11px] font-medium text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Tap any glowing beacon to preview clean kitchen</span>
              </span>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                {filteredDishes.length} Havens
              </span>
            </div>
          )}
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. TOP APP HEADER                                                         */}
      {/* ========================================================================= */}
      <header
        id="main-app-header"
        className="sticky top-[38px] sm:top-[42px] z-30 px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 bg-zinc-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
          {/* Top/Left Brand Identity */}
          <div className="flex items-center justify-between w-full sm:w-auto">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] shrink-0">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-base sm:text-lg lg:text-xl tracking-tight text-white leading-none">
                    Healthy Vicinity
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 text-[10px] font-black tracking-wider uppercase border border-emerald-500/50 flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>VERIFIED</span>
                  </span>
                </div>
                <p className="hidden sm:flex text-zinc-400 font-semibold text-[11px] sm:text-xs mt-0.5 items-center gap-1.5">
                  <span>Exclusive Biohacker Health Zone &bull; Certified Pure Fats</span>
                </p>
              </div>
            </div>

            {/* Mobile Scan Button */}
            <div className="flex sm:hidden items-center gap-1.5 shrink-0">
              <button
                id="mobile-header-scan-btn"
                onClick={() => setIsScannerOpen(true)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-500 text-zinc-950 text-xs font-black shadow-lg shadow-emerald-500/25 active:scale-95"
              >
                <ScanLine className="w-3.5 h-3.5" />
                <span>Scan</span>
              </button>
            </div>
          </div>

          {/* Controls: City Dropdown, Map Radar, and Desktop AI Scanner */}
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            {/* City Dropdown */}
            <div className="relative flex-1 sm:flex-initial min-w-0">
              <select
                id="header-city-selector"
                suppressHydrationWarning
                value={selectedReelCity}
                onChange={(e) => handleCitySelect(e.target.value as ReelCity)}
                className="w-full sm:w-auto appearance-none bg-zinc-900/90 hover:bg-zinc-800 text-white font-black text-xs pl-3 pr-7 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/60 cursor-pointer transition-all shadow-inner truncate"
              >
                {CITIES_DROPDOWN.map((c) => (
                  <option key={c.id} value={c.id} className="bg-zinc-950 text-white">
                    📍 {c.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-emerald-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Oasis Map Radar Button */}
            <button
              id="header-open-map-btn"
              onClick={() => setIsMapOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white text-xs font-black border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-lg cursor-pointer group active:scale-95 whitespace-nowrap hover:scale-[1.02]"
              title="Open Oasis Map"
            >
              <Radar className="w-4 h-4 text-emerald-400 group-hover:rotate-45 transition-transform shrink-0" />
              <span>Oasis Map</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-black text-[10px] border border-emerald-500/40">
                {filteredDishes.length}
              </span>
            </button>

            {/* Desktop AI Menu Scanner CTA Button */}
            <button
              id="open-menu-scanner-btn"
              onClick={() => setIsScannerOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black shadow-lg shadow-emerald-500/30 transition-all duration-300 cursor-pointer group active:scale-95 shrink-0 hover:scale-[1.02]"
            >
              <ScanLine className="w-4 h-4 text-zinc-950 group-hover:rotate-12 transition-transform" />
              <span>AI Menu Scanner</span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MAIN VIEWPORT CONTENT                                                     */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-7 flex-1 pb-24 sm:pb-8">
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
        {/* BIOHACKER HERO SPOTLIGHT                                                  */}
        {/* ========================================================================= */}
        <section className="relative rounded-3xl bg-white/5 backdrop-blur-md text-white p-6 sm:p-9 overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 text-[10px] sm:text-[11px] font-black uppercase tracking-wider border border-emerald-500/50 max-w-full leading-snug shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>The Safe Oasis &bull; Strict Clean-Ingredient Verification</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white">
              THE CLEAN ZONE. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
                ZERO TOXIC OILS.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed max-w-xl">
              Absolute relief for health-conscious diners. Every single meal in this zone has been forensically vetted to use only{' '}
              <strong className="text-emerald-300">100% grass-fed beef tallow, single-estate EVOO</strong>, and{' '}
              <strong className="text-amber-300">pasture ghee</strong> across {selectedCity.name}.
            </p>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                id="hero-open-map-btn"
                onClick={() => setIsMapOpen(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-emerald-500/30 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2 group hover:scale-[1.02]"
              >
                <Radar className="w-4 h-4 text-zinc-950 group-hover:rotate-45 transition-transform shrink-0" />
                <span>Explore Oasis Map</span>
                <ChevronRight className="w-4 h-4 text-zinc-950 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </button>

              <button
                onClick={() => setIsScannerOpen(true)}
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-bold text-xs sm:text-sm transition-all duration-300 border border-white/10 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <ScanLine className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Forensic Menu OCR</span>
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BENEFIT-DRIVEN BENTO FILTERS MATRIX                                       */}
        {/* ========================================================================= */}
        <section aria-label="Benefit-Driven Filters">
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-base sm:text-xl font-black text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Verified Clean Dishes in {selectedCity.name}, {selectedCity.state}</span>
              </h2>
              <span className="text-xs font-black text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/40 shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                {filteredDishes.length} Clean Havens
              </span>
            </div>

            <button
              onClick={() => setIsMapOpen(true)}
              className="text-xs font-extrabold text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-auto shrink-0 transition-colors"
            >
              <span>View in Oasis Map</span>
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
            <div className="p-12 text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl space-y-3 shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-emerald-400 flex items-center justify-center mx-auto border border-white/10">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-white text-base">
                No dishes match all active vetoes in {selectedCity.name}
              </h3>
              <p className="text-xs text-zinc-400 max-w-md mx-auto font-medium">
                Try toggling off a benefit filter or reset thresholds to explore all verified clean fuel in {selectedCity.name}.
              </p>
              <button
                id="empty-reset-filters-btn"
                onClick={resetFilters}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black transition-all duration-300 cursor-pointer active:scale-95 shadow-lg shadow-emerald-500/25 hover:scale-[1.02]"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* BOTTOM BANNER: THE CLEAN ZONE MANIFESTO                                   */}
        {/* ========================================================================= */}
        <footer className="p-5 sm:p-7 rounded-3xl bg-white/5 backdrop-blur-md text-white border border-white/10 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-950/90 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-black text-white text-xs sm:text-base tracking-wider uppercase flex items-center gap-2">
                <span>The Clean Zone Manifesto</span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  100% Vetted
                </span>
              </h4>
              <p className="text-xs text-emerald-400 font-extrabold mt-0.5">
                No seed oils. No hidden sugars. Just real food.
              </p>
              <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                Independent kitchens strictly verified for pure beef tallow, cold-pressed olive oil, and pasture-raised ghee.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              id="footer-explore-map-btn"
              onClick={() => setIsMapOpen(true)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/25 hover:scale-[1.02]"
            >
              <Radar className="w-4 h-4 text-zinc-950" />
              <span>Launch Oasis Map</span>
            </button>
          </div>
        </footer>
      </main>

      {/* ========================================================================= */}
      {/* FLOATING MAP TRIGGER BUTTON                                               */}
      {/* ========================================================================= */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center gap-2">
        <button
          id="floating-map-toggle-btn"
          onClick={() => setIsMapOpen(true)}
          className="group px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-white font-black text-xs shadow-2xl flex items-center gap-2 sm:gap-2.5 border border-white/15 transition-all duration-300 cursor-pointer active:scale-95 hover:scale-[1.02] backdrop-blur-md hover:border-emerald-500/50"
          title="Slide out the interactive map from the left"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
          </span>
          <span>Oasis Map</span>
          <span className="px-1.5 py-0.5 rounded-md bg-emerald-950 text-emerald-300 text-[10px] font-black border border-emerald-500/40">
            {filteredDishes.length}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
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
