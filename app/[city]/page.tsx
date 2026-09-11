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
  getAllCitySlugs,
  getAllCityHubs,
  generateCityJsonLd,
  SITE_URL,
} from '@/lib/seoData';
import CityFilterBar from '@/components/seo/CityFilterBar';

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

// Next.js static params generation at build time
export async function generateStaticParams() {
  const slugs = getAllCitySlugs();
  return slugs.map((slug) => ({
    city: slug,
  }));
}

// Dynamic Metadata & OpenGraph for City Hub
export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const cityData = getDishesByCitySlug(citySlug);

  if (!cityData) {
    return {
      title: 'City Not Found | HealthyVicinity',
      description: 'Directory of verified healthy, seed-oil-free dining.',
    };
  }

  const { city, state, dishes } = cityData;
  const title = `Healthy, High-Protein & Seed-Oil-Free Dining in ${city}, ${state} | HealthyVicinity`;
  const description = `Discover ${dishes.length} verified clean, seed-oil-free restaurants and high-protein dishes in ${city}, ${state}. Verified cooking fats (grass-fed tallow, avocado oil, EVOO) and full macronutrient transparency.`;
  const canonicalUrl = `${SITE_URL}/${citySlug}`;

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
      locale: 'en_US',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80',
          width: 1200,
          height: 630,
          alt: `Healthy dining in ${city}, ${state}`,
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
  };
}

