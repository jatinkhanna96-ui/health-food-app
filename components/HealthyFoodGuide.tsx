'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Heart,
  Check,
  CheckSquare,
  Square,
  Leaf,
} from 'lucide-react';

interface HealthyFoodGuideProps {
  onFilterByCategory?: (keyword: string) => void;
  onFilterBySnack?: (snackName: string) => void;
  dishesCount?: number;
  cityName?: string;
}

interface FoodPillar {
  id: string;
  name: string;
  icon: 'leaf' | 'heart';
  image: string;
  items: string[];
  filterKeyword: string;
  benefit: string;
}

const FOOD_PILLARS: FoodPillar[] = [
  {
    id: 'fruits',
    name: 'FRUITS',
    icon: 'leaf',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80',
    items: ['Berries', 'Banana', 'Kiwi', 'Apple', 'Orange', 'Papaya', 'Grapes'],
    filterKeyword: 'fruit',
    benefit: 'Vitamins & Antioxidants',
  },
  {
    id: 'veggies',
    name: 'VEGGIES',
    icon: 'leaf',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
    items: ['Spinach', 'Broccoli', 'Carrot', 'Cucumber', 'Bell Pepper', 'Tomato', 'Sweet Potato'],
    filterKeyword: 'vegetable',
    benefit: 'Prebiotic Gut Fiber',
  },
  {
    id: 'whole-grains',
    name: 'WHOLE GRAINS',
    icon: 'leaf',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80',
    items: ['Oats', 'Brown Rice', 'Quinoa', 'Whole Wheat', 'Millet', 'Barley'],
    filterKeyword: 'millet',
    benefit: 'Sustained Energy',
  },
  {
    id: 'healthy-proteins',
    name: 'HEALTHY PROTEINS',
    icon: 'leaf',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
    items: ['Eggs', 'Chicken', 'Fish', 'Tofu', 'Paneer', 'Lentils', 'Chickpeas', 'Beans'],
    filterKeyword: 'protein',
    benefit: 'Lean Muscle Repair',
  },
  {
    id: 'nuts-seeds',
    name: 'NUTS & SEEDS',
    icon: 'heart',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80',
    items: ['Almonds', 'Walnuts', 'Chia Seeds', 'Flaxseeds', 'Pumpkin Seeds', 'Sunflower Seeds'],
    filterKeyword: 'seed',
    benefit: 'Essential Micronutrients',
  },
  {
    id: 'dairy-alternatives',
    name: 'DAIRY & ALTERNATIVES',
    icon: 'heart',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80',
    items: ['Greek Yogurt', 'Curd', 'Cottage Cheese', 'Almond Milk', 'Soy Milk'],
    filterKeyword: 'yogurt',
    benefit: 'Live Probiotics & Calcium',
  },
  {
    id: 'healthy-fats',
    name: 'HEALTHY FATS',
    icon: 'heart',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=400&q=80',
    items: ['Avocado', 'Olive Oil', 'Coconut Oil', 'Nuts', 'Nut Butter'],
    filterKeyword: 'avocado',
    benefit: 'Cellular & Brain Fuel',
  },
  {
    id: 'hydration',
    name: 'HYDRATION',
    icon: 'leaf',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=400&q=80',
    items: ['Water', 'Coconut Water', 'Lemon Water', 'Herbal Tea', 'Green Tea'],
    filterKeyword: 'broth',
    benefit: 'Electrolytes & Vitality',
  },
];

interface SnackIdea {
  id: string;
  title: string;
  image: string;
  cal: string;
  protein: string;
  filterKeyword: string;
}

const SNACK_IDEAS: SnackIdea[] = [
  {
    id: 'fruit-nuts',
    title: 'Fruit + Nuts',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=400&q=80',
    cal: '190 kcal',
    protein: '6g',
    filterKeyword: 'bowl',
  },
  {
    id: 'avocado-toast',
    title: 'Avocado Toast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80',
    cal: '240 kcal',
    protein: '8g',
    filterKeyword: 'avocado',
  },
  {
    id: 'yogurt-berries',
    title: 'Yogurt + Berries + Granola',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=400&q=80',
    cal: '220 kcal',
    protein: '16g',
    filterKeyword: 'yogurt',
  },
  {
    id: 'hummus-veggies',
    title: 'Hummus + Veggies',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80',
    cal: '180 kcal',
    protein: '7g',
    filterKeyword: 'hummus',
  },
  {
    id: 'smoothie-bowl',
    title: 'Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=400&q=80',
    cal: '260 kcal',
    protein: '12g',
    filterKeyword: 'smoothie',
  },
  {
    id: 'energy-bites',
    title: 'Energy Bites',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80',
    cal: '160 kcal',
    protein: '9g',
    filterKeyword: 'protein',
  },
];

