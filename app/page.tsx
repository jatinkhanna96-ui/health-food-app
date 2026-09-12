import React from 'react';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import HomePageClient from '@/components/HomePageClient';
import CategoryWidgets from '@/components/CategoryWidgets';
import { generateDirectoryJsonLd, SITE_URL } from '@/lib/seoData';
import {
  ALL_CITIES,
  INDIAN_CITIES,
  US_CITIES,
  CityConfig,
  CityLocation,
  CountryCode,
  getDefaultCityForCountry,
  toCityLocation,
} from '@/lib/locations';

// Force Server-Side Rendering on every request (SSR)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PageProps {
  searchParams?: Promise<{
    city?: string;
    country?: string;
    q?: string;
    [key: string]: string | undefined;
  }>;
}

/**
 * Server-side helper to resolve user location from request headers and searchParams
 */
async function resolveServerLocation(searchParams?: {
  city?: string;
  country?: string;
  q?: string;
}): Promise<{
  cityConfig: CityConfig;
  cityLocation: CityLocation;
  country: CountryCode;
  searchQuery: string;
}> {
  const q = searchParams?.q?.trim() || '';

  // 1. Direct query parameter override: ?city=...
  if (searchParams?.city) {
    const rawCity = searchParams.city.trim().toLowerCase();
    const matched = ALL_CITIES.find(
      (c) =>
        c.city.toLowerCase() === rawCity ||
        c.id.toLowerCase() === rawCity ||
        c.displayName.toLowerCase() === rawCity ||
        c.aliases.some((a) => a.toLowerCase() === rawCity)
    );
    if (matched) {
      return {
        cityConfig: matched,
        cityLocation: toCityLocation(matched),
        country: matched.country,
        searchQuery: q,
      };
    }
  }

  // 2. Direct country parameter override: ?country=IN or ?country=US
  if (searchParams?.country) {
    const upperCountry = searchParams.country.trim().toUpperCase();
    if (upperCountry === 'IN') {
      const cfg = getDefaultCityForCountry('IN');
      return {
        cityConfig: cfg,
        cityLocation: toCityLocation(cfg),
        country: 'IN',
        searchQuery: q,
      };
    } else if (upperCountry === 'US') {
      const cfg = getDefaultCityForCountry('US');
      return {
        cityConfig: cfg,
        cityLocation: toCityLocation(cfg),
        country: 'US',
        searchQuery: q,
      };
    }
  }

  // 3. Inspect edge/reverse proxy request headers
  try {
    const headerList = await headers();

    // Check Cloudflare / GCP / Fastly geo country headers
    const headerCountry =
      headerList.get('cf-ipcountry') ||
      headerList.get('x-appengine-country') ||
      headerList.get('x-country-code') ||
      headerList.get('x-client-geo-country');

    if (headerCountry) {
      const norm = headerCountry.trim().toUpperCase();
      if (['IN', 'IND', 'INDIA', 'PK', 'BD', 'NP', 'LK'].includes(norm)) {
        // Match header city if available
        const headerCity = headerList.get('cf-ipcity') || headerList.get('x-appengine-city');
        if (headerCity) {
          const rawHCity = headerCity.trim().toLowerCase();
          const matched = INDIAN_CITIES.find(
            (c) =>
              c.city.toLowerCase() === rawHCity ||
              c.displayName.toLowerCase() === rawHCity ||
              c.aliases.some((a) => a.toLowerCase() === rawHCity)
          );
          if (matched) {
            return {
              cityConfig: matched,
              cityLocation: toCityLocation(matched),
              country: 'IN',
              searchQuery: q,
            };
          }
        }
        const cfg = getDefaultCityForCountry('IN');
        return {
          cityConfig: cfg,
          cityLocation: toCityLocation(cfg),
          country: 'IN',
          searchQuery: q,
        };
      } else if (['US', 'USA', 'CA', 'MX'].includes(norm)) {
        const headerCity = headerList.get('cf-ipcity') || headerList.get('x-appengine-city');
        if (headerCity) {
          const rawHCity = headerCity.trim().toLowerCase();
          const matched = US_CITIES.find(
            (c) =>
              c.city.toLowerCase() === rawHCity ||
              c.displayName.toLowerCase() === rawHCity ||
              c.aliases.some((a) => a.toLowerCase() === rawHCity)
          );
          if (matched) {
            return {
              cityConfig: matched,
              cityLocation: toCityLocation(matched),
              country: 'US',
              searchQuery: q,
            };
          }
        }
      }
    }

    // Check Accept-Language header for regional preference
    const acceptLanguage = (headerList.get('accept-language') || '').toLowerCase();
    if (
      acceptLanguage.includes('en-in') ||
      acceptLanguage.includes('hi-in') ||
      acceptLanguage.includes('hi') ||
      acceptLanguage.includes('ta') ||
      acceptLanguage.includes('te') ||
      acceptLanguage.includes('mr') ||
      acceptLanguage.includes('gu') ||
      acceptLanguage.includes('kn') ||
      acceptLanguage.includes('ml') ||
      acceptLanguage.includes('pa') ||
      acceptLanguage.includes('bn')
    ) {
      const cfg = getDefaultCityForCountry('IN');
      return {
        cityConfig: cfg,
        cityLocation: toCityLocation(cfg),
        country: 'IN',
        searchQuery: q,
      };
    }
  } catch {
    // If headers are unavailable in some static context, fallback gracefully
  }

  // 4. Default flagship city: Austin, TX (US)
  const defaultCfg = getDefaultCityForCountry('US');
  return {
    cityConfig: defaultCfg,
    cityLocation: toCityLocation(defaultCfg),
    country: 'US',
    searchQuery: q,
  };
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const resolvedParams = searchParams ? await searchParams : {};
  const { cityConfig, country } = await resolveServerLocation(resolvedParams);

  const jsonLd = generateDirectoryJsonLd(SITE_URL);
  const title = resolvedParams.city
    ? `Healthy, Seed-Oil-Free & High-Protein Dining in ${cityConfig.displayName} | Healthy Vicinity`
    : 'Healthy Vicinity — Find Food That Fits Your Diet | Clean Dining Directory';
  const description = resolvedParams.city
    ? `Discover verified healthy restaurants, grass-fed meats, seed-oil-free dishes, and high-protein nutrition in ${cityConfig.displayName}, ${cityConfig.state}.`
    : 'Find food that fits your diet. Discover verified healthy dishes and clean restaurants near you with nutrition, ingredients, cooking methods, and information you can trust.';
  const canonicalUrl = `${SITE_URL}/`;

  return {
    title,
    description,
    keywords: [
      'healthy food directory',
      'seed-oil-free restaurants',
      'high-protein dining',
      'grass-fed tallow',
      'clean eating restaurants near me',
      'macro-friendly food near me',
      'nutrition transparent dining',
      'keto dining',
      'paleo friendly restaurants',
      'gluten-free clean eats',
      `${cityConfig.city.toLowerCase()} healthy restaurants`,
      `${cityConfig.city.toLowerCase()} high protein food`,
    ],
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Healthy Vicinity',
      type: 'website',
      locale: country === 'IN' ? 'en_IN' : 'en_US',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80',
          width: 1200,
          height: 630,
          alt: `Healthy Vicinity - Clean Dining in ${cityConfig.displayName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80',
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const { cityLocation, cityConfig, country, searchQuery } = await resolveServerLocation(resolvedParams);
  const jsonLd = generateDirectoryJsonLd(SITE_URL);

  const countryCode = (country || 'in').toLowerCase();
  const citySlug = (cityConfig?.city || cityLocation?.name || 'delhi').toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      {/* Schema.org Structured Data for Directory SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient
        initialCity={cityLocation}
        initialCountry={country}
        initialSearch={searchQuery}
        widgetsSlot={
          <CategoryWidgets countryCode={countryCode} citySlug={citySlug} />
        }
      />
    </>
  );
}

