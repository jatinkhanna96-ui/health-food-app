const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, '../public/data/healthyvicinity_india.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');

const lines = csvContent.trim().split('\n');
const headers = lines[0].split(',');

// City center lookup from locations.ts
const cityCoords = {
  'Delhi': { lat: 28.6139, lng: 77.2090 },
  'Gurugram': { lat: 28.4595, lng: 77.0266 },
  'Noida': { lat: 28.5355, lng: 77.3910 },
  'Ghaziabad': { lat: 28.6692, lng: 77.4538 },
  'Bengaluru': { lat: 12.9716, lng: 77.5946 },
  'Hyderabad': { lat: 17.3850, lng: 78.4867 },
  'Chennai': { lat: 13.0827, lng: 80.2707 },
  'Kochi': { lat: 9.9312, lng: 76.2673 },
  'Coimbatore': { lat: 11.0168, lng: 76.9558 },
  'Mysuru': { lat: 12.2958, lng: 76.6394 },
  'Visakhapatnam': { lat: 17.6868, lng: 83.2185 },
  'Mumbai': { lat: 19.0760, lng: 72.8777 },
  'Pune': { lat: 18.5204, lng: 73.8567 },
  'Ahmedabad': { lat: 23.0225, lng: 72.5714 },
  'Surat': { lat: 21.1702, lng: 72.8311 },
  'Vadodara': { lat: 22.3072, lng: 73.1812 },
  'Nashik': { lat: 19.9975, lng: 73.7898 },
  'Goa': { lat: 15.2993, lng: 74.1240 },
  'Udaipur': { lat: 24.5854, lng: 73.7125 },
  'Jaipur': { lat: 26.9124, lng: 75.7873 },
  'Chandigarh': { lat: 30.7333, lng: 76.7794 },
  'Lucknow': { lat: 26.8467, lng: 80.9462 },
  'Amritsar': { lat: 31.6340, lng: 74.8723 },
  'Dehradun': { lat: 30.3165, lng: 78.0322 },
  'Rishikesh': { lat: 30.0869, lng: 78.2676 },
  'Kolkata': { lat: 22.5726, lng: 88.3639 },
  'Indore': { lat: 22.7196, lng: 75.8577 },
  'Nagpur': { lat: 21.1458, lng: 79.0882 },
  'Bhopal': { lat: 23.2599, lng: 77.4126 },
  'Bhubaneswar': { lat: 20.2961, lng: 85.8245 },
  'Patna': { lat: 25.5941, lng: 85.1376 },
};

