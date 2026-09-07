const fs = require('fs');
const path = require('path');

// Image pools by precise culinary category
const THEMATIC_IMAGES = {
  salmon: [
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=800&q=80"
  ],
  tuna_poke: [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=800&q=80"
  ],
  seafood_whitefish: [
    "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
  ],
  shrimp_prawn: [
    "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80"
  ],
  burger_patty: [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583032015879-577cf3be1169?auto=format&fit=crop&w=800&q=80"
  ],
  steak_beef: [
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80"
  ],
  chicken_roast: [
    "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80"
  ],
  tandoori_chicken: [
    "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  ],
  paneer_tikka: [
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80"
  ],
  salad_greens: [
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80"
  ],
  indian_millets_khichdi: [
    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
  ],
  indian_chaat_sprouts: [
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  ],
  turkey_fowl: [
    "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80"
  ],
  tofu_plant_bowl: [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
  ]
};

// Selection helper with cycling
const counters = {};
function getThematicImage(categoryKey) {
  const pool = THEMATIC_IMAGES[categoryKey] || THEMATIC_IMAGES.salad_greens;
  counters[categoryKey] = (counters[categoryKey] || 0) + 1;
  return pool[counters[categoryKey] % pool.length];
}

function matchDishToImage(dish) {
  const name = (dish.name || '').toLowerCase();
  const ing = (dish.ingredients || []).join(' ').toLowerCase();

  // 1. Salmon
  if (name.includes('salmon')) {
    return getThematicImage('salmon');
  }

  // 2. Tuna & Poke
  if (name.includes('tuna') || name.includes('poke')) {
    return getThematicImage('tuna_poke');
  }

  // 3. Shrimp & Prawns & Scallops
  if (name.includes('shrimp') || name.includes('prawn') || name.includes('scallop') || name.includes('lobster')) {
    return getThematicImage('shrimp_prawn');
  }

  // 4. White fish, kingfish, mahi, snapper, cod
  if (name.includes('fish') || name.includes('kingfish') || name.includes('mahi') || name.includes('snapper') || name.includes('cod') || name.includes('sea bass')) {
    return getThematicImage('seafood_whitefish');
  }

  // 5. Burgers & Patties
  if (name.includes('burger') || name.includes('patty') || name.includes('bison burger')) {
    return getThematicImage('burger_patty');
  }

  // 6. Steaks, Sirloin, Flank, Carne Asada, Beef
  if (name.includes('steak') || name.includes('sirloin') || name.includes('flank') || name.includes('bison') || name.includes('beef') || name.includes('carne asada') || name.includes('short rib')) {
    return getThematicImage('steak_beef');
  }

  // 7. Tofu, Tempeh & Vegan Protein Bowls
  if (name.includes('tofu') || name.includes('tempeh') || name.includes('edamame') || name.includes('buddha') || name.includes('vegan')) {
    return getThematicImage('tofu_plant_bowl');
  }

  // 8. Indian Tandoori Chicken & Tikka
  if ((name.includes('tikka') || name.includes('tandoori') || name.includes('kebab')) && (name.includes('chicken') || name.includes('murgh') || dish.city in { Delhi:1, Mumbai:1, Bengaluru:1, Hyderabad:1 })) {
    return getThematicImage('tandoori_chicken');
  }

  // 9. Paneer Tikka & Palak Paneer
  if (name.includes('paneer') || name.includes('cottage cheese')) {
    return getThematicImage('paneer_tikka');
  }

  // 10. Indian Millets, Ragi, Jowar, Khichdi, Bhakri
  if (name.includes('ragi') || name.includes('jowar') || name.includes('bajra') || name.includes('khichdi') || name.includes('mudde') || name.includes('bhakri') || name.includes('millet')) {
    return getThematicImage('indian_millets_khichdi');
  }

  // 11. Indian Chaat, Sprouts, Chana, Sattu
  if (name.includes('chaat') || name.includes('chana') || name.includes('sattu') || name.includes('moong') || (name.includes('sprout') && !name.includes('tofu')) || name.includes('matki')) {
    return getThematicImage('indian_chaat_sprouts');
  }

  // 12. Turkey
  if (name.includes('turkey')) {
    return getThematicImage('turkey_fowl');
  }

  // 12. General Chicken & Poultry
  if (name.includes('chicken') || name.includes('pollo') || name.includes('fowl') || name.includes('poultry')) {
    return getThematicImage('chicken_roast');
  }

  // 13. Tofu & Plant Bowls
  if (name.includes('tofu') || name.includes('tempeh') || name.includes('edamame') || name.includes('buddha') || name.includes('vegan')) {
    return getThematicImage('tofu_plant_bowl');
  }

  // 14. Salads & Greens
  if (name.includes('salad') || name.includes('caesar') || name.includes('greens') || name.includes('kale') || name.includes('chop')) {
    return getThematicImage('salad_greens');
  }

  // Default grain / power bowl
  return getThematicImage('chicken_roast');
}

// ----------------------------------------------------
// 1. UPDATE INDIA DISHES
// ----------------------------------------------------
const inDataPath = path.join(__dirname, '../lib/indiaDishesData.ts');
const inContent = fs.readFileSync(inDataPath, 'utf8');
const inStart = inContent.indexOf('export const INDIA_DISHES: Dish[] = [');
const inJson = inContent.substring(inStart + 'export const INDIA_DISHES: Dish[] = '.length).trim().replace(/;$/, '');
const inDishes = JSON.parse(inJson);

inDishes.forEach(d => {
  d.image = matchDishToImage(d);
});

const updatedInContent = `import type { Dish } from './mockData';

export const INDIA_DISHES: Dish[] = ${JSON.stringify(inDishes, null, 2)};
`;
fs.writeFileSync(inDataPath, updatedInContent, 'utf8');
console.log(`Updated images for ${inDishes.length} Indian dishes.`);

// ----------------------------------------------------
// 2. UPDATE US DISHES IN MOCK DATA
// ----------------------------------------------------
const mockDataPath = path.join(__dirname, '../lib/mockData.ts');
const mockContent = fs.readFileSync(mockDataPath, 'utf8');
const usStart = mockContent.indexOf('const US_DISHES: Dish[] = [');
const usEnd = mockContent.indexOf('export const INITIAL_DISHES: Dish[] = [');
const usJson = mockContent.substring(usStart + 'const US_DISHES: Dish[] = '.length, usEnd).trim().replace(/;$/, '');
const usDishes = JSON.parse(usJson);

usDishes.forEach(d => {
  d.image = matchDishToImage(d);
});

const prefix = mockContent.substring(0, usStart);
const updatedMockContent = `${prefix}const US_DISHES: Dish[] = ${JSON.stringify(usDishes, null, 2)};

export const INITIAL_DISHES: Dish[] = [...INDIA_DISHES, ...US_DISHES];
`;
fs.writeFileSync(mockDataPath, updatedMockContent, 'utf8');
console.log(`Updated images for ${usDishes.length} US dishes.`);

// ----------------------------------------------------
// 3. RE-GENERATE CSVs WITH ACCURATE IMAGES
// ----------------------------------------------------
require('./generate_dishes_csv.js');
console.log('Regenerated categorized CSVs with accurate images.');
