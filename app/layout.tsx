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
        className="min-h-screen bg-[#FAF6EE] text-[#231815] antialiased font-sans selection:bg-[#F5C842]/35 selection:text-[#231815]"
      >
        <ClientErrorHandler />
        {children}
      </body>
    </html>
  );
}

