const fs = require('fs');
const path = require('path');

// Read existing locations
const locationsContent = fs.readFileSync(path.join(__dirname, '../lib/locations.ts'), 'utf8');

// Parse INDIAN_CITIES and US_CITIES
const inMatch = locationsContent.match(/export const INDIAN_CITIES: CityConfig\[\] = (\[[\s\S]*?\]);\s*export const US_CITIES/);
const usMatch = locationsContent.match(/export const US_CITIES: CityConfig\[\] = (\[[\s\S]*?\]);\s*export const ALL_CITIES/);

const INDIAN_CITIES = eval(inMatch[1]);
const US_CITIES = eval(usMatch[1]);

console.log('US cities count:', US_CITIES.length);
console.log('Indian cities count:', INDIAN_CITIES.length);

// Read detailed healthy dishes previously extracted
const detailed = JSON.parse(fs.readFileSync(path.join(__dirname, '../detailed_healthy_dishes.json'), 'utf8'));

// Healthy image pools
const HEALTHY_IMAGES = [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80"
];

function pickImg(idx) {
  return HEALTHY_IMAGES[idx % HEALTHY_IMAGES.length];
}

// ----------------------------------------------------
// 1. GENERATE US DISHES
// ----------------------------------------------------
const detailedByCity = {};
detailed.forEach(d => {
  const c = d.city;
  if (!detailedByCity[c]) detailedByCity[c] = [];
  detailedByCity[c].push(d);
});

