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
import { formatPrice } from '@/lib/utils';

interface IntroSequenceProps {
  onComplete: () => void;
}

const TOUR_SLIDES = [
  {
    id: 'clean-fuel',
    badge: 'HEALTHY FOOD DISCOVERY',
    title: 'Find Food That Fits Your Diet',
    subtitle:
      'Discover healthy dishes and restaurants near you with nutrition, ingredients, cooking methods, and information you can trust.',
    highlight: 'Verified Healthy Options',
    dish: INITIAL_DISHES[0], // Prime Ribeye
    tag: 'Cooking Details',
    feature1: 'Clear Ingredients & Cooking Oils',
    feature2: 'Transparent Nutrition & Macros',
  },
  {
    id: 'macro-veto',
    badge: 'SIMPLE FILTERS',
    title: 'Choose What Matters to You',
    subtitle:
      'Filter dishes easily by high protein, low calorie, low sugar, gluten-free, dairy-free, plant-based, or seed-oil-free with instant updates.',
    highlight: 'Find What Fits You',
    dish: INITIAL_DISHES[1], // Wild King Salmon
    tag: '52g Protein • Low Carb',
    feature1: 'Protein & Calorie Goals',
    feature2: 'Dietary Preferences',
  },
  {
    id: 'ai-vision',
    badge: 'AI MENU SCANNER',
    title: 'Understand Any Menu in Seconds',
    subtitle:
      'Snap a photo of any restaurant menu or paste text to see nutrition estimates, ingredients, and cooking methods before you order.',
    highlight: 'Fast Menu Overview',
    dish: INITIAL_DISHES[2], // Bison Bone Broth
    tag: 'Quick Menu Scan',
    feature1: 'Nutrition Breakdown',
    feature2: 'Cooking Oils & Ingredients',
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
    <div className="fixed inset-0 z-50 bg-[#FAF6EE] text-[#231815] flex flex-col justify-between overflow-hidden font-sans">
      {/* Top Header */}
      <header className="px-6 py-4 sm:px-10 sm:py-5 flex items-center justify-between z-20 shrink-0 border-b border-[#E8DEC8] bg-[#FAF6EE]/90 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#FEF5E7] border border-[#F6D8A8] flex items-center justify-center text-[#C86A1D] shadow-xs">
            <Compass className="w-5 h-5 text-[#C86A1D]" />
          </div>
          <div>
            <span className="font-serif font-black text-sm sm:text-base text-[#231815] tracking-tight block leading-tight">
              HEALTHY VICINITY
            </span>
            <span className="text-[10px] font-bold text-[#C86A1D] uppercase tracking-wider">
              Wholesome Food Discovery
            </span>
          </div>
        </div>

        <button
          id="skip-intro-btn"
          onClick={onComplete}
          className="px-4 py-2 rounded-xl bg-white hover:bg-[#F4EDE2] border border-[#E8DEC8] text-[#231815] text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5 active:scale-95"
        >
          <span>Skip to Map</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C86A1D]" />
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4ED] text-[#2D5A34] border border-[#C5DEC9] text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#2D5A34]" />
                <span>{slide.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#231815] tracking-tight leading-[1.15]">
                {slide.title}
              </h2>

              <p className="text-sm sm:text-base text-[#6B5E55] leading-relaxed font-normal max-w-xl">
                {slide.subtitle}
              </p>

              {/* Bullet Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs">
                  <div className="w-7 h-7 rounded-xl bg-[#EBF4ED] flex items-center justify-center text-[#2D5A34] shrink-0 font-bold text-xs border border-[#C5DEC9]">
                    ✓
                  </div>
                  <span className="text-xs font-bold text-[#231815]">
                    {slide.feature1}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs">
                  <div className="w-7 h-7 rounded-xl bg-[#FEF5E7] flex items-center justify-center text-[#C86A1D] shrink-0 font-bold text-xs border border-[#F6D8A8]">
                    ★
                  </div>
                  <span className="text-xs font-bold text-[#231815]">
                    {slide.feature2}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Interactive Preview Card Column */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-sm rounded-[24px] bg-white border border-[#E8DEC8] shadow-xl overflow-hidden"
              >
                {/* Food Image Container */}
                <div className="relative w-full h-56 bg-[#FAF6EE] overflow-hidden">
                  <Image
                    src={slide.dish.image}
                    alt={slide.dish.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#EBF4ED]/95 backdrop-blur-md text-[#2D5A34] text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 border border-[#C5DEC9] shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A34]" />
                    <span>{slide.tag}</span>
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-[#231815] text-xs font-bold shadow-xs flex items-center gap-1 border border-[#E8DEC8]">
                    <Star className="w-3 h-3 fill-[#C86A1D] text-[#C86A1D]" />
                    <span>{slide.dish.rating}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl font-bold text-[#231815] border border-[#E8DEC8] shadow-xs">
                      <Flame className="w-3.5 h-3.5 text-[#C86A1D]" />
                      <span>{slide.dish.calories} kcal</span>
                    </div>
                    <div className="bg-[#EBF4ED]/95 backdrop-blur-md px-2.5 py-1 rounded-xl font-bold text-[#2D5A34] border border-[#C5DEC9] shadow-xs">
                      {slide.dish.protein}g Protein
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-serif font-bold text-[#231815] text-base leading-snug">
                      {slide.dish.name}
                    </h3>
                    <p className="text-xs font-medium text-[#6B5E55] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C86A1D]" />
                      <span>{slide.dish.restaurant}</span>
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#FAF6EE] border border-[#E8DEC8] flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4ED] text-[#2D5A34] flex items-center justify-center font-bold text-[10px] border border-[#C5DEC9]">
                      ✓
                    </div>
                    <span className="text-[11px] font-medium text-[#6B5E55]">
                      Cooked in <strong className="text-[#231815]">{slide.dish.cookingFat}</strong>
                    </span>
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <span className="text-lg font-black text-[#231815]">
                      {formatPrice(slide.dish.price, slide.dish.city, slide.dish.id)}
                    </span>
                    <span className="text-xs font-bold text-[#C86A1D] bg-[#FEF5E7] px-2.5 py-1 rounded-lg border border-[#F6D8A8]">
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
      <footer className="px-6 py-5 sm:px-10 sm:py-6 border-t border-[#E8DEC8] bg-[#FAF6EE]/90 backdrop-blur-md flex items-center justify-between z-20 shrink-0">
        {/* Step Dots */}
        <div className="flex items-center gap-2">
          {TOUR_SLIDES.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === index
                  ? 'w-7 bg-[#C86A1D]'
                  : 'w-2 bg-[#E8DEC8] hover:bg-[#C86A1D]/50'
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
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#F4EDE2] border border-[#E8DEC8] text-[#6B5E55] hover:text-[#231815] text-xs font-bold transition-all cursor-pointer shadow-xs"
            >
              Back
            </button>
          )}

          <button
            id="intro-next-btn"
            onClick={nextSlide}
            className="px-6 py-2.5 rounded-xl bg-[#C86A1D] hover:bg-[#A95513] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-2 active:scale-95 shadow-md"
          >
            <span>{currentSlide === TOUR_SLIDES.length - 1 ? 'Find Food Near Me' : 'Next Step'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}

