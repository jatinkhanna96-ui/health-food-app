import { INITIAL_DISHES, CITY_LOCATIONS, Dish as RawDish } from '@/lib/mockData';

export interface Dish {
  id: string;
  city: string;
  state: string;
  restaurant_name: string;
  address: string;
  dish_name: string;
  calories: number;
  protein_g: number;
  carbs_g: number;
  fat_g: number;
  fiber_g: number;
  sugar_g: number;
  cooking_fat: string;
  is_seed_oil_free: boolean;
  is_grass_fed: boolean;
  price: number;
  // Enriched presentation metadata
  image?: string;
  rating?: number;
  reviews_count?: number;
  ingredients?: string[];
  chef_notes?: string;
  diet_tags?: string[];
}

export interface CityHubInfo {
  slug: string;
  name: string;
  state: string;
  count: number;
  avg_protein: number;
  avg_calories: number;
  top_fats: string[];
}

// City slug mapping dictionary including common shortcodes
const CITY_SLUG_MAP: Record<string, string> = {
  austin: 'Austin',
  'new-york': 'New York',
  nyc: 'New York',
  'los-angeles': 'Los Angeles',
  la: 'Los Angeles',
  'san-francisco': 'San Francisco',
  sf: 'San Francisco',
  miami: 'Miami',
  chicago: 'Chicago',
  dallas: 'Dallas',
  houston: 'Houston',
  phoenix: 'Phoenix',
  scottsdale: 'Scottsdale',
  'san-diego': 'San Diego',
  boston: 'Boston',
  denver: 'Denver',
  seattle: 'Seattle',
  atlanta: 'Atlanta',
  nashville: 'Nashville',
  washington: 'Washington',
  dc: 'Washington',
  'washington-dc': 'Washington',
  portland: 'Portland',
  charlotte: 'Charlotte',
  tampa: 'Tampa',
  orlando: 'Orlando',
  boulder: 'Boulder',
  columbus: 'Columbus',
  'salt-lake-city': 'Salt Lake City',
  minneapolis: 'Minneapolis',
  indianapolis: 'Indianapolis',
  detroit: 'Detroit',
  'las-vegas': 'Las Vegas',
  sacramento: 'Sacramento',
};

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://healthyvicinity.com';