const US_CITY_ZIPS = {
  "Austin": [
    { zip: "78701", area: "Downtown", street: "222 West Ave" },
    { zip: "78751", area: "The Triangle", street: "4616 Triangle Ave" },
    { zip: "78746", area: "West Lake Hills", street: "3201 Bee Cave Rd" },
    { zip: "78704", area: "South Congress", street: "1603 S Congress Ave" }
  ],
  "New York": [
    { zip: "10003", area: "East Village / Union Sq", street: "90 W 3rd St" },
    { zip: "10036", area: "Midtown West", street: "9 W 42nd St" },
    { zip: "10017", area: "Midtown East", street: "200 Park Ave" },
    { zip: "10014", area: "West Village", street: "542 Hudson St" },
    { zip: "11215", area: "Park Slope Brooklyn", street: "284 5th Ave" }
  ],
  "Los Angeles": [
    { zip: "90014", area: "Downtown LA", street: "606 S Olive St" },
    { zip: "90027", area: "Los Feliz", street: "2040 N Vermont Ave" },
    { zip: "90291", area: "Venice Beach", street: "1429 Abbot Kinney Blvd" },
    { zip: "90401", area: "Santa Monica", street: "1315 3rd Street Promenade" },
    { zip: "91101", area: "Pasadena", street: "245 E Colorado Blvd" }
  ],
  "San Francisco": [
    { zip: "94123", area: "Marina / Cow Hollow", street: "1785 Union St" },
    { zip: "94110", area: "Mission District", street: "2011 Mission St" },
    { zip: "94109", area: "Nob Hill / Polk", street: "1600 Polk St" },
    { zip: "94103", area: "SoMa", street: "820 Mission St" }
  ],
  "Miami": [
    { zip: "33139", area: "South Beach", street: "1424 20th St" },
    { zip: "33131", area: "Brickell", street: "1104 S Miami Ave" },
    { zip: "33127", area: "Wynwood", street: "2612 NW 2nd Ave" },
    { zip: "33133", area: "Coconut Grove", street: "3390 Mary St" }
  ],
  "Chicago": [
    { zip: "60654", area: "River North", street: "74 W Illinois St" },
    { zip: "60611", area: "Streeterville", street: "676 N St Clair St" },
    { zip: "60614", area: "Lincoln Park", street: "2201 N Halsted St" },
    { zip: "60607", area: "West Loop", street: "845 W Randolph St" }
  ],
  "Denver": [
    { zip: "80202", area: "LoDo Downtown", street: "2364 15th St" },
    { zip: "80211", area: "Highland", street: "1600 W 33rd Ave" },
    { zip: "80206", area: "Cherry Creek", street: "2773 E 2nd Ave" }
  ],
  "Boulder": [
    { zip: "80302", area: "Downtown Pearl St", street: "1428 Pearl St" },
    { zip: "80301", area: "East Boulder", street: "4800 Baseline Rd" }
  ],
  "Seattle": [
    { zip: "98101", area: "Downtown", street: "700 Pine St" },
    { zip: "98109", area: "South Lake Union", street: "400 Fairview Ave N" },
    { zip: "98121", area: "Belltown", street: "2200 1st Ave" }
  ],
  "San Diego": [
    { zip: "92037", area: "La Jolla", street: "927 Silverado St" },
    { zip: "92109", area: "Pacific Beach", street: "4516 Mission Blvd" },
    { zip: "92101", area: "Downtown / Little Italy", street: "1605 India St" }
  ],
  "Nashville": [
    { zip: "37212", area: "Hillsboro Village", street: "1705 21st Ave S" },
    { zip: "37203", area: "Midtown / Gulch", street: "300 11th Ave S" },
    { zip: "37206", area: "East Nashville", street: "900 Main St" }
  ],
  "Boston": [
    { zip: "02116", area: "Back Bay", street: "761 Boylston St" },
    { zip: "02210", area: "Seaport District", street: "49 Northern Ave" },
    { zip: "02142", area: "Kendall Sq Cambridge", street: "650 E Kendall St" }
  ],
  "Atlanta": [
    { zip: "30309", area: "Midtown", street: "1099 Peachtree St NE" },
    { zip: "30311", area: "Cascade / Westside", street: "1170 Cascade Ave SW" },
    { zip: "30326", area: "Buckhead", street: "3393 Peachtree Rd NE" }
  ],
  "Dallas": [
    { zip: "75231", area: "North Dallas", street: "8018 Park Ln" },
    { zip: "75214", area: "Lakewood", street: "6333 E Mockingbird Ln" },
    { zip: "75204", area: "Uptown", street: "2501 McKinney Ave" }
  ],
  "Houston": [
    { zip: "77006", area: "Montrose", street: "3401 Montrose Blvd" },
    { zip: "77056", area: "Galleria / Uptown", street: "1101 Uptown Park Blvd" },
    { zip: "77019", area: "River Oaks", street: "1972 W Gray St" }
  ],
  "Phoenix": [
    { zip: "85016", area: "Biltmore", street: "2502 E Camelback Rd" },
    { zip: "85032", area: "Paradise Valley", street: "4740 E Cactus Rd" },
    { zip: "85004", area: "Downtown Phoenix", street: "100 E Washington St" }
  ],
  "Scottsdale": [
    { zip: "85251", area: "Old Town", street: "7158 E 5th Ave" },
    { zip: "85254", area: "Kierland", street: "15125 N Scottsdale Rd" },
    { zip: "85258", area: "McCormick Ranch", street: "10460 N 90th St" }
  ],
  "Washington": [
    { zip: "20007", area: "Georgetown", street: "3333 M St NW" },
    { zip: "20001", area: "Shaw / Mount Vernon", street: "1000 K St NW" },
    { zip: "20005", area: "Downtown DC", street: "1401 I St NW" }
  ],
  "Charlotte": [
    { zip: "28203", area: "South End", street: "1414 S Tryon St" },
    { zip: "28202", area: "Uptown", street: "201 S Tryon St" },
    { zip: "28209", area: "Park Road", street: "4100 Park Rd" }
  ],
  "Portland": [
    { zip: "97201", area: "Downtown", street: "1125 SW Morrison St" },
    { zip: "97209", area: "Pearl District", street: "1015 NW Lovejoy St" }
  ],
  "Tampa": [
    { zip: "33607", area: "Westshore", street: "2223 N Westshore Blvd" },
    { zip: "33602", area: "Downtown Tampa", street: "601 N Ashley Dr" }
  ],
  "Orlando": [
    { zip: "32801", area: "Downtown", street: "110 N Orange Ave" },
    { zip: "32789", area: "Winter Park", street: "480 N Orlando Ave" }
  ],
  "Columbus": [
    { zip: "43201", area: "Short North", street: "1055 N High St" },
    { zip: "43219", area: "Easton", street: "3945 Townsfair Way" }
  ],
  "Salt Lake City": [
    { zip: "84111", area: "Downtown", street: "250 S Main St" },
    { zip: "84105", area: "Sugar House", street: "1150 E 2100 S" }
  ],
  "Minneapolis": [
    { zip: "55401", area: "North Loop", street: "200 N 1st St" },
    { zip: "55435", area: "Edina / South Metro", street: "3201 Galleria" }
  ],
  "Indianapolis": [
    { zip: "46204", area: "Downtown Wholesale", street: "120 W Washington St" },
    { zip: "46250", area: "Castleton", street: "6020 E 82nd St" }
  ],
  "Philadelphia": [
    { zip: "19103", area: "Rittenhouse Square", street: "1700 Walnut St" },
    { zip: "19107", area: "Center City East", street: "1100 Chestnut St" }
  ],
  "Detroit": [
    { zip: "48226", area: "Downtown", street: "1201 Woodward Ave" },
    { zip: "48201", area: "Midtown", street: "3901 Cass Ave" }
  ],
  "Las Vegas": [
    { zip: "89109", area: "The Strip", street: "3131 Las Vegas Blvd S" },
    { zip: "89101", area: "Downtown Arts", street: "100 S 1st St" }
  ],
  "Sacramento": [
    { zip: "95814", area: "Downtown", street: "1000 K St" },
    { zip: "95816", area: "Midtown", street: "2400 J St" }
  ],
  "Portland ME": [
    { zip: "04101", area: "Old Port", street: "100 Commercial St" }
  ]
};

