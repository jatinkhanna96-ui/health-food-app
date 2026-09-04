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
    <div className="fixed inset-0 z-50 bg-[#F8F5EE] text-stone-900 flex flex-col justify-between overflow-hidden font-sans">
      {/* Top Header */}
      <header className="px-6 py-4 sm:px-10 sm:py-5 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-md shadow-red-600/25">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="font-black text-sm sm:text-base text-stone-900 tracking-tight block leading-tight">
              HEALTHY VICINITY
            </span>
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">
              Clean Fuel &amp; Macro Discovery
            </span>
          </div>
        </div>

        <button
          id="skip-intro-btn"
          onClick={onComplete}
          className="px-4 py-2 rounded-full bg-white hover:bg-stone-100 border border-stone-200 text-stone-800 text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5 active:scale-95"
        >
          <span>Skip to Map</span>
          <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-800 text-xs font-black tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-red-600" />
                <span>{slide.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15]">
                {slide.title}
              </h2>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-medium max-w-xl">
                {slide.subtitle}
              </p>

              {/* Bullet Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 font-bold">
                    ✓
                  </div>
                  <span className="text-xs font-extrabold text-stone-800">
                    Verified Cooking Fats Only
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-red-100 flex items-center justify-center text-red-700 shrink-0 font-bold">
                    ★
                  </div>
                  <span className="text-xs font-extrabold text-stone-800">
                    High Protein &amp; Low Net Carbs
                  </span>
                </div>
              </div>
            </div>

            {/* Right Interactive Preview Card Column */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-sm rounded-3xl bg-white border border-stone-200/90 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                {/* Food Image Container */}
                <div className="relative w-full h-56 bg-stone-100 overflow-hidden">
                  <Image
                    src={slide.dish.image}
                    alt={slide.dish.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{slide.tag}</span>
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-stone-900 text-xs font-extrabold shadow-sm flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{slide.dish.rating}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xl font-bold">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      <span>{slide.dish.calories} kcal</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xl font-bold text-emerald-400">
                      {slide.dish.protein}g Protein
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-extrabold text-stone-900 text-base leading-snug">
                      {slide.dish.name}
                    </h3>
                    <p className="text-xs font-semibold text-stone-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      <span>{slide.dish.restaurant}</span>
                    </p>
                  </div>

                  <div className="p-2.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px]">
                      ✓
                    </div>
                    <span className="text-[11px] font-semibold text-stone-700">
                      Cooked in <strong className="text-stone-900">{slide.dish.cookingFat}</strong>
                    </span>
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <span className="text-lg font-black text-red-700">
                      ${slide.dish.price.toFixed(2)}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
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
      <footer className="px-6 py-5 sm:px-10 sm:py-6 border-t border-stone-200 bg-[#FAF8F5]/90 backdrop-blur-md flex items-center justify-between z-20 shrink-0">
        {/* Step Dots */}
        <div className="flex items-center gap-2">
          {TOUR_SLIDES.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentSlide === index
                  ? 'w-8 bg-red-600'
                  : 'w-2.5 bg-stone-300 hover:bg-stone-400'
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
              className="px-4 py-2.5 rounded-full bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 text-xs font-bold transition-all cursor-pointer shadow-xs"
            >
              Back
            </button>
          )}

          <button
            id="intro-next-btn"
            onClick={nextSlide}
            className="px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-black transition-all shadow-md shadow-red-600/25 cursor-pointer flex items-center gap-2 active:scale-95"
          >
            <span>{currentSlide === TOUR_SLIDES.length - 1 ? 'Start Exploring Map' : 'Next Step'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}