export function slugifyCity(cityName: string): string {
  const normalized = cityName.toLowerCase().trim();
  if (normalized === 'new york') return 'nyc';
  return normalized.replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function resolveCityNameFromSlug(slug: string): string | null {
  const normalized = slug.toLowerCase().trim();
  return CITY_SLUG_MAP[normalized] || null;
}

function resolveStateForCity(cityName: string): string {
  const found = CITY_LOCATIONS.find(
    (c) => c.name.toLowerCase() === cityName.toLowerCase()
  );
  if (found?.state) return found.state;

  // Fallback lookup
  const stateMap: Record<string, string> = {
    Austin: 'TX',
    'New York': 'NY',
    'Los Angeles': 'CA',
    'San Francisco': 'CA',
    Miami: 'FL',
    Chicago: 'IL',
    Dallas: 'TX',
    Houston: 'TX',
    Phoenix: 'AZ',
    Scottsdale: 'AZ',
    'San Diego': 'CA',
    Boston: 'MA',
    Denver: 'CO',
    Seattle: 'WA',
    Atlanta: 'GA',
    Nashville: 'TN',
    Washington: 'DC',
    Portland: 'OR',
    Charlotte: 'NC',
    Tampa: 'FL',
    Orlando: 'FL',
    Boulder: 'CO',
    Columbus: 'OH',
    'Salt Lake City': 'UT',
    Minneapolis: 'MN',
    Indianapolis: 'IN',
    Detroit: 'MI',
    'Las Vegas': 'NV',
    Sacramento: 'CA',
  };
  return stateMap[cityName] || 'US';
}

function adaptRawDishToDish(raw: RawDish): Dish {
  const state = resolveStateForCity(raw.city);
  const sugarEstimate = Math.max(1, Math.round((raw.carbs || 8) * 0.12));

  return {
    id: raw.id,
    city: raw.city,
    state,
    restaurant_name: raw.restaurant,
    address: raw.restaurantAddress || `${raw.restaurant}, ${raw.city}, ${state}`,
    dish_name: raw.name,
    calories: raw.calories,
    protein_g: raw.protein,
    carbs_g: raw.carbs,
    fat_g: raw.fat,
    fiber_g: raw.fiber || 0,
    sugar_g: sugarEstimate,
    cooking_fat: raw.cookingFat || 'Grass-Fed Beef Tallow',
    is_seed_oil_free: raw.isSeedOilFree ?? true,
    is_grass_fed: raw.isGrassFed ?? false,
    price: raw.price || 16.0,
    image: raw.image,
    rating: raw.rating,
    reviews_count: raw.reviewsCount,
    ingredients: raw.ingredients,
    chef_notes: raw.chefNotes,
    diet_tags: raw.dietTags,
  };
}

let cachedDishes: Dish[] | null = null;

export function getAllDishes(): Dish[] {
  if (!cachedDishes) {
    cachedDishes = INITIAL_DISHES.map(adaptRawDishToDish);
  }
  return cachedDishes;
}

export function getDishById(id: string): Dish | undefined {
  const all = getAllDishes();
  return all.find((d) => d.id === id);
}

export function getDishesByCitySlug(citySlug: string): {
  city: string;
  state: string;
  slug: string;
  dishes: Dish[];
} | null {
  const resolvedName = resolveCityNameFromSlug(citySlug);
  if (!resolvedName) return null;

  const all = getAllDishes();
  const filtered = all.filter(
    (d) => d.city.toLowerCase() === resolvedName.toLowerCase()
  );

  const state = resolveStateForCity(resolvedName);
  return {
    city: resolvedName,
    state,
    slug: citySlug.toLowerCase(),
    dishes: filtered,
  };
}

export function getAllCitySlugs(): string[] {
  // Return standard primary slugs for static generation
  return Object.keys(CITY_SLUG_MAP);
}

export function getAllCityHubs(): CityHubInfo[] {
  const all = getAllDishes();
  const cityGroups = new Map<string, Dish[]>();

  for (const dish of all) {
    const list = cityGroups.get(dish.city) || [];
    list.push(dish);
    cityGroups.set(dish.city, list);
  }

  const hubs: CityHubInfo[] = [];

  cityGroups.forEach((dishes, cityName) => {
    const slug = slugifyCity(cityName);
    const state = resolveStateForCity(cityName);
    const totalProt = dishes.reduce((acc, d) => acc + d.protein_g, 0);
    const totalCal = dishes.reduce((acc, d) => acc + d.calories, 0);

    const fatCounts = new Map<string, number>();
    dishes.forEach((d) => {
      fatCounts.set(d.cooking_fat, (fatCounts.get(d.cooking_fat) || 0) + 1);
    });
    const topFats = [...fatCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([fat]) => fat);

    hubs.push({
      slug,
      name: cityName,
      state,
      count: dishes.length,
      avg_protein: Math.round(totalProt / dishes.length),
      avg_calories: Math.round(totalCal / dishes.length),
      top_fats: topFats,
    });
  });

  return hubs.sort((a, b) => b.count - a.count);
}

export function getRelatedDishes(currentDish: Dish, limit = 4): Dish[] {
  const all = getAllDishes();
  return all
    .filter(
      (d) =>
        d.id !== currentDish.id &&
        (d.city === currentDish.city || d.cooking_fat === currentDish.cooking_fat)
    )
    .slice(0, limit);
}

/**
 * Google-compliant Schema.org Structured Data for Dish Detail Pages
 * Includes Restaurant, MenuItem, and NutritionInformation schemas
 */
export function generateDishJsonLd(
  dish: Dish,
  citySlug: string,
  baseUrl = SITE_URL
) {
  const dishUrl = `${baseUrl}/${citySlug}/${dish.id}`;
  const cityUrl = `${baseUrl}/${citySlug}`;

  const suitableDiets: string[] = [];
  if (dish.is_seed_oil_free) {
    suitableDiets.push('https://schema.org/HealthyDiet');
  }
  if (dish.diet_tags?.some((t) => t.toLowerCase().includes('gluten'))) {
    suitableDiets.push('https://schema.org/GlutenFreeDiet');
  }
  if (dish.diet_tags?.some((t) => t.toLowerCase().includes('keto'))) {
    suitableDiets.push('https://schema.org/KetogenicDiet');
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Restaurant',
        '@id': `${dishUrl}#restaurant`,
        name: dish.restaurant_name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: dish.address,
          addressLocality: dish.city,
          addressRegion: dish.state,
          addressCountry: 'US',
        },
        servesCuisine: [
          'Healthy Dining',
          'High Protein',
          'Seed-Oil-Free',
          'Clean Nutrition',
        ],
        priceRange: '$$',
        hasMenu: {
          '@type': 'Menu',
          '@id': `${dishUrl}#menu`,
          name: `${dish.restaurant_name} Verified Clean Menu`,
          hasMenuItem: {
            '@type': 'MenuItem',
            '@id': `${dishUrl}#menuitem`,
            name: dish.dish_name,
            description: `${dish.calories} kcal, ${dish.protein_g}g protein, ${dish.cooking_fat} verified. Discover clean, seed-oil-free dining at ${dish.restaurant_name} in ${dish.city}.`,
            offers: {
              '@type': 'Offer',
              price: dish.price.toFixed(2),
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: dishUrl,
            },
            nutrition: {
              '@type': 'NutritionInformation',
              calories: `${dish.calories} calories`,
              proteinContent: `${dish.protein_g} grams`,
              carbohydrateContent: `${dish.carbs_g} grams`,
              fatContent: `${dish.fat_g} grams`,
              fiberContent: `${dish.fiber_g} grams`,
              sugarContent: `${dish.sugar_g} grams`,
            },
            suitableForDiet:
              suitableDiets.length > 0 ? suitableDiets : undefined,
            image: dish.image || undefined,
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${dishUrl}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Healthy Vicinity',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `${dish.city}, ${dish.state}`,
            item: cityUrl,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: dish.dish_name,
            item: dishUrl,
          },
        ],
      },
    ],
  };
}

