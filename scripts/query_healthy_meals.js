const fs = require('fs');
const path = require('path');

const meals = JSON.parse(fs.readFileSync(path.join(__dirname, '../healthyeats_all_meals.json'), 'utf8'));
const rests = JSON.parse(fs.readFileSync(path.join(__dirname, '../healthyeats_restaurants.json'), 'utf8'));

// Map restaurant by id
const restMap = {};
rests.forEach(r => {
  restMap[r.id] = r;
});

// Helper to parse numbers
function parseNum(val) {
  if (typeof val === 'number') return val;
  if (!val) return 0;
  return parseFloat(val.toString().replace(/[^0-9.]/g, '')) || 0;
}

// Filter meals:
// Low Cal: <= 650 kcal
// High Protein: >= 25g
// High Fiber: >= 4g
// Low Sugar: <= 8g
// Gluten-Free / Fresh
const filtered = [];

meals.forEach(m => {
  const rest = restMap[m.restaurant_id];
  if (!rest) return;
  
  const cal = parseNum(m.calories);
  const prot = parseNum(m.protein);
  const carb = parseNum(m.carbs);
  const fib = parseNum(m.fiber);
  const sug = parseNum(m.sugar);

  // Criteria:
  // cal between 250 and 650
  // prot >= 25g
  // fib >= 4g
  // sug <= 8g
  if (cal >= 200 && cal <= 650 && prot >= 25 && fib >= 4 && sug <= 8) {
    // Extract zip code from rest.address
    const zipMatch = rest.address ? rest.address.match(/\b\d{5}\b/) : null;
    const zip = zipMatch ? zipMatch[1] : null;
    
    filtered.push({
      mealName: m.name,
      restaurant: rest.name,
      city: rest.city,
      zip: zip || 'General',
      address: rest.address,
      calories: cal,
      protein: prot,
      carbs: carb,
      fiber: fib,
      sugar: sug,
      description: m.description,
      high_protein: m.high_protein
    });
  }
});

console.log('Total matching healthy meals:', filtered.length);

// Group by city -> zip
const byCityZip = {};
filtered.forEach(item => {
  if (!byCityZip[item.city]) byCityZip[item.city] = {};
  if (!byCityZip[item.city][item.zip]) byCityZip[item.city][item.zip] = [];
  byCityZip[item.city][item.zip].push(item);
});

console.log('Cities represented:', Object.keys(byCityZip).length);
for (const city of Object.keys(byCityZip)) {
  const zips = Object.keys(byCityZip[city]);
  const total = zips.reduce((sum, z) => sum + byCityZip[city][z].length, 0);
  console.log(`${city} (${total} meals across ${zips.length} zips): ${zips.join(', ')}`);
}