export default function HealthyFoodGuide({
  onFilterByCategory,
  onFilterBySnack,
  dishesCount = 0,
  cityName = 'your city',
}: HealthyFoodGuideProps) {
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    'Eat real food': true,
    'Stay hydrated': true,
    'Plan your meals': true,
    'Listen to your body': true,
    'Be consistent': true,
  });

  const toggleCheck = (item: string) => {
    setChecklist((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const handlePillarClick = (pillar: FoodPillar) => {
    setSelectedPillar(pillar.id === selectedPillar ? null : pillar.id);
    if (onFilterByCategory) {
      onFilterByCategory(pillar.filterKeyword);
    }
  };

  return (
    <section
      id="healthy-food-guide-section"
      aria-label="Eat Clean Feel Amazing Healthy Food List"
      className="w-full bg-[#FAF6EE] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#E8DEC8]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* 1. EDITORIAL HEADER WITH HAND-DRAWN FLAIR & SCRIPT */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <span className="text-[#3E4D3F] text-xs sm:text-sm tracking-[0.25em] font-sans font-bold uppercase">
              &mdash;&mdash; DAILY NOURISHMENT &mdash;&mdash;
            </span>

            <h2 className="mt-1 font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#2E3C2F] flex items-center justify-center flex-wrap gap-x-3 gap-y-1">
              <span>EAT CLEAN</span>
              <span className="font-serif italic font-normal text-[#4A5D4E] lowercase tracking-normal flex items-center gap-1.5">
                feel amazing
                <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-[#C86A1D] fill-[#C86A1D]/30 inline-block -rotate-6" />
              </span>
            </h2>
          </div>

          {/* Soft Peach / Sand Pill Ribbon */}
          <div className="pt-1">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#F2DFD7] text-[#7A4B40] text-xs sm:text-sm font-bold tracking-[0.18em] uppercase shadow-2xs border border-[#E8CEC3]">
              HEALTHY FOOD LIST
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#6B5E55] max-w-lg mx-auto font-medium leading-relaxed">
            Whole, nutrient-dense building blocks sourced from verified clean restaurants and local markets in{' '}
            <strong className="text-[#231815]">{cityName}</strong>.
          </p>
        </div>

        {/* 2. THE 8 FOOD PILLARS (CIRCULAR VISUAL BOWLS WITH INGREDIENTS) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {FOOD_PILLARS.map((pillar) => {
            const isSelected = selectedPillar === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => handlePillarClick(pillar)}
                className={`group p-3 sm:p-3.5 rounded-2xl bg-white border transition-all duration-200 cursor-pointer flex flex-col items-center text-center shadow-xs hover:shadow-md hover:-translate-y-1 ${
                  isSelected
                    ? 'border-[#2D5A34] ring-2 ring-[#2D5A34]/30 bg-[#FAF7F2]'
                    : 'border-[#E8DEC8] hover:border-[#C86A1D]'
                }`}
                title={`Filter clean dishes with ${pillar.name}`}
              >
                {/* Circular Bowl Image */}
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 border-[#E8DEC8] shadow-inner bg-[#FAF6EE] group-hover:scale-105 transition-transform shrink-0">
                  <Image
                    src={pillar.image}
                    alt={pillar.name}
                    fill
                    sizes="(max-width: 640px) 80px, 90px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-[#2D5A34]/30 backdrop-blur-2xs flex items-center justify-center">
                      <Check className="w-6 h-6 text-white stroke-[3]" />
                    </div>
                  )}
                </div>

                {/* Title & Icon */}
                <div className="mt-3 flex items-center justify-center gap-1">
                  <h3 className="font-serif font-black text-xs sm:text-[13px] text-[#231815] tracking-tight group-hover:text-[#C86A1D] transition-colors">
                    {pillar.name}
                  </h3>
                  {pillar.icon === 'leaf' ? (
                    <Leaf className="w-3 h-3 text-[#2D5A34]" />
                  ) : (
                    <Heart className="w-3 h-3 text-[#C86A1D]" />
                  )}
                </div>

                {/* Benefit Tag */}
                <span className="mt-1 px-1.5 py-0.5 rounded bg-[#EBF4ED] text-[#2D5A34] text-[9.5px] font-bold">
                  {pillar.benefit}
                </span>

                {/* Ingredients List */}
                <p className="mt-2 text-[10.5px] text-[#6B5E55] leading-snug line-clamp-3">
                  {pillar.items.join(', ')}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3. HEALTHY SNACK IDEAS RIBBON */}
        <div id="snack-ideas-section" className="space-y-6 pt-4 scroll-mt-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-3 text-[#3E4D3F]">
              <span className="font-serif text-sm tracking-widest text-[#C86A1D]">&mdash;&mdash;&equiv;</span>
              <h3 className="font-serif font-black text-lg sm:text-2xl text-[#231815] tracking-tight uppercase">
                HEALTHY SNACK IDEAS
              </h3>
              <span className="font-serif text-sm tracking-widest text-[#C86A1D]">&equiv;&mdash;&mdash;</span>
            </div>
            <p className="text-xs text-[#6B5E55] mt-1 font-medium">
              Quick, satisfying whole-food bites designed to maintain blood sugar and steady metabolic energy.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {SNACK_IDEAS.map((snack) => (
              <div
                key={snack.id}
                onClick={() => onFilterBySnack?.(snack.filterKeyword)}
                className="group p-3 rounded-2xl bg-white border border-[#E8DEC8] hover:border-[#C86A1D] transition-all hover:shadow-md cursor-pointer flex flex-col items-center text-center shadow-xs"
                title={`Find ${snack.title} nearby`}
              >
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border border-[#E8DEC8] bg-[#FAF6EE] group-hover:scale-105 transition-transform shrink-0 shadow-inner">
                  <Image
                    src={snack.image}
                    alt={snack.title}
                    fill
                    sizes="(max-width: 640px) 64px, 72px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h4 className="mt-2.5 font-serif font-bold text-xs text-[#231815] group-hover:text-[#C86A1D] transition-colors leading-tight min-h-[32px] flex items-center justify-center">
                  {snack.title}
                </h4>

                <div className="mt-1 flex items-center gap-1.5 text-[10px] text-[#6B5E55] font-semibold">
                  <span className="text-[#2D5A34] font-bold">{snack.protein}</span>
                  <span>&bull;</span>
                  <span>{snack.cal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. THREE WHOLESOME LIFESTYLE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Card 1: TIPS Spiral Notebook */}
          <div className="relative p-6 rounded-2xl bg-[#FFFDF9] border border-[#E2D5BE] shadow-md flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-5 flex flex-col justify-around py-3 border-r border-[#EFE5D3] bg-[#F7F2E6]">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#3E302A]/40 mx-auto shadow-inner" />
              ))}
            </div>

            <div className="pl-5 space-y-4">
              <div className="inline-block px-3 py-1 rounded bg-[#5A6D5D] text-white text-[11px] font-bold uppercase tracking-widest shadow-2xs">
                TIPS
              </div>

              <ul className="space-y-2.5 text-xs text-[#352B27] font-medium font-sans">
                {Object.entries(checklist).map(([text, checked]) => (
                  <li
                    key={text}
                    onClick={() => toggleCheck(text)}
                    className="flex items-center gap-2.5 cursor-pointer hover:text-[#C86A1D] transition-colors select-none"
                  >
                    {checked ? (
                      <CheckSquare className="w-4 h-4 text-[#2D5A34] shrink-0" />
                    ) : (
                      <Square className="w-4 h-4 text-[#9E9084] shrink-0" />
                    )}
                    <span className={checked ? 'font-bold text-[#231815]' : 'line-through text-[#9E9084]'}>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pl-5 pt-4 text-[10px] text-[#8C7E72] italic">
              Tap any habit to check off today&apos;s clean living commitment.
            </div>
          </div>

          {/* Card 2: GOOD FOOD GOOD MOOD GOOD DAY Placard */}
          <div className="p-8 rounded-[28px] bg-[#4D5D4E] text-[#FDFCF7] shadow-lg flex flex-col items-center justify-center text-center relative overflow-hidden group hover:bg-[#455446] transition-colors">
            <div className="absolute inset-0 bg-radial from-white/[0.07] to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-2 font-serif font-black tracking-wider uppercase text-2xl sm:text-3xl leading-snug">
              <p className="tracking-[0.1em] text-white drop-shadow-xs">GOOD FOOD</p>
              <p className="tracking-[0.1em] text-[#F9D65E] drop-shadow-xs">GOOD MOOD</p>
              <p className="tracking-[0.1em] text-white drop-shadow-xs">GOOD DAY&rdquo;</p>
              <div className="pt-2 flex justify-center">
                <Heart className="w-6 h-6 text-[#F9D65E] fill-[#F9D65E]/30 transform hover:scale-125 transition-transform" />
              </div>
            </div>

            <p className="relative z-10 text-[11px] text-white/70 tracking-wide font-sans mt-3">
              Fueling {dishesCount} clean, seed-oil-free meals across 62 cities.
            </p>
          </div>

          {/* Card 3: REMEMBER Soft Blush Sticky Note */}
          <div className="relative p-6 rounded-2xl bg-[#F4DED5] border border-[#E6C7BC] shadow-md flex flex-col justify-between text-[#4A2D25] rotate-0.5 hover:rotate-0 transition-transform">
            <div className="absolute -top-3.5 right-8 z-10">
              <div className="w-4 h-10 rounded-full border-2 border-slate-400 bg-white/40 shadow-xs transform rotate-12" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-1 text-[#8A5144] font-serif font-black text-xs uppercase tracking-widest">
                <span>REMEMBER</span>
              </div>

              <div className="font-serif italic text-lg sm:text-xl text-[#3A1F18] leading-relaxed pt-2">
                &ldquo;Small changes lead to big results&rdquo;
              </div>

              <p className="text-xs text-[#6B4B42] leading-relaxed font-sans">
                Swapping toxic seed oils for grass-fed tallow, cold-pressed EVOO, or A2 desi ghee reduces systemic cellular inflammation from day one.
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-[#E6C7BC]/80 text-[11px] font-bold text-[#8A5144]">
              <span>HealthyVicinity Standard</span>
              <Heart className="w-4 h-4 fill-current text-[#8A5144]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
