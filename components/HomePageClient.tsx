'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Dish,
  INITIAL_DISHES,
  CITY_LOCATIONS,
  CityLocation,
} from '@/lib/mockData';
import { formatPrice, getGoogleMapsDirectionsUrl } from '@/lib/utils';
import dynamic from 'next/dynamic';
import DishCard from '@/components/DishCard';
import DishDetailModal from '@/components/DishDetailModal';
import MenuScannerModal from '@/components/MenuScannerModal';
import LocationSelectorModal from '@/components/LocationSelectorModal';
import BentoFilters, { FilterState } from '@/components/BentoFilters';
import ReelsBar from '@/components/ReelsBar';
import HealthyFoodGuide from '@/components/HealthyFoodGuide';
import ExploreIndiaSection from '@/components/ExploreIndiaSection';
import { Reel, ReelCity, getCityReels, REELS_DATA } from '@/lib/reelsData';

// Dynamic import for Leaflet client-only map:
const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  loading: () => (
    <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center bg-[#FAF6EE] text-[#6B5E55] gap-2 p-6 rounded-2xl border border-[#E8DEC8]">
      <span className="text-xs font-bold text-[#1A100C]">Initializing Radar &amp; Geo Map...</span>
    </div>
  ),
  ssr: false,
});

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
  Navigation,
  Loader2,
} from 'lucide-react';
import {
  ALL_CITIES,
  INDIAN_CITIES,
  US_CITIES,
  CityConfig,
  getCityConfigByName,
  toCityLocation,
  parseNaturalLanguageQuery,
  resolveLocationToCity,
  detectUserCountryFromClient,
  getDefaultCityForCountry,
  CountryCode,
} from '@/lib/locations';

const CITIES_DROPDOWN: {
  id: ReelCity;
  label: string;
  cityName: string;
  state: string;
  country: 'US' | 'IN';
}[] = ALL_CITIES.map((c) => ({
  id: (c.country === 'IN' ? `${c.city}, IN` : `${c.city}, ${c.state}`) as ReelCity,
  label: c.country === 'IN' ? `${c.displayName} (IN)` : c.displayName,
  cityName: c.city,
  state: c.state,
  country: c.country,
}));

export interface HomePageClientProps {
  initialCity?: CityLocation;
  initialCountry?: CountryCode;
  initialSearch?: string;
  widgetsSlot?: React.ReactNode;
}

