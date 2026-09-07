import { ALL_CITIES, toCityLocation } from './locations';
import { INDIA_DISHES } from './indiaDishesData';

export { INDIA_DISHES } from './indiaDishesData';

export interface Dish {
  id: string;
  name: string;
  restaurant: string;
  restaurantAddress: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  dietTags: string[];
  cookingFat: string;
  isSeedOilFree: boolean;
  isGlutenFree: boolean;
  isKeto: boolean;
  isGrassFed: boolean;
  isDairyFree: boolean;
  highlights: string[];
  ingredients: string[];
  chefNotes: string;
  matchScore?: number;
}

export interface CityLocation {
  name: string;
  state: string;
  lat: number;
  lng: number;
  zoom: number;
  country?: 'US' | 'IN';
}

export const CITY_LOCATIONS: CityLocation[] = ALL_CITIES.map(toCityLocation);

const US_DISHES: Dish[] = [
  {
    "id": "us-austin-1",
    "name": "Baja Blackened Chicken Salad",
    "restaurant": "MODERN MARKET EATERY",
    "restaurantAddress": "3201 Bee Cave Rd, Austin, TX 78746",
    "city": "Austin",
    "coordinates": {
      "lat": 30.27319,
      "lng": -97.73878
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 297,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 430,
    "protein": 36,
    "carbs": 36,
    "fat": 16,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "11g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Baja Blackened Chicken Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Baja Blackened Chicken Salad."
  },
  {
    "id": "us-austin-2",
    "name": "Southwestern Crunch Salad",
    "restaurant": "MODERN MARKET EATERY",
    "restaurantAddress": "3201 Bee Cave Rd, Austin, TX 78746",
    "city": "Austin",
    "coordinates": {
      "lat": 30.27335,
      "lng": -97.74173
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 207,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 435,
    "protein": 35,
    "carbs": 39,
    "fat": 15,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "35g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Southwestern Crunch Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Southwestern Crunch Salad."
  },
  {
    "id": "us-austin-3",
    "name": "Chicken Tortilla Soup",
    "restaurant": "Chick-fil-A",
    "restaurantAddress": "Austin, TX",
    "city": "Austin",
    "coordinates": {
      "lat": 30.27457,
      "lng": -97.73525
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 280,
    "protein": 24,
    "carbs": 31,
    "fat": 7,
    "fiber": 17,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "24g Clean Protein",
      "Zero Seed Oils",
      "17g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Tortilla Soup",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken Tortilla Soup."
  },
  {
    "id": "us-austin-4",
    "name": "Chicken Fried Rice",
    "restaurant": "SNAP KITCHEN",
    "restaurantAddress": "4616 Triangle Ave, Austin, TX 78751",
    "city": "Austin",
    "coordinates": {
      "lat": 30.25659,
      "lng": -97.73449
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 339,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 550,
    "protein": 42,
    "carbs": 29,
    "fat": 30,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Fried Rice",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken Fried Rice."
  },
  {
    "id": "us-austin-5",
    "name": "Large Burger Bowl with Dill Relish",
    "restaurant": "SNAP KITCHEN",
    "restaurantAddress": "4616 Triangle Ave, Austin, TX 78751",
    "city": "Austin",
    "coordinates": {
      "lat": 30.25225,
      "lng": -97.73144
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 186,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 40,
    "carbs": 46,
    "fat": 31,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Large Burger Bowl with Dill Relish",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Large Burger Bowl with Dill Relish."
  },
  {
    "id": "us-austin-6",
    "name": "Spaghetti & Meatballs",
    "restaurant": "SNAP KITCHEN",
    "restaurantAddress": "4616 Triangle Ave, Austin, TX 78751",
    "city": "Austin",
    "coordinates": {
      "lat": 30.27487,
      "lng": -97.75213
    },
    "price": 19,
    "rating": 4.6,
    "reviewsCount": 194,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 500,
    "protein": 30,
    "carbs": 46,
    "fat": 22,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "30g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Spaghetti & Meatballs",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Spaghetti & Meatballs."
  },
  {
    "id": "us-austin-7",
    "name": "Chicken Kabob Bowl with Saffron Rice",
    "restaurant": "SNAP KITCHEN",
    "restaurantAddress": "4616 Triangle Ave, Austin, TX 78751",
    "city": "Austin",
    "coordinates": {
      "lat": 30.26817,
      "lng": -97.74051
    },
    "price": 14,
    "rating": 4.8,
    "reviewsCount": 295,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 27,
    "carbs": 33,
    "fat": 20,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "27g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Kabob Bowl with Saffron Rice",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken Kabob Bowl with Saffron Rice."
  },
  {
    "id": "us-austin-8",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "222 West Ave, Austin, TX 78701",
    "city": "Austin",
    "coordinates": {
      "lat": 30.27859,
      "lng": -97.72869
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 172,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-austin-9",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "222 West Ave, Austin, TX 78701",
    "city": "Austin",
    "coordinates": {
      "lat": 30.27265,
      "lng": -97.73091
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 84,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-austin-10",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "TRUE FOOD KITCHEN",
    "restaurantAddress": "222 West Ave, Austin, TX 78701",
    "city": "Austin",
    "coordinates": {
      "lat": 30.26638,
      "lng": -97.72851
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 287,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-austin-11",
    "name": "Turkey Burger",
    "restaurant": "TRUE FOOD KITCHEN",
    "restaurantAddress": "222 West Ave, Austin, TX 78701",
    "city": "Austin",
    "coordinates": {
      "lat": 30.2707,
      "lng": -97.74788
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 329,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-austin-78701-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Downtown)",
    "restaurantAddress": "222 West Ave, Austin, TX 78701",
    "city": "Austin",
    "coordinates": {
      "lat": 30.26453,
      "lng": -97.74492
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 267,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-austin-78751-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (The Triangle)",
    "restaurantAddress": "4616 Triangle Ave, Austin, TX 78751",
    "city": "Austin",
    "coordinates": {
      "lat": 30.25247,
      "lng": -97.75655
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 82,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-austin-78746-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (West Lake Hills)",
    "restaurantAddress": "3201 Bee Cave Rd, Austin, TX 78746",
    "city": "Austin",
    "coordinates": {
      "lat": 30.25322,
      "lng": -97.73062
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 184,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-austin-78746-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (West Lake Hills)",
    "restaurantAddress": "3201 Bee Cave Rd, Austin, TX 78746",
    "city": "Austin",
    "coordinates": {
      "lat": 30.25282,
      "lng": -97.75697
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 183,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-austin-78746-3",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (West Lake Hills)",
    "restaurantAddress": "3201 Bee Cave Rd, Austin, TX 78746",
    "city": "Austin",
    "coordinates": {
      "lat": 30.2714,
      "lng": -97.74086
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 120,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-austin-78704-1",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (South Congress)",
    "restaurantAddress": "1603 S Congress Ave, Austin, TX 78704",
    "city": "Austin",
    "coordinates": {
      "lat": 30.2748,
      "lng": -97.72857
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 204,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-austin-78704-2",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (South Congress)",
    "restaurantAddress": "1603 S Congress Ave, Austin, TX 78704",
    "city": "Austin",
    "coordinates": {
      "lat": 30.26054,
      "lng": -97.752
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-austin-78704-3",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (South Congress)",
    "restaurantAddress": "1603 S Congress Ave, Austin, TX 78704",
    "city": "Austin",
    "coordinates": {
      "lat": 30.27766,
      "lng": -97.74806
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 131,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-austin-78704-4",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (South Congress)",
    "restaurantAddress": "1603 S Congress Ave, Austin, TX 78704",
    "city": "Austin",
    "coordinates": {
      "lat": 30.27147,
      "lng": -97.73235
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 256,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-austin-78704-5",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (South Congress)",
    "restaurantAddress": "1603 S Congress Ave, Austin, TX 78704",
    "city": "Austin",
    "coordinates": {
      "lat": 30.25615,
      "lng": -97.73971
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 247,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-new-york-22",
    "name": "Parm Crunch Salad",
    "restaurant": "Just Salad (Midtown East)",
    "restaurantAddress": "152 E 46th St, New York, NY 10017",
    "city": "New York",
    "coordinates": {
      "lat": 40.71709,
      "lng": -74.00634
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 125,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 50,
    "carbs": 33,
    "fat": 23,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "50g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Parm Crunch Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Crunchy parmesan salad with chicken."
  },
  {
    "id": "us-new-york-23",
    "name": "Rethink Food Bowl",
    "restaurant": "Just Salad (Midtown East)",
    "restaurantAddress": "152 E 46th St, New York, NY 10017",
    "city": "New York",
    "coordinates": {
      "lat": 40.70046,
      "lng": -74.00847
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 225,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 37,
    "carbs": 40,
    "fat": 24,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Rethink Food Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Warm grain bowl with roasted vegetables and protein."
  },
  {
    "id": "us-new-york-24",
    "name": "Chicken Caesar Salad",
    "restaurant": "Just Salad (Midtown East)",
    "restaurantAddress": "152 E 46th St, New York, NY 10017",
    "city": "New York",
    "coordinates": {
      "lat": 40.70512,
      "lng": -73.99808
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 328,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 27,
    "fat": 18,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Caesar Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Romaine caesar salad with grilled chicken and parmesan."
  },
  {
    "id": "us-new-york-25",
    "name": "Buffalo Chicken Salad",
    "restaurant": "Just Salad (Midtown East)",
    "restaurantAddress": "152 E 46th St, New York, NY 10017",
    "city": "New York",
    "coordinates": {
      "lat": 40.70894,
      "lng": -73.99455
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 342,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 35,
    "carbs": 19,
    "fat": 27,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "35g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Buffalo Chicken Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Buffalo chicken salad with crunchy toppings."
  },
  {
    "id": "us-new-york-26",
    "name": "Chicken Fajita Salad",
    "restaurant": "Just Salad (Midtown East)",
    "restaurantAddress": "152 E 46th St, New York, NY 10017",
    "city": "New York",
    "coordinates": {
      "lat": 40.71652,
      "lng": -73.9942
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 251,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 610,
    "protein": 32,
    "carbs": 48,
    "fat": 32,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Fajita Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Fajita-style chicken salad with peppers and beans."
  },
  {
    "id": "us-new-york-27",
    "name": "Classic Cobb Salad",
    "restaurant": "Chopt Creative Salad Co.",
    "restaurantAddress": "24 E 17th St, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.69945,
      "lng": -73.9926
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 234,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 60,
    "carbs": 17,
    "fat": 32,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "60g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Classic Cobb Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Classic Cobb Salad."
  },
  {
    "id": "us-new-york-28",
    "name": "Kale Caesar with Grilled Chicken",
    "restaurant": "Chopt Creative Salad Co.",
    "restaurantAddress": "24 E 17th St, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.70933,
      "lng": -74.00976
    },
    "price": 16,
    "rating": 4.6,
    "reviewsCount": 235,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 430,
    "protein": 39,
    "carbs": 27,
    "fat": 18,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "39g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Kale Caesar with Grilled Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Kale Caesar with Grilled Chicken."
  },
  {
    "id": "us-new-york-29",
    "name": "Mexican Caesar with Grilled Chicken",
    "restaurant": "Chopt Creative Salad Co.",
    "restaurantAddress": "24 E 17th St, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.71266,
      "lng": -74.02051
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 330,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 395,
    "protein": 36,
    "carbs": 25,
    "fat": 17,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Mexican Caesar with Grilled Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Mexican Caesar with Grilled Chicken."
  },
  {
    "id": "us-new-york-30",
    "name": "Southwest Steak Salad",
    "restaurant": "Chopt Creative Salad Co.",
    "restaurantAddress": "24 E 17th St, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.70999,
      "lng": -74.00023
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 329,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 445,
    "protein": 32,
    "carbs": 54,
    "fat": 11,
    "fiber": 15,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "15g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Southwest Steak Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Southwest Steak Salad."
  },
  {
    "id": "us-new-york-31",
    "name": "Salmon Avocado Bowl",
    "restaurant": "Chopt Creative Salad Co.",
    "restaurantAddress": "24 E 17th St, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.71761,
      "lng": -74.00058
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 246,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 625,
    "protein": 27,
    "carbs": 62,
    "fat": 30,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "27g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Salmon Avocado Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Salmon Avocado Bowl."
  },
  {
    "id": "us-new-york-32",
    "name": "Jumbo Lobster Roll (6oz)",
    "restaurant": "Luke's Lobster",
    "restaurantAddress": "124 University Pl, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.69795,
      "lng": -73.9992
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 286,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 37,
    "carbs": 30,
    "fat": 12,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Jumbo Lobster Roll (6oz)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Jumbo Lobster Roll (6oz)"
  },
  {
    "id": "us-new-york-33",
    "name": "Beef Shawarma Quinoa Bowl",
    "restaurant": "NAYA",
    "restaurantAddress": "54 W 56th St, New York, NY 10019",
    "city": "New York",
    "coordinates": {
      "lat": 40.71429,
      "lng": -74.01731
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 216,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 45,
    "carbs": 30,
    "fat": 38,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Beef Shawarma Quinoa Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Beef Shawarma Quinoa Bowl"
  },
  {
    "id": "us-new-york-34",
    "name": "Classic Cobb Salad",
    "restaurant": "Chopt Creative Salad Co. (Grand Central)",
    "restaurantAddress": "60 E 42nd St, New York, NY 10165",
    "city": "New York",
    "coordinates": {
      "lat": 40.71382,
      "lng": -73.99404
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 337,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 56,
    "carbs": 30,
    "fat": 28,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "56g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Classic Cobb Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Classic Cobb Salad"
  },
  {
    "id": "us-new-york-35",
    "name": "Salmon Goddess Plate (undressed)",
    "restaurant": "Avo",
    "restaurantAddress": "245 5th Ave, New York, NY 10016",
    "city": "New York",
    "coordinates": {
      "lat": 40.72526,
      "lng": -74.01918
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 119,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 630,
    "protein": 33,
    "carbs": 30,
    "fat": 42,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "33g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Salmon Goddess Plate (undressed)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Salmon Goddess Plate (undressed)"
  },
  {
    "id": "us-new-york-36",
    "name": "Lean Beef Shawarma Bowl (beef shawarma + seasonal greens + feta + cucumber yogurt)",
    "restaurant": "NAYA",
    "restaurantAddress": "83 University Pl, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.70433,
      "lng": -74.02067
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 161,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 414,
    "protein": 40,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Lean Beef Shawarma Bowl (beef shawarma + seasonal greens + feta + cucumber yogurt)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Lean Beef Shawarma Bowl (beef shawarma + seasonal greens + feta + cucumber yogurt)"
  },
  {
    "id": "us-new-york-37",
    "name": "Kale Caesar with Grilled Chicken",
    "restaurant": "Chopt Creative Salad Co. (Grand Central)",
    "restaurantAddress": "60 E 42nd St, New York, NY 10165",
    "city": "New York",
    "coordinates": {
      "lat": 40.71468,
      "lng": -74.00949
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 318,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 35,
    "carbs": 30,
    "fat": 18,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "35g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Kale Caesar with Grilled Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Kale Caesar with Grilled Chicken"
  },
  {
    "id": "us-new-york-38",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "100 Delancey St, New York, NY 10002",
    "city": "New York",
    "coordinates": {
      "lat": 40.71668,
      "lng": -74.01436
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 335,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled harissa honey chicken over brown rice with roasted eggplant and tzatziki on Delancey LES NYC. Mediterranean macros for the downtown NYC community."
  },
  {
    "id": "us-new-york-39",
    "name": "Jumbo Crab Roll (6oz)",
    "restaurant": "Luke's Lobster",
    "restaurantAddress": "124 University Pl, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.71808,
      "lng": -73.99927
    },
    "price": 22,
    "rating": 4.9,
    "reviewsCount": 75,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 390,
    "protein": 32,
    "carbs": 30,
    "fat": 16,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Jumbo Crab Roll (6oz)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Jumbo Crab Roll (6oz)"
  },
  {
    "id": "us-new-york-40",
    "name": "Greek Salad Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "143 4th Ave, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.72332,
      "lng": -73.99876
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 168,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 585,
    "protein": 37,
    "carbs": 30,
    "fat": 35,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Greek Salad Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Greek Salad Bowl"
  },
  {
    "id": "us-new-york-41",
    "name": "Steak + Harissa Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "143 4th Ave, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.70811,
      "lng": -74.00158
    },
    "price": 17,
    "rating": 4.9,
    "reviewsCount": 281,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 615,
    "protein": 36,
    "carbs": 30,
    "fat": 39,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Steak + Harissa Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Steak + Harissa Bowl"
  },
  {
    "id": "us-new-york-42",
    "name": "Double Chicken Bowl (double chicken + black beans + fajita veggies + tomato salsa + cheese + lettuce)",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "9 W 42nd St, New York, NY 10036",
    "city": "New York",
    "coordinates": {
      "lat": 40.72437,
      "lng": -74.01101
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 68,
    "carbs": 30,
    "fat": 19,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Bowl (double chicken + black beans + fajita veggies + tomato salsa + cheese + lettuce)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double Chicken Bowl (double chicken + black beans + fajita veggies + tomato salsa + cheese + lettuce)"
  },
  {
    "id": "us-new-york-43",
    "name": "High-Protein–High-Fiber Bowl (adobo chicken + light brown rice + black beans + fajita veggies + roasted chili-corn salsa + romaine)",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "9 W 42nd St, New York, NY 10036",
    "city": "New York",
    "coordinates": {
      "lat": 40.70136,
      "lng": -74.00187
    },
    "price": 14,
    "rating": 4.6,
    "reviewsCount": 211,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 545,
    "protein": 46,
    "carbs": 30,
    "fat": 27,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "High-Protein–High-Fiber Bowl (adobo chicken + light brown rice + black beans + fajita veggies + roasted chili-corn salsa + romaine)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "High-Protein–High-Fiber Bowl (adobo chicken + light brown rice + black beans + fajita veggies + roasted chili-corn salsa + romaine)"
  },
  {
    "id": "us-new-york-44",
    "name": "Barbacoa Bowl",
    "restaurant": "Avo",
    "restaurantAddress": "245 5th Ave, New York, NY 10016",
    "city": "New York",
    "coordinates": {
      "lat": 40.72065,
      "lng": -74.00358
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 276,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 40,
    "carbs": 30,
    "fat": 36,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Barbacoa Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Barbacoa Bowl"
  },
  {
    "id": "us-new-york-45",
    "name": "Steak Mezze Salad",
    "restaurant": "CAVA",
    "restaurantAddress": "345 Adams St, Brooklyn, NY 11201",
    "city": "New York",
    "coordinates": {
      "lat": 40.69999,
      "lng": -74.01227
    },
    "price": 14,
    "rating": 4.6,
    "reviewsCount": 347,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 495,
    "protein": 33,
    "carbs": 30,
    "fat": 27,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "33g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Steak Mezze Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Steak Mezze Salad"
  },
  {
    "id": "us-new-york-46",
    "name": "Spicy Chicken Caesar Wrap",
    "restaurant": "Just Salad",
    "restaurantAddress": "252 7th Ave, Brooklyn, NY 11215",
    "city": "New York",
    "coordinates": {
      "lat": 40.69937,
      "lng": -73.99409
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 114,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 51,
    "carbs": 30,
    "fat": 26,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Spicy Chicken Caesar Wrap",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Spicy Chicken Caesar Wrap"
  },
  {
    "id": "us-new-york-47",
    "name": "Buffalo Chicken Wrap",
    "restaurant": "Just Salad",
    "restaurantAddress": "252 7th Ave, Brooklyn, NY 11215",
    "city": "New York",
    "coordinates": {
      "lat": 40.72314,
      "lng": -74.00232
    },
    "price": 21,
    "rating": 4.6,
    "reviewsCount": 110,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 550,
    "protein": 44,
    "carbs": 30,
    "fat": 28,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Buffalo Chicken Wrap",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Buffalo Chicken Wrap"
  },
  {
    "id": "us-new-york-48",
    "name": "Cilantro Lime Chicken Salad",
    "restaurant": "Just Salad",
    "restaurantAddress": "252 7th Ave, Brooklyn, NY 11215",
    "city": "New York",
    "coordinates": {
      "lat": 40.71687,
      "lng": -74.00958
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 274,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 590,
    "protein": 34,
    "carbs": 30,
    "fat": 37,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Cilantro Lime Chicken Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Cilantro Lime Chicken Salad"
  },
  {
    "id": "us-new-york-49",
    "name": "Chicken Shawarma Roll (Whole Wheat Pita)",
    "restaurant": "NAYA",
    "restaurantAddress": "83 University Pl, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.70524,
      "lng": -73.99234
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 117,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 615,
    "protein": 39,
    "carbs": 53,
    "fat": 27,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "39g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Shawarma Roll (Whole Wheat Pita)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Whole wheat pita, chicken shawarma, romaine, tomatoes, cucumbers, sumac onions, toum, lemon tahini"
  },
  {
    "id": "us-new-york-50",
    "name": "Kafta Lamb Kebab Bowl",
    "restaurant": "NAYA",
    "restaurantAddress": "83 University Pl, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.71985,
      "lng": -74.00585
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 214,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 605,
    "protein": 28,
    "carbs": 66,
    "fat": 25,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Kafta Lamb Kebab Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Vermicelli rice, kafta lamb kebab, romaine, tomatoes, cucumbers, sumac onions, baba ghannouj, lemon tahini"
  },
  {
    "id": "us-new-york-51",
    "name": "Chicken Kebab Greens Bowl",
    "restaurant": "NAYA",
    "restaurantAddress": "83 University Pl, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.70687,
      "lng": -74.02091
    },
    "price": 16,
    "rating": 4.6,
    "reviewsCount": 193,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 320,
    "protein": 27,
    "carbs": 18,
    "fat": 16,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "27g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Kebab Greens Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Seasonal greens, chicken kebab, tomatoes, cucumbers, sumac onions, cucumber yogurt, lemon tahini"
  },
  {
    "id": "us-new-york-52",
    "name": "Roasted Salmon",
    "restaurant": "The Smith",
    "restaurantAddress": "956 2nd Ave, New York, NY 10022",
    "city": "New York",
    "coordinates": {
      "lat": 40.71051,
      "lng": -74.0015
    },
    "price": 17,
    "rating": 4.9,
    "reviewsCount": 194,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 45,
    "carbs": 28,
    "fat": 36,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Roasted Salmon",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "roasted corn, snap peas, scallion, tomato vinaigrette, oregano breadcrumbs, mint"
  },
  {
    "id": "us-new-york-53",
    "name": "Grilled Branzino",
    "restaurant": "The Smith",
    "restaurantAddress": "956 2nd Ave, New York, NY 10022",
    "city": "New York",
    "coordinates": {
      "lat": 40.71105,
      "lng": -73.999
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 299,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 48,
    "carbs": 45,
    "fat": 30,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Branzino",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "pearl couscous, zucchini, tomatoes, olives, capers, lemon"
  },
  {
    "id": "us-new-york-54",
    "name": "Light Chicken Bowl (white rice, fajita veggies, tomatillo-green chili salsa, tomato salsa, lettuce)",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "9 W 42nd St, New York, NY 10036",
    "city": "New York",
    "coordinates": {
      "lat": 40.70945,
      "lng": -74.01796
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 455,
    "protein": 37,
    "carbs": 54,
    "fat": 10,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Light Chicken Bowl (white rice, fajita veggies, tomatillo-green chili salsa, tomato salsa, lettuce)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Lowest-calorie build — no beans, no heavy toppings; great for calorie-conscious meals. Cutting the fat: only the chicken (7g) and the white rice (4g) carry any. Ask for light rice and it is 350 cal, 35g protein, 34g carbs, 9g fat; hold the rice entirely and it is 245 cal, 33g protein, 14g carbs, 7g fat. Either way it clears 10g fat without touching the chicken. Figures are Chipotle's own per-ingredient nutrition summed for each build."
  },
  {
    "id": "us-new-york-55",
    "name": "Steak Burrito Bowl (brown rice, black beans, fajita veggies, tomatillo-green chili salsa, cheese)",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "9 W 42nd St, New York, NY 10036",
    "city": "New York",
    "coordinates": {
      "lat": 40.71851,
      "lng": -74.00866
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 355,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 635,
    "protein": 40,
    "carbs": 69,
    "fat": 22,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "11g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Steak Burrito Bowl (brown rice, black beans, fajita veggies, tomatillo-green chili salsa, cheese)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Lean steak bowl with extra fiber from brown rice and black beans; cheese adds richness without excess calories. Cutting the fat: the Monterey Jack is 8g and the brown rice another 6g. Hold the cheese and it is 525 cal, 34g protein, 68g carbs, 13.5g fat; hold the cheese and the rice and it is 315 cal, 30g protein, 32g carbs, 7.5g fat — under 10g with the steak intact. Figures are Chipotle's own per-ingredient nutrition summed for each build."
  },
  {
    "id": "us-new-york-56",
    "name": "Double Chicken Bowl (double chicken + black beans + fajita veggies + tomato salsa + cheese + lettuce)",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "9 W 42nd St, New York, NY 10036",
    "city": "New York",
    "coordinates": {
      "lat": 40.69924,
      "lng": -74.00088
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 216,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 68,
    "carbs": 30,
    "fat": 19,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Bowl (double chicken + black beans + fajita veggies + tomato salsa + cheese + lettuce)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (560 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-new-york-57",
    "name": "Chicken Bowl (Double Protein, No Rice)",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "2500 Central Park Ave, Yonkers, NY 10710",
    "city": "New York",
    "coordinates": {
      "lat": 40.69984,
      "lng": -73.99479
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 204,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 390,
    "protein": 64,
    "carbs": 28,
    "fat": 2,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Zero Seed Oils",
      "12g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Bowl (Double Protein, No Rice)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (390 kcal, 64g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-new-york-58",
    "name": "Classic Cobb Salad",
    "restaurant": "Chopt Creative Salad Co.",
    "restaurantAddress": "24 E 17th St, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.72069,
      "lng": -74.01678
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 94,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 60,
    "carbs": 17,
    "fat": 32,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "60g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Classic Cobb Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (600 kcal, 60g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-new-york-59",
    "name": "Spicy Chicken Caesar Wrap",
    "restaurant": "Just Salad",
    "restaurantAddress": "252 7th Ave, Brooklyn, NY 11215",
    "city": "New York",
    "coordinates": {
      "lat": 40.70397,
      "lng": -73.99176
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 65,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 51,
    "carbs": 30,
    "fat": 26,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Spicy Chicken Caesar Wrap",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (560 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-new-york-60",
    "name": "Parm Crunch Salad",
    "restaurant": "Just Salad (Midtown East)",
    "restaurantAddress": "152 E 46th St, New York, NY 10017",
    "city": "New York",
    "coordinates": {
      "lat": 40.70836,
      "lng": -74.01979
    },
    "price": 21,
    "rating": 4.6,
    "reviewsCount": 350,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 50,
    "carbs": 33,
    "fat": 23,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "50g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Parm Crunch Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 50g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-new-york-10014-1",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (West Village)",
    "restaurantAddress": "542 Hudson St, New York, NY 10014",
    "city": "New York",
    "coordinates": {
      "lat": 40.7255,
      "lng": -73.99956
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-new-york-10014-2",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (West Village)",
    "restaurantAddress": "542 Hudson St, New York, NY 10014",
    "city": "New York",
    "coordinates": {
      "lat": 40.72121,
      "lng": -73.99188
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 155,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-new-york-10014-3",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (West Village)",
    "restaurantAddress": "542 Hudson St, New York, NY 10014",
    "city": "New York",
    "coordinates": {
      "lat": 40.71999,
      "lng": -74.00008
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 122,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-new-york-10014-4",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (West Village)",
    "restaurantAddress": "542 Hudson St, New York, NY 10014",
    "city": "New York",
    "coordinates": {
      "lat": 40.71176,
      "lng": -73.99707
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 180,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-new-york-10014-5",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (West Village)",
    "restaurantAddress": "542 Hudson St, New York, NY 10014",
    "city": "New York",
    "coordinates": {
      "lat": 40.72746,
      "lng": -73.99901
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-new-york-11215-1",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Park Slope Brooklyn)",
    "restaurantAddress": "284 5th Ave, New York, NY 11215",
    "city": "New York",
    "coordinates": {
      "lat": 40.71047,
      "lng": -74.00024
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 238,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-los-angeles-67",
    "name": "Blackened Salmon Plate",
    "restaurant": "Urban Plates",
    "restaurantAddress": "Pasadena area (check urbanplates.com for exact address)",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04439,
      "lng": -118.24741
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 72,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 36,
    "carbs": 42,
    "fat": 34,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Blackened Salmon Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Blackened salmon (28g), roasted marble potatoes, herb green beans"
  },
  {
    "id": "us-los-angeles-68",
    "name": "Double Chicken Avocado Pollo Fit Bowl",
    "restaurant": "El Pollo Loco",
    "restaurantAddress": "5319 Sunset Blvd, Los Angeles, CA 90027",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04453,
      "lng": -118.24954
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 131,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 500,
    "protein": 58,
    "carbs": 14,
    "fat": 24,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Avocado Pollo Fit Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double chicken avocado Pollo Fit Bowl."
  },
  {
    "id": "us-los-angeles-69",
    "name": "Double Chicken Street Corn Pollo Fit Bowl",
    "restaurant": "El Pollo Loco",
    "restaurantAddress": "5319 Sunset Blvd, Los Angeles, CA 90027",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04229,
      "lng": -118.22921
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 79,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 54,
    "carbs": 18,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Street Corn Pollo Fit Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double chicken street corn Pollo Fit Bowl."
  },
  {
    "id": "us-los-angeles-70",
    "name": "Chicken & Shrimp Avocado Pollo Fit Bowl",
    "restaurant": "El Pollo Loco",
    "restaurantAddress": "5319 Sunset Blvd, Los Angeles, CA 90027",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05317,
      "lng": -118.25762
    },
    "price": 17,
    "rating": 4.9,
    "reviewsCount": 88,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 45,
    "carbs": 16,
    "fat": 27,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken & Shrimp Avocado Pollo Fit Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken and shrimp avocado Pollo Fit Bowl."
  },
  {
    "id": "us-los-angeles-71",
    "name": "Street Corn Chicken Pollo Bowl",
    "restaurant": "El Pollo Loco",
    "restaurantAddress": "5319 Sunset Blvd, Los Angeles, CA 90027",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06558,
      "lng": -118.23253
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 264,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 42,
    "carbs": 84,
    "fat": 11,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Street Corn Chicken Pollo Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Street corn chicken Pollo Bowl."
  },
  {
    "id": "us-los-angeles-72",
    "name": "Tacos al Carbón (3)",
    "restaurant": "El Pollo Loco",
    "restaurantAddress": "5319 Sunset Blvd, Los Angeles, CA 90027",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05153,
      "lng": -118.23418
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 277,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 46,
    "carbs": 50,
    "fat": 14,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Tacos al Carbón (3)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Three tacos al carbon."
  },
  {
    "id": "us-los-angeles-73",
    "name": "Shredded Chicken & Cheese Pollo Bowl",
    "restaurant": "El Pollo Loco",
    "restaurantAddress": "5319 Sunset Blvd, Los Angeles, CA 90027",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05699,
      "lng": -118.24662
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 273,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 590,
    "protein": 34,
    "carbs": 83,
    "fat": 14,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Shredded Chicken & Cheese Pollo Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Shredded chicken and cheese Pollo Bowl."
  },
  {
    "id": "us-los-angeles-74",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "168 W Colorado Blvd, Pasadena, CA 91105",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.042,
      "lng": -118.23078
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 71,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-los-angeles-75",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "168 W Colorado Blvd, Pasadena, CA 91105",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05115,
      "lng": -118.2541
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 216,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-los-angeles-76",
    "name": "Herb-Roasted Turkey Sandwich",
    "restaurant": "Mendocino Farms",
    "restaurantAddress": "8717 W 3rd St, West Hollywood, CA 90048",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04391,
      "lng": -118.23553
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 221,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 40,
    "carbs": 36,
    "fat": 20,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Herb-Roasted Turkey Sandwich",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Herb-roasted turkey with avocado spread, arugula, and Dijon on rustic whole-grain bread near Cedars-Sinai West Hollywood. 40g protein."
  },
  {
    "id": "us-los-angeles-77",
    "name": "Sorrel Pesto Rice Bowl",
    "restaurant": "Sqirl",
    "restaurantAddress": "720 N Virgil Ave, Los Angeles, CA 90029",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.0577,
      "lng": -118.24234
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 147,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 430,
    "protein": 32,
    "carbs": 44,
    "fat": 14,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sorrel Pesto Rice Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "House-made sorrel pesto over brown rice with a farm egg, lacto-fermented hot sauce, and fresh ricotta at Sqirl Silver Lake. 32g protein, 3g sugar."
  },
  {
    "id": "us-los-angeles-78",
    "name": "Grain Bowl + Fried Egg",
    "restaurant": "Sqirl",
    "restaurantAddress": "720 N Virgil Ave, Los Angeles, CA 90029",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04452,
      "lng": -118.23052
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 269,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 445,
    "protein": 34,
    "carbs": 40,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grain Bowl + Fried Egg",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Ancient grain bowl with house-cured salmon, fried farm egg, and seasonal pickles at Sqirl. 34g protein — the Silver Lake brunch staple for macro-conscious diners."
  },
  {
    "id": "us-los-angeles-79",
    "name": "Double Protein Avocado Pollo Fit Bowl",
    "restaurant": "El Pollo Loco",
    "restaurantAddress": "5319 Sunset Blvd, Los Angeles, CA 90027",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06329,
      "lng": -118.24785
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 146,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 390,
    "protein": 51,
    "carbs": 15,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Protein Avocado Pollo Fit Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double fire-grilled chicken, avocado, pico de gallo, and cilantro on a bed of greens. From the Pollo Fit menu — 51g protein at just 390 calories with only 15g carbs. The best macro efficiency item at El Pollo Loco."
  },
  {
    "id": "us-los-angeles-80",
    "name": "Original Pollo Bowl",
    "restaurant": "El Pollo Loco",
    "restaurantAddress": "5319 Sunset Blvd, Los Angeles, CA 90027",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.03994,
      "lng": -118.23404
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 180,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 41,
    "carbs": 83,
    "fat": 9,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "41g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Original Pollo Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Fire-grilled chicken, cilantro rice, pinto beans, avocado salsa, and pico. 41g protein with just 3g sugar and 10g fat — one of the lowest-fat high-protein bowls in LA fast casual."
  },
  {
    "id": "us-los-angeles-81",
    "name": "Double Chicken Avocado Salad",
    "restaurant": "El Pollo Loco",
    "restaurantAddress": "5319 Sunset Blvd, Los Angeles, CA 90027",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06159,
      "lng": -118.2423
    },
    "price": 14,
    "rating": 4.7,
    "reviewsCount": 211,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 360,
    "protein": 50,
    "carbs": 13,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "50g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Avocado Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double fire-grilled chicken, avocado, romaine, tomatoes, and cucumber. Order without dressing for just 360 calories and 50g protein. One of the best low-carb high-protein salads in LA fast casual."
  },
  {
    "id": "us-los-angeles-82",
    "name": "Protein Power Bowl",
    "restaurant": "The Hive Healthy Cafe",
    "restaurantAddress": "800 S Broadway, Los Angeles, CA 90014",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05123,
      "lng": -118.2377
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 155,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 70,
    "carbs": 38,
    "fat": 21,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "70g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Power Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Pulled chicken, eggs, avocado, sea salt edamame, coconut ginger quinoa, wilted kale, cucumber herb salad, tomato salad, and lemon herb tahini. The menu literally labels this 70g protein — the highest-protein bowl in LA."
  },
  {
    "id": "us-los-angeles-83",
    "name": "Chicken Pesto Bowl",
    "restaurant": "The Hive Healthy Cafe",
    "restaurantAddress": "800 S Broadway, Los Angeles, CA 90014",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06239,
      "lng": -118.23758
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 222,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 68,
    "carbs": 28,
    "fat": 17,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Pesto Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Pulled chicken, parmesan, avocado, chili garlic broccolini, spinach, pistachio, tomato salad, chia seeds, hemp seeds, lemon herb farro, and superfood pesto. 68g protein."
  },
  {
    "id": "us-los-angeles-84",
    "name": "Chicken Athena Bowl",
    "restaurant": "The Hive Healthy Cafe",
    "restaurantAddress": "800 S Broadway, Los Angeles, CA 90014",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06063,
      "lng": -118.25021
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 265,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 65,
    "carbs": 30,
    "fat": 14,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "65g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Athena Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Pulled chicken, whipped hummus, cucumber herb salad, seasonal greens, tomato salad, fermented beets, cilantro, goat cheese, shredded almonds, wild rice, and balsamic vinaigrette. 65g protein."
  },
  {
    "id": "us-los-angeles-85",
    "name": "Tuna Protein Crunch Bowl",
    "restaurant": "The Hive Healthy Cafe",
    "restaurantAddress": "800 S Broadway, Los Angeles, CA 90014",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.03942,
      "lng": -118.24615
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 170,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 50,
    "carbs": 32,
    "fat": 18,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "50g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Tuna Protein Crunch Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Tuna conserva, avocado, crumbled feta, sea salt edamame, capers, crunchy chickpeas, watermelon radish, chia seeds, hemp seeds, lemon herb farro, and balsamic vinaigrette. 50g protein."
  },
  {
    "id": "us-los-angeles-86",
    "name": "Fresh Catch Salmon Bowl",
    "restaurant": "The Hive Healthy Cafe",
    "restaurantAddress": "800 S Broadway, Los Angeles, CA 90014",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04339,
      "lng": -118.2392
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 258,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 38,
    "carbs": 26,
    "fat": 25,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Fresh Catch Salmon Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Salmon, spinach, wilted kale, avocado, tomato salad, seaweed crisp, moroccan slaw, fermented beets, shredded almonds, wild rice, and sesame ginger dressing. 38g protein from sustainably sourced salmon."
  },
  {
    "id": "us-los-angeles-87",
    "name": "Hummus and Lamb Plate",
    "restaurant": "Dune",
    "restaurantAddress": "9 Dudley Ave, Venice, CA 90291",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04967,
      "lng": -118.23201
    },
    "price": 17,
    "rating": 4.9,
    "reviewsCount": 78,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 38,
    "carbs": 34,
    "fat": 26,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Hummus and Lamb Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "House-made organic hummus with spiced ground lamb, warm pita, and seasonal vegetables. A Venice staple — 38g protein with a clean Mediterranean flavor profile."
  },
  {
    "id": "us-los-angeles-88",
    "name": "Grilled Chicken Sandwich",
    "restaurant": "Dune",
    "restaurantAddress": "9 Dudley Ave, Venice, CA 90291",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04605,
      "lng": -118.23987
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 186,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 36,
    "carbs": 38,
    "fat": 18,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Sandwich",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Organic grilled chicken on warm pita with hummus, herbs, seasonal vegetables, and tahini. Simple, clean Mediterranean protein at the Venice beach boardwalk."
  },
  {
    "id": "us-los-angeles-89",
    "name": "Ginger Miso Crunch Salad with Steak",
    "restaurant": "Flower Child",
    "restaurantAddress": "1332 2nd St, Santa Monica, CA 90401",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04798,
      "lng": -118.2402
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 311,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 476,
    "protein": 36,
    "carbs": 29,
    "fat": 24,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Ginger Miso Crunch Salad with Steak",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Ginger miso salad with grass-fed steak added. A macro-tracker favorite — 36g protein, 29g carbs, and bold miso flavor. Order with full dressing for this macro breakdown."
  },
  {
    "id": "us-los-angeles-90",
    "name": "Avocado Caesar with Chicken",
    "restaurant": "Flower Child",
    "restaurantAddress": "1332 2nd St, Santa Monica, CA 90401",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05114,
      "lng": -118.23996
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 145,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 357,
    "protein": 33,
    "carbs": 9,
    "fat": 21,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "33g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Avocado Caesar with Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Avocado Caesar salad, dressing on side, add grilled chicken, no breadcrumbs. Only 357 calories with 33g protein — one of the most efficient macro meals in Santa Monica."
  },
  {
    "id": "us-los-angeles-91",
    "name": "Chopped Vegetable Salad with Salmon",
    "restaurant": "Flower Child",
    "restaurantAddress": "1332 2nd St, Santa Monica, CA 90401",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05053,
      "lng": -118.23521
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 334,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 29,
    "carbs": 23,
    "fat": 29,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "29g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chopped Vegetable Salad with Salmon",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chopped vegetable salad with salmon added, full dressing. Clean omega-3 rich meal at under 500 calories."
  },
  {
    "id": "us-los-angeles-92",
    "name": "Chicken Protein Bowl",
    "restaurant": "Kreation Kafe",
    "restaurantAddress": "1023 Montana Ave, Santa Monica, CA 90403",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.0534,
      "lng": -118.24848
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 192,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 40,
    "carbs": 38,
    "fat": 20,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Protein Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Organic grilled chicken, quinoa, roasted vegetables, avocado, and house tahini dressing. A clean protein bowl on Montana Ave in Santa Monica."
  },
  {
    "id": "us-los-angeles-93",
    "name": "Turkey Avocado Wrap",
    "restaurant": "Kreation Kafe",
    "restaurantAddress": "1023 Montana Ave, Santa Monica, CA 90403",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05771,
      "lng": -118.25258
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 62,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 34,
    "carbs": 32,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Avocado Wrap",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Organic turkey, avocado, mixed greens, tomato, and house mustard in a whole-grain wrap. A Westside lunch staple at 34g protein under 500 calories."
  },
  {
    "id": "us-los-angeles-94",
    "name": "High Protein-High Fiber Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "Multiple Pasadena locations",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05546,
      "lng": -118.23637
    },
    "price": 14,
    "rating": 4.7,
    "reviewsCount": 119,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 40,
    "fat": 22,
    "fiber": 14,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Zero Seed Oils",
      "14g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "High Protein-High Fiber Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Adobo Chicken, fajita veggies, black beans, fresh tomato salsa, romaine lettuce"
  },
  {
    "id": "us-los-angeles-95",
    "name": "High Protein-Low Calorie Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "Multiple Pasadena locations",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04845,
      "lng": -118.24099
    },
    "price": 16,
    "rating": 4.6,
    "reviewsCount": 235,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 36,
    "carbs": 35,
    "fat": 21,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "High Protein-Low Calorie Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Adobo Chicken, supergreens lettuce blend, black beans, fresh tomato salsa, guacamole"
  },
  {
    "id": "us-los-angeles-96",
    "name": "Steak Bowl (Double Meat)",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "Multiple Pasadena locations",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04085,
      "lng": -118.24764
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 103,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 650,
    "protein": 42,
    "carbs": 52,
    "fat": 30,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Steak Bowl (Double Meat)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double steak, brown rice, black beans, cheese"
  },
  {
    "id": "us-los-angeles-97",
    "name": "Tahini Caesar Bowl (with Grilled Chicken)",
    "restaurant": "CAVA",
    "restaurantAddress": "345 S Lake Ave, Pasadena, CA 91101",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05486,
      "lng": -118.24539
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 156,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 550,
    "protein": 37,
    "carbs": 42,
    "fat": 26,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Tahini Caesar Bowl (with Grilled Chicken)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken, romaine, parmesan, za'atar breadcrumbs, tahini caesar dressing"
  },
  {
    "id": "us-los-angeles-98",
    "name": "Greek Salad Bowl (with Grilled Chicken)",
    "restaurant": "CAVA",
    "restaurantAddress": "345 S Lake Ave, Pasadena, CA 91101",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05114,
      "lng": -118.24602
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 228,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 36,
    "carbs": 38,
    "fat": 34,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Greek Salad Bowl (with Grilled Chicken)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken, SuperGreens, tomatoes, cucumbers, onions, feta, olives, Greek vinaigrette"
  },
  {
    "id": "us-los-angeles-99",
    "name": "Steak Mezze Salad",
    "restaurant": "CAVA",
    "restaurantAddress": "345 S Lake Ave, Pasadena, CA 91101",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06228,
      "lng": -118.24137
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 345,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 495,
    "protein": 33,
    "carbs": 34,
    "fat": 25,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "33g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Steak Mezze Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled steak, SuperGreens, hummus, tzatziki, tomatoes, cucumbers, pickled onions"
  },
  {
    "id": "us-los-angeles-100",
    "name": "Double Protein Bowl - Chicken + Steak",
    "restaurant": "CAVA",
    "restaurantAddress": "345 S Lake Ave, Pasadena, CA 91101",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05663,
      "lng": -118.24672
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 61,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 650,
    "protein": 51,
    "carbs": 48,
    "fat": 28,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Zero Seed Oils",
      "12g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Protein Bowl - Chicken + Steak",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken + grilled steak, Black Lentils base, SuperGreens, tzatziki, hummus, roasted vegetables"
  },
  {
    "id": "us-los-angeles-101",
    "name": "Grilled Chicken Bowl (Black Lentils Base)",
    "restaurant": "CAVA",
    "restaurantAddress": "345 S Lake Ave, Pasadena, CA 91101",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.0454,
      "lng": -118.24109
    },
    "price": 14,
    "rating": 4.7,
    "reviewsCount": 163,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 46,
    "carbs": 52,
    "fat": 14,
    "fiber": 15,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Zero Seed Oils",
      "15g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Bowl (Black Lentils Base)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken (28g), Black Lentils (18g protein), SuperGreens, tzatziki, hummus, vegetables"
  },
  {
    "id": "us-los-angeles-102",
    "name": "Braised Lamb Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "345 S Lake Ave, Pasadena, CA 91101",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.03827,
      "lng": -118.22975
    },
    "price": 19,
    "rating": 4.6,
    "reviewsCount": 253,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 42,
    "carbs": 46,
    "fat": 25,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "12g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Braised Lamb Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Braised lamb (24g), Black Lentils (18g), SuperGreens, harissa, tzatziki, vegetables"
  },
  {
    "id": "us-los-angeles-103",
    "name": "Lamb Meatballs Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "345 S Lake Ave, Pasadena, CA 91101",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06072,
      "lng": -118.25693
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 311,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 42,
    "carbs": 48,
    "fat": 27,
    "fiber": 13,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "13g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Lamb Meatballs Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Lamb meatballs (24g), Black Lentils (18g), SuperGreens, hummus, tzatziki, tomatoes, cucumbers"
  },
  {
    "id": "us-los-angeles-104",
    "name": "High Protein Custom Bowl",
    "restaurant": "California Fish Grill",
    "restaurantAddress": "3265 E Foothill Blvd, Pasadena, CA 91107",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06656,
      "lng": -118.23502
    },
    "price": 15,
    "rating": 4.6,
    "reviewsCount": 151,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 42,
    "fat": 13,
    "fiber": 15,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Zero Seed Oils",
      "15g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "High Protein Custom Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (470 kcal, 46g protein, 15g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-los-angeles-105",
    "name": "Grilled Atlantic Salmon Plate (with Protein Sides)",
    "restaurant": "California Fish Grill",
    "restaurantAddress": "3265 E Foothill Blvd, Pasadena, CA 91107",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04932,
      "lng": -118.24319
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 199,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 500,
    "protein": 41,
    "carbs": 28,
    "fat": 25,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "41g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Atlantic Salmon Plate (with Protein Sides)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled Atlantic salmon (22g protein), quinoa (8g protein), grilled zucchini, steamed broccoli"
  },
  {
    "id": "us-los-angeles-106",
    "name": "Grilled Salmon + Shrimp Combo",
    "restaurant": "California Fish Grill",
    "restaurantAddress": "3265 E Foothill Blvd, Pasadena, CA 91107",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05635,
      "lng": -118.24364
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 211,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 32,
    "fat": 29,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Salmon + Shrimp Combo",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Atlantic salmon (22g), grilled shrimp (26g), quinoa, steamed vegetables"
  },
  {
    "id": "us-los-angeles-107",
    "name": "Ahi Poke Bowl (Double Protein)",
    "restaurant": "California Fish Grill",
    "restaurantAddress": "3265 E Foothill Blvd, Pasadena, CA 91107",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.043,
      "lng": -118.24879
    },
    "price": 21,
    "rating": 4.9,
    "reviewsCount": 224,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 52,
    "carbs": 48,
    "fat": 24,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Ahi Poke Bowl (Double Protein)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double ahi tuna, rice, edamame (8g protein), avocado, seaweed salad"
  },
  {
    "id": "us-los-angeles-108",
    "name": "Grilled Mahi Mahi Plate",
    "restaurant": "California Fish Grill",
    "restaurantAddress": "3265 E Foothill Blvd, Pasadena, CA 91107",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06553,
      "lng": -118.23461
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 68,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 36,
    "carbs": 32,
    "fat": 20,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Mahi Mahi Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled mahi mahi (28g), quinoa (8g), grilled vegetables"
  },
  {
    "id": "us-los-angeles-109",
    "name": "Grilled Shrimp Plate (Large)",
    "restaurant": "California Fish Grill",
    "restaurantAddress": "3265 E Foothill Blvd, Pasadena, CA 91107",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06473,
      "lng": -118.23184
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 274,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 38,
    "carbs": 36,
    "fat": 14,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Shrimp Plate (Large)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled shrimp (30g), quinoa (8g), steamed broccoli, grilled zucchini"
  },
  {
    "id": "us-los-angeles-110",
    "name": "Cajun Salmon Salad",
    "restaurant": "Tender Greens",
    "restaurantAddress": "621 E Colorado Blvd, Pasadena, CA 91101",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04969,
      "lng": -118.247
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 225,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 34,
    "carbs": 28,
    "fat": 32,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Cajun Salmon Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Cajun-spiced salmon (24g), mixed greens, edamame (8g), avocado, lemon vinaigrette"
  },
  {
    "id": "us-los-angeles-111",
    "name": "Salt & Pepper Chicken Plate (Double Protein)",
    "restaurant": "Tender Greens",
    "restaurantAddress": "621 E Colorado Blvd, Pasadena, CA 91101",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06116,
      "lng": -118.25799
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 102,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 58,
    "carbs": 32,
    "fat": 18,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Salt & Pepper Chicken Plate (Double Protein)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double salt & pepper chicken (58g), baby kale, roasted marble potatoes"
  },
  {
    "id": "us-los-angeles-112",
    "name": "Chipotle BBQ Chicken Plate (Double Protein)",
    "restaurant": "Tender Greens",
    "restaurantAddress": "621 E Colorado Blvd, Pasadena, CA 91101",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04211,
      "lng": -118.25814
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 237,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 550,
    "protein": 54,
    "carbs": 38,
    "fat": 20,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chipotle BBQ Chicken Plate (Double Protein)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double chipotle BBQ chicken (54g), organic red quinoa, roasted brussels sprouts"
  },
  {
    "id": "us-los-angeles-113",
    "name": "Tuscan Kale Salad (Add Double Chicken)",
    "restaurant": "Urban Plates",
    "restaurantAddress": "Pasadena area (check urbanplates.com for exact address)",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06152,
      "lng": -118.2319
    },
    "price": 17,
    "rating": 4.6,
    "reviewsCount": 257,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 48,
    "carbs": 32,
    "fat": 27,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Tuscan Kale Salad (Add Double Chicken)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double organic chicken (46g), tuscan kale, quinoa, cherry tomatoes, cucumber, hemp seeds, lemon vinaigrette"
  },
  {
    "id": "us-los-angeles-114",
    "name": "Grilled Grass-Fed Steak Plate",
    "restaurant": "Urban Plates",
    "restaurantAddress": "Pasadena area (check urbanplates.com for exact address)",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06083,
      "lng": -118.22948
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 340,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 650,
    "protein": 42,
    "carbs": 38,
    "fat": 37,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Grass-Fed Steak Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grass-fed steak (35g), mashed organic potatoes, roasted brussels sprouts"
  },
  {
    "id": "us-los-angeles-115",
    "name": "Grilled Sustainable Salmon Plate",
    "restaurant": "Urban Plates",
    "restaurantAddress": "Pasadena area (check urbanplates.com for exact address)",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04415,
      "lng": -118.24607
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 294,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 38,
    "carbs": 36,
    "fat": 32,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Sustainable Salmon Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled salmon (30g), organic quinoa (8g), rainbow carrots, golden beets"
  },
  {
    "id": "us-los-angeles-116",
    "name": "Grilled Cage-Free Chicken Plate (Double Protein)",
    "restaurant": "Urban Plates",
    "restaurantAddress": "Pasadena area (check urbanplates.com for exact address)",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06095,
      "lng": -118.25831
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 158,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 56,
    "carbs": 42,
    "fat": 25,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "56g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Cage-Free Chicken Plate (Double Protein)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double grilled chicken (52g), beet salad with goat cheese, mashed organic potatoes"
  },
  {
    "id": "us-los-angeles-117",
    "name": "Grilled Steak Salad",
    "restaurant": "Urban Plates",
    "restaurantAddress": "Pasadena area (check urbanplates.com for exact address)",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05825,
      "lng": -118.25823
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 190,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 40,
    "carbs": 32,
    "fat": 37,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Steak Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grass-fed steak (32g), mixed greens, roasted vegetables, goat cheese, balsamic vinaigrette"
  },
  {
    "id": "us-los-angeles-118",
    "name": "Barramundi Seabass Plate",
    "restaurant": "Urban Plates",
    "restaurantAddress": "Pasadena area (check urbanplates.com for exact address)",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06532,
      "lng": -118.2555
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 110,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 34,
    "carbs": 38,
    "fat": 28,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Barramundi Seabass Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Barramundi seabass (28g), organic quinoa (6g), roasted vegetables"
  },
  {
    "id": "us-los-angeles-119",
    "name": "Garlic Shrimp Plate",
    "restaurant": "Zankou Chicken",
    "restaurantAddress": "Pasadena area",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06573,
      "lng": -118.23619
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 91,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 32,
    "carbs": 42,
    "fat": 25,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Garlic Shrimp Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Garlic shrimp (26g), roasted marble potatoes, herb green beans"
  },
  {
    "id": "us-los-angeles-120",
    "name": "Chicken Tarna Plate",
    "restaurant": "Zankou Chicken",
    "restaurantAddress": "Pasadena area",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04147,
      "lng": -118.23086
    },
    "price": 14,
    "rating": 4.7,
    "reviewsCount": 105,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 52,
    "carbs": 42,
    "fat": 29,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Tarna Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken tarna (grilled marinated chicken, 48g), hummus, tomato, onion, pickles, pita"
  },
  {
    "id": "us-los-angeles-121",
    "name": "Chicken Shawarma Plate (Large)",
    "restaurant": "Zankou Chicken",
    "restaurantAddress": "Pasadena area",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04746,
      "lng": -118.25438
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 359,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 48,
    "carbs": 46,
    "fat": 27,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Shawarma Plate (Large)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken shawarma (42g), basmati rice, hummus, tomato, pickles, tahini sauce"
  },
  {
    "id": "us-los-angeles-122",
    "name": "Chicken Kabob Plate",
    "restaurant": "Zankou Chicken",
    "restaurantAddress": "Pasadena area",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05464,
      "lng": -118.24355
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 166,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 46,
    "carbs": 52,
    "fat": 23,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Kabob Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken kabob (40g), basmati rice, grilled vegetables, hummus, pita"
  },
  {
    "id": "us-los-angeles-123",
    "name": "Chicken Kabob Plate (Double Skewers)",
    "restaurant": "Panini Kabob Grill",
    "restaurantAddress": "The Paseo, Pasadena",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04108,
      "lng": -118.24156
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 58,
    "carbs": 48,
    "fat": 22,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Kabob Plate (Double Skewers)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double grilled chicken kabob (54g), basmati rice, grilled vegetables, hummus"
  },
  {
    "id": "us-los-angeles-124",
    "name": "Chicken Shawarma Wrap (Large)",
    "restaurant": "Panini Kabob Grill",
    "restaurantAddress": "The Paseo, Pasadena",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06232,
      "lng": -118.23349
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 357,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 42,
    "carbs": 52,
    "fat": 23,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Shawarma Wrap (Large)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken shawarma (38g), hummus, tahini, tomatoes, pickles, lavash wrap"
  },
  {
    "id": "us-los-angeles-125",
    "name": "Falafel + Chicken Combo Plate",
    "restaurant": "Ben's Fast Food",
    "restaurantAddress": "1060 E Colorado Blvd, Pasadena, CA 91106",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.03822,
      "lng": -118.23744
    },
    "price": 21,
    "rating": 4.9,
    "reviewsCount": 153,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 38,
    "carbs": 58,
    "fat": 26,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Falafel + Chicken Combo Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken (24g), falafel (12g), hummus, tahini, salad, pita"
  },
  {
    "id": "us-los-angeles-126",
    "name": "Chicken Hearty Bowl (Double Protein)",
    "restaurant": "Ben's Fast Food",
    "restaurantAddress": "1060 E Colorado Blvd, Pasadena, CA 91106",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06317,
      "lng": -118.2422
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 284,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 62,
    "carbs": 58,
    "fat": 16,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "62g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Hearty Bowl (Double Protein)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double slow-roasted chicken (58g), millet, brown rice, fresh vegetables, house sauce"
  },
  {
    "id": "us-los-angeles-127",
    "name": "Pork Shoulder Garden Bowl (Low-Carb)",
    "restaurant": "Ben's Fast Food",
    "restaurantAddress": "1060 E Colorado Blvd, Pasadena, CA 91106",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05634,
      "lng": -118.24364
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 102,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 48,
    "carbs": 18,
    "fat": 28,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Pork Shoulder Garden Bowl (Low-Carb)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Slow-cooked pork shoulder (44g), mixed greens, roasted vegetables, house sauce (no grains)"
  },
  {
    "id": "us-los-angeles-128",
    "name": "Chicken + Pork Mixed Bowl",
    "restaurant": "Ben's Fast Food",
    "restaurantAddress": "1060 E Colorado Blvd, Pasadena, CA 91106",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05465,
      "lng": -118.2533
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 132,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 52,
    "carbs": 54,
    "fat": 24,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken + Pork Mixed Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Slow-roasted chicken (28g) + pork shoulder (22g), millet, brown rice, vegetables"
  },
  {
    "id": "us-los-angeles-129",
    "name": "Double Chicken Garden Bowl",
    "restaurant": "Ben's Fast Food",
    "restaurantAddress": "1060 E Colorado Blvd, Pasadena, CA 91106",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05018,
      "lng": -118.23344
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 251,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 56,
    "carbs": 22,
    "fat": 19,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "56g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Garden Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double slow-roasted chicken (52g), mixed greens, roasted chickpeas, fresh vegetables (keto-friendly)"
  },
  {
    "id": "us-los-angeles-130",
    "name": "Chicken Bowl (Standard + Extra Protein)",
    "restaurant": "Ben's Fast Food",
    "restaurantAddress": "1060 E Colorado Blvd, Pasadena, CA 91106",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06693,
      "lng": -118.23831
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 117,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 46,
    "carbs": 56,
    "fat": 19,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Bowl (Standard + Extra Protein)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Slow-roasted chicken (42g), millet, brown rice, roasted chickpeas (8g), fresh vegetables"
  },
  {
    "id": "us-los-angeles-131",
    "name": "Chicken Tarna Wrap",
    "restaurant": "Zankou Chicken",
    "restaurantAddress": "Pasadena area",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04545,
      "lng": -118.25306
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 565,
    "protein": 33,
    "carbs": 46,
    "fat": 28,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "33g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Tarna Wrap",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Marinated, spit-roasted, hand-sliced chicken, tomato, and house-made garlic sauce, wrapped in fresh pita bread with pickled turnips and cascabella peppers."
  },
  {
    "id": "us-los-angeles-132",
    "name": "Chicken Kabob Wrap",
    "restaurant": "Zankou Chicken",
    "restaurantAddress": "Pasadena area",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05917,
      "lng": -118.2292
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 117,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 525,
    "protein": 37,
    "carbs": 45,
    "fat": 22,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Kabob Wrap",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Marinated boneless chicken kabob, tomato, and garlic sauce wrapped in fresh pita bread with pickled turnips and cascabella peppers."
  },
  {
    "id": "us-los-angeles-133",
    "name": "Zankou Salad with Grilled Chicken",
    "restaurant": "Zankou Chicken",
    "restaurantAddress": "Pasadena area",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06272,
      "lng": -118.23155
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 284,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 595,
    "protein": 42,
    "carbs": 37,
    "fat": 31,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Zankou Salad with Grilled Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Romaine hearts, tomato, Persian cucumbers, red onion, kalamata olives, feta, cilantro, pita chips, lemon-tahini dressing; grilled chicken added."
  },
  {
    "id": "us-los-angeles-134",
    "name": "Shish Kabob Wrap",
    "restaurant": "Zankou Chicken",
    "restaurantAddress": "Pasadena area",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04665,
      "lng": -118.22924
    },
    "price": 14,
    "rating": 4.8,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 475,
    "protein": 31,
    "carbs": 45,
    "fat": 19,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "31g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Shish Kabob Wrap",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Marinated USDA Choice beef kabob, tomato, and spiced onions wrapped in fresh pita bread with pickled turnips and cascabella peppers."
  },
  {
    "id": "us-los-angeles-135",
    "name": "Kale Caesar",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "168 W Colorado Blvd & 600 E Colorado Blvd, Pasadena, CA 91105",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04989,
      "lng": -118.24141
    },
    "price": 17,
    "rating": 4.6,
    "reviewsCount": 75,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 545,
    "protein": 41,
    "carbs": 18,
    "fat": 34,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "41g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Kale Caesar",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Kale, romaine, roasted chicken, bread crumbs, parm crisps, lemon squeeze, Caesar dressing. Contains milk, eggs, fish, meat, wheat. Figures are Sweetgreen's own published nutrition data for a 415 g serving."
  },
  {
    "id": "us-los-angeles-136",
    "name": "Chicken Pesto Parm",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "168 W Colorado Blvd & 600 E Colorado Blvd, Pasadena, CA 91105",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.06311,
      "lng": -118.23002
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 310,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 38,
    "carbs": 30,
    "fat": 26,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Pesto Parm",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Antibiotic-free roasted chicken, spicy broccoli, tomatoes, shaved parmesan, garlic breadcrumbs, golden quinoa, organic baby spinach, Sweetgreen hot sauce and pesto vinaigrette. Contains wheat, meat, milk. Figures are Sweetgreen's own published nutrition data for a 420 g serving."
  },
  {
    "id": "us-los-angeles-137",
    "name": "Mini Mezze",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "168 W Colorado Blvd & 600 E Colorado Blvd, Pasadena, CA 91105",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04048,
      "lng": -118.23622
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 218,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 295,
    "protein": 30,
    "carbs": 26,
    "fat": 8,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "30g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Mini Mezze",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Roasted chicken, cucumbers, hummus, focaccia breadstick. Contains sesame, meat, wheat. Figures are Sweetgreen's own published nutrition data for a 225 g serving."
  },
  {
    "id": "us-los-angeles-138",
    "name": "Protein Power Bowl",
    "restaurant": "The Hive Healthy Cafe",
    "restaurantAddress": "800 S Broadway, Los Angeles, CA 90014",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05565,
      "lng": -118.25507
    },
    "price": 19,
    "rating": 4.6,
    "reviewsCount": 286,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 70,
    "carbs": 38,
    "fat": 21,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "70g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Power Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 70g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-los-angeles-139",
    "name": "Chicken Pesto Bowl",
    "restaurant": "The Hive Healthy Cafe",
    "restaurantAddress": "800 S Broadway, Los Angeles, CA 90014",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05517,
      "lng": -118.24233
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 129,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 68,
    "carbs": 28,
    "fat": 17,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Pesto Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-los-angeles-140",
    "name": "Chicken Athena Bowl",
    "restaurant": "The Hive Healthy Cafe",
    "restaurantAddress": "800 S Broadway, Los Angeles, CA 90014",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.0567,
      "lng": -118.25599
    },
    "price": 21,
    "rating": 4.6,
    "reviewsCount": 241,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 65,
    "carbs": 30,
    "fat": 14,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "65g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Athena Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (510 kcal, 65g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-los-angeles-141",
    "name": "Chicken Hearty Bowl (Double Protein)",
    "restaurant": "Ben's Fast Food",
    "restaurantAddress": "1060 E Colorado Blvd, Pasadena, CA 91106",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04632,
      "lng": -118.23241
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 308,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 62,
    "carbs": 58,
    "fat": 16,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "62g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Hearty Bowl (Double Protein)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 62g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-los-angeles-90291-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Venice Beach)",
    "restaurantAddress": "1429 Abbot Kinney Blvd, Los Angeles, CA 90291",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.0515,
      "lng": -118.24436
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 194,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-los-angeles-90291-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Venice Beach)",
    "restaurantAddress": "1429 Abbot Kinney Blvd, Los Angeles, CA 90291",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05027,
      "lng": -118.23108
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 115,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-los-angeles-90291-3",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Venice Beach)",
    "restaurantAddress": "1429 Abbot Kinney Blvd, Los Angeles, CA 90291",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.05988,
      "lng": -118.23607
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 82,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-los-angeles-90401-1",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Santa Monica)",
    "restaurantAddress": "1315 3rd Street Promenade, Los Angeles, CA 90401",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04404,
      "lng": -118.25143
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 216,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-los-angeles-90401-2",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Santa Monica)",
    "restaurantAddress": "1315 3rd Street Promenade, Los Angeles, CA 90401",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04453,
      "lng": -118.23784
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 198,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-san-francisco-147",
    "name": "Protein Reset Bowl",
    "restaurant": "Urban Remedy",
    "restaurantAddress": "1957 Union St, San Francisco, CA 94123",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.7879,
      "lng": -122.42093
    },
    "price": 14,
    "rating": 4.6,
    "reviewsCount": 314,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 36,
    "carbs": 32,
    "fat": 16,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Reset Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken, quinoa, kale, roasted sweet potato, tahini dressing"
  },
  {
    "id": "us-san-francisco-148",
    "name": "Organic Protein Plate",
    "restaurant": "The Plant Cafe Organic",
    "restaurantAddress": "3737 Embarcadero, San Francisco, CA",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.76167,
      "lng": -122.43371
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 323,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 37,
    "carbs": 30,
    "fat": 19,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Organic Protein Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Organic grilled chicken breast, brown rice, steamed broccoli, tahini sauce"
  },
  {
    "id": "us-san-francisco-149",
    "name": "Protein Greens Bowl",
    "restaurant": "Mixt",
    "restaurantAddress": "3939 Valencia St, San Francisco, CA",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.77082,
      "lng": -122.40797
    },
    "price": 19,
    "rating": 4.6,
    "reviewsCount": 357,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 38,
    "carbs": 29,
    "fat": 20,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Greens Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken, spinach, kale, quinoa, avocado, lemon vinaigrette"
  },
  {
    "id": "us-san-francisco-150",
    "name": "Protein Reset Bowl",
    "restaurant": "Urban Remedy",
    "restaurantAddress": "4040 Chestnut St, San Francisco, CA",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.77411,
      "lng": -122.43284
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 256,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 36,
    "carbs": 32,
    "fat": 16,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Reset Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken, quinoa, kale, roasted sweet potato, tahini dressing"
  },
  {
    "id": "us-san-francisco-151",
    "name": "Salsiccia Bianca",
    "restaurant": "Flour + Water",
    "restaurantAddress": "2401 Harrison St, San Francisco, CA 94110",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.78858,
      "lng": -122.43182
    },
    "price": 17,
    "rating": 4.6,
    "reviewsCount": 282,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 570,
    "protein": 24,
    "carbs": 55,
    "fat": 28,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "24g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Salsiccia Bianca",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Fresh pasta with pork sausage, broccoli rabe, caciocavallo, guindilla peppers."
  },
  {
    "id": "us-san-francisco-152",
    "name": "Lamb Pappardelle",
    "restaurant": "Flour + Water",
    "restaurantAddress": "2401 Harrison St, San Francisco, CA 94110",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.76677,
      "lng": -122.41616
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 131,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 28,
    "carbs": 58,
    "fat": 26,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Lamb Pappardelle",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Pappardelle with merguez ragu, shishito, tomato xo."
  },
  {
    "id": "us-san-francisco-153",
    "name": "Margherita",
    "restaurant": "Flour + Water",
    "restaurantAddress": "2401 Harrison St, San Francisco, CA 94110",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.77622,
      "lng": -122.4051
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 321,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 24,
    "carbs": 78,
    "fat": 26,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "24g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Margherita",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Margherita pizza with tomato, fior di latte, basil."
  },
  {
    "id": "us-san-francisco-154",
    "name": "Thai Chicken",
    "restaurant": "Blue Barn",
    "restaurantAddress": "2105 Chestnut St, San Francisco, CA 94123",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.7867,
      "lng": -122.41381
    },
    "price": 17,
    "rating": 4.6,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 650,
    "protein": 46,
    "carbs": 47,
    "fat": 31,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Thai Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chili-lime mary's chicken, carrot, snow peas, cabbage, scallion, herb mix, peanuts, sesame seeds, crispy wontons, peanut-sambal dressing & house romaine mix."
  },
  {
    "id": "us-san-francisco-155",
    "name": "Protein Greens Bowl",
    "restaurant": "Mixt",
    "restaurantAddress": "3939 Valencia St, San Francisco, CA",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.77525,
      "lng": -122.41715
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 314,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 38,
    "carbs": 29,
    "fat": 20,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Greens Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (450 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-san-francisco-156",
    "name": "Organic Protein Plate",
    "restaurant": "The Plant Cafe Organic",
    "restaurantAddress": "3737 Embarcadero, San Francisco, CA",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.78741,
      "lng": -122.41202
    },
    "price": 14,
    "rating": 4.6,
    "reviewsCount": 161,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 37,
    "carbs": 30,
    "fat": 19,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Organic Protein Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (440 kcal, 37g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-san-francisco-157",
    "name": "Protein Reset Bowl",
    "restaurant": "Urban Remedy",
    "restaurantAddress": "1957 Union St, San Francisco, CA 94123",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.78528,
      "lng": -122.41197
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 129,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 36,
    "carbs": 32,
    "fat": 16,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Reset Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (420 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-san-francisco-158",
    "name": "Shrimp Bowl",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown San Francisco, CA",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.7794,
      "lng": -122.42649
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 142,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 34,
    "carbs": 60,
    "fat": 16,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Shrimp Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-san-francisco-159",
    "name": "Protein Smoothie",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown San Francisco, CA",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.76435,
      "lng": -122.41983
    },
    "price": 16,
    "rating": 4.6,
    "reviewsCount": 330,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 28,
    "carbs": 42,
    "fat": 11,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Smoothie",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 28g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-san-francisco-94123-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Marina / Cow Hollow)",
    "restaurantAddress": "1785 Union St, San Francisco, CA 94123",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.7843,
      "lng": -122.42151
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 236,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-san-francisco-94123-2",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Marina / Cow Hollow)",
    "restaurantAddress": "1785 Union St, San Francisco, CA 94123",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.7626,
      "lng": -122.419
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 232,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-san-francisco-94110-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Mission District)",
    "restaurantAddress": "2011 Mission St, San Francisco, CA 94110",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.78909,
      "lng": -122.40636
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 270,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-san-francisco-94110-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Mission District)",
    "restaurantAddress": "2011 Mission St, San Francisco, CA 94110",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.76092,
      "lng": -122.40938
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 120,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-san-francisco-94109-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Nob Hill / Polk)",
    "restaurantAddress": "1600 Polk St, San Francisco, CA 94109",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.78742,
      "lng": -122.41983
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 171,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-san-francisco-94109-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Nob Hill / Polk)",
    "restaurantAddress": "1600 Polk St, San Francisco, CA 94109",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.76456,
      "lng": -122.41201
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 161,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-san-francisco-94109-3",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Nob Hill / Polk)",
    "restaurantAddress": "1600 Polk St, San Francisco, CA 94109",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.77227,
      "lng": -122.41309
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 249,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-san-francisco-94109-4",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Nob Hill / Polk)",
    "restaurantAddress": "1600 Polk St, San Francisco, CA 94109",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.78058,
      "lng": -122.41583
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 226,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-san-francisco-94109-5",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Nob Hill / Polk)",
    "restaurantAddress": "1600 Polk St, San Francisco, CA 94109",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.77663,
      "lng": -122.41814
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 185,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-san-francisco-94103-1",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (SoMa)",
    "restaurantAddress": "820 Mission St, San Francisco, CA 94103",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.77193,
      "lng": -122.43357
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 173,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-san-francisco-94103-2",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (SoMa)",
    "restaurantAddress": "820 Mission St, San Francisco, CA 94103",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.77606,
      "lng": -122.42089
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 287,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-san-francisco-94103-3",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (SoMa)",
    "restaurantAddress": "820 Mission St, San Francisco, CA 94103",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.78878,
      "lng": -122.41907
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-san-francisco-94103-4",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (SoMa)",
    "restaurantAddress": "820 Mission St, San Francisco, CA 94103",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.76451,
      "lng": -122.42126
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-san-francisco-94103-5",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (SoMa)",
    "restaurantAddress": "820 Mission St, San Francisco, CA 94103",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.7842,
      "lng": -122.43318
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 85,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-miami-174",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "1451 S Miami Ave, Miami, FL 33130",
    "city": "Miami",
    "coordinates": {
      "lat": 25.75703,
      "lng": -80.20679
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 173,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled harissa honey chicken over brown rice with roasted eggplant and tzatziki at Brickell City Centre Miami. Mediterranean macros for the Miami financial district."
  },
  {
    "id": "us-miami-175",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "2101 NW 2nd Ave, Miami, FL 33127",
    "city": "Miami",
    "coordinates": {
      "lat": 25.75583,
      "lng": -80.19696
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 261,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled harissa honey chicken over brown rice with roasted eggplant and tzatziki in Wynwood Miami. Mediterranean macros for the arts district fitness community."
  },
  {
    "id": "us-miami-176",
    "name": "Carnitas Taco Plate",
    "restaurant": "Coyo Taco",
    "restaurantAddress": "2300 NW 2nd Ave, Miami, FL 33127",
    "city": "Miami",
    "coordinates": {
      "lat": 25.77173,
      "lng": -80.1931
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 75,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 430,
    "protein": 38,
    "carbs": 28,
    "fat": 18,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Carnitas Taco Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Three slow-cooked pork carnitas tacos on house-made tortillas with salsa verde and pickled onions at Coyo Taco Wynwood. 38g protein, a Miami cult-favorite macro meal."
  },
  {
    "id": "us-miami-177",
    "name": "Truffle Udon with Crispy Tofu",
    "restaurant": "PLANTA Queen",
    "restaurantAddress": "3015 Grand Ave, Suite 201, Miami, FL 33133",
    "city": "Miami",
    "coordinates": {
      "lat": 25.77171,
      "lng": -80.18399
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 328,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 30,
    "carbs": 30,
    "fat": 33,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "30g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Truffle Udon with Crispy Tofu",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Truffle Udon with Crispy Tofu"
  },
  {
    "id": "us-miami-178",
    "name": "Edamame Dumplings (double order) with Miso Soup",
    "restaurant": "PLANTA Queen",
    "restaurantAddress": "3015 Grand Ave, Suite 201, Miami, FL 33133",
    "city": "Miami",
    "coordinates": {
      "lat": 25.77326,
      "lng": -80.17694
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 72,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 32,
    "carbs": 30,
    "fat": 26,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Edamame Dumplings (double order) with Miso Soup",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Edamame Dumplings (double order) with Miso Soup"
  },
  {
    "id": "us-miami-179",
    "name": "Bang Bang Broccoli Bowl with Beyond Protein",
    "restaurant": "PLANTA Queen",
    "restaurantAddress": "3015 Grand Ave, Suite 201, Miami, FL 33133",
    "city": "Miami",
    "coordinates": {
      "lat": 25.76372,
      "lng": -80.20395
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 155,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 34,
    "carbs": 30,
    "fat": 28,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Bang Bang Broccoli Bowl with Beyond Protein",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Bang Bang Broccoli Bowl with Beyond Protein"
  },
  {
    "id": "us-miami-180",
    "name": "Lamb Ribs (mezze portion)",
    "restaurant": "Byblos Miami",
    "restaurantAddress": "1545 Collins Ave, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.76868,
      "lng": -80.19873
    },
    "price": 20,
    "rating": 4.6,
    "reviewsCount": 326,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 38,
    "carbs": 30,
    "fat": 34,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Lamb Ribs (mezze portion)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Lamb Ribs (mezze portion)"
  },
  {
    "id": "us-miami-181",
    "name": "Short Rib Kebab Plate",
    "restaurant": "Byblos Miami",
    "restaurantAddress": "1545 Collins Ave, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.75492,
      "lng": -80.19593
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 167,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 650,
    "protein": 42,
    "carbs": 30,
    "fat": 40,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Short Rib Kebab Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Short Rib Kebab Plate"
  },
  {
    "id": "us-miami-182",
    "name": "Salmon Robata with Bok Choy",
    "restaurant": "Pubbelly Sushi",
    "restaurantAddress": "1424 20th St, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.77541,
      "lng": -80.20206
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 295,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 42,
    "carbs": 30,
    "fat": 22,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Salmon Robata with Bok Choy",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Salmon Robata with Bok Choy"
  },
  {
    "id": "us-miami-183",
    "name": "Skirt Steak with Truffle Sauce",
    "restaurant": "Pubbelly Sushi",
    "restaurantAddress": "1424 20th St, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.76386,
      "lng": -80.19924
    },
    "price": 15,
    "rating": 4.6,
    "reviewsCount": 359,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 48,
    "carbs": 30,
    "fat": 34,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Skirt Steak with Truffle Sauce",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Skirt Steak with Truffle Sauce"
  },
  {
    "id": "us-miami-184",
    "name": "Chef's Sashimi Platter (12 pcs)",
    "restaurant": "Pubbelly Sushi",
    "restaurantAddress": "1424 20th St, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.7555,
      "lng": -80.19248
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 115,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 52,
    "carbs": 30,
    "fat": 6,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chef's Sashimi Platter (12 pcs)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chef's Sashimi Platter (12 pcs)"
  },
  {
    "id": "us-miami-185",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "8888 SW 136th St, Ste 340A, Miami, FL 33176",
    "city": "Miami",
    "coordinates": {
      "lat": 25.75209,
      "lng": -80.19936
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 77,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 30,
    "fat": 34,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Turkey Burger"
  },
  {
    "id": "us-miami-186",
    "name": "Grilled Sustainable Salmon",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "8888 SW 136th St, Ste 340A, Miami, FL 33176",
    "city": "Miami",
    "coordinates": {
      "lat": 25.75693,
      "lng": -80.18057
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 109,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 37,
    "carbs": 30,
    "fat": 41,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Sustainable Salmon",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled Sustainable Salmon"
  },
  {
    "id": "us-miami-187",
    "name": "Grilled Chicken Grain Bowl",
    "restaurant": "MIA Market",
    "restaurantAddress": "140 NE 39th St, Suite 241, Miami, FL 33137",
    "city": "Miami",
    "coordinates": {
      "lat": 25.76876,
      "lng": -80.18091
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 250,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 36,
    "carbs": 30,
    "fat": 28,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Grain Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled Chicken Grain Bowl"
  },
  {
    "id": "us-miami-188",
    "name": "Seared Salmon Plate",
    "restaurant": "MIA Market",
    "restaurantAddress": "140 NE 39th St, Suite 241, Miami, FL 33137",
    "city": "Miami",
    "coordinates": {
      "lat": 25.77385,
      "lng": -80.18191
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 255,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 38,
    "carbs": 30,
    "fat": 24,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Seared Salmon Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Seared Salmon Plate"
  },
  {
    "id": "us-miami-189",
    "name": "Turkey Bacon Power Wrap",
    "restaurant": "Carrot Express",
    "restaurantAddress": "605 Lincoln Rd, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.75268,
      "lng": -80.17738
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 429,
    "protein": 33,
    "carbs": 9,
    "fat": 29,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "33g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Bacon Power Wrap",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Turkey bacon, cage-free scrambled eggs, jack cheese, avocado, mushroom, spinach and scallion on a whole wheat wrap."
  },
  {
    "id": "us-miami-190",
    "name": "Chicken Caesar Wrap",
    "restaurant": "Carrot Express",
    "restaurantAddress": "605 Lincoln Rd, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.75119,
      "lng": -80.19642
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 264,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 40,
    "carbs": 42,
    "fat": 35,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Caesar Wrap",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken breast, romaine, kale, homemade croutons, parmesan and caesar dressing."
  },
  {
    "id": "us-miami-191",
    "name": "Mahi-Mahi Wrap",
    "restaurant": "Carrot Express",
    "restaurantAddress": "605 Lincoln Rd, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.75693,
      "lng": -80.20626
    },
    "price": 14,
    "rating": 4.7,
    "reviewsCount": 99,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 590,
    "protein": 36,
    "carbs": 46,
    "fat": 29,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Mahi-Mahi Wrap",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Mahi-mahi, brown rice, cabbage, cilantro, avocado, pico de gallo and jalapeno aioli."
  },
  {
    "id": "us-miami-192",
    "name": "Mario's Favorite Chicken Bowl",
    "restaurant": "Carrot Express",
    "restaurantAddress": "605 Lincoln Rd, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.77271,
      "lng": -80.19565
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 338,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 647,
    "protein": 40,
    "carbs": 58,
    "fat": 28,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Mario's Favorite Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken over cilantro brown rice, quinoa, arugula, kale, spinach, almonds, peas, raisins and citrus sauce."
  },
  {
    "id": "us-miami-193",
    "name": "Healthy Burger Bowl with Turkey Burger",
    "restaurant": "Carrot Express",
    "restaurantAddress": "605 Lincoln Rd, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.76571,
      "lng": -80.1817
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 267,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 636,
    "protein": 32,
    "carbs": 61,
    "fat": 29,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Healthy Burger Bowl with Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Homemade turkey burger patty over brown rice with avocado and pico de gallo."
  },
  {
    "id": "us-miami-194",
    "name": "Healthy Burger Bowl with Salmon",
    "restaurant": "Carrot Express",
    "restaurantAddress": "605 Lincoln Rd, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.74906,
      "lng": -80.20212
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 335,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 602,
    "protein": 32,
    "carbs": 62,
    "fat": 25,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Healthy Burger Bowl with Salmon",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Homemade salmon burger patty over brown rice with avocado and pico de gallo."
  },
  {
    "id": "us-miami-195",
    "name": "Turkey Burger",
    "restaurant": "Carrot Express",
    "restaurantAddress": "605 Lincoln Rd, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.77311,
      "lng": -80.1779
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 135,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 535,
    "protein": 32,
    "carbs": 34,
    "fat": 30,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Homemade turkey patty, arugula, alfalfa, avocado, tomato, onion and spicy mayo on a multigrain bun."
  },
  {
    "id": "us-miami-196",
    "name": "Salmon Burger",
    "restaurant": "Carrot Express",
    "restaurantAddress": "605 Lincoln Rd, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.75519,
      "lng": -80.17923
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 247,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 33,
    "carbs": 30,
    "fat": 26,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "33g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Salmon Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Homemade salmon patty, arugula, alfalfa, tomato, onion and spicy mayo on a multigrain bun."
  },
  {
    "id": "us-miami-197",
    "name": "Tuna-Cado Ciabatta",
    "restaurant": "Carrot Express",
    "restaurantAddress": "605 Lincoln Rd, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.75326,
      "lng": -80.1808
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 317,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 610,
    "protein": 31,
    "carbs": 48,
    "fat": 33,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "31g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Tuna-Cado Ciabatta",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Tuna salad, romaine, avocado, carrots, tomato and alfalfa on ciabatta."
  },
  {
    "id": "us-miami-198",
    "name": "Tuna Salad Pita Melt",
    "restaurant": "Carrot Express",
    "restaurantAddress": "605 Lincoln Rd, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.75344,
      "lng": -80.17895
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 106,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 570,
    "protein": 36,
    "carbs": 44,
    "fat": 28,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Tuna Salad Pita Melt",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "House-made albacore tuna salad, shredded carrots, tomato and melted mozzarella on toasted pita."
  },
  {
    "id": "us-miami-199",
    "name": "Chicken Salad Pita Melt",
    "restaurant": "Carrot Express",
    "restaurantAddress": "605 Lincoln Rd, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.7639,
      "lng": -80.17768
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 85,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 605,
    "protein": 45,
    "carbs": 43,
    "fat": 28,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Salad Pita Melt",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken salad, shredded carrots, tomato and melted mozzarella on toasted pita."
  },
  {
    "id": "us-miami-200",
    "name": "Novecento Salad",
    "restaurant": "Novecento",
    "restaurantAddress": "1414 Brickell Ave, Miami, FL 33131",
    "city": "Miami",
    "coordinates": {
      "lat": 25.74826,
      "lng": -80.19603
    },
    "price": 22,
    "rating": 4.6,
    "reviewsCount": 65,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 650,
    "protein": 34,
    "carbs": 34,
    "fat": 42,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Novecento Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Skirt steak over mixed greens and grape tomatoes with avocado, crispy french fries, dijon vinaigrette, and demi-glace."
  },
  {
    "id": "us-miami-201",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "2400 E Sunrise Blvd, Fort Lauderdale, FL 33304",
    "city": "Miami",
    "coordinates": {
      "lat": 25.76402,
      "lng": -80.18108
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 135,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 68,
    "carbs": 52,
    "fat": 18,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "11g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (640 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-miami-202",
    "name": "Chicken Shish Kebab Platter",
    "restaurant": "Shish Grill",
    "restaurantAddress": "690 Yamato Rd Ste 7, Boca Raton, FL 33431",
    "city": "Miami",
    "coordinates": {
      "lat": 25.77512,
      "lng": -80.17864
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 60,
    "carbs": 38,
    "fat": 11,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "60g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Shish Kebab Platter",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (490 kcal, 60g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-miami-203",
    "name": "Mixed Grill Platter",
    "restaurant": "Shish Grill",
    "restaurantAddress": "690 Yamato Rd Ste 7, Boca Raton, FL 33431",
    "city": "Miami",
    "coordinates": {
      "lat": 25.75895,
      "lng": -80.18583
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 186,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 54,
    "carbs": 40,
    "fat": 15,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Mixed Grill Platter",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (510 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-miami-204",
    "name": "Chef's Sashimi Platter (12 pcs)",
    "restaurant": "Pubbelly Sushi",
    "restaurantAddress": "1424 20th St, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.7753,
      "lng": -80.20564
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 52,
    "carbs": 30,
    "fat": 6,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chef's Sashimi Platter (12 pcs)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-miami-33131-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Brickell)",
    "restaurantAddress": "1104 S Miami Ave, Miami, FL 33131",
    "city": "Miami",
    "coordinates": {
      "lat": 25.74826,
      "lng": -80.19554
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 98,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-miami-33131-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Brickell)",
    "restaurantAddress": "1104 S Miami Ave, Miami, FL 33131",
    "city": "Miami",
    "coordinates": {
      "lat": 25.77101,
      "lng": -80.17827
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 120,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-miami-33131-3",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (Brickell)",
    "restaurantAddress": "1104 S Miami Ave, Miami, FL 33131",
    "city": "Miami",
    "coordinates": {
      "lat": 25.756,
      "lng": -80.18194
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 235,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-miami-33131-4",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Brickell)",
    "restaurantAddress": "1104 S Miami Ave, Miami, FL 33131",
    "city": "Miami",
    "coordinates": {
      "lat": 25.75402,
      "lng": -80.19574
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 160,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-miami-33127-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Wynwood)",
    "restaurantAddress": "2612 NW 2nd Ave, Miami, FL 33127",
    "city": "Miami",
    "coordinates": {
      "lat": 25.75846,
      "lng": -80.19454
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 272,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-miami-33127-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Wynwood)",
    "restaurantAddress": "2612 NW 2nd Ave, Miami, FL 33127",
    "city": "Miami",
    "coordinates": {
      "lat": 25.77289,
      "lng": -80.20115
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 287,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-miami-33127-3",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Wynwood)",
    "restaurantAddress": "2612 NW 2nd Ave, Miami, FL 33127",
    "city": "Miami",
    "coordinates": {
      "lat": 25.775,
      "lng": -80.19958
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 259,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-miami-33133-1",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Coconut Grove)",
    "restaurantAddress": "3390 Mary St, Miami, FL 33133",
    "city": "Miami",
    "coordinates": {
      "lat": 25.74771,
      "lng": -80.20319
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 97,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-miami-33133-2",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Coconut Grove)",
    "restaurantAddress": "3390 Mary St, Miami, FL 33133",
    "city": "Miami",
    "coordinates": {
      "lat": 25.75043,
      "lng": -80.18627
    },
    "price": 21,
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-chicago-214",
    "name": "Big Mac",
    "restaurant": "McDonald's",
    "restaurantAddress": "Chicago, IL",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.86317,
      "lng": -87.61662
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 226,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 25,
    "carbs": 45,
    "fat": 33,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "25g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Big Mac",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Big Mac."
  },
  {
    "id": "us-chicago-215",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1 W Erie St, Chicago, IL 60654",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.88933,
      "lng": -87.61502
    },
    "price": 14,
    "rating": 4.9,
    "reviewsCount": 162,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-chicago-216",
    "name": "Grilled Chicken Sandwich",
    "restaurant": "Chick-fil-A",
    "restaurantAddress": "30 E. Chicago Ave., Chicago, IL 60611",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.89132,
      "lng": -87.64146
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 192,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 390,
    "protein": 29,
    "carbs": 44,
    "fat": 11,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "29g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Sandwich",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Marinated grilled chicken on a multigrain bun"
  },
  {
    "id": "us-chicago-217",
    "name": "Cobb Salad with Grilled Chicken",
    "restaurant": "Chick-fil-A",
    "restaurantAddress": "30 E. Chicago Ave., Chicago, IL 60611",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.88892,
      "lng": -87.64338
    },
    "price": 21,
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 430,
    "protein": 40,
    "carbs": 27,
    "fat": 18,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Cobb Salad with Grilled Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Mixed greens with grilled chicken, bacon, eggs, and cheese"
  },
  {
    "id": "us-chicago-218",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1 W Erie St, Chicago, IL 60654",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.8889,
      "lng": -87.64265
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 353,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-chicago-219",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1 W Erie St, Chicago, IL 60654",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.88618,
      "lng": -87.62767
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 228,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-chicago-220",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1 W Erie St, Chicago, IL 60654",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.88864,
      "lng": -87.61865
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 296,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-chicago-221",
    "name": "Enlightened Caesar + Salmon",
    "restaurant": "Beatrix",
    "restaurantAddress": "519 N Clark St, Chicago, IL 60654",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.88243,
      "lng": -87.62089
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 251,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 42,
    "carbs": 18,
    "fat": 27,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Enlightened Caesar + Salmon",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Crisp romaine tossed in a light Caesar dressing topped with a perfectly seared salmon fillet. A high-protein, low-sugar staple that keeps macros in check without sacrificing flavor."
  },
  {
    "id": "us-chicago-222",
    "name": "Faroe Islands Salmon Bowl",
    "restaurant": "Ēma",
    "restaurantAddress": "74 W Illinois St, Chicago, IL 60654",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.87935,
      "lng": -87.63759
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 110,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 34,
    "carbs": 20,
    "fat": 33,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Faroe Islands Salmon Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Premium Faroe Islands salmon served over grain-free greens with roasted seasonal vegetables and a lemon-herb vinaigrette. Rich in omega-3s and naturally gluten-free."
  },
  {
    "id": "us-chicago-223",
    "name": "Shawarma-Spiced Chicken Bowl",
    "restaurant": "Ēma",
    "restaurantAddress": "74 W Illinois St, Chicago, IL 60654",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.88293,
      "lng": -87.64112
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 185,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 36,
    "carbs": 22,
    "fat": 29,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Shawarma-Spiced Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Shawarma-spiced pulled chicken over a bed of greens and roasted vegetables, finished with a drizzle of tahini. Gluten-free, filling, and macro-balanced."
  },
  {
    "id": "us-chicago-224",
    "name": "Sriracha Chicken Bowl",
    "restaurant": "Protein Bar & Kitchen",
    "restaurantAddress": "345 N Morgan St, Chicago, IL 60607",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.8816,
      "lng": -87.61757
    },
    "price": 21,
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 38,
    "carbs": 36,
    "fat": 13,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sriracha Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken with sriracha sauce over brown rice with roasted broccoli and pickled veggies at Protein Bar River North Chicago. 38g protein."
  },
  {
    "id": "us-chicago-225",
    "name": "Mediterranean Chicken Wrap",
    "restaurant": "Protein Bar & Kitchen",
    "restaurantAddress": "345 N Morgan St, Chicago, IL 60607",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.8818,
      "lng": -87.61865
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 248,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 40,
    "carbs": 34,
    "fat": 14,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Mediterranean Chicken Wrap",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken with house tzatziki, roasted red peppers, and cucumber wrapped in whole wheat at Protein Bar Chicago. 40g protein."
  },
  {
    "id": "us-chicago-226",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "405 N Wabash Ave, Chicago, IL 60611",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.8883,
      "lng": -87.63637
    },
    "price": 21,
    "rating": 4.6,
    "reviewsCount": 297,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled harissa honey chicken over brown rice with roasted eggplant and tzatziki in River North Chicago. Mediterranean macros for the Chicago fitness community."
  },
  {
    "id": "us-chicago-227",
    "name": "Kefta & Eggs",
    "restaurant": "Ēma",
    "restaurantAddress": "74 W Illinois St, Chicago, IL 60654",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.8758,
      "lng": -87.64228
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 176,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 33,
    "carbs": 31,
    "fat": 34,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "33g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Kefta & Eggs",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Lamb & beef kefta, fried egg, cucumber & tomato salad, basmati rice."
  },
  {
    "id": "us-chicago-228",
    "name": "Paella Mariscos \"A Banda\"",
    "restaurant": "Cafe Ba-Ba-Reeba!",
    "restaurantAddress": "2024 N Halsted St, Chicago, IL 60614",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.87728,
      "lng": -87.62737
    },
    "price": 16,
    "rating": 4.6,
    "reviewsCount": 127,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 506,
    "protein": 33,
    "carbs": 48,
    "fat": 20,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "33g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Paella Mariscos \"A Banda\"",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Jumbo shrimp, hokkaido scallops, green beans (per serving, serves 2-3)"
  },
  {
    "id": "us-chicago-229",
    "name": "Enlightened Caesar + Salmon",
    "restaurant": "Beatrix",
    "restaurantAddress": "519 N Clark St, Chicago, IL 60654",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.89023,
      "lng": -87.61735
    },
    "price": 14,
    "rating": 4.8,
    "reviewsCount": 239,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 42,
    "carbs": 18,
    "fat": 27,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Enlightened Caesar + Salmon",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-chicago-60611-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Streeterville)",
    "restaurantAddress": "676 N St Clair St, Chicago, IL 60611",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.86581,
      "lng": -87.62527
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 259,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-chicago-60611-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Streeterville)",
    "restaurantAddress": "676 N St Clair St, Chicago, IL 60611",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.88534,
      "lng": -87.63994
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 93,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-chicago-60614-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Lincoln Park)",
    "restaurantAddress": "2201 N Halsted St, Chicago, IL 60614",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.89155,
      "lng": -87.61924
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 84,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-chicago-60614-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Lincoln Park)",
    "restaurantAddress": "2201 N Halsted St, Chicago, IL 60614",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.89159,
      "lng": -87.62891
    },
    "price": 22,
    "rating": 4.8,
    "reviewsCount": 247,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-chicago-60614-3",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Lincoln Park)",
    "restaurantAddress": "2201 N Halsted St, Chicago, IL 60614",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.8798,
      "lng": -87.61925
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 84,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-chicago-60614-4",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Lincoln Park)",
    "restaurantAddress": "2201 N Halsted St, Chicago, IL 60614",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.86857,
      "lng": -87.62511
    },
    "price": 22,
    "rating": 4.8,
    "reviewsCount": 100,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-chicago-60607-1",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (West Loop)",
    "restaurantAddress": "845 W Randolph St, Chicago, IL 60607",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.88247,
      "lng": -87.62391
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 189,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-chicago-60607-2",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (West Loop)",
    "restaurantAddress": "845 W Randolph St, Chicago, IL 60607",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.87284,
      "lng": -87.64346
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 222,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-chicago-60607-3",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (West Loop)",
    "restaurantAddress": "845 W Randolph St, Chicago, IL 60607",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.88989,
      "lng": -87.63217
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 163,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-dallas-239",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "8383 Preston Center Plaza, Dallas, TX 75225",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.78323,
      "lng": -96.79774
    },
    "price": 14,
    "rating": 4.7,
    "reviewsCount": 285,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-dallas-240",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "8383 Preston Center Plaza, Dallas, TX 75225",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.77426,
      "lng": -96.78221
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 342,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-dallas-241",
    "name": "Grass-Fed Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "2847 N Henderson Ave, Dallas, TX 75206",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.7632,
      "lng": -96.79774
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 139,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 51,
    "carbs": 38,
    "fat": 29,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-Fed Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grass-fed beef patty with aged white cheddar and pickled onion at True Food Kitchen Dallas near Uptown. 51g protein."
  },
  {
    "id": "us-dallas-242",
    "name": "Citrus Salmon Salad",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "2847 N Henderson Ave, Dallas, TX 75206",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.78554,
      "lng": -96.79342
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 36,
    "carbs": 22,
    "fat": 21,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Citrus Salmon Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Herb-roasted Atlantic salmon over arugula with shaved fennel and citrus vinaigrette in Dallas. 36g protein."
  },
  {
    "id": "us-dallas-243",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "3301 McKinney Ave, Dallas, TX 75204",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.76311,
      "lng": -96.80944
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 173,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled harissa honey chicken over brown rice with roasted eggplant and tzatziki on McKinney Ave Uptown Dallas. Mediterranean macros for the Dallas fitness community."
  },
  {
    "id": "us-dallas-244",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "2808 Elm St, Dallas, TX 75226",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.78415,
      "lng": -96.80942
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 167,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 68,
    "carbs": 52,
    "fat": 18,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "11g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double chicken over brown rice with black beans and fresh salsa in Deep Ellum Dallas. 68g protein for the Deep Ellum music and fitness community."
  },
  {
    "id": "us-dallas-245",
    "name": "Grilled Chicken Protein Bowl",
    "restaurant": "True Food Kitchen (Dallas - nearest)",
    "restaurantAddress": "8383 Preston Center Plaza, Ste 100, Dallas, TX 75225",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.77091,
      "lng": -96.7865
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 317,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 42,
    "carbs": 30,
    "fat": 32,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Protein Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled Chicken Protein Bowl"
  },
  {
    "id": "us-dallas-246",
    "name": "Grass-Fed Burger (no bun)",
    "restaurant": "True Food Kitchen (Dallas - nearest)",
    "restaurantAddress": "8383 Preston Center Plaza, Ste 100, Dallas, TX 75225",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.78063,
      "lng": -96.79218
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 173,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 40,
    "carbs": 30,
    "fat": 26,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-Fed Burger (no bun)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grass-Fed Burger (no bun)"
  },
  {
    "id": "us-dallas-247",
    "name": "Herb-Marinated Chicken Signature Salad",
    "restaurant": "Salata",
    "restaurantAddress": "6464 E Northwest Hwy, Ste 318, Dallas, TX 75214",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.78671,
      "lng": -96.79434
    },
    "price": 17,
    "rating": 4.9,
    "reviewsCount": 249,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 35,
    "carbs": 30,
    "fat": 13,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "35g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Herb-Marinated Chicken Signature Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Herb-Marinated Chicken Signature Salad"
  },
  {
    "id": "us-dallas-248",
    "name": "Pesto Chicken Superfood Bowl (Large)",
    "restaurant": "Salata",
    "restaurantAddress": "6464 E Northwest Hwy, Ste 318, Dallas, TX 75214",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.76904,
      "lng": -96.80558
    },
    "price": 20,
    "rating": 4.6,
    "reviewsCount": 201,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 30,
    "fat": 25,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Pesto Chicken Superfood Bowl (Large)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Pesto Chicken Superfood Bowl (Large)"
  },
  {
    "id": "us-dallas-249",
    "name": "Spicy Chipotle Chicken Salad",
    "restaurant": "Salata",
    "restaurantAddress": "6464 E Northwest Hwy, Ste 318, Dallas, TX 75214",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.78418,
      "lng": -96.81119
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 173,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 19,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Spicy Chipotle Chicken Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Spicy Chipotle Chicken Salad"
  },
  {
    "id": "us-dallas-250",
    "name": "Atlantic Salmon Salad",
    "restaurant": "bellagreen",
    "restaurantAddress": "8401 Walnut Hill Lane, Ste 810, Dallas, TX 75231",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.78004,
      "lng": -96.7945
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 183,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 38,
    "carbs": 30,
    "fat": 28,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Atlantic Salmon Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Atlantic Salmon Salad"
  },
  {
    "id": "us-dallas-251",
    "name": "Grilled Salmon Pasta (GF)",
    "restaurant": "bellagreen",
    "restaurantAddress": "8401 Walnut Hill Lane, Ste 810, Dallas, TX 75231",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.7678,
      "lng": -96.80947
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 84,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 610,
    "protein": 36,
    "carbs": 30,
    "fat": 38,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Salmon Pasta (GF)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled Salmon Pasta (GF)"
  },
  {
    "id": "us-dallas-252",
    "name": "White Chicken Parm (GF)",
    "restaurant": "bellagreen",
    "restaurantAddress": "8401 Walnut Hill Lane, Ste 810, Dallas, TX 75231",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.77645,
      "lng": -96.80727
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 134,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 42,
    "carbs": 30,
    "fat": 32,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "White Chicken Parm (GF)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "White Chicken Parm (GF)"
  },
  {
    "id": "us-dallas-253",
    "name": "Herb Half Chicken with Roasted Vegetables",
    "restaurant": "bellagreen",
    "restaurantAddress": "8401 Walnut Hill Lane, Ste 810, Dallas, TX 75231",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.77222,
      "lng": -96.81042
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 198,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 50,
    "carbs": 30,
    "fat": 36,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "50g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Herb Half Chicken with Roasted Vegetables",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Herb Half Chicken with Roasted Vegetables"
  },
  {
    "id": "us-dallas-254",
    "name": "Green Curry Chicken",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "6401 Hillcrest Ave, Dallas, TX 75205",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.76999,
      "lng": -96.79706
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 177,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 36,
    "carbs": 20,
    "fat": 8,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Green Curry Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Green Curry Chicken from Original ChopShop"
  },
  {
    "id": "us-dallas-255",
    "name": "Green Curry Chicken",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "2222 McKinney Ave, Dallas, TX 75201",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.77288,
      "lng": -96.79939
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 347,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 36,
    "carbs": 20,
    "fat": 8,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Green Curry Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Green Curry Chicken from Original ChopShop"
  },
  {
    "id": "us-dallas-256",
    "name": "Herb Half Chicken with Roasted Vegetables",
    "restaurant": "bellagreen",
    "restaurantAddress": "8401 Walnut Hill Lane, Ste 810, Dallas, TX 75231",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.76561,
      "lng": -96.78267
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 108,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 50,
    "carbs": 30,
    "fat": 36,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "50g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Herb Half Chicken with Roasted Vegetables",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (640 kcal, 50g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-dallas-75214-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Lakewood)",
    "restaurantAddress": "6333 E Mockingbird Ln, Dallas, TX 75214",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.77833,
      "lng": -96.79076
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 278,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-dallas-75214-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Lakewood)",
    "restaurantAddress": "6333 E Mockingbird Ln, Dallas, TX 75214",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.76329,
      "lng": -96.80404
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 151,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-dallas-75204-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Uptown)",
    "restaurantAddress": "2501 McKinney Ave, Dallas, TX 75204",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.7648,
      "lng": -96.78406
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 149,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-dallas-75204-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Uptown)",
    "restaurantAddress": "2501 McKinney Ave, Dallas, TX 75204",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.77373,
      "lng": -96.78314
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 260,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-dallas-75204-3",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Uptown)",
    "restaurantAddress": "2501 McKinney Ave, Dallas, TX 75204",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.78751,
      "lng": -96.80929
    },
    "price": 21,
    "rating": 4.9,
    "reviewsCount": 245,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-dallas-75204-4",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Uptown)",
    "restaurantAddress": "2501 McKinney Ave, Dallas, TX 75204",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.7814,
      "lng": -96.78506
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 161,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-houston-263",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1700 Post Oak Blvd, Houston, TX 77056",
    "city": "Houston",
    "coordinates": {
      "lat": 29.74586,
      "lng": -95.37272
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 278,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-houston-264",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1700 Post Oak Blvd, Houston, TX 77056",
    "city": "Houston",
    "coordinates": {
      "lat": 29.75417,
      "lng": -95.36063
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 134,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-houston-265",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1515 Post Oak Blvd, Houston, TX",
    "city": "Houston",
    "coordinates": {
      "lat": 29.76801,
      "lng": -95.35911
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 187,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-houston-266",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1515 Post Oak Blvd, Houston, TX",
    "city": "Houston",
    "coordinates": {
      "lat": 29.76451,
      "lng": -95.36615
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 288,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-houston-267",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "4306 Westheimer Rd, Houston, TX 77027",
    "city": "Houston",
    "coordinates": {
      "lat": 29.74915,
      "lng": -95.36062
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 301,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled harissa honey chicken over brown rice with roasted eggplant and tzatziki in Houston near Montrose. Mediterranean macros for the Houston fitness community."
  },
  {
    "id": "us-houston-268",
    "name": "Double Chicken Power Salad (romaine + spinach, 8oz herb-marinated chicken, parmesan, broccoli, edamame, Caesar dressing)",
    "restaurant": "Salata",
    "restaurantAddress": "2703 Montrose Boulevard, Houston, TX 77006",
    "city": "Houston",
    "coordinates": {
      "lat": 29.76863,
      "lng": -95.36192
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 249,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 36,
    "carbs": 30,
    "fat": 33,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Power Salad (romaine + spinach, 8oz herb-marinated chicken, parmesan, broccoli, edamame, Caesar dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double Chicken Power Salad (romaine + spinach, 8oz herb-marinated chicken, parmesan, broccoli, edamame, Caesar dressing)"
  },
  {
    "id": "us-houston-269",
    "name": "Salmon & Shrimp Salad (romaine + kale, baked salmon + shrimp, cucumber, tomato, red onion, fresh herb vinaigrette)",
    "restaurant": "Salata",
    "restaurantAddress": "2703 Montrose Boulevard, Houston, TX 77006",
    "city": "Houston",
    "coordinates": {
      "lat": 29.75787,
      "lng": -95.36775
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 162,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 38,
    "carbs": 30,
    "fat": 26,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Salmon & Shrimp Salad (romaine + kale, baked salmon + shrimp, cucumber, tomato, red onion, fresh herb vinaigrette)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Salmon & Shrimp Salad (romaine + kale, baked salmon + shrimp, cucumber, tomato, red onion, fresh herb vinaigrette)"
  },
  {
    "id": "us-houston-270",
    "name": "Green Curry Chicken",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "1900 West Gray St, Houston, TX 77019",
    "city": "Houston",
    "coordinates": {
      "lat": 29.75937,
      "lng": -95.36451
    },
    "price": 14,
    "rating": 4.7,
    "reviewsCount": 215,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 36,
    "carbs": 20,
    "fat": 8,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Green Curry Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Green Curry Chicken from Original ChopShop"
  },
  {
    "id": "us-houston-271",
    "name": "Salmon & Shrimp Salad (romaine + kale, baked salmon + shrimp, cucumber, tomato, red onion, fresh herb vinaigrette)",
    "restaurant": "Salata",
    "restaurantAddress": "2703 Montrose Boulevard, Houston, TX 77006",
    "city": "Houston",
    "coordinates": {
      "lat": 29.76987,
      "lng": -95.3679
    },
    "price": 22,
    "rating": 4.8,
    "reviewsCount": 287,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 38,
    "carbs": 30,
    "fat": 26,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Salmon & Shrimp Salad (romaine + kale, baked salmon + shrimp, cucumber, tomato, red onion, fresh herb vinaigrette)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (510 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-houston-77006-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Montrose)",
    "restaurantAddress": "3401 Montrose Blvd, Houston, TX 77006",
    "city": "Houston",
    "coordinates": {
      "lat": 29.77049,
      "lng": -95.37943
    },
    "price": 22,
    "rating": 4.9,
    "reviewsCount": 256,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-houston-77006-2",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Montrose)",
    "restaurantAddress": "3401 Montrose Blvd, Houston, TX 77006",
    "city": "Houston",
    "coordinates": {
      "lat": 29.75056,
      "lng": -95.36099
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 96,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-houston-77056-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Galleria / Uptown)",
    "restaurantAddress": "1101 Uptown Park Blvd, Houston, TX 77056",
    "city": "Houston",
    "coordinates": {
      "lat": 29.7609,
      "lng": -95.37999
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 99,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-houston-77056-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Galleria / Uptown)",
    "restaurantAddress": "1101 Uptown Park Blvd, Houston, TX 77056",
    "city": "Houston",
    "coordinates": {
      "lat": 29.77238,
      "lng": -95.37972
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 143,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-houston-77056-3",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (Galleria / Uptown)",
    "restaurantAddress": "1101 Uptown Park Blvd, Houston, TX 77056",
    "city": "Houston",
    "coordinates": {
      "lat": 29.75581,
      "lng": -95.38209
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 148,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-houston-77019-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (River Oaks)",
    "restaurantAddress": "1972 W Gray St, Houston, TX 77019",
    "city": "Houston",
    "coordinates": {
      "lat": 29.77463,
      "lng": -95.3788
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 187,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-houston-77019-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (River Oaks)",
    "restaurantAddress": "1972 W Gray St, Houston, TX 77019",
    "city": "Houston",
    "coordinates": {
      "lat": 29.7487,
      "lng": -95.37498
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 165,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-houston-77019-3",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (River Oaks)",
    "restaurantAddress": "1972 W Gray St, Houston, TX 77019",
    "city": "Houston",
    "coordinates": {
      "lat": 29.77345,
      "lng": -95.38076
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 254,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-houston-77019-4",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (River Oaks)",
    "restaurantAddress": "1972 W Gray St, Houston, TX 77019",
    "city": "Houston",
    "coordinates": {
      "lat": 29.75736,
      "lng": -95.37616
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 265,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-phoenix-281",
    "name": "Chicken with Black Beans Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "333 Elm St, Phoenix, AZ",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.45941,
      "lng": -112.08607
    },
    "price": 14,
    "rating": 4.7,
    "reviewsCount": 357,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 310,
    "protein": 40,
    "carbs": 22,
    "fat": 7,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken with Black Beans Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken and black beans"
  },
  {
    "id": "us-phoenix-282",
    "name": "Barbacoa with Black Beans Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "333 Elm St, Phoenix, AZ",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.43712,
      "lng": -112.07441
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 60,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 32,
    "carbs": 24,
    "fat": 8,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Barbacoa with Black Beans Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Barbacoa beef with black beans"
  },
  {
    "id": "us-phoenix-283",
    "name": "Carnitas with Black Beans Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "333 Elm St, Phoenix, AZ",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.43786,
      "lng": -112.08552
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 358,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 340,
    "protein": 31,
    "carbs": 22,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "31g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Carnitas with Black Beans Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Carnitas with black beans"
  },
  {
    "id": "us-phoenix-284",
    "name": "Flying Avocado",
    "restaurant": "Flower Child",
    "restaurantAddress": "5013 N 44th St, Phoenix, AZ 85018",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.43896,
      "lng": -112.06789
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 191,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 650,
    "protein": 36,
    "carbs": 50,
    "fat": 34,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Flying Avocado",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Avocado, greens and grains bowl with a citrus finish."
  },
  {
    "id": "us-phoenix-285",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "2502 E Camelback Rd, Phoenix, AZ 85016",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.45509,
      "lng": -112.06403
    },
    "price": 14,
    "rating": 4.6,
    "reviewsCount": 123,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-phoenix-286",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "2502 E Camelback Rd, Phoenix, AZ 85016",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.43775,
      "lng": -112.07631
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-phoenix-287",
    "name": "Grilled Chicken Plate with Hummus & Tabbouleh",
    "restaurant": "Garbanzo Mediterranean Fresh",
    "restaurantAddress": "4575 E Cactus Rd, Ste 140, Phoenix, AZ 85032",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.45618,
      "lng": -112.06441
    },
    "price": 17,
    "rating": 4.6,
    "reviewsCount": 330,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 42,
    "carbs": 30,
    "fat": 26,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Plate with Hummus & Tabbouleh",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled Chicken Plate with Hummus & Tabbouleh"
  },
  {
    "id": "us-phoenix-288",
    "name": "Steak Kabob Salad",
    "restaurant": "Garbanzo Mediterranean Fresh",
    "restaurantAddress": "4575 E Cactus Rd, Ste 140, Phoenix, AZ 85032",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.43913,
      "lng": -112.06808
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 270,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 38,
    "carbs": 30,
    "fat": 23,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Steak Kabob Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Steak Kabob Salad"
  },
  {
    "id": "us-phoenix-289",
    "name": "Chicken Shwarma Plate",
    "restaurant": "Garbanzo Mediterranean Fresh",
    "restaurantAddress": "4575 E Cactus Rd, Ste 140, Phoenix, AZ 85032",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.45526,
      "lng": -112.06234
    },
    "price": 20,
    "rating": 4.6,
    "reviewsCount": 265,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 36,
    "carbs": 30,
    "fat": 20,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Shwarma Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken Shwarma Plate"
  },
  {
    "id": "us-phoenix-290",
    "name": "Green Curry Chicken",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "21001 N Tatum Blvd, Phoenix, AZ 85050",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.43936,
      "lng": -112.06259
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 36,
    "carbs": 20,
    "fat": 8,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Green Curry Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Green Curry Chicken from Original ChopShop"
  },
  {
    "id": "us-phoenix-291",
    "name": "Green Curry Chicken",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "1917 E Camelback Rd, Phoenix, AZ 85016",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.4526,
      "lng": -112.07936
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 167,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 36,
    "carbs": 20,
    "fat": 8,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Green Curry Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Green Curry Chicken from Original ChopShop"
  },
  {
    "id": "us-phoenix-292",
    "name": "Green Curry Chicken",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "4045 E Chandler Blvd, Phoenix, AZ 85048",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.44774,
      "lng": -112.06256
    },
    "price": 14,
    "rating": 4.7,
    "reviewsCount": 134,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 36,
    "carbs": 20,
    "fat": 8,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Green Curry Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Green Curry Chicken from Original ChopShop"
  },
  {
    "id": "us-phoenix-293",
    "name": "Green Curry Chicken",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "2502 E Camelback Rd, Phoenix, AZ 85016",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.45734,
      "lng": -112.07589
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 182,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 36,
    "carbs": 20,
    "fat": 8,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Green Curry Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Green Curry Chicken from Original ChopShop"
  },
  {
    "id": "us-phoenix-294",
    "name": "Grilled Chicken Plate with Hummus & Tabbouleh",
    "restaurant": "Garbanzo Mediterranean Fresh",
    "restaurantAddress": "4575 E Cactus Rd, Ste 140, Phoenix, AZ 85032",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.43902,
      "lng": -112.06553
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 145,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 42,
    "carbs": 30,
    "fat": 26,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Plate with Hummus & Tabbouleh",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-phoenix-85016-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Biltmore)",
    "restaurantAddress": "2502 E Camelback Rd, Phoenix, AZ 85016",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.45121,
      "lng": -112.06091
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 224,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-phoenix-85032-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Paradise Valley)",
    "restaurantAddress": "4740 E Cactus Rd, Phoenix, AZ 85032",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.45248,
      "lng": -112.07611
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-phoenix-85004-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Downtown Phoenix)",
    "restaurantAddress": "100 E Washington St, Phoenix, AZ 85004",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.45906,
      "lng": -112.08458
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 260,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-phoenix-85004-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Downtown Phoenix)",
    "restaurantAddress": "100 E Washington St, Phoenix, AZ 85004",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.45046,
      "lng": -112.06438
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 82,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-phoenix-85004-3",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Downtown Phoenix)",
    "restaurantAddress": "100 E Washington St, Phoenix, AZ 85004",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.46047,
      "lng": -112.06656
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-phoenix-85004-4",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Downtown Phoenix)",
    "restaurantAddress": "100 E Washington St, Phoenix, AZ 85004",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.45729,
      "lng": -112.06517
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 179,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-phoenix-85004-5",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Downtown Phoenix)",
    "restaurantAddress": "100 E Washington St, Phoenix, AZ 85004",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.46237,
      "lng": -112.06246
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 94,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-scottsdale-302",
    "name": "Smoked Salmon Benedict",
    "restaurant": "First Watch",
    "restaurantAddress": "34422 N Scottsdale Rd Ste 110-113, Scottsdale, AZ 85266",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.50402,
      "lng": -111.92534
    },
    "price": 16,
    "rating": 4.6,
    "reviewsCount": 229,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 570,
    "protein": 32,
    "carbs": 43,
    "fat": 30,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Smoked Salmon Benedict",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Smoked Salmon Benedict."
  },
  {
    "id": "us-scottsdale-303",
    "name": "Pesto Chicken Power Bowl",
    "restaurant": "First Watch",
    "restaurantAddress": "34422 N Scottsdale Rd Ste 110-113, Scottsdale, AZ 85266",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.50877,
      "lng": -111.91386
    },
    "price": 14,
    "rating": 4.8,
    "reviewsCount": 287,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 650,
    "protein": 31,
    "carbs": 52,
    "fat": 35,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "31g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Pesto Chicken Power Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Pesto Chicken Power Bowl."
  },
  {
    "id": "us-scottsdale-304",
    "name": "Cobb Salad",
    "restaurant": "Salad and Go",
    "restaurantAddress": "1465 S Higley Rd, Gilbert, AZ 85296",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.4954,
      "lng": -111.93243
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 326,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 39,
    "carbs": 11,
    "fat": 29,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "39g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Cobb Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Cobb Salad."
  },
  {
    "id": "us-scottsdale-305",
    "name": "Jalapeno Ranch Salad",
    "restaurant": "Salad and Go",
    "restaurantAddress": "1465 S Higley Rd, Gilbert, AZ 85296",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.5066,
      "lng": -111.92165
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 334,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 350,
    "protein": 32,
    "carbs": 18,
    "fat": 17,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Jalapeno Ranch Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Jalapeno Ranch Salad."
  },
  {
    "id": "us-scottsdale-306",
    "name": "Caesar Salad",
    "restaurant": "Salad and Go",
    "restaurantAddress": "1465 S Higley Rd, Gilbert, AZ 85296",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.50331,
      "lng": -111.91367
    },
    "price": 22,
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 280,
    "protein": 29,
    "carbs": 23,
    "fat": 8,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "29g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Caesar Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Caesar Salad."
  },
  {
    "id": "us-scottsdale-307",
    "name": "Fajita Salad",
    "restaurant": "Salad and Go",
    "restaurantAddress": "1465 S Higley Rd, Gilbert, AZ 85296",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.49245,
      "lng": -111.92577
    },
    "price": 15,
    "rating": 4.6,
    "reviewsCount": 67,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 310,
    "protein": 28,
    "carbs": 23,
    "fat": 12,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Fajita Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Fajita Salad."
  },
  {
    "id": "us-scottsdale-308",
    "name": "BBQ Ranch Salad",
    "restaurant": "Salad and Go",
    "restaurantAddress": "1465 S Higley Rd, Gilbert, AZ 85296",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.47966,
      "lng": -111.93259
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 318,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 370,
    "protein": 28,
    "carbs": 29,
    "fat": 16,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "BBQ Ranch Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "BBQ Ranch Salad."
  },
  {
    "id": "us-scottsdale-309",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "15191 N Scottsdale Rd, Scottsdale, AZ 85254",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.48217,
      "lng": -111.91644
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 215,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-scottsdale-310",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "15191 N Scottsdale Rd, Scottsdale, AZ 85254",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.4893,
      "lng": -111.92622
    },
    "price": 22,
    "rating": 4.9,
    "reviewsCount": 212,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-scottsdale-311",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "15191 N Scottsdale Rd, Scottsdale, AZ 85254",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.5045,
      "lng": -111.92124
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 277,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-scottsdale-312",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "15191 N Scottsdale Rd, Scottsdale, AZ 85254",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.48939,
      "lng": -111.91475
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 289,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-scottsdale-313",
    "name": "Blu Cobb Salad",
    "restaurant": "Blu Burger Grille",
    "restaurantAddress": "32409 N Scottsdale Rd, Scottsdale, AZ 85266",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.5022,
      "lng": -111.9297
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 333,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 42,
    "carbs": 12,
    "fat": 34,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Blu Cobb Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "All natural chicken breast, romaine lettuce, bleu cheese crumbles, avocado, center-cut applewood bacon, cherry tomatoes, and hardboiled egg with balsamic vinaigrette."
  },
  {
    "id": "us-scottsdale-314",
    "name": "Greek Salmon Salad",
    "restaurant": "Blu Burger Grille",
    "restaurantAddress": "32409 N Scottsdale Rd, Scottsdale, AZ 85266",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.4797,
      "lng": -111.9294
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 211,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 38,
    "carbs": 14,
    "fat": 30,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Greek Salmon Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled salmon on mixed greens with kalamata olives, cucumbers, tomatoes, red onions, feta cheese, pita croutons, and balsamic vinaigrette."
  },
  {
    "id": "us-scottsdale-315",
    "name": "Grilled Salmon",
    "restaurant": "Blu Burger Grille",
    "restaurantAddress": "32409 N Scottsdale Rd, Scottsdale, AZ 85266",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.48268,
      "lng": -111.93588
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 145,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 44,
    "carbs": 18,
    "fat": 19,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Salmon",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Premium grilled salmon in a white wine lemon butter sauce served with mashed potatoes and broccoli. One of the cleanest high-protein entrees on the menu."
  },
  {
    "id": "us-scottsdale-316",
    "name": "Green Curry Chicken",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "15323 N Scottsdale Rd, Scottsdale, AZ 85254",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.48466,
      "lng": -111.91563
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 233,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 36,
    "carbs": 20,
    "fat": 8,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Green Curry Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Green Curry Chicken from Original ChopShop"
  },
  {
    "id": "us-scottsdale-317",
    "name": "Green Curry Chicken",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "7014 E Camelback Rd, Scottsdale, AZ 85251",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.5028,
      "lng": -111.92433
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 266,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 36,
    "carbs": 20,
    "fat": 8,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Green Curry Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Green Curry Chicken from Original ChopShop"
  },
  {
    "id": "us-scottsdale-318",
    "name": "Green Curry Chicken",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "333 Scottsdale Rd, Scottsdale, AZ",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.50594,
      "lng": -111.92023
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 222,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 36,
    "carbs": 20,
    "fat": 8,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Green Curry Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Green Curry Chicken from Original ChopShop"
  },
  {
    "id": "us-scottsdale-319",
    "name": "Greek-ish Chop with Chicken",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "16205 N Scottsdale Rd, Scottsdale, AZ 85254",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.48724,
      "lng": -111.93838
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 311,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 428,
    "protein": 37,
    "carbs": 27,
    "fat": 19,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "11g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Greek-ish Chop with Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Roasted chicken, olives, cucumber, tomato, feta, chickpeas, mixed greens."
  },
  {
    "id": "us-scottsdale-320",
    "name": "Kale Caesar with Chicken",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "16205 N Scottsdale Rd, Scottsdale, AZ 85254",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.49853,
      "lng": -111.93644
    },
    "price": 20,
    "rating": 4.6,
    "reviewsCount": 308,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 33,
    "carbs": 33,
    "fat": 25,
    "fiber": 15,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "33g Clean Protein",
      "Zero Seed Oils",
      "15g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Kale Caesar with Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Roasted chicken, kale, parmesan, croutons, caesar dressing."
  },
  {
    "id": "us-scottsdale-321",
    "name": "Green Curry Chicken",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "1855 E Baseline Rd, Tempe, AZ 85283",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.48242,
      "lng": -111.93948
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 258,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 36,
    "carbs": 20,
    "fat": 8,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Green Curry Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Green Curry Chicken from Original ChopShop"
  },
  {
    "id": "us-scottsdale-322",
    "name": "Green Curry Chicken",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "1955 S Stapley Dr, Mesa, AZ 85204",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.49857,
      "lng": -111.9141
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 322,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 36,
    "carbs": 20,
    "fat": 8,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Green Curry Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Green Curry Chicken from Original ChopShop"
  },
  {
    "id": "us-scottsdale-323",
    "name": "Green Curry Chicken",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "3045 W Ray Rd, Chandler, AZ 85226",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.48009,
      "lng": -111.91842
    },
    "price": 21,
    "rating": 4.9,
    "reviewsCount": 312,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 36,
    "carbs": 20,
    "fat": 8,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Green Curry Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Green Curry Chicken from Original ChopShop"
  },
  {
    "id": "us-scottsdale-85251-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Old Town)",
    "restaurantAddress": "7158 E 5th Ave, Scottsdale, AZ 85251",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.49927,
      "lng": -111.93338
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 291,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-scottsdale-85251-2",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Old Town)",
    "restaurantAddress": "7158 E 5th Ave, Scottsdale, AZ 85251",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.4941,
      "lng": -111.91679
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 129,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-scottsdale-85251-3",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Old Town)",
    "restaurantAddress": "7158 E 5th Ave, Scottsdale, AZ 85251",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.49259,
      "lng": -111.93309
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 282,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-scottsdale-85251-4",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Old Town)",
    "restaurantAddress": "7158 E 5th Ave, Scottsdale, AZ 85251",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.50001,
      "lng": -111.91758
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 187,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-scottsdale-85258-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (McCormick Ranch)",
    "restaurantAddress": "10460 N 90th St, Scottsdale, AZ 85258",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.50364,
      "lng": -111.93955
    },
    "price": 17,
    "rating": 4.9,
    "reviewsCount": 195,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-scottsdale-85258-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (McCormick Ranch)",
    "restaurantAddress": "10460 N 90th St, Scottsdale, AZ 85258",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.49917,
      "lng": -111.92655
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 113,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-scottsdale-85258-3",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (McCormick Ranch)",
    "restaurantAddress": "10460 N 90th St, Scottsdale, AZ 85258",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.49988,
      "lng": -111.94077
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 248,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-scottsdale-85258-4",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (McCormick Ranch)",
    "restaurantAddress": "10460 N 90th St, Scottsdale, AZ 85258",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.50151,
      "lng": -111.93219
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 204,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-scottsdale-85258-5",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (McCormick Ranch)",
    "restaurantAddress": "10460 N 90th St, Scottsdale, AZ 85258",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.50443,
      "lng": -111.9199
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 240,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-san-diego-333",
    "name": "Mediterranean Steak Salad",
    "restaurant": "Tender Greens",
    "restaurantAddress": "3434 India St, San Diego, CA",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.72592,
      "lng": -117.17527
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 307,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 650,
    "protein": 39,
    "carbs": 19,
    "fat": 46,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "39g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Mediterranean Steak Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Steak with marinated feta"
  },
  {
    "id": "us-san-diego-334",
    "name": "Tuna Board",
    "restaurant": "Board & Brew",
    "restaurantAddress": "201 Oak Ave, Carlsbad, CA 92008",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.71832,
      "lng": -117.17532
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 238,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 645,
    "protein": 44,
    "carbs": 61,
    "fat": 25,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Tuna Board",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Officially published nutrition for the Tuna Board at Board & Brew, taken directly from the brand's own nutrition document."
  },
  {
    "id": "us-san-diego-335",
    "name": "Green Salad w/ Chicken",
    "restaurant": "Board & Brew",
    "restaurantAddress": "201 Oak Ave, Carlsbad, CA 92008",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.71935,
      "lng": -117.16799
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 590,
    "protein": 54,
    "carbs": 24,
    "fat": 31,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Green Salad w/ Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Officially published nutrition for the Green Salad w/ Chicken at Board & Brew, taken directly from the brand's own nutrition document. The published figures are for the salad as served; dressing is listed separately in the source."
  },
  {
    "id": "us-san-diego-336",
    "name": "Big Ripper (Grilled Cheese)",
    "restaurant": "Board & Brew",
    "restaurantAddress": "201 Oak Ave, Carlsbad, CA 92008",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.71031,
      "lng": -117.17249
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 257,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 550,
    "protein": 28,
    "carbs": 54,
    "fat": 25,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "28g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Big Ripper (Grilled Cheese)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Officially published nutrition for the Big Ripper (Grilled Cheese) at Board & Brew, taken directly from the brand's own nutrition document."
  },
  {
    "id": "us-san-diego-337",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "7007 Friars Rd, San Diego, CA 92108",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.71792,
      "lng": -117.17065
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 245,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-san-diego-338",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "7007 Friars Rd, San Diego, CA 92108",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.72858,
      "lng": -117.17495
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 181,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-san-diego-339",
    "name": "Chicken Caesar",
    "restaurant": "Urban Plates",
    "restaurantAddress": "3333 Fifth Ave, San Diego, CA",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.7171,
      "lng": -117.14901
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 356,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 630,
    "protein": 44,
    "carbs": 20,
    "fat": 42,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Caesar",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken caesar salad"
  },
  {
    "id": "us-san-diego-340",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3535 UTC Mall, San Diego, CA",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.72125,
      "lng": -117.1669
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 278,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-san-diego-341",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3535 UTC Mall, San Diego, CA",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.71787,
      "lng": -117.16936
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 143,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-san-diego-342",
    "name": "Chicken Teriyaki Bowl",
    "restaurant": "Second Nature",
    "restaurantAddress": "5026 Cass St, San Diego, CA 92109",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.72533,
      "lng": -117.15585
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 275,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 42,
    "carbs": 30,
    "fat": 32,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Teriyaki Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken Teriyaki Bowl"
  },
  {
    "id": "us-san-diego-343",
    "name": "Surf Break Chicken Salad",
    "restaurant": "Second Nature",
    "restaurantAddress": "5026 Cass St, San Diego, CA 92109",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.72984,
      "lng": -117.14857
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 333,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 38,
    "carbs": 30,
    "fat": 28,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Surf Break Chicken Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Surf Break Chicken Salad"
  },
  {
    "id": "us-san-diego-344",
    "name": "Grilled Chicken Shawarma",
    "restaurant": "Second Nature",
    "restaurantAddress": "5026 Cass St, San Diego, CA 92109",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.72666,
      "lng": -117.16719
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 242,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 530,
    "protein": 36,
    "carbs": 30,
    "fat": 30,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Shawarma",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled Chicken Shawarma"
  },
  {
    "id": "us-san-diego-345",
    "name": "Grilled Chicken Plate",
    "restaurant": "Palmys",
    "restaurantAddress": "976 Felspar St, San Diego, CA 92109",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.7245,
      "lng": -117.17161
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 300,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 40,
    "carbs": 30,
    "fat": 23,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled Chicken Plate"
  },
  {
    "id": "us-san-diego-346",
    "name": "Power Rancheros",
    "restaurant": "Parakeet Cafe",
    "restaurantAddress": "927 Silverado St, La Jolla, CA 92037",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.72677,
      "lng": -117.15624
    },
    "price": 16,
    "rating": 4.6,
    "reviewsCount": 248,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 36,
    "fat": 22,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Power Rancheros",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "~44g of protein: 3 over-easy eggs over a corn tortilla, black beans, turkey bacon, labneh, pico de gallo, pickled onions, red salsa."
  },
  {
    "id": "us-san-diego-347",
    "name": "Poke Bowl",
    "restaurant": "Parakeet Cafe",
    "restaurantAddress": "927 Silverado St, La Jolla, CA 92037",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.70218,
      "lng": -117.15849
    },
    "price": 14,
    "rating": 4.6,
    "reviewsCount": 81,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 47,
    "carbs": 62,
    "fat": 18,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "47g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Poke Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Wild caught ahi tuna, brown rice, pickled cabbage, cucumbers, edamame, carrots, sesame seeds, chives, spicy alioli."
  },
  {
    "id": "us-san-diego-348",
    "name": "Hooked On Tuna Sandwich",
    "restaurant": "Parakeet Cafe",
    "restaurantAddress": "927 Silverado St, La Jolla, CA 92037",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.72635,
      "lng": -117.14799
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 257,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 500,
    "protein": 37,
    "carbs": 43,
    "fat": 20,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Hooked On Tuna Sandwich",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Wild-caught ahi tuna tartar, greens, house-made avocado alioli, fresno peppers, pickled onions, house-made gf sourdough."
  },
  {
    "id": "us-san-diego-349",
    "name": "Chicken Teriyaki Bowl",
    "restaurant": "Parakeet Cafe",
    "restaurantAddress": "927 Silverado St, La Jolla, CA 92037",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.72504,
      "lng": -117.15776
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 310,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 54,
    "carbs": 69,
    "fat": 14,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Teriyaki Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-san-diego-92037-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (La Jolla)",
    "restaurantAddress": "927 Silverado St, San Diego, CA 92037",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.70448,
      "lng": -117.15473
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 135,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-san-diego-92109-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Pacific Beach)",
    "restaurantAddress": "4516 Mission Blvd, San Diego, CA 92109",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.73006,
      "lng": -117.16697
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 269,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-san-diego-92101-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Downtown / Little Italy)",
    "restaurantAddress": "1605 India St, San Diego, CA 92101",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.71018,
      "lng": -117.14803
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 128,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-san-diego-92101-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Downtown / Little Italy)",
    "restaurantAddress": "1605 India St, San Diego, CA 92101",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.70909,
      "lng": -117.15944
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 86,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-san-diego-92101-3",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Downtown / Little Italy)",
    "restaurantAddress": "1605 India St, San Diego, CA 92101",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.72573,
      "lng": -117.14818
    },
    "price": 22,
    "rating": 4.8,
    "reviewsCount": 279,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-san-diego-92101-4",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Downtown / Little Italy)",
    "restaurantAddress": "1605 India St, San Diego, CA 92101",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.70567,
      "lng": -117.16849
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 111,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-san-diego-92101-5",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Downtown / Little Italy)",
    "restaurantAddress": "1605 India St, San Diego, CA 92101",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.70453,
      "lng": -117.15419
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 164,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-boston-357",
    "name": "Fan Faves Plate",
    "restaurant": "Dig",
    "restaurantAddress": "Various Locations, Boston, MA",
    "city": "Boston",
    "coordinates": {
      "lat": 42.35772,
      "lng": -71.0658
    },
    "price": 16,
    "rating": 4.6,
    "reviewsCount": 144,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 390,
    "protein": 29,
    "carbs": 19,
    "fat": 22,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "29g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Fan Faves Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "A lighter plate of guest-favorite protein and sides."
  },
  {
    "id": "us-boston-358",
    "name": "Tarragon Mustard Chicken Plate",
    "restaurant": "Dig",
    "restaurantAddress": "Various Locations, Boston, MA",
    "city": "Boston",
    "coordinates": {
      "lat": 42.34914,
      "lng": -71.06656
    },
    "price": 15,
    "rating": 4.6,
    "reviewsCount": 71,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 29,
    "carbs": 41,
    "fat": 36,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "29g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Tarragon Mustard Chicken Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Charred chicken with tarragon mustard, grains and vegetables."
  },
  {
    "id": "us-boston-359",
    "name": "Southwest Sol Bowl",
    "restaurant": "Life Alive Organic Cafe",
    "restaurantAddress": "431 Boylston St, Boston, MA 02116",
    "city": "Boston",
    "coordinates": {
      "lat": 42.34724,
      "lng": -71.05071
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 150,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 27,
    "carbs": 94,
    "fat": 17,
    "fiber": 22,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "27g Clean Protein",
      "Zero Seed Oils",
      "22g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Southwest Sol Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Southwest Sol Bowl."
  },
  {
    "id": "us-boston-360",
    "name": "Jalapeno Ranch Chicken Burger",
    "restaurant": "b.good",
    "restaurantAddress": "Various Locations",
    "city": "Boston",
    "coordinates": {
      "lat": 42.36792,
      "lng": -71.06663
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 174,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 623,
    "protein": 51,
    "carbs": 36,
    "fat": 31,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Jalapeno Ranch Chicken Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Jalapeno Ranch Chicken Burger."
  },
  {
    "id": "us-boston-361",
    "name": "Kale Chicken Caesar Salad",
    "restaurant": "b.good",
    "restaurantAddress": "Various Locations",
    "city": "Boston",
    "coordinates": {
      "lat": 42.36346,
      "lng": -71.06638
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 310,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 506,
    "protein": 46,
    "carbs": 24,
    "fat": 25,
    "fiber": 13,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Zero Seed Oils",
      "13g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Kale Chicken Caesar Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Kale Chicken Caesar Salad."
  },
  {
    "id": "us-boston-362",
    "name": "The Cali Chicken Burger",
    "restaurant": "b.good",
    "restaurantAddress": "Various Locations",
    "city": "Boston",
    "coordinates": {
      "lat": 42.36152,
      "lng": -71.05346
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 303,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 586,
    "protein": 42,
    "carbs": 44,
    "fat": 27,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "The Cali Chicken Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "The Cali Chicken Burger."
  },
  {
    "id": "us-boston-363",
    "name": "Buffalo Chicken Bowl",
    "restaurant": "b.good",
    "restaurantAddress": "Various Locations",
    "city": "Boston",
    "coordinates": {
      "lat": 42.35895,
      "lng": -71.06608
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 279,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 462,
    "protein": 42,
    "carbs": 33,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Buffalo Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Buffalo Chicken Bowl."
  },
  {
    "id": "us-boston-364",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "101 Seaport Blvd, Boston, MA 02210",
    "city": "Boston",
    "coordinates": {
      "lat": 42.35532,
      "lng": -71.07366
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 238,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-boston-365",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "101 Seaport Blvd, Boston, MA 02210",
    "city": "Boston",
    "coordinates": {
      "lat": 42.36539,
      "lng": -71.05582
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 134,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-boston-366",
    "name": "Cobb Salad with Grilled Chicken",
    "restaurant": "Chick-fil-A",
    "restaurantAddress": "660 Washington St, Boston, MA 02111",
    "city": "Boston",
    "coordinates": {
      "lat": 42.35338,
      "lng": -71.04497
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 341,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 430,
    "protein": 40,
    "carbs": 27,
    "fat": 18,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Cobb Salad with Grilled Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Mixed greens with grilled chicken, bacon, eggs, and cheese"
  },
  {
    "id": "us-boston-367",
    "name": "Power Menu Bowl - Chicken",
    "restaurant": "Taco Bell",
    "restaurantAddress": "125 Tremont St, Boston, MA 02108",
    "city": "Boston",
    "coordinates": {
      "lat": 42.36893,
      "lng": -71.06017
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 280,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 26,
    "carbs": 49,
    "fat": 19,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "26g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Power Menu Bowl - Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken, rice, beans, cheese, guacamole, and pico de gallo"
  },
  {
    "id": "us-boston-368",
    "name": "Steak Mezze Salad",
    "restaurant": "CAVA (Kendall Square)",
    "restaurantAddress": "88 Ames St, Cambridge, MA 02142",
    "city": "Boston",
    "coordinates": {
      "lat": 42.35713,
      "lng": -71.06648
    },
    "price": 19,
    "rating": 4.6,
    "reviewsCount": 313,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 495,
    "protein": 33,
    "carbs": 30,
    "fat": 27,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "33g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Steak Mezze Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Steak Mezze Salad"
  },
  {
    "id": "us-boston-369",
    "name": "Buffalo Bowl (Grilled Chicken)",
    "restaurant": "b.good",
    "restaurantAddress": "301 Third St, Cambridge, MA 02142",
    "city": "Boston",
    "coordinates": {
      "lat": 42.35293,
      "lng": -71.05828
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 167,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 462,
    "protein": 42,
    "carbs": 30,
    "fat": 19,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Buffalo Bowl (Grilled Chicken)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Buffalo Bowl (Grilled Chicken)"
  },
  {
    "id": "us-boston-370",
    "name": "Egg and Eggplant Platter (double-protein build)",
    "restaurant": "Clover Food Lab",
    "restaurantAddress": "1326 Massachusetts Ave, Cambridge, MA 02138",
    "city": "Boston",
    "coordinates": {
      "lat": 42.34666,
      "lng": -71.05299
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 270,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 34,
    "carbs": 30,
    "fat": 34,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Egg and Eggplant Platter (double-protein build)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Egg and Eggplant Platter (double-protein build)"
  },
  {
    "id": "us-boston-371",
    "name": "Steamed Maine Lobster",
    "restaurant": "Atlantic Fish Company",
    "restaurantAddress": "761 Boylston St, Boston, MA 02116",
    "city": "Boston",
    "coordinates": {
      "lat": 42.3623,
      "lng": -71.04675
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 307,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 42,
    "carbs": 2,
    "fat": 49,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Steamed Maine Lobster",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "1 1/4 lb steamed Maine lobster."
  },
  {
    "id": "us-boston-372",
    "name": "Tuna Nicoise",
    "restaurant": "Atlantic Fish Company",
    "restaurantAddress": "761 Boylston St, Boston, MA 02116",
    "city": "Boston",
    "coordinates": {
      "lat": 42.36955,
      "lng": -71.04628
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 91,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 37,
    "carbs": 32,
    "fat": 34,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Tuna Nicoise",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "4 oz seared tuna, baby greens, olives, fingerling potato, hard boiled egg, green beans, tomato, cucumber, dijon vinaigrette"
  },
  {
    "id": "us-boston-373",
    "name": "Jalapeno Ranch Chicken Burger",
    "restaurant": "b.good",
    "restaurantAddress": "Various Locations",
    "city": "Boston",
    "coordinates": {
      "lat": 42.34644,
      "lng": -71.05336
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 267,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 623,
    "protein": 51,
    "carbs": 36,
    "fat": 31,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Jalapeno Ranch Chicken Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (623 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-boston-02116-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Back Bay)",
    "restaurantAddress": "761 Boylston St, Boston, MA 02116",
    "city": "Boston",
    "coordinates": {
      "lat": 42.34995,
      "lng": -71.06827
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 254,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-boston-02116-2",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Back Bay)",
    "restaurantAddress": "761 Boylston St, Boston, MA 02116",
    "city": "Boston",
    "coordinates": {
      "lat": 42.36068,
      "lng": -71.05035
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 243,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-boston-02210-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Seaport District)",
    "restaurantAddress": "49 Northern Ave, Boston, MA 02210",
    "city": "Boston",
    "coordinates": {
      "lat": 42.36108,
      "lng": -71.05601
    },
    "price": 17,
    "rating": 4.9,
    "reviewsCount": 181,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-boston-02210-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Seaport District)",
    "restaurantAddress": "49 Northern Ave, Boston, MA 02210",
    "city": "Boston",
    "coordinates": {
      "lat": 42.37333,
      "lng": -71.05746
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 218,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-boston-02210-3",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (Seaport District)",
    "restaurantAddress": "49 Northern Ave, Boston, MA 02210",
    "city": "Boston",
    "coordinates": {
      "lat": 42.34523,
      "lng": -71.07086
    },
    "price": 22,
    "rating": 4.8,
    "reviewsCount": 171,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-boston-02142-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Kendall Sq Cambridge)",
    "restaurantAddress": "650 E Kendall St, Boston, MA 02142",
    "city": "Boston",
    "coordinates": {
      "lat": 42.35557,
      "lng": -71.07258
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 196,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-boston-02142-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Kendall Sq Cambridge)",
    "restaurantAddress": "650 E Kendall St, Boston, MA 02142",
    "city": "Boston",
    "coordinates": {
      "lat": 42.36444,
      "lng": -71.06966
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 274,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-boston-02142-3",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Kendall Sq Cambridge)",
    "restaurantAddress": "650 E Kendall St, Boston, MA 02142",
    "city": "Boston",
    "coordinates": {
      "lat": 42.35969,
      "lng": -71.05863
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 229,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-denver-382",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "1505 Wynkoop St, Denver, CO 80202",
    "city": "Denver",
    "coordinates": {
      "lat": 39.75224,
      "lng": -104.99577
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 206,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled harissa honey chicken over brown rice with roasted eggplant and tzatziki in LoDo Denver near Union Station. Mediterranean macros for the Denver fitness community."
  },
  {
    "id": "us-denver-383",
    "name": "Grilled Chicken Caesar",
    "restaurant": "Just BE Kitchen",
    "restaurantAddress": "2364 15th St, Denver, CO 80202",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7291,
      "lng": -105.00154
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 314,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 38,
    "carbs": 14,
    "fat": 19,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Caesar",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grain-free grilled chicken over romaine with cashew caesar, toasted almonds, and shaved parmesan. Denver's best local paleo Caesar at 38g protein — 100% gluten and grain-free."
  },
  {
    "id": "us-denver-384",
    "name": "Paleo Chicken Wrap",
    "restaurant": "Just BE Kitchen",
    "restaurantAddress": "2364 15th St, Denver, CO 80202",
    "city": "Denver",
    "coordinates": {
      "lat": 39.74487,
      "lng": -104.98775
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 334,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 360,
    "protein": 34,
    "carbs": 18,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Paleo Chicken Wrap",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grass-fed grilled chicken wrapped in collard greens with avocado, roasted sweet potato, and herb tahini. 34g protein, fully paleo and grain-free. A Denver fitness staple."
  },
  {
    "id": "us-denver-385",
    "name": "Ravage - JBK Cobb Salad",
    "restaurant": "Just BE Kitchen",
    "restaurantAddress": "2364 15th St, Denver, CO 80202",
    "city": "Denver",
    "coordinates": {
      "lat": 39.74928,
      "lng": -104.98058
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 267,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 570,
    "protein": 42,
    "carbs": 16,
    "fat": 38,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Ravage - JBK Cobb Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Romaine, egg, bacon, chicken, almond feta or gorgonzola, tomato jam, dairy-free ranch."
  },
  {
    "id": "us-denver-386",
    "name": "Awakened - Breakfast Quesadilla",
    "restaurant": "Just BE Kitchen",
    "restaurantAddress": "2364 15th St, Denver, CO 80202",
    "city": "Denver",
    "coordinates": {
      "lat": 39.75177,
      "lng": -104.99635
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 30,
    "carbs": 30,
    "fat": 44,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "30g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Awakened - Breakfast Quesadilla",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Tortilla with eggs, choice of bacon, sausage or veggies, 'Cheddar' Whiz, jalapeno."
  },
  {
    "id": "us-denver-387",
    "name": "Everything - Bagel Sammie",
    "restaurant": "Just BE Kitchen",
    "restaurantAddress": "2364 15th St, Denver, CO 80202",
    "city": "Denver",
    "coordinates": {
      "lat": 39.73637,
      "lng": -104.98497
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 192,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 26,
    "carbs": 34,
    "fat": 36,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "26g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Everything - Bagel Sammie",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grain-free bagel, egg, cheddar, mustard sauce, choice of bacon or sausage."
  },
  {
    "id": "us-denver-388",
    "name": "Simplicity - Breakfast Plate",
    "restaurant": "Just BE Kitchen",
    "restaurantAddress": "2364 15th St, Denver, CO 80202",
    "city": "Denver",
    "coordinates": {
      "lat": 39.74231,
      "lng": -105.00124
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 239,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 26,
    "carbs": 38,
    "fat": 32,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "26g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Simplicity - Breakfast Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Two eggs, sweet potato hash, protein choice, tortilla or toast."
  },
  {
    "id": "us-denver-389",
    "name": "Diver Scallops",
    "restaurant": "Root Down",
    "restaurantAddress": "1600 W 33rd Ave, Denver, CO 80211",
    "city": "Denver",
    "coordinates": {
      "lat": 39.72474,
      "lng": -104.98854
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 284,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 290,
    "protein": 32,
    "carbs": 10,
    "fat": 14,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Diver Scallops",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled asparagus, charred fennel dashi, orange xo & thai basil oil."
  },
  {
    "id": "us-denver-390",
    "name": "Roasted Half Chicken",
    "restaurant": "Root Down",
    "restaurantAddress": "1600 W 33rd Ave, Denver, CO 80211",
    "city": "Denver",
    "coordinates": {
      "lat": 39.74066,
      "lng": -104.98246
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 88,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 590,
    "protein": 55,
    "carbs": 14,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "55g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Roasted Half Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicories, roasted tomatoes, pickled kumquat & sherry honey jus."
  },
  {
    "id": "us-denver-391",
    "name": "Rockfish Tom Kha",
    "restaurant": "Root Down",
    "restaurantAddress": "1600 W 33rd Ave, Denver, CO 80211",
    "city": "Denver",
    "coordinates": {
      "lat": 39.74127,
      "lng": -104.98207
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 300,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 34,
    "carbs": 24,
    "fat": 21,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Rockfish Tom Kha",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Bamboo rice cake, carrots, snap peas, scallion, radish & chili oil."
  },
  {
    "id": "us-denver-392",
    "name": "Surf & Turf",
    "restaurant": "Root Down",
    "restaurantAddress": "1600 W 33rd Ave, Denver, CO 80211",
    "city": "Denver",
    "coordinates": {
      "lat": 39.75237,
      "lng": -105.0001
    },
    "price": 16,
    "rating": 4.6,
    "reviewsCount": 70,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 550,
    "protein": 42,
    "carbs": 22,
    "fat": 33,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Surf & Turf",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Flatiron steak, sunny egg, herby smashed potatoes & creole crab béarnaise."
  },
  {
    "id": "us-denver-393",
    "name": "Shrimp & Succotash",
    "restaurant": "Root Down",
    "restaurantAddress": "1600 W 33rd Ave, Denver, CO 80211",
    "city": "Denver",
    "coordinates": {
      "lat": 39.75107,
      "lng": -104.98113
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 305,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 340,
    "protein": 27,
    "carbs": 20,
    "fat": 17,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "27g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Shrimp & Succotash",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Bacon, fava-corn succotash, BeatBox greens, tomato confit & bay leaf vin."
  },
  {
    "id": "us-denver-394",
    "name": "Masa Birria",
    "restaurant": "Root Down",
    "restaurantAddress": "1600 W 33rd Ave, Denver, CO 80211",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7477,
      "lng": -104.99891
    },
    "price": 16,
    "rating": 4.6,
    "reviewsCount": 105,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 30,
    "carbs": 26,
    "fat": 25,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "30g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Masa Birria",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Braised lamb, queso fresco, shishito-tomatillo salsa & consommé."
  },
  {
    "id": "us-denver-395",
    "name": "Lamb Sliders",
    "restaurant": "Root Down",
    "restaurantAddress": "1600 W 33rd Ave, Denver, CO 80211",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7515,
      "lng": -104.99944
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 105,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 26,
    "carbs": 30,
    "fat": 28,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "26g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Lamb Sliders",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Bacon, aged cheddar, harissa aioli, kale-carrot slaw & mint garlic yogurt."
  },
  {
    "id": "us-denver-396",
    "name": "Root Down Benedict",
    "restaurant": "Root Down",
    "restaurantAddress": "1600 W 33rd Ave, Denver, CO 80211",
    "city": "Denver",
    "coordinates": {
      "lat": 39.74123,
      "lng": -104.97794
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 309,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 30,
    "carbs": 28,
    "fat": 34,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "30g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Root Down Benedict",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Braised pork osso buco, crispy smashed potatoes, caramelized onions & espelette hollandaise."
  },
  {
    "id": "us-denver-397",
    "name": "Roasted Half Chicken",
    "restaurant": "Root Down",
    "restaurantAddress": "1600 W 33rd Ave, Denver, CO 80211",
    "city": "Denver",
    "coordinates": {
      "lat": 39.73375,
      "lng": -104.99353
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 149,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 590,
    "protein": 55,
    "carbs": 14,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "55g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Roasted Half Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (590 kcal, 55g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-denver-398",
    "name": "Surf & Turf",
    "restaurant": "Root Down",
    "restaurantAddress": "1600 W 33rd Ave, Denver, CO 80211",
    "city": "Denver",
    "coordinates": {
      "lat": 39.75018,
      "lng": -104.99819
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 105,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 550,
    "protein": 42,
    "carbs": 22,
    "fat": 33,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Surf & Turf",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (550 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-denver-399",
    "name": "Shrimp Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Denver, CO",
    "city": "Denver",
    "coordinates": {
      "lat": 39.72954,
      "lng": -104.98573
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 103,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 34,
    "carbs": 60,
    "fat": 16,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Shrimp Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-denver-400",
    "name": "Protein Smoothie",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Denver, CO",
    "city": "Denver",
    "coordinates": {
      "lat": 39.75251,
      "lng": -104.9874
    },
    "price": 14,
    "rating": 4.7,
    "reviewsCount": 141,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 28,
    "carbs": 42,
    "fat": 11,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Smoothie",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 28g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-denver-401",
    "name": "Protein Pancakes",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Denver, CO",
    "city": "Denver",
    "coordinates": {
      "lat": 39.73339,
      "lng": -104.97932
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 85,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 44,
    "fat": 10,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Pancakes",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-denver-402",
    "name": "Grilled Chicken Breast Plate",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Denver, CO",
    "city": "Denver",
    "coordinates": {
      "lat": 39.72896,
      "lng": -104.99733
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 244,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 58,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Breast Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-denver-403",
    "name": "Protein Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Denver, CO",
    "city": "Denver",
    "coordinates": {
      "lat": 39.75013,
      "lng": -105.00438
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 120,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 48,
    "carbs": 46,
    "fat": 18,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-denver-80206-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Cherry Creek)",
    "restaurantAddress": "2773 E 2nd Ave, Denver, CO 80206",
    "city": "Denver",
    "coordinates": {
      "lat": 39.73703,
      "lng": -105.0031
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 224,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-denver-80206-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Cherry Creek)",
    "restaurantAddress": "2773 E 2nd Ave, Denver, CO 80206",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7376,
      "lng": -105.00203
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 119,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-denver-80206-3",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Cherry Creek)",
    "restaurantAddress": "2773 E 2nd Ave, Denver, CO 80206",
    "city": "Denver",
    "coordinates": {
      "lat": 39.73036,
      "lng": -104.98236
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-denver-80206-4",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Cherry Creek)",
    "restaurantAddress": "2773 E 2nd Ave, Denver, CO 80206",
    "city": "Denver",
    "coordinates": {
      "lat": 39.75349,
      "lng": -104.99871
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 83,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-denver-80206-5",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Cherry Creek)",
    "restaurantAddress": "2773 E 2nd Ave, Denver, CO 80206",
    "city": "Denver",
    "coordinates": {
      "lat": 39.75289,
      "lng": -104.99497
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 214,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-seattle-409",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "401 Terry Ave N, Seattle, WA 98109",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.61604,
      "lng": -122.33641
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 205,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled harissa honey chicken over brown rice with roasted eggplant and tzatziki near Amazon SLU Seattle. Mediterranean macros for the tech fitness community."
  },
  {
    "id": "us-seattle-410",
    "name": "3-Fish Poke Bowl",
    "restaurant": "45th Stop N Shop & Poke Bar",
    "restaurantAddress": "2121 Terry Ave Suite 104, Seattle, WA 98121",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.60217,
      "lng": -122.33827
    },
    "price": 17,
    "rating": 4.6,
    "reviewsCount": 143,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 52,
    "carbs": 46,
    "fat": 13,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "3-Fish Poke Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Salmon, ahi tuna, and snapper over mixed greens with cucumber, edamame, avocado, and house ponzu. South Lake Union's top local protein bowl at 52g — a tech worker lunch staple."
  },
  {
    "id": "us-seattle-411",
    "name": "Shrimp Bowl",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Seattle, WA",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.60676,
      "lng": -122.33964
    },
    "price": 16,
    "rating": 4.6,
    "reviewsCount": 314,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 34,
    "carbs": 60,
    "fat": 16,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Shrimp Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-seattle-412",
    "name": "Protein Smoothie",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Seattle, WA",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.61698,
      "lng": -122.34486
    },
    "price": 21,
    "rating": 4.6,
    "reviewsCount": 308,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 28,
    "carbs": 42,
    "fat": 11,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Smoothie",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 28g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-seattle-413",
    "name": "Protein Pancakes",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Seattle, WA",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.59269,
      "lng": -122.32725
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 308,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 44,
    "fat": 10,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Pancakes",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-seattle-414",
    "name": "Grilled Chicken Breast Plate",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Seattle, WA",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.59571,
      "lng": -122.33967
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 250,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 58,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Breast Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-seattle-98101-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Downtown)",
    "restaurantAddress": "700 Pine St, Seattle, WA 98101",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.61656,
      "lng": -122.3207
    },
    "price": 21,
    "rating": 4.9,
    "reviewsCount": 194,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-seattle-98101-2",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Downtown)",
    "restaurantAddress": "700 Pine St, Seattle, WA 98101",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.59535,
      "lng": -122.33825
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 185,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-seattle-98101-3",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Downtown)",
    "restaurantAddress": "700 Pine St, Seattle, WA 98101",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.59607,
      "lng": -122.34448
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 180,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-seattle-98101-4",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Downtown)",
    "restaurantAddress": "700 Pine St, Seattle, WA 98101",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.60963,
      "lng": -122.3287
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 232,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-seattle-98101-5",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Downtown)",
    "restaurantAddress": "700 Pine St, Seattle, WA 98101",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.59908,
      "lng": -122.34476
    },
    "price": 22,
    "rating": 4.9,
    "reviewsCount": 198,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-seattle-98109-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (South Lake Union)",
    "restaurantAddress": "400 Fairview Ave N, Seattle, WA 98109",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.59354,
      "lng": -122.34139
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 210,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-seattle-98109-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (South Lake Union)",
    "restaurantAddress": "400 Fairview Ave N, Seattle, WA 98109",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.61304,
      "lng": -122.33089
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 264,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-seattle-98109-3",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (South Lake Union)",
    "restaurantAddress": "400 Fairview Ave N, Seattle, WA 98109",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.61383,
      "lng": -122.32349
    },
    "price": 17,
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-seattle-98109-4",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (South Lake Union)",
    "restaurantAddress": "400 Fairview Ave N, Seattle, WA 98109",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.6084,
      "lng": -122.33132
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 272,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-seattle-98121-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Belltown)",
    "restaurantAddress": "2200 1st Ave, Seattle, WA 98121",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.60776,
      "lng": -122.34382
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 249,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-seattle-98121-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Belltown)",
    "restaurantAddress": "2200 1st Ave, Seattle, WA 98121",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.60648,
      "lng": -122.33866
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-seattle-98121-3",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Belltown)",
    "restaurantAddress": "2200 1st Ave, Seattle, WA 98121",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.59326,
      "lng": -122.32846
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 199,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-seattle-98121-4",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Belltown)",
    "restaurantAddress": "2200 1st Ave, Seattle, WA 98121",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.5929,
      "lng": -122.31739
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 230,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-atlanta-428",
    "name": "Chicken with Black Beans Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "101 Maple St, Atlanta, GA",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.75949,
      "lng": -84.40021
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 334,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 310,
    "protein": 40,
    "carbs": 22,
    "fat": 7,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken with Black Beans Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken and black beans"
  },
  {
    "id": "us-atlanta-429",
    "name": "Barbacoa with Black Beans Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "101 Maple St, Atlanta, GA",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.75925,
      "lng": -84.38455
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 86,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 32,
    "carbs": 24,
    "fat": 8,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Barbacoa with Black Beans Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Barbacoa beef with black beans"
  },
  {
    "id": "us-atlanta-430",
    "name": "Carnitas with Black Beans Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "101 Maple St, Atlanta, GA",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.74915,
      "lng": -84.37373
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 217,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 340,
    "protein": 31,
    "carbs": 22,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "31g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Carnitas with Black Beans Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Carnitas with black beans"
  },
  {
    "id": "us-atlanta-431",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3393 Peachtree Rd NE, Atlanta, GA 30326",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.76127,
      "lng": -84.37689
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 343,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-atlanta-432",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3393 Peachtree Rd NE, Atlanta, GA 30326",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.74189,
      "lng": -84.37595
    },
    "price": 14,
    "rating": 4.7,
    "reviewsCount": 317,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-atlanta-433",
    "name": "Entrée: Chicken + Roasted Broccoli + Cauliflower Risotto",
    "restaurant": "Flower Child",
    "restaurantAddress": "3400 Around Lenox Dr, Atlanta, GA 30326",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.74039,
      "lng": -84.39181
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 322,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 570,
    "protein": 35,
    "carbs": 30,
    "fat": 34,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "35g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Entrée: Chicken + Roasted Broccoli + Cauliflower Risotto",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Entrée: Chicken + Roasted Broccoli + Cauliflower Risotto"
  },
  {
    "id": "us-atlanta-434",
    "name": "Roasted Garlic Chicken Pita",
    "restaurant": "CAVA",
    "restaurantAddress": "3655 Roswell Rd NE, Ste 100, Atlanta, GA 30342",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.75158,
      "lng": -84.38534
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 110,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 34,
    "carbs": 30,
    "fat": 26,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Roasted Garlic Chicken Pita",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Roasted Garlic Chicken Pita"
  },
  {
    "id": "us-atlanta-435",
    "name": "Grass-Fed Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "800 Peachtree St NE, Atlanta, GA 30308",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.75738,
      "lng": -84.40074
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 155,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 51,
    "carbs": 38,
    "fat": 29,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-Fed Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grass-fed beef patty with aged white cheddar at Colony Square Midtown Atlanta. 51g protein, top macro order for Midtown ATL fitness crowd."
  },
  {
    "id": "us-atlanta-436",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "1014 N Highland Ave NE, Atlanta, GA 30306",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.74187,
      "lng": -84.38613
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 329,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 68,
    "carbs": 52,
    "fat": 18,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "11g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double chicken over brown rice with black beans on Highland Ave Virginia-Highland Atlanta. 68g protein for the VaHi fitness community."
  },
  {
    "id": "us-atlanta-437",
    "name": "Rotisserie Chicken Tacos",
    "restaurant": "El Felix",
    "restaurantAddress": "675 Ponce De Leon Ave NE #1100, Atlanta, GA 30308",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.75889,
      "lng": -84.37514
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 299,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 40,
    "carbs": 32,
    "fat": 18,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Rotisserie Chicken Tacos",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Three rotisserie chicken tacos with house-made salsa, pickled veggies, and queso fresco at El Felix PCM Atlanta. 40g protein — a Ponce City Market lunch staple."
  },
  {
    "id": "us-atlanta-438",
    "name": "Carne Asada Bowl",
    "restaurant": "El Felix",
    "restaurantAddress": "675 Ponce De Leon Ave NE #1100, Atlanta, GA 30308",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.74847,
      "lng": -84.39216
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 83,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 38,
    "fat": 18,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Carne Asada Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled skirt steak over cilantro lime rice with roasted corn, black beans, and avocado at El Felix Ponce City Market. 44g protein, a clean macro bowl."
  },
  {
    "id": "us-atlanta-439",
    "name": "Entrée: Salmon + Kale Salad + Roasted Broccoli",
    "restaurant": "Flower Child (Westside)",
    "restaurantAddress": "1170 Howell Mill Rd, Atlanta, GA 30318",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.75017,
      "lng": -84.38484
    },
    "price": 20,
    "rating": 4.6,
    "reviewsCount": 226,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 36,
    "carbs": 30,
    "fat": 40,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Entrée: Salmon + Kale Salad + Roasted Broccoli",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Entrée: Salmon + Kale Salad + Roasted Broccoli"
  },
  {
    "id": "us-atlanta-440",
    "name": "Harissa Chicken Greens & Grains Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "3655 Roswell Rd NE, Ste 100, Atlanta, GA 30342",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.75477,
      "lng": -84.3994
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 243,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 37,
    "carbs": 30,
    "fat": 32,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Chicken Greens & Grains Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Harissa Chicken Greens & Grains Bowl"
  },
  {
    "id": "us-atlanta-441",
    "name": "Spiced Lamb Meatball Bowl (SuperGreens base)",
    "restaurant": "CAVA",
    "restaurantAddress": "3655 Roswell Rd NE, Ste 100, Atlanta, GA 30342",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.74481,
      "lng": -84.4004
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 343,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 41,
    "carbs": 30,
    "fat": 37,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "41g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Spiced Lamb Meatball Bowl (SuperGreens base)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Spiced Lamb Meatball Bowl (SuperGreens base)"
  },
  {
    "id": "us-atlanta-442",
    "name": "Chop-rito Chicken Bowl with Salsa Roja",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "2274 Peachtree Rd NW, Atlanta, GA 30309",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.74215,
      "lng": -84.39674
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 507,
    "protein": 45,
    "carbs": 30,
    "fat": 23,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chop-rito Chicken Bowl with Salsa Roja",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chop-rito Chicken Bowl with Salsa Roja"
  },
  {
    "id": "us-atlanta-443",
    "name": "Chicken & Prosciutto Sandwich",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "2274 Peachtree Rd NW, Atlanta, GA 30309",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.75109,
      "lng": -84.37579
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 251,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 64,
    "carbs": 30,
    "fat": 23,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken & Prosciutto Sandwich",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken & Prosciutto Sandwich"
  },
  {
    "id": "us-atlanta-444",
    "name": "Cheat Day Wrap",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "2274 Peachtree Rd NW, Atlanta, GA 30309",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.74231,
      "lng": -84.40046
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 358,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 590,
    "protein": 40,
    "carbs": 30,
    "fat": 34,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Cheat Day Wrap",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Cheat Day Wrap"
  },
  {
    "id": "us-atlanta-445",
    "name": "Grilled Chicken Quinoa Bowl",
    "restaurant": "Nourish + Bloom Market",
    "restaurantAddress": "2287-A Cascade Rd SW, Atlanta, GA 30311",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.75744,
      "lng": -84.39859
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 243,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 38,
    "carbs": 30,
    "fat": 28,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Quinoa Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled Chicken Quinoa Bowl"
  },
  {
    "id": "us-atlanta-446",
    "name": "Salmon Protein Bowl",
    "restaurant": "Nourish + Bloom Market",
    "restaurantAddress": "2287-A Cascade Rd SW, Atlanta, GA 30311",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.75377,
      "lng": -84.38738
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 302,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 36,
    "carbs": 30,
    "fat": 25,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Salmon Protein Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Salmon Protein Bowl"
  },
  {
    "id": "us-atlanta-447",
    "name": "Turkey & Greens Gourmet Sandwich",
    "restaurant": "Nourish + Bloom Market",
    "restaurantAddress": "2287-A Cascade Rd SW, Atlanta, GA 30311",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.74498,
      "lng": -84.38605
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 145,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 32,
    "carbs": 30,
    "fat": 32,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey & Greens Gourmet Sandwich",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Turkey & Greens Gourmet Sandwich"
  },
  {
    "id": "us-atlanta-448",
    "name": "Florida Black Grouper - Horseradish Crusted",
    "restaurant": "Chops Lobster Bar",
    "restaurantAddress": "70 W Paces Ferry Rd NW, Atlanta, GA 30305",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.75881,
      "lng": -84.37445
    },
    "price": 19,
    "rating": 4.6,
    "reviewsCount": 202,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 42,
    "carbs": 12,
    "fat": 18,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Florida Black Grouper - Horseradish Crusted",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Florida black grouper, horseradish crusted, with sautéed baby leaf spinach and pink grapefruit emulsion."
  },
  {
    "id": "us-atlanta-449",
    "name": "Chicken & Prosciutto Sandwich",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "2274 Peachtree Rd NW, Atlanta, GA 30309",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.75733,
      "lng": -84.39564
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 308,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 64,
    "carbs": 30,
    "fat": 23,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken & Prosciutto Sandwich",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (580 kcal, 64g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-atlanta-450",
    "name": "Chop-rito Chicken Bowl with Salsa Roja",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "2274 Peachtree Rd NW, Atlanta, GA 30309",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.73514,
      "lng": -84.39219
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 118,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 507,
    "protein": 45,
    "carbs": 30,
    "fat": 23,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chop-rito Chicken Bowl with Salsa Roja",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (507 kcal, 45g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-atlanta-451",
    "name": "Spiced Lamb Meatball Bowl (SuperGreens base)",
    "restaurant": "CAVA",
    "restaurantAddress": "3655 Roswell Rd NE, Ste 100, Atlanta, GA 30342",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.75232,
      "lng": -84.38389
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 184,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 41,
    "carbs": 30,
    "fat": 37,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "41g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Spiced Lamb Meatball Bowl (SuperGreens base)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 41g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-atlanta-452",
    "name": "Chicken with Black Beans Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "101 Maple St, Atlanta, GA",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.7341,
      "lng": -84.38083
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 270,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 310,
    "protein": 40,
    "carbs": 22,
    "fat": 7,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken with Black Beans Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (310 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-atlanta-453",
    "name": "Cheat Day Wrap",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "2274 Peachtree Rd NW, Atlanta, GA 30309",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.75184,
      "lng": -84.38844
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 294,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 590,
    "protein": 40,
    "carbs": 30,
    "fat": 34,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Cheat Day Wrap",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (590 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-atlanta-454",
    "name": "Grilled Chicken Quinoa Bowl",
    "restaurant": "Nourish + Bloom Market",
    "restaurantAddress": "2287-A Cascade Rd SW, Atlanta, GA 30311",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.75437,
      "lng": -84.38821
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 230,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 38,
    "carbs": 30,
    "fat": 28,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Quinoa Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-atlanta-455",
    "name": "Harissa Chicken Greens & Grains Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "3655 Roswell Rd NE, Ste 100, Atlanta, GA 30342",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.76014,
      "lng": -84.38403
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 295,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 37,
    "carbs": 30,
    "fat": 32,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Chicken Greens & Grains Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (560 kcal, 37g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-atlanta-456",
    "name": "Entrée: Salmon + Kale Salad + Roasted Broccoli",
    "restaurant": "Flower Child (Westside)",
    "restaurantAddress": "1170 Howell Mill Rd, Atlanta, GA 30318",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.74986,
      "lng": -84.39668
    },
    "price": 22,
    "rating": 4.9,
    "reviewsCount": 326,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 36,
    "carbs": 30,
    "fat": 40,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Entrée: Salmon + Kale Salad + Roasted Broccoli",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-atlanta-457",
    "name": "Salmon Protein Bowl",
    "restaurant": "Nourish + Bloom Market",
    "restaurantAddress": "2287-A Cascade Rd SW, Atlanta, GA 30311",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.76283,
      "lng": -84.37828
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 334,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 36,
    "carbs": 30,
    "fat": 25,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Salmon Protein Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (490 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-atlanta-30326-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Buckhead)",
    "restaurantAddress": "3393 Peachtree Rd NE, Atlanta, GA 30326",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.73808,
      "lng": -84.37599
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 246,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-atlanta-30326-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Buckhead)",
    "restaurantAddress": "3393 Peachtree Rd NE, Atlanta, GA 30326",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.74948,
      "lng": -84.39263
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-portland-460",
    "name": "DIY Taco Bowl",
    "restaurant": "Laughing Planet",
    "restaurantAddress": "2222 Hawthorne Blvd, Portland, OR",
    "city": "Portland",
    "coordinates": {
      "lat": 45.51178,
      "lng": -122.66603
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 222,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 650,
    "protein": 29,
    "carbs": 89,
    "fat": 20,
    "fiber": 15,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "29g Clean Protein",
      "Zero Seed Oils",
      "15g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "DIY Taco Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Build-your-own taco bowl."
  },
  {
    "id": "us-portland-461",
    "name": "Spanky's Bowl",
    "restaurant": "Laughing Planet",
    "restaurantAddress": "2222 Hawthorne Blvd, Portland, OR",
    "city": "Portland",
    "coordinates": {
      "lat": 45.51285,
      "lng": -122.667
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 299,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 27,
    "carbs": 52,
    "fat": 34,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "27g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Spanky's Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Spanky's bowl."
  },
  {
    "id": "us-portland-462",
    "name": "Pacific Quinoa Salad",
    "restaurant": "Greenleaf Juicing Company",
    "restaurantAddress": "2424 SE Division St, Portland, OR",
    "city": "Portland",
    "coordinates": {
      "lat": 45.52818,
      "lng": -122.68154
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 156,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 512,
    "protein": 24,
    "carbs": 58,
    "fat": 20,
    "fiber": 23,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "24g Clean Protein",
      "Zero Seed Oils",
      "23g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Pacific Quinoa Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Quinoa salad with plant protein and greens (24 oz)."
  },
  {
    "id": "us-portland-463",
    "name": "Pacific Quinoa Salad",
    "restaurant": "Greenleaf Juicing Company",
    "restaurantAddress": "2424 SE Division St, Portland, OR",
    "city": "Portland",
    "coordinates": {
      "lat": 45.50208,
      "lng": -122.66818
    },
    "price": 22,
    "rating": 4.6,
    "reviewsCount": 155,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 512,
    "protein": 24,
    "carbs": 58,
    "fat": 20,
    "fiber": 23,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "24g Clean Protein",
      "Zero Seed Oils",
      "23g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Pacific Quinoa Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (512 kcal, 24g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-portland-97201-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Downtown)",
    "restaurantAddress": "1125 SW Morrison St, Portland, OR 97201",
    "city": "Portland",
    "coordinates": {
      "lat": 45.5257,
      "lng": -122.68319
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 100,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-portland-97201-2",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Downtown)",
    "restaurantAddress": "1125 SW Morrison St, Portland, OR 97201",
    "city": "Portland",
    "coordinates": {
      "lat": 45.52863,
      "lng": -122.67976
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 197,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-portland-97201-3",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Downtown)",
    "restaurantAddress": "1125 SW Morrison St, Portland, OR 97201",
    "city": "Portland",
    "coordinates": {
      "lat": 45.5226,
      "lng": -122.67218
    },
    "price": 22,
    "rating": 4.8,
    "reviewsCount": 203,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-portland-97201-4",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Downtown)",
    "restaurantAddress": "1125 SW Morrison St, Portland, OR 97201",
    "city": "Portland",
    "coordinates": {
      "lat": 45.50422,
      "lng": -122.69296
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 115,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-portland-97201-5",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Downtown)",
    "restaurantAddress": "1125 SW Morrison St, Portland, OR 97201",
    "city": "Portland",
    "coordinates": {
      "lat": 45.50686,
      "lng": -122.6887
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 135,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-portland-97209-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Pearl District)",
    "restaurantAddress": "1015 NW Lovejoy St, Portland, OR 97209",
    "city": "Portland",
    "coordinates": {
      "lat": 45.51832,
      "lng": -122.68948
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-portland-97209-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Pearl District)",
    "restaurantAddress": "1015 NW Lovejoy St, Portland, OR 97209",
    "city": "Portland",
    "coordinates": {
      "lat": 45.52295,
      "lng": -122.67936
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 294,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-portland-97209-3",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (Pearl District)",
    "restaurantAddress": "1015 NW Lovejoy St, Portland, OR 97209",
    "city": "Portland",
    "coordinates": {
      "lat": 45.52131,
      "lng": -122.66467
    },
    "price": 17,
    "rating": 4.9,
    "reviewsCount": 109,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-portland-97209-4",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Pearl District)",
    "restaurantAddress": "1015 NW Lovejoy St, Portland, OR 97209",
    "city": "Portland",
    "coordinates": {
      "lat": 45.51027,
      "lng": -122.67866
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 268,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-portland-97209-5",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Pearl District)",
    "restaurantAddress": "1015 NW Lovejoy St, Portland, OR 97209",
    "city": "Portland",
    "coordinates": {
      "lat": 45.51146,
      "lng": -122.69126
    },
    "price": 21,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-nashville-474",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "422 21st Avenue South, Nashville, TN 37203",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.16449,
      "lng": -86.77488
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 71,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 645,
    "protein": 38,
    "carbs": 52,
    "fat": 32,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Harissa honey marinated chicken over brown rice with roasted red pepper hummus, tomato + cucumber, pickled onions and tzatziki. Bold spice, 38g protein."
  },
  {
    "id": "us-nashville-475",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "208 Commerce St, Nashville, TN 37201",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.14857,
      "lng": -86.78997
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 115,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 68,
    "carbs": 26,
    "fat": 13,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double grilled chicken with brown rice, black beans, fresh tomato salsa and romaine lettuce. The ultimate high-protein fast-casual meal at 68g protein for under 500 calories."
  },
  {
    "id": "us-nashville-476",
    "name": "Chimmi Churrasco Grain Bowl",
    "restaurant": "Greenery Co.",
    "restaurantAddress": "1705 21st Avenue South, Nashville, TN 37212",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.15958,
      "lng": -86.79136
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 336,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 38,
    "carbs": 45,
    "fat": 28,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chimmi Churrasco Grain Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Seared steak, quinoa, kale, roasted sweet potato, roasted broccoli, radish, toasted pumpkin seeds, and chimichurri. The signature high-protein bowl at Hillsboro Village's top local healthy spot. Estimated macros based on ingredients."
  },
  {
    "id": "us-nashville-477",
    "name": "Chicken Mamacita Grain Bowl",
    "restaurant": "Radish Kitchen",
    "restaurantAddress": "975 Main Street, Nashville, TN 37206",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.17256,
      "lng": -86.77106
    },
    "price": 22,
    "rating": 4.8,
    "reviewsCount": 261,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 610,
    "protein": 30,
    "carbs": 55,
    "fat": 30,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "30g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Mamacita Grain Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken, corn and black bean salsa, tomatoes, toasted pumpkin seeds, tortilla strips, cotija cheese, and tomatillo lime dressing over a warm grain base. 30g protein, locally sourced."
  },
  {
    "id": "us-nashville-478",
    "name": "The Southern Cobb Salad",
    "restaurant": "Greenery Co.",
    "restaurantAddress": "1705 21st Avenue South, Nashville, TN 37212",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.15195,
      "lng": -86.78308
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 150,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 34,
    "carbs": 14,
    "fat": 28,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "The Southern Cobb Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Roasted chicken, romaine, locally sourced hard boiled egg, Gifford's bacon, blue cheese, marinated beets, cherry tomatoes, and jalapeno dijon vinaigrette. A Nashville-local take on the classic cobb with 34g estimated protein."
  },
  {
    "id": "us-nashville-479",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "1900 Eastland Ave, Nashville, TN 37206",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.17288,
      "lng": -86.78904
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 193,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 68,
    "carbs": 52,
    "fat": 18,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "11g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double chicken over brown rice with black beans and fresh salsa in East Nashville. 68g protein for the growing East Nashville fitness community."
  },
  {
    "id": "us-nashville-480",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "208 Commerce St, Nashville, TN 37201",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.17173,
      "lng": -86.77009
    },
    "price": 21,
    "rating": 4.6,
    "reviewsCount": 314,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 68,
    "carbs": 26,
    "fat": 13,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (490 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-nashville-481",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "422 21st Avenue South, Nashville, TN 37203",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.1648,
      "lng": -86.77505
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 67,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 645,
    "protein": 38,
    "carbs": 52,
    "fat": 32,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (645 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-nashville-482",
    "name": "Chimmi Churrasco Grain Bowl",
    "restaurant": "Greenery Co.",
    "restaurantAddress": "1705 21st Avenue South, Nashville, TN 37212",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.1765,
      "lng": -86.76767
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 135,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 38,
    "carbs": 45,
    "fat": 28,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chimmi Churrasco Grain Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (580 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-nashville-483",
    "name": "The Southern Cobb Salad",
    "restaurant": "Greenery Co.",
    "restaurantAddress": "1705 21st Avenue South, Nashville, TN 37212",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.15776,
      "lng": -86.79125
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 356,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 34,
    "carbs": 14,
    "fat": 28,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "The Southern Cobb Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (440 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-nashville-484",
    "name": "Chicken Mamacita Grain Bowl",
    "restaurant": "Radish Kitchen",
    "restaurantAddress": "975 Main Street, Nashville, TN 37206",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.15456,
      "lng": -86.7667
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 65,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 610,
    "protein": 30,
    "carbs": 55,
    "fat": 30,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "30g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Mamacita Grain Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (610 kcal, 30g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-nashville-37212-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Hillsboro Village)",
    "restaurantAddress": "1705 21st Ave S, Nashville, TN 37212",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.15286,
      "lng": -86.77804
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 241,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-nashville-37203-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Midtown / Gulch)",
    "restaurantAddress": "300 11th Ave S, Nashville, TN 37203",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.15623,
      "lng": -86.77902
    },
    "price": 22,
    "rating": 4.8,
    "reviewsCount": 240,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-nashville-37203-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Midtown / Gulch)",
    "restaurantAddress": "300 11th Ave S, Nashville, TN 37203",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.17225,
      "lng": -86.78565
    },
    "price": 22,
    "rating": 4.8,
    "reviewsCount": 154,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-nashville-37203-3",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (Midtown / Gulch)",
    "restaurantAddress": "300 11th Ave S, Nashville, TN 37203",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.15917,
      "lng": -86.76815
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 101,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-nashville-37206-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (East Nashville)",
    "restaurantAddress": "900 Main St, Nashville, TN 37206",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.15086,
      "lng": -86.77911
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 242,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-nashville-37206-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (East Nashville)",
    "restaurantAddress": "900 Main St, Nashville, TN 37206",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.16243,
      "lng": -86.78872
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 87,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-washington-491",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1225 Old Georgetown Rd, Washington, DC 20007",
    "city": "Washington",
    "coordinates": {
      "lat": 38.90543,
      "lng": -77.04757
    },
    "price": 20,
    "rating": 4.6,
    "reviewsCount": 135,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-washington-492",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1225 Old Georgetown Rd, Washington, DC 20007",
    "city": "Washington",
    "coordinates": {
      "lat": 38.91425,
      "lng": -77.04615
    },
    "price": 17,
    "rating": 4.6,
    "reviewsCount": 61,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-washington-493",
    "name": "Chicken with Black Beans Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "101 Maple St, Arlington, VA",
    "city": "Washington",
    "coordinates": {
      "lat": 38.90624,
      "lng": -77.03721
    },
    "price": 14,
    "rating": 4.6,
    "reviewsCount": 239,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 310,
    "protein": 40,
    "carbs": 22,
    "fat": 7,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken with Black Beans Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (310 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-washington-20007-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Georgetown)",
    "restaurantAddress": "3333 M St NW, Washington, DC 20007",
    "city": "Washington",
    "coordinates": {
      "lat": 38.91412,
      "lng": -77.02858
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 230,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-washington-20007-2",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Georgetown)",
    "restaurantAddress": "3333 M St NW, Washington, DC 20007",
    "city": "Washington",
    "coordinates": {
      "lat": 38.91117,
      "lng": -77.03805
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 283,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-washington-20007-3",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Georgetown)",
    "restaurantAddress": "3333 M St NW, Washington, DC 20007",
    "city": "Washington",
    "coordinates": {
      "lat": 38.91119,
      "lng": -77.04575
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 204,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-washington-20001-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Shaw / Mount Vernon)",
    "restaurantAddress": "1000 K St NW, Washington, DC 20001",
    "city": "Washington",
    "coordinates": {
      "lat": 38.89256,
      "lng": -77.0452
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 110,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-washington-20001-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Shaw / Mount Vernon)",
    "restaurantAddress": "1000 K St NW, Washington, DC 20001",
    "city": "Washington",
    "coordinates": {
      "lat": 38.89266,
      "lng": -77.03395
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 198,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-washington-20001-3",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (Shaw / Mount Vernon)",
    "restaurantAddress": "1000 K St NW, Washington, DC 20001",
    "city": "Washington",
    "coordinates": {
      "lat": 38.90914,
      "lng": -77.04559
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 223,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-washington-20001-4",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Shaw / Mount Vernon)",
    "restaurantAddress": "1000 K St NW, Washington, DC 20001",
    "city": "Washington",
    "coordinates": {
      "lat": 38.9204,
      "lng": -77.03252
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 163,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-washington-20001-5",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Shaw / Mount Vernon)",
    "restaurantAddress": "1000 K St NW, Washington, DC 20001",
    "city": "Washington",
    "coordinates": {
      "lat": 38.89783,
      "lng": -77.04121
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 205,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-washington-20005-1",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Downtown DC)",
    "restaurantAddress": "1401 I St NW, Washington, DC 20005",
    "city": "Washington",
    "coordinates": {
      "lat": 38.91859,
      "lng": -77.02404
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 97,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-washington-20005-2",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Downtown DC)",
    "restaurantAddress": "1401 I St NW, Washington, DC 20005",
    "city": "Washington",
    "coordinates": {
      "lat": 38.91224,
      "lng": -77.04678
    },
    "price": 21,
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-washington-20005-3",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Downtown DC)",
    "restaurantAddress": "1401 I St NW, Washington, DC 20005",
    "city": "Washington",
    "coordinates": {
      "lat": 38.9208,
      "lng": -77.04572
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 294,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-washington-20005-4",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Downtown DC)",
    "restaurantAddress": "1401 I St NW, Washington, DC 20005",
    "city": "Washington",
    "coordinates": {
      "lat": 38.90449,
      "lng": -77.05092
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 171,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-washington-20005-5",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Downtown DC)",
    "restaurantAddress": "1401 I St NW, Washington, DC 20005",
    "city": "Washington",
    "coordinates": {
      "lat": 38.90945,
      "lng": -77.03295
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 137,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-charlotte-507",
    "name": "Chicken Pimientos",
    "restaurant": "Barcelona Wine Bar",
    "restaurantAddress": "1829 Cleveland Ave, South End, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.23913,
      "lng": -80.84335
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 146,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 48,
    "carbs": 22,
    "fat": 27,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Pimientos",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Half-portion roasted chicken with potatoes, lemon, and hot cherry peppers. Best high-protein large plate."
  },
  {
    "id": "us-charlotte-508",
    "name": "Wow Lomito Sandwich",
    "restaurant": "Viva Chicken",
    "restaurantAddress": "1320 Belmont Ave, Plaza Midwood, Charlotte, NC 28205",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.2206,
      "lng": -80.84074
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 215,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 35,
    "carbs": 34,
    "fat": 34,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "35g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wow Lomito Sandwich",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Officially published nutrition for the Wow Lomito Sandwich at Viva Chicken, taken directly from the brand's own nutrition document."
  },
  {
    "id": "us-charlotte-509",
    "name": "Chicken Pimientos",
    "restaurant": "Barcelona Wine Bar",
    "restaurantAddress": "300 S Tryon St, Charlotte, NC 28202",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.22325,
      "lng": -80.83819
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 101,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 48,
    "carbs": 22,
    "fat": 27,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Pimientos",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Half-portion roasted chicken with potatoes, lemon, and hot cherry peppers. Best high-protein large plate."
  },
  {
    "id": "us-charlotte-510",
    "name": "Chicken Shawarma Plate",
    "restaurant": "Zeitouni Mediterranean Grill",
    "restaurantAddress": "3419 Toringdon Way A124, SouthPark, Charlotte, NC 28277",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.22764,
      "lng": -80.82822
    },
    "price": 14,
    "rating": 4.8,
    "reviewsCount": 172,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 42,
    "carbs": 36,
    "fat": 25,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Shawarma Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Marinated chicken shawarma with saffron rice, Lebanese salad, hummus, and garlic sauce. A SouthPark staple for macro-conscious Mediterranean dining."
  },
  {
    "id": "us-charlotte-511",
    "name": "Mixed Grill Plate",
    "restaurant": "Zeitouni Mediterranean Grill",
    "restaurantAddress": "3419 Toringdon Way A124, SouthPark, Charlotte, NC 28277",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.23351,
      "lng": -80.84804
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 97,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 52,
    "carbs": 28,
    "fat": 33,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Mixed Grill Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Combination of chicken and beef kafta kebabs with rice, salad, and hummus. 52g protein — the highest-protein plate at Zeitouni SouthPark."
  },
  {
    "id": "us-charlotte-512",
    "name": "Salmon Kebab Plate",
    "restaurant": "Zeitouni Mediterranean Grill",
    "restaurantAddress": "3419 Toringdon Way A124, SouthPark, Charlotte, NC 28277",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.21438,
      "lng": -80.84469
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 115,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 38,
    "carbs": 28,
    "fat": 25,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Salmon Kebab Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled salmon kebab with Lebanese rice, garden salad, and tahini. A lighter, omega-3 rich high-protein Lebanese plate."
  },
  {
    "id": "us-charlotte-513",
    "name": "Steak Mezze Salad",
    "restaurant": "CAVA",
    "restaurantAddress": "1055 Metropolitan Ave, South End, Charlotte, NC 28204",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.22244,
      "lng": -80.85457
    },
    "price": 20,
    "rating": 4.6,
    "reviewsCount": 311,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 495,
    "protein": 33,
    "carbs": 22,
    "fat": 31,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "33g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Steak Mezze Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled steak over a bed of supergreens with roasted veggies, pickled onions, feta, tzatziki and Greek dressing. High protein, lower carb - 33g protein at just 495 calories."
  },
  {
    "id": "us-charlotte-514",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "100 W Trade St, Uptown, Charlotte, NC 28202",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.22287,
      "lng": -80.83735
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 218,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 68,
    "carbs": 26,
    "fat": 13,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double grilled chicken with brown rice, black beans, fresh tomato salsa and romaine. The go-to high-protein order at Chipotle Uptown Charlotte - 68g protein under 500 calories."
  },
  {
    "id": "us-charlotte-515",
    "name": "Wood-Fire Salmon Caesar Salad",
    "restaurant": "Kid Cashew Wood Fire Grill",
    "restaurantAddress": "1608 East Blvd, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.22033,
      "lng": -80.83945
    },
    "price": 21,
    "rating": 4.9,
    "reviewsCount": 313,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 38,
    "carbs": 12,
    "fat": 24,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wood-Fire Salmon Caesar Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Wild-caught salmon wood-fire grilled and served over chopped romaine with baked chickpeas, shaved parmesan, and vegan caesar dressing. Charlotte's best elevated healthy salad with an estimated 38g protein."
  },
  {
    "id": "us-charlotte-516",
    "name": "Half Rotisserie Chicken Plate",
    "restaurant": "Yafo Kitchen",
    "restaurantAddress": "1231A East Blvd, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.23296,
      "lng": -80.84804
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 102,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 52,
    "carbs": 28,
    "fat": 24,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Half Rotisserie Chicken Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Half of a slow-roasted rotisserie chicken served with choice of two sides and warm pita. Antibiotic-free, marinated in Mediterranean spices. One of Charlotte's best local high-protein plates at an estimated 52g protein."
  },
  {
    "id": "us-charlotte-517",
    "name": "Grilled Steak Kabob Bowl",
    "restaurant": "Yafo Kitchen",
    "restaurantAddress": "1231A East Blvd, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.21698,
      "lng": -80.85185
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 195,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 42,
    "carbs": 38,
    "fat": 19,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Steak Kabob Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Tender steak kabobs marinated in honey and Aleppo pepper with Turkish spices, served over a grain bowl base with Israeli salad and tahini. 42g estimated protein - one of Charlotte's best local protein bowls."
  },
  {
    "id": "us-charlotte-518",
    "name": "High Protein Plate",
    "restaurant": "Naked Farmer",
    "restaurantAddress": "2725 South Blvd, South End, Charlotte, NC 28209",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.23306,
      "lng": -80.84544
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 343,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 52,
    "carbs": 24,
    "fat": 24,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "High Protein Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Rosemary roasted chicken breast + grass-fed steak, charred broccoli, and roasted sweet potatoes. The highest-protein plate on the menu at Naked Farmer Charlotte."
  },
  {
    "id": "us-charlotte-519",
    "name": "Skinny Protein Plate",
    "restaurant": "Naked Farmer",
    "restaurantAddress": "2725 South Blvd, South End, Charlotte, NC 28209",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.22325,
      "lng": -80.84498
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 232,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 48,
    "carbs": 22,
    "fat": 22,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Skinny Protein Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grass-fed steak + rosemary roasted chicken breast, tomato tofu caprese, golden quinoa, and farm greens. Two protein sources in one plate."
  },
  {
    "id": "us-charlotte-520",
    "name": "Seared Salmon Plate",
    "restaurant": "Naked Farmer",
    "restaurantAddress": "2725 South Blvd, South End, Charlotte, NC 28209",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.21625,
      "lng": -80.83988
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 250,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 40,
    "carbs": 14,
    "fat": 30,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Seared Salmon Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Faroe Island salmon, tomato tofu caprese, farm greens, half avocado, sesame crunch, and spicy miso aioli. Omega-3 rich with 40g protein."
  },
  {
    "id": "us-charlotte-521",
    "name": "Surf & Turf Plate",
    "restaurant": "Naked Farmer",
    "restaurantAddress": "2725 South Blvd, South End, Charlotte, NC 28209",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.23337,
      "lng": -80.84124
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 253,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 50,
    "carbs": 10,
    "fat": 33,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "50g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Surf & Turf Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grass-fed steak + Faroe Island salmon, spring garden kimchi, and charred broccoli. Two premium proteins — one of the best macro plates in Charlotte."
  },
  {
    "id": "us-charlotte-522",
    "name": "Faroe Island Salmon Plate",
    "restaurant": "Naked Farmer",
    "restaurantAddress": "2725 South Blvd, South End, Charlotte, NC 28209",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.23531,
      "lng": -80.83133
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 119,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 38,
    "carbs": 20,
    "fat": 21,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Faroe Island Salmon Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled Faroe Island salmon with choice of grain, greens, two sides and dressing. Clean, simple high-protein plate from farm-fresh ingredients."
  },
  {
    "id": "us-charlotte-523",
    "name": "Cajun Chicken Alfredo",
    "restaurant": "Clean Eatz",
    "restaurantAddress": "2215 Ayrsley Town Blvd, Ballantyne, Charlotte, NC 28273",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.22853,
      "lng": -80.83307
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 180,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 390,
    "protein": 35,
    "carbs": 44,
    "fat": 8,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "35g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Cajun Chicken Alfredo",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Cajun-seasoned chicken breast over penne in a light alfredo sauce. 35g protein and only 7g fat — one of the highest protein-to-fat ratio meals at Clean Eatz."
  },
  {
    "id": "us-charlotte-524",
    "name": "Pepper and Onion Steak",
    "restaurant": "Clean Eatz",
    "restaurantAddress": "2215 Ayrsley Town Blvd, Ballantyne, Charlotte, NC 28273",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.22006,
      "lng": -80.85592
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 328,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 314,
    "protein": 25,
    "carbs": 22,
    "fat": 14,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "25g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Pepper and Onion Steak",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Lean steak with sautéed peppers and onions. 314 calories with 25g protein — Clean Eatz's lowest-calorie high-protein meal ideal for a calorie deficit."
  },
  {
    "id": "us-charlotte-525",
    "name": "Crispy BBQ Chicken Mac (XL)",
    "restaurant": "Clean Eatz",
    "restaurantAddress": "2215 Ayrsley Town Blvd, Ballantyne, Charlotte, NC 28273",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.21224,
      "lng": -80.84486
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 351,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 42,
    "carbs": 58,
    "fat": 18,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Crispy BBQ Chicken Mac (XL)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "XL portion crispy BBQ chicken over mac and cheese. The XL adds 2oz extra protein bringing total to 42g. Best for muscle-building days and high calorie needs."
  },
  {
    "id": "us-charlotte-526",
    "name": "Happy Endings Bowl",
    "restaurant": "Flower Child",
    "restaurantAddress": "4310 Sharon Rd, SouthPark, Charlotte, NC 28211",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.24146,
      "lng": -80.83475
    },
    "price": 17,
    "rating": 4.9,
    "reviewsCount": 335,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 32,
    "carbs": 46,
    "fat": 22,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Happy Endings Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken, quinoa, roasted sweet potato, avocado, kale, broccolini, sesame ginger dressing. A fan-favorite high-protein bowl at Flower Child."
  },
  {
    "id": "us-charlotte-527",
    "name": "The Rooster Bowl",
    "restaurant": "Flower Child",
    "restaurantAddress": "4310 Sharon Rd, SouthPark, Charlotte, NC 28211",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.23273,
      "lng": -80.83988
    },
    "price": 14,
    "rating": 4.7,
    "reviewsCount": 320,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 32,
    "fat": 21,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "The Rooster Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken, brown rice, roasted vegetables, avocado, green goddess dressing. Clean macros with 38g protein from pasture-raised chicken."
  },
  {
    "id": "us-charlotte-528",
    "name": "Grilled Salmon Bowl",
    "restaurant": "Flower Child",
    "restaurantAddress": "4310 Sharon Rd, SouthPark, Charlotte, NC 28211",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.21949,
      "lng": -80.8501
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 203,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 36,
    "carbs": 30,
    "fat": 25,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Salmon Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled sustainable salmon, quinoa, roasted vegetables, avocado, lemon tahini. A heart-healthy high-protein option with omega-3s."
  },
  {
    "id": "us-charlotte-529",
    "name": "Shawarma Chicken Bowl",
    "restaurant": "Yafo Kitchen",
    "restaurantAddress": "1231A East Blvd, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.21442,
      "lng": -80.82812
    },
    "price": 21,
    "rating": 4.6,
    "reviewsCount": 99,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 38,
    "carbs": 52,
    "fat": 24,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Shawarma Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Cumin rice base, organic hummus, shawarma-spiced chicken, cucumber tomato salad, and lemon tahini. Charlotte's most popular Mediterranean bowl — 38g protein with bold Middle Eastern flavor."
  },
  {
    "id": "us-charlotte-530",
    "name": "Greek Lemon Chicken Bowl",
    "restaurant": "Yafo Kitchen",
    "restaurantAddress": "1231A East Blvd, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.21566,
      "lng": -80.82956
    },
    "price": 19,
    "rating": 4.6,
    "reviewsCount": 90,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 36,
    "carbs": 46,
    "fat": 21,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Greek Lemon Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Cumin rice, tzatziki, Greek lemon chicken, sumac onions, and lemon tahini sauce. Bright and citrusy — one of the lightest high-protein bowls at Yafo Kitchen."
  },
  {
    "id": "us-charlotte-531",
    "name": "Harissa Salmon Bowl",
    "restaurant": "Yafo Kitchen",
    "restaurantAddress": "1231A East Blvd, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.21912,
      "lng": -80.83658
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 191,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 34,
    "carbs": 38,
    "fat": 25,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Salmon Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Cauliflower rice, spinach and kale base, harissa salmon, seasoned beets, and green schug. A lower-carb high-protein option — harissa salmon is a Charlotte fan favorite."
  },
  {
    "id": "us-charlotte-532",
    "name": "Chicken Schnitzel Plate",
    "restaurant": "Yafo Kitchen",
    "restaurantAddress": "1231A East Blvd, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.23508,
      "lng": -80.85021
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 108,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 42,
    "carbs": 48,
    "fat": 31,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Schnitzel Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Crispy panko-breaded chicken schnitzel served with hummus, cumin rice, and cucumber tomato salad. 42g protein from a generous chicken breast portion."
  },
  {
    "id": "us-charlotte-533",
    "name": "Stuffed Avocado Bowl",
    "restaurant": "Yafo Kitchen",
    "restaurantAddress": "1231A East Blvd, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.24174,
      "lng": -80.83096
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 266,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 30,
    "carbs": 22,
    "fat": 26,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "30g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Stuffed Avocado Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Avocado stuffed with amba chicken salad on kale crunch base. Low carb at just 22g — a keto-friendly high-protein option at Yafo Kitchen Dilworth."
  },
  {
    "id": "us-charlotte-534",
    "name": "Braised Brisket Bowl",
    "restaurant": "Yafo Kitchen",
    "restaurantAddress": "1231A East Blvd, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.22513,
      "lng": -80.83869
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 232,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 36,
    "carbs": 52,
    "fat": 30,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Braised Brisket Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Slow-braised beef brisket on cumin rice with hummus, baba ganoush, and Mediterranean pickles. Rich and filling — best for high-calorie training days."
  },
  {
    "id": "us-charlotte-535",
    "name": "Chicken Shawarma Bowl",
    "restaurant": "Mezeh Mediterranean Grill",
    "restaurantAddress": "1426 Central Ave, Plaza Midwood, Charlotte, NC 28205",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.23183,
      "lng": -80.82865
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 287,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 40,
    "carbs": 48,
    "fat": 23,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Shawarma Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Saffron rice, chicken shawarma, hummus, cucumber tomato salad, and lemon tahini. 40g protein — Mezeh's most popular build in Charlotte."
  },
  {
    "id": "us-charlotte-536",
    "name": "Steak Kafta Bowl",
    "restaurant": "Mezeh Mediterranean Grill",
    "restaurantAddress": "1426 Central Ave, Plaza Midwood, Charlotte, NC 28205",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.24056,
      "lng": -80.82832
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 218,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 590,
    "protein": 38,
    "carbs": 44,
    "fat": 29,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Steak Kafta Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled beef and lamb kafta on saffron rice with baba ganoush, tabbouleh, and harissa yogurt. 38g protein with bold Middle Eastern spice."
  },
  {
    "id": "us-charlotte-537",
    "name": "Salmon Bowl",
    "restaurant": "Mezeh Mediterranean Grill",
    "restaurantAddress": "1426 Central Ave, Plaza Midwood, Charlotte, NC 28205",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.21691,
      "lng": -80.8529
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 266,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 36,
    "carbs": 36,
    "fat": 26,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Salmon Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled salmon on cauliflower rice with spinach, beets, olives, and lemon tahini. A lighter, omega-3 rich high-protein option at Mezeh."
  },
  {
    "id": "us-charlotte-538",
    "name": "Grilled Chicken Salad",
    "restaurant": "Salata",
    "restaurantAddress": "1540 South Blvd Suite 120, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.23416,
      "lng": -80.84106
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 63,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 36,
    "carbs": 18,
    "fat": 18,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chopped romaine, grilled chicken, avocado, tomatoes, cucumbers, and lemon vinaigrette. A simple, clean high-protein salad — one of Charlotte's best macro values at Salata."
  },
  {
    "id": "us-charlotte-539",
    "name": "Rotisserie Chicken Salad",
    "restaurant": "The Roasting Company",
    "restaurantAddress": "1521 Montford Dr, Dilworth, Charlotte, NC 28209",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.22471,
      "lng": -80.83823
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 77,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 40,
    "carbs": 14,
    "fat": 23,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Rotisserie Chicken Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Pulled rotisserie chicken over mixed greens with avocado, tomatoes, and light vinaigrette. 40g protein in a lower-calorie format — perfect for lunch."
  },
  {
    "id": "us-charlotte-540",
    "name": "Wood-Fire Grilled Sausage & Beans",
    "restaurant": "Kid Cashew Wood Fire Grill",
    "restaurantAddress": "1608 East Blvd, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.22956,
      "lng": -80.85147
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 284,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 28,
    "carbs": 39,
    "fat": 37,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wood-Fire Grilled Sausage & Beans",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Sausage with chipotle sauce served with creamy white beans."
  },
  {
    "id": "us-charlotte-541",
    "name": "Wood-Fire Grilled Spanish Octopus",
    "restaurant": "Kid Cashew Wood Fire Grill",
    "restaurantAddress": "1608 East Blvd, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.2318,
      "lng": -80.84048
    },
    "price": 21,
    "rating": 4.9,
    "reviewsCount": 357,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 38,
    "carbs": 44,
    "fat": 18,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wood-Fire Grilled Spanish Octopus",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Lemon vinaigrette and oregano leaves served on a bed of quinoa."
  },
  {
    "id": "us-charlotte-542",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "100 W Trade St, Uptown, Charlotte, NC 28202",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.23562,
      "lng": -80.83816
    },
    "price": 19,
    "rating": 4.6,
    "reviewsCount": 109,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 68,
    "carbs": 26,
    "fat": 13,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (490 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-charlotte-543",
    "name": "Mixed Grill Plate",
    "restaurant": "Zeitouni Mediterranean Grill",
    "restaurantAddress": "3419 Toringdon Way A124, SouthPark, Charlotte, NC 28277",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.21735,
      "lng": -80.84059
    },
    "price": 17,
    "rating": 4.9,
    "reviewsCount": 324,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 52,
    "carbs": 28,
    "fat": 33,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Mixed Grill Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-charlotte-544",
    "name": "Half Rotisserie Chicken Plate",
    "restaurant": "Yafo Kitchen",
    "restaurantAddress": "1231A East Blvd, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.22502,
      "lng": -80.84068
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 197,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 52,
    "carbs": 28,
    "fat": 24,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Half Rotisserie Chicken Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-charlotte-545",
    "name": "High Protein Plate",
    "restaurant": "Naked Farmer",
    "restaurantAddress": "2725 South Blvd, South End, Charlotte, NC 28209",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.23162,
      "lng": -80.85736
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 116,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 52,
    "carbs": 24,
    "fat": 24,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "High Protein Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-charlotte-28202-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Uptown)",
    "restaurantAddress": "201 S Tryon St, Charlotte, NC 28202",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.21491,
      "lng": -80.85737
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 281,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-charlotte-28202-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Uptown)",
    "restaurantAddress": "201 S Tryon St, Charlotte, NC 28202",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.23871,
      "lng": -80.83466
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 179,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-tampa-548",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3645 Midtown Dr, Tampa, FL 33607",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.94022,
      "lng": -82.46417
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 305,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-tampa-549",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3645 Midtown Dr, Tampa, FL 33607",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.95733,
      "lng": -82.44284
    },
    "price": 16,
    "rating": 4.6,
    "reviewsCount": 240,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-tampa-550",
    "name": "Shrimp Bowl",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Tampa, FL",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.95662,
      "lng": -82.44344
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 294,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 34,
    "carbs": 60,
    "fat": 16,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Shrimp Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-tampa-551",
    "name": "Protein Smoothie",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Tampa, FL",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.94559,
      "lng": -82.45023
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 184,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 28,
    "carbs": 42,
    "fat": 11,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Smoothie",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 28g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-tampa-552",
    "name": "Protein Pancakes",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Tampa, FL",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.9522,
      "lng": -82.46298
    },
    "price": 19,
    "rating": 4.6,
    "reviewsCount": 122,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 44,
    "fat": 10,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Pancakes",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-tampa-553",
    "name": "Grilled Chicken Breast Plate",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Tampa, FL",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.94016,
      "lng": -82.46461
    },
    "price": 16,
    "rating": 4.6,
    "reviewsCount": 85,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 58,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Breast Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-tampa-33607-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Westshore)",
    "restaurantAddress": "2223 N Westshore Blvd, Tampa, FL 33607",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.94449,
      "lng": -82.46562
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 230,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-tampa-33607-2",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Westshore)",
    "restaurantAddress": "2223 N Westshore Blvd, Tampa, FL 33607",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.94483,
      "lng": -82.44449
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 289,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-tampa-33607-3",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Westshore)",
    "restaurantAddress": "2223 N Westshore Blvd, Tampa, FL 33607",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.96013,
      "lng": -82.46124
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 282,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-tampa-33602-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Downtown Tampa)",
    "restaurantAddress": "601 N Ashley Dr, Tampa, FL 33602",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.95218,
      "lng": -82.46114
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 223,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-tampa-33602-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Downtown Tampa)",
    "restaurantAddress": "601 N Ashley Dr, Tampa, FL 33602",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.94366,
      "lng": -82.44669
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 192,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-tampa-33602-3",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (Downtown Tampa)",
    "restaurantAddress": "601 N Ashley Dr, Tampa, FL 33602",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.95452,
      "lng": -82.4532
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 153,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-tampa-33602-4",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Downtown Tampa)",
    "restaurantAddress": "601 N Ashley Dr, Tampa, FL 33602",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.96476,
      "lng": -82.45555
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 161,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-tampa-33602-5",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Downtown Tampa)",
    "restaurantAddress": "601 N Ashley Dr, Tampa, FL 33602",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.96317,
      "lng": -82.45636
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 171,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-orlando-562",
    "name": "Egg White Omelette",
    "restaurant": "The Protein House",
    "restaurantAddress": "606 International Dr, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.53049,
      "lng": -81.38005
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 329,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 320,
    "protein": 42,
    "carbs": 8,
    "fat": 13,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Egg White Omelette",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "6 egg whites, spinach, mushrooms, tomatoes, low-fat cheese"
  },
  {
    "id": "us-orlando-563",
    "name": "Protein Pancakes",
    "restaurant": "The Protein House",
    "restaurantAddress": "606 International Dr, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.52571,
      "lng": -81.39075
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 82,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 44,
    "fat": 10,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Pancakes",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "High-protein pancakes, fresh berries, sugar-free syrup"
  },
  {
    "id": "us-orlando-564",
    "name": "Grilled Chicken Breast Plate",
    "restaurant": "The Protein House",
    "restaurantAddress": "606 International Dr, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.54529,
      "lng": -81.37697
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 131,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 58,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Breast Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "8oz grilled chicken, steamed broccoli, brown rice"
  },
  {
    "id": "us-orlando-565",
    "name": "Protein Bowl",
    "restaurant": "The Protein House",
    "restaurantAddress": "606 International Dr, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.53897,
      "lng": -81.37647
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 119,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 48,
    "carbs": 46,
    "fat": 18,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Ground turkey, sweet potato, kale, quinoa, avocado"
  },
  {
    "id": "us-orlando-566",
    "name": "Tuna Salad Plate",
    "restaurant": "The Protein House",
    "restaurantAddress": "606 International Dr, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.54669,
      "lng": -81.37963
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 118,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 340,
    "protein": 44,
    "carbs": 12,
    "fat": 13,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Tuna Salad Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Albacore tuna, mixed greens, cucumber, tomato, balsamic vinaigrette"
  },
  {
    "id": "us-orlando-567",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "8001 Orange Blossom Trail, Orlando, FL 32809",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.55042,
      "lng": -81.3748
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 229,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-orlando-568",
    "name": "Spicy Tuna Bowl",
    "restaurant": "Create Your Nature",
    "restaurantAddress": "1284 Orange Ave, Winter Park, FL 32789",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.527,
      "lng": -81.39221
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 38,
    "carbs": 22,
    "fat": 28,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Spicy Tuna Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Ahi tuna, cauliflower rice, cucumber, avocado, sriracha aioli"
  },
  {
    "id": "us-orlando-569",
    "name": "Power Protein Bowl",
    "restaurant": "Create Your Nature",
    "restaurantAddress": "1284 Orange Ave, Winter Park, FL 32789",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.52867,
      "lng": -81.36441
    },
    "price": 15,
    "rating": 4.6,
    "reviewsCount": 316,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 58,
    "carbs": 54,
    "fat": 21,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Zero Seed Oils",
      "12g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Power Protein Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double chicken, brown rice, roasted broccoli, black beans, hot sauce"
  },
  {
    "id": "us-orlando-570",
    "name": "Salmon Bowl",
    "restaurant": "Fresh Kitchen",
    "restaurantAddress": "505 Orange Ave, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.54281,
      "lng": -81.36769
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 113,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 610,
    "protein": 44,
    "carbs": 28,
    "fat": 36,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Zero Seed Oils",
      "9g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Salmon Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Roasted salmon, cauliflower mash, roasted brussels sprouts, lemon butter"
  },
  {
    "id": "us-orlando-571",
    "name": "Turkey Meatball Bowl",
    "restaurant": "Fresh Kitchen",
    "restaurantAddress": "505 Orange Ave, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.52585,
      "lng": -81.37854
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 205,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 42,
    "carbs": 22,
    "fat": 26,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Meatball Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Turkey meatballs, zucchini noodles, marinara, parmesan"
  },
  {
    "id": "us-orlando-572",
    "name": "Steak Bowl",
    "restaurant": "Fresh Kitchen",
    "restaurantAddress": "505 Orange Ave, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.52935,
      "lng": -81.37858
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 320,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 650,
    "protein": 52,
    "carbs": 34,
    "fat": 34,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Steak Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Sirloin steak, roasted potatoes, broccoli, chimichurri"
  },
  {
    "id": "us-orlando-573",
    "name": "Chicken Tinga Bowl",
    "restaurant": "Bolay",
    "restaurantAddress": "808 Universal Blvd, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.52762,
      "lng": -81.37088
    },
    "price": 22,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 40,
    "carbs": 54,
    "fat": 23,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Tinga Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chicken tinga, black beans, brown rice, pico de gallo, cotija cheese, lime crema"
  },
  {
    "id": "us-orlando-574",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "8001 Orange Blossom Trail, Orlando, FL 32809",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.54278,
      "lng": -81.36861
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 133,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-orlando-575",
    "name": "Steak Street Salad",
    "restaurant": "Bolay",
    "restaurantAddress": "808 Universal Blvd, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.54766,
      "lng": -81.37043
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 60,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 630,
    "protein": 37,
    "carbs": 30,
    "fat": 40,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Steak Street Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Mixed greens topped with chilled street corn, garlic pepper steak, chimichurri tomatoes, Parmesan, banana peppers, and cilantro, finished with creamy garlic & herb dressing."
  },
  {
    "id": "us-orlando-576",
    "name": "Taste the RainBol",
    "restaurant": "Bolay",
    "restaurantAddress": "808 Universal Blvd, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.54195,
      "lng": -81.36973
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 291,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 570,
    "protein": 30,
    "carbs": 51,
    "fat": 27,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "30g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Taste the RainBol",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Jasmine rice and rotisserie chicken thigh, topped with chimichurri tomatoes, pickled red onions, and herb pesto."
  },
  {
    "id": "us-orlando-577",
    "name": "Grilled Chicken Breast Plate",
    "restaurant": "The Protein House",
    "restaurantAddress": "606 International Dr, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.55127,
      "lng": -81.39057
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 290,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 58,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Breast Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-orlando-578",
    "name": "Power Protein Bowl",
    "restaurant": "Create Your Nature",
    "restaurantAddress": "1284 Orange Ave, Winter Park, FL 32789",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.55239,
      "lng": -81.37635
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 354,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 58,
    "carbs": 54,
    "fat": 21,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Zero Seed Oils",
      "12g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Power Protein Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (640 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-orlando-579",
    "name": "Steak Bowl",
    "restaurant": "Fresh Kitchen",
    "restaurantAddress": "505 Orange Ave, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.53831,
      "lng": -81.37219
    },
    "price": 14,
    "rating": 4.7,
    "reviewsCount": 159,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 650,
    "protein": 52,
    "carbs": 34,
    "fat": 34,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Steak Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (650 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-orlando-580",
    "name": "Protein Bowl",
    "restaurant": "The Protein House",
    "restaurantAddress": "606 International Dr, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.54618,
      "lng": -81.37121
    },
    "price": 14,
    "rating": 4.8,
    "reviewsCount": 63,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 48,
    "carbs": 46,
    "fat": 18,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-orlando-581",
    "name": "Tuna Salad Plate",
    "restaurant": "The Protein House",
    "restaurantAddress": "606 International Dr, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.54278,
      "lng": -81.37123
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 340,
    "protein": 44,
    "carbs": 12,
    "fat": 13,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Tuna Salad Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (340 kcal, 44g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-orlando-582",
    "name": "Teriyaki Chicken Bowl",
    "restaurant": "Create Your Nature",
    "restaurantAddress": "1284 Orange Ave, Winter Park, FL 32789",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.55249,
      "lng": -81.39307
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 125,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 44,
    "carbs": 52,
    "fat": 20,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Teriyaki Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (560 kcal, 44g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-orlando-583",
    "name": "Salmon Teriyaki Bowl",
    "restaurant": "Bolay",
    "restaurantAddress": "808 Universal Blvd, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.54799,
      "lng": -81.37467
    },
    "price": 21,
    "rating": 4.6,
    "reviewsCount": 235,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 42,
    "carbs": 56,
    "fat": 25,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Salmon Teriyaki Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-orlando-32801-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Downtown)",
    "restaurantAddress": "110 N Orange Ave, Orlando, FL 32801",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.53231,
      "lng": -81.38176
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 205,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-orlando-32801-2",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Downtown)",
    "restaurantAddress": "110 N Orange Ave, Orlando, FL 32801",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.53676,
      "lng": -81.3877
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 224,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-orlando-32801-3",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Downtown)",
    "restaurantAddress": "110 N Orange Ave, Orlando, FL 32801",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.54822,
      "lng": -81.37496
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 81,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-orlando-32801-4",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Downtown)",
    "restaurantAddress": "110 N Orange Ave, Orlando, FL 32801",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.53244,
      "lng": -81.39319
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 141,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-orlando-32801-5",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Downtown)",
    "restaurantAddress": "110 N Orange Ave, Orlando, FL 32801",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.53706,
      "lng": -81.3908
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-orlando-32789-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Winter Park)",
    "restaurantAddress": "480 N Orlando Ave, Orlando, FL 32789",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.53264,
      "lng": -81.37274
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 263,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-boulder-590",
    "name": "Sunset Chopped Salad with Charbroiled Fish",
    "restaurant": "Wahoo's Fish Taco",
    "restaurantAddress": "2790 Pearl St, Boulder, CO 80302",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.01621,
      "lng": -105.26514
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 333,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 649,
    "protein": 49,
    "carbs": 32,
    "fat": 36,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "49g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sunset Chopped Salad with Charbroiled Fish",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chopped salad with charbroiled fish."
  },
  {
    "id": "us-boulder-591",
    "name": "Skinny Burrito Bowl with Carnitas",
    "restaurant": "Wahoo's Fish Taco",
    "restaurantAddress": "2790 Pearl St, Boulder, CO 80302",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.02375,
      "lng": -105.28289
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 99,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 524,
    "protein": 42,
    "carbs": 37,
    "fat": 23,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Skinny Burrito Bowl with Carnitas",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Lighter burrito bowl with carnitas over brown rice and black beans."
  },
  {
    "id": "us-boulder-592",
    "name": "Fajita Veggie Bowl with Charbroiled Fish",
    "restaurant": "Wahoo's Fish Taco",
    "restaurantAddress": "2790 Pearl St, Boulder, CO 80302",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.02134,
      "lng": -105.28356
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 66,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 592,
    "protein": 39,
    "carbs": 75,
    "fat": 15,
    "fiber": 14,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "39g Clean Protein",
      "Zero Seed Oils",
      "14g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Fajita Veggie Bowl with Charbroiled Fish",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Fajita veggie bowl with charbroiled fish over brown rice and black beans."
  },
  {
    "id": "us-boulder-593",
    "name": "Fajita Veggie Bowl with Charbroiled Chicken",
    "restaurant": "Wahoo's Fish Taco",
    "restaurantAddress": "2790 Pearl St, Boulder, CO 80302",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.02002,
      "lng": -105.27851
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 192,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 648,
    "protein": 38,
    "carbs": 74,
    "fat": 22,
    "fiber": 14,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "14g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Fajita Veggie Bowl with Charbroiled Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Fajita veggie bowl with charbroiled chicken over brown rice and black beans."
  },
  {
    "id": "us-boulder-594",
    "name": "Sunset Chopped Salad with Shrimp",
    "restaurant": "Wahoo's Fish Taco",
    "restaurantAddress": "2790 Pearl St, Boulder, CO 80302",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.00566,
      "lng": -105.26973
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 261,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 626,
    "protein": 38,
    "carbs": 34,
    "fat": 38,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sunset Chopped Salad with Shrimp",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chopped salad with grilled shrimp."
  },
  {
    "id": "us-boulder-595",
    "name": "Skinny Burrito Bowl with Charbroiled Chicken",
    "restaurant": "Wahoo's Fish Taco",
    "restaurantAddress": "2790 Pearl St, Boulder, CO 80302",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.01228,
      "lng": -105.27335
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 215,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 378,
    "protein": 30,
    "carbs": 34,
    "fat": 14,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "30g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Skinny Burrito Bowl with Charbroiled Chicken",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Lighter burrito bowl with charbroiled chicken over brown rice and black beans."
  },
  {
    "id": "us-boulder-596",
    "name": "Sunset Chopped Salad with Charbroiled Fish",
    "restaurant": "Wahoo's Fish Taco",
    "restaurantAddress": "2790 Pearl St, Boulder, CO 80302",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.01086,
      "lng": -105.26384
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 213,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 649,
    "protein": 49,
    "carbs": 32,
    "fat": 36,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "49g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sunset Chopped Salad with Charbroiled Fish",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (649 kcal, 49g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-boulder-597",
    "name": "Shrimp Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Boulder, CO",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.00407,
      "lng": -105.28125
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 224,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 34,
    "carbs": 60,
    "fat": 16,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Shrimp Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-boulder-598",
    "name": "Protein Smoothie",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Boulder, CO",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.00378,
      "lng": -105.26442
    },
    "price": 17,
    "rating": 4.6,
    "reviewsCount": 256,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 28,
    "carbs": 42,
    "fat": 11,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Smoothie",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 28g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-boulder-599",
    "name": "Protein Pancakes",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Boulder, CO",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.01103,
      "lng": -105.25674
    },
    "price": 15,
    "rating": 4.6,
    "reviewsCount": 239,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 44,
    "fat": 10,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Pancakes",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-boulder-600",
    "name": "Grilled Chicken Breast Plate",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Boulder, CO",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.00635,
      "lng": -105.27444
    },
    "price": 22,
    "rating": 4.8,
    "reviewsCount": 221,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 58,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Breast Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-boulder-601",
    "name": "Protein Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Boulder, CO",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.00027,
      "lng": -105.26464
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 170,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 48,
    "carbs": 46,
    "fat": 18,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-boulder-80301-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (East Boulder)",
    "restaurantAddress": "4800 Baseline Rd, Boulder, CO 80301",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.0141,
      "lng": -105.27599
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 216,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-boulder-80301-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (East Boulder)",
    "restaurantAddress": "4800 Baseline Rd, Boulder, CO 80301",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.00204,
      "lng": -105.27899
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 129,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-boulder-80301-3",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (East Boulder)",
    "restaurantAddress": "4800 Baseline Rd, Boulder, CO 80301",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.02699,
      "lng": -105.2731
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 291,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-boulder-80301-4",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (East Boulder)",
    "restaurantAddress": "4800 Baseline Rd, Boulder, CO 80301",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.02088,
      "lng": -105.27931
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-boulder-80301-5",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (East Boulder)",
    "restaurantAddress": "4800 Baseline Rd, Boulder, CO 80301",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.00234,
      "lng": -105.27704
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 123,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-columbus-607",
    "name": "Grass-Fed Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "4052 Worth Avenue, Columbus, OH 43219",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.97251,
      "lng": -82.98565
    },
    "price": 17,
    "rating": 4.6,
    "reviewsCount": 347,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 51,
    "carbs": 38,
    "fat": 29,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-Fed Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grass-fed beef patty with aged white cheddar, arugula, and pickled onion on a sprouted grain bun. True Food Kitchen Columbus flagship protein entrée."
  },
  {
    "id": "us-columbus-608",
    "name": "Citrus Salmon Salad",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "4052 Worth Avenue, Columbus, OH 43219",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.94949,
      "lng": -83.01361
    },
    "price": 22,
    "rating": 4.8,
    "reviewsCount": 63,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 36,
    "carbs": 22,
    "fat": 21,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Citrus Salmon Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Herb-roasted Atlantic salmon over arugula with shaved fennel, avocado, and citrus vinaigrette. 36g protein, only 5g sugar."
  },
  {
    "id": "us-columbus-609",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "3929 Easton Station, Columbus, OH 43219",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.96292,
      "lng": -83.00465
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 73,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled harissa honey chicken over brown rice with roasted eggplant, tomato + onion, and tzatziki. Clean Mediterranean macros."
  },
  {
    "id": "us-columbus-610",
    "name": "Grilled Chicken + Falafel Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "3929 Easton Station, Columbus, OH 43219",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.97011,
      "lng": -82.98411
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 185,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 40,
    "carbs": 44,
    "fat": 16,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken + Falafel Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken with crispy falafel over greens, roasted red peppers, cucumber tomato salad, and house tzatziki. 40g protein."
  },
  {
    "id": "us-columbus-611",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "1555 N High St, Columbus, OH 43201",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.96067,
      "lng": -82.99489
    },
    "price": 17,
    "rating": 4.9,
    "reviewsCount": 170,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 68,
    "carbs": 52,
    "fat": 18,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "11g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double chicken over brown rice with black beans, fresh tomato salsa, and romaine in Short North Columbus. 68g protein, the ultimate Chipotle macro order."
  },
  {
    "id": "us-columbus-612",
    "name": "Grilled Chicken Grain Bowl",
    "restaurant": "Northstar Cafe",
    "restaurantAddress": "951 N High St, Columbus, OH 43201",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.97249,
      "lng": -83.00687
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 198,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 445,
    "protein": 35,
    "carbs": 44,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "35g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Grain Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Hormone-free grilled chicken over ancient grains with roasted seasonal vegetables and herb dressing. A Short North Columbus lunch staple at Northstar Cafe."
  },
  {
    "id": "us-columbus-613",
    "name": "Turkey Burger",
    "restaurant": "Northstar Cafe",
    "restaurantAddress": "951 N High St, Columbus, OH 43201",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.95674,
      "lng": -82.99111
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 192,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 38,
    "carbs": 32,
    "fat": 20,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "House-made turkey burger with avocado, arugula, and pickled veggies on a toasted brioche bun. 38g protein, a Northstar Cafe Columbus signature."
  },
  {
    "id": "us-columbus-614",
    "name": "Grilled Chicken & Rice Plate",
    "restaurant": "Greek Express",
    "restaurantAddress": "1100 W 5th Ave, Columbus, OH 43212",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.96962,
      "lng": -82.99749
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 295,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 45,
    "carbs": 44,
    "fat": 15,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken & Rice Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Marinated grilled chicken tenderloin over rice pilaf with Greek salad and lemon dressing. Columbus's most protein-dense local Mediterranean plate at 45g."
  },
  {
    "id": "us-columbus-615",
    "name": "Chicken Souvlaki Wrap",
    "restaurant": "Greek Express",
    "restaurantAddress": "1100 W 5th Ave, Columbus, OH 43212",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.95509,
      "lng": -83.00205
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 90,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 430,
    "protein": 38,
    "carbs": 36,
    "fat": 15,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Souvlaki Wrap",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken souvlaki in warm pita with tomato, onion, and tzatziki. A Greek Express staple near OSU at 38g protein per wrap."
  },
  {
    "id": "us-columbus-616",
    "name": "Mango Chicken Bowl",
    "restaurant": "Hoyo's Kitchen",
    "restaurantAddress": "59 Spruce St, Columbus, OH 43215",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.9535,
      "lng": -82.99625
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 141,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 40,
    "carbs": 52,
    "fat": 10,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Mango Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Marinated grilled chicken over aromatic Somali rice with mango sauce and spiced veggies. A Short North Columbus staple at 40g protein — bold flavors, clean macros."
  },
  {
    "id": "us-columbus-617",
    "name": "Pan-Seared Tuna",
    "restaurant": "Northstar Cafe",
    "restaurantAddress": "951 N High St, Columbus, OH 43201",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.95315,
      "lng": -82.98764
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 173,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 495,
    "protein": 54,
    "carbs": 14,
    "fat": 25,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Pan-Seared Tuna",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Mediterranean-style salad with Mackenzie Creamery goat cheese."
  },
  {
    "id": "us-columbus-618",
    "name": "Fish Sandwich",
    "restaurant": "Northstar Cafe",
    "restaurantAddress": "951 N High St, Columbus, OH 43201",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.97356,
      "lng": -83.00862
    },
    "price": 16,
    "rating": 4.6,
    "reviewsCount": 113,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 555,
    "protein": 42,
    "carbs": 42,
    "fat": 24,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Fish Sandwich",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled barramundi filet with lettuce, tomato, red onion and fresh herb aioli."
  },
  {
    "id": "us-columbus-619",
    "name": "Cast Iron Steak & Enchilada",
    "restaurant": "Northstar Cafe",
    "restaurantAddress": "951 N High St, Columbus, OH 43201",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.96957,
      "lng": -82.99838
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 630,
    "protein": 54,
    "carbs": 26,
    "fat": 34,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Cast Iron Steak & Enchilada",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Chipotle-lime marinated prime steak with a smoked gouda and salsa verde enchilada."
  },
  {
    "id": "us-columbus-620",
    "name": "Mushroom Frittata",
    "restaurant": "Northstar Cafe",
    "restaurantAddress": "951 N High St, Columbus, OH 43201",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.97117,
      "lng": -82.99974
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 273,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 645,
    "protein": 35,
    "carbs": 41,
    "fat": 38,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "35g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Mushroom Frittata",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Three Green Field Farm eggs, hearth-baked with roasted mushrooms, sweet onions and gruyère, served with breakfast potatoes."
  },
  {
    "id": "us-columbus-621",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "1555 N High St, Columbus, OH 43201",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.95354,
      "lng": -83.00653
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 206,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 68,
    "carbs": 52,
    "fat": 18,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "11g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (640 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-columbus-622",
    "name": "Pan-Seared Tuna",
    "restaurant": "Northstar Cafe",
    "restaurantAddress": "951 N High St, Columbus, OH 43201",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.96765,
      "lng": -82.99459
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 495,
    "protein": 54,
    "carbs": 14,
    "fat": 25,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Pan-Seared Tuna",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (495 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-columbus-623",
    "name": "Cast Iron Steak & Enchilada",
    "restaurant": "Northstar Cafe",
    "restaurantAddress": "951 N High St, Columbus, OH 43201",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.96558,
      "lng": -83.00647
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 316,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 630,
    "protein": 54,
    "carbs": 26,
    "fat": 34,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Cast Iron Steak & Enchilada",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (630 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-columbus-624",
    "name": "Grass-Fed Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "4052 Worth Avenue, Columbus, OH 43219",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.97098,
      "lng": -82.99549
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 109,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 51,
    "carbs": 38,
    "fat": 29,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-Fed Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-columbus-625",
    "name": "Grilled Chicken & Rice Plate",
    "restaurant": "Greek Express",
    "restaurantAddress": "1100 W 5th Ave, Columbus, OH 43212",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.95476,
      "lng": -83.01033
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 283,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 45,
    "carbs": 44,
    "fat": 15,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken & Rice Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (490 kcal, 45g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-columbus-626",
    "name": "Fish Sandwich",
    "restaurant": "Northstar Cafe",
    "restaurantAddress": "951 N High St, Columbus, OH 43201",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.95225,
      "lng": -83.00781
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 229,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 555,
    "protein": 42,
    "carbs": 42,
    "fat": 24,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Fish Sandwich",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (555 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-columbus-627",
    "name": "Grilled Chicken + Falafel Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "3929 Easton Station, Columbus, OH 43219",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.97227,
      "lng": -83.00192
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 221,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 40,
    "carbs": 44,
    "fat": 16,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken + Falafel Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-columbus-628",
    "name": "Mango Chicken Bowl",
    "restaurant": "Hoyo's Kitchen",
    "restaurantAddress": "59 Spruce St, Columbus, OH 43215",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.94856,
      "lng": -82.98579
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 103,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 40,
    "carbs": 52,
    "fat": 10,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Mango Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (460 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-columbus-629",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "3929 Easton Station, Columbus, OH 43219",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.95222,
      "lng": -82.9979
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 127,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (470 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-salt-lake-city-630",
    "name": "Grilled Chicken Macro Bowl",
    "restaurant": "Nourish",
    "restaurantAddress": "418 E 200 S, Salt Lake City, UT 84111",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.7758,
      "lng": -111.87658
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 271,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 36,
    "carbs": 40,
    "fat": 13,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Macro Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken over brown rice with roasted seasonal veggies and lemon tahini at Nourish SLC. 36g protein, locally sourced. A downtown SLC health staple."
  },
  {
    "id": "us-salt-lake-city-631",
    "name": "Smoked Salmon Bowl",
    "restaurant": "Nourish",
    "restaurantAddress": "418 E 200 S, Salt Lake City, UT 84111",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.77213,
      "lng": -111.87625
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 34,
    "carbs": 36,
    "fat": 14,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Smoked Salmon Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Cold-smoked Pacific salmon over quinoa with pickled cucumbers, capers, and dill cream at Nourish SLC. 34g protein with clean macros."
  },
  {
    "id": "us-salt-lake-city-632",
    "name": "Grilled Chicken Macro Bowl",
    "restaurant": "Nourish",
    "restaurantAddress": "418 E 200 S, Salt Lake City, UT 84111",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.75846,
      "lng": -111.88947
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 36,
    "carbs": 40,
    "fat": 13,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Macro Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (420 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-salt-lake-city-633",
    "name": "Smoked Salmon Bowl",
    "restaurant": "Nourish",
    "restaurantAddress": "418 E 200 S, Salt Lake City, UT 84111",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.74644,
      "lng": -111.90043
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 276,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 34,
    "carbs": 36,
    "fat": 14,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Smoked Salmon Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-salt-lake-city-634",
    "name": "Shrimp Bowl",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Salt Lake City, UT",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.75506,
      "lng": -111.89353
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 195,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 34,
    "carbs": 60,
    "fat": 16,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Shrimp Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-salt-lake-city-635",
    "name": "Protein Smoothie",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Salt Lake City, UT",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.76811,
      "lng": -111.9031
    },
    "price": 21,
    "rating": 4.7,
    "reviewsCount": 313,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 28,
    "carbs": 42,
    "fat": 11,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Smoothie",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 28g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-salt-lake-city-636",
    "name": "Protein Pancakes",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Salt Lake City, UT",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.74695,
      "lng": -111.87939
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 177,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 44,
    "fat": 10,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Pancakes",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-salt-lake-city-637",
    "name": "Grilled Chicken Breast Plate",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Salt Lake City, UT",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.75835,
      "lng": -111.88649
    },
    "price": 20,
    "rating": 4.6,
    "reviewsCount": 154,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 58,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Breast Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-salt-lake-city-638",
    "name": "Protein Bowl",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Salt Lake City, UT",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.75598,
      "lng": -111.8945
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 147,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 48,
    "carbs": 46,
    "fat": 18,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-salt-lake-city-84111-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Downtown)",
    "restaurantAddress": "250 S Main St, Salt Lake City, UT 84111",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.76296,
      "lng": -111.8788
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 148,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-salt-lake-city-84105-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Sugar House)",
    "restaurantAddress": "1150 E 2100 S, Salt Lake City, UT 84105",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.75956,
      "lng": -111.90599
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-salt-lake-city-84105-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Sugar House)",
    "restaurantAddress": "1150 E 2100 S, Salt Lake City, UT 84105",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.75614,
      "lng": -111.88435
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 273,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-salt-lake-city-84105-3",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (Sugar House)",
    "restaurantAddress": "1150 E 2100 S, Salt Lake City, UT 84105",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.75846,
      "lng": -111.8928
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 185,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-salt-lake-city-84105-4",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Sugar House)",
    "restaurantAddress": "1150 E 2100 S, Salt Lake City, UT 84105",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.75483,
      "lng": -111.89706
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 112,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-salt-lake-city-84105-5",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Sugar House)",
    "restaurantAddress": "1150 E 2100 S, Salt Lake City, UT 84105",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.75125,
      "lng": -111.89408
    },
    "price": 21,
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-minneapolis-645",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "3680 Hazelton Rd, Edina, MN 55435",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.97122,
      "lng": -93.25347
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 170,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled harissa honey chicken over brown rice with roasted eggplant and tzatziki near Southdale Minneapolis. Mediterranean macros for the Twin Cities fitness community."
  },
  {
    "id": "us-minneapolis-646",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "800 Nicollet Mall, Minneapolis, MN 55402",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.98675,
      "lng": -93.25231
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 184,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 68,
    "carbs": 52,
    "fat": 18,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "11g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double chicken over brown rice with black beans and fresh salsa on Nicollet Mall Minneapolis. 68g protein, top macro order for downtown Minneapolis workers."
  },
  {
    "id": "us-minneapolis-647",
    "name": "Grass-Fed Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3472 Galleria, Edina, MN 55435",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.97459,
      "lng": -93.25001
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 355,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 51,
    "carbs": 38,
    "fat": 29,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-Fed Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grass-fed beef patty with aged white cheddar, arugula, and pickled onion on a sprouted grain bun at Galleria Edina. 51g protein."
  },
  {
    "id": "us-minneapolis-648",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "1415 W Lake St, Minneapolis, MN 55408",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.98574,
      "lng": -93.27353
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 74,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 68,
    "carbs": 52,
    "fat": 18,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "11g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double chicken over brown rice with black beans in Uptown Minneapolis on Lake Street. 68g protein for the Uptown Minneapolis fitness community."
  },
  {
    "id": "us-minneapolis-649",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "601 N Washington Ave, Minneapolis, MN 55401",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.98205,
      "lng": -93.26203
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled harissa honey chicken over brown rice with roasted eggplant and tzatziki in North Loop Minneapolis. Mediterranean macros for the Twin Cities fitness community."
  },
  {
    "id": "us-minneapolis-650",
    "name": "Lamb Shank w/Buckwheat Testarolo",
    "restaurant": "Bar La Grassa",
    "restaurantAddress": "800 N Washington Ave, Minneapolis, MN 55401",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.97726,
      "lng": -93.27657
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 94,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 590,
    "protein": 46,
    "carbs": 30,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Lamb Shank w/Buckwheat Testarolo",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Lamb shank with buckwheat testarolo"
  },
  {
    "id": "us-minneapolis-651",
    "name": "Pappardelle w/Veal Ragu",
    "restaurant": "Bar La Grassa",
    "restaurantAddress": "800 N Washington Ave, Minneapolis, MN 55401",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.97212,
      "lng": -93.27643
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 165,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 570,
    "protein": 24,
    "carbs": 68,
    "fat": 22,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "24g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Pappardelle w/Veal Ragu",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Pappardelle with veal ragu"
  },
  {
    "id": "us-minneapolis-652",
    "name": "Mafalda Bolognese",
    "restaurant": "Bar La Grassa",
    "restaurantAddress": "800 N Washington Ave, Minneapolis, MN 55401",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.98976,
      "lng": -93.26665
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 166,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 26,
    "carbs": 66,
    "fat": 24,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "26g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Mafalda Bolognese",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Mafalda bolognese"
  },
  {
    "id": "us-minneapolis-653",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "800 Nicollet Mall, Minneapolis, MN 55402",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.98295,
      "lng": -93.26962
    },
    "price": 22,
    "rating": 4.8,
    "reviewsCount": 272,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 68,
    "carbs": 52,
    "fat": 18,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Zero Seed Oils",
      "11g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Double Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (640 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-minneapolis-654",
    "name": "Grass-Fed Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3472 Galleria, Edina, MN 55435",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.9844,
      "lng": -93.27871
    },
    "price": 20,
    "rating": 4.7,
    "reviewsCount": 346,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 51,
    "carbs": 38,
    "fat": 29,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-Fed Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-minneapolis-655",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "3680 Hazelton Rd, Edina, MN 55435",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.97597,
      "lng": -93.26362
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 249,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (470 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-minneapolis-656",
    "name": "Shrimp Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Minneapolis, MN",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.98824,
      "lng": -93.26933
    },
    "price": 22,
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 34,
    "carbs": 60,
    "fat": 16,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Shrimp Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-minneapolis-657",
    "name": "Protein Smoothie",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Minneapolis, MN",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.9656,
      "lng": -93.27066
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 317,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 28,
    "carbs": 42,
    "fat": 11,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Smoothie",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 28g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-minneapolis-658",
    "name": "Protein Pancakes",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Minneapolis, MN",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.9867,
      "lng": -93.27182
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 340,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 44,
    "fat": 10,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Pancakes",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-minneapolis-659",
    "name": "Grilled Chicken Breast Plate",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Minneapolis, MN",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.96312,
      "lng": -93.26681
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 123,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 58,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Breast Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-minneapolis-660",
    "name": "Protein Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Minneapolis, MN",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.96734,
      "lng": -93.25983
    },
    "price": 17,
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 48,
    "carbs": 46,
    "fat": 18,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Protein Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-minneapolis-55401-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (North Loop)",
    "restaurantAddress": "200 N 1st St, Minneapolis, MN 55401",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.97422,
      "lng": -93.26905
    },
    "price": 17,
    "rating": 4.9,
    "reviewsCount": 96,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-minneapolis-55435-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Edina / South Metro)",
    "restaurantAddress": "3201 Galleria, Minneapolis, MN 55435",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.9802,
      "lng": -93.27399
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-indianapolis-663",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "5555 E 82nd St, Indianapolis, IN 46250",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.77127,
      "lng": -86.15923
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 101,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled harissa honey chicken over brown rice with roasted eggplant, tomato + onion, and tzatziki. Clean Mediterranean macros at 38g protein."
  },
  {
    "id": "us-indianapolis-664",
    "name": "Grilled Chicken + Steak Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "5555 E 82nd St, Indianapolis, IN 46250",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.77383,
      "lng": -86.16455
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 295,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 42,
    "carbs": 38,
    "fat": 14,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken + Steak Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Double protein CAVA bowl with grilled chicken and steak over greens with roasted red peppers, feta, and lemon herb tahini. 42g protein."
  },
  {
    "id": "us-indianapolis-665",
    "name": "Farmhouse Hash",
    "restaurant": "First Watch",
    "restaurantAddress": "4611 E 82nd St, Indianapolis, IN 46250",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.76521,
      "lng": -86.16069
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 74,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 38,
    "carbs": 28,
    "fat": 25,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Farmhouse Hash",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Three cage-free eggs scrambled with turkey sausage, roasted potatoes, peppers, and onions. 38g protein, farm-fresh morning fuel."
  },
  {
    "id": "us-indianapolis-666",
    "name": "Grilled Chicken Grain Bowl",
    "restaurant": "Cafe Patachou",
    "restaurantAddress": "225 W Washington St, Indianapolis, IN 46204",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.76046,
      "lng": -86.15567
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 202,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 430,
    "protein": 35,
    "carbs": 44,
    "fat": 13,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "35g Clean Protein",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Grain Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Herb-marinated grilled chicken over mixed ancient grains with roasted vegetables and lemon tahini dressing. A Cafe Patachou Indianapolis specialty."
  },
  {
    "id": "us-indianapolis-667",
    "name": "Lemon Broiled Chicken Gyro Plate",
    "restaurant": "The Med",
    "restaurantAddress": "5614 East Washington Street, Indianapolis, IN 46219",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.76519,
      "lng": -86.1656
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 68,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 42,
    "carbs": 38,
    "fat": 18,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Lemon Broiled Chicken Gyro Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Lemon-marinated broiled chicken with garlic sauce, pita, rice, and Greek salad. 42g protein, one of Indy's best local high-protein Mediterranean plates."
  },
  {
    "id": "us-indianapolis-668",
    "name": "Chicken Shawarma Bowl",
    "restaurant": "The Med",
    "restaurantAddress": "5614 East Washington Street, Indianapolis, IN 46219",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.77531,
      "lng": -86.15487
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 154,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 38,
    "carbs": 42,
    "fat": 14,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Shawarma Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Spiced rotisserie chicken over saffron rice with tzatziki, pickled veggies, and fresh pita. A Indy local favorite at 38g protein."
  },
  {
    "id": "us-indianapolis-669",
    "name": "Grilled Chicken Protein Bowl",
    "restaurant": "Top Out Cafe",
    "restaurantAddress": "1411 Roosevelt Ave, Indianapolis, IN 46201",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.76659,
      "lng": -86.14339
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 281,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 34,
    "fat": 14,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Protein Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Grilled chicken breast over brown rice with roasted veggies and house tahini drizzle. Top Out's most popular macro-friendly order at 36g protein."
  },
  {
    "id": "us-indianapolis-670",
    "name": "Lox Toast",
    "restaurant": "Cafe Patachou",
    "restaurantAddress": "225 W Washington St, Indianapolis, IN 46204",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.75803,
      "lng": -86.15535
    },
    "price": 18,
    "rating": 4.6,
    "reviewsCount": 168,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 400,
    "protein": 25,
    "carbs": 41,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "25g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Lox Toast",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Smoked salmon, dill crème fraîche, capers, pickled red onions & frisée on multigrain toast."
  },
  {
    "id": "us-indianapolis-671",
    "name": "Chopped Cobb Salad",
    "restaurant": "Cafe Patachou",
    "restaurantAddress": "225 W Washington St, Indianapolis, IN 46204",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.76487,
      "lng": -86.16291
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 172,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 42,
    "carbs": 14,
    "fat": 44,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chopped Cobb Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Red leaf lettuce, roasted chicken, tomatoes, red onions, avocado, Gorgonzola, bacon & hard-boiled egg."
  },
  {
    "id": "us-indianapolis-672",
    "name": "Ricotta Scrambled Eggs",
    "restaurant": "Cafe Patachou",
    "restaurantAddress": "225 W Washington St, Indianapolis, IN 46204",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.78275,
      "lng": -86.17158
    },
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 279,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 535,
    "protein": 33,
    "carbs": 27,
    "fat": 33,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "33g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Ricotta Scrambled Eggs",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Scrambled eggs with ricotta, sautéed mushrooms & spinach, chili oil, shaved Parmesan & chives."
  },
  {
    "id": "us-indianapolis-673",
    "name": "Grilled Chicken + Steak Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "5555 E 82nd St, Indianapolis, IN 46250",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.78261,
      "lng": -86.16749
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 213,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 42,
    "carbs": 38,
    "fat": 14,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken + Steak Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (450 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-indianapolis-674",
    "name": "Lemon Broiled Chicken Gyro Plate",
    "restaurant": "The Med",
    "restaurantAddress": "5614 East Washington Street, Indianapolis, IN 46219",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.75685,
      "lng": -86.154
    },
    "price": 17,
    "rating": 4.6,
    "reviewsCount": 148,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 42,
    "carbs": 38,
    "fat": 18,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Lemon Broiled Chicken Gyro Plate",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-indianapolis-675",
    "name": "Chopped Cobb Salad",
    "restaurant": "Cafe Patachou",
    "restaurantAddress": "225 W Washington St, Indianapolis, IN 46204",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.77938,
      "lng": -86.16091
    },
    "price": 22,
    "rating": 4.7,
    "reviewsCount": 146,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 42,
    "carbs": 14,
    "fat": 44,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chopped Cobb Salad",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-indianapolis-676",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "5555 E 82nd St, Indianapolis, IN 46250",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.75842,
      "lng": -86.16395
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 90,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 17,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Harissa Honey Chicken Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (470 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-indianapolis-677",
    "name": "Farmhouse Hash",
    "restaurant": "First Watch",
    "restaurantAddress": "4611 E 82nd St, Indianapolis, IN 46250",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.77788,
      "lng": -86.16436
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 259,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 38,
    "carbs": 28,
    "fat": 25,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Farmhouse Hash",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (490 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-indianapolis-678",
    "name": "Chicken Shawarma Bowl",
    "restaurant": "The Med",
    "restaurantAddress": "5614 East Washington Street, Indianapolis, IN 46219",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.76572,
      "lng": -86.16695
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 280,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 38,
    "carbs": 42,
    "fat": 14,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chicken Shawarma Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (450 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-indianapolis-679",
    "name": "Grilled Chicken Protein Bowl",
    "restaurant": "Top Out Cafe",
    "restaurantAddress": "1411 Roosevelt Ave, Indianapolis, IN 46201",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.76606,
      "lng": -86.15661
    },
    "price": 15,
    "rating": 4.7,
    "reviewsCount": 91,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 34,
    "fat": 14,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Zero Seed Oils",
      "5g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grilled Chicken Protein Bowl",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "us-philadelphia-19103-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Rittenhouse Square)",
    "restaurantAddress": "1700 Walnut St, Philadelphia, PA 19103",
    "city": "Philadelphia",
    "coordinates": {
      "lat": 39.94953,
      "lng": -75.15228
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 136,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-philadelphia-19103-2",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Rittenhouse Square)",
    "restaurantAddress": "1700 Walnut St, Philadelphia, PA 19103",
    "city": "Philadelphia",
    "coordinates": {
      "lat": 39.94864,
      "lng": -75.16847
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 170,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-philadelphia-19103-3",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Rittenhouse Square)",
    "restaurantAddress": "1700 Walnut St, Philadelphia, PA 19103",
    "city": "Philadelphia",
    "coordinates": {
      "lat": 39.9584,
      "lng": -75.15224
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 255,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-philadelphia-19103-4",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Rittenhouse Square)",
    "restaurantAddress": "1700 Walnut St, Philadelphia, PA 19103",
    "city": "Philadelphia",
    "coordinates": {
      "lat": 39.95318,
      "lng": -75.16271
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 281,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-philadelphia-19103-5",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Rittenhouse Square)",
    "restaurantAddress": "1700 Walnut St, Philadelphia, PA 19103",
    "city": "Philadelphia",
    "coordinates": {
      "lat": 39.96344,
      "lng": -75.15764
    },
    "price": 22,
    "rating": 4.8,
    "reviewsCount": 139,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-philadelphia-19107-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Center City East)",
    "restaurantAddress": "1100 Chestnut St, Philadelphia, PA 19107",
    "city": "Philadelphia",
    "coordinates": {
      "lat": 39.96207,
      "lng": -75.16489
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 278,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-philadelphia-19107-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Center City East)",
    "restaurantAddress": "1100 Chestnut St, Philadelphia, PA 19107",
    "city": "Philadelphia",
    "coordinates": {
      "lat": 39.96228,
      "lng": -75.17817
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 119,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-philadelphia-19107-3",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (Center City East)",
    "restaurantAddress": "1100 Chestnut St, Philadelphia, PA 19107",
    "city": "Philadelphia",
    "coordinates": {
      "lat": 39.94847,
      "lng": -75.17526
    },
    "price": 15,
    "rating": 4.8,
    "reviewsCount": 140,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-philadelphia-19107-4",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Center City East)",
    "restaurantAddress": "1100 Chestnut St, Philadelphia, PA 19107",
    "city": "Philadelphia",
    "coordinates": {
      "lat": 39.95955,
      "lng": -75.17908
    },
    "price": 22,
    "rating": 4.9,
    "reviewsCount": 212,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-philadelphia-19107-5",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Center City East)",
    "restaurantAddress": "1100 Chestnut St, Philadelphia, PA 19107",
    "city": "Philadelphia",
    "coordinates": {
      "lat": 39.94378,
      "lng": -75.17592
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-detroit-48226-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Downtown)",
    "restaurantAddress": "1201 Woodward Ave, Detroit, MI 48226",
    "city": "Detroit",
    "coordinates": {
      "lat": 42.32533,
      "lng": -83.03519
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 189,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-detroit-48226-2",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Downtown)",
    "restaurantAddress": "1201 Woodward Ave, Detroit, MI 48226",
    "city": "Detroit",
    "coordinates": {
      "lat": 42.33386,
      "lng": -83.0456
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 253,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-detroit-48226-3",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Downtown)",
    "restaurantAddress": "1201 Woodward Ave, Detroit, MI 48226",
    "city": "Detroit",
    "coordinates": {
      "lat": 42.31856,
      "lng": -83.04013
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-detroit-48226-4",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Downtown)",
    "restaurantAddress": "1201 Woodward Ave, Detroit, MI 48226",
    "city": "Detroit",
    "coordinates": {
      "lat": 42.32986,
      "lng": -83.03284
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 280,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-detroit-48226-5",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Downtown)",
    "restaurantAddress": "1201 Woodward Ave, Detroit, MI 48226",
    "city": "Detroit",
    "coordinates": {
      "lat": 42.32673,
      "lng": -83.03606
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 78,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-detroit-48201-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Midtown)",
    "restaurantAddress": "3901 Cass Ave, Detroit, MI 48201",
    "city": "Detroit",
    "coordinates": {
      "lat": 42.32741,
      "lng": -83.04834
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 222,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-detroit-48201-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Midtown)",
    "restaurantAddress": "3901 Cass Ave, Detroit, MI 48201",
    "city": "Detroit",
    "coordinates": {
      "lat": 42.33696,
      "lng": -83.04745
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 158,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-detroit-48201-3",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (Midtown)",
    "restaurantAddress": "3901 Cass Ave, Detroit, MI 48201",
    "city": "Detroit",
    "coordinates": {
      "lat": 42.33239,
      "lng": -83.03545
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 243,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-detroit-48201-4",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Midtown)",
    "restaurantAddress": "3901 Cass Ave, Detroit, MI 48201",
    "city": "Detroit",
    "coordinates": {
      "lat": 42.34454,
      "lng": -83.04573
    },
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 249,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-detroit-48201-5",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Midtown)",
    "restaurantAddress": "3901 Cass Ave, Detroit, MI 48201",
    "city": "Detroit",
    "coordinates": {
      "lat": 42.32077,
      "lng": -83.03867
    },
    "price": 15,
    "rating": 4.9,
    "reviewsCount": 272,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-las-vegas-700",
    "name": "Chinese Chicken Salad (No Dressing)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3500 Las Vegas Blvd S, Las Vegas, NV 89109",
    "city": "Las Vegas",
    "coordinates": {
      "lat": 36.15954,
      "lng": -115.12763
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 278,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 37,
    "carbs": 21,
    "fat": 29,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Chinese Chicken Salad (No Dressing)",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (490 kcal, 37g protein, 10g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-las-vegas-701",
    "name": "Turkey Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3500 Las Vegas Blvd S, Las Vegas, NV 89109",
    "city": "Las Vegas",
    "coordinates": {
      "lat": 36.15685,
      "lng": -115.14541
    },
    "price": 18,
    "rating": 4.7,
    "reviewsCount": 192,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 43,
    "carbs": 35,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Extra Virgin Olive Oil / Avocado Oil / Grass-Fed Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Zero Seed Oils",
      "4g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Turkey Burger",
      "Cold-pressed extra virgin olive oil",
      "Garden greens",
      "Sea salt",
      "Fresh herbs"
    ],
    "chefNotes": "Verified by HealthyVicinity database (600 kcal, 43g protein, 4g fiber). 100% seed-oil free and gluten-free."
  },
  {
    "id": "us-las-vegas-89109-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (The Strip)",
    "restaurantAddress": "3131 Las Vegas Blvd S, Las Vegas, NV 89109",
    "city": "Las Vegas",
    "coordinates": {
      "lat": 36.18212,
      "lng": -115.12644
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 215,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-las-vegas-89109-2",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (The Strip)",
    "restaurantAddress": "3131 Las Vegas Blvd S, Las Vegas, NV 89109",
    "city": "Las Vegas",
    "coordinates": {
      "lat": 36.17757,
      "lng": -115.13069
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 87,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-las-vegas-89109-3",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (The Strip)",
    "restaurantAddress": "3131 Las Vegas Blvd S, Las Vegas, NV 89109",
    "city": "Las Vegas",
    "coordinates": {
      "lat": 36.17005,
      "lng": -115.1465
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 203,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-las-vegas-89101-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Downtown Arts)",
    "restaurantAddress": "100 S 1st St, Las Vegas, NV 89101",
    "city": "Las Vegas",
    "coordinates": {
      "lat": 36.18071,
      "lng": -115.15202
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-las-vegas-89101-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Downtown Arts)",
    "restaurantAddress": "100 S 1st St, Las Vegas, NV 89101",
    "city": "Las Vegas",
    "coordinates": {
      "lat": 36.16459,
      "lng": -115.15214
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 153,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-las-vegas-89101-3",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (Downtown Arts)",
    "restaurantAddress": "100 S 1st St, Las Vegas, NV 89101",
    "city": "Las Vegas",
    "coordinates": {
      "lat": 36.16087,
      "lng": -115.14936
    },
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-las-vegas-89101-4",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Downtown Arts)",
    "restaurantAddress": "100 S 1st St, Las Vegas, NV 89101",
    "city": "Las Vegas",
    "coordinates": {
      "lat": 36.16594,
      "lng": -115.15246
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 283,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-las-vegas-89101-5",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Downtown Arts)",
    "restaurantAddress": "100 S 1st St, Las Vegas, NV 89101",
    "city": "Las Vegas",
    "coordinates": {
      "lat": 36.17343,
      "lng": -115.14878
    },
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 195,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-sacramento-95814-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Downtown)",
    "restaurantAddress": "1000 K St, Sacramento, CA 95814",
    "city": "Sacramento",
    "coordinates": {
      "lat": 38.5849,
      "lng": -121.50822
    },
    "price": 19,
    "rating": 4.8,
    "reviewsCount": 289,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-sacramento-95814-2",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Downtown)",
    "restaurantAddress": "1000 K St, Sacramento, CA 95814",
    "city": "Sacramento",
    "coordinates": {
      "lat": 38.59659,
      "lng": -121.49796
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 176,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-sacramento-95814-3",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Downtown)",
    "restaurantAddress": "1000 K St, Sacramento, CA 95814",
    "city": "Sacramento",
    "coordinates": {
      "lat": 38.5741,
      "lng": -121.50298
    },
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 190,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-sacramento-95814-4",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Downtown)",
    "restaurantAddress": "1000 K St, Sacramento, CA 95814",
    "city": "Sacramento",
    "coordinates": {
      "lat": 38.57869,
      "lng": -121.48781
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 238,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-sacramento-95814-5",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Downtown)",
    "restaurantAddress": "1000 K St, Sacramento, CA 95814",
    "city": "Sacramento",
    "coordinates": {
      "lat": 38.57001,
      "lng": -121.48354
    },
    "price": 21,
    "rating": 4.8,
    "reviewsCount": 85,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-sacramento-95816-1",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Midtown)",
    "restaurantAddress": "2400 J St, Sacramento, CA 95816",
    "city": "Sacramento",
    "coordinates": {
      "lat": 38.59196,
      "lng": -121.49066
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 105,
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-sacramento-95816-2",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Midtown)",
    "restaurantAddress": "2400 J St, Sacramento, CA 95816",
    "city": "Sacramento",
    "coordinates": {
      "lat": 38.58569,
      "lng": -121.485
    },
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 268,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  },
  {
    "id": "us-sacramento-95816-3",
    "name": "Yellowfin Tuna Poke & Sprouted Greens",
    "restaurant": "The Protein House (Midtown)",
    "restaurantAddress": "2400 J St, Sacramento, CA 95816",
    "city": "Sacramento",
    "coordinates": {
      "lat": 38.56745,
      "lng": -121.49901
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 143,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 45,
    "carbs": 26,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Cold-Pressed Sesame & EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Lean Seafood Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Line-caught sashimi yellowfin tuna",
      "sprouted brown rice",
      "avocado chunks",
      "seaweed salad",
      "gluten-free coconut aminos"
    ],
    "chefNotes": "Fresh sushi-grade tuna marinated in organic aminos and cold-pressed oil. Low sugar, fresh ingredients, 100% gluten-free."
  },
  {
    "id": "us-sacramento-95816-4",
    "name": "Organic Sprouted Tofu & Edamame Crunch Bowl",
    "restaurant": "Planta (Midtown)",
    "restaurantAddress": "2400 J St, Sacramento, CA 95816",
    "city": "Sacramento",
    "coordinates": {
      "lat": 38.59081,
      "lng": -121.49886
    },
    "price": 18,
    "rating": 4.8,
    "reviewsCount": 242,
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 32,
    "carbs": 30,
    "fat": 14,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Organic Plant Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "10g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Sprouted organic non-GMO tofu",
      "steamed edamame",
      "shredded purple cabbage",
      "turmeric Romanesco",
      "hemp seed gremolata"
    ],
    "chefNotes": "Fermented and sprouted plant protein bowl rich in gut-healthy fiber. Completely seed-oil free and 100% gluten-free."
  },
  {
    "id": "us-sacramento-95816-5",
    "name": "Gulf Shrimp & Charred Broccolini Salad",
    "restaurant": "Salata (Midtown)",
    "restaurantAddress": "2400 J St, Sacramento, CA 95816",
    "city": "Sacramento",
    "coordinates": {
      "lat": 38.57384,
      "lng": -121.49086
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 166,
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 20,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Wild Seafood Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "6g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild-caught Gulf shrimp",
      "charred broccolini florets",
      "hearts of palm",
      "shaved parmesan",
      "lemon garlic vinaigrette"
    ],
    "chefNotes": "Wild Gulf shrimp quickly seared in cold-pressed olive oil over crisp brassicas. Low carb, low sugar, high protein."
  },
  {
    "id": "us-portland-me-04101-1",
    "name": "Wild Alaskan Salmon Quinoa Bowl",
    "restaurant": "Flower Child (Old Port)",
    "restaurantAddress": "100 Commercial St, Portland ME, ME 04101",
    "city": "Portland ME",
    "coordinates": {
      "lat": 43.67339,
      "lng": -70.27097
    },
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 271,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 44,
    "carbs": 32,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Wild Alaskan salmon fillet",
      "sprouted tri-color quinoa",
      "charred broccolini",
      "avocado slices",
      "lemon-herb drizzle"
    ],
    "chefNotes": "Certified low calorie (520 kcal), high protein (44g), high fiber, and prepared strictly with cold-pressed olive oil. No seed oils, zero cane sugar, naturally gluten-free."
  },
  {
    "id": "us-portland-me-04101-2",
    "name": "Grass-Fed Bison Quinoa Power Bowl",
    "restaurant": "True Food Kitchen (Old Port)",
    "restaurantAddress": "100 Commercial St, Portland ME, ME 04101",
    "city": "Portland ME",
    "coordinates": {
      "lat": 43.65285,
      "lng": -70.2425
    },
    "price": 22,
    "rating": 4.9,
    "reviewsCount": 289,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 48,
    "carbs": 34,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Grass-Fed Protein",
      "100% Beef Tallow",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "100% Regenerative grass-fed bison",
      "ancient quinoa",
      "fire-roasted sweet peppers",
      "baby spinach",
      "chimichurri"
    ],
    "chefNotes": "Regenerative pasture-raised bison seared in 100% beef tallow. High protein, nutrient-dense clean carbs, zero industrial seed oils."
  },
  {
    "id": "us-portland-me-04101-3",
    "name": "Citrus-Herb Pastured Chicken Greens Bowl",
    "restaurant": "Sweetgreen (Old Port)",
    "restaurantAddress": "100 Commercial St, Portland ME, ME 04101",
    "city": "Portland ME",
    "coordinates": {
      "lat": 43.66828,
      "lng": -70.24184
    },
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 79,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 46,
    "carbs": 24,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "46g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "8g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Antibiotic-free pastured chicken breast",
      "massaged lacinato kale",
      "sprouted black beans",
      "Hass avocado",
      "cold-pressed citrus dressing"
    ],
    "chefNotes": "Slow-roasted pastured chicken over organic greens and sprouted legumes. Low sugar, clean fat profile, verified gluten-free."
  },
  {
    "id": "us-portland-me-04101-4",
    "name": "100% Grass-Fed Sirloin Kebab Plate",
    "restaurant": "CAVA (Old Port)",
    "restaurantAddress": "100 Commercial St, Portland ME, ME 04101",
    "city": "Portland ME",
    "coordinates": {
      "lat": 43.67337,
      "lng": -70.24874
    },
    "price": 17,
    "rating": 4.8,
    "reviewsCount": 148,
    "image": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 46,
    "carbs": 28,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "100% Extra Virgin Olive Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "46g Grass-Fed Protein",
      "100% Extra Virgin Olive Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "Grass-fed beef sirloin cubes",
      "Supergreens salad blend",
      "black lentils",
      "Persian cucumber relish",
      "tahini drizzle"
    ],
    "chefNotes": "Charcoal grilled grass-fed beef with prebiotic black lentils and raw garden greens. 100% seed-oil free."
  },
  {
    "id": "us-portland-me-04101-5",
    "name": "Roasted Heritage Turkey & Sweet Potato Hash",
    "restaurant": "Dig (Old Port)",
    "restaurantAddress": "100 Commercial St, Portland ME, ME 04101",
    "city": "Portland ME",
    "coordinates": {
      "lat": 43.65943,
      "lng": -70.24308
    },
    "price": 19,
    "rating": 4.9,
    "reviewsCount": 172,
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 44,
    "carbs": 36,
    "fat": 12,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein",
      "High Fiber",
      "Low Sugar",
      "Clean Whole Food"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Lean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "7g Dietary Fiber",
      "100% Gluten-Free"
    ],
    "ingredients": [
      "All-natural heritage turkey breast",
      "roasted garnet sweet potato cubes",
      "wilted baby spinach",
      "rosemary jus"
    ],
    "chefNotes": "Oven-roasted tender turkey breast paired with anti-inflammatory yams. Perfectly macro-balanced and clean."
  }
];

export const INITIAL_DISHES: Dish[] = [...INDIA_DISHES, ...US_DISHES];
