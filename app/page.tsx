import React from 'react';
import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';
import { generateDirectoryJsonLd, SITE_URL } from '@/lib/seoData';

export async function generateMetadata(): Promise<Metadata> {
  const jsonLd = generateDirectoryJsonLd(SITE_URL);
  const title = 'Healthy Vicinity — Find Food That Fits Your Diet | Clean Dining Directory';
  const description =
    'Find food that fits your diet. Discover verified healthy dishes and clean restaurants near you with nutrition, ingredients, cooking methods, and information you can trust.';
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
      locale: 'en_US',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80',
          width: 1200,
          height: 630,
          alt: 'Healthy Vicinity - Verified Healthy & Seed-Oil-Free Dining Directory',
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
    other: {
      'script:ld+json': JSON.stringify(jsonLd),
    },
  };
}

export default function Page() {
  const jsonLd = generateDirectoryJsonLd(SITE_URL);

  return (
    <>
      {/* Schema.org Structured Data for Directory SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
