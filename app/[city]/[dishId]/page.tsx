import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Flame,
  MapPin,
  Beef,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Clock,
  Utensils,
  DollarSign,
  Droplets,
  Heart,
} from 'lucide-react';
import {
  getDishById,
  getAllDishes,
  getRelatedDishes,
  resolveCityNameFromSlug,
  slugifyCity,
  generateDishJsonLd,
  SITE_URL,
} from '@/lib/seoData';
import DishClientActions from '@/components/seo/DishClientActions';

interface DishPageProps {
  params: Promise<{
    city: string;
    dishId: string;
  }>;
}

// Next.js static params generation at build time for top programmatic dish pages
export async function generateStaticParams() {
  const allDishes = getAllDishes();
  // Generate static pages for dishes across cities
  return allDishes.slice(0, 150).map((dish) => ({
    city: slugifyCity(dish.city),
    dishId: dish.id,
  }));
}

// Dynamic Metadata & OpenGraph generator
export async function generateMetadata({
  params,
}: DishPageProps): Promise<Metadata> {
  const { city: citySlug, dishId } = await params;
  const dish = getDishById(dishId);

  if (!dish) {
    return {
      title: 'Dish Not Found | HealthyVicinity',
      description: 'Verified healthy, high-protein, seed-oil-free dining.',
    };
  }

  // Exact required title format:
  // "[Dish Name] at [Restaurant Name] | [City] Healthy Dining"
  const title = `${dish.dish_name} at ${dish.restaurant_name} | ${dish.city} Healthy Dining`;

  // Exact required description format:
  // "[Calories] kcal, [Protein]g protein, [Cooking Fat] verified. Discover clean, seed-oil-free dining at [Restaurant Name] in [City]."
  const description = `${dish.calories} kcal, ${dish.protein_g}g protein, ${dish.cooking_fat} verified. Discover clean, seed-oil-free dining at ${dish.restaurant_name} in ${dish.city}.`;

  const canonicalUrl = `${SITE_URL}/${citySlug}/${dish.id}`;

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
      type: 'article',
      locale: 'en_US',
      images: [
        {
          url:
            dish.image ||
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80',
          width: 1200,
          height: 630,
          alt: `${dish.dish_name} at ${dish.restaurant_name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        dish.image ||
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80',
      ],
    },
  };
}

export default async function DishDetailPage({ params }: DishPageProps) {
  const { city: citySlug, dishId } = await params;
  const dish = getDishById(dishId);

  if (!dish) {
    notFound();
  }

  const jsonLd = generateDishJsonLd(dish, citySlug, SITE_URL);
  const relatedDishes = getRelatedDishes(dish, 3);

  return (
    <>
      {/* Schema.org Structured Data Injection for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#07130F] text-[#F5F7F3] flex flex-col">
        {/* Top Header & Breadcrumbs */}
        <header className="border-b border-[#1B3B2F] bg-[#0A1A12]/90 backdrop-blur-md sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-xs text-[#A8B5AE] overflow-x-auto whitespace-nowrap">
              <Link
                href="/"
                className="hover:text-[#35E27F] transition-colors flex items-center gap-1 font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>HealthyVicinity</span>
              </Link>
              <span>/</span>
              <Link
                href={`/${citySlug}`}
                className="hover:text-[#35E27F] transition-colors font-medium"
              >
                {dish.city}, {dish.state}
              </Link>
              <span>/</span>
              <span className="text-[#35E27F] font-semibold truncate max-w-[180px] sm:max-w-[300px]">
                {dish.dish_name}
              </span>
            </nav>

            <Link
              href={`/${citySlug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#123D2A] hover:bg-[#1B4D36] text-[#b6f7c1] border border-[#1B3B2F] text-xs font-bold transition-all shrink-0 ml-2"
            >
              <span>All {dish.city} Dishes</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </header>

        {/* Server-Rendered Semantic Main Content */}
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
          <article className="space-y-8">
            {/* Hero Card with Dish Image, Title, Restaurant & Actions */}
            <div className="rounded-3xl bg-[#0B1A14] border border-[#1B3B2F] overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                {/* Visual Showcase (Left) */}
                <div className="relative md:col-span-5 aspect-[16/11] md:aspect-auto min-h-[280px] md:min-h-[420px] bg-[#07130F]">
                  {dish.image ? (
                    <Image
                      src={dish.image}
                      alt={`${dish.dish_name} served at ${dish.restaurant_name} in ${dish.city}`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 42vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#0F231B]">
                      <Flame className="w-14 h-14 text-[#35E27F]/40" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-black/20 to-[#0B1A14] md:to-[#0B1A14] pointer-events-none" />

                  {/* Seed-Oil-Free Floating Shield */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123D2A]/90 backdrop-blur-md text-[#35E27F] text-xs font-bold border border-[#1B3B2F] shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#35E27F]" />
                      <span>Zero Seed Oils</span>
                    </span>
                  </div>

                  {/* Cooking Fat Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#07130F]/90 backdrop-blur-md text-[#b6f7c1] text-xs font-bold border border-[#1B3B2F] shadow-sm">
                      <Droplets className="w-3.5 h-3.5 text-[#35E27F]" />
                      <span>{dish.cooking_fat}</span>
                    </span>
                  </div>
                </div>

                {/* Content & Metadata (Right) */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    {/* Restaurant Name & City Header */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <Link
                        href={`/${citySlug}`}
                        className="text-xs font-bold text-[#35E27F] hover:underline uppercase tracking-wider flex items-center gap-1"
                      >
                        <MapPin className="w-3 h-3" />
                        <span>{dish.restaurant_name} &bull; {dish.city}, {dish.state}</span>
                      </Link>

                      <span className="text-sm font-extrabold text-[#F5F7F3] bg-[#123D2A] px-2.5 py-0.5 rounded-lg border border-[#1B3B2F]">
                        ${dish.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Primary H1 for SEO */}
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F5F7F3] leading-snug">
                      {dish.dish_name}
                    </h1>

                    {/* Address */}
                    <p className="text-xs sm:text-sm text-[#A8B5AE] flex items-start gap-1.5">
                      <span className="mt-0.5">&bull;</span>
                      <span>{dish.address}</span>
                    </p>

                    {/* Verification Badges */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#123D2A] text-[#35E27F] text-[11px] font-semibold border border-[#1B3B2F]">
                        <CheckCircle2 className="w-3 h-3 text-[#35E27F]" />
                        <span>Seed-Oil-Free Verified</span>
                      </span>

                      {dish.is_grass_fed && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#123D2A] text-[#b6f7c1] text-[11px] font-semibold border border-[#1B3B2F]">
                          <Beef className="w-3 h-3 text-[#35E27F]" />
                          <span>100% Grass-Fed</span>
                        </span>
                      )}

                      {dish.diet_tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#07130F] text-[#A8B5AE] text-[11px] font-medium border border-[#1B3B2F]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Isolated Client-side Interactive Actions (Share, Save, Directions) */}
                  <div className="border-t border-[#1B3B2F] pt-4">
                    <DishClientActions dish={dish} />
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Nutritional Matrix (RSC Server-Rendered for Googlebot) */}
            <section
              id="nutrition-information"
              aria-label="Macronutrient and Nutrition Breakdown"
              className="p-6 sm:p-8 rounded-3xl bg-[#0F231B] border border-[#1B3B2F] space-y-5"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#35E27F]" />
                  <h2 className="text-lg sm:text-xl font-bold text-[#F5F7F3]">
                    Verified Nutrition &amp; Macros
                  </h2>
                </div>
                <span className="text-xs font-semibold text-[#b6f7c1] bg-[#123D2A] px-3 py-1 rounded-full border border-[#1B3B2F]">
                  Laboratory &amp; Kitchen Verified
                </span>
              </div>

              {/* High Impact Macro Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {/* Calories */}
                <div className="p-4 rounded-2xl bg-[#07130F] border border-[#1B3B2F] text-center space-y-1">
                  <div className="text-xs text-[#A8B5AE] font-medium uppercase tracking-wider">Calories</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F3]">{dish.calories}</div>
                  <div className="text-[10px] text-[#697A72]">kcal per serving</div>
                </div>

                {/* Protein */}
                <div className="p-4 rounded-2xl bg-[#07130F] border border-[#35E27F]/40 text-center space-y-1 shadow-[0_0_15px_rgba(53,226,127,0.08)]">
                  <div className="text-xs text-[#35E27F] font-bold uppercase tracking-wider">Protein</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#35E27F]">{dish.protein_g}g</div>
                  <div className="text-[10px] text-[#b6f7c1]">Clean High-Protein</div>
                </div>

                {/* Carbohydrates */}
                <div className="p-4 rounded-2xl bg-[#07130F] border border-[#1B3B2F] text-center space-y-1">
                  <div className="text-xs text-[#A8B5AE] font-medium uppercase tracking-wider">Carbs</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F3]">{dish.carbs_g}g</div>
                  <div className="text-[10px] text-[#697A72]">Total Carbs</div>
                </div>

                {/* Healthy Fat */}
                <div className="p-4 rounded-2xl bg-[#07130F] border border-[#1B3B2F] text-center space-y-1">
                  <div className="text-xs text-[#A8B5AE] font-medium uppercase tracking-wider">Fat</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F3]">{dish.fat_g}g</div>
                  <div className="text-[10px] text-[#697A72]">{dish.cooking_fat}</div>
                </div>

                {/* Dietary Fiber */}
                <div className="p-4 rounded-2xl bg-[#07130F] border border-[#1B3B2F] text-center space-y-1">
                  <div className="text-xs text-[#A8B5AE] font-medium uppercase tracking-wider">Fiber</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F3]">{dish.fiber_g}g</div>
                  <div className="text-[10px] text-[#697A72]">Gut Health</div>
                </div>

                {/* Natural Sugar */}
                <div className="p-4 rounded-2xl bg-[#07130F] border border-[#1B3B2F] text-center space-y-1">
                  <div className="text-xs text-[#A8B5AE] font-medium uppercase tracking-wider">Sugar</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F3]">{dish.sugar_g}g</div>
                  <div className="text-[10px] text-[#697A72]">Low Glycemic</div>
                </div>
              </div>

              {/* Semantic Description text for SEO indexing */}
              <div className="text-xs sm:text-sm text-[#A8B5AE] leading-relaxed pt-2">
                <p>
                  <strong>{dish.dish_name}</strong> at <strong>{dish.restaurant_name}</strong> provides{' '}
                  <strong>{dish.calories} kcal</strong> with <strong>{dish.protein_g} grams of protein</strong>,{' '}
                  <strong>{dish.carbs_g} grams of carbohydrates</strong>, and{' '}
                  <strong>{dish.fat_g} grams of clean dietary fat</strong>. Cooking fat verified as{' '}
                  <strong>{dish.cooking_fat}</strong> without canola oil, soybean oil, or refined seed oils.
                </p>
              </div>
            </section>

            {/* Preparation Details, Cooking Fat, and Ingredients */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cooking Fat & Verification Standard */}
              <section className="p-6 rounded-2xl bg-[#0B1A14] border border-[#1B3B2F] space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#35E27F]" />
                  <h3 className="text-base font-bold text-[#F5F7F3]">Cooking Fat Certification</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A8B5AE] leading-relaxed">
                  This dish is strictly cooked with{' '}
                  <span className="text-[#35E27F] font-bold">{dish.cooking_fat}</span>. Refined
                  seed oils (canola, corn, cottonseed, soy, sunflower, safflower) are excluded from the
                  prep stations, marinades, and finishing sauces.
                </p>
                <div className="p-3 rounded-xl bg-[#07130F] border border-[#1B3B2F] text-xs text-[#b6f7c1]">
                  &bull; Anti-inflammatory cooking standard verified by HealthyVicinity inspection.
                </div>
              </section>

              {/* Ingredients & Chef Notes */}
              <section className="p-6 rounded-2xl bg-[#0B1A14] border border-[#1B3B2F] space-y-3">
                <div className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-[#35E27F]" />
                  <h3 className="text-base font-bold text-[#F5F7F3]">Ingredients &amp; Notes</h3>
                </div>
                {dish.ingredients && dish.ingredients.length > 0 ? (
                  <ul className="text-xs sm:text-sm text-[#A8B5AE] space-y-1 list-disc list-inside">
                    {dish.ingredients.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm text-[#A8B5AE]">
                    Wholesome whole-food ingredients crafted fresh to order at {dish.restaurant_name}.
                  </p>
                )}
                {dish.chef_notes && (
                  <div className="p-3 rounded-xl bg-[#07130F] border border-[#1B3B2F] text-xs text-[#A8B5AE] italic">
                    &ldquo;{dish.chef_notes}&rdquo;
                  </div>
                )}
              </section>
            </div>

            {/* Cross-Linking: More Clean Dishes in this City */}
            {relatedDishes.length > 0 && (
              <section className="space-y-4 pt-6 border-t border-[#1B3B2F]">
                <div className="flex items-center justify-between">
                  <h2 className="text-base sm:text-lg font-bold text-[#F5F7F3]">
                    More Clean, Seed-Oil-Free Dishes in {dish.city}
                  </h2>
                  <Link
                    href={`/${citySlug}`}
                    className="text-xs font-bold text-[#35E27F] hover:underline flex items-center gap-1"
                  >
                    <span>View All {dish.city} Hub</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedDishes.map((item) => (
                    <Link
                      key={item.id}
                      href={`/${citySlug}/${item.id}`}
                      className="group p-4 rounded-2xl bg-[#0B1A14] border border-[#1B3B2F] hover:border-[#35E27F]/60 transition-all flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-1">
                        <div className="text-[10.5px] font-semibold text-[#35E27F] uppercase">
                          {item.restaurant_name}
                        </div>
                        <h4 className="text-sm font-bold text-[#F5F7F3] group-hover:text-[#35E27F] transition-colors line-clamp-1">
                          {item.dish_name}
                        </h4>
                        <p className="text-[11px] text-[#A8B5AE]">
                          {item.cooking_fat}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-2 border-t border-[#1B3B2F]">
                        <span className="font-extrabold text-[#35E27F]">{item.protein_g}g Protein</span>
                        <span className="text-[#A8B5AE]">{item.calories} kcal</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>
        </main>

        {/* Minimal Footer */}
        <footer className="border-t border-[#1B3B2F] bg-[#07130F] py-8 text-center text-xs text-[#A8B5AE]">
          <div className="max-w-7xl mx-auto px-4 space-y-2">
            <p>
              &copy; {new Date().getFullYear()} HealthyVicinity &bull; Bio-Individual Dining Engine &bull; Zero Seed Oils
            </p>
            <p className="text-[11px] text-[#697A72]">
              {dish.dish_name} at {dish.restaurant_name} &bull; {dish.address}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
