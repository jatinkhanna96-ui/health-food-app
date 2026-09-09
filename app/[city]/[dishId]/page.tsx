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

      <div className="min-h-screen bg-[#FAF6EE] text-[#231815] flex flex-col">
        {/* Top Header & Breadcrumbs */}
        <header className="border-b border-[#E8DEC8] bg-[#FAF6EE]/90 backdrop-blur-md sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-xs text-[#6B5E55] overflow-x-auto whitespace-nowrap">
              <Link
                href="/"
                className="hover:text-[#C86A1D] transition-colors flex items-center gap-1 font-semibold"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#C86A1D]" />
                <span>HealthyVicinity</span>
              </Link>
              <span>/</span>
              <Link
                href={`/${citySlug}`}
                className="hover:text-[#C86A1D] transition-colors font-semibold"
              >
                {dish.city}, {dish.state}
              </Link>
              <span>/</span>
              <span className="text-[#C86A1D] font-bold truncate max-w-[180px] sm:max-w-[300px]">
                {dish.dish_name}
              </span>
            </nav>

            <Link
              href={`/${citySlug}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#F4EDE2] text-[#231815] border border-[#E8DEC8] text-xs font-bold transition-all shrink-0 ml-2 shadow-xs"
            >
              <span>All {dish.city} Dishes</span>
              <ChevronRight className="w-3 h-3 text-[#C86A1D]" />
            </Link>
          </div>
        </header>

        {/* Server-Rendered Semantic Main Content */}
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
          <article className="space-y-8">
            {/* Hero Card with Dish Image, Title, Restaurant & Actions */}
            <div className="rounded-3xl bg-white border border-[#E8DEC8] overflow-hidden shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                {/* Visual Showcase (Left) */}
                <div className="relative md:col-span-5 aspect-[16/11] md:aspect-auto min-h-[280px] md:min-h-[420px] bg-[#F5EFE6]">
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
                    <div className="w-full h-full flex items-center justify-center bg-[#F5EFE6]">
                      <Flame className="w-14 h-14 text-[#C86A1D]/40" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Seed-Oil-Free Floating Shield */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF4ED]/95 backdrop-blur-md text-[#2D5A34] text-xs font-bold border border-[#C5DEC9] shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A34]" />
                      <span>Zero Seed Oils</span>
                    </span>
                  </div>

                  {/* Cooking Fat Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#231815] text-xs font-bold border border-[#E8DEC8] shadow-xs">
                      <Droplets className="w-3.5 h-3.5 text-[#C86A1D]" />
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
                        className="text-xs font-bold text-[#C86A1D] hover:underline uppercase tracking-wider flex items-center gap-1"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{dish.restaurant_name} &bull; {dish.city}, {dish.state}</span>
                      </Link>

                      <span className="text-sm font-black text-[#231815] bg-[#F4EDE2] px-3 py-1 rounded-lg border border-[#E8DEC8]">
                        ${dish.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Primary H1 for SEO */}
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black tracking-tight text-[#231815] leading-snug">
                      {dish.dish_name}
                    </h1>

                    {/* Address */}
                    <p className="text-xs sm:text-sm text-[#6B5E55] flex items-start gap-1.5">
                      <span className="mt-0.5">&bull;</span>
                      <span>{dish.address}</span>
                    </p>

                    {/* Verification Badges */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#EBF4ED] text-[#2D5A34] text-[11px] font-bold border border-[#C5DEC9]">
                        <CheckCircle2 className="w-3 h-3 text-[#2D5A34]" />
                        <span>Seed-Oil-Free Verified</span>
                      </span>

                      {dish.is_grass_fed && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FEF5E7] text-[#C86A1D] text-[11px] font-bold border border-[#F6D8A8]">
                          <Beef className="w-3 h-3 text-[#C86A1D]" />
                          <span>100% Grass-Fed</span>
                        </span>
                      )}

                      {dish.diet_tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#FAF6EE] text-[#6B5E55] text-[11px] font-semibold border border-[#E8DEC8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Isolated Client-side Interactive Actions (Share, Save, Directions) */}
                  <div className="border-t border-[#E8DEC8] pt-4">
                    <DishClientActions dish={dish} />
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Nutritional Matrix (RSC Server-Rendered for Googlebot) */}
            <section
              id="nutrition-information"
              aria-label="Macronutrient and Nutrition Breakdown"
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8DEC8] space-y-5 shadow-xs"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#C86A1D]" />
                  <h2 className="text-lg sm:text-xl font-serif font-bold text-[#231815]">
                    Verified Nutrition &amp; Macros
                  </h2>
                </div>
                <span className="text-xs font-bold text-[#2D5A34] bg-[#EBF4ED] px-3 py-1 rounded-full border border-[#C5DEC9]">
                  Laboratory &amp; Kitchen Verified
                </span>
              </div>

              {/* High Impact Macro Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {/* Calories */}
                <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DEC8] text-center space-y-1">
                  <div className="text-xs text-[#6B5E55] font-semibold uppercase tracking-wider">Calories</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#231815]">{dish.calories}</div>
                  <div className="text-[10px] text-[#8C7E72]">kcal per serving</div>
                </div>

                {/* Protein */}
                <div className="p-4 rounded-2xl bg-[#EBF4ED] border border-[#C5DEC9] text-center space-y-1 shadow-xs">
                  <div className="text-xs text-[#2D5A34] font-bold uppercase tracking-wider">Protein</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#2D5A34]">{dish.protein_g}g</div>
                  <div className="text-[10px] text-[#2D5A34] font-semibold">Clean High-Protein</div>
                </div>

                {/* Carbohydrates */}
                <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DEC8] text-center space-y-1">
                  <div className="text-xs text-[#6B5E55] font-semibold uppercase tracking-wider">Carbs</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#231815]">{dish.carbs_g}g</div>
                  <div className="text-[10px] text-[#8C7E72]">Total Carbs</div>
                </div>

                {/* Healthy Fat */}
                <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DEC8] text-center space-y-1">
                  <div className="text-xs text-[#6B5E55] font-semibold uppercase tracking-wider">Fat</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#231815]">{dish.fat_g}g</div>
                  <div className="text-[10px] text-[#8C7E72]">{dish.cooking_fat}</div>
                </div>

                {/* Dietary Fiber */}
                <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DEC8] text-center space-y-1">
                  <div className="text-xs text-[#6B5E55] font-semibold uppercase tracking-wider">Fiber</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#231815]">{dish.fiber_g}g</div>
                  <div className="text-[10px] text-[#8C7E72]">Gut Health</div>
                </div>

                {/* Natural Sugar */}
                <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DEC8] text-center space-y-1">
                  <div className="text-xs text-[#6B5E55] font-semibold uppercase tracking-wider">Sugar</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#231815]">{dish.sugar_g}g</div>
                  <div className="text-[10px] text-[#8C7E72]">Low Glycemic</div>
                </div>
              </div>

              {/* Semantic Description text for SEO indexing */}
              <div className="text-xs sm:text-sm text-[#6B5E55] leading-relaxed pt-2">
                <p>
                  <strong>{dish.dish_name}</strong> at <strong>{dish.restaurant_name}</strong> provides{' '}
                  <strong>{dish.calories} kcal</strong> with <strong>{dish.protein_g} grams of protein</strong>,{' '}
                  <strong>{dish.carbs_g} grams of carbohydrates</strong>, and{' '}
                  <strong>{dish.fat_g} grams of clean dietary fat</strong>. Cooking fat verified as{' '}
                  <strong className="text-[#2D5A34]">{dish.cooking_fat}</strong> without canola oil, soybean oil, or refined seed oils.
                </p>
              </div>
            </section>

            {/* Preparation Details, Cooking Fat, and Ingredients */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cooking Fat & Verification Standard */}
              <section className="p-6 rounded-2xl bg-white border border-[#E8DEC8] space-y-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#2D5A34]" />
                  <h3 className="text-base font-serif font-bold text-[#231815]">Cooking Fat Certification</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6B5E55] leading-relaxed">
                  This dish is strictly cooked with{' '}
                  <span className="text-[#2D5A34] font-bold">{dish.cooking_fat}</span>. Refined
                  seed oils (canola, corn, cottonseed, soy, sunflower, safflower) are excluded from the
                  prep stations, marinades, and finishing sauces.
                </p>
                <div className="p-3 rounded-xl bg-[#EBF4ED] border border-[#C5DEC9] text-xs text-[#2D5A34] font-semibold">
                  &bull; Anti-inflammatory cooking standard verified by HealthyVicinity inspection.
                </div>
              </section>

              {/* Ingredients & Chef Notes */}
              <section className="p-6 rounded-2xl bg-white border border-[#E8DEC8] space-y-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-[#C86A1D]" />
                  <h3 className="text-base font-serif font-bold text-[#231815]">Ingredients &amp; Notes</h3>
                </div>
                {dish.ingredients && dish.ingredients.length > 0 ? (
                  <ul className="text-xs sm:text-sm text-[#6B5E55] space-y-1 list-disc list-inside">
                    {dish.ingredients.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm text-[#6B5E55]">
                    Wholesome whole-food ingredients crafted fresh to order at {dish.restaurant_name}.
                  </p>
                )}
                {dish.chef_notes && (
                  <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#E8DEC8] text-xs text-[#6B5E55] italic">
                    &ldquo;{dish.chef_notes}&rdquo;
                  </div>
                )}
              </section>
            </div>

            {/* Cross-Linking: More Clean Dishes in this City */}
            {relatedDishes.length > 0 && (
              <section className="space-y-4 pt-6 border-t border-[#E8DEC8]">
                <div className="flex items-center justify-between">
                  <h2 className="text-base sm:text-lg font-serif font-bold text-[#231815]">
                    More Clean, Seed-Oil-Free Dishes in {dish.city}
                  </h2>
                  <Link
                    href={`/${citySlug}`}
                    className="text-xs font-bold text-[#C86A1D] hover:underline flex items-center gap-1"
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
                      className="group p-4 rounded-2xl bg-white border border-[#E8DEC8] hover:border-[#C86A1D] hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-1">
                        <div className="text-[10.5px] font-bold text-[#C86A1D] uppercase">
                          {item.restaurant_name}
                        </div>
                        <h4 className="text-sm font-bold text-[#231815] group-hover:text-[#C86A1D] transition-colors line-clamp-1">
                          {item.dish_name}
                        </h4>
                        <p className="text-[11px] text-[#6B5E55]">
                          {item.cooking_fat}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-2 border-t border-[#E8DEC8]">
                        <span className="font-extrabold text-[#2D5A34]">{item.protein_g}g Protein</span>
                        <span className="text-[#6B5E55]">{item.calories} kcal</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>
        </main>

        {/* Minimal Footer */}
        <footer className="border-t border-[#E8DEC8] bg-white py-8 text-center text-xs text-[#6B5E55]">
          <div className="max-w-7xl mx-auto px-4 space-y-2">
            <p>
              &copy; {new Date().getFullYear()} HealthyVicinity &bull; Bio-Individual Dining Engine &bull; Zero Seed Oils
            </p>
            <p className="text-[11px] text-[#8C7E72]">
              {dish.dish_name} at {dish.restaurant_name} &bull; {dish.address}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
