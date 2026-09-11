import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ShieldCheck,
  Flame,
  MapPin,
  Sparkles,
  ChevronRight,
  Beef,
  ArrowLeft,
  CheckCircle2,
  Droplet,
} from 'lucide-react';
import {
  getDishesByCitySlug,
  getAllCityHubs,
  SITE_URL,
  Dish,
} from '@/lib/seoData';
import CategoryWidgets from '@/components/CategoryWidgets';
import { WIDGET_CATEGORIES, getCategoryBySlug } from '@/lib/categories';
import CityFilterBar from '@/components/seo/CityFilterBar';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface CategoryPageProps {
  params: Promise<{
    city: string;      // countryCode (e.g. "in" or "us")
    dishId: string;    // citySlug (e.g. "delhi" or "austin")
    category: string;  // categorySlug (e.g. "clean-oil-ghee")
  }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { city: countryCode, dishId: citySlug, category: categorySlug } = await params;
  const widget = getCategoryBySlug(categorySlug);
  const cityData = getDishesByCitySlug(citySlug);

  const cityName = cityData ? cityData.city : citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
  const categoryTitle = widget ? widget.label : 'Clean Health Dining';
  const categorySubtext = widget ? widget.subtext : 'Verified healthy dishes';

  const title = `${categoryTitle} in ${cityName} | HealthyVicinity`;
  const description = `Find verified ${categoryTitle.toLowerCase()} in ${cityName}. ${categorySubtext}. Transparent cooking fats, zero industrial seed oils, and full macronutrient transparency.`;
  const canonicalUrl = `${SITE_URL}/${countryCode}/${citySlug}/${categorySlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'HealthyVicinity',
      type: 'website',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80',
          width: 1200,
          height: 630,
          alt: `${categoryTitle} dining in ${cityName}`,
        },
      ],
    },
  };
}

export default async function CategoryHubPage({ params }: CategoryPageProps) {
  const { city: countryCode, dishId: citySlug, category: categorySlug } = await params;
  const widget = getCategoryBySlug(categorySlug);

  if (!widget) {
    notFound();
  }

  const cityData = getDishesByCitySlug(citySlug);
  const cityName = cityData ? cityData.city : citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
  const state = cityData ? cityData.state : countryCode.toUpperCase();
  const allDishes = cityData ? cityData.dishes : [];

  // Filter dishes relevant to this specific category
  const filteredDishes = allDishes.filter((dish) => {
    switch (categorySlug) {
      case 'clean-oil-ghee':
        return (
          dish.is_seed_oil_free ||
          dish.cooking_fat.toLowerCase().includes('ghee') ||
          dish.cooking_fat.toLowerCase().includes('tallow') ||
          dish.cooking_fat.toLowerCase().includes('olive') ||
          dish.cooking_fat.toLowerCase().includes('avocado')
        );
      case 'no-maida':
        return (dish.fiber_g >= 3 || dish.carbs_g <= 35 || dish.is_grass_fed);
      case 'no-refined-sugar':
        return (dish.sugar_g <= 5);
      case 'high-protein-veg':
      case 'desi-protein-coolers':
        return dish.protein_g >= 25;
      case 'millet-dishes':
        return dish.fiber_g >= 4 || dish.is_seed_oil_free;
      case 'low-gi':
        return dish.carbs_g <= 30 || dish.fiber_g >= 4;
      case 'probiotic-drinks':
      case 'ayurvedic-tonics':
        return dish.is_seed_oil_free || dish.sugar_g <= 4;
      default:
        return true;
    }
  });

  const displayDishes = filteredDishes.length > 0 ? filteredDishes : allDishes;

  return (
    <div className="min-h-screen bg-[#07130F] text-[#F5F7F3] flex flex-col">
      {/* Navigation Breadcrumb Bar */}
      <header className="border-b border-[#1B3B2F] bg-[#0A1A12]/95 backdrop-blur-md sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-xs text-[#E2EAE5] min-w-0 flex-wrap">
            <Link
              href="/"
              className="hover:text-[#35E27F] transition-colors flex items-center gap-1 font-bold text-white shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#35E27F]" />
              <span className="font-serif font-black text-sm sm:text-base">HealthyVicinity</span>
            </Link>
            <span className="text-[#5D7A6F]">/</span>
            <Link
              href={`/${citySlug}`}
              className="hover:text-[#35E27F] transition-colors font-bold text-[#CAD7D0] capitalize shrink-0"
            >
              {cityName}
            </Link>
            <span className="text-[#5D7A6F]">/</span>
            <span className="text-[#35E27F] font-bold uppercase truncate max-w-[140px] xs:max-w-[200px] sm:max-w-none">
              {widget.label}
            </span>
          </nav>

          <Link
            href="/"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-black transition-all shrink-0 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Interactive Directory</span>
            <span className="sm:hidden">Directory</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
        {/* Category Hero Banner */}
        <section className="relative rounded-3xl bg-black border border-red-900/50 p-6 sm:p-10 overflow-hidden shadow-xl">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 text-red-400 border border-red-900/60 text-xs font-mono font-bold uppercase tracking-wider">
              <span>{widget.categoryGroup}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#F5F7F3]">
              {widget.label} in{' '}
              <span className="text-red-500">{cityName}</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
              {widget.subtext}. Verified dishes prepared with complete transparency in {cityName},
              adhering to clean cooking standards and verified macronutrient profiling.
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#0B1A14] border border-[#1B3B2F]">
                <div className="text-[11px] text-[#A8B5AE]">Filtered Options</div>
                <div className="text-lg sm:text-xl font-extrabold text-[#35E27F]">{displayDishes.length} dishes</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0B1A14] border border-[#1B3B2F]">
                <div className="text-[11px] text-[#A8B5AE]">Standard</div>
                <div className="text-xs sm:text-sm font-bold text-[#b6f7c1] truncate">
                  Zero Seed Oil Verified
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#0B1A14] border border-[#1B3B2F]">
                <div className="text-[11px] text-[#A8B5AE]">Location</div>
                <div className="text-xs sm:text-sm font-bold text-[#F5F7F3] truncate">
                  {cityName}, {state}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar & Matching Dishes */}
        <section aria-label={`${widget.label} Dishes in ${cityName}`}>
          <CityFilterBar
            initialDishes={displayDishes}
            citySlug={citySlug}
            cityName={cityName}
            state={state}
          />
        </section>

        {/* Explore Other Health Categories */}
        <section aria-label="Explore other categories" className="space-y-4 pt-6 border-t border-[#1B3B2F]">
          <div>
            <h2 className="text-sm font-bold text-[#35E27F] uppercase tracking-widest font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#35E27F] animate-pulse" />
              Explore More Health Standards in {cityName}
            </h2>
            <p className="text-xs text-[#A8B5AE] font-sans mt-0.5">
              Switch to other clean cooking, grain optimization, and functional beverage hubs
            </p>
          </div>
          <CategoryWidgets countryCode={countryCode} citySlug={citySlug} />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1B3B2F] bg-[#07130F] py-8 text-center text-xs text-[#A8B5AE]">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p>
            &copy; {new Date().getFullYear()} HealthyVicinity &bull; Bio-Individual Dining Engine &bull; Zero Seed Oils
          </p>
          <p className="text-[11px] text-[#697A72]">
            {widget.label} Directory for {cityName}, {state}
          </p>
        </div>
      </footer>
    </div>
  );
}