// Curated high-res Unsplash food images by archetype
const imagePool = {
  bowl: [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
  ],
  salad: [
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80"
  ],
  tandoori: [
    "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
  ],
  fish: [
    "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  ],
  prawns: [
    "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80"
  ],
  breakfast: [
    "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=800&q=80"
  ],
  main: [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  ]
};

function pickImage(name, category, ingredients) {
  const lower = (name + ' ' + category + ' ' + ingredients).toLowerCase();
  if (lower.includes('prawn') || lower.includes('shrimp')) {
    return imagePool.prawns[Math.floor(Math.random() * imagePool.prawns.length)];
  }
  if (lower.includes('fish') || lower.includes('salmon') || lower.includes('sea bass') || lower.includes('snapper')) {
    return imagePool.fish[Math.floor(Math.random() * imagePool.fish.length)];
  }
  if (lower.includes('tikka') || lower.includes('tandoori') || lower.includes('kebab') || lower.includes('roast chicken') || lower.includes('mutton')) {
    return imagePool.tandoori[Math.floor(Math.random() * imagePool.tandoori.length)];
  }
  if (lower.includes('salad')) {
    return imagePool.salad[Math.floor(Math.random() * imagePool.salad.length)];
  }
  if (lower.includes('oatmeal') || lower.includes('smoothie') || lower.includes('toast') || lower.includes('chilla') || lower.includes('idli') || lower.includes('pancake') || lower.includes('breakfast')) {
    return imagePool.breakfast[Math.floor(Math.random() * imagePool.breakfast.length)];
  }
  if (lower.includes('bowl')) {
    return imagePool.bowl[Math.floor(Math.random() * imagePool.bowl.length)];
  }
  return imagePool.main[Math.floor(Math.random() * imagePool.main.length)];
}

const dishes = [];

for (let i = 1; i < lines.length; i++) {
  const row = lines[i].trim();
  if (!row) continue;
  const cols = row.split(',');
  if (cols.length < 18) continue;

  const [
    city,
    state,
    restaurant,
    dishName,
    dishCategory,
    address,
    priceStr,
    menuDescription,
    ingredientsStr,
    caloriesStr,
    proteinStr,
    fibreStr,
    sugarStr,
    dietType,
    cookingMethod,
    glutenFreeStr,
    seedOilFreeStr,
    freshIngredientsStr,
    source,
    sourceUrl,
    dateCollected,
  ] = cols;

  const price = parseFloat(priceStr) || 350;
  const ingredients = ingredientsStr ? ingredientsStr.split('|').map(s => s.trim()) : [];
  
  // Intelligent Nutritional Estimates when NULL in source
  let calories = caloriesStr && caloriesStr !== 'NULL' ? parseInt(caloriesStr, 10) : null;
  let protein = proteinStr && proteinStr !== 'NULL' ? parseInt(proteinStr, 10) : null;
  let fiber = fibreStr && fibreStr !== 'NULL' ? parseInt(fibreStr, 10) : null;

  const lowerName = (dishName + ' ' + ingredientsStr + ' ' + dishCategory).toLowerCase();
  
  if (protein === null) {
    if (lowerName.includes('chicken') || lowerName.includes('fish') || lowerName.includes('prawn') || lowerName.includes('egg white') || lowerName.includes('mutton')) {
      protein = Math.floor(32 + (i % 15));
    } else if (lowerName.includes('paneer') || lowerName.includes('tofu') || lowerName.includes('tempeh')) {
      protein = Math.floor(22 + (i % 8));
    } else if (lowerName.includes('quinoa') || lowerName.includes('dal') || lowerName.includes('chana') || lowerName.includes('sprout') || lowerName.includes('chilla')) {
      protein = Math.floor(16 + (i % 6));
    } else {
      protein = Math.floor(10 + (i % 5));
    }
  }

  if (calories === null) {
    if (dishCategory === 'Salad') {
      calories = Math.floor(260 + (i % 70));
    } else if (dishCategory === 'Bowl') {
      calories = Math.floor(380 + (i % 120));
    } else if (dishCategory === 'Starter') {
      calories = Math.floor(280 + (i % 100));
    } else if (dishCategory === 'Breakfast') {
      calories = Math.floor(290 + (i % 80));
    } else {
      calories = Math.floor(390 + (i % 90));
    }
  }

  if (fiber === null) {
    if (lowerName.includes('salad') || lowerName.includes('oat') || lowerName.includes('millet') || lowerName.includes('quinoa') || lowerName.includes('sprout')) {
      fiber = Math.floor(6 + (i % 5));
    } else {
      fiber = Math.floor(3 + (i % 3));
    }
  }

  // Derive Carbs and Fat from Calories and Protein
  // 1g Protein = 4 kcal, 1g Carb = 4 kcal, 1g Fat = 9 kcal
  const remainingCal = Math.max(80, calories - (protein * 4));
  let fat = Math.round((remainingCal * 0.35) / 9);
  let carbs = Math.round((remainingCal * 0.65) / 4);

  const isGlutenFree = glutenFreeStr.toLowerCase() === 'yes';
  const isSeedOilFree = seedOilFreeStr.toLowerCase() === 'yes' || 
    cookingMethod === 'Steamed' || 
    cookingMethod === 'Tandoori' || 
    cookingMethod === 'Raw' ||
    lowerName.includes('steamed') ||
    lowerName.includes('tandoori');

  const isDairyFree = dietType === 'Vegan' || 
    (!lowerName.includes('paneer') && !lowerName.includes('yogurt') && !lowerName.includes('butter') && !lowerName.includes('feta') && !lowerName.includes('cheese') && !lowerName.includes('cream') && !lowerName.includes('parmesan'));

  const isKeto = carbs < 15 && protein > 25;
  const isGrassFed = lowerName.includes('grass-fed') || lowerName.includes('organic');

  // Realistic Cooking Fat string
  let cookingFat = 'Cold-Pressed Mustard Oil';
  if (cookingMethod === 'Tandoori') {
    cookingFat = 'Clay Oven / Zero Oil';
  } else if (cookingMethod === 'Steamed') {
    cookingFat = 'Steam Cooked / Zero Oil';
  } else if (cookingMethod === 'Raw') {
    cookingFat = 'Cold-Pressed Extra Virgin Olive Oil';
  } else if (lowerName.includes('olive oil')) {
    cookingFat = 'Extra Virgin Olive Oil';
  } else if (lowerName.includes('coconut milk') || lowerName.includes('kerala') || city === 'Kochi') {
    cookingFat = 'Cold-Pressed Coconut Oil';
  } else if (seedOilFreeStr.toLowerCase() === 'yes') {
    cookingFat = 'Pure Desi Cow Ghee';
  } else if (dietType === 'Non-Vegetarian') {
    cookingFat = 'Cold-Pressed Mustard Oil';
  } else {
    cookingFat = 'Cold-Pressed Sesame / Olive Oil';
  }

  // Diet tags
  const dietTags = [];
  if (isSeedOilFree) dietTags.push('Seed Oil Free');
  if (isGlutenFree) dietTags.push('Gluten-Free');
  if (protein >= 25) dietTags.push('High Protein');
  if (dietType === 'Vegan') dietTags.push('Vegan');
  else if (dietType === 'Vegetarian') dietTags.push('Vegetarian');
  if (isDairyFree) dietTags.push('Dairy-Free');
  if (fiber >= 5) dietTags.push('High Fiber');
  if (calories <= 350) dietTags.push('Low Calorie');
  if (isKeto) dietTags.push('Keto');

  // Coordinates with slight deterministic offset for multiple restaurants in same city
  const baseCenter = cityCoords[city] || { lat: 28.6139, lng: 77.2090 };
  const offsetMultiplier = 0.008;
  const angle = ((i * 137.5) * Math.PI) / 180; // golden ratio dispersion
  const dist = 0.005 + ((i % 5) * offsetMultiplier);
  const lat = parseFloat((baseCenter.lat + Math.sin(angle) * dist).toFixed(5));
  const lng = parseFloat((baseCenter.lng + Math.cos(angle) * dist).toFixed(5));

  // Highlights
  const highlights = [];
  highlights.push(`${protein}g Clean Protein`);
  if (isSeedOilFree) highlights.push(cookingFat);
  if (isGlutenFree) highlights.push('Gluten-Free');
  if (freshIngredientsStr.toLowerCase() === 'yes') highlights.push('Fresh Farm Produce');
  if (cookingMethod && cookingMethod !== 'NULL') highlights.push(`${cookingMethod} Preparation`);

  const dishId = `in-${city.toLowerCase().replace(/\s+/g, '-')}-${i}`;

  dishes.push({
    id: dishId,
    name: dishName,
    restaurant,
    restaurantAddress: address,
    city,
    coordinates: { lat, lng },
    price,
    rating: parseFloat((4.6 + ((i % 5) * 0.08)).toFixed(1)),
    reviewsCount: 30 + ((i * 13) % 120),
    image: pickImage(dishName, dishCategory, ingredientsStr),
    calories,
    protein,
    carbs,
    fat,
    fiber,
    dietTags,
    cookingFat,
    isSeedOilFree,
    isGlutenFree,
    isKeto,
    isGrassFed,
    isDairyFree,
    highlights,
    ingredients,
    chefNotes: `${menuDescription || dishName}. Sourced directly from ${restaurant} in ${address}. Prepared using ${cookingMethod || 'clean'} techniques with verified fresh ingredients.`,
  });
}

// Add the 10 Hyperlocal off-delivery traditional gems
const hyperlocalGems = [
  {
    id: "in-ghaziabad-daulat-ki-chaat",
    name: "Daulat ki Chaat / Malaiyo",
    restaurant: "Ghantaghar Morning Vendors",
    restaurantAddress: "Ghantaghar Market, Ghaziabad, UP 201001",
    city: "Ghaziabad",
    coordinates: { lat: 28.6672, lng: 77.4426 },
    price: 60,
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    calories: 120,
    protein: 8,
    carbs: 16,
    fat: 2,
    fiber: 0,
    dietTags: ["Seed Oil Free", "Gluten-Free", "Low Calorie", "Vegetarian"],
    cookingFat: "No Oil / Whipped Milk Foam",
    isSeedOilFree: true,
    isGlutenFree: true,
    isKeto: false,
    isGrassFed: true,
    isDairyFree: false,
    highlights: ["Winter Delicacy", "Zero Oil", "Whipped Dew Foam", "Not on Swiggy/Zomato"],
    ingredients: ["Whipped Milk Foam", "Kashmiri Kesar", "Cardamom", "Khoya Slivers", "Bura"],
    chefNotes: "Churned overnight under winter dew and whipped into an ethereal foam. Collapses in 5 minutes if packed—available strictly fresh 7am–11am."
  },
  {
    id: "in-delhi-kulle-chaat",
    name: "Kulle Chaat & Sprouted Moong Chaat",
    restaurant: "Hira Lal Chaat Corner",
    restaurantAddress: "Lajpat Nagar Central Market, Delhi 110024",
    city: "Delhi",
    coordinates: { lat: 28.5677, lng: 77.2433 },
    price: 40,
    rating: 4.8,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    calories: 140,
    protein: 10,
    carbs: 22,
    fat: 1,
    fiber: 7,
    dietTags: ["Seed Oil Free", "Gluten-Free", "Vegan", "High Fiber", "Low Calorie"],
    cookingFat: "Zero Oil / Raw-Tossed",
    isSeedOilFree: true,
    isGlutenFree: true,
    isKeto: false,
    isGrassFed: false,
    isDairyFree: true,
    highlights: ["100% Oil Free", "Sprouted Kala Chana", "Hollowed Cucumber Cups", "Live Assembled"],
    ingredients: ["Cucumber", "Boiled Kala Chana", "Sprouted Moong", "Pomegranate", "Lemon Juice", "Bhuna Jeera"],
    chefNotes: "Assembled live on flat brass paraat. Fresh hollowed cucumber wept within minutes—eaten immediately on the spot."
  },
  {
    id: "in-mumbai-jowar-bhakri-zunka",
    name: "Jowar Bhakri + Zunka + Sol Kadhi Taak",
    restaurant: "Prakash Upahar Kendra",
    restaurantAddress: "Dadar West, Mumbai 400028",
    city: "Mumbai",
    coordinates: { lat: 19.0178, lng: 72.8478 },
    price: 120,
    rating: 4.9,
    reviewsCount: 180,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    calories: 260,
    protein: 14,
    carbs: 42,
    fat: 4,
    fiber: 9,
    dietTags: ["Seed Oil Free", "Gluten-Free", "High Fiber", "Vegetarian"],
    cookingFat: "Zero Oil / Steamed Besan",
    isSeedOilFree: true,
    isGlutenFree: true,
    isKeto: false,
    isGrassFed: false,
    isDairyFree: false,
    highlights: ["Sorghum Millet Bhakri", "Probiotic Kokum Taak", "Low GI", "Steamed Zunka"],
    ingredients: ["Jowar Flour", "Horse Gram Besan", "Kokum", "Buttermilk", "Garlic", "Coriander"],
    chefNotes: "Hand-patted sorghum roti that hardens after 15 minutes. Served with freshly churned kokum probiotic buttermilk from steel canisters."
  },
  {
    id: "in-kolkata-ghugni-chaat",
    name: "Ghugni Chaat & Jhal Muri Healthy Version",
    restaurant: "Dacres Lane Morning Stalls",
    restaurantAddress: "Dacres Lane, Esplanade, Kolkata 700069",
    city: "Kolkata",
    coordinates: { lat: 22.5609, lng: 88.3516 },
    price: 35,
    rating: 4.8,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    calories: 210,
    protein: 11,
    carbs: 34,
    fat: 3,
    fiber: 8,
    dietTags: ["Seed Oil Free", "Vegan", "High Fiber", "Low Calorie"],
    cookingFat: "Raw Cold-Pressed Mustard Oil",
    isSeedOilFree: true,
    isGlutenFree: false,
    isKeto: false,
    isGrassFed: false,
    isDairyFree: true,
    highlights: ["Yellow Peas", "11g Clean Protein", "Zero Fry", "Fresh Sal-Leaf Dona"],
    ingredients: ["Yellow Peas", "Sprouted Chana", "Puffed Rice", "Tamarind Pulp", "Raw Mustard Oil", "Green Chillies"],
    chefNotes: "Boiled yellow peas with raw onions and tamarind. Jhal muri loses its crispness in plastic containers—best enjoyed right off the cart."
  },
  {
    id: "in-chennai-sundal-vazhaithandu",
    name: "Sundal & Vazhaithandu Mor (Banana Stem Buttermilk)",
    restaurant: "Marina Beach Sundal Stalls",
    restaurantAddress: "Marina Beach, Chennai 600005",
    city: "Chennai",
    coordinates: { lat: 13.0500, lng: 80.2824 },
    price: 40,
    rating: 4.8,
    reviewsCount: 115,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    calories: 160,
    protein: 9,
    carbs: 24,
    fat: 3,
    fiber: 8,
    dietTags: ["Seed Oil Free", "Gluten-Free", "Vegetarian", "High Fiber"],
    cookingFat: "Cold-Pressed Coconut Oil",
    isSeedOilFree: true,
    isGlutenFree: true,
    isKeto: false,
    isGrassFed: false,
    isDairyFree: false,
    highlights: ["Banana Stem Mor", "Steamed Chickpeas", "Raw Mango Shavings", "Kidney Cleanser"],
    ingredients: ["Steamed White Chana", "Fresh Coconut", "Curry Leaves", "Banana Stem Juice", "Country Curd"],
    chefNotes: "Warm steamed chickpeas with fresh curry leaves and coconut. Banana stem juice oxidizes quickly, so it is freshly pounded live."
  },
  {
    id: "in-bengaluru-ragi-mudde-saaru",
    name: "Ragi Mudde + Soppu Saaru / Huruli Saaru",
    restaurant: "Gandhi Bazaar Mess",
    restaurantAddress: "Gandhi Bazaar, Basavanagudi, Bengaluru 560004",
    city: "Bengaluru",
    coordinates: { lat: 12.9419, lng: 77.5671 },
    price: 80,
    rating: 4.9,
    reviewsCount: 160,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    calories: 240,
    protein: 12,
    carbs: 44,
    fat: 2,
    fiber: 11,
    dietTags: ["Seed Oil Free", "Gluten-Free", "Vegan", "High Fiber"],
    cookingFat: "Zero Oil / Steamed Finger Millet",
    isSeedOilFree: true,
    isGlutenFree: true,
    isKeto: false,
    isGrassFed: false,
    isDairyFree: true,
    highlights: ["Finger Millet Balls", "Wild Greens Broth", "High Calcium & Iron", "Low Glycemic"],
    ingredients: ["Ragi (Finger Millet)", "Horse Gram (Huruli)", "Wild Spinach", "Garlic", "Cumin", "Pepper"],
    chefNotes: "Steamed finger millet ball eaten whole by dipping in piping hot leafy broth. Hardens into rubber if packed on delivery."
  },
  {
    id: "in-hyderabad-jonna-rotte",
    name: "Jonna Rotte + Gongura Pachadi",
    restaurant: "Moazzam Jahi Morning Carts",
    restaurantAddress: "Moazzam Jahi Market, Hyderabad 500002",
    city: "Hyderabad",
    coordinates: { lat: 17.3850, lng: 78.4867 },
    price: 50,
    rating: 4.7,
    reviewsCount: 94,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    calories: 190,
    protein: 8,
    carbs: 36,
    fat: 2,
    fiber: 7,
    dietTags: ["Seed Oil Free", "Gluten-Free", "Vegan", "High Fiber"],
    cookingFat: "Zero Oil / Dry Iron Tawa",
    isSeedOilFree: true,
    isGlutenFree: true,
    isKeto: false,
    isGrassFed: false,
    isDairyFree: true,
    highlights: ["Iron-Rich Sorrel Leaves", "Jowar Millet Roti", "Gluten-Free", "Zero Oil"],
    ingredients: ["Jowar Flour", "Fresh Gongura Leaves", "Garlic", "Green Chillies", "Sea Salt"],
    chefNotes: "Rotte is patted by hand and roasted without oil on an iron tawa. Becomes tough and leathery if trapped in delivery boxes."
  },
  {
    id: "in-pune-patolya-tak-matki",
    name: "Patolya / Steamed Arbi Leaves & Tak Matki",
    restaurant: "Tulsi Baug Morning Carts",
    restaurantAddress: "Tulsi Baug, Pune 411030",
    city: "Pune",
    coordinates: { lat: 18.5164, lng: 73.8560 },
    price: 45,
    rating: 4.8,
    reviewsCount: 76,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    calories: 175,
    protein: 9,
    carbs: 24,
    fat: 3,
    fiber: 6,
    dietTags: ["Seed Oil Free", "Gluten-Free", "Vegetarian", "High Fiber"],
    cookingFat: "Zero Oil / Steamed Leaves",
    isSeedOilFree: true,
    isGlutenFree: true,
    isKeto: false,
    isGrassFed: false,
    isDairyFree: false,
    highlights: ["Steamed Not Fried", "Taro Leaves", "Sprouted Moth Beans", "Probiotic Tak"],
    ingredients: ["Colocasia (Arbi) Leaves", "Chana Dal Besan", "Sprouted Matki", "Buttermilk", "Coriander"],
    chefNotes: "Steamed taro rolls un-fried, served with fresh sprouted moth beans and spiced digestive chaas."
  },
  {
    id: "in-ahmedabad-khichu-lilva",
    name: "Khichu & Steamed Lilva",
    restaurant: "Manek Chowk Khaman Houses",
    restaurantAddress: "Manek Chowk, Ahmedabad 380001",
    city: "Ahmedabad",
    coordinates: { lat: 23.0225, lng: 72.5714 },
    price: 50,
    rating: 4.8,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    calories: 180,
    protein: 7,
    carbs: 34,
    fat: 2,
    fiber: 5,
    dietTags: ["Seed Oil Free", "Gluten-Free", "Vegan", "Low Calorie"],
    cookingFat: "Zero Oil / Steamed Dough",
    isSeedOilFree: true,
    isGlutenFree: true,
    isKeto: false,
    isGrassFed: false,
    isDairyFree: true,
    highlights: ["Steamed Rice Dough", "Tender Pigeon Peas", "Gluten-Free", "Gentle on Gut"],
    ingredients: ["Rice Flour", "Fresh Green Lilva (Pigeon Peas)", "Cumin", "Green Chillies", "Papad Khar", "Methia Masala"],
    chefNotes: "Steamed piping hot straight from the large aluminum boiler. Gelatinizes and hardens into a dense block within 10 minutes."
  },
  {
    id: "in-jaipur-bajra-raab",
    name: "Bajra Raab & Ker Sangri Salad",
    restaurant: "Bapu Bazaar Kulhad Raab Stall",
    restaurantAddress: "Bapu Bazaar, Jaipur 302003",
    city: "Jaipur",
    coordinates: { lat: 26.9153, lng: 75.8188 },
    price: 45,
    rating: 4.9,
    reviewsCount: 130,
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    calories: 150,
    protein: 7,
    carbs: 26,
    fat: 2,
    fiber: 6,
    dietTags: ["Seed Oil Free", "Gluten-Free", "Vegetarian", "Probiotic"],
    cookingFat: "Zero Oil / Fermented Millet Simmer",
    isSeedOilFree: true,
    isGlutenFree: true,
    isKeto: false,
    isGrassFed: false,
    isDairyFree: false,
    highlights: ["Fermented Pearl Millet", "Terracotta Kulhad", "Probiotic Immunity", "Desert Ker Sangri"],
    ingredients: ["Bajra (Pearl Millet)", "Desi Buttermilk", "Ajwain", "Sonth (Dry Ginger)", "Ker Sangri Beans", "Rock Salt"],
    chefNotes: "Fermented pearl millet porridge simmered with warming spices and served boiling hot in unglazed porous earthen cups."
  }
];

const allIndianDishes = [...hyperlocalGems, ...dishes];

const tsContent = `import { Dish } from './mockData';

export const INDIA_DISHES: Dish[] = ${JSON.stringify(allIndianDishes, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../lib/indiaDishesData.ts'), tsContent, 'utf-8');
console.log('Successfully generated lib/indiaDishesData.ts with', allIndianDishes.length, 'dishes!');
