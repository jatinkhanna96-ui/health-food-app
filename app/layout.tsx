import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Healthy Food & Dish Finder',
  description:
    'Discover healthy, macro-targeted, seed-oil-free, and keto dishes at local independent restaurants with interactive maps and AI menu analysis.',
  openGraph: {
    title: 'Healthy Food & Dish Finder',
    description:
      'Discover healthy, macro-targeted, seed-oil-free, and keto dishes at local independent restaurants with interactive maps and AI menu analysis.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#F7F4ED] text-stone-900 antialiased font-sans"
      >
        {children}
      </body>
    </html>
  );
}

