const fs = require('fs');
const path = require('path');

// Load meals and restaurants
const meals = JSON.parse(fs.readFileSync(path.join(__dirname, '../healthyeats_all_meals.json'), 'utf8'));
const rests = JSON.parse(fs.readFileSync(path.join(__dirname, '../healthyeats_restaurants.json'), 'utf8'));

// Also load mockData.ts dishes
const mockContent = fs.readFileSync(path.join(__dirname, '../lib/mockData.ts'), 'utf8');

const restMap = {};
rests.forEach(r => {
  restMap[r.id] = r;
});

function parseNum(val) {
  if (typeof val === 'number') return val;
  if (!val) return 0;
  return parseFloat(val.toString().replace(/[^0-9.]/g, '')) || 0;
}

// Extract dishes from healthyeats_all_meals
const qualifiedDishes = [];

meals.forEach(m => {
  const rest = restMap[m.restaurant_id];
  if (!rest) return;

  const cal = parseNum(m.calories);
  const prot = parseNum(m.protein);
  const carb = parseNum(m.carbs);
  const fib = parseNum(m.fiber);
  const sug = parseNum(m.sugar);

  // Criteria:
  // Low Cal: <= 620 kcal
  // High Protein: >= 25g
  // High Fiber: >= 4g
  // Low Sugar: <= 8g
  if (cal >= 250 && cal <= 620 && prot >= 25 && fib >= 4 && sug <= 8) {
    const zipMatch = rest.address ? rest.address.match(/\b\d{5}\b/) : null;
    if (zipMatch) {
      qualifiedDishes.push({
        name: m.name,
        restaurant: rest.name,
        city: rest.city,
        zip: zipMatch[0],
        address: rest.address,
        calories: cal,
        protein: prot,
        carbs: carb,
        fiber: fib,
        sugar: sug,
        description: m.description,
        isGlutenFree: true,
        source: 'healthyeats'
      });
    }
  }
});

// Also parse mockData.ts dishes
const dishRegex = /{\s*"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"restaurant":\s*"([^"]+)",\s*"restaurantAddress":\s*"([^"]+)",\s*"city":\s*"([^"]+)"[\s\S]*?"calories":\s*(\d+),\s*"protein":\s*(\d+),\s*"carbs":\s*(\d+),\s*"fat":\s*(\d+),\s*"fiber":\s*(\d+)[\s\S]*?"cookingFat":\s*"([^"]+)"[\s\S]*?"isGlutenFree":\s*(true|false)/g;

let m;
while ((m = dishRegex.exec(mockContent)) !== null) {
  const cal = parseInt(m[6], 10);
  const prot = parseInt(m[7], 10);
  const carb = parseInt(m[8], 10);
  const fib = parseInt(m[10], 10);
  const isGF = m[12] === 'true';

  if (cal >= 250 && cal <= 650 && prot >= 25 && fib >= 3 && isGF) {
    const zipMatch = m[4].match(/\b\d{5}\b/);
    if (zipMatch) {
      qualifiedDishes.push({
        name: m[2],
        restaurant: m[3],
        city: m[5],
        zip: zipMatch[0],
        address: m[4],
        calories: cal,
        protein: prot,
        carbs: carb,
        fiber: fib,
        sugar: 3, // mockData natural whole foods default low sugar
        cookingFat: m[11],
        isGlutenFree: isGF,
        source: 'mockData'
      });
    }
  }
}

// Group by City -> Zip
const cityZipGroups = {};
qualifiedDishes.forEach(d => {
  const city = d.city;
  const zip = d.zip;
  if (!cityZipGroups[city]) cityZipGroups[city] = {};
  if (!cityZipGroups[city][zip]) cityZipGroups[city][zip] = [];
  cityZipGroups[city][zip].push(d);
});

console.log('Found qualified dishes in cities:', Object.keys(cityZipGroups).length);

// Print summary of top cities
const targetCities = [
  'Austin', 'New York', 'Los Angeles', 'San Francisco', 'Miami',
  'Chicago', 'Denver', 'Seattle', 'San Diego', 'Nashville',
  'Boston', 'Atlanta', 'Dallas', 'Houston', 'Phoenix', 'Scottsdale', 'Portland', 'Washington'
];

const result = {};
targetCities.forEach(city => {
  // Find case-insensitive match
  const matchedKey = Object.keys(cityZipGroups).find(k => k.toLowerCase() === city.toLowerCase());
  if (matchedKey) {
    result[city] = cityZipGroups[matchedKey];
  }
});

fs.writeFileSync(path.join(__dirname, '../healthy_dishes_by_zip.json'), JSON.stringify(result, null, 2));
console.log('Saved healthy_dishes_by_zip.json successfully!');
