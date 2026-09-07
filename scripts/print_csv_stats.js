const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../all_healthy_dishes_categorized.csv'), 'utf8');
const lines = content.split('\r\n').filter(Boolean);
console.log('Total Dishes in CSV:', lines.length - 1);

const stats = {
  countries: {},
  categories: {},
  diets: {},
  macros: {},
  fats: {}
};

for (let i = 1; i < lines.length; i++) {
  const row = [];
  let cur = '';
  let inQuotes = false;
  for (let c of lines[i]) {
    if (c === '"') { inQuotes = !inQuotes; }
    else if (c === ',' && !inQuotes) { row.push(cur); cur = ''; }
    else { cur += c; }
  }
  row.push(cur);

  const country = row[5];
  const cat = row[7];
  const diet = row[8];
  const macro = row[9];
  const fat = row[17];

  stats.countries[country] = (stats.countries[country] || 0) + 1;
  stats.categories[cat] = (stats.categories[cat] || 0) + 1;
  stats.diets[diet] = (stats.diets[diet] || 0) + 1;
  stats.macros[macro] = (stats.macros[macro] || 0) + 1;
  stats.fats[fat] = (stats.fats[fat] || 0) + 1;
}

console.log('Countries:', JSON.stringify(stats.countries, null, 2));
console.log('\nMeal Categories:', JSON.stringify(stats.categories, null, 2));
console.log('\nDietary Patterns:', JSON.stringify(stats.diets, null, 2));
console.log('\nMacro Tiers:', JSON.stringify(stats.macros, null, 2));
console.log('\nTop Cooking Fats:', JSON.stringify(stats.fats, null, 2));
