import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Healthy Vicinity — Eat Well Anywhere, Without the Guesswork',
  description:
    'Make every meal a choice you can feel good about. HealthyVicinity helps you decide what to order with dish-level transparency on nutrition, ingredients, and cooking methods.',
  openGraph: {
    title: 'Healthy Vicinity — Eat Well Anywhere, Without the Guesswork',
    description:
      'Make every meal a choice you can feel good about. HealthyVicinity helps you decide what to order with dish-level transparency on nutrition, ingredients, and cooking methods.',
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
        {children}
      </body>
    </html>
  );
}

