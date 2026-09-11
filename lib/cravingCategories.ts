import { Dish } from '@/lib/mockData';

export interface CravingCategory {
  id: string;
  label: string;
  emoji: string;
  betterLabel: string;
  betterSubtext: string;
  keywords: string[];
  regionPriority?: 'all' | 'IN' | 'US';
}

export const CRAVING_CATEGORIES: CravingCategory[] = [
  // --- Core Mainstream Craving Categories ---
  {
    id: 'burgers',
    label: 'Burgers',
    emoji: '🍔',
    betterLabel: 'Better Burgers',
    betterSubtext: '100% grass-fed beef & bison, sweet potato or sprouted buns, zero industrial seed oils',
    keywords: ['burger', 'patty', 'patties', 'slider', 'bison burger', 'beef burger', 'veggie burger'],
    regionPriority: 'US',
  },
  {
    id: 'pizza',
    label: 'Pizza',
    emoji: '🍕',
    betterLabel: 'Better Pizza',
    betterSubtext: 'Long-ferment sourdough & grain-free crusts, A2 cheeses, cold-pressed extra virgin olive oil',
    keywords: ['pizza', 'flatbread', 'margherita', 'crust', 'sourdough pizza'],
    regionPriority: 'US',
  },
  {
    id: 'sandwiches',
    label: 'Sandwiches',
    emoji: '🥪',
    betterLabel: 'Better Sandwiches',
    betterSubtext: 'Sprouted ancient grains & sourdough, pastured meats, zero maida, clean house-made spreads',
    keywords: ['sandwich', 'tartine', 'toast', 'sourdough toast', 'panini', 'melt', 'ciabatta', 'avocado toast'],
    regionPriority: 'US',
  },
  {
    id: 'wraps',
    label: 'Wraps & Rolls',
    emoji: '🌯',
    betterLabel: 'High-Protein Wraps & Rolls',
    betterSubtext: '100% whole grain, ragi or sattu flatbreads, clean paneer or pastured chicken, zero seed-oil mayo',
    keywords: ['wrap', 'roll', 'kathi', 'burrito', 'frankie', 'fajita', 'gyro', 'shawarma'],
    regionPriority: 'all',
  },
  {
    id: 'tacos',
    label: 'Tacos',
    emoji: '🌮',
    betterLabel: 'Clean Tacos',
    betterSubtext: 'Stone-ground non-GMO heirloom corn tortillas, pasture-raised meats, fresh avocado guacamole',
    keywords: ['taco', 'carnitas', 'barbacoa', 'taqueria', 'tostada'],
    regionPriority: 'US',
  },
  {
    id: 'biryani',
    label: 'Biryani & Rice',
    emoji: '🍚',
    betterLabel: 'Better Biryani & Rice',
    betterSubtext: 'Slow-dum cooked in pure A2 Desi Ghee, brown & aged basmati grains, lean clean proteins',
    keywords: ['biryani', 'pulao', 'rice', 'khichdi', 'curry rice', 'pilaf', 'brown rice', 'black rice'],
    regionPriority: 'IN',
  },
  {
    id: 'pasta',
    label: 'Pasta',
    emoji: '🍝',
    betterLabel: 'Better Pasta',
    betterSubtext: 'Ancient einkorn, chickpea & brown-rice pasta, grass-fed bolognese, cold-pressed olive oil',
    keywords: ['pasta', 'spaghetti', 'penne', 'gnocchi', 'lasagna', 'fettuccine', 'linguine', 'macaroni', 'ravioli'],
    regionPriority: 'US',
  },
  {
    id: 'noodles',
    label: 'Noodles & Asian',
    emoji: '🍜',
    betterLabel: 'Clean Wok & Asian',
    betterSubtext: 'Buckwheat soba, glass noodles, coconut aminos, wok-tossed in cold-pressed sesame oil',
    keywords: ['noodle', 'ramen', 'pad thai', 'wok', 'asian', 'stir-fry', 'soba', 'pho', 'teriyaki', 'udon', 'dumpling'],
    regionPriority: 'US',
  },
  {
    id: 'salads',
    label: 'Salads',
    emoji: '🥗',
    betterLabel: 'Clean Nutrient Salads',
    betterSubtext: 'Crisp organic greens, cold-pressed extra virgin olive oil dressings, high-bioavailability proteins',
    keywords: ['salad', 'greens', 'kale', 'arugula', 'caesar', 'slaw', 'cobb', 'spinach', 'quinoa salad'],
    regionPriority: 'all',
  },
  {
    id: 'bowls',
    label: 'Bowls',
    emoji: '🥣',
    betterLabel: 'Power Bowls',
    betterSubtext: 'Macro-balanced power bowls with ancient grains, sweet potatoes, avocado, and lean proteins',
    keywords: ['bowl', 'power bowl', 'grain bowl', 'poke', 'quinoa bowl', 'buddha bowl', 'protein bowl', 'harvest bowl', 'box'],
    regionPriority: 'all',
  },
  {
    id: 'breakfast',
    label: 'Breakfast',
    emoji: '🍳',
    betterLabel: 'Power Breakfast',
    betterSubtext: 'Pasture-raised eggs, flourless protein pancakes, chia pudding, sprouted sourdough',
    keywords: ['breakfast', 'egg', 'pancake', 'omelette', 'scramble', 'oat', 'granola', 'waffle', 'chia', 'shakshuka', 'idli', 'dosa', 'poha'],
    regionPriority: 'all',
  },
  {
    id: 'chicken',
    label: 'Chicken',
    emoji: '🍗',
    betterLabel: 'Pasture-Raised Chicken',
    betterSubtext: 'Antibiotic-free pastured chicken, herb-roasted or clay-oven tandoori, cooked in clean fats',
    keywords: ['chicken', 'poultry', 'tandoori chicken', 'chicken breast', 'chicken tikka', 'grilled chicken', 'roast chicken'],
    regionPriority: 'all',
  },
  {
    id: 'grills',
    label: 'Grills & Steak',
    emoji: '🥩',
    betterLabel: 'Grass-Fed Grills & Steak',
    betterSubtext: '100% grass-fed beef, bison, and dry-aged cuts seared in pastured tallow or A2 ghee',
    keywords: ['steak', 'grill', 'ribeye', 'sirloin', 'beef', 'bison', 'tallow', 'tenderloin', 'bbq', 'barbecue', 'chop', 'chops', 'kebab', 'skewer'],
    regionPriority: 'US',
  },
  {
    id: 'seafood',
    label: 'Seafood',
    emoji: '🐟',
    betterLabel: 'Wild-Caught Seafood',
    betterSubtext: 'Omega-3 rich wild salmon, sea bass, and ocean prawns grilled in cold-pressed EVOO',
    keywords: ['salmon', 'fish', 'trout', 'shrimp', 'prawn', 'tuna', 'seafood', 'halibut', 'cod', 'snapper', 'branzino'],
    regionPriority: 'all',
  },
  {
    id: 'smoothies',
    label: 'Smoothies & Shakes',
    emoji: '🥤',
    betterLabel: 'Superfood Smoothies & Tonics',
    betterSubtext: 'Cold-pressed whole fruits, greens, plant or pasture protein, zero refined sugars or syrups',
    keywords: ['smoothie', 'shake', 'juice', 'cooler', 'tonic', 'acai', 'cold-pressed juice', 'matcha', 'chaas', 'sattu', 'kombucha', 'latte', 'drink', 'beverage'],
    regionPriority: 'all',
  },
  {
    id: 'desserts',
    label: 'Desserts',
    emoji: '🍰',
    betterLabel: 'Guilt-Free Desserts',
    betterSubtext: 'Sweetened with raw wild honey, dates, and almond/coconut flours, zero refined white sugar',
    keywords: ['dessert', 'pudding', 'cookie', 'cake', 'mousse', 'parfait', 'sweet', 'tart', 'brownie', 'truffle', 'ice cream', 'gelato', 'kheer', 'halwa'],
    regionPriority: 'all',
  },

  // --- India-Prioritized Craving Categories ---
  {
    id: 'paratha',
    label: 'Paratha & Rotis',
    emoji: '🫓',
    betterLabel: 'Clean Grain Parathas & Breads',
    betterSubtext: '100% stone-ground whole wheat, multigrain, or sattu, roasted in pure A2 Desi Cow Ghee',
    keywords: ['paratha', 'roti', 'thepla', 'kulcha', 'phulka', 'naan', 'missi roti', 'flatbread', 'sourdough'],
    regionPriority: 'IN',
  },
  {
    id: 'dosa',
    label: 'Dosa & Idli',
    emoji: '🥞',
    betterLabel: 'Fermented Dosa & Idli',
    betterSubtext: 'Naturally fermented batter, ragi & foxtail millet variants, fresh coconut chutney',
    keywords: ['dosa', 'idli', 'uttapam', 'vada', 'appam', 'paniyaram', 'sambar'],
    regionPriority: 'IN',
  },
  {
    id: 'south-indian',
    label: 'South Indian',
    emoji: '🥥',
    betterLabel: 'Wholesome South Indian',
    betterSubtext: 'Curd rice, avial, millet pongal, and spiced rasam cooked in cold-pressed coconut oil',
    keywords: ['south indian', 'dosa', 'idli', 'curd rice', 'pongal', 'rasam', 'sambar', 'avial', 'chettinad', 'kerala', 'coconut'],
    regionPriority: 'IN',
  },
  {
    id: 'thali',
    label: 'Thali & Platters',
    emoji: '🍱',
    betterLabel: 'Balanced Sattvik Thali',
    betterSubtext: 'Wholesome multi-course plates with seasonal greens, dal, ancient rotis, and probiotics',
    keywords: ['thali', 'platter', 'meal', 'sattvik', 'rasoi', 'box', 'combo'],
    regionPriority: 'IN',
  },
  {
    id: 'paneer',
    label: 'Paneer',
    emoji: '🧀',
    betterLabel: 'Artisanal A2 Paneer',
    betterSubtext: 'High-density farm-fresh cottage cheese, rich in bio-available protein, cooked in A2 ghee',
    keywords: ['paneer', 'cottage cheese', 'paneer tikka', 'palak paneer', 'shahi paneer'],
    regionPriority: 'IN',
  },
  {
    id: 'tandoori',
    label: 'Tandoori & Grills',
    emoji: '🍢',
    betterLabel: 'Clean Tandoori & Grills',
    betterSubtext: 'Clay-oven roasted, zero synthetic red food colors, basted in A2 ghee or cold-pressed mustard oil',
    keywords: ['tandoori', 'tikka', 'kebab', 'seekh', 'chaap', 'roast', 'grill', 'clay oven', 'tandoor'],
    regionPriority: 'IN',
  },
  {
    id: 'dal',
    label: 'Dal & Legumes',
    emoji: '🍲',
    betterLabel: 'High-Protein Dal & Legumes',
    betterSubtext: 'Slow-simmered yellow moong, rajma, chana, and sprouts tempered with jeera, hing, and A2 ghee',
    keywords: ['dal', 'lentil', 'legume', 'chana', 'rajma', 'sprouts', 'moong', 'makhani', 'tadka', 'sambhar', 'chole', 'khichdi'],
    regionPriority: 'IN',
  },
];

