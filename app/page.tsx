'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
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
  SlidersHorizontal,
  ChevronRight,
  ArrowRight,
  Zap,
  Beef,
  WheatOff,
  CheckCircle2,
  Navigation,
} from 'lucide-react';

export default function HomePage() {
  const [dishes, setDishes] = useState<Dish[]>(INITIAL_DISHES);
  const [selectedCity, setSelectedCity] = useState<CityLocation>(CITY_LOCATIONS[0]);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(INITIAL_DISHES[0]);
  const [detailDish, setDetailDish] = useState<Dish | null>(null);
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  // Map Drawer & Radius Controls
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mapRadius, setMapRadius] = useState<number>(5); // 1, 3, 5, 10 miles
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

  // When city changes, auto-select first dish in that city
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
    setSelectedCookingFat('all');
  };

  // Quick Vibe Presets for high interactivity
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

  // Trigger temporary radar pulse
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

  const allCityDishesCount = dishes.filter((d) => d.city === selectedCity.name).length;

  return (
    <div className="min-h-screen w-full bg-[#F2F6F3] font-sans text-stone-900 relative selection:bg-[#2D6A4F]/20 selection:text-[#1B4332]">
      {/* ========================================================================= */}
      {/* 1. SLIDE-OUT LEFT MAP DRAWER (Interactive Vicinity Radar & Controls)     */}
      {/* ========================================================================= */}
      {/* Dimmed backdrop overlay when map drawer is open */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-xs transition-opacity duration-300 ${
          isMapOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMapOpen(false)}
      />

      {/* Drawer Panel sliding from left */}
      <aside
        id="vicinity-map-drawer"
        className={`fixed inset-y-0 left-0 z-50 w-full sm:w-[500px] md:w-[560px] lg:w-[620px] bg-white shadow-[12px_0_40px_rgba(0,0,0,0.18)] flex flex-col border-r border-[#DCE6DE] transition-transform duration-300 ease-out transform ${
          isMapOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-[#F8FAF8] border-b border-[#DCE6DE] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#2D6A4F] text-white flex items-center justify-center shadow-md shadow-[#2D6A4F]/20">
              <Radar className={`w-5 h-5 ${isRadarScanning ? 'animate-spin text-[#A7D7B5]' : ''}`} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-stone-900 text-base leading-tight">
                  Vicinity Radar
                </h3>
                <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-ping" />
              </div>
              <p className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                {filteredDishes.length} Verified Kitchens in Range
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* City Selector */}
            <div className="relative">
              <select
                id="drawer-city-selector"
                value={selectedCity.name}
                onChange={(e) => {
                  const found = CITY_LOCATIONS.find((c) => c.name === e.target.value);
                  if (found) handleCityChange(found);
                }}
                className="appearance-none bg-white hover:bg-stone-50 text-stone-800 font-extrabold text-xs pl-3 pr-7 py-2 rounded-xl border border-[#DCE6DE] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/25 cursor-pointer transition-all shadow-xs"
              >
                {CITY_LOCATIONS.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Close Drawer Button */}
            <button
              id="close-map-drawer-btn"
              onClick={() => setIsMapOpen(false)}
              className="p-2 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-[#DCE6DE] transition-colors shadow-xs cursor-pointer active:scale-95"
              title="Close Map Slider"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Drawer Options & Filter Deck */}
        <div className="p-3.5 bg-white border-b border-[#DCE6DE] space-y-3 shrink-0">
          {/* Radius Selector Options */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-black uppercase text-stone-500 tracking-wider flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Search Perimeter:</span>
            </span>

            <div className="inline-flex rounded-xl bg-[#F2F6F3] p-1 border border-[#DCE6DE]">
              {[1, 3, 5, 10].map((radius) => (
                <button
                  key={radius}
                  onClick={() => setMapRadius(radius)}
                  className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                    mapRadius === radius
                      ? 'bg-[#2D6A4F] text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {radius} mi
                </button>
              ))}
            </div>

            {/* Radar Scan Action */}
            <button
              id="drawer-radar-scan-btn"
              onClick={triggerRadarScan}
              disabled={isRadarScanning}
              className="px-3 py-1.5 rounded-xl bg-[#1C2E24] hover:bg-[#14231B] text-[#A7D7B5] text-xs font-extrabold transition-all shadow-xs flex items-center gap-1.5 active:scale-95 cursor-pointer disabled:opacity-50 shrink-0"
              title="Trigger animated radar sweep"
            >
              <Radar className={`w-3.5 h-3.5 text-[#A7D7B5] ${isRadarScanning ? 'animate-spin' : ''}`} />
              <span>{isRadarScanning ? 'Sweeping...' : 'Radar Sweep'}</span>
            </button>
          </div>

          {/* Quick Cooking Fat Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider shrink-0 mr-1">
              Fat Type:
            </span>
            {[
              { id: 'all', label: 'All Verified Fats' },
              { id: 'Tallow', label: '🥩 Beef Tallow' },
              { id: 'Olive Oil', label: '🫒 Cold-Pressed EVOO' },
              { id: 'Ghee', label: '🧈 Grass-Fed Ghee' },
              { id: 'Duck Fat', label: '🦆 Duck Fat' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCookingFat(tab.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  selectedCookingFat === tab.id
                    ? 'bg-[#E8F3EC] text-[#1B4332] border border-[#2D6A4F]/40 shadow-xs'
                    : 'bg-[#F9FBF9] text-stone-600 hover:bg-stone-100 border border-[#DCE6DE]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Map Canvas Component inside Left Slider */}
        <div className="flex-1 relative overflow-hidden bg-[#EBF1EC]">
          <InteractiveMap
            dishes={filteredDishes}
            selectedDish={selectedDish}
            onSelectDish={(dish) => {
              setSelectedDish(dish);
              setDetailDish(dish);
            }}
            city={selectedCity}
            radiusMiles={mapRadius}
            isRadarScanning={isRadarScanning}
          />
        </div>

        {/* Selected Dish Drawer Bottom Bar */}
        {selectedDish && (
          <div className="p-4 bg-white border-t border-[#DCE6DE] shrink-0 flex items-center justify-between gap-3 shadow-lg">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#DCE6DE]">
              <Image
                src={selectedDish.image}
                alt={selectedDish.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-extrabold uppercase text-[#2D6A4F] tracking-wider">
                  Target Pin
                </span>
                <span className="text-[10px] font-bold text-stone-400">• {selectedDish.calories} kcal</span>
              </div>
              <h4 className="text-xs font-black text-stone-900 truncate leading-tight">
                {selectedDish.name}
              </h4>
              <p className="text-[11px] text-stone-500 truncate">
                {selectedDish.restaurant} • <strong className="text-[#2D6A4F] font-bold">{selectedDish.protein}g Protein</strong>
              </p>
            </div>
            <button
              id="drawer-inspect-dish-btn"
              onClick={() => setDetailDish(selectedDish)}
              className="px-4 py-2 rounded-xl bg-[#2D6A4F] hover:bg-[#22543D] text-white text-xs font-black shrink-0 transition-all cursor-pointer shadow-md shadow-[#2D6A4F]/20 active:scale-95"
            >
              Inspect Dish
            </button>
          </div>
        )}
      </aside>

      {/* ========================================================================= */}
      {/* 2. EXPANSIVE FULL-WIDTH LANDING PAGE EXPERIENCE                         */}
      {/* ========================================================================= */}
      {/* Top Main Navigation */}
      <header
        id="main-app-header"
        className="sticky top-0 z-30 px-6 py-4 bg-[#F8FAF8]/95 backdrop-blur-md border-b border-[#DCE6DE] flex flex-wrap items-center justify-between gap-4"
      >
        {/* Left Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#2D6A4F] flex items-center justify-center text-white shadow-md shadow-[#2D6A4F]/25 shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-lg md:text-xl tracking-tight text-stone-900 leading-none">
                Healthy Vicinity
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#E8F3EC] text-[#1B4332] text-[10px] font-black tracking-wider uppercase border border-[#B7E4C7]">
                Live
              </span>
            </div>
            <p className="text-stone-500 font-semibold text-xs mt-0.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-pulse" />
              <span>Bio-Individual Dining Engine &bull; Zero Seed Oils</span>
            </p>
          </div>
        </div>

        {/* Right Header Navigation Actions */}
        <div className="flex items-center gap-3">
          {/* City Dropdown Pill */}
          <div className="relative">
            <select
              id="header-city-selector"
              value={selectedCity.name}
              onChange={(e) => {
                const found = CITY_LOCATIONS.find((c) => c.name === e.target.value);
                if (found) handleCityChange(found);
              }}
              className="appearance-none bg-white hover:bg-stone-50 text-stone-800 font-extrabold text-xs pl-3.5 pr-8 py-2 rounded-2xl border border-[#DCE6DE] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/25 cursor-pointer transition-all shadow-xs"
            >
              {CITY_LOCATIONS.map((c) => (
                <option key={c.name} value={c.name}>
                  📍 {c.name}, {c.state}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Interactive Map Slider Trigger Button */}
          <button
            id="header-open-map-btn"
            onClick={() => setIsMapOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-stone-100 text-stone-900 text-xs font-black border border-[#DCE6DE] hover:border-[#2D6A4F] transition-all shadow-xs cursor-pointer group active:scale-95"
            title="Slide out the interactive cartography radar from the left"
          >
            <Radar className="w-4 h-4 text-[#2D6A4F] group-hover:rotate-45 transition-transform" />
            <span>Map Radar</span>
            <span className="px-1.5 py-0.5 rounded-md bg-[#2D6A4F] text-white font-black text-[10px]">
              {filteredDishes.length}
            </span>
          </button>

          {/* AI Menu Scanner CTA Button */}
          <button
            id="open-menu-scanner-btn"
            onClick={() => setIsScannerOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#2D6A4F] hover:bg-[#22543D] text-white text-xs font-black transition-all shadow-md shadow-[#2D6A4F]/20 cursor-pointer group active:scale-95"
          >
            <ScanLine className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">AI Menu Scanner</span>
            <span className="sm:hidden">Scan</span>
          </button>
        </div>
      </header>

      {/* Main Landing Page Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-7">
        {/* ========================================================================= */}
        {/* INSTAGRAM-STYLE KITCHEN REELS / PROOF SECTION (POPS OUT ON TOP)          */}
        {/* ========================================================================= */}
        <ReelsBar onOpenMap={() => setIsMapOpen(true)} />

        {/* ========================================================================= */}
        {/* Hero Spotlight: Refined Botanical Green Energy + Interactive Presets      */}
        {/* ========================================================================= */}
        <section className="relative rounded-3xl bg-gradient-to-r from-[#0C2419] via-[#143827] to-[#1B2D23] text-white p-6 sm:p-10 overflow-hidden shadow-2xl border border-[#2D6A4F]/40">
          {/* Ambient Lighting & Botanical Glows */}
          <div className="absolute -right-16 -bottom-16 w-96 h-96 bg-[#2D6A4F]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#52B788]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            {/* Guarantee Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2D6A4F]/30 backdrop-blur-md text-[11px] font-black text-[#A7D7B5] uppercase tracking-wider border border-[#52B788]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#A7D7B5]" />
              <span>100% Seed-Oil-Free &bull; Pure Animal &amp; Fruit Fats</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white">
              CLEAN FUEL. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D8F3DC] to-[#A7D7B5]">
                NUTRITION OPTIMIZED.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#D8EADB]/90 font-medium leading-relaxed max-w-xl">
              Dine out without inflammatory industrial oils. Curating independent kitchens
              cooking exclusively in <strong>beef tallow, cold-pressed extra virgin olive oil</strong>, and <strong>grass-fed ghee</strong> across {selectedCity.name}.
            </p>

            {/* Interactive Vibe Quick-Presets */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#A7D7B5]/90 block">
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
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#2D6A4F]/50 hover:border-[#A7D7B5] text-white text-xs font-bold transition-all border border-white/15 backdrop-blur-md active:scale-95 cursor-pointer shadow-xs"
                  >
                    {vibe.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Button to open Left Map Slider */}
              <button
                id="hero-open-map-btn"
                onClick={() => setIsMapOpen(true)}
                className="px-6 py-3.5 rounded-2xl bg-[#2D6A4F] hover:bg-[#24583C] text-white font-black text-xs sm:text-sm transition-all shadow-xl shadow-[#2D6A4F]/30 active:scale-95 cursor-pointer inline-flex items-center gap-2 group border border-[#52B788]/40"
              >
                <Radar className="w-4 h-4 text-[#A7D7B5] group-hover:rotate-45 transition-transform" />
                <span>Slide Open Vicinity Map</span>
                <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => setIsScannerOpen(true)}
                className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-black text-xs sm:text-sm transition-all border border-white/20 backdrop-blur-md active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <ScanLine className="w-4 h-4 text-[#A7D7B5]" />
                <span>Scan Physical Menu</span>
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* Bento Filter Matrix: Squircles & Macro Sliders                            */}
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
        {/* Clean Dishes Grid Feed                                                    */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-stone-900 flex items-center gap-2.5">
              <Flame className="w-5 h-5 text-[#2D6A4F]" />
              <span>Verified Clean Dishes in {selectedCity.name}, {selectedCity.state}</span>
              <span className="text-xs font-black text-[#1B4332] bg-[#E8F3EC] px-2.5 py-0.5 rounded-full border border-[#C8E2D1]">
                {filteredDishes.length} Matches
              </span>
            </h2>

            {/* Quick Map Toggle button */}
            <button
              onClick={() => setIsMapOpen(true)}
              className="text-xs font-extrabold text-[#2D6A4F] hover:text-[#1B4332] flex items-center gap-1 cursor-pointer"
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
                  onSelect={(d) => {
                    setSelectedDish(d);
                  }}
                  onOpenDetails={(d) => {
                    setSelectedDish(d);
                    setDetailDish(d);
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-white rounded-3xl border border-[#DCE6DE] space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#EBF5EF] text-[#2D6A4F] flex items-center justify-center mx-auto border border-[#C5DDCB]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-stone-900 text-sm">
                No dishes match all active vetoes in {selectedCity.name}
              </h3>
              <p className="text-xs text-stone-500 max-w-md mx-auto font-medium">
                Try loosening your protein/carb thresholds or reset filters to see all clean dishes.
              </p>
              <button
                id="empty-reset-filters-btn"
                onClick={resetFilters}
                className="px-5 py-2.5 rounded-xl bg-[#2D6A4F] hover:bg-[#22543D] text-white text-xs font-extrabold transition-all cursor-pointer shadow-md shadow-[#2D6A4F]/20 active:scale-95"
              >
                Reset Veto Filters
              </button>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* Vicinity Guarantee & Audit Badge                                         */}
        {/* ========================================================================= */}
        <footer className="p-5 sm:p-6 rounded-3xl bg-white border border-[#DCE6DE] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#E8F3EC] flex items-center justify-center text-[#2D6A4F] shrink-0 border border-[#C8E2D1]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-stone-900 text-sm sm:text-base">
                100% VICINITY SEED-OIL AUDIT
              </h4>
              <p className="text-xs text-stone-500 font-medium">
                Every restaurant listed is manually vetted for authentic grass-fed butter, cold-pressed EVOO, and rendered beef tallow.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsMapOpen(true)}
              className="px-4 py-2.5 rounded-full bg-[#F2F6F3] hover:bg-stone-100 text-stone-800 text-xs font-black border border-[#DCE6DE] transition-all cursor-pointer shadow-xs active:scale-95"
            >
              Explore Map Radar
            </button>
            <button
              onClick={() => setIsScannerOpen(true)}
              className="px-4 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-black transition-all cursor-pointer shadow-xs active:scale-95"
            >
              Verify A Menu
            </button>
          </div>
        </footer>
      </main>

      {/* ========================================================================= */}
      {/* 3. FLOATING STICKY MAP TRIGGER (Summons Left Drawer from Anywhere)        */}
      {/* ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          id="floating-map-toggle-btn"
          onClick={() => setIsMapOpen(true)}
          className="group px-5 py-3 rounded-full bg-slate-950 hover:bg-stone-900 text-white font-black text-xs shadow-2xl flex items-center gap-2.5 border border-[#52B788]/40 hover:border-[#A7D7B5] transition-all cursor-pointer active:scale-95"
          title="Slide out the interactive map from the left"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52B788] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2D6A4F]" />
          </span>
          <span>Explore Map</span>
          <span className="px-1.5 py-0.5 rounded-md bg-[#2D6A4F] text-white text-[10px] font-black">
            {filteredDishes.length}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#A7D7B5] group-hover:translate-x-0.5 transition-transform" />
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


