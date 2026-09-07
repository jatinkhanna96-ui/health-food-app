const fs = require('fs');
const path = require('path');

// 1. Load India Dishes and US Dishes
const inData = fs.readFileSync(path.join(__dirname, '../lib/indiaDishesData.ts'), 'utf8');
const inStart = inData.indexOf('export const INDIA_DISHES: Dish[] = [');
const inJson = inData.substring(inStart + 'export const INDIA_DISHES: Dish[] = '.length).trim().replace(/;$/, '');
const inDishes = JSON.parse(inJson);

const mockData = fs.readFileSync(path.join(__dirname, '../lib/mockData.ts'), 'utf8');
const usStart = mockData.indexOf('const US_DISHES: Dish[] = [');
const usEnd = mockData.indexOf('export const INITIAL_DISHES: Dish[] = [');
const usJson = mockData.substring(usStart + 'const US_DISHES: Dish[] = '.length, usEnd).trim().replace(/;$/, '');
const usDishes = JSON.parse(usJson);

console.log(`Loaded ${inDishes.length} Indian dishes and ${usDishes.length} US dishes. Total: ${inDishes.length + usDishes.length}`);

// 2. Helper categorization functions
function categorizeMealType(dish) {
  const name = dish.name.toLowerCase();
  const ing = (dish.ingredients || []).join(' ').toLowerCase();
  const rest = dish.restaurant.toLowerCase();

  if (name.includes('salad') || name.includes('caesar') || name.includes('greens')) {
    return 'Salad & Raw Greens';
  }
  if (name.includes('poke') || name.includes('salmon') || name.includes('tuna') || name.includes('cod') || name.includes('shrimp') || name.includes('prawn') || name.includes('scallop') || name.includes('lobster') || name.includes('kingfish') || name.includes('fish')) {
    return 'Wild Seafood & Coastal';
  }
  if (name.includes('tikka') || name.includes('kebab') || name.includes('tandoori') || name.includes('skewer') || name.includes('robata') || name.includes('grill') || name.includes('steak')) {
    return 'Clay Oven & Fire Grills';
  }
  if (name.includes('bison') || name.includes('burger') || name.includes('beef') || name.includes('sirloin') || name.includes('flank')) {
    return 'Grass-Fed Meats & Steaks';
  }
  if (name.includes('chicken') || name.includes('turkey') || name.includes('murgh')) {
    return 'Pastured Poultry & Fowl';
  }
  if (name.includes('ragi') || name.includes('jowar') || name.includes('bajra') || name.includes('khichdi') || name.includes('mudde') || name.includes('bhakri') || name.includes('millet')) {
    return 'Ancient Millets & Ayurvedic Staples';
  }
  if (name.includes('chaat') || name.includes('chana') || name.includes('sattu') || name.includes('moong') || name.includes('sprout') || name.includes('lentil') || name.includes('chilla')) {
    return 'Pulse & Sprouted Legumes';
  }
  if (name.includes('tofu') || name.includes('tempeh') || name.includes('edamame') || name.includes('vegan') || name.includes('buddha')) {
    return 'Plant-Based & Fermented';
  }
  if (name.includes('bowl')) {
    return 'Grain & Macro Bowls';
  }
  return 'Balanced Whole Foods';
}

function determineDietaryPattern(dish) {
  const name = dish.name.toLowerCase();
  const ing = (dish.ingredients || []).join(' ').toLowerCase();

  const isFish = name.includes('salmon') || name.includes('tuna') || name.includes('fish') || name.includes('shrimp') || name.includes('prawn') || name.includes('scallop') || name.includes('lobster') || name.includes('kingfish') || name.includes('cod') || name.includes('mahi') || name.includes('snapper') || name.includes('seafood');
  if (isFish) return 'Pescetarian';

  const isMeat = name.includes('chicken') || name.includes('beef') || name.includes('bison') || name.includes('turkey') || name.includes('murgh') || name.includes('steak') || name.includes('pork') || name.includes('mutton') || name.includes('lamb') || name.includes('burger') || name.includes('patty') || name.includes('carnitas') || name.includes('meatloaf') || name.includes('meatball') || name.includes('bacon') || name.includes('ribs') || name.includes('prosciutto') || name.includes('shawarma') || name.includes('bolognese');
  if (isMeat) return 'High-Protein Omnivore / Paleo';

  const isDairy = !dish.isDairyFree || name.includes('paneer') || name.includes('cheese') || ing.includes('dahi') || ing.includes('ghee') || ing.includes('curd');
  if (isDairy) return 'Vegetarian (Dairy / Pure Ghee)';

  return '100% Plant-Based / Vegan';
}