export default async function CityHubPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const cityData = getDishesByCitySlug(citySlug);

  if (!cityData) {
    notFound();
  }

  const { city, state, dishes } = cityData;
  const jsonLd = generateCityJsonLd(city, state, citySlug, dishes, SITE_URL);
  const allHubs = getAllCityHubs().filter((h) => h.slug !== citySlug).slice(0, 10);

  const avgProtein =
    dishes.length > 0
      ? Math.round(dishes.reduce((a, d) => a + d.protein_g, 0) / dishes.length)
      : 0;

  const avgCalories =
    dishes.length > 0
      ? Math.round(dishes.reduce((a, d) => a + d.calories, 0) / dishes.length)
      : 0;

  return (
    <>
      {/* Schema.org Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#FAF6EE] text-[#231815] flex flex-col">
        {/* Navigation Breadcrumb Bar */}
        <header className="border-b border-[#E8DEC8] bg-[#FAF6EE]/95 backdrop-blur-md sticky top-0 z-30 shadow-2xs">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-2">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-xs text-[#1A100C] min-w-0">
              <Link
                href="/"
                className="hover:text-[#C86A1D] transition-colors flex items-center gap-1 font-bold text-[#1A100C] shrink-0"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#C86A1D]" />
                <span className="font-serif font-black text-sm sm:text-base">HealthyVicinity</span>
              </Link>
              <span className="text-[#8C7A6B]">/</span>
              <span className="text-[#C86A1D] font-extrabold truncate">
                {city}, {state}
              </span>
            </nav>

            <Link
              href="/"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#2D5A34] hover:bg-[#234729] text-white text-xs font-bold transition-all shadow-xs shrink-0 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F5C842]" />
              <span className="hidden xs:inline">Interactive Map</span>
              <span className="xs:hidden">Map</span>
            </Link>
          </div>
        </header>

        {/* Main Semantic Content Area */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
          {/* City Hero Section */}
          <section className="relative rounded-[32px] bg-gradient-to-br from-[#F5C842] via-[#F9D65E] to-[#EFA928] border border-[#E6B830] p-6 sm:p-10 overflow-hidden shadow-xl text-[#231815]">
            {/* Ambient Sun Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 w-80 h-80 bg-[#E08A1E]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 text-[#180E09] border border-white/80 text-xs font-black shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#C86A1D]" />
                <span>{city}, {state} Wholesome Dining Guide</span>
              </div>

              <h1 className="font-serif font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-[#150D08]">
                Seed-Oil-Free &amp; High-Protein Dining in{' '}
                <span className="italic font-bold text-[#481800] underline decoration-[#A84E18]/60 decoration-wavy decoration-2">
                  {city}, {state}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#2E1D0E] font-semibold leading-relaxed">
                Explore {dishes.length} kitchen-verified dishes in {city}. Every dish is prepared
                with pure fats (grass-fed beef tallow, avocado oil, and extra virgin olive oil),
                free from industrial seed oils, with complete macronutrient breakdowns.
              </p>

              {/* City Statistics Micro-dashboard */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/85 border border-white/80 shadow-xs">
                  <div className="text-[11px] font-bold text-[#6B5E55]">Verified Dishes</div>
                  <div className="text-lg sm:text-xl font-serif font-black text-[#231815]">{dishes.length}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/85 border border-white/80 shadow-xs">
                  <div className="text-[11px] font-bold text-[#6B5E55]">Avg. Protein</div>
                  <div className="text-lg sm:text-xl font-serif font-black text-[#2D5A34]">{avgProtein}g</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/85 border border-white/80 shadow-xs">
                  <div className="text-[11px] font-bold text-[#6B5E55]">Avg. Calories</div>
                  <div className="text-lg sm:text-xl font-serif font-black text-[#231815]">{avgCalories} kcal</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/85 border border-white/80 shadow-xs">
                  <div className="text-[11px] font-bold text-[#6B5E55]">Cooking Fats</div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#914605] truncate">
                    100% Pure Animal/Fruit
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Filtering & Semantic Dishes Grid */}
          <section aria-label={`Verified Dishes in ${city}`}>
            <CityFilterBar
              initialDishes={dishes}
              citySlug={citySlug}
              cityName={city}
              state={state}
            />
          </section>

          {/* Educational SEO Content Block: The HealthyVicinity Standard in This City */}
          <section className="p-6 sm:p-8 rounded-[28px] bg-[#FFFFFF] border border-[#E8DEC8] space-y-4 shadow-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2D5A34]" />
              <h2 className="font-serif font-bold text-lg sm:text-xl text-[#231815]">
                The HealthyVicinity Verification Standard in {city}
              </h2>
            </div>
            <div className="text-xs sm:text-sm text-[#6B5E55] leading-relaxed space-y-3 max-w-4xl">
              <p>
                In standard commercial kitchens across {city}, vegetable oils, soybean oils, canola,
                and corn oil are ubiquitous due to their industrial shelf life and low cost. At
                HealthyVicinity, our directory only indexes meals that have been physically or directly
                verified to utilize authentic cooking fats: 100% grass-fed beef tallow, duck fat,
                cold-pressed extra virgin olive oil, avocado oil, and grass-fed butter.
              </p>
              <p>
                Whether you are targeting ketogenic macros, strict high-protein bodybuilding targets,
                paleo requirements, or gut-friendly anti-inflammatory dining, each dish card above
                provides transparent calories, grams of protein, carbohydrates, and dietary fiber so
                you can dine out without compromising your health goals.
              </p>
            </div>
          </section>

          {/* Internal Cross-Linking: Other US Cities */}
          <section className="space-y-4 pt-4 border-t border-[#E8DEC8]">
            <h2 className="font-serif font-bold text-sm text-[#231815] uppercase tracking-wider">
              Explore Seed-Oil-Free Dining in Other Metros
            </h2>
            <div className="flex flex-wrap gap-2">
              {allHubs.map((hub) => (
                <Link
                  key={hub.slug}
                  href={`/${hub.slug}`}
                  className="px-3 py-1.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FFF7ED] text-xs font-semibold text-[#6B5E55] hover:text-[#C86A1D] border border-[#E8DEC8] hover:border-[#C86A1D]/40 transition-all shadow-xs"
                >
                  {hub.name}, {hub.state} ({hub.count} dishes)
                </Link>
              ))}
            </div>
          </section>
        </main>

        {/* Minimal Footer */}
        <footer className="border-t border-[#E8DEC8] bg-[#FAF6EE] py-8 text-center text-xs text-[#6B5E55]">
          <div className="max-w-7xl mx-auto px-4 space-y-2">
            <p>
              &copy; {new Date().getFullYear()} HealthyVicinity &bull; Wholesome Living Directory &bull; Zero Seed Oils
            </p>
            <p className="text-[11px] text-[#8C7A6B]">
              Verified Clean High-Protein Nutrition Directory for {city}, {state}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
