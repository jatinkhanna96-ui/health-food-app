export interface WidgetCategory {
  label: string;
  slug: string;
  subtext: string;
  categoryGroup: string;
  spec: string;
  iconName: string;
}

export const WIDGET_CATEGORIES: WidgetCategory[] = [
  // Clean Cooking & Sourcing
  {
    label: 'Zero Seed Oil',
    slug: 'clean-oil-ghee',
    subtext: 'A2 Ghee, cold-pressed wood-churned oils & dry roasted',
    categoryGroup: 'Clean Sourcing',
    spec: '0% Seed Oils',
    iconName: 'ShieldCheck',
  },
  {
    label: 'Zero Maida',
    slug: 'no-maida',
    subtext: '100% whole grain, stone-ground atta & sourdough',
    categoryGroup: 'Clean Sourcing',
    spec: '100% Whole Grain',
    iconName: 'WheatOff',
  },
  {
    label: 'No Refined Sugar',
    slug: 'no-refined-sugar',
    subtext: 'Wild forest honey, unrefined jaggery, or zero sugar',
    categoryGroup: 'Clean Sourcing',
    spec: 'Zero High-Fructose',
    iconName: 'Sparkles',
  },

  // Protein & Grain Optimization
  {
    label: '30g+ Veg Protein',
    slug: 'high-protein-veg',
    subtext: 'High-density artisanal paneer, edamame & pulses',
    categoryGroup: 'Protein & Grains',
    spec: '≥30g Bio-Protein',
    iconName: 'Flame',
  },
  {
    label: 'Ancient Millets',
    slug: 'millet-dishes',
    subtext: 'Nutrient-dense ragi, jowar, bajra & foxtail millets',
    categoryGroup: 'Protein & Grains',
    spec: 'Ancient Supergrains',
    iconName: 'Wheat',
  },
  {
    label: 'Low GI / Diabetic',
    slug: 'low-gi',
    subtext: 'High-fibre, low glycemic response for sustained energy',
    categoryGroup: 'Protein & Grains',
    spec: 'Glycemic Index < 55',
    iconName: 'Activity',
  },

  // Desi Functional Beverages
  {
    label: 'Sattu & Chaas',
    slug: 'desi-protein-coolers',
    subtext: 'Roasted gram protein coolers & probiotic spiced chaas',
    categoryGroup: 'Functional Tonics',
    spec: 'Plant Electrolytes',
    iconName: 'Zap',
  },
  {
    label: 'Gut Probiotics',
    slug: 'probiotic-drinks',
    subtext: 'Raw fermented kanji, kefir & wild kombucha brews',
    categoryGroup: 'Functional Tonics',
    spec: 'Live Cultures',
    iconName: 'HeartPulse',
  },
  {
    label: 'Ayurvedic Tonics',
    slug: 'ayurvedic-tonics',
    subtext: 'Cold-pressed amla, organic haldi & herbal decoctions',
    categoryGroup: 'Functional Tonics',
    spec: 'Adaptogenic Bioactive',
    iconName: 'Leaf',
  },
];

export function getCategoryBySlug(slug: string): WidgetCategory | undefined {
  if (!slug) return undefined;
  return WIDGET_CATEGORIES.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllCategorySlugs(): string[] {
  return WIDGET_CATEGORIES.map((c) => c.slug);
}
