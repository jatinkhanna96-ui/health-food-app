'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Flame,
  ChevronRight,
  MapPin,
  Star,
} from 'lucide-react';
import { INITIAL_DISHES } from '@/lib/mockData';

interface IntroSequenceProps {
  onComplete: () => void;
}

const TOUR_SLIDES = [
  {
    id: 'clean-fuel',
    badge: 'ZERO REFINED OILS',
    title: 'Eat Out Without Poisoning Your Body',
    subtitle:
      'Over 90% of restaurant food is cooked in inflammatory industrial seed oils (canola, soybean, corn). We curate local independent kitchens cooking strictly with pure beef tallow, organic ghee, and cold-pressed extra virgin olive oil.',
    highlight: '100% Verified Seed-Oil-Free',
    dish: INITIAL_DISHES[0], // Prime Ribeye
    tag: 'Tallow & EVOO',
  },
  {
    id: 'macro-veto',
    badge: 'BIO-INDIVIDUAL DISCOVERY',
    title: 'Lock In Your Macros & Dietary Vetoes',
    subtitle:
      'Filter dishes by high protein thresholds (30g - 60g+), strict celiac gluten-free standards, 100% pasture-raised meats, or zero-carb keto ratios with instant live map updating.',
    highlight: 'Precision Macro Engine',
    dish: INITIAL_DISHES[1], // Wild King Salmon
    tag: '52g Protein • 2g Carbs',
  },
  {
    id: 'ai-vision',
    badge: 'GEMINI 3.7 MULTIMODAL OCR',
    title: 'Scan Any Restaurant Menu in Seconds',
    subtitle:
      'Snap a picture of any physical dinner menu or paste text. Our AI vision model audits the ingredients, identifies hidden cooking oils, and calculates exact macro distributions automatically.',
    highlight: 'Instant AI Menu Analysis',
    dish: INITIAL_DISHES[2], // Bison Bone Broth
    tag: 'Instant OCR Audit',
  },
];

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < TOUR_SLIDES.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const slide = TOUR_SLIDES[currentSlide];

  return (
    <div className="fixed inset-0 z-50 bg-[#07130F] text-[#F5F7F3] flex flex-col justify-between overflow-hidden font-sans">
      {/* Top Header */}
      <header className="px-6 py-4 sm:px-10 sm:py-5 flex items-center justify-between z-20 shrink-0 border-b border-[#1B3B2F] bg-[#07130F]/90 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#123D2A] border border-[#1B3B2F] flex items-center justify-center text-[#35E27F]">
            <Compass className="w-5 h-5 text-[#35E27F]" />
          </div>
          <div>
            <span className="font-bold text-sm sm:text-base text-[#F5F7F3] tracking-tight block leading-tight">
              HEALTHY VICINITY
            </span>
            <span className="text-[10px] font-semibold text-[#35E27F] uppercase tracking-wider">
              Clean Fuel &amp; Macro Discovery
            </span>
          </div>
        </div>

        <button
          id="skip-intro-btn"
          onClick={onComplete}
          className="px-4 py-2 rounded-xl bg-[#0F231B] hover:bg-[#123D2A] border border-[#1B3B2F] text-[#F5F7F3] text-xs font-semibold transition-all shadow-xs cursor-pointer flex items-center gap-1.5 active:scale-95"
        >
          <span>Skip to Map</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#35E27F]" />
        </button>
      </header>

      {/* Main Slide Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 sm:px-10 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full my-auto"
          >
            {/* Left Story Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123D2A] text-[#35E27F] border border-[#1B3B2F] text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#35E27F]" />
                <span>{slide.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F7F3] tracking-tight leading-[1.15]">
                {slide.title}
              </h2>

              <p className="text-sm sm:text-base text-[#A8B5AE] leading-relaxed font-normal max-w-xl">
                {slide.subtitle}
              </p>

              {/* Bullet Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0B1A14] border border-[#1B3B2F]">
                  <div className="w-7 h-7 rounded-lg bg-[#123D2A] flex items-center justify-center text-[#35E27F] shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-xs font-semibold text-[#F5F7F3]">
                    Verified Cooking Fats Only
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0B1A14] border border-[#1B3B2F]">
                  <div className="w-7 h-7 rounded-lg bg-[#123D2A] flex items-center justify-center text-[#35E27F] shrink-0 font-bold text-xs">
                    ★
                  </div>
                  <span className="text-xs font-semibold text-[#F5F7F3]">
                    High Protein &amp; Low Net Carbs
                  </span>
                </div>
              </div>
            </div>

            {/* Right Interactive Preview Card Column */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-sm rounded-2xl bg-[#0B1A14] border border-[#1B3B2F] shadow-2xl overflow-hidden"
              >
                {/* Food Image Container */}
                <div className="relative w-full h-56 bg-[#07130F] overflow-hidden">
                  <Image
                    src={slide.dish.image}
                    alt={slide.dish.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A14] via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#123D2A]/90 backdrop-blur-md text-[#35E27F] text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 border border-[#1B3B2F]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#35E27F]" />
                    <span>{slide.tag}</span>
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#07130F]/90 text-[#F5F7F3] text-xs font-bold shadow-sm flex items-center gap-1 border border-[#1B3B2F]">
                    <Star className="w-3 h-3 fill-[#35E27F] text-[#35E27F]" />
                    <span>{slide.dish.rating}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[#F5F7F3] text-xs">
                    <div className="flex items-center gap-1 bg-[#07130F]/80 backdrop-blur-md px-2.5 py-1 rounded-xl font-bold text-[#F5F7F3] border border-[#1B3B2F]">
                      <Flame className="w-3.5 h-3.5 text-[#35E27F]" />
                      <span>{slide.dish.calories} kcal</span>
                    </div>
                    <div className="bg-[#123D2A]/90 backdrop-blur-md px-2.5 py-1 rounded-xl font-bold text-[#35E27F] border border-[#1B3B2F]">
                      {slide.dish.protein}g Protein
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-bold text-[#F5F7F3] text-base leading-snug">
                      {slide.dish.name}
                    </h3>
                    <p className="text-xs font-medium text-[#A8B5AE] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#35E27F]" />
                      <span>{slide.dish.restaurant}</span>
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#07130F] border border-[#1B3B2F] flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#123D2A] text-[#35E27F] flex items-center justify-center font-bold text-[10px]">
                      ✓
                    </div>
                    <span className="text-[11px] font-medium text-[#A8B5AE]">
                      Cooked in <strong className="text-[#F5F7F3]">{slide.dish.cookingFat}</strong>
                    </span>
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#F5F7F3]">
                      ${slide.dish.price.toFixed(2)}
                    </span>
                    <span className="text-xs font-semibold text-[#35E27F] bg-[#123D2A] px-2.5 py-1 rounded-lg border border-[#1B3B2F]">
                      {slide.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation & Controls */}
      <footer className="px-6 py-5 sm:px-10 sm:py-6 border-t border-[#1B3B2F] bg-[#07130F]/90 backdrop-blur-md flex items-center justify-between z-20 shrink-0">
        {/* Step Dots */}
        <div className="flex items-center gap-2">
          {TOUR_SLIDES.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === index
                  ? 'w-7 bg-[#35E27F]'
                  : 'w-2 bg-[#1B3B2F] hover:bg-[#35E27F]/50'
              }`}
              title={`Jump to step ${index + 1}`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {currentSlide > 0 && (
            <button
              onClick={prevSlide}
              className="px-4 py-2.5 rounded-xl bg-[#0B1A14] hover:bg-[#0F231B] border border-[#1B3B2F] text-[#A8B5AE] text-xs font-semibold transition-all cursor-pointer"
            >
              Back
            </button>
          )}

          <button
            id="intro-next-btn"
            onClick={nextSlide}
            className="px-6 py-2.5 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all cursor-pointer flex items-center gap-2 active:scale-95 shadow-md shadow-[#35E27F]/20"
          >
            <span>{currentSlide === TOUR_SLIDES.length - 1 ? 'Start Exploring Map' : 'Next Step'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}

