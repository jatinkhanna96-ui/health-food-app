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

      <div className="min-h-screen bg-[#07130F] text-[#F5F7F3] flex flex-col">
        {/* Navigation Breadcrumb Bar */}
        <header className="border-b border-[#1B3B2F] bg-[#0A1A12]/90 backdrop-blur-md sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#A8B5AE]">
              <Link
                href="/"
                className="hover:text-[#35E27F] transition-colors flex items-center gap-1 font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>HealthyVicinity</span>
              </Link>
              <span>/</span>
              <span className="text-[#35E27F] font-semibold">
                {city}, {state}
              </span>
            </nav>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Interactive Map</span>
            </Link>
          </div>
        </header>

        {/* Main Semantic Content Area */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
          {/* City Hero Section */}
          <section className="relative rounded-3xl bg-[#0B1A14] border border-[#1B3B2F] p-6 sm:p-10 overflow-hidden shadow-lg">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#35E27F]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 w-80 h-80 bg-[#123D2A]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123D2A] text-[#b6f7c1] border border-[#1B3B2F] text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#35E27F]" />
                <span>{city}, {state} Clean Dining Guide</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#F5F7F3]">
                Seed-Oil-Free &amp; High-Protein Dining in{' '}
                <span className="text-[#35E27F]">{city}, {state}</span>
              </h1>

              <p className="text-sm sm:text-base text-[#A8B5AE] leading-relaxed">
                Explore {dishes.length} kitchen-verified dishes in {city}. Every dish is prepared
                with pure fats (grass-fed beef tallow, avocado oil, and extra virgin olive oil),
                free from industrial seed oils, with complete macronutrient breakdowns.
              </p>

              {/* City Statistics Micro-dashboard */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-[#07130F] border border-[#1B3B2F]">
                  <div className="text-[11px] text-[#A8B5AE]">Verified Dishes</div>
                  <div className="text-lg sm:text-xl font-extrabold text-[#F5F7F3]">{dishes.length}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#07130F] border border-[#1B3B2F]">
                  <div className="text-[11px] text-[#A8B5AE]">Avg. Protein</div>
                  <div className="text-lg sm:text-xl font-extrabold text-[#35E27F]">{avgProtein}g</div>
                </div>
                <div className="p-3 rounded-xl bg-[#07130F] border border-[#1B3B2F]">
                  <div className="text-[11px] text-[#A8B5AE]">Avg. Calories</div>
                  <div className="text-lg sm:text-xl font-extrabold text-[#F5F7F3]">{avgCalories} kcal</div>
                </div>
                <div className="p-3 rounded-xl bg-[#07130F] border border-[#1B3B2F]">
                  <div className="text-[11px] text-[#A8B5AE]">Cooking Fats</div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#b6f7c1] truncate">
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
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0F231B] border border-[#1B3B2F] space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#35E27F]" />
              <h2 className="text-lg sm:text-xl font-bold text-[#F5F7F3]">
                The HealthyVicinity Verification Standard in {city}
              </h2>
            </div>
            <div className="prose prose-invert text-xs sm:text-sm text-[#A8B5AE] leading-relaxed space-y-3 max-w-4xl">
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
          <section className="space-y-4 pt-4 border-t border-[#1B3B2F]">
            <h2 className="text-sm font-bold text-[#F5F7F3] uppercase tracking-wider">
              Explore Seed-Oil-Free Dining in Other Metros
            </h2>
            <div className="flex flex-wrap gap-2">
              {allHubs.map((hub) => (
                <Link
                  key={hub.slug}
                  href={`/${hub.slug}`}
                  className="px-3 py-1.5 rounded-xl bg-[#0F231B] hover:bg-[#123D2A] text-xs font-semibold text-[#A8B5AE] hover:text-[#35E27F] border border-[#1B3B2F] transition-all"
                >
                  {hub.name}, {hub.state} ({hub.count} dishes)
                </Link>
              ))}
            </div>
          </section>
        </main>

        {/* Minimal Footer */}
        <footer className="border-t border-[#1B3B2F] bg-[#07130F] py-8 text-center text-xs text-[#A8B5AE]">
          <div className="max-w-7xl mx-auto px-4 space-y-2">
            <p>
              &copy; {new Date().getFullYear()} HealthyVicinity &bull; Bio-Individual Dining Engine &bull; Zero Seed Oils
            </p>
            <p className="text-[11px] text-[#697A72]">
              Verified Clean High-Protein Nutrition Directory for {city}, {state}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
