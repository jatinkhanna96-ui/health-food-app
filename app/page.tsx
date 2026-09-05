'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
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
  List,
  ListFilter,
  Map as MapIcon,
  Columns,
  Search,
  ArrowUpDown,
} from 'lucide-react';

const CITIES_DROPDOWN: { id: ReelCity; label: string; cityName: string; state: string }[] = [
  { id: 'Austin, TX', label: 'Austin, TX', cityName: 'Austin', state: 'TX' },
  { id: 'New York, NY', label: 'New York, NY', cityName: 'New York', state: 'NY' },
  { id: 'Los Angeles, CA', label: 'Los Angeles, CA', cityName: 'Los Angeles', state: 'CA' },
  { id: 'San Francisco, CA', label: 'San Francisco, CA', cityName: 'San Francisco', state: 'CA' },
  { id: 'Miami, FL', label: 'Miami, FL', cityName: 'Miami', state: 'FL' },
  { id: 'Chicago, IL', label: 'Chicago, IL', cityName: 'Chicago', state: 'IL' },
  { id: 'Dallas, TX', label: 'Dallas, TX', cityName: 'Dallas', state: 'TX' },
  { id: 'Houston, TX', label: 'Houston, TX', cityName: 'Houston', state: 'TX' },
  { id: 'Phoenix, AZ', label: 'Phoenix, AZ', cityName: 'Phoenix', state: 'AZ' },
  { id: 'Scottsdale, AZ', label: 'Scottsdale, AZ', cityName: 'Scottsdale', state: 'AZ' },
  { id: 'San Diego, CA', label: 'San Diego, CA', cityName: 'San Diego', state: 'CA' },
  { id: 'Boston, MA', label: 'Boston, MA', cityName: 'Boston', state: 'MA' },
  { id: 'Denver, CO', label: 'Denver, CO', cityName: 'Denver', state: 'CO' },
  { id: 'Seattle, WA', label: 'Seattle, WA', cityName: 'Seattle', state: 'WA' },
  { id: 'Atlanta, GA', label: 'Atlanta, GA', cityName: 'Atlanta', state: 'GA' },
  { id: 'Nashville, TN', label: 'Nashville, TN', cityName: 'Nashville', state: 'TN' },
  { id: 'Washington, DC', label: 'Washington, DC', cityName: 'Washington', state: 'DC' },
  { id: 'Portland, OR', label: 'Portland, OR', cityName: 'Portland', state: 'OR' },
  { id: 'Charlotte, NC', label: 'Charlotte, NC', cityName: 'Charlotte', state: 'NC' },
  { id: 'Tampa, FL', label: 'Tampa, FL', cityName: 'Tampa', state: 'FL' },
  { id: 'Orlando, FL', label: 'Orlando, FL', cityName: 'Orlando', state: 'FL' },
  { id: 'Boulder, CO', label: 'Boulder, CO', cityName: 'Boulder', state: 'CO' },
  { id: 'Columbus, OH', label: 'Columbus, OH', cityName: 'Columbus', state: 'OH' },
  { id: 'Salt Lake City, UT', label: 'Salt Lake City, UT', cityName: 'Salt Lake City', state: 'UT' },
  { id: 'Minneapolis, MN', label: 'Minneapolis, MN', cityName: 'Minneapolis', state: 'MN' },
  { id: 'Indianapolis, IN', label: 'Indianapolis, IN', cityName: 'Indianapolis', state: 'IN' },
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

  // Map Drawer, Radius & View Controls
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mapRadius, setMapRadius] = useState<number>(5);
  const [mapViewMode, setMapViewMode] = useState<'map' | 'list' | 'split'>('map');
  const [mapDishSearch, setMapDishSearch] = useState('');
  const [mapSortBy, setMapSortBy] = useState<'distance' | 'protein' | 'calories' | 'price'>('distance');
  const [selectedCookingFat, setSelectedCookingFat] = useState<string>('all');
  const [isRadarScanning, setIsRadarScanning] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    search: '',
    seedOilFree: false,
    grassFed: false,
    glutenFree: false,
    keto: false,
    dairyFree: false,
    highProtein: false,
    lowCalorie: false,
    lowSugar: false,
    lowCarb: false,
    highFiber: false,
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
      highProtein: false,
      lowCalorie: false,
      lowSugar: false,
      lowCarb: false,
      highFiber: false,
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

      // Health goals & diet chips (Section 3):
      if (filters.highProtein && dish.protein < 35) return false;
      if (filters.lowCalorie && dish.calories > 550) return false;
      if (filters.lowSugar && !dish.isKeto && dish.carbs > 25) return false;
      if (filters.lowCarb && dish.carbs > 25) return false;
      if (filters.highFiber && dish.fiber < 6) return false;

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

  // Haversine distance calculator for dishes in vicinity
  const calculateDistance = useCallback(
    (dishLat: number, dishLng: number) => {
      const R = 3958.8; // Earth's radius in miles
      const dLat = ((dishLat - selectedCity.lat) * Math.PI) / 180;
      const dLon = ((dishLng - selectedCity.lng) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((selectedCity.lat * Math.PI) / 180) *
          Math.cos((dishLat * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return Math.round(R * c * 10) / 10;
    },
    [selectedCity.lat, selectedCity.lng]
  );

  // Filtered and sorted dishes specifically for the Map Dish List
  const mapDishesWithDistance = useMemo(() => {
    let list = filteredDishes.map((dish) => ({
      ...dish,
      distanceMiles: calculateDistance(dish.coordinates.lat, dish.coordinates.lng),
    }));

    if (mapDishSearch.trim()) {
      const q = mapDishSearch.toLowerCase().trim();
      list = list.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.restaurant.toLowerCase().includes(q) ||
          d.cookingFat.toLowerCase().includes(q) ||
          d.dietTags.some((t) => t.toLowerCase().includes(q)) ||
          d.ingredients.some((ing) => ing.toLowerCase().includes(q))
      );
    }

    if (mapSortBy === 'distance') {
      list.sort((a, b) => a.distanceMiles - b.distanceMiles);
    } else if (mapSortBy === 'protein') {
      list.sort((a, b) => b.protein - a.protein);
    } else if (mapSortBy === 'calories') {
      list.sort((a, b) => a.calories - b.calories);
    } else if (mapSortBy === 'price') {
      list.sort((a, b) => a.price - b.price);
    }

    return list;
  }, [filteredDishes, calculateDistance, mapDishSearch, mapSortBy]);

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
    <div className="min-h-screen bg-[#07130F] text-[#F5F7F3] flex flex-col font-sans selection:bg-[#35E27F]/25 selection:text-[#35E27F] relative overflow-x-hidden">
      {/* Subtle Radial Glows */}
      <div className="fixed top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#35E27F]/[0.04] rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-[#123D2A]/30 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* ========================================================================= */}
      {/* MISSION & VISION ANNOUNCEMENT BAR                                          */}
      {/* ========================================================================= */}
      <div
        id="mission-vision-announcement-header"
        className="relative w-full bg-[#0B1A14] border-b border-[#1B3B2F] py-2 sm:py-2.5 px-3.5 sm:px-4 transition-all"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35E27F] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#35E27F]" />
            </span>
            <span className="text-[#35E27F] uppercase tracking-wider text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full bg-[#123D2A] border border-[#1B3B2F] shrink-0">
              Our Vision
            </span>
            <p className="text-[#F5F7F3] font-medium truncate text-[11px] sm:text-[13px]">
              Make every meal a choice you can feel good about.
            </p>
          </div>
          <button
            onClick={() => {
              const elem = document.getElementById('mission-section');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#35E27F] hover:text-[#44eb8c] hover:underline cursor-pointer shrink-0 transition-colors"
          >
            <span>Our Mission</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE-OUT NEARBY FOOD MAP DRAWER                                          */}
      {/* ========================================================================= */}
      <div
        className={`fixed inset-0 z-45 bg-black/70 backdrop-blur-xs transition-opacity duration-300 ${
          isMapOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMapOpen(false)}
      />

      <aside
        id="vicinity-map-drawer"
        className={`fixed inset-y-0 left-0 z-50 w-[calc(100%-24px)] sm:w-[580px] md:w-[650px] lg:w-[740px] max-w-[760px] bg-[#0B1A14] text-[#F5F7F3] shadow-2xl flex flex-col border-r border-[#1B3B2F] transition-transform duration-300 ease-out transform ${
          isMapOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-[#07130F] border-b border-[#1B3B2F] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F231B] text-[#35E27F] flex items-center justify-center shadow-xs border border-[#1B3B2F]">
              <Radar className={`w-5 h-5 ${isRadarScanning ? 'animate-spin text-[#35E27F]' : ''}`} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-[#F5F7F3] text-base leading-tight">
                  Nearby Food Map &amp; Directory
                </h3>
                <span className="w-1.5 h-1.5 rounded-full bg-[#35E27F] animate-ping" />
              </div>
              <p className="text-[11px] font-medium text-[#35E27F] tracking-wide">
                {filteredDishes.length} options nearby in {selectedCity.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="close-map-drawer-btn"
              onClick={() => setIsMapOpen(false)}
              className="p-2 rounded-xl bg-[#0F231B] hover:bg-[#142C23] text-[#A8B5AE] hover:text-[#F5F7F3] border border-[#1B3B2F] transition-colors cursor-pointer active:scale-95"
              title="Close Map Slider"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Drawer Controls: View Switcher & Radius Filter */}
        <div className="p-3 sm:px-5 bg-[#07130F]/60 border-b border-[#1B3B2F] space-y-2.5 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            {/* View Mode Segmented Controls */}
            <div className="inline-flex rounded-xl bg-[#0F231B] p-1 border border-[#1B3B2F] self-start sm:self-auto gap-1">
              <button
                id="map-mode-radar-btn"
                onClick={() => setMapViewMode('map')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  mapViewMode === 'map'
                    ? 'bg-[#35E27F] text-[#07130F] shadow-xs'
                    : 'text-[#A8B5AE] hover:text-[#F5F7F3]'
                }`}
                title="View interactive radar map"
              >
                <MapIcon className="w-3.5 h-3.5" />
                <span>Radar Map</span>
              </button>

              <button
                id="map-mode-dish-list-btn"
                onClick={() => setMapViewMode('list')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  mapViewMode === 'list'
                    ? 'bg-[#35E27F] text-[#07130F] shadow-xs'
                    : 'text-[#A8B5AE] hover:text-[#F5F7F3]'
                }`}
                title="View dishes list in this radius"
              >
                <List className="w-3.5 h-3.5" />
                <span>Dish List</span>
                <span
                  className={`px-1.5 py-0.2 rounded-md text-[10px] font-bold ${
                    mapViewMode === 'list' ? 'bg-[#07130F] text-[#35E27F]' : 'bg-[#123D2A] text-[#35E27F]'
                  }`}
                >
                  {filteredDishes.length}
                </span>
              </button>

              <button
                id="map-mode-split-btn"
                onClick={() => setMapViewMode('split')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  mapViewMode === 'split'
                    ? 'bg-[#35E27F] text-[#07130F] shadow-xs'
                    : 'text-[#A8B5AE] hover:text-[#F5F7F3]'
                }`}
                title="View Map and Dish List side-by-side"
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Split</span>
              </button>
            </div>

            {/* Radius Options */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase text-[#A8B5AE] tracking-wider flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#35E27F] shrink-0" />
                <span className="hidden sm:inline">Radius:</span>
              </span>

              <div className="inline-flex rounded-xl bg-[#0F231B] p-1 border border-[#1B3B2F] gap-1">
                {[1, 3, 5, 10].map((radius) => (
                  <button
                    key={radius}
                    onClick={() => setMapRadius(radius)}
                    className={`px-2.5 py-0.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      mapRadius === radius
                        ? 'bg-[#35E27F] text-[#07130F]'
                        : 'text-[#A8B5AE] hover:text-[#F5F7F3]'
                    }`}
                  >
                    {radius}mi
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Drawer Body - Switches according to mapViewMode */}
        {mapViewMode === 'map' && (
          <div className="p-3 sm:p-4 flex-1 flex flex-col min-h-0 space-y-3 bg-[#07130F]">
            <div className="relative flex-1 rounded-2xl border border-[#1B3B2F] overflow-hidden shadow-lg min-h-[300px]">
              <InteractiveMap
                dishes={filteredDishes}
                city={selectedCity}
                selectedDish={selectedDish}
                onSelectDish={(d) => setSelectedDish(d)}
                radiusMiles={mapRadius}
                isRadarScanning={isRadarScanning}
                onViewDetail={(d) => setDetailDish(d)}
                onToggleDishList={() => setMapViewMode('list')}
                isDishListActive={false}
              />
            </div>

            {/* Selected Dish Preview inside drawer */}
            {selectedDish ? (
              <div className="p-3.5 rounded-2xl bg-[#0B1A14] border border-[#1B3B2F] text-[#F5F7F3] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shadow-md shrink-0 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#0F231B] overflow-hidden shrink-0 border border-[#1B3B2F] relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selectedDish.image}
                      alt={selectedDish.name}
                      className="w-full h-full object-cover"
                    />
                    {selectedDish.isSeedOilFree && (
                      <span className="absolute bottom-0 inset-x-0 bg-[#35E27F] text-[#07130F] text-[8px] font-bold uppercase text-center py-0.5">
                        Clean
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-bold text-[#F5F7F3] truncate max-w-[180px]">
                        {selectedDish.restaurant}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#123D2A] text-[#35E27F] border border-[#1B3B2F] font-semibold">
                        {selectedDish.cookingFat}
                      </span>
                    </div>
                    <p className="text-xs text-[#A8B5AE] font-semibold truncate mt-0.5">
                      {selectedDish.name} &bull; <span className="text-[#35E27F] font-bold">${selectedDish.price.toFixed(2)}</span>
                    </p>
                    <p className="text-[10px] text-[#A8B5AE] truncate">
                      {selectedDish.protein}g Protein &bull; {selectedDish.calories} kcal
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setMapViewMode('list')}
                    className="px-3 py-2 rounded-xl bg-[#0F231B] hover:bg-[#142C23] text-[#F5F7F3] text-xs font-semibold border border-[#1B3B2F] transition-all cursor-pointer flex items-center gap-1 active:scale-95"
                    title="View in Dish List"
                  >
                    <List className="w-3.5 h-3.5 text-[#35E27F]" />
                    <span>View List</span>
                  </button>
                  <button
                    id="map-view-dish-details-btn"
                    onClick={() => setDetailDish(selectedDish)}
                    className="px-3.5 py-2 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span>See What&apos;s In It</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="px-3.5 py-2.5 rounded-xl bg-[#0B1A14] border border-[#1B3B2F] text-[#A8B5AE] text-xs flex items-center justify-between shrink-0">
                <span className="flex items-center gap-2 text-[11px] font-medium text-[#F5F7F3]">
                  <MapPin className="w-3.5 h-3.5 text-[#35E27F] shrink-0" />
                  <span>Select any beacon on map to view verified specs</span>
                </span>
                <button
                  onClick={() => setMapViewMode('list')}
                  className="text-xs font-bold text-[#35E27F] hover:underline flex items-center gap-1"
                >
                  <span>Open Dish List ({filteredDishes.length})</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        )}

        {mapViewMode === 'list' && (
          <div className="p-3 sm:p-4 flex-1 flex flex-col min-h-0 space-y-3 bg-[#07130F]">
            {/* List Search & Quick Sorting Bar */}
            <div className="bg-[#0B1A14] rounded-2xl border border-[#1B3B2F] p-2.5 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-[#35E27F] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="map-dish-search-input"
                  type="text"
                  value={mapDishSearch}
                  onChange={(e) => setMapDishSearch(e.target.value)}
                  placeholder={`Search dishes, fats, or kitchens in ${selectedCity.name}...`}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[#07130F] border border-[#1B3B2F] text-xs font-medium text-[#F5F7F3] placeholder:text-[#A8B5AE] focus:outline-none focus:border-[#35E27F]"
                />
                {mapDishSearch && (
                  <button
                    onClick={() => setMapDishSearch('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#A8B5AE] hover:text-[#F5F7F3] text-xs font-bold p-0.5"
                  >
                    ×
                  </button>
                )}
              </div>

              <div className="flex items-center gap-1 self-end sm:self-auto overflow-x-auto max-w-full pb-0.5 sm:pb-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A8B5AE] shrink-0 flex items-center gap-1 mr-1">
                  <ArrowUpDown className="w-3 h-3 text-[#35E27F]" />
                  <span>Sort:</span>
                </span>
                {[
                  { id: 'distance', label: 'Nearest' },
                  { id: 'protein', label: 'Protein ↑' },
                  { id: 'calories', label: 'Cal ↓' },
                  { id: 'price', label: 'Price $' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setMapSortBy(s.id as any)}
                    className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer shrink-0 ${
                      mapSortBy === s.id
                        ? 'bg-[#35E27F] text-[#07130F] shadow-xs'
                        : 'bg-[#0F231B] text-[#A8B5AE] hover:text-[#F5F7F3] border border-[#1B3B2F]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Dish List Directory */}
            <div className="flex-1 overflow-y-auto min-h-0 space-y-2.5 pr-1">
              {mapDishesWithDistance.length > 0 ? (
                mapDishesWithDistance.map((dish) => {
                  const isSelected = selectedDish?.id === dish.id;
                  return (
                    <div
                      key={dish.id}
                      id={`map-dish-item-${dish.id}`}
                      className={`p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 cursor-pointer ${
                        isSelected
                          ? 'bg-[#0E221A] border-[#35E27F] shadow-sm'
                          : 'bg-[#0B1A14] hover:bg-[#0E2019] border-[#1B3B2F] hover:border-[#35E27F]/40'
                      }`}
                      onClick={() => setSelectedDish(dish)}
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden shrink-0 border border-[#1B3B2F] bg-[#0F231B]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-full object-cover"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                          />
                          {dish.isSeedOilFree && (
                            <span className="absolute bottom-0 inset-x-0 bg-[#35E27F] text-[#07130F] text-[8px] font-bold uppercase text-center py-0.5 tracking-wider">
                              Clean
                            </span>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
                            <span className="text-xs font-bold text-[#F5F7F3] truncate max-w-[160px]">
                              {dish.restaurant}
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-[#123D2A] text-[#35E27F] border border-[#1B3B2F] text-[10px] font-bold flex items-center gap-0.5">
                              <MapPin className="w-2.5 h-2.5 text-[#35E27F]" />
                              <span>{dish.distanceMiles} mi</span>
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#0F231B] text-[#DDFBE9] border border-[#1B3B2F] font-semibold">
                              {dish.cookingFat}
                            </span>
                          </div>

                          <h4 className="text-xs sm:text-sm font-bold text-[#F5F7F3] truncate leading-snug">
                            {dish.name}
                          </h4>

                          <div className="flex items-center gap-2 mt-1 text-[11px] font-medium text-[#A8B5AE] flex-wrap">
                            <span className="text-[#35E27F] font-bold">${dish.price.toFixed(2)}</span>
                            <span>&bull;</span>
                            <span className="text-[#F5F7F3] font-semibold flex items-center gap-0.5">
                              <Flame className="w-3 h-3 text-[#35E27F]" />
                              {dish.calories} kcal
                            </span>
                            <span>&bull;</span>
                            <span className="text-[#DDFBE9] font-medium">{dish.protein}g Protein</span>
                            <span>&bull;</span>
                            <span>{dish.carbs}g Carbs</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex sm:flex-col items-center gap-1.5 shrink-0 self-end sm:self-center w-full sm:w-auto justify-end">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDish(dish);
                            setMapViewMode('map');
                          }}
                          className="px-3 py-1.5 rounded-xl bg-[#0F231B] hover:bg-[#142C23] text-[#35E27F] border border-[#1B3B2F] hover:border-[#35E27F]/50 text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                          title="Show dish location on radar map"
                        >
                          <MapIcon className="w-3.5 h-3.5 text-[#35E27F]" />
                          <span>Pin on Map</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setDetailDish(dish);
                          }}
                          className="px-3 py-1.5 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all flex items-center gap-1 cursor-pointer active:scale-95 shadow-sm"
                          title="See what's in this dish"
                        >
                          <span>See What&apos;s In It</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center bg-[#0B1A14] rounded-2xl border border-[#1B3B2F] space-y-3">
                  <p className="text-sm font-bold text-[#F5F7F3]">
                    Nothing matching your preferences nearby.
                  </p>
                  <p className="text-xs text-[#A8B5AE]">
                    Try removing a filter or expanding your search.
                  </p>
                  <button
                    onClick={() => {
                      setMapDishSearch('');
                      setMapRadius(10);
                      resetFilters();
                    }}
                    className="px-4 py-2 rounded-xl bg-[#35E27F] text-[#07130F] text-xs font-bold transition-all hover:bg-[#44eb8c] cursor-pointer shadow-sm"
                  >
                    Show Me More Options
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {mapViewMode === 'split' && (
          <div className="p-3 sm:p-4 flex-1 flex flex-col min-h-0 space-y-2.5 bg-[#07130F]">
            {/* Top Map Pane (~42% height) */}
            <div className="relative h-[42%] min-h-[200px] rounded-2xl border border-[#1B3B2F] overflow-hidden shadow-md">
              <InteractiveMap
                dishes={filteredDishes}
                city={selectedCity}
                selectedDish={selectedDish}
                onSelectDish={(d) => setSelectedDish(d)}
                radiusMiles={mapRadius}
                isRadarScanning={isRadarScanning}
                onViewDetail={(d) => setDetailDish(d)}
                onToggleDishList={() => setMapViewMode('list')}
                isDishListActive={true}
              />
            </div>

            {/* Bottom Dish List Pane (~58% height) */}
            <div className="flex-1 flex flex-col min-h-0 bg-[#0B1A14] rounded-2xl border border-[#1B3B2F] p-2.5 shadow-xs space-y-2">
              <div className="flex items-center justify-between gap-2 shrink-0 pb-1 border-b border-[#1B3B2F]">
                <div className="flex items-center gap-1.5">
                  <List className="w-3.5 h-3.5 text-[#35E27F]" />
                  <span className="text-xs font-bold text-[#F5F7F3]">
                    Vicinity Dish List ({mapDishesWithDistance.length})
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {['distance', 'protein', 'price'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setMapSortBy(s as any)}
                      className={`px-2 py-0.5 rounded-lg text-[10px] font-bold capitalize transition-all cursor-pointer ${
                        mapSortBy === s
                          ? 'bg-[#35E27F] text-[#07130F]'
                          : 'bg-[#0F231B] text-[#A8B5AE] hover:text-[#F5F7F3] border border-[#1B3B2F]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scrollable list items in Split view */}
              <div className="flex-1 overflow-y-auto min-h-0 space-y-2 pr-1">
                {mapDishesWithDistance.map((dish) => {
                  const isSelected = selectedDish?.id === dish.id;
                  return (
                    <div
                      key={dish.id}
                      className={`p-2 sm:p-2.5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-2.5 cursor-pointer ${
                        isSelected
                          ? 'bg-[#0E221A] border-[#35E27F]'
                          : 'bg-[#07130F] hover:bg-[#0E2019] border-[#1B3B2F] hover:border-[#35E27F]/30'
                      }`}
                      onClick={() => setSelectedDish(dish)}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-[#1B3B2F] bg-[#0F231B] relative">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-full object-cover"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-xs font-semibold text-[#F5F7F3] truncate">
                              {dish.restaurant}
                            </span>
                            <span className="text-[10px] font-bold text-[#35E27F]">
                              &bull; {dish.distanceMiles} mi
                            </span>
                          </div>
                          <p className="text-xs font-bold text-[#F5F7F3] truncate">
                            {dish.name}
                          </p>
                          <p className="text-[10px] text-[#A8B5AE] truncate font-medium">
                            <span className="text-[#35E27F] font-bold">${dish.price.toFixed(2)}</span> &bull; {dish.protein}g protein &bull; {dish.cookingFat}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDish(dish);
                          }}
                          className={`p-1.5 rounded-lg text-xs font-bold transition-colors ${
                            isSelected
                              ? 'bg-[#35E27F] text-[#07130F]'
                              : 'bg-[#0F231B] text-[#35E27F] hover:bg-[#142C23] border border-[#1B3B2F]'
                          }`}
                          title="Center on map"
                        >
                          <MapIcon className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setDetailDish(dish);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all"
                          title="See what's in this dish"
                        >
                          See Details
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* ========================================================================= */}
      {/* 2. TOP APP HEADER                                                         */}
      {/* ========================================================================= */}
      <header
        id="main-app-header"
        className="sticky top-0 z-30 px-3 sm:px-6 lg:px-8 bg-[#07130F]/95 backdrop-blur-md border-b border-[#1B3B2F] shadow-sm"
      >
        <div className="max-w-7xl mx-auto h-14 sm:h-20 flex items-center justify-between gap-2 sm:gap-3">
          {/* Top/Left Brand Identity */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#0F231B] text-[#35E27F] flex items-center justify-center border border-[#1B3B2F] shrink-0">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-sm sm:text-lg lg:text-xl tracking-tight text-[#F5F7F3] leading-none">
                  Healthy Vicinity
                </span>
                <span className="hidden md:inline-flex px-2 py-0.5 rounded-md bg-[#123D2A] text-[#35E27F] text-[10px] font-bold tracking-wider uppercase border border-[#1B3B2F] items-center gap-1 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35E27F] animate-pulse" />
                  <span>Restaurant Confirmed</span>
                </span>
              </div>
              <p className="hidden sm:flex text-[#A8B5AE] font-medium text-[11px] sm:text-xs mt-0.5 items-center gap-1.5">
                <span className="text-[#35E27F] font-semibold">Decide what to order</span>
                <span className="text-[#1B3B2F]">&bull;</span>
                <span>Dish-level transparency</span>
                <span className="text-[#1B3B2F]">&bull;</span>
                <span>26 USA Metros</span>
              </p>
            </div>
          </div>

          {/* Controls: City Dropdown, Map Radar, and AI Scanner */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* City Dropdown */}
            <div className="relative min-w-0">
              <select
                id="header-city-selector"
                suppressHydrationWarning
                value={selectedReelCity}
                onChange={(e) => handleCitySelect(e.target.value as ReelCity)}
                className="appearance-none bg-[#0B1A14] hover:bg-[#0F231B] text-[#F5F7F3] font-bold text-xs pl-2.5 pr-6 sm:pl-3 sm:pr-7 py-1.5 sm:py-2.5 rounded-xl border border-[#1B3B2F] focus:outline-none focus:border-[#35E27F] cursor-pointer transition-all max-w-[105px] sm:max-w-none truncate"
              >
                {CITIES_DROPDOWN.map((c) => (
                  <option key={c.id} value={c.id} className="bg-[#0B1A14] text-[#F5F7F3]">
                    📍 {c.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A8B5AE] absolute right-2 sm:right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Find Food Near Me (Map Drawer Button) */}
            <button
              id="header-open-map-btn"
              onClick={() => setIsMapOpen(true)}
              className="inline-flex items-center justify-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-xl bg-[#0B1A14] hover:bg-[#0F231B] text-[#F5F7F3] text-xs font-semibold border border-[#1B3B2F] hover:border-[#35E27F]/50 transition-all duration-200 cursor-pointer group active:scale-95 shrink-0 whitespace-nowrap"
              title="Open Nearby Map"
            >
              <Radar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#35E27F] group-hover:rotate-45 transition-transform shrink-0" />
              <span className="hidden sm:inline">Find Food Near Me</span>
              <span className="px-1.5 py-0.5 rounded-md bg-[#123D2A] text-[#35E27F] font-bold text-[10px] border border-[#1B3B2F]">
                {filteredDishes.length}
              </span>
            </button>

            {/* AI Menu Scanner CTA Button */}
            <button
              id="open-menu-scanner-btn"
              onClick={() => setIsScannerOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all duration-200 cursor-pointer group active:scale-95 shrink-0 shadow-sm whitespace-nowrap"
              title="AI Menu Scanner"
            >
              <ScanLine className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#07130F] group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">AI Menu Scanner</span>
              <span className="sm:hidden text-[11px]">Scan</span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MAIN VIEWPORT CONTENT                                                     */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto w-full px-3.5 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-5 sm:space-y-7 flex-1 pb-28 sm:pb-8">
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
        {/* HERO SPOTLIGHT                                                            */}
        {/* ========================================================================= */}
        <section className="relative rounded-2xl bg-[#0B1A14] text-[#F5F7F3] p-4 sm:p-8 lg:p-10 overflow-hidden border border-[#1B3B2F] shadow-lg">
          {/* Subtle Radial Green Ambient Glow behind Hero */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#35E27F]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-80 h-80 bg-[#123D2A]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-3.5 sm:space-y-5">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 rounded-full bg-[#123D2A] text-[#DDFBE9] border border-[#1B3B2F] text-[10px] sm:text-[11px] font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#35E27F] shrink-0" />
              <span>Dish-Level Transparency &bull; {selectedCity.name}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight sm:leading-[1.15] text-[#F5F7F3]">
              Eat well anywhere, <br />
              <span className="text-[#35E27F]">
                without the guesswork.
              </span>
            </h1>

            <p className="text-xs sm:text-base text-[#A8B5AE] font-normal leading-relaxed max-w-2xl">
              Menus tell you what&apos;s available. HealthyVicinity empowers you to choose what fits your body — revealing verified nutrition, ingredients, and cooking methods for dishes near you.
            </p>

            {/* CTAs */}
            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
              <button
                id="hero-open-map-btn"
                onClick={() => setIsMapOpen(true)}
                className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] font-bold text-xs sm:text-sm transition-all duration-200 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2 group shadow-sm"
              >
                <Radar className="w-4 h-4 text-[#07130F] group-hover:rotate-45 transition-transform shrink-0" />
                <span>Find Healthy Food Near Me</span>
                <ChevronRight className="w-4 h-4 text-[#07130F] group-hover:translate-x-0.5 transition-transform shrink-0" />
              </button>

              <button
                onClick={() => {
                  const elem = document.getElementById('dishes-section');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#0F231B] hover:bg-[#142C23] text-[#F5F7F3] font-semibold text-xs sm:text-sm transition-all duration-200 border border-[#1B3B2F] hover:border-[#35E27F]/40 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>Explore Dishes</span>
              </button>
            </div>

            {/* Credibility verification metrics strip */}
            <div className="pt-3 sm:pt-4 border-t border-[#1B3B2F]/60 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 text-[11px] sm:text-xs text-[#A8B5AE]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35E27F] shrink-0" />
                <span className="font-medium truncate">Restaurant Details</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35E27F] shrink-0" />
                <span className="font-medium truncate">Nutrition &amp; Macros</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35E27F] shrink-0" />
                <span className="font-medium truncate">Oils &amp; Cooking Fats</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35E27F] shrink-0" />
                <span className="font-medium truncate">Clear Sourcing</span>
              </div>
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
        {/* DISHES SECTION / LOCAL DISCOVERY                                          */}
        {/* ========================================================================= */}
        <section id="dishes-section" className="space-y-4 relative scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-xl font-bold text-[#F5F7F3] flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#35E27F] shrink-0" />
                  <span>Healthy Food Around You in {selectedCity.name}</span>
                </h2>
                <span className="text-xs font-semibold text-[#35E27F] bg-[#0F231B] px-3 py-1 rounded-full border border-[#1B3B2F] shrink-0">
                  {filteredDishes.length} options nearby
                </span>
              </div>
              <p className="text-xs text-[#A8B5AE] mt-1 font-medium">
                Good options nearby, matched to what you&apos;re looking for.
              </p>
            </div>

            <button
              onClick={() => setIsMapOpen(true)}
              className="text-xs font-bold text-[#35E27F] hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-auto shrink-0 transition-colors"
            >
              <span>See More Nearby</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 relative">
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
            <div className="p-10 sm:p-12 text-center bg-[#0B1A14] border border-[#1B3B2F] rounded-2xl space-y-3 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-[#0F231B] text-[#35E27F] flex items-center justify-center mx-auto border border-[#1B3B2F]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#F5F7F3] text-base sm:text-lg">
                Nothing matching your preferences nearby.
              </h3>
              <p className="text-xs text-[#A8B5AE] max-w-md mx-auto font-medium">
                Try removing a filter or expanding your search.
              </p>
              <div className="pt-2">
                <button
                  id="empty-reset-filters-btn"
                  onClick={resetFilters}
                  className="px-5 py-2.5 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
                >
                  Show Me More Options
                </button>
              </div>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* BRAND DIFFERENTIATION & VALUE PROPOSITION                                  */}
        {/* ========================================================================= */}
        <section id="mission-section" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-[#0B1A14] border border-[#1B3B2F] shadow-lg relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-bold text-[#35E27F] uppercase tracking-wider">
              Our Vision &amp; Mission
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7F3] leading-snug">
              Make every meal a choice you can feel good about.
            </h3>
            <p className="text-xs sm:text-sm text-[#35E27F] font-semibold">
              A restaurant tells you where to eat. HealthyVicinity helps you decide what to order.
            </p>
            <p className="text-xs sm:text-sm text-[#A8B5AE] leading-relaxed">
              Instead of stopping at restaurant ratings, HealthyVicinity helps you discover individual dishes based on the things you care about — from protein and calories to ingredients and cooking methods.
            </p>
            <div className="pt-3 border-t border-[#1B3B2F] flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#35E27F] mt-1.5 shrink-0" />
              <p className="text-xs font-medium text-[#F5F7F3] italic">
                &ldquo;Eating healthy shouldn&apos;t require homework. Menus tell you what&apos;s available. HealthyVicinity helps you figure out what fits you.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TRUST SECTION / WHY TRUST THE DETAILS?                                    */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div>
            <span className="text-[11px] font-bold text-[#35E27F] uppercase tracking-wider">
              Verification &amp; Transparency
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#F5F7F3] mt-1">
              Why Trust the Details?
            </h3>
            <p className="text-xs text-[#A8B5AE] mt-1 max-w-2xl">
              HealthyVicinity shows you more than a restaurant name. We help you understand what&apos;s in the dish, how it&apos;s prepared and where the information comes from.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#0B1A14] border border-[#1B3B2F] space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#35E27F]">01</div>
              <h4 className="font-bold text-[#F5F7F3] text-sm">See the Dish</h4>
              <p className="text-xs text-[#A8B5AE] leading-relaxed">
                Find the actual dishes that match your preferences, not just a vague restaurant recommendation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B1A14] border border-[#1B3B2F] space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#35E27F]">02</div>
              <h4 className="font-bold text-[#F5F7F3] text-sm">Understand the Details</h4>
              <p className="text-xs text-[#A8B5AE] leading-relaxed">
                See nutrition, ingredients and cooking methods in plain language so you can make informed choices with ease.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B1A14] border border-[#1B3B2F] space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#35E27F]">03</div>
              <h4 className="font-bold text-[#F5F7F3] text-sm">Know the Source</h4>
              <p className="text-xs text-[#A8B5AE] leading-relaxed">
                See where important information comes from and when it was last checked, from menu listings to restaurant direct confirmations.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CLEAN ZONE SECTION                                                        */}
        {/* ========================================================================= */}
        <section id="clean-zone" className="p-6 sm:p-8 rounded-2xl bg-[#0B1A14] border border-[#1B3B2F] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#0F231B] flex items-center justify-center text-[#35E27F] shrink-0 border border-[#1B3B2F]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-[#F5F7F3] text-base uppercase tracking-wider">
                  Clean Zone
                </h4>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#123D2A] text-[#35E27F] font-bold border border-[#1B3B2F]">
                  Stricter Preferences
                </span>
              </div>
              <p className="text-xs font-medium text-[#35E27F]">
                For people who want a closer look at ingredients and cooking methods.
              </p>
              <p className="text-xs text-[#A8B5AE] leading-relaxed max-w-xl">
                Explore dishes that match stricter preferences around ingredients, cooking oils and food quality.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setFilters((prev) => ({ ...prev, seedOilFree: true }));
              const elem = document.getElementById('dishes-section');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center gap-1.5 shrink-0 shadow-sm"
          >
            <span>Filter Clean Zone Dishes</span>
          </button>
        </section>

        {/* ========================================================================= */}
        {/* FOOTER                                                                    */}
        {/* ========================================================================= */}
        <footer className="pt-8 pb-4 border-t border-[#1B3B2F] text-[#F5F7F3] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-base text-[#F5F7F3]">
                A restaurant tells you where to eat. We help you decide what to order.
              </h4>
              <p className="text-xs text-[#A8B5AE] mt-1 max-w-xl leading-relaxed">
                HealthyVicinity illuminates what&apos;s truly inside your food — from ingredients and cooking oils to complete nutritional profiles.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#A8B5AE]">
              <span>Better choices start with better information.</span>
            </div>
          </div>

          <div className="pt-4 border-t border-[#1B3B2F]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A8B5AE]">
            <p>&copy; {new Date().getFullYear()} HealthyVicinity. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMapOpen(true)}
                className="hover:text-[#35E27F] transition-colors cursor-pointer"
              >
                Nearby Map
              </button>
              <button
                onClick={() => {
                  const elem = document.getElementById('clean-zone');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-[#35E27F] transition-colors cursor-pointer"
              >
                Clean Zone
              </button>
              <button
                onClick={() => setIsScannerOpen(true)}
                className="hover:text-[#35E27F] transition-colors cursor-pointer"
              >
                AI Menu Scanner
              </button>
            </div>
          </div>
        </footer>
      </main>

      {/* ========================================================================= */}
      {/* FLOATING MAP TRIGGER BUTTON                                               */}
      {/* ========================================================================= */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-30 flex items-center justify-center">
        <button
          id="floating-map-toggle-btn"
          onClick={() => setIsMapOpen(true)}
          className="group px-4 py-2 sm:px-5 sm:py-3 rounded-full bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] font-bold text-xs shadow-xl shadow-black/40 flex items-center gap-2 sm:gap-2.5 border border-[#35E27F] transition-all duration-200 cursor-pointer active:scale-95 whitespace-nowrap"
          title="Slide out the interactive map from the left"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#07130F] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#07130F]" />
          </span>
          <span>Find Food Near Me</span>
          <span className="px-1.5 py-0.5 rounded-md bg-[#07130F]/20 text-[#07130F] text-[10px] font-bold">
            {filteredDishes.length}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#07130F] group-hover:translate-x-0.5 transition-transform" />
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