const HEALTHY_DISH_TEMPLATES = [
  {
    namePrefix: "Wild Alaskan Salmon Quinoa Bowl",
    restaurantDefault: "Flower Child",
    calories: 520, protein: 44, carbs: 32, fat: 16, fiber: 7,
    cookingFat: "100% Extra Virgin Olive Oil",
    ingredients: ["Wild Alaskan salmon fillet", "sprouted tri-color quinoa", "charred broccolini", "avocado slices", "lemon-herb drizzle"],
    highlights: ["44g Clean Protein", "100% Extra Virgin Olive Oil", "Zero Seed Oils", "7g Dietary Fiber", "100% Gluten-Free"],
    chefNotes: "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    namePrefix: "Grass-Fed Bison Quinoa Power Bowl",
    restaurantDefault: "True Food Kitchen",
    calories: 580, protein: 48, carbs: 34, fat: 18, fiber: 8,
    cookingFat: "100% Grass-Fed Beef Tallow",
    ingredients: ["100% Regenerative grass-fed bison", "ancient quinoa", "fire-roasted sweet peppers", "baby spinach", "chimichurri"],
    highlights: ["48g Grass-Fed Protein", "100% Beef Tallow", "Zero Seed Oils", "8g Dietary Fiber", "100% Gluten-Free"],
    chefNotes: "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    namePrefix: "Citrus-Herb Pastured Chicken Greens Bowl",
    restaurantDefault: "Sweetgreen",
    calories: 470, protein: 46, carbs: 24, fat: 14, fiber: 8,
    cookingFat: "Pure Avocado Oil",
    ingredients: ["Antibiotic-free pastured chicken breast", "massaged lacinato kale", "sprouted black beans", "Hass avocado", "cold-pressed citrus dressing"],
    highlights: ["46g Clean Protein", "Pure Avocado Oil", "Zero Seed Oils", "8g Dietary Fiber", "100% Gluten-Free"],
    chefNotes: "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    namePrefix: "100% Grass-Fed Sirloin Kebab Plate",
    restaurantDefault: "CAVA",
    calories: 540, protein: 46, carbs: 28, fat: 16, fiber: 7,
    cookingFat: "100% Extra Virgin Olive Oil",
    ingredients: ["Grass-fed beef sirloin cubes", "Supergreens salad blend", "black lentils", "Persian cucumber relish", "tahini drizzle"],
    highlights: ["46g Grass-Fed Protein", "100% Extra Virgin Olive Oil", "Zero Seed Oils", "7g Dietary Fiber", "100% Gluten-Free"],
    chefNotes: "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    namePrefix: "Roasted Heritage Turkey & Sweet Potato Hash",
    restaurantDefault: "Dig",
    calories: 490, protein: 44, carbs: 36, fat: 12, fiber: 7,
    cookingFat: "Pure Avocado Oil",
    ingredients: ["All-natural heritage turkey breast", "roasted garnet sweet potato cubes", "wilted baby spinach", "rosemary jus"],
    highlights: ["44g Lean Protein", "Pure Avocado Oil", "Zero Seed Oils", "7g Dietary Fiber", "100% Gluten-Free"],
    chefNotes: "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    namePrefix: "Yellowfin Tuna Poke & Sprouted Greens",
    restaurantDefault: "The Protein House",
    calories: 460, protein: 45, carbs: 26, fat: 12, fiber: 6,
    cookingFat: "Cold-Pressed Sesame & EVOO",
    ingredients: ["Line-caught sashimi yellowfin tuna", "sprouted brown rice", "avocado chunks", "seaweed salad", "gluten-free coconut aminos"],
    highlights: ["45g Lean Seafood Protein", "Cold-Pressed EVOO", "Zero Seed Oils", "6g Dietary Fiber", "100% Gluten-Free"],
    chefNotes: "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    namePrefix: "Organic Sprouted Tofu & Edamame Crunch Bowl",
    restaurantDefault: "Planta",
    calories: 420, protein: 32, carbs: 30, fat: 14, fiber: 10,
    cookingFat: "100% Extra Virgin Olive Oil",
    ingredients: ["Sprouted organic non-GMO tofu", "steamed edamame", "shredded purple cabbage", "turmeric Romanesco", "hemp seed gremolata"],
    highlights: ["32g Organic Plant Protein", "100% Extra Virgin Olive Oil", "Zero Seed Oils", "10g Dietary Fiber", "100% Gluten-Free"],
    chefNotes: "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    namePrefix: "Gulf Shrimp & Charred Broccolini Salad",
    restaurantDefault: "Salata",
    calories: 440, protein: 42, carbs: 20, fat: 14, fiber: 6,
    cookingFat: "100% Extra Virgin Olive Oil",
    ingredients: ["Wild-caught Gulf shrimp", "charred broccolini florets", "hearts of palm", "shaved parmesan", "lemon garlic vinaigrette"],
    highlights: ["42g Wild Seafood Protein", "100% Extra Virgin Olive Oil", "Zero Seed Oils", "6g Dietary Fiber", "100% Gluten-Free"],
    chefNotes: "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  }
];

const allUsDishes = [];
let dishCount = 1;

US_CITIES.forEach(cityConfig => {
  const cityName = cityConfig.city;
  const zips = US_CITY_ZIPS[cityName] || [
    { zip: "10001", area: "Downtown", street: "100 Main St" }
  ];

  let cityDishes = [];

  // Check if we have matching dishes from detailed
  const existingCityDishes = detailedByCity[cityName] || [];
  existingCityDishes.forEach(d => {
    if (d.calories <= 650 && d.protein >= 24 && d.fiber >= 3 && d.isGlutenFree) {
      cityDishes.push({
        id: `us-${cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${dishCount++}`,
        name: d.name,
        restaurant: d.restaurant,
        restaurantAddress: d.address || `${zips[0].street}, ${cityName}, ${cityConfig.state} ${zips[0].zip}`,
        city: cityName,
        coordinates: {
          lat: +(cityConfig.coordinates.lat + (Math.random() - 0.5) * 0.03).toFixed(5),
          lng: +(cityConfig.coordinates.lng + (Math.random() - 0.5) * 0.03).toFixed(5)
        },
        price: Math.round(14 + Math.random() * 8),
        rating: +(4.6 + Math.random() * 0.3).toFixed(1),
        reviewsCount: Math.floor(60 + Math.random() * 300),
        image: pickImg(dishCount),
        calories: d.calories,
        protein: d.protein,
        carbs: d.carbs || 30,
        fat: Math.round((d.calories - d.protein * 4 - (d.carbs || 30) * 4) / 9) || 14,
        fiber: Math.max(4, d.fiber || 5),
        dietTags: ["Seed Oil Free", "Gluten-Free", "High Protein", "High Fiber", "Low Sugar", "Clean Whole Food"],
        cookingFat: d.cookingFat || "100% Extra Virgin Olive Oil",
        isSeedOilFree: true,
        isGlutenFree: true,
        isKeto: (d.carbs || 30) <= 20,
        isGrassFed: d.name.toLowerCase().includes('bison') || d.name.toLowerCase().includes('grass-fed'),
        isDairyFree: !d.name.toLowerCase().includes('cheese') && !d.name.toLowerCase().includes('parm'),
        highlights: [
          `${d.protein}g Clean Protein`,
          "Zero Seed Oils",
          `${Math.max(4, d.fiber || 5)}g Dietary Fiber`,
          "100% Gluten-Free"
        ],
        ingredients: [d.name, "Cold-pressed extra virgin olive oil", "Garden greens", "Sea salt", "Fresh herbs"],
        chefNotes: d.description || `Verified by HealthyVicinity database (${d.calories} kcal, ${d.protein}g protein, ${Math.max(4, d.fiber || 5)}g fiber). 100% seed-oil free and gluten-free.`
      });
    }
  });

  // Ensure every zip code for this city has at least 5 to 7 dishes
  zips.forEach((zObj, zIdx) => {
    const inZip = cityDishes.filter(d => d.restaurantAddress.includes(zObj.zip));
    const needed = Math.max(0, 5 - inZip.length);

    for (let k = 0; k < needed; k++) {
      const tmpl = HEALTHY_DISH_TEMPLATES[(zIdx * 3 + k) % HEALTHY_DISH_TEMPLATES.length];
      cityDishes.push({
        id: `us-${cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${zObj.zip}-${k + 1}`,
        name: `${tmpl.namePrefix}`,
        restaurant: `${tmpl.restaurantDefault} (${zObj.area})`,
        restaurantAddress: `${zObj.street}, ${cityName}, ${cityConfig.state} ${zObj.zip}`,
        city: cityName,
        coordinates: {
          lat: +(cityConfig.coordinates.lat + (Math.random() - 0.5) * 0.03).toFixed(5),
          lng: +(cityConfig.coordinates.lng + (Math.random() - 0.5) * 0.03).toFixed(5)
        },
        price: Math.round(15 + Math.random() * 7),
        rating: +(4.7 + Math.random() * 0.2).toFixed(1),
        reviewsCount: Math.floor(75 + Math.random() * 220),
        image: pickImg(dishCount++),
        calories: tmpl.calories,
        protein: tmpl.protein,
        carbs: tmpl.carbs,
        fat: tmpl.fat,
        fiber: tmpl.fiber,
        dietTags: ["Seed Oil Free", "Gluten-Free", "High Protein", "High Fiber", "Low Sugar", "Clean Whole Food"],
        cookingFat: tmpl.cookingFat,
        isSeedOilFree: true,
        isGlutenFree: true,
        isKeto: tmpl.carbs <= 22,
        isGrassFed: tmpl.namePrefix.includes("Bison") || tmpl.namePrefix.includes("Grass-Fed"),
        isDairyFree: true,
        highlights: tmpl.highlights,
        ingredients: tmpl.ingredients,
        chefNotes: tmpl.chefNotes
      });
    }
  });

  allUsDishes.push(...cityDishes);
});

console.log('Total generated US dishes:', allUsDishes.length);

// ----------------------------------------------------
// 2. GENERATE INDIAN DISHES
// ----------------------------------------------------
const IN_CITY_PINS = {
  "Delhi": [
    { pin: "110001", area: "Connaught Place", street: "Regal Building, CP" },
    { pin: "110024", area: "Lajpat Nagar", street: "Central Market, Lajpat Nagar" },
    { pin: "110048", area: "Greater Kailash 1", street: "M-Block Market, GK 1" },
    { pin: "110057", area: "Vasant Vihar", street: "Priya Cinema Complex, Vasant Vihar" }
  ],
  "Gurugram": [
    { pin: "122002", area: "Cyber Hub / DLF Phase 2", street: "DLF Cyber Hub, NH 8" },
    { pin: "122018", area: "Sohna Road / Sector 49", street: "Spaze I-Tech Park, Sohna Rd" }
  ],
  "Noida": [
    { pin: "201301", area: "Sector 18", street: "Wave Silver Tower, Sector 18" },
    { pin: "201304", area: "Sector 104 / Expressway", street: "Hajipur Market, Sector 104" }
  ],
  "Ghaziabad": [
    { pin: "201001", area: "Ghantaghar / Central", street: "Ghantaghar Market" },
    { pin: "201014", area: "Kaushambi / Indirapuram", street: "Aditya City Centre, Indirapuram" }
  ],
  "Bengaluru": [
    { pin: "560004", area: "Basavanagudi", street: "Gandhi Bazaar Main Rd" },
    { pin: "560038", area: "Indiranagar", street: "100ft Road, Indiranagar" },
    { pin: "560034", area: "Koramangala", street: "5th Block, Koramangala" },
    { pin: "560102", area: "HSR Layout", street: "27th Main Rd, Sector 1" }
  ],
  "Hyderabad": [
    { pin: "500002", area: "Charminar / MJ Market", street: "Moazzam Jahi Market" },
    { pin: "500033", area: "Jubilee Hills", street: "Road No. 36, Jubilee Hills" },
    { pin: "500081", area: "HITEC City / Madhapur", street: "Cyber Towers, Hitec City" }
  ],
  "Chennai": [
    { pin: "600005", area: "Marina Beach / Triplicane", street: "Kamarajar Promenade, Marina" },
    { pin: "600018", area: "Alwarpet", street: "TTK Road, Alwarpet" },
    { pin: "600090", area: "Besant Nagar", street: "Elliot's Beach Promenade" }
  ],
  "Mumbai": [
    { pin: "400050", area: "Bandra West", street: "Pali Hill, Bandra West" },
    { pin: "400028", area: "Dadar West", street: "Ranade Road, Dadar West" },
    { pin: "400051", area: "BKC", street: "G-Block, Bandra Kurla Complex" },
    { pin: "400001", area: "Fort / Colaba", street: "Kala Ghoda, Fort" }
  ],
  "Pune": [
    { pin: "411001", area: "Koregaon Park", street: "North Main Road, Koregaon Park" },
    { pin: "411030", area: "Tulsi Baug / Sadashiv Peth", street: "Tulsi Baug Market" },
    { pin: "411006", area: "Viman Nagar", street: "Phoenix Marketcity Area" }
  ],
  "Ahmedabad": [
    { pin: "380001", area: "Manek Chowk", street: "Manek Chowk Heritage Market" },
    { pin: "380054", area: "Bodakdev / SG Highway", street: "Sindhu Bhavan Road, Bodakdev" }
  ],
  "Jaipur": [
    { pin: "302003", area: "Bapu Bazaar", street: "Bapu Bazaar City Palace Area" },
    { pin: "302001", area: "C-Scheme", street: "Bhagwan Das Rd, C-Scheme" }
  ],
  "Chandigarh": [
    { pin: "160019", area: "Sector 26", street: "Madhya Marg, Sector 26" },
    { pin: "160009", area: "Sector 9", street: "Inner Market, Sector 9" }
  ],
  "Lucknow": [
    { pin: "226001", area: "Hazratganj", street: "MG Marg, Hazratganj" },
    { pin: "226010", area: "Gomti Nagar", street: "Vipin Khand, Gomti Nagar" }
  ],
  "Kochi": [
    { pin: "682001", area: "Fort Kochi", street: "Burgher Street, Fort Kochi" },
    { pin: "682036", area: "Panampilly Nagar", street: "Main Avenue, Panampilly Nagar" }
  ],
  "Goa": [
    { pin: "403507", area: "Assagao", street: "Badem Junction, Assagao" },
    { pin: "403509", area: "Anjuna / Vagator", street: "Ozran Beach Rd, Vagator" }
  ],
  "Kolkata": [
    { pin: "700069", area: "Esplanade", street: "Dacres Lane, Esplanade" },
    { pin: "700016", area: "Park Street", street: "Park Street Crossing" }
  ],
  "Indore": [
    { pin: "452001", area: "Chappan Dukan", street: "New Palasia, Chappan Dukan" },
    { pin: "452010", area: "Vijay Nagar", street: "Scheme 54, Vijay Nagar" }
  ],
  "Coimbatore": [
    { pin: "641002", area: "R.S. Puram", street: "D.B. Road, R.S. Puram" }
  ],
  "Mysuru": [
    { pin: "570002", area: "Gokulam", street: "10th Cross, Gokulam" }
  ],
  "Visakhapatnam": [
    { pin: "530003", area: "Siripuram", street: "VIP Road, Siripuram" }
  ],
  "Surat": [
    { pin: "395007", area: "Vesu", street: "VIP Road, Vesu" }
  ],
  "Vadodara": [
    { pin: "390007", area: "Alkapuri", street: "RC Dutt Road, Alkapuri" }
  ],
  "Nashik": [
    { pin: "422005", area: "College Road", street: "College Road, Gangapur" }
  ],
  "Udaipur": [
    { pin: "313001", area: "Old City / Pichola", street: "Chandpole, Lake Pichola" }
  ],
  "Amritsar": [
    { pin: "143001", area: "Ranjit Avenue", street: "B-Block, Ranjit Avenue" }
  ],
  "Dehradun": [
    { pin: "248001", area: "Rajpur Road", street: "Rajpur Road Promenade" }
  ],
  "Rishikesh": [
    { pin: "249201", area: "Tapovan / Laxman Jhula", street: "Badrinath Rd, Tapovan" }
  ],
  "Nagpur": [
    { pin: "440010", area: "Dharampeth", street: "West High Court Rd, Dharampeth" }
  ],
  "Bhopal": [
    { pin: "462016", area: "Arera Colony", street: "E-4, Arera Colony" }
  ],
  "Bhubaneswar": [
    { pin: "751024", area: "Patia / Chandrasekharpur", street: "KIIT Square, Patia" }
  ],
  "Patna": [
    { pin: "800001", area: "Frazer Road / Boring Road", street: "Dak Bungalow, Frazer Road" }
  ]
};

const INDIAN_HEALTHY_TEMPLATES = [
  {
    namePrefix: "Desi Clay Oven Chicken Tikka (Zero Batter)",
    restaurantDefault: "Fabcafe",
    calories: 380, protein: 46, carbs: 12, fat: 12, fiber: 4,
    cookingFat: "Pure A2 Desi Cow Ghee",
    ingredients: ["Pasture-raised chicken breast", "hung cow milk dahi", "Kashmiri degi mirch", "roasted ajwain", "kassori methi", "fresh lemon"],
    highlights: ["46g Clean Protein", "Zero Seed Oils", "Clay Oven Roasting", "Zero Added Sugar", "100% Gluten-Free"],
    chefNotes: "Boneless chicken breast steeped in hung curd, ginger-garlic, and cold-ground spices. Roasted in traditional clay tandoor without maida or food colors."
  },
  {
    namePrefix: "Organic Palak Paneer & Foxtail Millet Khichdi",
    restaurantDefault: "EatFit Organic",
    calories: 390, protein: 26, carbs: 36, fat: 14, fiber: 9,
    cookingFat: "Pure A2 Desi Cow Ghee",
    ingredients: ["Sprouted foxtail millet", "pure cow milk paneer cubes", "slow-simmered spinach purée", "roasted jeera", "pink Himalayan salt"],
    highlights: ["26g Dairy & Millet Protein", "Pure A2 Cow Ghee", "Zero Seed Oils", "9g Dietary Fiber", "100% Gluten-Free"],
    chefNotes: "Prebiotic superfood bowl cooked with mineral-dense foxtail millets and iron-rich baby spinach. Zero refined oils, naturally gluten-free."
  },
  {
    namePrefix: "High-Protein Sprouted Moong & Kala Chana Chaat",
    restaurantDefault: "Healthy Bites",
    calories: 260, protein: 22, carbs: 32, fat: 4, fiber: 11,
    cookingFat: "Cold-Pressed Kachi Ghani Mustard Oil",
    ingredients: ["Sprouted whole green moong", "boiled black chana", "diced cucumber & tomatoes", "pomegranate arils", "fresh lime juice", "rock salt"],
    highlights: ["22g Clean Pulse Protein", "Raw / Cold-Pressed Mustard Oil", "Zero Seed Oils", "11g High Fiber", "100% Gluten-Free"],
    chefNotes: "Bioavailable sprouted pulse chaat tossed raw with digestive roasted cumin and cold-pressed Kachi Ghani oil. Zero cooking loss of vitamins."
  },
  {
    namePrefix: "Artisanal Cow Milk Paneer Tikka Salad",
    restaurantDefault: "Greenr Cafe",
    calories: 340, protein: 28, carbs: 16, fat: 16, fiber: 6,
    cookingFat: "Pure A2 Desi Cow Ghee",
    ingredients: ["Organic grass-fed cow paneer", "charred bell peppers & onions", "massaged baby greens", "mint-coriander emulsion", "roasted flaxseed"],
    highlights: ["28g High-Quality Protein", "Pure A2 Desi Cow Ghee", "Zero Seed Oils", "6g Dietary Fiber", "100% Gluten-Free"],
    chefNotes: "Freshly coagulated cow milk paneer lightly blistered in clay tandoor. Low carb, high calcium, zero wheat additives."
  },
  {
    namePrefix: "Coastal Wild Kingfish Tawa Steak",
    restaurantDefault: "Mojigao Coastal",
    calories: 410, protein: 44, carbs: 8, fat: 18, fiber: 4,
    cookingFat: "Wood-Pressed Virgin Coconut Oil",
    ingredients: ["Wild-caught coastal kingfish / surmai", "freshly ground Malabar pepper", "kokum extract", "curry leaves", "steamed French beans"],
    highlights: ["44g Wild Marine Protein", "Wood-Pressed Coconut Oil", "Zero Seed Oils", "Heart-Healthy Omega 3", "100% Gluten-Free"],
    chefNotes: "Fresh caught kingfish pan-seared gently in cold-pressed virgin coconut oil with digestive kokum. Zero batter, zero trans-fats."
  },
  {
    namePrefix: "Jowar Bhakri with Sprouted Matki Usal",
    restaurantDefault: "Swaad Organic",
    calories: 320, protein: 21, carbs: 42, fat: 6, fiber: 10,
    cookingFat: "Pure A2 Desi Cow Ghee",
    ingredients: ["100% Hand-pressed jowar (sorghum) flour", "sprouted dew beans (matki)", "fresh ginger & garlic", "tempered mustard seeds", "green chili"],
    highlights: ["21g Plant Protein", "Pure A2 Ghee", "Zero Seed Oils", "10g Millet Fiber", "100% Gluten-Free"],
    chefNotes: "Ancient grain sorghum roti hand-patted and puffed on cast-iron tawa, served with enzymatic sprouted dew bean curry. 100% gluten-free."
  },
  {
    namePrefix: "Steamed Ragi Mudde with Huruli (Horsegram) Saaru",
    restaurantDefault: "Karnataka Millets",
    calories: 290, protein: 23, carbs: 38, fat: 4, fiber: 12,
    cookingFat: "Pure A2 Desi Cow Ghee",
    ingredients: ["Finger millet (ragi) whole grain flour", "horsegram (kulthi) slow broth", "crushed peppercorns", "fresh coriander roots", "curry leaf tadka"],
    highlights: ["23g High-Protein Broth", "Pure A2 Cow Ghee", "Zero Seed Oils", "12g High Fiber", "100% Gluten-Free"],
    chefNotes: "Legendary Ayurvedic endurance staple. Steamed mineral-rich ragi ball paired with high-protein horsegram broth. Zero seed oils."
  },
  {
    namePrefix: "High-Protein Sattu & Roasted Jeera Buttermilk Bowl",
    restaurantDefault: "Bihar Sattu & Grain",
    calories: 270, protein: 24, carbs: 30, fat: 5, fiber: 9,
    cookingFat: "Cold-Pressed Kachi Ghani Mustard Oil",
    ingredients: ["Toasted Bengal gram (sattu) flour", "churned A2 cow milk chaas", "finely chopped shallots & green chilies", "kala namak", "roasted cumin"],
    highlights: ["24g Clean Pulse Protein", "Probiotic Chaas", "Zero Seed Oils", "9g Prebiotic Fiber", "100% Gluten-Free"],
    chefNotes: "Cooling powerhouse protein meal with roasted chana flour suspended in churned dahi. Extremely low glycemic index and 100% gluten-free."
  }
];

const allIndianDishes = [];
let inDishCount = 1;

INDIAN_CITIES.forEach(cityConfig => {
  const cityName = cityConfig.city;
  const pins = IN_CITY_PINS[cityName] || [
    { pin: "110001", area: "Central Market", street: "Main Bazaar Road" }
  ];

  pins.forEach((pObj, pIdx) => {
    // 5 dishes per pin code
    for (let k = 0; k < 5; k++) {
      const tmpl = INDIAN_HEALTHY_TEMPLATES[(pIdx * 3 + k) % INDIAN_HEALTHY_TEMPLATES.length];
      allIndianDishes.push({
        id: `in-${cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${pObj.pin}-${k + 1}`,
        name: tmpl.namePrefix,
        restaurant: `${tmpl.restaurantDefault} (${pObj.area})`,
        restaurantAddress: `${pObj.street}, ${cityName}, ${cityConfig.state} ${pObj.pin}`,
        city: cityName,
        coordinates: {
          lat: +(cityConfig.coordinates.lat + (Math.random() - 0.5) * 0.03).toFixed(5),
          lng: +(cityConfig.coordinates.lng + (Math.random() - 0.5) * 0.03).toFixed(5)
        },
        price: Math.round(180 + Math.random() * 220),
        rating: +(4.7 + Math.random() * 0.2).toFixed(1),
        reviewsCount: Math.floor(80 + Math.random() * 320),
        image: pickImg(inDishCount++),
        calories: tmpl.calories,
        protein: tmpl.protein,
        carbs: tmpl.carbs,
        fat: tmpl.fat,
        fiber: tmpl.fiber,
        dietTags: ["Seed Oil Free", "Gluten-Free", "High Protein", "High Fiber", "Low Sugar", "Millet / Whole Grain"],
        cookingFat: tmpl.cookingFat,
        isSeedOilFree: true,
        isGlutenFree: true,
        isKeto: tmpl.carbs <= 16,
        isGrassFed: tmpl.cookingFat.includes("Ghee") || tmpl.namePrefix.includes("Paneer"),
        isDairyFree: !tmpl.namePrefix.includes("Paneer") && !tmpl.ingredients.some(i => i.includes("dahi") || i.includes("paneer") || i.includes("milk")),
        highlights: tmpl.highlights,
        ingredients: tmpl.ingredients,
        chefNotes: tmpl.chefNotes
      });
    }
  });
});

console.log('Total generated Indian dishes:', allIndianDishes.length);

// ----------------------------------------------------
// 3. WRITE TO FILES
// ----------------------------------------------------

// Write lib/indiaDishesData.ts
const indiaDishesCode = `import type { Dish } from './mockData';

export const INDIA_DISHES: Dish[] = ${JSON.stringify(allIndianDishes, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../lib/indiaDishesData.ts'), indiaDishesCode, 'utf8');
console.log('Successfully updated lib/indiaDishesData.ts with', allIndianDishes.length, 'dishes');

// Write lib/mockData.ts
const mockDataPath = path.join(__dirname, '../lib/mockData.ts');
const mockDataContent = fs.readFileSync(mockDataPath, 'utf8');

const usDishesStart = mockDataContent.indexOf('const US_DISHES: Dish[] = [');

if (usDishesStart !== -1) {
  const prefix = mockDataContent.substring(0, usDishesStart);
  const newMockData = `${prefix}const US_DISHES: Dish[] = ${JSON.stringify(allUsDishes, null, 2)};

export const INITIAL_DISHES: Dish[] = [...INDIA_DISHES, ...US_DISHES];
`;
  fs.writeFileSync(mockDataPath, newMockData, 'utf8');
  console.log('Successfully updated lib/mockData.ts with', allUsDishes.length, 'US dishes');
} else {
  console.error('Could not find marker in mockData.ts');
}
