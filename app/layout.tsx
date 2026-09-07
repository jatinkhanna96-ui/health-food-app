import type { Metadata } from 'next';
import './globals.css';
import ClientErrorHandler from '@/components/ClientErrorHandler';

export const metadata: Metadata = {
  title: 'Healthy Vicinity — Find Food That Fits Your Diet',
  description:
    'Find food that fits your diet. Discover healthy dishes and restaurants near you with nutrition, ingredients, cooking methods, and information you can trust.',
  openGraph: {
    title: 'Healthy Vicinity — Find Food That Fits Your Diet',
    description:
      'Find food that fits your diet. Discover healthy dishes and restaurants near you with nutrition, ingredients, cooking methods, and information you can trust.',
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
        className="min-h-screen bg-[#07130F] text-[#F5F7F3] antialiased font-sans selection:bg-[#35E27F]/25 selection:text-[#35E27F]"
      >
        <ClientErrorHandler />
        {children}
      </body>
    </html>
  );
}

