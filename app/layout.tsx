import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Healthy Vicinity — Bio-Individual Dining Engine • Zero Seed Oils',
  description:
    'Bio-Individual Dining Engine • Zero Seed Oils. Live kitchen proof reels, certified seed-oil-free restaurants, and macro-optimized dishes.',
  openGraph: {
    title: 'Healthy Vicinity — Bio-Individual Dining Engine • Zero Seed Oils',
    description:
      'Bio-Individual Dining Engine • Zero Seed Oils. Live kitchen proof reels, certified seed-oil-free restaurants, and macro-optimized dishes.',
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
        className="min-h-screen bg-zinc-950 text-zinc-100 antialiased font-sans selection:bg-emerald-500/25 selection:text-emerald-300"
      >
        {children}
      </body>
    </html>
  );
}

