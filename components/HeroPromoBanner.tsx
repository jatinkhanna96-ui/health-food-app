'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, ChevronRight, Award, Heart, Leaf } from 'lucide-react';

interface HeroPromoBannerProps {
  onExploreClick?: () => void;
  onOpenScanner?: () => void;
}

export default function HeroPromoBanner({
  onExploreClick,
  onOpenScanner,
}: HeroPromoBannerProps) {
  return (
    <div
      id="healthy-hero-banner"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0e482b] via-[#156e3c] to-[#0b3c22] text-white p-5 sm:p-7 shadow-[0_12px_36px_rgba(16,110,60,0.22)] border border-emerald-700/40"
    >
      {/* Subtle Background Botanical Glow */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-10 w-48 h-48 bg-teal-300/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="space-y-3 max-w-lg">
          {/* Top Pill Guarantee */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 backdrop-blur-md border border-emerald-400/30 text-emerald-100 text-[11px] font-black tracking-wider uppercase">
            <Heart className="w-3.5 h-3.5 fill-emerald-300 text-emerald-300 stroke-[2]" />
            <span>Heart Full of Health • 100% Wholesome Guarantee</span>
          </div>

          {/* Punchy Clean Eating Headline */}
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase leading-tight text-white drop-shadow-sm font-sans">
              EAT REAL WHOLESOME FOOD.
              <br />
              <span className="text-emerald-300">FEEL PURE VITALITY.</span>
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 font-medium leading-relaxed">
              Wholesome nourishment from independent kitchens. Prepared exclusively with
              cold-pressed extra virgin olive oil, avocado oil, and grass-fed butter — strictly zero inflammatory seed oils.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              id="hero-order-now-btn"
              type="button"
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white hover:bg-emerald-50 text-emerald-900 text-xs font-black tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Explore Healthy Dishes</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>

            <button
              id="hero-ai-scan-btn"
              type="button"
              onClick={onOpenScanner}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-black/25 hover:bg-black/35 text-white text-xs font-bold border border-emerald-300/30 transition-all cursor-pointer backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>AI Menu Health Scanner</span>
            </button>
          </div>
        </div>

        {/* Right Badge / Stats Graphic */}
        <div className="hidden md:flex flex-col gap-2 shrink-0 bg-black/20 backdrop-blur-md p-3.5 rounded-2xl border border-emerald-400/20 min-w-[180px]">
          <div className="flex items-center gap-2 text-xs font-black text-emerald-300">
            <Award className="w-4 h-4" />
            <span>Nutritionist Audited</span>
          </div>
          <div className="text-[11px] text-emerald-100/90 space-y-1">
            <div className="flex items-center justify-between">
              <span>Pure EVOO / Avocado:</span>
              <strong className="text-white font-mono">100%</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Canola &amp; Soy Oils:</span>
              <strong className="text-emerald-300 font-mono">0%</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Wholesome Score:</span>
              <strong className="text-amber-300 font-mono">A+ Clean</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
