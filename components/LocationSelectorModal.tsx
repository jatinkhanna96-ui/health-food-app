'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  X,
  Search,
  MapPin,
  Compass,
  Check,
  Navigation,
  Loader2,
  Sparkles,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import {
  CityConfig,
  CityLocation,
  CountryCode,
  INDIAN_CITIES,
  US_CITIES,
  INDIAN_REGIONS,
  getPopularCities,
  findClosestCity,
  resolveLocationToCity,
} from '@/lib/locations';

interface LocationSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCity: CityLocation;
  onSelectCity: (city: CityConfig) => void;
  defaultCountry?: CountryCode;
}

interface LocationStatus {
  type: 'loading' | 'success' | 'warning' | 'info';
  message: string;
}

export default function LocationSelectorModal({
  isOpen,
  onClose,
  selectedCity,
  onSelectCity,
  defaultCountry = 'IN',
}: LocationSelectorModalProps) {
  const [activeCountry, setActiveCountry] = useState<CountryCode>(defaultCountry);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [locationStatus, setLocationStatus] = useState<LocationStatus | null>(null);
  const [isInIframe, setIsInIframe] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsInIframe(window.self !== window.top);
    }
  }, []);

  // Sync active country when modal opens or selectedCity changes
  useEffect(() => {
    if (isOpen) {
      if (selectedCity.country) {
        setActiveCountry(selectedCity.country);
      } else {
        // Detect if selectedCity is an Indian city
        const isIndian = INDIAN_CITIES.some((c) => c.city === selectedCity.name);
        setActiveCountry(isIndian ? 'IN' : 'US');
      }
      setSearchQuery('');
      setLocationStatus(null);
    }
  }, [isOpen, selectedCity]);

  // Network / IP Geolocation fallback
  const runNetworkFallback = async (reason?: string) => {
    setLocationStatus({
      type: 'loading',
      message: reason || 'Detecting location via network/IP address...',
    });

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
          setActiveCountry(resolved.country);
          setLocationStatus({
            type: 'success',
            message: `📍 Detected via IP: ${resolved.displayName} (${resolved.country === 'IN' ? 'India' : 'USA'})`,
          });
          setTimeout(() => {
            setIsLocating(false);
            onSelectCity(resolved);
            onClose();
          }, 700);
          return true;
        }
      }
    } catch (e) {
      console.warn('Network location API error:', e);
    }

    // Direct browser fallback to ipwho.is if server route fails
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
          setActiveCountry(resolved.country);
          setLocationStatus({
            type: 'success',
            message: `📍 Detected via IP: ${resolved.displayName} (${resolved.country === 'IN' ? 'India' : 'USA'})`,
          });
          setTimeout(() => {
            setIsLocating(false);
            onSelectCity(resolved);
            onClose();
          }, 700);
          return true;
        }
      }
    } catch (e) {
      console.warn('Direct IP location error:', e);
    }

    setIsLocating(false);
    setLocationStatus({
      type: 'warning',
      message:
        'Could not auto-detect location. Please choose India or USA from the tabs below.',
    });
    return false;
  };

  // Handle geolocation with multi-tier fallback
  const handleUseMyLocation = () => {
    setIsLocating(true);
    setLocationStatus({
      type: 'loading',
      message: 'Requesting GPS location...',
    });

    if (!navigator.geolocation) {
      runNetworkFallback('Browser GPS not supported. Detecting via network/IP...');
      return;
    }

    let handled = false;
    const fallbackTimer = setTimeout(() => {
      if (!handled) {
        handled = true;
        runNetworkFallback('GPS search timed out. Detecting via network/IP...');
      }
    }, 5500);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        if (handled) return;
        handled = true;
        clearTimeout(fallbackTimer);

        const { latitude, longitude } = pos.coords;
        const closest = resolveLocationToCity(latitude, longitude);
        setActiveCountry(closest.country);
        setLocationStatus({
          type: 'success',
          message: `📍 Found nearest city: ${closest.displayName} (${closest.country === 'IN' ? 'India' : 'USA'})`,
        });
        setTimeout(() => {
          setIsLocating(false);
          onSelectCity(closest);
          onClose();
        }, 700);
      },
      (err) => {
        if (handled) return;
        handled = true;
        clearTimeout(fallbackTimer);

        const reason =
          err.code === 1
            ? 'GPS access blocked. Finding your city via network/IP...'
            : err.code === 2
            ? 'GPS position unavailable. Finding your city via network/IP...'
            : 'GPS timed out. Finding your city via network/IP...';

        runNetworkFallback(reason);
      },
      { timeout: 5000, enableHighAccuracy: false, maximumAge: 300000 }
    );
  };


  const currentCountryCities = useMemo(() => {
    return activeCountry === 'IN' ? INDIAN_CITIES : US_CITIES;
  }, [activeCountry]);

  const popularCities = useMemo(() => {
    return getPopularCities(activeCountry);
  }, [activeCountry]);

  // Filtered cities based on search
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase().trim();

    // Search across ALL cities if query is typed
    const all = [...INDIAN_CITIES, ...US_CITIES];
    return all.filter((city) => {
      if (city.city.toLowerCase().includes(q)) return true;
      if (city.displayName.toLowerCase().includes(q)) return true;
      if (city.state.toLowerCase().includes(q)) return true;
      return city.aliases.some((alias) => alias.toLowerCase().includes(q));
    });
  }, [searchQuery]);

  // Grouped cities for current country
  const groupedCities = useMemo(() => {
    if (activeCountry === 'IN') {
      const groups: { region: string; cities: CityConfig[] }[] = [];
      INDIAN_REGIONS.forEach((region) => {
        const cities = INDIAN_CITIES.filter((c) => c.region === region);
        if (cities.length > 0) {
          groups.push({ region, cities });
        }
      });
      return groups;
    } else {
      // Group US cities by region
      const map: Record<string, CityConfig[]> = {};
      US_CITIES.forEach((c) => {
        if (!map[c.region]) map[c.region] = [];
        map[c.region].push(c);
      });
      return Object.entries(map).map(([region, cities]) => ({ region, cities }));
    }
  }, [activeCountry]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Dialog / Bottom Sheet Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="location-modal-title"
        className="relative w-full sm:max-w-2xl bg-[#0B1A14] text-[#F5F7F3] border-t sm:border border-[#1B3B2F] rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col max-h-[90vh] sm:max-h-[85vh] z-10 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
      >
        {/* Mobile Drag Indicator */}
        <div className="sm:hidden flex justify-center pt-2.5 pb-1">
          <div className="w-10 h-1 rounded-full bg-[#1B3B2F]" />
        </div>

        {/* Modal Header */}
        <div className="px-4 sm:px-6 pt-3 sm:pt-5 pb-3 border-b border-[#1B3B2F] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#123D2A] text-[#35E27F] flex items-center justify-center border border-[#1B3B2F]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h2
                id="location-modal-title"
                className="text-base sm:text-lg font-bold text-[#F5F7F3] leading-tight"
              >
                Where are you eating?
              </h2>
              <p className="text-[11px] sm:text-xs text-[#A8B5AE] font-medium">
                Choose your city to explore verified healthy dining
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A8B5AE] hover:text-[#F5F7F3] hover:bg-[#0F231B] transition-colors cursor-pointer"
            aria-label="Close location selector"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Bar: Use My Location & Country Tabs */}
        <div className="px-4 sm:px-6 py-3 bg-[#07130F]/60 border-b border-[#1B3B2F] space-y-2.5">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
            {/* 📍 Use my location CTA */}
            <button
              id="use-my-location-btn"
              onClick={handleUseMyLocation}
              disabled={isLocating}
              className="px-3.5 py-2 rounded-xl bg-[#123D2A] hover:bg-[#184d35] text-[#35E27F] text-xs font-bold border border-[#1B3B2F] hover:border-[#35E27F]/50 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-60"
            >
              {isLocating ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Navigation className="w-3.5 h-3.5" />
              )}
              <span>📍 Auto-Detect (GPS / IP)</span>
            </button>

            {/* Country Tabs */}
            <div className="flex items-center bg-[#07130F] p-1 rounded-xl border border-[#1B3B2F] self-center sm:self-auto w-full sm:w-auto">
              <button
                id="country-tab-india"
                onClick={() => {
                  setActiveCountry('IN');
                  setSearchQuery('');
                }}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeCountry === 'IN'
                    ? 'bg-[#35E27F] text-[#07130F] shadow-sm'
                    : 'text-[#A8B5AE] hover:text-[#F5F7F3]'
                }`}
              >
                <span>🇮🇳 India</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeCountry === 'IN'
                      ? 'bg-[#07130F]/20 text-[#07130F]'
                      : 'bg-[#1B3B2F] text-[#A8B5AE]'
                  }`}
                >
                  31
                </span>
              </button>

              <button
                id="country-tab-us"
                onClick={() => {
                  setActiveCountry('US');
                  setSearchQuery('');
                }}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeCountry === 'US'
                    ? 'bg-[#35E27F] text-[#07130F] shadow-sm'
                    : 'text-[#A8B5AE] hover:text-[#F5F7F3]'
                }`}
              >
                <span>🇺🇸 United States</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeCountry === 'US'
                      ? 'bg-[#07130F]/20 text-[#07130F]'
                      : 'bg-[#1B3B2F] text-[#A8B5AE]'
                  }`}
                >
                  30
                </span>
              </button>
            </div>
          </div>

          {locationStatus && (
            <div
              className={`text-xs px-3 py-2 rounded-xl flex items-center gap-2 animate-in fade-in ${
                locationStatus.type === 'loading'
                  ? 'bg-[#0F231B] text-[#A8B5AE] border border-[#1B3B2F]'
                  : locationStatus.type === 'success'
                  ? 'bg-[#123D2A] text-[#35E27F] font-bold border border-[#35E27F]/40'
                  : 'bg-[#241C10] text-[#FFD166] border border-[#3E301A]'
              }`}
            >
              {locationStatus.type === 'loading' && (
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#35E27F] shrink-0" />
              )}
              {locationStatus.type === 'success' && (
                <Check className="w-3.5 h-3.5 text-[#35E27F] shrink-0" />
              )}
              {locationStatus.type === 'warning' && (
                <AlertCircle className="w-3.5 h-3.5 text-[#FFD166] shrink-0" />
              )}
              <span className="flex-1">{locationStatus.message}</span>
            </div>
          )}

          {/* Quick Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#A8B5AE] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="location-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                activeCountry === 'IN'
                  ? 'Search Indian city (e.g. Bangalore, Gurgaon, Mumbai, Pune)...'
                  : 'Search US city (e.g. Austin, New York, Los Angeles)...'
              }
              className="w-full bg-[#0F231B] text-[#F5F7F3] text-xs font-medium pl-9 pr-8 py-2.5 rounded-xl border border-[#1B3B2F] placeholder-[#A8B5AE]/60 focus:outline-none focus:border-[#35E27F] focus:ring-1 focus:ring-[#35E27F] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#A8B5AE] hover:text-[#F5F7F3] p-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="px-4 sm:px-6 py-4 overflow-y-auto space-y-4 flex-1">
          {/* SEARCH RESULTS VIEW */}
          {searchResults !== null ? (
            <div className="space-y-2">
              <p className="text-[11px] font-bold text-[#A8B5AE] uppercase tracking-wider">
                Matching Cities ({searchResults.length})
              </p>
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {searchResults.map((city) => {
                    const isSelected = selectedCity.name === city.city;
                    const matchedAlias = city.aliases.find((a) =>
                      a.toLowerCase().includes(searchQuery.toLowerCase().trim())
                    );
                    return (
                      <button
                        key={city.id}
                        onClick={() => {
                          onSelectCity(city);
                          onClose();
                        }}
                        className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between gap-2.5 cursor-pointer active:scale-[0.98] ${
                          isSelected
                            ? 'bg-[#123D2A] border-[#35E27F] text-[#F5F7F3]'
                            : 'bg-[#0F231B] border-[#1B3B2F] hover:border-[#35E27F]/50 text-[#F5F7F3]'
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs">
                              {city.country === 'IN' ? '🇮🇳' : '🇺🇸'}
                            </span>
                            <span className="text-xs sm:text-sm font-bold truncate">
                              {city.displayName}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#A8B5AE] font-medium mt-0.5 truncate">
                            {city.state} &bull; {city.region}
                            {matchedAlias && matchedAlias !== city.city.toLowerCase() && (
                              <span className="text-[#35E27F] ml-1">
                                (matches &ldquo;{matchedAlias}&rdquo;)
                              </span>
                            )}
                          </p>
                        </div>
                        {isSelected && (
                          <Check className="w-4 h-4 text-[#35E27F] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="p-8 text-center bg-[#0F231B] border border-[#1B3B2F] rounded-xl space-y-2">
                  <p className="text-xs text-[#A8B5AE]">
                    No cities matching &ldquo;{searchQuery}&rdquo;.
                  </p>
                  <p className="text-[11px] text-[#35E27F]">
                    Try searching Bangalore for Bengaluru, Gurgaon for Gurugram, or Bombay for Mumbai.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* POPULAR CITIES QUICK STRIP */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold text-[#b6f7c1] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#35E27F]" />
                    <span>Popular Cities in {activeCountry === 'IN' ? 'India' : 'United States'}</span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {popularCities.map((city) => {
                    const isSelected = selectedCity.name === city.city;
                    return (
                      <button
                        key={city.id}
                        id={`popular-city-btn-${city.city.toLowerCase()}`}
                        onClick={() => {
                          onSelectCity(city);
                          onClose();
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#35E27F] border-[#35E27F] text-[#07130F] font-bold shadow-sm'
                            : 'bg-[#0F231B] border-[#1B3B2F] text-[#F5F7F3] hover:border-[#35E27F]/40 hover:bg-[#123D2A]'
                        }`}
                      >
                        <span>{city.city}</span>
                        {isSelected && <Check className="w-3 h-3 text-[#07130F]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* GROUPED BY REGION */}
              <div className="space-y-4 pt-1">
                {groupedCities.map((group) => (
                  <div key={group.region} className="space-y-2">
                    <div className="flex items-center justify-between border-b border-[#1B3B2F]/60 pb-1">
                      <span className="text-[11px] font-bold text-[#A8B5AE] uppercase tracking-wider">
                        {group.region}
                      </span>
                      <span className="text-[10px] text-[#A8B5AE]">
                        {group.cities.length} {group.cities.length === 1 ? 'city' : 'cities'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {group.cities.map((city) => {
                        const isSelected = selectedCity.name === city.city;
                        return (
                          <button
                            key={city.id}
                            id={`city-select-${city.city.toLowerCase()}`}
                            onClick={() => {
                              onSelectCity(city);
                              onClose();
                            }}
                            className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between gap-1.5 cursor-pointer active:scale-[0.98] ${
                              isSelected
                                ? 'bg-[#123D2A] border-[#35E27F] text-[#F5F7F3] font-bold shadow-sm'
                                : 'bg-[#0F231B] border-[#1B3B2F] hover:border-[#35E27F]/40 text-[#F5F7F3]'
                            }`}
                          >
                            <div className="min-w-0">
                              <span className="text-xs font-semibold truncate block">
                                {city.city}
                              </span>
                              <span className="text-[10px] text-[#A8B5AE] truncate block">
                                {city.state}
                              </span>
                            </div>
                            {isSelected && (
                              <Check className="w-3.5 h-3.5 text-[#35E27F] shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer info note */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#07130F] border-t border-[#1B3B2F] flex items-center justify-between text-[11px] text-[#A8B5AE]">
          <span>Select any city to explore seed-oil-free dining</span>
          <span className="text-[#35E27F] font-semibold">
            {activeCountry === 'IN' ? '31 Cities in India' : '30 Cities in USA'}
          </span>
        </div>
      </div>
    </div>
  );
}