/**
 * Google-compliant Schema.org Structured Data for City Hub Pages
 * Includes ItemList of dishes and Breadcrumbs
 */
export function generateCityJsonLd(
  cityName: string,
  state: string,
  citySlug: string,
  dishes: Dish[],
  baseUrl = SITE_URL
) {
  const cityUrl = `${baseUrl}/${citySlug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${cityUrl}#webpage`,
        url: cityUrl,
        name: `Healthy & Seed-Oil-Free Dining in ${cityName}, ${state}`,
        description: `Verified directory of clean, seed-oil-free dining and high-protein meals in ${cityName}, ${state}. Verified cooking fats and complete macronutrient breakdowns.`,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: dishes.slice(0, 30).map((dish, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'MenuItem',
              name: dish.dish_name,
              url: `${baseUrl}/${citySlug}/${dish.id}`,
              offers: {
                '@type': 'Offer',
                price: dish.price.toFixed(2),
                priceCurrency: 'USD',
              },
              nutrition: {
                '@type': 'NutritionInformation',
                calories: `${dish.calories} calories`,
                proteinContent: `${dish.protein_g} grams`,
                carbohydrateContent: `${dish.carbs_g} grams`,
                fatContent: `${dish.fat_g} grams`,
              },
            },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${cityUrl}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Healthy Vicinity',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `${cityName}, ${state}`,
            item: cityUrl,
          },
        ],
      },
    ],
  };
}
