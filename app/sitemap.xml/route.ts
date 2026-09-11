import { NextResponse } from 'next/server';
import {
  getAllDishes,
  getAllCityHubs,
  slugifyCity,
  SITE_URL,
} from '@/lib/seoData';

export const dynamic = 'force-static';
export const revalidate = 86400; // Cache for 24 hours

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case '\'':
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
}

export async function GET() {
  const currentDate = new Date().toISOString().split('T')[0];
  const baseUrl = (SITE_URL || 'https://healthyvicinity.com').replace(/\/+$/, '');

  const urls: Array<{
    loc: string;
    lastmod: string;
    changefreq: string;
    priority: string;
  }> = [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0',
    },
  ];

  // City Hubs
  const cityHubs = getAllCityHubs();
  for (const hub of cityHubs) {
    urls.push({
      loc: `${baseUrl}/${hub.slug}`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '0.8',
    });
  }

  // Dish detail pages
  const allDishes = getAllDishes();
  for (const dish of allDishes) {
    const citySlug = slugifyCity(dish.city);
    urls.push({
      loc: `${baseUrl}/${citySlug}/${dish.id}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7',
    });
  }

  const xmlEntries = urls
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n');

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;

  return new Response(xmlContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