// Map lookup by ID
const CRAVING_MAP: Record<string, CravingCategory> = {};
for (const cat of CRAVING_CATEGORIES) {
  CRAVING_MAP[cat.id] = cat;
}

export function getCravingById(id: string): CravingCategory | undefined {
  return CRAVING_MAP[id];
}

// Ordered category list depending on country
export function getCravingCategoriesForCountry(country: 'US' | 'IN'): CravingCategory[] {
  if (country === 'IN') {
    // Prioritize Indian mainstream cravings first, followed by universal & western cravings
    const inOrder = [
      'biryani',
      'paratha',
      'wraps',
      'dosa',
      'south-indian',
      'thali',
      'paneer',
      'tandoori',
      'dal',
      'salads',
      'bowls',
      'breakfast',
      'chicken',
      'seafood',
      'smoothies',
      'desserts',
      'burgers',
      'pizza',
      'sandwiches',
      'pasta',
      'noodles',
    ];
    return inOrder.map((id) => CRAVING_MAP[id]).filter(Boolean);
  }

  // US priority ordering
  const usOrder = [
    'burgers',
    'pizza',
    'sandwiches',
    'wraps',
    'tacos',
    'bowls',
    'chicken',
    'grills',
    'seafood',
    'pasta',
    'salads',
    'breakfast',
    'noodles',
    'smoothies',
    'desserts',
    'biryani',
    'paneer',
    'tandoori',
    'thali',
    'paratha',
  ];
  return usOrder.map((id) => CRAVING_MAP[id]).filter(Boolean);
}

// Match a dish against an active craving category
export function matchDishToCraving(dish: Dish, cravingId: string): boolean {
  const cat = CRAVING_MAP[cravingId];
  if (!cat) return true;

  const dishName = dish.name.toLowerCase();
  const restName = dish.restaurant.toLowerCase();
  const ingredients = (dish.ingredients || []).map((i) => i.toLowerCase());
  const dietTags = (dish.dietTags || []).map((t) => t.toLowerCase());
  const highlights = (dish.highlights || []).map((h) => h.toLowerCase());
  const notes = (dish.chefNotes || '').toLowerCase();

  return cat.keywords.some((kw) => {
    const k = kw.toLowerCase();
    if (dishName.includes(k)) return true;
    if (restName.includes(k)) return true;
    if (ingredients.some((i) => i.includes(k))) return true;
    if (dietTags.some((t) => t.includes(k))) return true;
    if (highlights.some((h) => h.includes(k))) return true;
    if (notes.includes(k)) return true;
    return false;
  });
}
