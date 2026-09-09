const fs = require('fs');
const path = require('path');

// Read mockData.ts
const code = fs.readFileSync(path.join(__dirname, '../lib/mockData.ts'), 'utf8');

// Also check healthyeats_all_meals.json if available
let allMeals = [];
if (fs.existsSync(path.join(__dirname, '../healthyeats_all_meals.json'))) {
  try {
    allMeals = JSON.parse(fs.readFileSync(path.join(__dirname, '../healthyeats_all_meals.json'), 'utf8'));
    console.log('Loaded healthyeats_all_meals.json, count:', allMeals.length);
  } catch (e) {
    console.error('Error reading healthyeats_all_meals.json', e.message);
  }
}

// Check US_DISHES / INITIAL_DISHES in mockData.ts
// Extract dish objects with regex or AST
const dishRegex = /{\s*"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"restaurant":\s*"([^"]+)",\s*"restaurantAddress":\s*"([^"]+)",\s*"city":\s*"([^"]+)"[\s\S]*?"calories":\s*(\d+),\s*"protein":\s*(\d+),\s*"carbs":\s*(\d+),\s*"fat":\s*(\d+),\s*"fiber":\s*(\d+)[\s\S]*?"isGlutenFree":\s*(true|false)/g;

let dishes = [];
let m;
while ((m = dishRegex.exec(code)) !== null) {
  dishes.push({
    id: m[1],
    name: m[2],
    restaurant: m[3],
    address: m[4],
    city: m[5],
    calories: parseInt(m[6], 10),
    protein: parseInt(m[7], 10),
    carbs: parseInt(m[8], 10),
    fat: parseInt(m[9], 10),
    fiber: parseInt(m[10], 10),
    isGlutenFree: m[11] === 'true'
  });
}

console.log('Total dishes matched from mockData.ts:', dishes.length);

// Extract zip codes from address (e.g. "Austin, TX 78751" -> "78751")
const cityZipMap = {};

dishes.forEach(dish => {
  // Try to find 5 digit zip in address
  const zipMatch = dish.address.match(/\b(\d{5})\b/);
  const zip = zipMatch ? zipMatch[1] : 'Central/Metro';
  const city = dish.city;
  
  if (!cityZipMap[city]) cityZipMap[city] = {};
  if (!cityZipMap[city][zip]) cityZipMap[city][zip] = [];
  
  cityZipMap[city][zip].push(dish);
});

console.log('Cities count:', Object.keys(cityZipMap).length);
for (const city of Object.keys(cityZipMap)) {
  const zips = Object.keys(cityZipMap[city]);
  const total = zips.reduce((sum, z) => sum + cityZipMap[city][z].length, 0);
  console.log(`- ${city}: ${zips.length} zip codes, ${total} dishes. Zips: ${zips.slice(0, 5).join(', ')}${zips.length > 5 ? '...' : ''}`);
}
