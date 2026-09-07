import type { MetadataRoute } from 'next';
import {
  getAllDishes,
  getAllCityHubs,
  slugifyCity,
  SITE_URL,
} from '@/lib/seoData';

/**
 * Programmatic XML Sitemap Generator for HealthyVicinity
 * Generates dynamic indexable entries for Homepage, City Hubs, and Dish Detail pages.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  // 1. Primary Homepage
  const rootEntry: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 2. City Hub Pages (e.g. /austin, /nyc, /los-angeles)
  const cityHubs = getAllCityHubs();
  const cityEntries: MetadataRoute.Sitemap = cityHubs.map((hub) => ({
    url: `${SITE_URL}/${hub.slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  // 3. Dish Detail Pages (e.g. /austin/hen-austin-1)
  const allDishes = getAllDishes();
  const dishEntries: MetadataRoute.Sitemap = allDishes.map((dish) => {
    const citySlug = slugifyCity(dish.city);
    return {
      url: `${SITE_URL}/${citySlug}/${dish.id}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    };
  });

  return [...rootEntry, ...cityEntries, ...dishEntries];
}