export default function HomePage({
  initialCity,
  initialCountry,
  initialSearch,
  widgetsSlot,
}: HomePageClientProps = {}) {
  const [dishes, setDishes] = useState<Dish[]>(INITIAL_DISHES);
  // Initial state is strictly identical on server and client to prevent hydration mismatch
  const [selectedCity, setSelectedCity] = useState<CityLocation>(() => {
    if (initialCity) return initialCity;
    const country = initialCountry || 'US';
    return toCityLocation(getDefaultCityForCountry(country));
  });
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [detailDish, setDetailDish] = useState<Dish | null>(null);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [customReels, setCustomReels] = useState<Reel[]>([]);
  const [locationBannerText, setLocationBannerText] = useState<string | null>(null);

  // Map Drawer, Radius & View Controls
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mapRadius, setMapRadius] = useState<number>(5);
  const [mapViewMode, setMapViewMode] = useState<'map' | 'list' | 'split'>('map');
  const [mapDishSearch, setMapDishSearch] = useState('');
  const [mapSortBy, setMapSortBy] = useState<'distance' | 'protein' | 'calories' | 'price'>('distance');
  const [selectedCookingFat, setSelectedCookingFat] = useState<string>('all');
  const [isRadarScanning, setIsRadarScanning] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    search: initialSearch || '',
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
    vegetarian: false,
    minProtein: 0,
    maxCarbs: 50,
    benefitPostWorkout: false,
    benefitBrainFuel: false,
    benefitGutSoothers: false,
  });

  // Progressive rendering: 12 cards initially for 0ms frame drops and silky scrolling
  const [visibleCount, setVisibleCount] = useState(12);

  // City-indexed dishes lookup for instant O(1) retrieval across the app
  const dishesByCity = useMemo(() => {
    const map: Record<string, Dish[]> = {};
    for (const d of dishes) {
      if (!map[d.city]) {
        map[d.city] = [];
      }
      map[d.city].push(d);
    }
    return map;
  }, [dishes]);

  const currentCityDishes = useMemo(() => {
    return dishesByCity[selectedCity.name] || [];
  }, [dishesByCity, selectedCity.name]);

  const allCityDishesCount = currentCityDishes.length;

  // Reset pagination when city or filters change
  useEffect(() => {
    setVisibleCount(12);
  }, [selectedCity.name, filters]);

  const selectedReelCity: ReelCity = useMemo(() => {
    const match = CITIES_DROPDOWN.find((c) => c.cityName === selectedCity.name);
    return match ? match.id : (`${selectedCity.name}, ${selectedCity.state}` as ReelCity);
  }, [selectedCity]);

  // Map Radar count based on reels available in selected city
  const cityReelsCount = useMemo(() => {
    return getCityReels(selectedReelCity, [...customReels, ...REELS_DATA]).length;
  }, [selectedReelCity, customReels]);

  // Helper to select a city config
  const handleSelectCityConfig = useCallback((config: CityConfig, isManual = false) => {
    const loc = toCityLocation(config);
    setSelectedCity(loc);
    if (isManual && typeof window !== 'undefined') {
      try {
        localStorage.setItem('healthy_vicinity_saved_city', config.city);
        localStorage.setItem('healthy_vicinity_saved_country', config.country);
      } catch {
        // ignore
      }
    }
    const cityDishes = dishesByCity[loc.name] || [];
    if (cityDishes.length > 0) {
      setSelectedDish(cityDishes[0]);
    } else {
      setSelectedDish(null);
    }
  }, [dishesByCity]);

  // Direct switch between India and United States
  const handleSwitchCountry = useCallback((country: 'IN' | 'US') => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('healthy_vicinity_manual_country_switch', 'true');
      } catch {
        // ignore
      }
    }
    const defaultCity = getDefaultCityForCountry(country);
    handleSelectCityConfig(defaultCity, true);
    const countryLabel = country === 'IN' ? 'India 🇮🇳 (Delhi)' : 'United States 🇺🇸 (Austin)';
    setLocationBannerText(`Switched country to ${countryLabel}`);
    setTimeout(() => setLocationBannerText(null), 3500);
  }, [handleSelectCityConfig]);

  // Auto-detect country & city from user IP address on load
  useEffect(() => {
    let isCancelled = false;

    // Check if the user manually switched country or city during THIS session
    const hasManualSessionOverride =
      typeof window !== 'undefined' &&
      sessionStorage.getItem('healthy_vicinity_manual_country_switch') === 'true';

    // 1. Fast zero-latency client heuristic (matches user's browser timezone/locale)
    if (!hasManualSessionOverride) {
      const clientCountry = detectUserCountryFromClient();
      if (clientCountry === 'IN' && selectedCity.country !== 'IN') {
        const indiaDefault = getDefaultCityForCountry('IN');
        handleSelectCityConfig(indiaDefault, false);
      }
    }

    async function detectCountryAndLocationFromIP() {
      if (hasManualSessionOverride) return;

      // Tier 1: Fast direct browser IP lookup via api.country.is (<50ms)
      try {
        const fastCountryRes = await fetch('https://api.country.is/', {
          signal: AbortSignal.timeout(2000),
        });
        if (fastCountryRes.ok && !isCancelled) {
          const fastData = await fastCountryRes.json();
          if (fastData && fastData.country) {
            const detectedCountry: CountryCode = fastData.country === 'IN' ? 'IN' : 'US';
            if (detectedCountry !== selectedCity.country) {
              const defaultCity = getDefaultCityForCountry(detectedCountry);
              handleSelectCityConfig(defaultCity, false);
              const label = detectedCountry === 'IN' ? 'India 🇮🇳' : 'USA 🇺🇸';
              setLocationBannerText(`📍 Auto-switched country to ${label} based on IP address`);
              setTimeout(() => {
                if (!isCancelled) setLocationBannerText(null);
              }, 4000);
            }
          }
        }
      } catch {
        // Proceed to rich IP resolution
      }

      // Tier 2: Rich direct browser IP lookup via ipwho.is (resolves city, region, coordinates)
      try {
        if (!isCancelled) {
          const directRes = await fetch('https://ipwho.is/', {
            signal: AbortSignal.timeout(3500),
          });
          if (directRes.ok) {
            const directData = await directRes.json();
            if (directData && (directData.country_code || directData.success)) {
              const resolved = resolveLocationToCity(
                directData.latitude,
                directData.longitude,
                directData.city,
                directData.country_code
              );
              handleSelectCityConfig(resolved, false);
              const countryLabel = resolved.country === 'IN' ? 'India 🇮🇳' : 'USA 🇺🇸';
              setLocationBannerText(`📍 Country & city detected via IP: ${resolved.displayName} (${countryLabel})`);
              setTimeout(() => {
                if (!isCancelled) setLocationBannerText(null);
              }, 5000);
              return;
            }
          }
        }
      } catch {
        // Proceed to internal API fallback
      }

      // Tier 3: Call internal API endpoint (inspects reverse proxy edge headers & client IP)
      try {
        if (!isCancelled) {
          const res = await fetch('/api/locate');
          if (res.ok) {
            const data = await res.json();
            if (data.success && (data.countryCode || (typeof data.latitude === 'number' && typeof data.longitude === 'number'))) {
              const resolved = resolveLocationToCity(
                data.latitude,
                data.longitude,
                data.city,
                data.countryCode
              );
              handleSelectCityConfig(resolved, false);
              const countryLabel = resolved.country === 'IN' ? 'India 🇮🇳' : 'USA 🇺🇸';
              setLocationBannerText(`📍 Country detected via IP: ${resolved.displayName} (${countryLabel})`);
              setTimeout(() => {
                if (!isCancelled) setLocationBannerText(null);
              }, 5000);
              return;
            }
          }
        }
      } catch {
        // Handled silently
      }
    }

    detectCountryAndLocationFromIP();

    return () => {
      isCancelled = true;
    };
  }, [handleSelectCityConfig, selectedCity.country]);

  const handleSelectCityByName = useCallback(
    (cityName: string) => {
      const config = getCityConfigByName(cityName);
      if (config) {
        handleSelectCityConfig(config, true);
      } else {
        const loc = CITY_LOCATIONS.find((c) => c.name.toLowerCase() === cityName.toLowerCase());
        if (loc) {
          setSelectedCity(loc);
          const cityDishes = dishesByCity[loc.name] || [];
          setSelectedDish(cityDishes.length > 0 ? cityDishes[0] : null);
        }
      }
    },
    [handleSelectCityConfig, dishesByCity]
  );

  // When city changes via dropdown
  const handleCitySelect = (cityId: ReelCity) => {
    const item = CITIES_DROPDOWN.find((c) => c.id === cityId);
    if (!item) return;
    handleSelectCityByName(item.cityName);
  };

  // Quick auto-locate with multi-tier fallback (GPS + IP/Network)
  const [isAutoLocating, setIsAutoLocating] = useState(false);
  const handleQuickLocate = useCallback(() => {
    setIsAutoLocating(true);

    const fallbackToNetwork = async () => {
      // 1. Try internal locate API
      try {
        const res = await fetch('/api/locate');
        if (res.ok) {
          const data = await res.json();
          if (data.success && (data.countryCode || (typeof data.latitude === 'number' && typeof data.longitude === 'number'))) {
            const resolved = resolveLocationToCity(
              data.latitude,
              data.longitude,
              data.city,
              data.countryCode
            );
            handleSelectCityConfig(resolved, true);
            const countryLabel = resolved.country === 'IN' ? 'India 🇮🇳' : 'USA 🇺🇸';
            setLocationBannerText(`📍 Location detected via IP: ${resolved.displayName} (${countryLabel})`);
            setTimeout(() => setLocationBannerText(null), 5000);
            setIsAutoLocating(false);
            return;
          }
        }
      } catch (e) {
        console.warn('Network location error:', e);
      }

      // 2. Direct browser IP lookup fallback
      try {
        const directRes = await fetch('https://ipwho.is/', {
          signal: AbortSignal.timeout(3500),
        });
        if (directRes.ok) {
          const directData = await directRes.json();
          if (directData && (directData.country_code || directData.success)) {
            const resolved = resolveLocationToCity(
              directData.latitude,
              directData.longitude,
              directData.city,
              directData.country_code
            );
            handleSelectCityConfig(resolved, true);
            const countryLabel = resolved.country === 'IN' ? 'India 🇮🇳' : 'USA 🇺🇸';
            setLocationBannerText(`📍 Location detected via IP: ${resolved.displayName} (${countryLabel})`);
            setTimeout(() => setLocationBannerText(null), 5000);
            setIsAutoLocating(false);
            return;
          }
        }
      } catch {
        // Proceed to fast country lookup
      }

      // 3. Fast country IP lookup fallback
      try {
        const countryRes = await fetch('https://api.country.is/', {
          signal: AbortSignal.timeout(2000),
        });
        if (countryRes.ok) {
          const cData = await countryRes.json();
          if (cData && cData.country) {
            const resolvedCountry: CountryCode = cData.country === 'IN' ? 'IN' : 'US';
            const defaultCity = getDefaultCityForCountry(resolvedCountry);
            handleSelectCityConfig(defaultCity, true);
            const countryLabel = resolvedCountry === 'IN' ? 'India 🇮🇳' : 'USA 🇺🇸';
            setLocationBannerText(`📍 Country detected via IP: ${countryLabel}`);
            setTimeout(() => setLocationBannerText(null), 5000);
            setIsAutoLocating(false);
            return;
          }
        }
      } catch {
        // ignore
      }

      // If network fails as well, open the location modal for manual selection
      setIsAutoLocating(false);
      setIsLocationModalOpen(true);
    };

    if (!navigator.geolocation) {
      fallbackToNetwork();
      return;
    }

    let handled = false;
    const timeout = setTimeout(() => {
      if (!handled) {
        handled = true;
        fallbackToNetwork();
      }
    }, 4500);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        if (handled) return;
        handled = true;
        clearTimeout(timeout);
        const resolved = resolveLocationToCity(pos.coords.latitude, pos.coords.longitude);
        handleSelectCityConfig(resolved, true);
        const countryLabel = resolved.country === 'IN' ? 'India 🇮🇳' : 'USA 🇺🇸';
        setLocationBannerText(`📍 Pinpointed location via GPS: ${resolved.displayName} (${countryLabel})`);
        setTimeout(() => setLocationBannerText(null), 5000);
        setIsAutoLocating(false);
      },
      () => {
        if (handled) return;
        handled = true;
        clearTimeout(timeout);
        fallbackToNetwork();
      },
      { timeout: 4000, enableHighAccuracy: false, maximumAge: 300000 }
    );
  }, [handleSelectCityConfig]);

  // Natural language search handler
  const handleFilterChange = (newFilters: FilterState) => {
    if (newFilters.search !== filters.search && newFilters.search.trim()) {
      const parsed = parseNaturalLanguageQuery(newFilters.search);
      if (parsed.city) {
        handleSelectCityConfig(parsed.city);

        const updated: FilterState = { ...newFilters };
        if (parsed.healthGoals.highProtein) {
          updated.highProtein = true;
          updated.minProtein = Math.max(updated.minProtein, 35);
          updated.benefitPostWorkout = true;
        }
        if (parsed.healthGoals.lowCalorie) {
          updated.lowCalorie = true;
        }
        if (parsed.healthGoals.lowSugar) {
          updated.lowSugar = true;
        }
        if (parsed.healthGoals.lowCarb) {
          updated.lowCarb = true;
        }
        if (parsed.healthGoals.seedOilFree) {
          updated.seedOilFree = true;
        }
        if (parsed.healthGoals.vegetarian) {
          updated.vegetarian = true;
        }
        if (parsed.healthGoals.glutenFree) {
          updated.glutenFree = true;
        }
        if (parsed.healthGoals.dairyFree) {
          updated.dairyFree = true;
        }

        updated.search = parsed.cleanedSearch;
        setFilters(updated);
        return;
      }
    }
    setFilters(newFilters);
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
      vegetarian: false,
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
    return currentCityDishes.filter((dish) => {
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
        const matchesAddress = dish.restaurantAddress ? dish.restaurantAddress.toLowerCase().includes(query) : false;
        const matchesIng = dish.ingredients.some((ing) => ing.toLowerCase().includes(query));
        if (!matchesName && !matchesRest && !matchesFat && !matchesIng && !matchesAddress) {
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

      if (filters.vegetarian) {
        const isVegDish =
          dish.dietTags.some((t) => t.toLowerCase().includes('veg')) ||
          !dish.dietTags.some((t) =>
            ['meat', 'beef', 'chicken', 'fish', 'pork', 'bacon', 'turkey', 'lamb'].some((m) =>
              t.toLowerCase().includes(m)
            )
          );
        if (!isVegDish) return false;
      }

      if (dish.protein < filters.minProtein) return false;
      if (dish.carbs > filters.maxCarbs) return false;

      return true;
    });
  }, [currentCityDishes, filters, selectedCookingFat]);

  // Clear selected dish if it belongs to a different city than currently selected
  useEffect(() => {
    if (selectedDish && selectedDish.city !== selectedCity.name) {
      setSelectedDish(null);
    }
  }, [selectedCity.name, selectedDish]);

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
          (d.restaurantAddress && d.restaurantAddress.toLowerCase().includes(q)) ||
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

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeaderSearchClick = () => {
    const input = document.getElementById('dish-search-input') as HTMLInputElement | null;
    if (input) {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        input.focus();
      }, 350);
    } else {
      scrollToSection('dishes-section');
    }
  };

  const handleSelectDish = useCallback((d: Dish) => {
    setSelectedDish(d);
  }, []);

  const handleOpenDetails = useCallback((d: Dish) => {
    setSelectedDish(d);
    setDetailDish(d);
  }, []);

  const displayedDishes = useMemo(() => {
    return filteredDishes.slice(0, visibleCount);
  }, [filteredDishes, visibleCount]);

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#231815] flex flex-col font-sans selection:bg-[#F5C842]/35 selection:text-[#231815] relative overflow-x-hidden">
      {/* Warm Ambient Glows */}
      <div className="fixed top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#F5C842]/[0.08] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-[#C86A1D]/[0.05] rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* ========================================================================= */}
      {/* MISSION & VISION ANNOUNCEMENT BAR                                          */}
      {/* ========================================================================= */}
      <div
        id="mission-vision-announcement-header"
        className="relative w-full bg-[#FFF9EB] border-b border-[#EBDDB7] py-2 sm:py-2.5 px-3 sm:px-4 transition-all z-30 shadow-2xs"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3 text-xs">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C86A1D] opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C86A1D]" />
            </span>
            <span className="text-[#1A120E] uppercase tracking-wider text-[10px] sm:text-[11px] font-black px-2.5 py-0.5 rounded-full bg-[#F5C842] border border-[#E0BC35] shrink-0 shadow-2xs">
              Our Vision
            </span>
            <p className="text-[#1A120E] font-bold text-xs sm:text-[13px] leading-snug truncate sm:whitespace-normal">
              Make every meal a wholesome choice you can feel good about.
            </p>
          </div>
          <button
            onClick={() => {
              const elem = document.getElementById('mission-section');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-black text-[#A84E18] hover:text-[#C86A1D] hover:underline cursor-pointer shrink-0 transition-colors py-0.5 px-1.5"
            title="Read our mission and food philosophy"
          >
            <span className="hidden xs:inline">Our Mission</span>
            <span className="xs:hidden font-bold">Mission</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#A84E18]" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE-OUT NEARBY FOOD MAP DRAWER                                          */}
      {/* ========================================================================= */}
      <div
        className={`fixed inset-0 z-45 bg-black/40 backdrop-blur-xs transition-opacity duration-300 ${
          isMapOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMapOpen(false)}
      />

      <aside
        id="vicinity-map-drawer"
        className={`fixed inset-y-0 left-0 z-50 w-[calc(100%-24px)] sm:w-[580px] md:w-[650px] lg:w-[740px] max-w-[760px] bg-[#FAF6EE] text-[#231815] shadow-2xl flex flex-col border-r border-[#E8DEC8] transition-transform duration-300 ease-out transform ${
          isMapOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-white border-b border-[#E8DEC8] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FDF5D9] text-[#C86A1D] flex items-center justify-center shadow-xs border border-[#F4E3A8]">
              <Radar className={`w-5 h-5 ${isRadarScanning ? 'animate-spin text-[#C86A1D]' : ''}`} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-[#231815] text-base leading-tight">
                  Neighborhood Food Map &amp; Pantry
                </h3>
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A34] animate-ping" />
              </div>
              <p className="text-[11px] font-semibold text-[#2D5A34] tracking-wide">
                {filteredDishes.length} wholesome options nearby in {selectedCity.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="close-map-drawer-btn"
              onClick={() => setIsMapOpen(false)}
              className="p-2 rounded-xl bg-[#FAF6EE] hover:bg-[#F7F1E5] text-[#6B5E55] hover:text-[#231815] border border-[#E8DEC8] transition-colors cursor-pointer active:scale-95"
              title="Close Map Slider"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Drawer Controls: View Switcher & Radius Filter */}
        <div className="p-3 sm:px-5 bg-white/70 border-b border-[#E8DEC8] space-y-2.5 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            {/* View Mode Segmented Controls */}
            <div className="inline-flex rounded-xl bg-[#FAF6EE] p-1 border border-[#E8DEC8] self-start sm:self-auto gap-1">
              <button
                id="map-mode-radar-btn"
                onClick={() => setMapViewMode('map')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  mapViewMode === 'map'
                    ? 'bg-[#C86A1D] text-white shadow-xs'
                    : 'text-[#6B5E55] hover:text-[#231815]'
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
                    ? 'bg-[#C86A1D] text-white shadow-xs'
                    : 'text-[#6B5E55] hover:text-[#231815]'
                }`}
                title="View dishes list in this radius"
              >
                <List className="w-3.5 h-3.5" />
                <span>Dish List</span>
                <span
                  className={`px-1.5 py-0.2 rounded-md text-[10px] font-bold ${
                    mapViewMode === 'list' ? 'bg-white text-[#C86A1D]' : 'bg-[#FAF6EE] text-[#6B5E55]'
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
                    ? 'bg-[#C86A1D] text-white shadow-xs'
                    : 'text-[#6B5E55] hover:text-[#231815]'
                }`}
                title="View Map and Dish List side-by-side"
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Split</span>
              </button>
            </div>

            {/* Radius Options */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase text-[#6B5E55] tracking-wider flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C86A1D] shrink-0" />
                <span className="hidden sm:inline">Radius:</span>
              </span>

              <div className="inline-flex rounded-xl bg-[#FAF6EE] p-1 border border-[#E8DEC8] gap-1">
                {[1, 3, 5, 10].map((radius) => (
                  <button
                    key={radius}
                    onClick={() => setMapRadius(radius)}
                    className={`px-2.5 py-0.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      mapRadius === radius
                        ? 'bg-[#C86A1D] text-white shadow-xs'
                        : 'text-[#6B5E55] hover:text-[#231815]'
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
          <div className="p-3 sm:p-4 flex-1 flex flex-col min-h-0 space-y-3 bg-[#FAF6EE]">
            <div className="relative flex-1 rounded-2xl border border-[#E8DEC8] overflow-hidden shadow-sm min-h-[300px] bg-white">
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
              <div className="p-3.5 rounded-2xl bg-white border border-[#E8DEC8] text-[#231815] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shadow-sm shrink-0 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] overflow-hidden shrink-0 border border-[#E8DEC8] relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selectedDish.image}
                      alt={selectedDish.name}
                      className="w-full h-full object-cover"
                    />
                    {selectedDish.isSeedOilFree && (
                      <span className="absolute bottom-0 inset-x-0 bg-[#2D5A34] text-white text-[8px] font-bold uppercase text-center py-0.5">
                        Clean
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-bold text-[#231815] truncate max-w-[180px]">
                        {selectedDish.restaurant}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#FDF5D9] text-[#8C5D0D] border border-[#F4E3A8] font-semibold">
                        {selectedDish.cookingFat}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B5E55] font-semibold truncate mt-0.5">
                      {selectedDish.name} &bull; <span className="text-[#C86A1D] font-bold">{formatPrice(selectedDish.price, selectedDish.city, selectedDish.id)}</span>
                    </p>
                    <p className="text-[10px] text-[#6B5E55] truncate">
                      {selectedDish.protein}g Protein &bull; {selectedDish.calories} kcal
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setMapViewMode('list')}
                    className="px-3 py-2 rounded-xl bg-[#FAF6EE] hover:bg-[#F7F1E5] text-[#231815] text-xs font-semibold border border-[#E8DEC8] transition-all cursor-pointer flex items-center gap-1 active:scale-95"
                    title="View in Dish List"
                  >
                    <List className="w-3.5 h-3.5 text-[#C86A1D]" />
                    <span>View List</span>
                  </button>
                  <button
                    id="map-view-dish-details-btn"
                    onClick={() => setDetailDish(selectedDish)}
                    className="px-3.5 py-2 rounded-xl bg-[#C86A1D] hover:bg-[#A84E18] text-white text-xs font-bold transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    id="dismiss-bottom-preview-btn"
                    onClick={() => setSelectedDish(null)}
                    className="p-2 rounded-xl bg-[#FAF6EE] hover:bg-[#F7F1E5] text-[#6B5E55] hover:text-[#231815] border border-[#E8DEC8] transition-all cursor-pointer active:scale-95"
                    title="Dismiss selection"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DEC8] text-[#6B5E55] text-xs flex items-center justify-between shrink-0 shadow-2xs">
                <span className="flex items-center gap-2 text-[11px] font-medium text-[#231815]">
                  <MapPin className="w-3.5 h-3.5 text-[#C86A1D] shrink-0" />
                  <span>Select any dish on the map to see ingredients and nutrition</span>
                </span>
                <button
                  onClick={() => setMapViewMode('list')}
                  className="text-xs font-bold text-[#C86A1D] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Open Dish List ({filteredDishes.length})</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        )}

        {mapViewMode === 'list' && (
          <div className="p-3 sm:p-4 flex-1 flex flex-col min-h-0 space-y-3 bg-[#FAF6EE]">
            {/* List Search & Quick Sorting Bar */}
            <div className="bg-white rounded-2xl border border-[#E8DEC8] p-2.5 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-[#C86A1D] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="map-dish-search-input"
                  type="text"
                  value={mapDishSearch}
                  onChange={(e) => setMapDishSearch(e.target.value)}
                  placeholder={`Search dishes, fats, or kitchens in ${selectedCity.name}...`}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[#FAF6EE] border border-[#E8DEC8] text-xs font-medium text-[#231815] placeholder:text-[#9E9084] focus:outline-none focus:border-[#C86A1D]"
                />
                {mapDishSearch && (
                  <button
                    onClick={() => setMapDishSearch('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9E9084] hover:text-[#231815] text-xs font-bold p-0.5"
                  >
                    ×
                  </button>
                )}
              </div>

              <div className="flex items-center gap-1 self-end sm:self-auto overflow-x-auto max-w-full pb-0.5 sm:pb-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B5E55] shrink-0 flex items-center gap-1 mr-1">
                  <ArrowUpDown className="w-3 h-3 text-[#C86A1D]" />
                  <span>Sort:</span>
                </span>
                {[
                  { id: 'distance', label: 'Nearest' },
                  { id: 'protein', label: 'Protein ↑' },
                  { id: 'calories', label: 'Cal ↓' },
                  { id: 'price', label: selectedCity.country === 'IN' ? 'Price ₹' : 'Price $' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setMapSortBy(s.id as any)}
                    className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer shrink-0 ${
                      mapSortBy === s.id
                        ? 'bg-[#C86A1D] text-white shadow-xs'
                        : 'bg-[#FAF6EE] text-[#6B5E55] hover:text-[#231815] border border-[#E8DEC8]'
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
                          ? 'bg-[#FFFDF9] border-[#C86A1D] ring-2 ring-[#C86A1D]/20 shadow-sm'
                          : 'bg-white hover:bg-[#FAF6EE] border-[#E8DEC8] hover:border-[#D4C3A3]'
                      }`}
                      onClick={() => setSelectedDish(dish)}
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden shrink-0 border border-[#E8DEC8] bg-[#FAF6EE]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-full object-cover"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                          />
                          {dish.isSeedOilFree && (
                            <span className="absolute bottom-0 inset-x-0 bg-[#2D5A34] text-white text-[8px] font-bold uppercase text-center py-0.5 tracking-wider">
                              Oil-Free
                            </span>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
                            <span className="text-xs font-bold text-[#231815] truncate max-w-[160px]">
                              {dish.restaurant}
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-[#FAF6EE] text-[#C86A1D] border border-[#E8DEC8] text-[10px] font-bold flex items-center gap-0.5">
                              <MapPin className="w-2.5 h-2.5 text-[#C86A1D]" />
                              <span>{dish.distanceMiles} mi</span>
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#FDF5D9] text-[#8C5D0D] border border-[#F4E3A8] font-semibold">
                              {dish.cookingFat}
                            </span>
                          </div>

                          <h4 className="text-xs sm:text-sm font-bold text-[#231815] truncate leading-snug">
                            {dish.name}
                          </h4>

                          <div className="flex items-center gap-2 mt-1 text-[11px] font-medium text-[#6B5E55] flex-wrap">
                            <span className="text-[#231815] font-bold">{formatPrice(dish.price, dish.city, dish.id)}</span>
                            <span>&bull;</span>
                            <span className="text-[#231815] font-semibold flex items-center gap-0.5">
                              <Flame className="w-3 h-3 text-[#C86A1D]" />
                              {dish.calories} kcal
                            </span>
                            <span>&bull;</span>
                            <span className="text-[#2D5A34] font-medium">{dish.protein}g Protein</span>
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
                          className="px-3 py-1.5 rounded-xl bg-[#FAF6EE] hover:bg-[#F7F1E5] text-[#C86A1D] border border-[#E8DEC8] hover:border-[#C86A1D]/50 text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                          title="Show dish location on radar map"
                        >
                          <MapIcon className="w-3.5 h-3.5 text-[#C86A1D]" />
                          <span>Pin on Map</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setDetailDish(dish);
                          }}
                          className="px-3 py-1.5 rounded-xl bg-[#C86A1D] hover:bg-[#A84E18] text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer active:scale-95 shadow-xs"
                          title="View dish details"
                        >
                          <span>View Details</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center bg-white rounded-2xl border border-[#E8DEC8] space-y-3">
                  <p className="text-sm font-bold text-[#231815]">
                    Nothing matching your preferences nearby.
                  </p>
                  <p className="text-xs text-[#6B5E55]">
                    Try removing a filter or expanding your search.
                  </p>
                  <button
                    onClick={() => {
                      setMapDishSearch('');
                      setMapRadius(10);
                      resetFilters();
                    }}
                    className="px-4 py-2 rounded-xl bg-[#C86A1D] text-white text-xs font-bold transition-all hover:bg-[#A84E18] cursor-pointer shadow-xs"
                  >
                    Show Me More Options
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {mapViewMode === 'split' && (
          <div className="p-3 sm:p-4 flex-1 flex flex-col min-h-0 space-y-2.5 bg-[#FAF6EE]">
            {/* Top Map Pane (~42% height) */}
            <div className="relative h-[42%] min-h-[200px] rounded-2xl border border-[#E8DEC8] overflow-hidden shadow-xs bg-white">
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
            <div className="flex-1 flex flex-col min-h-0 bg-white rounded-2xl border border-[#E8DEC8] p-2.5 shadow-xs space-y-2">
              <div className="flex items-center justify-between gap-2 shrink-0 pb-1 border-b border-[#E8DEC8]">
                <div className="flex items-center gap-1.5">
                  <List className="w-3.5 h-3.5 text-[#C86A1D]" />
                  <span className="text-xs font-bold text-[#231815]">
                    Neighborhood Dish List ({mapDishesWithDistance.length})
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {['distance', 'protein', 'price'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setMapSortBy(s as any)}
                      className={`px-2 py-0.5 rounded-lg text-[10px] font-bold capitalize transition-all cursor-pointer ${
                        mapSortBy === s
                          ? 'bg-[#C86A1D] text-white'
                          : 'bg-[#FAF6EE] text-[#6B5E55] hover:text-[#231815] border border-[#E8DEC8]'
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
                          ? 'bg-[#FFFDF9] border-[#C86A1D] ring-2 ring-[#C86A1D]/20 shadow-xs'
                          : 'bg-[#FAF6EE] hover:bg-white border-[#E8DEC8]'
                      }`}
                      onClick={() => setSelectedDish(dish)}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-[#E8DEC8] bg-[#FAF6EE] relative">
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
                            <span className="text-xs font-semibold text-[#231815] truncate">
                              {dish.restaurant}
                            </span>
                            <span className="text-[10px] font-semibold text-[#6B5E55]">
                              &bull; {dish.distanceMiles} mi
                            </span>
                          </div>
                          <p className="text-xs font-bold text-[#231815] truncate">
                            {dish.name}
                          </p>
                          <p className="text-[10px] text-[#6B5E55] truncate font-medium">
                            <span className="text-[#231815] font-bold">{formatPrice(dish.price, dish.city, dish.id)}</span> &bull; <span className="text-[#2D5A34]">{dish.protein}g protein</span> &bull; {dish.cookingFat}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDish(dish);
                          }}
                          className={`p-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#C86A1D] text-white'
                              : 'bg-white text-[#6B5E55] hover:text-[#C86A1D] border border-[#E8DEC8]'
                          }`}
                          title="Center on map"
                        >
                          <MapIcon className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={getGoogleMapsDirectionsUrl({
                            restaurant: dish.restaurant,
                            address: dish.restaurantAddress,
                            city: dish.city,
                            coordinates: dish.coordinates,
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg bg-white hover:bg-[#FAF6EE] text-[#6B5E55] hover:text-[#C86A1D] border border-[#E8DEC8] text-xs font-bold transition-colors cursor-pointer"
                          title={`Get directions to ${dish.restaurant} on Google Maps`}
                        >
                          <Navigation className="w-3.5 h-3.5 fill-current" />
                        </a>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setDetailDish(dish);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-[#C86A1D] hover:bg-[#A84E18] text-white text-xs font-semibold transition-all cursor-pointer shadow-xs"
                          title="See what's in this dish"
                        >
                          Details
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
      {/* 2. TOP APP HEADER (Artisanal Organic Brand per Pinterest pin.it/6DBHBcDfO) */}
      {/* ========================================================================= */}
      <header
        id="main-app-header"
        className="sticky top-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#E8DEC8] shadow-2xs"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
            {/* Top/Left Brand Identity */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 shrink">
              <div
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FAF0DC] text-[#231815] flex items-center justify-center border border-[#E8DEC8] shrink-0 shadow-2xs group cursor-pointer hover:bg-[#F5E6CC] transition-colors"
                title="Healthy Vicinity Market & Kitchens"
              >
                {/* Artisanal spiral/swirl leaf mark inspired by the reference emblem */}
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#231815] group-hover:text-[#C86A1D] transition-colors shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" strokeOpacity="0.25" strokeWidth="1.5" />
                  <path d="M12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 4.5-1.8 4.8-4.2" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="cursor-pointer select-none min-w-0"
              >
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="font-serif font-black text-base sm:text-xl xl:text-2xl tracking-tight text-[#1A100C] leading-none truncate">
                    Healthy Vicinity<span className="text-[#C86A1D] text-xs sm:text-lg font-bold">&trade;</span>
                  </span>
                </div>
                <p className="hidden sm:flex text-[#6E594B] font-bold text-[9px] sm:text-[11px] tracking-wider uppercase mt-0.5 items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                  <span className="text-[#2C1E16]">Clean Kitchens</span>
                  <span className="text-[#C86A1D]">&bull;</span>
                  <span className="text-[#1E4D27]">Organic Table</span>
                </p>
              </div>
            </div>

            {/* Center Desktop Navigation Links per pin style (Visible on xl screens to prevent header icon crowding on laptops) */}
            <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 shrink-0">
              <button
                onClick={() => scrollToSection('healthy-food-guide-section')}
                className="text-[13px] font-semibold tracking-wide text-[#3D3028] hover:text-[#C86A1D] transition-colors cursor-pointer py-1 relative group"
              >
                <span>Food Guide</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C86A1D] group-hover:w-full transition-all duration-200" />
              </button>
              <button
                onClick={() => scrollToSection('snack-ideas-section')}
                className="text-[13px] font-semibold tracking-wide text-[#3D3028] hover:text-[#C86A1D] transition-colors cursor-pointer py-1 relative group"
              >
                <span>Snack Ideas</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C86A1D] group-hover:w-full transition-all duration-200" />
              </button>
              <button
                onClick={() => scrollToSection('kitchen-reels-section')}
                className="text-[13px] font-semibold tracking-wide text-[#3D3028] hover:text-[#C86A1D] transition-colors cursor-pointer py-1 relative group"
              >
                <span>Food Scouts</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C86A1D] group-hover:w-full transition-all duration-200" />
              </button>
              <button
                onClick={() => scrollToSection('explore-india-section')}
                className="text-[13px] font-semibold tracking-wide text-[#3D3028] hover:text-[#C86A1D] transition-colors cursor-pointer py-1 relative group"
              >
                <span>Culture Table</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C86A1D] group-hover:w-full transition-all duration-200" />
              </button>
              <button
                onClick={() => scrollToSection('dishes-section')}
                className="text-[13px] font-semibold tracking-wide text-[#3D3028] hover:text-[#C86A1D] transition-colors cursor-pointer py-1 relative group"
              >
                <span>Clean Dishes</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C86A1D] group-hover:w-full transition-all duration-200" />
              </button>
            </nav>

            {/* Right Controls: Search, Country, City, Scanner, and Caramel CTA Button */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {/* Minimalist Search Icon Button */}
              <button
                id="header-search-icon-btn"
                onClick={handleHeaderSearchClick}
                className="p-1.5 sm:p-2.5 rounded-full bg-white hover:bg-[#F9F5EE] text-[#1A100C] hover:text-[#C86A1D] border border-[#E0D4BE] hover:border-[#C86A1D]/60 transition-all cursor-pointer shadow-2xs active:scale-95 shrink-0 flex items-center justify-center"
                title="Search healthy dishes, ingredients, or dietary goals"
                aria-label="Search healthy dishes"
              >
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1A100C] shrink-0" />
              </button>

              {/* Country Switcher: 🇮🇳 India (INR) | 🇺🇸 USA (USD) */}
              <div
                id="header-country-switcher"
                className="hidden md:inline-flex items-center rounded-full bg-[#F4ECE1] p-0.5 sm:p-1 border border-[#E8DEC8] shrink-0 shadow-2xs"
                title="Switch country (auto-detected from your IP or location)"
              >
                <button
                  id="header-country-btn-in"
                  onClick={() => handleSwitchCountry('IN')}
                  className={`px-2 py-1 sm:px-2.5 sm:py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 shrink-0 ${
                    selectedCity.country === 'IN'
                      ? 'bg-[#C86A1D] text-white shadow-xs font-extrabold'
                      : 'text-[#6B5E55] hover:text-[#231815]'
                  }`}
                  title="India - 31 cities (₹ INR)"
                >
                  <span className="shrink-0">🇮🇳</span>
                  <span className="hidden lg:inline">IN</span>
                </button>
                <button
                  id="header-country-btn-us"
                  onClick={() => handleSwitchCountry('US')}
                  className={`px-2 py-1 sm:px-2.5 sm:py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 shrink-0 ${
                    selectedCity.country === 'US'
                      ? 'bg-[#C86A1D] text-white shadow-xs font-extrabold'
                      : 'text-[#6B5E55] hover:text-[#231815]'
                  }`}
                  title="United States - 30 cities ($ USD)"
                >
                  <span className="shrink-0">🇺🇸</span>
                  <span className="hidden lg:inline">US</span>
                </button>
              </div>

              {/* City Selector Pill Button */}
              <button
                id="header-city-selector-btn"
                onClick={() => setIsLocationModalOpen(true)}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full bg-white hover:bg-[#FDFBF7] text-[#1A100C] font-extrabold text-xs border border-[#E0D4BE] hover:border-[#C86A1D]/60 transition-all cursor-pointer max-w-[95px] xs:max-w-[120px] sm:max-w-[160px] group active:scale-95 shadow-2xs shrink-0"
                title="Where are you eating? Click to select city"
              >
                <span className="text-xs shrink-0">
                  {selectedCity.country === 'IN' ? '🇮🇳' : '📍'}
                </span>
                <span className="truncate text-left font-black text-[#1A100C] group-hover:text-[#C86A1D] transition-colors min-w-0">
                  {selectedCity.name}
                </span>
                <ChevronDown className="w-3 h-3 text-[#5A4638] group-hover:text-[#C86A1D] shrink-0 ml-0.5 transition-colors" />
              </button>

              {/* Quick Auto-Locate Button (XL screens only to preserve breathing room) */}
              <button
                id="header-quick-locate-btn"
                onClick={handleQuickLocate}
                disabled={isAutoLocating}
                className="hidden xl:inline-flex p-2 sm:p-2.5 rounded-full bg-white hover:bg-[#EBF4ED] text-[#2D5A34] border border-[#E0D4BE] hover:border-[#2D5A34]/60 transition-all cursor-pointer active:scale-95 shadow-2xs shrink-0 disabled:opacity-60"
                title="Auto-detect location via GPS or IP address"
              >
                {isAutoLocating ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#2D5A34] shrink-0" />
                ) : (
                  <Navigation className="w-3.5 h-3.5 text-[#2D5A34] shrink-0" />
                )}
              </button>

              {/* AI Menu Scanner Button */}
              <button
                id="open-menu-scanner-btn"
                onClick={() => setIsScannerOpen(true)}
                className="hidden lg:inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-[#EBF4ED] hover:bg-[#DCEDE0] text-[#1C4623] text-xs font-black transition-all cursor-pointer border border-[#BBD8C0] active:scale-95 shrink-0 shadow-2xs"
                title="Scan any restaurant menu with AI"
              >
                <ScanLine className="w-3.5 h-3.5 text-[#2D5A34] shrink-0" />
                <span className="shrink-0">AI Scanner</span>
              </button>

              {/* The Rich Amber / Caramel Pill CTA Button */}
              <button
                id="header-open-map-btn"
                onClick={() => setIsMapOpen(true)}
                className="rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 bg-[#C86A1D] hover:bg-[#B35912] active:bg-[#994708] text-white font-black text-xs sm:text-sm tracking-wide shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex items-center gap-1 sm:gap-1.5 shrink-0 active:scale-95 whitespace-nowrap"
                title="Find healthy food near me & explore radar"
              >
                <Radar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-200 shrink-0" />
                <span className="hidden sm:inline">Find Food</span>
                <span className="sm:hidden">Radar</span>
                <span className="px-1.5 py-0.5 rounded-full bg-white/25 text-white font-black text-[10px] border border-white/20 hidden md:inline shrink-0">
                  {cityReelsCount}
                </span>
              </button>
            </div>
          </div>

          {/* Quick-Navigation Strip (Clean Horizontal Scroll with High Contrast Text) */}
          <div className="flex xl:hidden items-center gap-1.5 sm:gap-2 overflow-x-auto py-2.5 border-t border-[#E8DEC8]/80 no-scrollbar text-xs font-bold text-[#1A100C]">
            <button
              onClick={() => setIsScannerOpen(true)}
              className="px-2.5 py-1 rounded-full bg-[#EBF4ED] hover:bg-[#DCEDE0] text-[#1E4324] font-black border border-[#BBD8C0] whitespace-nowrap shrink-0 flex items-center gap-1 active:scale-95 transition-all shadow-2xs"
              title="Scan any restaurant menu with AI"
            >
              <ScanLine className="w-3.5 h-3.5 text-[#2D5A34]" />
              <span>AI Menu Scanner</span>
            </button>
            <button
              onClick={() => scrollToSection('healthy-food-guide-section')}
              className="px-3 py-1 rounded-full bg-white hover:bg-[#F7F2E7] border border-[#E0D4BE] text-[#1A100C] font-bold whitespace-nowrap shrink-0 hover:text-[#C86A1D] active:scale-95 transition-all shadow-2xs"
            >
              Food Guide
            </button>
            <button
              onClick={() => scrollToSection('snack-ideas-section')}
              className="px-3 py-1 rounded-full bg-white hover:bg-[#F7F2E7] border border-[#E0D4BE] text-[#1A100C] font-bold whitespace-nowrap shrink-0 hover:text-[#C86A1D] active:scale-95 transition-all shadow-2xs"
            >
              Snack Ideas
            </button>
            <button
              onClick={() => scrollToSection('kitchen-reels-section')}
              className="px-3 py-1 rounded-full bg-white hover:bg-[#F7F2E7] border border-[#E0D4BE] text-[#1A100C] font-bold whitespace-nowrap shrink-0 hover:text-[#C86A1D] active:scale-95 transition-all shadow-2xs"
            >
              Food Scouts
            </button>
            <button
              onClick={() => scrollToSection('explore-india-section')}
              className="px-3 py-1 rounded-full bg-white hover:bg-[#F7F2E7] border border-[#E0D4BE] text-[#1A100C] font-bold whitespace-nowrap shrink-0 hover:text-[#C86A1D] active:scale-95 transition-all shadow-2xs"
            >
              Culture Table
            </button>
            <button
              onClick={() => scrollToSection('dishes-section')}
              className="px-3 py-1 rounded-full bg-white hover:bg-[#F7F2E7] border border-[#E0D4BE] text-[#1A100C] font-bold whitespace-nowrap shrink-0 hover:text-[#C86A1D] active:scale-95 transition-all shadow-2xs"
            >
              Clean Dishes
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MAIN VIEWPORT CONTENT                                                     */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto w-full px-3.5 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-6 sm:space-y-8 flex-1 pb-28 sm:pb-8">
        {/* Automatic Location / IP Detection Notification */}
        {locationBannerText && (
          <div
            id="location-detection-banner"
            className="px-4 py-3 rounded-2xl bg-[#EBF4ED] border border-[#C5DEC9] text-xs text-[#231815] flex items-center justify-between gap-3 shadow-xs animate-in fade-in slide-in-from-top-2"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#2D5A34] animate-pulse shrink-0" />
              <span className="font-semibold text-[#1C3D23]">{locationBannerText}</span>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => setIsLocationModalOpen(true)}
                className="text-[11px] font-bold text-[#C86A1D] hover:underline cursor-pointer"
              >
                Change city
              </button>
              <button
                onClick={() => setLocationBannerText(null)}
                className="p-1 rounded-md text-[#6B5E55] hover:text-[#231815] cursor-pointer"
                title="Dismiss banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
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
        {/* HERO SPOTLIGHT: SUN-DRENCHED GOLDEN CITRUS ORGANIC MARKET BANNER           */}
        {/* ========================================================================= */}
        <section className="relative rounded-[32px] bg-gradient-to-br from-[#F5C842] via-[#F9D65E] to-[#EFA928] text-[#231815] p-5 sm:p-8 lg:p-10 overflow-hidden border border-[#E6B830] shadow-xl">
          {/* Subtle Ambient Sun & Citrus Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-80 h-80 bg-[#E08A1E]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-10">
            <div className="max-w-3xl space-y-3.5 sm:space-y-4.5 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#180E09] border border-white/80 text-[11px] sm:text-xs font-black tracking-wide shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C86A1D] shrink-0" />
                <span>Wholesome Kitchen Transparency &bull; {selectedCity.name}</span>
              </div>

              <h1 className="font-serif font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight sm:leading-[1.12] text-[#150D08]">
                Wholesome, healthy food <br className="hidden sm:inline" />
                <span className="italic font-bold text-[#481800] underline decoration-[#A84E18]/60 decoration-wavy decoration-2">
                  rooted in community.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#2E1D0E] font-semibold leading-relaxed max-w-2xl">
                Discover neighborhood kitchens honoring traditional preparation, seed-oil-free fats, nutrient-dense ingredients, and transparent macros in {selectedCity.name}.
              </p>

              {/* CTAs */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
                <button
                  id="hero-open-map-btn"
                  onClick={() => setIsMapOpen(true)}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#231815] hover:bg-[#3B2923] text-[#FAF6EE] font-bold text-xs sm:text-sm transition-all duration-200 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2 group shadow-md"
                >
                  <Radar className="w-4 h-4 text-[#F5C842] group-hover:rotate-45 transition-transform shrink-0" />
                  <span>Find Healthy Food Near Me</span>
                  <ChevronRight className="w-4 h-4 text-[#FAF6EE] group-hover:translate-x-0.5 transition-transform shrink-0" />
                </button>

                <button
                  onClick={() => {
                    const elem = document.getElementById('dishes-section');
                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white/85 hover:bg-white text-[#231815] font-bold text-xs sm:text-sm transition-all duration-200 border border-white/80 shadow-xs active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Explore Dishes</span>
                </button>
              </div>

              {/* Credibility verification metrics strip */}
              <div className="pt-3 border-t border-[#231815]/15 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 text-[11px] sm:text-xs text-[#4A3210] font-bold">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2D5A34] shrink-0" />
                  <span className="truncate">Restaurant-Confirmed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2D5A34] shrink-0" />
                  <span className="truncate">Nutrition &amp; Macros</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2D5A34] shrink-0" />
                  <span className="truncate">Seed-Oil-Free Fats</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2D5A34] shrink-0" />
                  <span className="truncate">Ancestral &amp; Local Roots</span>
                </div>
              </div>
            </div>

            {/* Right-Side Organic Market Badge (Large screens) */}
            <div className="hidden lg:flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-md rounded-3xl border border-white/90 shadow-lg text-center w-72 shrink-0 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-[#FDF2C8] text-[#C86A1D] flex items-center justify-center border border-[#F3DFC1] text-2xl shadow-xs">
                🌾
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C86A1D] block">
                  Market Promise
                </span>
                <h3 className="font-serif font-bold text-base text-[#231815] mt-0.5">
                  Clean Heritage Dining
                </h3>
              </div>
              <p className="text-[11px] text-[#6B5E55] leading-relaxed">
                Zero refined seed oils, unadulterated pasture-raised fats, and whole food ingredients only.
              </p>
              <div className="w-full pt-1 border-t border-[#E8DEC8] flex flex-wrap gap-1 justify-center">
                <span className="px-2 py-0.5 rounded-md bg-[#EBF4ED] text-[#2D5A34] text-[10px] font-bold">
                  A2 Desi Ghee
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#FDF2C8] text-[#914605] text-[10px] font-bold">
                  Pastured Tallow
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#FAF6EE] text-[#6B5E55] text-[10px] font-bold border border-[#E8DEC8]">
                  Ancient Grains
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* QUICK CATEGORY PILL WIDGETS (SSR SLOT)                                    */}
        {/* ========================================================================= */}
        {widgetsSlot && (
          <section aria-label="Explore Food Categories" className="pt-2">
            {widgetsSlot}
          </section>
        )}

        {/* ========================================================================= */}
        {/* BENEFIT-DRIVEN BENTO FILTERS MATRIX                                       */}
        {/* ========================================================================= */}
        <section aria-label="Benefit-Driven Filters">
          <BentoFilters
            filters={filters}
            onChange={handleFilterChange}
            onReset={resetFilters}
            totalDishesCount={allCityDishesCount}
            filteredCount={filteredDishes.length}
          />
        </section>

        {/* ========================================================================= */}
        {/* EAT CLEAN FEEL AMAZING: WHOLESOME HEALTHY FOOD LIST & SNACK IDEAS         */}
        {/* ========================================================================= */}
        <HealthyFoodGuide
          cityName={selectedCity.name}
          dishesCount={filteredDishes.length}
          onFilterByCategory={(keyword) => {
            setFilters((prev) => ({
              ...prev,
              search: keyword,
            }));
            const elem = document.getElementById('dishes-section');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          onFilterBySnack={(snack) => {
            setFilters((prev) => ({
              ...prev,
              search: snack,
            }));
            const elem = document.getElementById('dishes-section');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* ========================================================================= */}
        {/* COMPACT SECTION: EXPLORE HEALTHY FOOD IN INDIA                            */}
        {/* ========================================================================= */}
        <ExploreIndiaSection
          selectedCityName={selectedCity.name}
          onSelectCityByName={handleSelectCityByName}
          onOpenLocationModal={() => setIsLocationModalOpen(true)}
          onUseMyLocation={handleQuickLocate}
          isLocating={isAutoLocating}
        />

        {/* ========================================================================= */}
        {/* DISHES SECTION / LOCAL DISCOVERY                                          */}
        {/* ========================================================================= */}
        <section id="dishes-section" className="space-y-4 relative scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-2xl font-serif font-black text-[#231815] flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#C86A1D] shrink-0" />
                  <span>Wholesome Dishes in {selectedCity.name}</span>
                </h2>
                <span className="text-xs font-bold text-[#914605] bg-[#FDF2C8] px-3 py-1 rounded-full border border-[#F3DFC1] shrink-0">
                  {filteredDishes.length} options nearby
                </span>
              </div>
              <p className="text-xs text-[#6B5E55] mt-1 font-medium">
                Locally sourced &amp; kitchen-verified dishes matched to your dietary preferences.
              </p>
            </div>

            <button
              onClick={() => setIsMapOpen(true)}
              className="text-xs font-bold text-[#C86A1D] hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-auto shrink-0 transition-colors"
            >
              <span>See More on Radar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {filteredDishes.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative">
                {displayedDishes.map((dish) => (
                  <DishCard
                    key={dish.id}
                    dish={dish}
                    isSelected={selectedDish?.id === dish.id}
                    onSelect={handleSelectDish}
                    onOpenDetails={handleOpenDetails}
                  />
                ))}
              </div>

              {filteredDishes.length > visibleCount && (
                <div className="pt-6 pb-2 flex flex-col items-center justify-center gap-2">
                  <button
                    id="load-more-dishes-btn"
                    onClick={() => setVisibleCount((prev) => prev + 12)}
                    className="px-6 py-3 rounded-2xl bg-white hover:bg-[#FDFBF7] text-[#1A100C] border-2 border-[#E8DEC8] hover:border-[#C86A1D] text-xs sm:text-sm font-black transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95 flex items-center gap-2.5"
                  >
                    <span>Show More Wholesome Dishes</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#FAF6EE] text-[#C86A1D] text-[11px] font-extrabold border border-[#E8DEC8]">
                      +{filteredDishes.length - visibleCount} more
                    </span>
                    <ChevronDown className="w-4 h-4 text-[#C86A1D]" />
                  </button>
                  <p className="text-[11px] text-[#7A6B60] font-medium">
                    Showing {Math.min(visibleCount, filteredDishes.length)} of {filteredDishes.length} verified options in {selectedCity.name}
                  </p>
                </div>
              )}
            </>
          ) : allCityDishesCount === 0 ? (
            <div className="p-8 sm:p-12 text-center bg-[#FFFFFF] border border-[#E8DEC8] rounded-[28px] space-y-3.5 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF2C8] text-[#C86A1D] flex items-center justify-center mx-auto border border-[#F3DFC1]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-[#231815] text-base sm:text-lg">
                More wholesome options coming soon.
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E55] max-w-md mx-auto font-medium">
                We&apos;re currently scouting community kitchens and wholesome dining in {selectedCity.name}.
              </p>
              <div className="pt-2 flex items-center justify-center gap-2.5 flex-wrap">
                <button
                  id="empty-explore-cities-btn"
                  onClick={() => setIsLocationModalOpen(true)}
                  className="px-4 py-2.5 rounded-2xl bg-[#EBF4ED] hover:bg-[#DCEDE0] text-[#2D5A34] text-xs font-bold border border-[#C5DEC9] transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Explore Other Cities</span>
                </button>
                <button
                  id="empty-suggest-menu-btn"
                  onClick={() => setIsScannerOpen(true)}
                  className="px-4 py-2.5 rounded-2xl bg-[#C86A1D] hover:bg-[#B35912] text-white text-xs font-bold transition-all cursor-pointer active:scale-95 shadow-xs flex items-center gap-1.5"
                >
                  <ScanLine className="w-3.5 h-3.5" />
                  <span>Scan Menu in {selectedCity.name}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="p-10 sm:p-12 text-center bg-[#FFFFFF] border border-[#E8DEC8] rounded-[28px] space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF2C8] text-[#C86A1D] flex items-center justify-center mx-auto border border-[#F3DFC1]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-[#231815] text-base sm:text-lg">
                No matching dishes with these filters.
              </h3>
              <p className="text-xs text-[#6B5E55] max-w-md mx-auto font-medium">
                Try loosening your macro limits or resetting diet tags to see more wholesome meals.
              </p>
              <div className="pt-2">
                <button
                  id="empty-reset-filters-btn"
                  onClick={resetFilters}
                  className="px-5 py-2.5 rounded-2xl bg-[#C86A1D] hover:bg-[#B35912] text-white text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 shadow-xs"
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* CULTURE & COMMUNITY TABLE: HERITAGE CULINARY ROOTS & LOCAL SCOUTS          */}
        {/* ========================================================================= */}
        <section
          id="culture-community-section"
          className="p-6 sm:p-10 rounded-[32px] bg-[#FFFFFF] border border-[#E8DEC8] shadow-xs space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C86A1D]">
                <span>🌿</span>
                <span>Culinary Heritage &amp; Trust</span>
              </div>
              <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#231815] mt-1">
                The Wholesome Community Table
              </h2>
              <p className="text-xs sm:text-sm text-[#6B5E55] mt-1 max-w-2xl">
                We celebrate kitchens that honor ancestral preparation, pure culinary traditions, and direct neighborhood transparency.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#2D5A34] bg-[#EBF4ED] px-3.5 py-1.5 rounded-full border border-[#C5DEC9]">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Unadulterated Ingredients</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Ancestral Fats */}
            <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E8DEC8] space-y-2.5 flex flex-col justify-between hover:border-[#C86A1D]/40 transition-all">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2C8] text-[#C86A1D] flex items-center justify-center text-xl border border-[#F3DFC1]">
                  🧈
                </div>
                <h3 className="font-serif font-bold text-base text-[#231815]">
                  Ancestral Fats &amp; Ghee
                </h3>
                <p className="text-xs text-[#6B5E55] leading-relaxed">
                  Traditional A2 Desi Gir Cow bilona ghee, 100% pastured tallow, and cold-pressed extra virgin olive oils. Zero industrial deodorized seed oils.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E8DEC8] text-[11px] font-bold text-[#2D5A34]">
                ✓ High heat stability &bull; Natural butyrate
              </div>
            </div>

            {/* Card 2: Ancient Millets & Grains */}
            <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E8DEC8] space-y-2.5 flex flex-col justify-between hover:border-[#C86A1D]/40 transition-all">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#EBF4ED] text-[#2D5A34] flex items-center justify-center text-xl border border-[#C5DEC9]">
                  🌾
                </div>
                <h3 className="font-serif font-bold text-base text-[#231815]">
                  Ancient Millets &amp; Grains
                </h3>
                <p className="text-xs text-[#6B5E55] leading-relaxed">
                  Heritage ragi, jowar, foxtail millets, and slow-fermented wild sourdough. Naturally gluten-conscious, rich in micro-minerals and prebiotic fiber.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E8DEC8] text-[11px] font-bold text-[#2D5A34]">
                ✓ Low glycemic index &bull; Gut microbiome friendly
              </div>
            </div>

            {/* Card 3: Farm-to-Table Transparency */}
            <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E8DEC8] space-y-2.5 flex flex-col justify-between hover:border-[#C86A1D]/40 transition-all">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2C8] text-[#C86A1D] flex items-center justify-center text-xl border border-[#F3DFC1]">
                  🥕
                </div>
                <h3 className="font-serif font-bold text-base text-[#231815]">
                  Clean Soil &amp; Pastures
                </h3>
                <p className="text-xs text-[#6B5E55] leading-relaxed">
                  Partnered with local regenerative farms. 100% grass-fed ruminant meats, pasture-raised poultry, organic seasonal vegetables, and wild herbs.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E8DEC8] text-[11px] font-bold text-[#2D5A34]">
                ✓ Hormone-free &bull; Antibiotic-free
              </div>
            </div>

            {/* Card 4: Neighborhood Food Scouts */}
            <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E8DEC8] space-y-2.5 flex flex-col justify-between hover:border-[#C86A1D]/40 transition-all">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#EBF4ED] text-[#2D5A34] flex items-center justify-center text-xl border border-[#C5DEC9]">
                  🎥
                </div>
                <h3 className="font-serif font-bold text-base text-[#231815]">
                  Scout Verified Reels
                </h3>
                <p className="text-xs text-[#6B5E55] leading-relaxed">
                  Real neighborhood scouts and culinary investigators record kitchen proof directly on video reels so you can see authentic pan prep with your own eyes.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E8DEC8] text-[11px] font-bold text-[#2D5A34]">
                ✓ Live kitchen proof &bull; Community reviewed
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BRAND DIFFERENTIATION & VALUE PROPOSITION                                  */}
        {/* ========================================================================= */}
        <section id="mission-section" className="scroll-mt-24 p-6 sm:p-8 rounded-[28px] bg-[#FFFFFF] border border-[#E8DEC8] shadow-xs relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-bold text-[#C86A1D] uppercase tracking-wider">
              Our Vision &amp; Mission
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#231815] leading-snug">
              Make every meal a choice you can feel good about.
            </h3>
            <p className="text-xs sm:text-sm text-[#2D5A34] font-semibold">
              A restaurant tells you where to eat. HealthyVicinity helps you decide what to order.
            </p>
            <p className="text-xs sm:text-sm text-[#6B5E55] leading-relaxed">
              Instead of stopping at generic restaurant ratings, HealthyVicinity helps you discover individual dishes based on the things you care about — from protein and calories to cooking fats and authentic preparation methods.
            </p>
            <div className="pt-3 border-t border-[#E8DEC8] flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C86A1D] mt-1.5 shrink-0" />
              <p className="text-xs font-medium text-[#231815] font-serif italic">
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
            <span className="text-[11px] font-bold text-[#2D5A34] uppercase tracking-wider">
              Verification &amp; Transparency
            </span>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-[#231815] mt-1">
              Why Trust the Details?
            </h3>
            <p className="text-xs text-[#6B5E55] mt-1 max-w-2xl">
              HealthyVicinity shows you more than a restaurant name. We help you understand what&apos;s in the dish, how it&apos;s prepared and where the information comes from.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5.5 rounded-2xl bg-[#FFFFFF] border border-[#E8DEC8] space-y-2.5 shadow-xs">
              <div className="text-xs font-mono font-bold text-[#C86A1D]">01</div>
              <h4 className="font-serif font-bold text-[#231815] text-base">See the Dish</h4>
              <p className="text-xs text-[#6B5E55] leading-relaxed">
                Find the actual dishes that match your preferences, not just a vague restaurant recommendation.
              </p>
            </div>

            <div className="p-5.5 rounded-2xl bg-[#FFFFFF] border border-[#E8DEC8] space-y-2.5 shadow-xs">
              <div className="text-xs font-mono font-bold text-[#C86A1D]">02</div>
              <h4 className="font-serif font-bold text-[#231815] text-base">Understand the Details</h4>
              <p className="text-xs text-[#6B5E55] leading-relaxed">
                See nutrition, ingredients and cooking methods in plain language so you can make informed choices with ease.
              </p>
            </div>

            <div className="p-5.5 rounded-2xl bg-[#FFFFFF] border border-[#E8DEC8] space-y-2.5 shadow-xs">
              <div className="text-xs font-mono font-bold text-[#C86A1D]">03</div>
              <h4 className="font-serif font-bold text-[#231815] text-base">Know the Source</h4>
              <p className="text-xs text-[#6B5E55] leading-relaxed">
                See where important information comes from and when it was last checked, from menu listings to restaurant direct confirmations.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CLEAN ZONE SECTION                                                        */}
        {/* ========================================================================= */}
        <section id="clean-zone" className="p-6 sm:p-8 rounded-[28px] bg-gradient-to-r from-[#FBF6EE] via-[#F6EFE2] to-[#FBF6EE] border border-[#E8DEC8] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF4ED] flex items-center justify-center text-[#2D5A34] shrink-0 border border-[#C5DEC9]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="font-serif font-bold text-[#231815] text-base uppercase tracking-wider">
                  Clean Zone
                </h4>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#2D5A34] text-white font-bold">
                  Stricter Preferences
                </span>
              </div>
              <p className="text-xs font-semibold text-[#2D5A34]">
                For people who want a closer look at ingredients and cooking methods.
              </p>
              <p className="text-xs text-[#6B5E55] leading-relaxed max-w-xl">
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
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#2D5A34] hover:bg-[#234729] text-white text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center gap-1.5 shrink-0 shadow-xs"
          >
            <span>Filter Clean Zone Dishes</span>
          </button>
        </section>

        {/* ========================================================================= */}
        {/* FOOTER BANNER: HIGH PROTEIN • HIGH FIBER • LOW CAL • LOW SUGAR             */}
        {/* ========================================================================= */}
        <section
          id="clean-fuel-footer-banner"
          className="rounded-[32px] bg-gradient-to-br from-[#2D5A34] via-[#234A29] to-[#1B3B20] border border-[#3E7047] p-8 sm:p-10 text-center space-y-4 relative overflow-hidden shadow-xl text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#D2ECD6] flex items-center justify-center gap-2 flex-wrap">
              <span>HIGH PROTEIN</span>
              <span>&bull;</span>
              <span>HIGH FIBER</span>
              <span>&bull;</span>
              <span>LOW CAL</span>
              <span>&bull;</span>
              <span>LOW SUGAR</span>
              <span>&bull;</span>
              <span>100% SEED-OIL-FREE</span>
              <span>&bull;</span>
              <span>PURE ANIMAL &amp; FRUIT FATS</span>
            </p>
            <h2 className="font-serif font-black text-2xl sm:text-4xl tracking-tight text-white">
              CLEAN FUEL. WHOLESOME LIVING.
            </h2>
            <div className="pt-2">
              <button
                onClick={() => setIsMapOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F5C842] hover:bg-[#F9D65E] text-[#231815] text-xs font-black transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span>Explore Map</span>
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FOOTER                                                                    */}
        {/* ========================================================================= */}
        <footer className="pt-8 pb-4 border-t border-[#E8DEC8] text-[#231815] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif font-bold text-base text-[#231815]">
                A restaurant tells you where to eat. We help you decide what to order.
              </h4>
              <p className="text-xs text-[#6B5E55] mt-1 max-w-xl leading-relaxed">
                HealthyVicinity illuminates what&apos;s truly inside your food — from ingredients and cooking oils to complete nutritional profiles.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#6B5E55]">
              <span>Better choices start with better information.</span>
            </div>
          </div>

          {/* Programmatic SEO City Hub Navigation */}
          <div className="pt-4 pb-2 border-t border-[#E8DEC8]">
            <p className="text-[11px] font-bold text-[#C86A1D] uppercase tracking-wider mb-2">
              Verified Clean Dining City Guides:
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-[#6B5E55]">
              <Link href="/austin" className="hover:text-[#C86A1D] transition-colors">Austin, TX</Link>
              <span>&bull;</span>
              <Link href="/nyc" className="hover:text-[#C86A1D] transition-colors">New York, NY</Link>
              <span>&bull;</span>
              <Link href="/los-angeles" className="hover:text-[#C86A1D] transition-colors">Los Angeles, CA</Link>
              <span>&bull;</span>
              <Link href="/san-francisco" className="hover:text-[#C86A1D] transition-colors">San Francisco, CA</Link>
              <span>&bull;</span>
              <Link href="/miami" className="hover:text-[#C86A1D] transition-colors">Miami, FL</Link>
              <span>&bull;</span>
              <Link href="/chicago" className="hover:text-[#C86A1D] transition-colors">Chicago, IL</Link>
              <span>&bull;</span>
              <Link href="/dallas" className="hover:text-[#C86A1D] transition-colors">Dallas, TX</Link>
              <span>&bull;</span>
              <Link href="/houston" className="hover:text-[#C86A1D] transition-colors">Houston, TX</Link>
              <span>&bull;</span>
              <Link href="/scottsdale" className="hover:text-[#C86A1D] transition-colors">Scottsdale, AZ</Link>
              <span>&bull;</span>
              <Link href="/denver" className="hover:text-[#C86A1D] transition-colors">Denver, CO</Link>
              <span>&bull;</span>
              <Link href="/seattle" className="hover:text-[#C86A1D] transition-colors">Seattle, WA</Link>
              <span>&bull;</span>
              <Link href="/nashville" className="hover:text-[#C86A1D] transition-colors">Nashville, TN</Link>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B5E55]">
            <p>&copy; {new Date().getFullYear()} HealthyVicinity. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMapOpen(true)}
                className="hover:text-[#C86A1D] transition-colors cursor-pointer"
              >
                Nearby Map
              </button>
              <button
                onClick={() => {
                  const elem = document.getElementById('clean-zone');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-[#C86A1D] transition-colors cursor-pointer"
              >
                Clean Zone
              </button>
              <button
                onClick={() => setIsScannerOpen(true)}
                className="hover:text-[#C86A1D] transition-colors cursor-pointer"
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
          className="group px-4 py-2 sm:px-5 sm:py-3 rounded-full bg-[#231815] hover:bg-[#3B2923] text-[#FAF6EE] font-bold text-xs shadow-xl shadow-black/20 flex items-center gap-2 sm:gap-2.5 border border-[#3E2B25] transition-all duration-200 cursor-pointer active:scale-95 whitespace-nowrap"
          title="Slide out the interactive map from the left"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C842] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C842]" />
          </span>
          <span>Find Food Near Me</span>
          <span className="px-1.5 py-0.5 rounded-md bg-[#F5C842] text-[#231815] text-[10px] font-black">
            {filteredDishes.length}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#FAF6EE] group-hover:translate-x-0.5 transition-transform" />
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

      {/* Location Selector Modal ("Where are you eating?") */}
      <LocationSelectorModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        selectedCity={selectedCity}
        onSelectCity={handleSelectCityConfig}
      />
    </div>
  );
}
