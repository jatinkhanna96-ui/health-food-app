import type { MetadataRoute } from 'next';
import {
  getAllDishes,
  getAllCityHubs,
  slugifyCity,
  SITE_URL,
} from '@/lib/seoData';

export const revalidate = 86400; // Revalidate every 24 hours

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const baseUrl = (SITE_URL || 'https://healthyvicinity.com').replace(/\/+$/, '');

  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // City Hubs
  const cityHubs = getAllCityHubs();
  for (const hub of cityHubs) {
    entries.push({
      url: `${baseUrl}/${hub.slug}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    });
  }

  // Dish detail pages
  const allDishes = getAllDishes();
  for (const dish of allDishes) {
    const citySlug = slugifyCity(dish.city);
    entries.push({
      url: `${baseUrl}/${citySlug}/${dish.id}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  }

  return entries;
}
