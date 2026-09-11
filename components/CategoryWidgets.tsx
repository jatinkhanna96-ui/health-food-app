'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  WheatOff,
  Sparkles,
  Flame,
  Wheat,
  Activity,
  Zap,
  HeartPulse,
  Leaf,
  ArrowUpRight,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { WIDGET_CATEGORIES, WidgetCategory } from '@/lib/categories';
export { WIDGET_CATEGORIES, type WidgetCategory };

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  WheatOff,
  Sparkles,
  Flame,
  Wheat,
  Activity,
  Zap,
  HeartPulse,
  Leaf,
};

export interface CategoryWidgetsProps {
  countryCode: string;
  citySlug: string;
  className?: string;
  highlighted?: boolean;
}

export default function CategoryWidgets({
  countryCode,
  citySlug,
  className = '',
}: CategoryWidgetsProps) {
  const [activeGroup, setActiveGroup] = useState<string>('all');

  const groups = [
    { id: 'all', label: 'All Standards', count: 9 },
    { id: 'Clean Sourcing', label: 'Clean Sourcing', count: 3 },
    { id: 'Protein & Grains', label: 'Protein & Grains', count: 3 },
    { id: 'Functional Tonics', label: 'Functional Tonics', count: 3 },
  ];

  const visibleCategories =
    activeGroup === 'all'
      ? WIDGET_CATEGORIES
      : WIDGET_CATEGORIES.filter((c) => c.categoryGroup === activeGroup);

  return (
    <div className={`w-full space-y-4 ${className}`}>
      {/* Category Group Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {groups.map((g) => {
          const isActive = activeGroup === g.id;
          return (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-[#2E6B34] text-white shadow-xs scale-102 font-bold'
                  : 'bg-white text-[#4A5548] border border-[#EAE4D5] hover:border-[#2E6B34]/40 hover:text-[#1B2E1B]'
              }`}
            >
              {g.id === 'all' ? (
                <Layers className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#2E6B34]'}`} />
              ) : (
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? 'bg-white' : 'bg-[#2E6B34]'
                  }`}
                />
              )}
              <span>{g.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#FAF7EE] text-[#5A6658] border border-[#EAE4D5]'
                }`}
              >
                {g.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Tech Category Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {visibleCategories.map((category) => {
          const href = `/${countryCode}/${citySlug}/${category.slug}`;
          const IconComponent = ICON_MAP[category.iconName] || ShieldCheck;

          return (
            <Link
              key={category.slug}
              id={`widget-${category.slug}`}
              href={href}
              className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white border border-[#EAE4D5] hover:border-[#F6C833] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(40,30,10,0.08)] focus:outline-none focus:border-[#2E6B34] overflow-hidden"
            >
              {/* Subtle top-right ambient hover glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-radial from-[#F6C833]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Header Row: Icon + Specification Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5EB] border border-[#CDE5D0] flex items-center justify-center text-[#2E6B34] group-hover:scale-105 group-hover:bg-[#d8edd9] transition-all shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <span className="text-[11px] font-mono font-medium text-[#2E6B34] bg-[#FAF7EE] px-2.5 py-1 rounded-lg border border-[#EAE4D5]">
                    {category.spec}
                  </span>
                </div>

                {/* Title and Subtext */}
                <div className="mt-3.5 space-y-1">
                  <h3 className="text-base font-bold text-[#1B2E1B] group-hover:text-[#2E6B34] transition-colors flex items-center gap-1.5 tracking-tight">
                    <span>{category.label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B34] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-[#5A6658] leading-relaxed group-hover:text-[#1B2E1B] transition-colors line-clamp-2 font-sans">
                    {category.subtext}
                  </p>
                </div>
              </div>

              {/* Bottom Footer: Protocol Group & Action */}
              <div className="flex items-center justify-between pt-3 mt-4 border-t border-[#EAE4D5]">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#788474] group-hover:text-[#4A5548] transition-colors">
                  {category.categoryGroup}
                </span>

                <div className="flex items-center gap-1 text-xs font-mono font-bold text-[#2E6B34] group-hover:text-[#1b4e23] transition-colors">
                  <span className="tracking-wide">Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