function determineMacroTier(dish) {
  if (dish.protein >= 45) return 'Super-High Protein (45g+)';
  if (dish.protein >= 35) return 'High Protein (35g-44g)';
  return 'Balanced Clean Protein (20g-34g)';
}

function extractPostalCode(address) {
  if (!address) return '';
  // 6-digit PIN code for India
  const pinMatch = address.match(/\b\d{6}\b/);
  if (pinMatch) return pinMatch[0];
  // 5-digit ZIP code for US
  const zipMatch = address.match(/\b\d{5}\b/);
  if (zipMatch) return zipMatch[0];
  return '';
}

function csvEscape(val) {
  if (val === null || val === undefined) return '';
  let str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    str = '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

// 3. Define CSV Headers
const headers = [
  'Dish ID',
  'Dish Name',
  'Restaurant',
  'Restaurant Address',
  'City',
  'Country',
  'Postal Code (ZIP / PIN)',
  'Meal Category',
  'Dietary Pattern',
  'Macro Tier',
  'Calories (kcal)',
  'Protein (g)',
  'Carbs (g)',
  'Fat (g)',
  'Fiber (g)',
  'Net Carbs (g)',
  'Estimated Sugar (g)',
  'Cooking Fat',
  'Seed-Oil Free',
  'Gluten-Free',
  'Keto-Friendly',
  'Grass-Fed / Pastured',
  'Dairy-Free',
  'Diet Tags',
  'Key Ingredients',
  'Health Highlights',
  'Price',
  'Rating',
  'Reviews Count',
  'Chef & Verification Notes',
  'Latitude',
  'Longitude'
];

// Combine all dishes
const allDishes = [
  ...inDishes.map(d => ({ ...d, country: 'IN' })),
  ...usDishes.map(d => ({ ...d, country: 'US' }))
];

const rows = [headers.join(',')];

allDishes.forEach(dish => {
  const mealCategory = categorizeMealType(dish);
  const dietaryPattern = determineDietaryPattern(dish);
  const macroTier = determineMacroTier(dish);
  const postalCode = extractPostalCode(dish.restaurantAddress);
  const netCarbs = Math.max(0, dish.carbs - dish.fiber);
  const estimatedSugar = dish.sugar !== undefined ? dish.sugar : Math.min(6, Math.max(1, Math.round(dish.carbs * 0.12)));
  const formattedPrice = dish.country === 'IN' ? `₹${dish.price}` : `$${Number(dish.price).toFixed(2)}`;

  const rowData = [
    dish.id,
    dish.name,
    dish.restaurant,
    dish.restaurantAddress,
    dish.city,
    dish.country === 'IN' ? 'India' : 'United States',
    postalCode,
    mealCategory,
    dietaryPattern,
    macroTier,
    dish.calories,
    dish.protein,
    dish.carbs,
    dish.fat,
    dish.fiber,
    netCarbs,
    estimatedSugar,
    dish.cookingFat,
    dish.isSeedOilFree ? 'YES' : 'NO',
    dish.isGlutenFree ? 'YES' : 'NO',
    dish.isKeto ? 'YES' : 'NO',
    dish.isGrassFed ? 'YES' : 'NO',
    dish.isDairyFree ? 'YES' : 'NO',
    (dish.dietTags || []).join('; '),
    (dish.ingredients || []).join('; '),
    (dish.highlights || []).join('; '),
    formattedPrice,
    dish.rating,
    dish.reviewsCount,
    dish.chefNotes || '',
    dish.coordinates ? dish.coordinates.lat : '',
    dish.coordinates ? dish.coordinates.lng : ''
  ];

  rows.push(rowData.map(csvEscape).join(','));
});

const csvContent = rows.join('\r\n');

// 4. Save to multiple locations
// Root project path
const projectRootCsv = path.join(__dirname, '../all_healthy_dishes_categorized.csv');
fs.writeFileSync(projectRootCsv, csvContent, 'utf8');
console.log(`Saved ${rows.length - 1} rows to ${projectRootCsv}`);

// Public web folder path (so users/browser can download it directly at /all_healthy_dishes_categorized.csv)
const publicCsv = path.join(__dirname, '../public/all_healthy_dishes_categorized.csv');
fs.writeFileSync(publicCsv, csvContent, 'utf8');
console.log(`Saved to public directory at ${publicCsv}`);

// Artifacts directory
const artifactCsv = 'C:/Users/dell/.gemini/antigravity/brain/e25e9b6a-4ddc-4e50-9b4c-9d9837250fc4/all_healthy_dishes_categorized.csv';
fs.writeFileSync(artifactCsv, csvContent, 'utf8');
console.log(`Saved to artifacts directory at ${artifactCsv}`);
