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
import DishCard from '@/components/DishCard';
import DishDetailModal from '@/components/DishDetailModal';
import MenuScannerModal from '@/components/MenuScannerModal';
import InteractiveMap from '@/components/InteractiveMap';
import BentoFilters, { FilterState } from '@/components/BentoFilters';
import ReelsBar from '@/components/ReelsBar';
import { Reel, ReelCity, getCityReels, REELS_DATA } from '@/lib/reelsData';
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
import LocationSelectorModal from '@/components/LocationSelectorModal';
import ExploreIndiaSection from '@/components/ExploreIndiaSection';

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

export default function HomePage() {
  const [dishes, setDishes] = useState<Dish[]>(INITIAL_DISHES);
  // Initial state is strictly identical on server and client to prevent hydration mismatch
  const [selectedCity, setSelectedCity] = useState<CityLocation>(() => {
    return toCityLocation(getDefaultCityForCountry('US'));
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
    const cityDishes = dishes.filter((d) => d.city === loc.name);
    if (cityDishes.length > 0) {
      setSelectedDish(cityDishes[0]);
    } else {
      setSelectedDish(null);
    }
  }, [dishes]);

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

  const handleSelectCityByName = useCallback((cityName: string) => {
    const config = getCityConfigByName(cityName);
    if (config) {
      handleSelectCityConfig(config, true);
    } else {
      const loc = CITY_LOCATIONS.find((c) => c.name.toLowerCase() === cityName.toLowerCase());
      if (loc) {
        setSelectedCity(loc);
        const cityDishes = dishes.filter((d) => d.city === loc.name);
        setSelectedDish(cityDishes.length > 0 ? cityDishes[0] : null);
      }
    }
  }, [handleSelectCityConfig, dishes]);

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
  }, [dishes, filters, selectedCity, selectedCookingFat]);

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
                      {selectedDish.name} &bull; <span className="text-[#35E27F] font-bold">{formatPrice(selectedDish.price, selectedDish.city, selectedDish.id)}</span>
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
                    <span>View Dish Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    id="dismiss-bottom-preview-btn"
                    onClick={() => setSelectedDish(null)}
                    className="p-2 rounded-xl bg-[#0F231B] hover:bg-[#142C23] text-[#A8B5AE] hover:text-[#F5F7F3] border border-[#1B3B2F] transition-all cursor-pointer active:scale-95"
                    title="Dismiss selection"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="px-3.5 py-2.5 rounded-xl bg-[#0B1A14] border border-[#1B3B2F] text-[#A8B5AE] text-xs flex items-center justify-between shrink-0">
                <span className="flex items-center gap-2 text-[11px] font-medium text-[#F5F7F3]">
                  <MapPin className="w-3.5 h-3.5 text-[#35E27F] shrink-0" />
                  <span>Select any dish on the map to see ingredients and nutrition</span>
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
                  { id: 'price', label: selectedCity.country === 'IN' ? 'Price ₹' : 'Price $' },
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
                              Oil-Free
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
                            <span className="text-[#35E27F] font-bold">{formatPrice(dish.price, dish.city, dish.id)}</span>
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
                          ? 'bg-[#0F261D] border-[#255C42]'
                          : 'bg-[#07130F] hover:bg-[#0B1A14] border-[#1B3B2F] hover:border-[#255C42]/50'
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
                            <span className="text-[10px] font-semibold text-[#A8B5AE]">
                              &bull; {dish.distanceMiles} mi
                            </span>
                          </div>
                          <p className="text-xs font-bold text-[#F5F7F3] truncate">
                            {dish.name}
                          </p>
                          <p className="text-[10px] text-[#A8B5AE] truncate font-medium">
                            <span className="text-[#35E27F] font-bold">{formatPrice(dish.price, dish.city, dish.id)}</span> &bull; {dish.protein}g protein &bull; {dish.cookingFat}
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
                              ? 'bg-[#184632] text-[#35E27F] border border-[#255C42]'
                              : 'bg-[#0F231B] text-[#A8B5AE] hover:text-[#35E27F] hover:bg-[#142C23] border border-[#1B3B2F]'
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
                          className="p-1.5 rounded-lg bg-[#0F231B] hover:bg-[#142C23] text-[#A8B5AE] hover:text-[#35E27F] border border-[#1B3B2F] text-xs font-bold transition-colors cursor-pointer"
                          title={`Get directions to ${dish.restaurant} on Google Maps`}
                        >
                          <Navigation className="w-3.5 h-3.5 fill-current" />
                        </a>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setDetailDish(dish);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-[#143B2A] hover:bg-[#1B4D36] text-[#DDFBE9] border border-[#1B3B2F] text-xs font-semibold transition-all cursor-pointer shadow-xs"
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
                <span className="font-extrabold text-sm sm:text-lg lg:text-xl tracking-tight text-[#F5F7F3] leading-none">
                  Healthy Vicinity <span className="text-[#35E27F]">LIVE</span>
                </span>
                <span className="hidden md:inline-flex px-2 py-0.5 rounded-md bg-[#123D2A] text-[#35E27F] text-[10px] font-bold tracking-wider uppercase border border-[#1B3B2F] items-center gap-1 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35E27F] animate-pulse" />
                  <span>Verified</span>
                </span>
              </div>
              <p className="hidden sm:flex text-[#A8B5AE] font-medium text-[11px] sm:text-xs mt-0.5 items-center gap-1.5">
                <span className="text-[#35E27F] font-semibold">Bio-Individual Dining Engine</span>
              </p>
            </div>
          </div>

          {/* Controls: Country Switcher, City Dropdown, Map Radar, and AI Scanner */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Country Switcher: 🇮🇳 India (INR) | 🇺🇸 USA (USD) */}
            <div
              id="header-country-switcher"
              className="inline-flex items-center rounded-xl bg-[#0B1A14] p-0.5 sm:p-1 border border-[#1B3B2F] shrink-0 shadow-xs"
              title="Switch country (auto-detected from your IP or location)"
            >
              <button
                id="header-country-btn-in"
                onClick={() => handleSwitchCountry('IN')}
                className={`px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCity.country === 'IN'
                    ? 'bg-[#35E27F] text-[#07130F] shadow-xs font-extrabold'
                    : 'text-[#A8B5AE] hover:text-[#F5F7F3]'
                }`}
                title="India - 31 cities (₹ INR)"
              >
                <span>🇮🇳</span>
                <span className="hidden xs:inline sm:inline">India</span>
              </button>
              <button
                id="header-country-btn-us"
                onClick={() => handleSwitchCountry('US')}
                className={`px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCity.country === 'US'
                    ? 'bg-[#35E27F] text-[#07130F] shadow-xs font-extrabold'
                    : 'text-[#A8B5AE] hover:text-[#F5F7F3]'
                }`}
                title="United States - 30 cities ($ USD)"
              >
                <span>🇺🇸</span>
                <span className="hidden xs:inline sm:inline">USA</span>
              </button>
            </div>

            {/* City Selector Button (Opens Location UX Modal: "Where are you eating?") */}
            <button
              id="header-city-selector-btn"
              onClick={() => setIsLocationModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2.5 rounded-xl bg-[#0B1A14] hover:bg-[#0F231B] text-[#F5F7F3] font-bold text-xs border border-[#1B3B2F] hover:border-[#35E27F]/60 transition-all cursor-pointer max-w-[135px] sm:max-w-[200px] group active:scale-95 shadow-sm"
              title="Where are you eating? Click to select city or use location"
            >
              <span className="text-xs shrink-0">
                {selectedCity.country === 'IN' ? '🇮🇳' : '📍'}
              </span>
              <span className="truncate text-left font-bold text-[#F5F7F3] group-hover:text-[#35E27F] transition-colors">
                {selectedCity.name}
                {selectedCity.country === 'IN' ? ' (IN)' : `, ${selectedCity.state}`}
              </span>
              <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A8B5AE] group-hover:text-[#35E27F] shrink-0 ml-0.5 sm:ml-1 transition-colors" />
            </button>

            {/* Quick Auto-Locate Button */}
            <button
              id="header-quick-locate-btn"
              onClick={handleQuickLocate}
              disabled={isAutoLocating}
              className="p-1.5 sm:p-2.5 rounded-xl bg-[#0B1A14] hover:bg-[#123D2A] text-[#35E27F] border border-[#1B3B2F] hover:border-[#35E27F]/60 transition-all cursor-pointer active:scale-95 shadow-sm shrink-0 disabled:opacity-60"
              title="Auto-detect location via GPS or IP address"
            >
              {isAutoLocating ? (
                <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-[#35E27F]" />
              ) : (
                <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#35E27F]" />
              )}
            </button>

            {/* Map Radar (count) */}
            <button
              id="header-open-map-btn"
              onClick={() => setIsMapOpen(true)}
              className="inline-flex items-center justify-center gap-1 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-xl bg-[#0B1A14] hover:bg-[#0F231B] text-[#F5F7F3] text-xs font-semibold border border-[#1B3B2F] hover:border-[#35E27F]/50 transition-all duration-200 cursor-pointer group active:scale-95 shrink-0 whitespace-nowrap"
              title="Map Radar"
            >
              <Radar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#35E27F] group-hover:rotate-45 transition-transform shrink-0" />
              <span className="hidden sm:inline">Map Radar</span>
              <span className="px-1.5 py-0.5 rounded-md bg-[#123D2A] text-[#35E27F] font-bold text-[10px] border border-[#1B3B2F]">
                {cityReelsCount}
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
        {/* Automatic Location / IP Detection Notification */}
        {locationBannerText && (
          <div
            id="location-detection-banner"
            className="px-4 py-2.5 rounded-xl bg-[#0E221A] border border-[#35E27F]/40 text-xs text-[#F5F7F3] flex items-center justify-between gap-3 shadow-md animate-in fade-in slide-in-from-top-2"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#35E27F] animate-pulse shrink-0" />
              <span className="font-semibold text-[#DDFBE9]">{locationBannerText}</span>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => setIsLocationModalOpen(true)}
                className="text-[11px] font-bold text-[#35E27F] hover:underline cursor-pointer"
              >
                Change city
              </button>
              <button
                onClick={() => setLocationBannerText(null)}
                className="p-1 rounded-md text-[#A8B5AE] hover:text-[#F5F7F3] cursor-pointer"
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
              Find food that <br />
              <span className="text-[#35E27F]">
                fits your diet.
              </span>
            </h1>

            <p className="text-xs sm:text-base text-[#A8B5AE] font-normal leading-relaxed max-w-2xl">
              Discover healthy dishes near you with nutrition, ingredients, cooking methods, and information you can trust.
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
                <span className="font-medium truncate">Restaurant-Confirmed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35E27F] shrink-0" />
                <span className="font-medium truncate">Nutrition &amp; Macros</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35E27F] shrink-0" />
                <span className="font-medium truncate">Cooking Oils &amp; Fats</span>
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
            onChange={handleFilterChange}
            onReset={resetFilters}
            totalDishesCount={allCityDishesCount}
            filteredCount={filteredDishes.length}
          />
        </section>

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
          ) : allCityDishesCount === 0 ? (
            <div className="p-8 sm:p-12 text-center bg-[#0B1A14] border border-[#1B3B2F] rounded-2xl space-y-3.5 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-[#0F231B] text-[#35E27F] flex items-center justify-center mx-auto border border-[#1B3B2F]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#F5F7F3] text-base sm:text-lg">
                More healthy options coming soon.
              </h3>
              <p className="text-xs sm:text-sm text-[#A8B5AE] max-w-md mx-auto font-medium">
                We&apos;re building the HealthyVicinity food guide for {selectedCity.name}.
              </p>
              <div className="pt-2 flex items-center justify-center gap-2.5 flex-wrap">
                <button
                  id="empty-explore-cities-btn"
                  onClick={() => setIsLocationModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-[#123D2A] hover:bg-[#184d35] text-[#35E27F] text-xs font-bold border border-[#1B3B2F] transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Explore Other Cities</span>
                </button>
                <button
                  id="empty-suggest-menu-btn"
                  onClick={() => setIsScannerOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all cursor-pointer active:scale-95 shadow-sm flex items-center gap-1.5"
                >
                  <ScanLine className="w-3.5 h-3.5" />
                  <span>Scan Menu in {selectedCity.name}</span>
                </button>
              </div>
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
        {/* FOOTER BANNER: HIGH PROTEIN • HIGH FIBER • LOW CAL • LOW SUGAR             */}
        {/* ========================================================================= */}
        <section
          id="clean-fuel-footer-banner"
          className="rounded-2xl bg-gradient-to-r from-[#0a2e1f] via-[#0F231B] to-[#0a2e1f] border border-[#1B3B2F] p-6 sm:p-8 text-center space-y-4 relative overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#35E27F]/15 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#b6f7c1] flex items-center justify-center gap-2 flex-wrap">
              <span>HIGH PROTEIN</span>
              <span className="text-[#35E27F]">&bull;</span>
              <span>HIGH FIBER</span>
              <span className="text-[#35E27F]">&bull;</span>
              <span>LOW CAL</span>
              <span className="text-[#35E27F]">&bull;</span>
              <span>LOW SUGAR</span>
              <span className="text-[#35E27F]">&bull;</span>
              <span>100% SEED-OIL-FREE</span>
              <span className="text-[#35E27F]">&bull;</span>
              <span>PURE ANIMAL &amp; FRUIT FATS</span>
            </p>
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-[#F5F7F3]">
              CLEAN FUEL. NUTRITION OPTIMIZED.
            </h2>
            <div className="pt-2">
              <button
                onClick={() => setIsMapOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all shadow-lg active:scale-95 cursor-pointer"
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

          {/* Programmatic SEO City Hub Navigation */}
          <div className="pt-4 pb-2 border-t border-[#1B3B2F]/60">
            <p className="text-[11px] font-bold text-[#b6f7c1] uppercase tracking-wider mb-2">
              Verified Clean Dining City Guides:
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-[#A8B5AE]">
              <Link href="/austin" className="hover:text-[#35E27F] transition-colors">Austin, TX</Link>
              <span>&bull;</span>
              <Link href="/nyc" className="hover:text-[#35E27F] transition-colors">New York, NY</Link>
              <span>&bull;</span>
              <Link href="/los-angeles" className="hover:text-[#35E27F] transition-colors">Los Angeles, CA</Link>
              <span>&bull;</span>
              <Link href="/san-francisco" className="hover:text-[#35E27F] transition-colors">San Francisco, CA</Link>
              <span>&bull;</span>
              <Link href="/miami" className="hover:text-[#35E27F] transition-colors">Miami, FL</Link>
              <span>&bull;</span>
              <Link href="/chicago" className="hover:text-[#35E27F] transition-colors">Chicago, IL</Link>
              <span>&bull;</span>
              <Link href="/dallas" className="hover:text-[#35E27F] transition-colors">Dallas, TX</Link>
              <span>&bull;</span>
              <Link href="/houston" className="hover:text-[#35E27F] transition-colors">Houston, TX</Link>
              <span>&bull;</span>
              <Link href="/scottsdale" className="hover:text-[#35E27F] transition-colors">Scottsdale, AZ</Link>
              <span>&bull;</span>
              <Link href="/denver" className="hover:text-[#35E27F] transition-colors">Denver, CO</Link>
              <span>&bull;</span>
              <Link href="/seattle" className="hover:text-[#35E27F] transition-colors">Seattle, WA</Link>
              <span>&bull;</span>
              <Link href="/nashville" className="hover:text-[#35E27F] transition-colors">Nashville, TN</Link>
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
