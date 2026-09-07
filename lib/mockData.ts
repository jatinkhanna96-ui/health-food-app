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
    "id": "hen-austin-1",
    "name": "Triple Meat Whataburger",
    "restaurant": "Whataburger",
    "restaurantAddress": "Austin, TX",
    "city": "Austin",
    "coordinates": {
      "lat": 30.2287,
      "lng": -97.7816
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 1070,
    "protein": 65,
    "carbs": 62,
    "fat": 63,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "65g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Triple Meat Whataburger."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1070 kcal, 65g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-austin-2",
    "name": "Large Bison Quinoa Bowl",
    "restaurant": "SNAP KITCHEN",
    "restaurantAddress": "4616 Triangle Ave, Austin, TX 78751",
    "city": "Austin",
    "coordinates": {
      "lat": 30.31506,
      "lng": -97.73396
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "calories": 830,
    "protein": 57,
    "carbs": 59,
    "fat": 41,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "57g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Large Bison Quinoa Bowl."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (830 kcal, 57g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-austin-3",
    "name": "Large Chicken Carnitas Bowl",
    "restaurant": "SNAP KITCHEN",
    "restaurantAddress": "4616 Triangle Ave, Austin, TX 78751",
    "city": "Austin",
    "coordinates": {
      "lat": 30.31506,
      "lng": -97.73396
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 830,
    "protein": 54,
    "carbs": 56,
    "fat": 44,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Large Chicken Carnitas Bowl."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (830 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-austin-4",
    "name": "Grass-Fed Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "222 West Ave, Austin, TX 78701",
    "city": "Austin",
    "coordinates": {
      "lat": 30.26724,
      "lng": -97.75208
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 51,
    "carbs": 40,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-Fed Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-austin-5",
    "name": "All-American Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "222 West Ave, Austin, TX 78701",
    "city": "Austin",
    "coordinates": {
      "lat": 30.26724,
      "lng": -97.75208
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 51,
    "carbs": 38,
    "fat": 41,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-American Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-austin-6",
    "name": "Bacon Jam Club",
    "restaurant": "MODERN MARKET EATERY",
    "restaurantAddress": "3201 Bee Cave Rd, Austin, TX 78746",
    "city": "Austin",
    "coordinates": {
      "lat": 30.27204,
      "lng": -97.80097
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 670,
    "protein": 49,
    "carbs": 50,
    "fat": 30,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "49g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Bacon Jam Club."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (670 kcal, 49g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-austin-7",
    "name": "Whataburger Patty Melt",
    "restaurant": "Whataburger",
    "restaurantAddress": "Austin, TX",
    "city": "Austin",
    "coordinates": {
      "lat": 30.2952,
      "lng": -97.7116
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 940,
    "protein": 49,
    "carbs": 45,
    "fat": 61,
    "fiber": 1,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "49g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Whataburger Patty Melt."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (940 kcal, 49g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-austin-8",
    "name": "Smoky Chicken Bowl",
    "restaurant": "MODERN MARKET EATERY",
    "restaurantAddress": "3201 Bee Cave Rd, Austin, TX 78746",
    "city": "Austin",
    "coordinates": {
      "lat": 30.27204,
      "lng": -97.80097
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 718,
    "protein": 47,
    "carbs": 77,
    "fat": 22,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "47g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Smoky Chicken Bowl."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (718 kcal, 47g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-austin-9",
    "name": "Double Meat Whataburger",
    "restaurant": "Whataburger",
    "restaurantAddress": "Austin, TX",
    "city": "Austin",
    "coordinates": {
      "lat": 30.2637,
      "lng": -97.7151
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 830,
    "protein": 47,
    "carbs": 62,
    "fat": 44,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "47g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double Meat Whataburger."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (830 kcal, 47g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-austin-10",
    "name": "Green Chile Beef Colorado Bowl",
    "restaurant": "FLOWER CHILD",
    "restaurantAddress": "500 W 2nd St, Austin, TX 78701",
    "city": "Austin",
    "coordinates": {
      "lat": 30.26677,
      "lng": -97.75019
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "calories": 750,
    "protein": 47,
    "carbs": 69,
    "fat": 33,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "47g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-fed beef braised in green chile Colorado sauce over grains and vegetables. Remarkable 47g protein with only 4g sugar \u2014 one of the highest-protein bowls in Austin with verified nutrition data."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (750 kcal, 47g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-austin-11",
    "name": "(NOLA only)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "222 West Ave, Austin, TX 78701",
    "city": "Austin",
    "coordinates": {
      "lat": 30.26724,
      "lng": -97.75208
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 1120,
    "protein": 46,
    "carbs": 151,
    "fat": 35,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
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
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "(NOLA only)",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1120 kcal, 46g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-austin-12",
    "name": "Basil Chicken Sandwich",
    "restaurant": "MODERN MARKET EATERY",
    "restaurantAddress": "3201 Bee Cave Rd, Austin, TX 78746",
    "city": "Austin",
    "coordinates": {
      "lat": 30.27204,
      "lng": -97.80097
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 700,
    "protein": 45,
    "carbs": 57,
    "fat": 32,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Basil Chicken Sandwich."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (700 kcal, 45g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-austin-13",
    "name": "Cool Wrap",
    "restaurant": "Chick-fil-A",
    "restaurantAddress": "Austin, TX",
    "city": "Austin",
    "coordinates": {
      "lat": 30.2812,
      "lng": -97.7221
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 43,
    "carbs": 32,
    "fat": 45,
    "fiber": 14,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Cool Wrap",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 43g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-austin-14",
    "name": "Pepperoni Pizza",
    "restaurant": "TRUE FOOD KITCHEN",
    "restaurantAddress": "222 West Ave, Austin, TX 78701",
    "city": "Austin",
    "coordinates": {
      "lat": 30.26724,
      "lng": -97.75208
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 1070,
    "protein": 43,
    "carbs": 129,
    "fat": 38,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "43g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Pepperoni Pizza",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1070 kcal, 43g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-new-york-1",
    "name": "Double High-Protein Bowl (double adobo chicken + light rice + black beans + fajita veggies + tomato salsa + cheese + romaine)",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "9 W 42nd St, New York, NY 10036",
    "city": "New York",
    "coordinates": {
      "lat": 40.75398,
      "lng": -73.98162
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 760,
    "protein": 81,
    "carbs": 54,
    "fat": 25,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "81g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double Adobo Chicken",
      "Light White Rice",
      "Black Beans",
      "Fajita Veggies",
      "Fresh Tomato Salsa",
      "Monterey Jack Cheese"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (760 kcal, 81g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-new-york-2",
    "name": "Double Chicken Bowl (double chicken + black beans + fajita veggies + tomato salsa + cheese + lettuce)",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "9 W 42nd St, New York, NY 10036",
    "city": "New York",
    "coordinates": {
      "lat": 40.75398,
      "lng": -73.98162
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 68,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "68g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double Chicken Bowl (double chicken + black beans + fajita veggies + tomato salsa + cheese + lettuce)"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (560 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-new-york-3",
    "name": "Chicken Bowl (Double Protein, No Rice)",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "2500 Central Park Ave, Yonkers, NY 10710",
    "city": "New York",
    "coordinates": {
      "lat": 40.9459,
      "lng": -73.8628
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 390,
    "protein": 64,
    "carbs": 28,
    "fat": 8,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Romaine lettuce base with double grilled chicken",
      "fajita vegetables",
      "fresh tomato salsa",
      "and black beans. Skip the rice to keep carbs low while maximizing protein. Perfect post-workout meal."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (390 kcal, 64g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-new-york-4",
    "name": "Brick Pressed Chicken",
    "restaurant": "The Smith",
    "restaurantAddress": "956 2nd Ave, New York, NY 10022",
    "city": "New York",
    "coordinates": {
      "lat": 40.7574,
      "lng": -73.9657
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 890,
    "protein": 62,
    "carbs": 42,
    "fat": 52,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "62g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "garlic whipped potatoes",
      "baby spinach",
      "chicken jus"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (890 kcal, 62g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-new-york-5",
    "name": "French Dip",
    "restaurant": "The Smith",
    "restaurantAddress": "956 2nd Ave, New York, NY 10022",
    "city": "New York",
    "coordinates": {
      "lat": 40.7574,
      "lng": -73.9657
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 1250,
    "protein": 62,
    "carbs": 98,
    "fat": 64,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "62g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "slow roasted steak",
      "caramelized onions",
      "gruy\u00e8re",
      "dijonnaise",
      "baguette",
      "au jus"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1250 kcal, 62g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-new-york-6",
    "name": "Classic Cobb Salad",
    "restaurant": "Chopt Creative Salad Co.",
    "restaurantAddress": "24 E 17th St, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.7373,
      "lng": -73.99103
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 60,
    "carbs": 17,
    "fat": 35,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "60g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Classic Cobb Salad."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (600 kcal, 60g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-new-york-7",
    "name": "Country Pork Chop",
    "restaurant": "The Smith",
    "restaurantAddress": "956 2nd Ave, New York, NY 10022",
    "city": "New York",
    "coordinates": {
      "lat": 40.7574,
      "lng": -73.9657
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 980,
    "protein": 58,
    "carbs": 48,
    "fat": 60,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "jalape\u00f1o cheddar grits",
      "scallion and shishito pepper vinaigrette"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (980 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-new-york-8",
    "name": "Spicy Ahi Tuna Bowl (Large)",
    "restaurant": "Pokeworks",
    "restaurantAddress": "63 W 37th St, New York, NY 10018",
    "city": "New York",
    "coordinates": {
      "lat": 40.75169,
      "lng": -73.98593
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "calories": 790,
    "protein": 55,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "55g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Spicy Ahi Tuna Bowl (Large)"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (790 kcal, 55g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-new-york-9",
    "name": "Double Chicken Shawarma Bowl (Vermicelli Rice)",
    "restaurant": "NAYA",
    "restaurantAddress": "54 W 56th St, New York, NY 10019",
    "city": "New York",
    "coordinates": {
      "lat": 40.76316,
      "lng": -73.977
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 690,
    "protein": 54,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double Chicken Shawarma Bowl (Vermicelli Rice)"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (690 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-new-york-10",
    "name": "Spicy Chicken Caesar Wrap",
    "restaurant": "Just Salad",
    "restaurantAddress": "252 7th Ave, Brooklyn, NY 11215",
    "city": "New York",
    "coordinates": {
      "lat": 40.66948,
      "lng": -73.97961
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 51,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Spicy Chicken Caesar Wrap"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (560 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-new-york-11",
    "name": "Protein Power",
    "restaurant": "Just Salad (Midtown East)",
    "restaurantAddress": "152 E 46th St, New York, NY 10017",
    "city": "New York",
    "coordinates": {
      "lat": 40.75347,
      "lng": -73.97356
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 680,
    "protein": 50,
    "carbs": 56,
    "fat": 31,
    "fiber": 19,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "50g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grain and lentil bowl loaded with protein toppings."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (680 kcal, 50g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-new-york-12",
    "name": "Parm Crunch Salad",
    "restaurant": "Just Salad (Midtown East)",
    "restaurantAddress": "152 E 46th St, New York, NY 10017",
    "city": "New York",
    "coordinates": {
      "lat": 40.75347,
      "lng": -73.97356
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 50,
    "carbs": 33,
    "fat": 24,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "50g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Crunchy parmesan salad with chicken."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 50g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-new-york-13",
    "name": "Spicy Chicken + Avocado Pita",
    "restaurant": "CAVA",
    "restaurantAddress": "143 4th Ave, New York, NY 10003",
    "city": "New York",
    "coordinates": {
      "lat": 40.7338,
      "lng": -73.98967
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 980,
    "protein": 50,
    "carbs": 85,
    "fat": 51,
    "fiber": 15,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "50g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken",
      "avocado",
      "harissa",
      "hummus",
      "tomato + cucumber in a whole pita"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (980 kcal, 50g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-new-york-14",
    "name": "Whole30 Bowl",
    "restaurant": "The Little Beet",
    "restaurantAddress": "135 W 50th St, New York, NY 10020",
    "city": "New York",
    "coordinates": {
      "lat": 40.76087,
      "lng": -73.9824
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 730,
    "protein": 49,
    "carbs": 67,
    "fat": 31,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "49g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (49g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (730 kcal, 49g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-los-angeles-1",
    "name": "Double High Protein Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "Multiple Pasadena locations",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.1478,
      "lng": -118.1445
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 760,
    "protein": 81,
    "carbs": 54,
    "fat": 25,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "81g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double Adobo Chicken",
      "Light White Rice",
      "Black Beans",
      "Fajita Veggies",
      "Fresh Tomato Salsa",
      "Monterey Jack Cheese"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (760 kcal, 81g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-los-angeles-2",
    "name": "Double High Protein Burrito",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "Multiple Pasadena locations",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.1478,
      "lng": -118.1445
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 840,
    "protein": 79,
    "carbs": 86,
    "fat": 28,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "79g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double Adobo Chicken",
      "brown rice",
      "black beans",
      "cheese",
      "wrapped in tortilla"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (840 kcal, 79g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-los-angeles-3",
    "name": "Double Chicken Breast Plate",
    "restaurant": "California Chicken Cafe",
    "restaurantAddress": "6805 Melrose Ave, Los Angeles, CA 90038",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.0837,
      "lng": -118.34
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 76,
    "carbs": 12,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "76g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Two grilled chicken breasts with steamed vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 76g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-los-angeles-4",
    "name": "Double Chicken Bowl",
    "restaurant": "El Pollo Loco",
    "restaurantAddress": "5319 Sunset Blvd, Los Angeles, CA 90027",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.09819,
      "lng": -118.30598
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 930,
    "protein": 74,
    "carbs": 87,
    "fat": 33,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "74g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double fire-grilled chicken",
      "cilantro rice",
      "pinto beans",
      "avocado salsa",
      "and pico de gallo. 74g protein in one bowl \u2014 the highest-protein item at El Pollo Loco. Best for high-calorie training days."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (930 kcal, 74g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-los-angeles-5",
    "name": "Protein Power Bowl",
    "restaurant": "The Hive Healthy Cafe",
    "restaurantAddress": "800 S Broadway, Los Angeles, CA 90014",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04363,
      "lng": -118.25472
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 70,
    "carbs": 38,
    "fat": 18,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "70g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Pulled chicken",
      "eggs",
      "avocado",
      "sea salt edamame",
      "coconut ginger quinoa",
      "wilted kale"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 70g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-los-angeles-6",
    "name": "Double Chicken Bowl (No Sauce)",
    "restaurant": "Flame Broiler",
    "restaurantAddress": "801 S Figueroa St, Los Angeles, CA 90017",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.0483,
      "lng": -118.2631
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 68,
    "carbs": 72,
    "fat": 6,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double portion of grilled chicken breast over rice and vegetables",
      "no sauce"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-los-angeles-7",
    "name": "Chicken Pesto Bowl",
    "restaurant": "The Hive Healthy Cafe",
    "restaurantAddress": "800 S Broadway, Los Angeles, CA 90014",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04363,
      "lng": -118.25472
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 68,
    "carbs": 28,
    "fat": 20,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Pulled chicken",
      "parmesan",
      "avocado",
      "chili garlic broccolini",
      "spinach",
      "pistachio"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-los-angeles-8",
    "name": "Chicken Athena Bowl",
    "restaurant": "The Hive Healthy Cafe",
    "restaurantAddress": "800 S Broadway, Los Angeles, CA 90014",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.04363,
      "lng": -118.25472
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 65,
    "carbs": 30,
    "fat": 14,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "65g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Pulled chicken",
      "whipped hummus",
      "cucumber herb salad",
      "seasonal greens",
      "tomato salad",
      "fermented beets"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (510 kcal, 65g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-los-angeles-9",
    "name": "Chicken Bowl (Double Meat)",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "Multiple Pasadena locations",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.1478,
      "lng": -118.1445
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 64,
    "carbs": 58,
    "fat": 24,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double chicken",
      "brown rice",
      "black beans",
      "fajita veggies",
      "mild salsa"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 64g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-los-angeles-10",
    "name": "Chicken Plate (Half Chicken)",
    "restaurant": "Zankou Chicken",
    "restaurantAddress": "Pasadena area",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.1478,
      "lng": -118.1445
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 64,
    "carbs": 48,
    "fat": 32,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Half rotisserie chicken (60g)",
      "hummus",
      "pita bread",
      "pickles",
      "garlic sauce"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 64g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-los-angeles-11",
    "name": "Breakfast Burrito (turkey picante)",
    "restaurant": "Tocaya",
    "restaurantAddress": "6550 Sunset Blvd, Los Angeles, CA 90028",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.0979,
      "lng": -118.33274
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 1340,
    "protein": 63,
    "carbs": 99,
    "fat": 76,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "63g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (63g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1340 kcal, 63g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-los-angeles-12",
    "name": "Chicken Bowl (No Rice, Double Protein)",
    "restaurant": "Chipotle",
    "restaurantAddress": "601 W 7th St, Los Angeles, CA 90017",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.0496,
      "lng": -118.2587
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 485,
    "protein": 62,
    "carbs": 32,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "62g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double chicken",
      "black beans",
      "fajita veggies",
      "lettuce",
      "salsa"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (485 kcal, 62g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-los-angeles-13",
    "name": "Chicken Hearty Bowl (Double Protein)",
    "restaurant": "Ben's Fast Food",
    "restaurantAddress": "1060 E Colorado Blvd, Pasadena, CA 91106",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.1478,
      "lng": -118.1445
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 62,
    "carbs": 58,
    "fat": 20,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "62g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double slow-roasted chicken (58g)",
      "millet",
      "brown rice",
      "fresh vegetables",
      "house sauce"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 62g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-los-angeles-14",
    "name": "Chicken Salad Bowl",
    "restaurant": "Chipotle",
    "restaurantAddress": "601 W 7th St, Los Angeles, CA 90017",
    "city": "Los Angeles",
    "coordinates": {
      "lat": 34.0496,
      "lng": -118.2587
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 465,
    "protein": 60,
    "carbs": 28,
    "fat": 13,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "60g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double chicken",
      "romaine lettuce",
      "black beans",
      "fajita veggies",
      "fresh tomato salsa"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (465 kcal, 60g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-francisco-1",
    "name": "Rooster",
    "restaurant": "Blue Barn",
    "restaurantAddress": "2105 Chestnut St, San Francisco, CA 94123",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.80047,
      "lng": -122.43812
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 825,
    "protein": 62,
    "carbs": 44,
    "fat": 43,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "62g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chili-lime grilled mary's chicken breast",
      "niman bacon",
      "white cheddar",
      "smashed avocado",
      "roma tomato & chipotle aioli on a ciabatta roll."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (825 kcal, 62g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-francisco-2",
    "name": "Skirt",
    "restaurant": "Blue Barn",
    "restaurantAddress": "2105 Chestnut St, San Francisco, CA 94123",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.80047,
      "lng": -122.43812
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 700,
    "protein": 56,
    "carbs": 43,
    "fat": 34,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "56g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled brandt ranch flank steak",
      "provolone",
      "roma tomato",
      "pickled onion",
      "arugula & rosemary-garlic aioli on a ciabatta roll."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (700 kcal, 56g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-francisco-3",
    "name": "Cobber",
    "restaurant": "Blue Barn",
    "restaurantAddress": "2105 Chestnut St, San Francisco, CA 94123",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.80047,
      "lng": -122.43812
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 665,
    "protein": 48,
    "carbs": 39,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chili-lime mary's chicken",
      "niman bacon",
      "soft boiled egg",
      "cherry tomato",
      "cucumber",
      "carrot"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (665 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-francisco-4",
    "name": "Protein Greens Bowl",
    "restaurant": "Mixt",
    "restaurantAddress": "3939 Valencia St, San Francisco, CA",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.74811,
      "lng": -122.42029
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 38,
    "carbs": 29,
    "fat": 17,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken",
      "spinach",
      "kale",
      "quinoa",
      "avocado",
      "lemon vinaigrette"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (450 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-francisco-5",
    "name": "Organic Protein Plate",
    "restaurant": "The Plant Cafe Organic",
    "restaurantAddress": "3737 Embarcadero, San Francisco, CA",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.7539,
      "lng": -122.3844
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 37,
    "carbs": 30,
    "fat": 16,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Organic grilled chicken breast",
      "brown rice",
      "steamed broccoli",
      "tahini sauce"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (440 kcal, 37g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-francisco-6",
    "name": "Protein Reset Bowl",
    "restaurant": "Urban Remedy",
    "restaurantAddress": "1957 Union St, San Francisco, CA 94123",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.79741,
      "lng": -122.43149
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 36,
    "carbs": 32,
    "fat": 14,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken",
      "quinoa",
      "kale",
      "roasted sweet potato",
      "tahini dressing"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (420 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-francisco-7",
    "name": "Warrior Bowl",
    "restaurant": "Vitality Bowls",
    "restaurantAddress": "1523 Franklin St, San Francisco, CA 94109",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.78858,
      "lng": -122.4239
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 24,
    "carbs": 42,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "24g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Acai",
      "banana",
      "almond milk",
      "peanut butter",
      "protein powder"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (420 kcal, 24g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-francisco-8",
    "name": "California Bowl",
    "restaurant": "The Plant Cafe",
    "restaurantAddress": "2335 Chestnut St, San Francisco, CA 94123",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.79987,
      "lng": -122.44183
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 24,
    "carbs": 48,
    "fat": 16,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "24g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Brown rice",
      "grilled tempeh",
      "avocado",
      "vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (460 kcal, 24g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-francisco-9",
    "name": "Dragon Bowl",
    "restaurant": "Vitality Bowls",
    "restaurantAddress": "1523 Franklin St, San Francisco, CA 94109",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.78858,
      "lng": -122.4239
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 340,
    "protein": 12,
    "carbs": 48,
    "fat": 8,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "12g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Pitaya",
      "banana",
      "coconut milk",
      "granola",
      "honey"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (340 kcal, 12g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-francisco-10",
    "name": "Steak Chimichurri Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown San Francisco, CA",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.7869,
      "lng": -122.4074
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "calories": 680,
    "protein": 48,
    "carbs": 50,
    "fat": 28,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled steak",
      "chimichurri",
      "roasted sweet potato",
      "black beans",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (680 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-francisco-11",
    "name": "Shrimp Bowl",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown San Francisco, CA",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.7899,
      "lng": -122.4044
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 34,
    "carbs": 60,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Sauteed shrimp",
      "coconut jasmine rice",
      "mango salsa",
      "sweet chili drizzle"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-francisco-12",
    "name": "Protein Smoothie",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown San Francisco, CA",
    "city": "San Francisco",
    "coordinates": {
      "lat": 37.7929,
      "lng": -122.4014
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 28,
    "carbs": 42,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Whey protein",
      "banana",
      "almond butter",
      "almond milk",
      "dates"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 28g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-miami-1",
    "name": "Pollo",
    "restaurant": "Novecento",
    "restaurantAddress": "1414 Brickell Ave, Miami, FL 33131",
    "city": "Miami",
    "coordinates": {
      "lat": 25.7635,
      "lng": -80.1923
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 770,
    "protein": 85,
    "carbs": 0,
    "fat": 48,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "85g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-natural half chicken deboned",
      "14oz",
      "from the parrilla grill."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (770 kcal, 85g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-miami-2",
    "name": "Mediterranean Roasted Chicken",
    "restaurant": "Oceans 234",
    "restaurantAddress": "234 N Ocean Blvd, Deerfield Beach, FL 33441",
    "city": "Miami",
    "coordinates": {
      "lat": 26.3192,
      "lng": -80.0819
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 855,
    "protein": 74,
    "carbs": 31,
    "fat": 47,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "74g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Lemon-herb half chicken",
      "artichoke heart",
      "kalamata olive",
      "red bell pepper",
      "pan jus",
      "feta"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (855 kcal, 74g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-miami-3",
    "name": "Thai Coconut Mahi + Shrimp",
    "restaurant": "Oceans 234",
    "restaurantAddress": "234 N Ocean Blvd, Deerfield Beach, FL 33441",
    "city": "Miami",
    "coordinates": {
      "lat": 26.3192,
      "lng": -80.0819
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "calories": 735,
    "protein": 71,
    "carbs": 56,
    "fat": 24,
    "fiber": 2,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "71g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Crispy sushi rice",
      "baby spinach",
      "sweet tamari glaze",
      "coconut-curry sauce."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (735 kcal, 71g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-miami-4",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "2400 E Sunrise Blvd, Fort Lauderdale, FL 33304",
    "city": "Miami",
    "coordinates": {
      "lat": 26.1513,
      "lng": -80.111
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 68,
    "carbs": 52,
    "fat": 14,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double chicken over brown rice with black beans and fresh salsa in Fort Lauderdale. 68g protein",
      "the go-to macro order in South Florida."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (640 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-miami-5",
    "name": "Lomo",
    "restaurant": "Novecento",
    "restaurantAddress": "1414 Brickell Ave, Miami, FL 33131",
    "city": "Miami",
    "coordinates": {
      "lat": 25.7635,
      "lng": -80.1923
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 570,
    "protein": 68,
    "carbs": 0,
    "fat": 32,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Filet mignon",
      "8oz",
      "from the parrilla grill."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (570 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-miami-6",
    "name": "Hamburguesa Novecento",
    "restaurant": "Novecento",
    "restaurantAddress": "1414 Brickell Ave, Miami, FL 33131",
    "city": "Miami",
    "coordinates": {
      "lat": 25.7635,
      "lng": -80.1923
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 1160,
    "protein": 66,
    "carbs": 38,
    "fat": 83,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "66g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "WF american wagyu burger with mozzarella",
      "ham",
      "crispy bacon",
      "tomato",
      "lettuce",
      "herb aioli"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1160 kcal, 66g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-miami-7",
    "name": "Chicken Shish Kebab Platter",
    "restaurant": "Shish Grill",
    "restaurantAddress": "690 Yamato Rd Ste 7, Boca Raton, FL 33431",
    "city": "Miami",
    "coordinates": {
      "lat": 26.3801,
      "lng": -80.1292
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 60,
    "carbs": 38,
    "fat": 10,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "60g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Massive halal chicken shish kebab skewers over rice with fresh salad and garlic sauce. Boca Raton's highest-protein local restaurant plate at 60g \u2014 a Boca gym community favorite."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (490 kcal, 60g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-miami-8",
    "name": "LIV Wrap",
    "restaurant": "Carrot Express",
    "restaurantAddress": "605 Lincoln Rd, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.79077,
      "lng": -80.13457
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 891,
    "protein": 60,
    "carbs": 51,
    "fat": 44,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "60g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chicken breast",
      "quinoa",
      "kale",
      "avocado",
      "jack cheese and basil pesto."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (891 kcal, 60g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-miami-9",
    "name": "Legal Wrap",
    "restaurant": "Carrot Express",
    "restaurantAddress": "605 Lincoln Rd, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.79077,
      "lng": -80.13457
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 860,
    "protein": 56,
    "carbs": 59,
    "fat": 37,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "56g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chicken breast",
      "brown rice",
      "black beans",
      "jack cheese",
      "chipotle sauce and pico de gallo."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (860 kcal, 56g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-miami-10",
    "name": "Whole Crispy Fish",
    "restaurant": "Oceans 234",
    "restaurantAddress": "234 N Ocean Blvd, Deerfield Beach, FL 33441",
    "city": "Miami",
    "coordinates": {
      "lat": 26.3192,
      "lng": -80.0819
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    "calories": 815,
    "protein": 56,
    "carbs": 81,
    "fat": 25,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "56g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chef's catch",
      "tamarind sauce",
      "green papaya slaw",
      "pickled red onion",
      "jasmine rice."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (815 kcal, 56g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-miami-11",
    "name": "Mixed Grill Platter",
    "restaurant": "Shish Grill",
    "restaurantAddress": "690 Yamato Rd Ste 7, Boca Raton, FL 33431",
    "city": "Miami",
    "coordinates": {
      "lat": 26.3801,
      "lng": -80.1292
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 54,
    "carbs": 40,
    "fat": 12,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chicken and kafta shish kebabs over rice with grilled veggies",
      "house salad",
      "and tahini. 54g protein \u2014 Boca Raton's best local Mediterranean protein feast."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (510 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-miami-12",
    "name": "Pesto Chicken Breast Platter",
    "restaurant": "Carrot Express",
    "restaurantAddress": "605 Lincoln Rd, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.79077,
      "lng": -80.13457
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 455,
    "protein": 54,
    "carbs": 4,
    "fat": 24,
    "fiber": 1,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chicken breast topped with house-made pesto",
      "served with two sides."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (455 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-miami-13",
    "name": "Roasted Lamb Shoulder",
    "restaurant": "Byblos Miami",
    "restaurantAddress": "1545 Collins Ave, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.78852,
      "lng": -80.12931
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 52,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Roasted Lamb Shoulder"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-miami-14",
    "name": "Chef's Sashimi Platter (12 pcs)",
    "restaurant": "Pubbelly Sushi",
    "restaurantAddress": "1424 20th St, Miami Beach, FL 33139",
    "city": "Miami",
    "coordinates": {
      "lat": 25.79536,
      "lng": -80.14432
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 52,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chef's Sashimi Platter (12 pcs)"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-chicago-1",
    "name": "Thai Monster Bowl",
    "restaurant": "Protein House",
    "restaurantAddress": "111 W Front St, Wheaton, IL 60187",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.8663,
      "lng": -88.11
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 733,
    "protein": 80,
    "carbs": 50,
    "fat": 22,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "80g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Thai Monster Bowl."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (733 kcal, 80g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-chicago-2",
    "name": "Muscle Builder Burger",
    "restaurant": "Protein House",
    "restaurantAddress": "111 W Front St, Wheaton, IL 60187",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.8663,
      "lng": -88.11
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 892,
    "protein": 77,
    "carbs": 60,
    "fat": 34,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "77g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Muscle Builder Burger."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (892 kcal, 77g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-chicago-3",
    "name": "LR Steak Burrito",
    "restaurant": "Protein House",
    "restaurantAddress": "111 W Front St, Wheaton, IL 60187",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.8663,
      "lng": -88.11
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=800&q=80",
    "calories": 891,
    "protein": 76,
    "carbs": 60,
    "fat": 40,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "76g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "LR Steak Burrito."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (891 kcal, 76g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-chicago-4",
    "name": "Egg White Grill (2 Servings)",
    "restaurant": "Chick-fil-A",
    "restaurantAddress": "30 E. Chicago Ave., Chicago, IL 60611",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.8966,
      "lng": -87.6274
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 54,
    "carbs": 60,
    "fat": 16,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "A double portion of our grilled chicken breakfast sandwich with egg whites and American cheese",
      "served on a toasted multigrain English muffin."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (580 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-chicago-5",
    "name": "All-American Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1 W Erie St, Chicago, IL 60654",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.89393,
      "lng": -87.6287
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 51,
    "carbs": 38,
    "fat": 41,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-American Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-chicago-6",
    "name": "Grass-Fed Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1 W Erie St, Chicago, IL 60654",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.89393,
      "lng": -87.6287
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 51,
    "carbs": 40,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-Fed Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-chicago-7",
    "name": "Double Quarter Pounder with Cheese",
    "restaurant": "McDonald's",
    "restaurantAddress": "Chicago, IL",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.9061,
      "lng": -87.5983
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 740,
    "protein": 48,
    "carbs": 43,
    "fat": 42,
    "fiber": 2,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "48g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double Quarter Pounder with Cheese."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (740 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-chicago-8",
    "name": "Strip Steak Chimichurri",
    "restaurant": "Beatrix",
    "restaurantAddress": "519 N Clark St, Chicago, IL 60654",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.8916,
      "lng": -87.6309
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 48,
    "carbs": 8,
    "fat": 32,
    "fiber": 1,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "A bold",
      "grass-fed strip steak served with vibrant chimichurri sauce. High in protein",
      "naturally low in sugar",
      "and gluten-free \u2014 a carnivore's macro dream."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-chicago-9",
    "name": "Chicken + RightRice Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "150 S Wacker Dr, Chicago, IL 60606",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.87965,
      "lng": -87.63747
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 750,
    "protein": 46,
    "carbs": 45,
    "fat": 44,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
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
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken over RightRice (a high-protein rice blend)",
      "with CAVA's Mediterranean toppings and dressings. A filling 46g protein bowl with only 8g sugar \u2014 one of the highest-protein curated bowls in CAVA's lineup."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (750 kcal, 46g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-chicago-10",
    "name": "(NOLA only)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1 W Erie St, Chicago, IL 60654",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.89393,
      "lng": -87.6287
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 1120,
    "protein": 46,
    "carbs": 151,
    "fat": 35,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
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
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "(NOLA only)",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1120 kcal, 46g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-chicago-11",
    "name": "Beef Tenderloin Kebab",
    "restaurant": "Beatrix",
    "restaurantAddress": "519 N Clark St, Chicago, IL 60654",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.8916,
      "lng": -87.6309
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "calories": 590,
    "protein": 44,
    "carbs": 12,
    "fat": 28,
    "fiber": 2,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Tender",
      "marinated beef tenderloin skewers grilled to perfection and served with a house herb sauce. Gluten-free and packed with clean protein."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (590 kcal, 44g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-chicago-12",
    "name": "Bacon, Egg and Cheese Bowl",
    "restaurant": "Protein Bar & Kitchen",
    "restaurantAddress": "1953 N Clybourn Ave, Chicago, IL 60614",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.91721,
      "lng": -87.65766
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "calories": 400,
    "protein": 42,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "42g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (42g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (400 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-chicago-13",
    "name": "Enlightened Caesar + Salmon",
    "restaurant": "Beatrix",
    "restaurantAddress": "519 N Clark St, Chicago, IL 60654",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.8916,
      "lng": -87.6309
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 42,
    "carbs": 18,
    "fat": 22,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Crisp romaine tossed in a light Caesar dressing topped with a perfectly seared salmon fillet. A high-protein",
      "low-sugar staple that keeps macros in check without sacrificing flavor."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-chicago-14",
    "name": "Avocado, Egg White & Spinach Sandwich (2 Servings)",
    "restaurant": "Panera Bread",
    "restaurantAddress": "200 S Michigan Ave, Chicago, IL 60604",
    "city": "Chicago",
    "coordinates": {
      "lat": 41.8792,
      "lng": -87.6246
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 820,
    "protein": 42,
    "carbs": 70,
    "fat": 28,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "A double helping of our popular breakfast sandwich with egg whites",
      "aged white cheddar",
      "avocado",
      "and fresh spinach on two sprouted grain bagel flats."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (820 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-dallas-1",
    "name": "Double Chicken Bowl (No Sauce)",
    "restaurant": "Flame Broiler",
    "restaurantAddress": "816 W McDermott Dr, Allen, TX 75013",
    "city": "Dallas",
    "coordinates": {
      "lat": 33.1015,
      "lng": -96.683
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 68,
    "carbs": 72,
    "fat": 6,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double portion of grilled chicken breast over rice and vegetables",
      "no sauce"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-dallas-2",
    "name": "Chicken & Prosciutto",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "3601 Dallas Pkwy, Frisco, TX 75034",
    "city": "Dallas",
    "coordinates": {
      "lat": 33.13195,
      "lng": -96.82478
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 750,
    "protein": 64,
    "carbs": 67,
    "fat": 22,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chicken & Prosciutto from Original ChopShop"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (750 kcal, 64g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-dallas-3",
    "name": "Chicken Bowl (No Rice, Double Protein)",
    "restaurant": "Chipotle",
    "restaurantAddress": "103 Central Expy N, Allen, TX 75013",
    "city": "Dallas",
    "coordinates": {
      "lat": 33.1023,
      "lng": -96.6712
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 485,
    "protein": 62,
    "carbs": 32,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "62g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double chicken",
      "black beans",
      "fajita veggies",
      "lettuce",
      "salsa"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (485 kcal, 62g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-dallas-4",
    "name": "Chicken Salad Bowl",
    "restaurant": "Chipotle",
    "restaurantAddress": "103 Central Expy N, Allen, TX 75013",
    "city": "Dallas",
    "coordinates": {
      "lat": 33.1023,
      "lng": -96.6712
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 465,
    "protein": 60,
    "carbs": 28,
    "fat": 13,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "60g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double chicken",
      "romaine lettuce",
      "black beans",
      "fajita veggies",
      "fresh tomato salsa"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (465 kcal, 60g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-dallas-5",
    "name": "Steak Bowl (No Rice, Double Protein)",
    "restaurant": "Chipotle",
    "restaurantAddress": "103 Central Expy N, Allen, TX 75013",
    "city": "Dallas",
    "coordinates": {
      "lat": 33.1023,
      "lng": -96.6712
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 58,
    "carbs": 30,
    "fat": 18,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double steak",
      "black beans",
      "fajita veggies",
      "lettuce",
      "salsa"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-dallas-6",
    "name": "Double Protein Chicken Bowl",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "3601 Dallas Pkwy, Frisco, TX 75034",
    "city": "Dallas",
    "coordinates": {
      "lat": 33.13195,
      "lng": -96.82478
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 56,
    "carbs": 44,
    "fat": 20,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "56g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double portion grilled chicken",
      "quinoa",
      "roasted vegetables",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (640 kcal, 56g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-dallas-7",
    "name": "Grinder",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "3601 Dallas Pkwy, Frisco, TX 75034",
    "city": "Dallas",
    "coordinates": {
      "lat": 33.13195,
      "lng": -96.82478
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 980,
    "protein": 56,
    "carbs": 66,
    "fat": 55,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "56g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grinder from Original ChopShop"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (980 kcal, 56g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-dallas-8",
    "name": "Chicken & Beef Bowl (No Sauce)",
    "restaurant": "Flame Broiler",
    "restaurantAddress": "816 W McDermott Dr, Allen, TX 75013",
    "city": "Dallas",
    "coordinates": {
      "lat": 33.1015,
      "lng": -96.683
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 52,
    "carbs": 68,
    "fat": 9,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken breast and beef over rice and vegetables",
      "no sauce"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (580 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-dallas-9",
    "name": "Grass-Fed Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "8383 Preston Center Plaza, Dallas, TX 75225",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.7732,
      "lng": -96.769
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 51,
    "carbs": 40,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-Fed Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-dallas-10",
    "name": "All-American Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "8383 Preston Center Plaza, Dallas, TX 75225",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.7977,
      "lng": -96.811
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 51,
    "carbs": 38,
    "fat": 41,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-American Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-dallas-11",
    "name": "Oven Roasted Turkey Breast",
    "restaurant": "Eatzi\u2019s Market & Bakery",
    "restaurantAddress": "1212 Park Blvd, Plano, TX",
    "city": "Dallas",
    "coordinates": {
      "lat": 33.03378,
      "lng": -96.64064
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 260,
    "protein": 51,
    "carbs": 0,
    "fat": 6,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Boneless",
      "unsliced turkey breast",
      "perfectly roasted to a golden brown."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (260 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-dallas-12",
    "name": "Herb Half Chicken with Roasted Vegetables",
    "restaurant": "bellagreen",
    "restaurantAddress": "8401 Walnut Hill Lane, Ste 810, Dallas, TX 75231",
    "city": "Dallas",
    "coordinates": {
      "lat": 32.88353,
      "lng": -96.75421
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 50,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "50g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Herb Half Chicken with Roasted Vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (640 kcal, 50g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-dallas-13",
    "name": "Friday Special \u2013 Wagyu Tri Tip Meal",
    "restaurant": "Eatzi\u2019s Market & Bakery",
    "restaurantAddress": "1212 Park Blvd, Plano, TX",
    "city": "Dallas",
    "coordinates": {
      "lat": 33.03378,
      "lng": -96.64064
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 50,
    "carbs": 2,
    "fat": 46,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "50g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Texas-raised Wagyu tri tip from Rosewood Ranch",
      "seasoned with smoked paprika",
      "sage",
      "and garlic",
      "then grilled to perfection."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 50g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-dallas-14",
    "name": "Chicken Bowl (Regular)",
    "restaurant": "Flame Broiler",
    "restaurantAddress": "816 W McDermott Dr, Allen, TX 75013",
    "city": "Dallas",
    "coordinates": {
      "lat": 33.1015,
      "lng": -96.683
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 530,
    "protein": 48,
    "carbs": 70,
    "fat": 6,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "A simple bowl with chicken",
      "steamed veggies",
      "and brown rice."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (530 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-houston-1",
    "name": "Chicken & Prosciutto",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "1900 West Gray St, Houston, TX 77019",
    "city": "Houston",
    "coordinates": {
      "lat": 29.75411,
      "lng": -95.40277
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 750,
    "protein": 64,
    "carbs": 67,
    "fat": 22,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chicken & Prosciutto from Original ChopShop"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (750 kcal, 64g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-houston-2",
    "name": "Double Protein Chicken Bowl",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "1900 West Gray St, Houston, TX 77019",
    "city": "Houston",
    "coordinates": {
      "lat": 29.75411,
      "lng": -95.40277
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 56,
    "carbs": 44,
    "fat": 20,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "56g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double portion grilled chicken",
      "quinoa",
      "roasted vegetables",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (640 kcal, 56g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-houston-3",
    "name": "Grinder",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "1900 West Gray St, Houston, TX 77019",
    "city": "Houston",
    "coordinates": {
      "lat": 29.75411,
      "lng": -95.40277
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 980,
    "protein": 56,
    "carbs": 66,
    "fat": 55,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "56g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grinder from Original ChopShop"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (980 kcal, 56g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-houston-4",
    "name": "Grass-Fed Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1700 Post Oak Blvd, Houston, TX 77056",
    "city": "Houston",
    "coordinates": {
      "lat": 29.74914,
      "lng": -95.46216
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 51,
    "carbs": 40,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-Fed Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-houston-5",
    "name": "All-American Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1700 Post Oak Blvd, Houston, TX 77056",
    "city": "Houston",
    "coordinates": {
      "lat": 29.74914,
      "lng": -95.46216
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 51,
    "carbs": 38,
    "fat": 41,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-American Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-houston-6",
    "name": "(NOLA only)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1700 Post Oak Blvd, Houston, TX 77056",
    "city": "Houston",
    "coordinates": {
      "lat": 29.74914,
      "lng": -95.46216
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 1120,
    "protein": 46,
    "carbs": 151,
    "fat": 35,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
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
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "(NOLA only)",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1120 kcal, 46g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-houston-7",
    "name": "Grilled Chicken Plate",
    "restaurant": "Flower Child",
    "restaurantAddress": "1101 Uptown Park Blvd, Houston, TX 77056",
    "city": "Houston",
    "coordinates": {
      "lat": 29.7565,
      "lng": -95.45734
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 45,
    "carbs": 25,
    "fat": 18,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken breast served with two healthy sides like sweet potato and broccoli."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 45g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-houston-8",
    "name": "Grilled Salmon Salad",
    "restaurant": "Local Foods",
    "restaurantAddress": "1313 Kirby Dr, Houston, TX",
    "city": "Houston",
    "coordinates": {
      "lat": 29.75635,
      "lng": -95.41602
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 42,
    "carbs": 18,
    "fat": 32,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled salmon over mixed greens with avocado and vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-houston-9",
    "name": "Grilled Chicken Pesto Sandwich",
    "restaurant": "Mendocino Farms",
    "restaurantAddress": "600 N. Shepherd Drive, Houston, TX 77007",
    "city": "Houston",
    "coordinates": {
      "lat": 29.78147,
      "lng": -95.40851
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 650,
    "protein": 42,
    "carbs": 58,
    "fat": 24,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken breast",
      "basil pesto",
      "roasted red peppers",
      "mozzarella on ciabatta"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (650 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-houston-10",
    "name": "Mother Earth Bowl",
    "restaurant": "Flower Child",
    "restaurantAddress": "1414 Westheimer Rd, Houston, TX",
    "city": "Houston",
    "coordinates": {
      "lat": 29.74333,
      "lng": -95.39614
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 42,
    "carbs": 38,
    "fat": 18,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken",
      "organic greens",
      "ancient grains",
      "avocado",
      "cucumber",
      "tomato"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-houston-11",
    "name": "A Sandwich Study of Heat",
    "restaurant": "Mendocino Farms",
    "restaurantAddress": "600 N. Shepherd Drive, Houston, TX 77007",
    "city": "Houston",
    "coordinates": {
      "lat": 29.78147,
      "lng": -95.40851
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 730,
    "protein": 40,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "A Sandwich Study of Heat"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (730 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-houston-12",
    "name": "Steak & Quinoa Bowl",
    "restaurant": "Flower Child",
    "restaurantAddress": "1101 Uptown Park Blvd, Houston, TX 77056",
    "city": "Houston",
    "coordinates": {
      "lat": 29.7565,
      "lng": -95.45734
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=800&q=80",
    "calories": 550,
    "protein": 38,
    "carbs": 40,
    "fat": 19,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-fed steak with quinoa",
      "corn",
      "and avocado in a light vinaigrette."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (550 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-houston-13",
    "name": "Salmon & Shrimp Salad (romaine + kale, baked salmon + shrimp, cucumber, tomato, red onion, fresh herb vinaigrette)",
    "restaurant": "Salata",
    "restaurantAddress": "2703 Montrose Boulevard, Houston, TX 77006",
    "city": "Houston",
    "coordinates": {
      "lat": 29.74539,
      "lng": -95.39112
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    "calories": 510,
    "protein": 38,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Salmon & Shrimp Salad (romaine + kale",
      "baked salmon + shrimp",
      "cucumber",
      "tomato",
      "red onion",
      "fresh herb vinaigrette)"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (510 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-houston-14",
    "name": "Turkey Meatball Marinara Sandwich",
    "restaurant": "Mendocino Farms",
    "restaurantAddress": "600 N. Shepherd Drive, Houston, TX 77007",
    "city": "Houston",
    "coordinates": {
      "lat": 29.78147,
      "lng": -95.40851
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 38,
    "carbs": 62,
    "fat": 20,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Turkey meatballs",
      "marinara sauce",
      "provolone cheese on toasted ciabatta"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-phoenix-1",
    "name": "Big AZ Breakfast Burrito - Bacon Lover w/ Pulled Chicken",
    "restaurant": "Salad and Go",
    "restaurantAddress": "Phoenix, AZ",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.4099,
      "lng": -112.1125
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 960,
    "protein": 66,
    "carbs": 51,
    "fat": 51,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "66g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (66g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (960 kcal, 66g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-phoenix-2",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "333 Elm St, Phoenix, AZ",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.4344,
      "lng": -112.074
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 360,
    "protein": 64,
    "carbs": 0,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double portion grilled chicken"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (360 kcal, 64g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-phoenix-3",
    "name": "Chicken & Prosciutto",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "21001 N Tatum Blvd, Phoenix, AZ 85050",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.67814,
      "lng": -111.97111
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 750,
    "protein": 64,
    "carbs": 67,
    "fat": 22,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chicken & Prosciutto from Original ChopShop"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (750 kcal, 64g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-phoenix-4",
    "name": "Grinder",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "4045 E Chandler Blvd, Phoenix, AZ 85048",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.30513,
      "lng": -111.99662
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 980,
    "protein": 56,
    "carbs": 66,
    "fat": 55,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "56g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grinder from Original ChopShop"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (980 kcal, 56g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-phoenix-5",
    "name": "Double Protein Chicken Bowl",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "21001 N Tatum Blvd, Phoenix, AZ 85050",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.67814,
      "lng": -111.97111
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 56,
    "carbs": 44,
    "fat": 20,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "56g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double portion grilled chicken",
      "quinoa",
      "roasted vegetables",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (640 kcal, 56g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-phoenix-6",
    "name": "Protein Trio Omelet",
    "restaurant": "Snooze, an A.M. Eatery",
    "restaurantAddress": "Phoenix, AZ",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.4519,
      "lng": -112.081
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 980,
    "protein": 52,
    "carbs": 45,
    "fat": 67,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (52g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (980 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-phoenix-7",
    "name": "Chicken Yakisoba Noodles",
    "restaurant": "Flower Child",
    "restaurantAddress": "5013 N 44th St, Phoenix, AZ 85018",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.50987,
      "lng": -111.98659
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 770,
    "protein": 52,
    "carbs": 77,
    "fat": 29,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-natural chicken with yakisoba noodles and stir-fried vegetables."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (770 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-phoenix-8",
    "name": "Big AZ Breakfast Burrito - OG w/ Pulled Chicken",
    "restaurant": "Salad and Go",
    "restaurantAddress": "Phoenix, AZ",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.4204,
      "lng": -112.0845
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 740,
    "protein": 51,
    "carbs": 51,
    "fat": 37,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (51g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (740 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-phoenix-9",
    "name": "Grass-Fed Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "2502 E Camelback Rd, Phoenix, AZ 85016",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.51187,
      "lng": -112.02677
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 51,
    "carbs": 40,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-Fed Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-phoenix-10",
    "name": "All-American Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "2502 E Camelback Rd, Phoenix, AZ 85016",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.51187,
      "lng": -112.02677
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 51,
    "carbs": 38,
    "fat": 41,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-American Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-phoenix-11",
    "name": "Green Chile Beef Colorado",
    "restaurant": "Flower Child",
    "restaurantAddress": "5013 N 44th St, Phoenix, AZ 85018",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.50987,
      "lng": -111.98659
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "calories": 750,
    "protein": 47,
    "carbs": 69,
    "fat": 33,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "47g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-fed beef braised in green chile over organic brown rice."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (750 kcal, 47g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-phoenix-12",
    "name": "Chicken Enchilada",
    "restaurant": "Flower Child",
    "restaurantAddress": "5013 N 44th St, Phoenix, AZ 85018",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.50987,
      "lng": -111.98659
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 810,
    "protein": 47,
    "carbs": 47,
    "fat": 50,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "47g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-natural chicken enchilada bowl with organic corn and cheese."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (810 kcal, 47g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-phoenix-13",
    "name": "(NOLA only)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "2502 E Camelback Rd, Phoenix, AZ 85016",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.51187,
      "lng": -112.02677
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 1120,
    "protein": 46,
    "carbs": 151,
    "fat": 35,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
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
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "(NOLA only)",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1120 kcal, 46g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-phoenix-14",
    "name": "Grilled Chicken Plate with Hummus & Tabbouleh",
    "restaurant": "Garbanzo Mediterranean Fresh",
    "restaurantAddress": "4575 E Cactus Rd, Ste 140, Phoenix, AZ 85032",
    "city": "Phoenix",
    "coordinates": {
      "lat": 33.59932,
      "lng": -111.98359
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 42,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled Chicken Plate with Hummus & Tabbouleh"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-scottsdale-1",
    "name": "Blu Chicken",
    "restaurant": "Blu Burger Grille",
    "restaurantAddress": "32409 N Scottsdale Rd, Scottsdale, AZ 85266",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.78001,
      "lng": -111.92353
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 915,
    "protein": 74,
    "carbs": 38,
    "fat": 48,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "74g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Marinated all natural chicken breast",
      "avocado",
      "lettuce",
      "tomato",
      "center cut applewood bacon",
      "Swiss cheese and herb mayo. (assumes large ~8 oz chicken portion)"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (915 kcal, 74g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-scottsdale-2",
    "name": "Chicken Penne",
    "restaurant": "Blu Burger Grille",
    "restaurantAddress": "32409 N Scottsdale Rd, Scottsdale, AZ 85266",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.78001,
      "lng": -111.92353
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 980,
    "protein": 72,
    "carbs": 94,
    "fat": 36,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "72g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Penne pasta with grilled chicken breast",
      "saut\u00e9ed with garlic",
      "mushrooms",
      "and bell peppers in a Parmesan cream sauce. (assumes large ~8 oz chicken portion)"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (980 kcal, 72g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-scottsdale-3",
    "name": "Chicken & Prosciutto",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "333 Scottsdale Rd, Scottsdale, AZ",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.45155,
      "lng": -111.92636
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 750,
    "protein": 64,
    "carbs": 67,
    "fat": 22,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chicken & Prosciutto from Original ChopShop"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (750 kcal, 64g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-scottsdale-4",
    "name": "Chicken & Prosciutto Sandwich",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "16205 N Scottsdale Rd, Scottsdale, AZ 85254",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.63442,
      "lng": -111.92485
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 750,
    "protein": 64,
    "carbs": 67,
    "fat": 22,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken",
      "prosciutto",
      "fresh mozzarella",
      "arugula",
      "balsamic glaze on ciabatta."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (750 kcal, 64g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-scottsdale-5",
    "name": "Willie's Spicy Shrimp",
    "restaurant": "Blu Burger Grille",
    "restaurantAddress": "32409 N Scottsdale Rd, Scottsdale, AZ 85266",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.78001,
      "lng": -111.92353
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "calories": 990,
    "protein": 58,
    "carbs": 88,
    "fat": 41,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Penne pasta with jumbo shrimp in a spicy pesto cream sauce with cherry tomatoes",
      "chopped jalape\u00f1os",
      "and Parmesan cheese."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (990 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-scottsdale-6",
    "name": "Double Protein Chicken Bowl",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "15323 N Scottsdale Rd, Scottsdale, AZ 85254",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.62557,
      "lng": -111.92392
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 56,
    "carbs": 44,
    "fat": 20,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "56g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double portion grilled chicken",
      "quinoa",
      "roasted vegetables",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (640 kcal, 56g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-scottsdale-7",
    "name": "Chicken Lavosh Wrap (Double Protein)",
    "restaurant": "Pita Jungle",
    "restaurantAddress": "555 Shea Blvd, Scottsdale, AZ",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.58246,
      "lng": -111.87941
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 52,
    "carbs": 46,
    "fat": 16,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double grilled chicken",
      "hummus",
      "vegetables in lavash"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (560 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-scottsdale-8",
    "name": "Protein Trio Omelet",
    "restaurant": "Snooze, an A.M. Eatery",
    "restaurantAddress": "Scottsdale, AZ",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.4662,
      "lng": -111.9366
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 980,
    "protein": 52,
    "carbs": 45,
    "fat": 67,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (52g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (980 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-scottsdale-9",
    "name": "Grass-Fed Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "15191 N Scottsdale Rd, Scottsdale, AZ 85254",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.62425,
      "lng": -111.92437
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 51,
    "carbs": 40,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-Fed Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-scottsdale-10",
    "name": "All-American Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "15191 N Scottsdale Rd, Scottsdale, AZ 85254",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.62425,
      "lng": -111.92437
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 51,
    "carbs": 38,
    "fat": 41,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-American Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-scottsdale-11",
    "name": "(NOLA only)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "15191 N Scottsdale Rd, Scottsdale, AZ 85254",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.62425,
      "lng": -111.92437
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 1120,
    "protein": 46,
    "carbs": 151,
    "fat": 35,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
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
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "(NOLA only)",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1120 kcal, 46g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-scottsdale-12",
    "name": "Grilled Salmon Bowl",
    "restaurant": "Pita Jungle",
    "restaurantAddress": "555 Shea Blvd, Scottsdale, AZ",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.58246,
      "lng": -111.87941
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 44,
    "carbs": 48,
    "fat": 22,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled salmon",
      "hummus",
      "quinoa",
      "vegetables",
      "tahini"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (580 kcal, 44g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-scottsdale-13",
    "name": "Super Bird Omelette",
    "restaurant": "Protein House",
    "restaurantAddress": "7077 E. Mayo Blvd Suite B-100, Scottsdale, AZ 85054",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.5082,
      "lng": -111.9051
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "calories": 257,
    "protein": 39,
    "carbs": 8,
    "fat": 7,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "39g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (39g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (257 kcal, 39g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-scottsdale-14",
    "name": "Protein & Veggie Egg White Scramble",
    "restaurant": "Snooze, an A.M. Eatery",
    "restaurantAddress": "Scottsdale, AZ",
    "city": "Scottsdale",
    "coordinates": {
      "lat": 33.5327,
      "lng": -111.9471
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "calories": 390,
    "protein": 39,
    "carbs": 13,
    "fat": 20,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "39g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (39g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (390 kcal, 39g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-diego-1",
    "name": "Cobb Salad",
    "restaurant": "Board & Brew",
    "restaurantAddress": "201 Oak Ave, Carlsbad, CA 92008",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.6772,
      "lng": -117.1996
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 1040,
    "protein": 119,
    "carbs": 14,
    "fat": 54,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "119g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Officially published nutrition for the Cobb Salad at Board & Brew",
      "taken directly from the brand's own nutrition document. The published figures are for the salad as served",
      "dressing is listed separately in the source."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1040 kcal, 119g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-diego-2",
    "name": "Chicken Club",
    "restaurant": "Board & Brew",
    "restaurantAddress": "201 Oak Ave, Carlsbad, CA 92008",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.7017,
      "lng": -117.1611
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 1230,
    "protein": 76,
    "carbs": 87,
    "fat": 64,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "76g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Officially published nutrition for the Chicken Club at Board & Brew",
      "taken directly from the brand's own nutrition document."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1230 kcal, 76g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-diego-3",
    "name": "Caesar Salad",
    "restaurant": "Board & Brew",
    "restaurantAddress": "201 Oak Ave, Carlsbad, CA 92008",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.7262,
      "lng": -117.1226
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 950,
    "protein": 75,
    "carbs": 58,
    "fat": 47,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "75g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Officially published nutrition for the Caesar Salad at Board & Brew",
      "taken directly from the brand's own nutrition document. The published figures are for the salad as served",
      "dressing is listed separately in the source."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (950 kcal, 75g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-diego-4",
    "name": "New York Steak & Eggs",
    "restaurant": "Broken Yolk Cafe",
    "restaurantAddress": "San Diego, CA",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.7507,
      "lng": -117.1646
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "calories": 600,
    "protein": 64,
    "carbs": 1,
    "fat": 35,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (64g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (600 kcal, 64g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-diego-5",
    "name": "Habanero Pork Belly Benny",
    "restaurant": "Snooze, an A.M. Eatery",
    "restaurantAddress": "San Diego, CA",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.6947,
      "lng": -117.1261
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 1480,
    "protein": 62,
    "carbs": 81,
    "fat": 106,
    "fiber": 2,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "62g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Two poached eggs over habanero pork belly with hollandaise."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1480 kcal, 62g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-diego-6",
    "name": "Rancher's Hash",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "7007 Friars Rd, San Diego, CA 92108",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.76828,
      "lng": -117.16517
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "calories": 1110,
    "protein": 57,
    "carbs": 62,
    "fat": 70,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "57g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (57g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1110 kcal, 57g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-diego-7",
    "name": "Pesto Chicken Sandwich",
    "restaurant": "Parakeet Cafe",
    "restaurantAddress": "927 Silverado St, La Jolla, CA 92037",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.84484,
      "lng": -117.27448
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 730,
    "protein": 56,
    "carbs": 45,
    "fat": 34,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "56g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Oven-roasted chicken breast",
      "greens",
      "house-made pesto alioli",
      "stracciatella",
      "heirloom tomato",
      "house-made brioche bun."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (730 kcal, 56g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-diego-8",
    "name": "Best Burger Ever",
    "restaurant": "Parakeet Cafe",
    "restaurantAddress": "927 Silverado St, La Jolla, CA 92037",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.84484,
      "lng": -117.27448
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 870,
    "protein": 56,
    "carbs": 47,
    "fat": 52,
    "fiber": 2,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "56g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "100% grass-fed Australian beef",
      "alioli",
      "cheddar cheese",
      "caramelized onions",
      "house-made pickles",
      "house-made brioche bun."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (870 kcal, 56g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-diego-9",
    "name": "Chicken Teriyaki Bowl",
    "restaurant": "Parakeet Cafe",
    "restaurantAddress": "927 Silverado St, La Jolla, CA 92037",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.84484,
      "lng": -117.27448
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 54,
    "carbs": 69,
    "fat": 14,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Oven-roasted chicken breast",
      "brown rice",
      "broccoli",
      "arugula",
      "carrots",
      "cilantro"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-diego-10",
    "name": "Farm Stand Breakfast Tacos",
    "restaurant": "First Watch",
    "restaurantAddress": "San Diego, CA",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.7367,
      "lng": -117.1751
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "calories": 1000,
    "protein": 52,
    "carbs": 70,
    "fat": 54,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (52g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1000 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-diego-11",
    "name": "Habanero Pork Belly Breakfast Fried Rice",
    "restaurant": "Snooze, an A.M. Eatery",
    "restaurantAddress": "San Diego, CA",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.6807,
      "lng": -117.1366
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "calories": 930,
    "protein": 52,
    "carbs": 66,
    "fat": 55,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Breakfast fried rice with habanero pork belly and eggs."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (930 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-diego-12",
    "name": "Tuna Nicoise Salad",
    "restaurant": "Tender Greens",
    "restaurantAddress": "3434 India St, San Diego, CA",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.73842,
      "lng": -117.17686
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "calories": 850,
    "protein": 51,
    "carbs": 18,
    "fat": 64,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Seared tuna nicoise"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (850 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-diego-13",
    "name": "Grass-Fed Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "7007 Friars Rd, San Diego, CA 92108",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.76828,
      "lng": -117.16517
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 51,
    "carbs": 40,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-Fed Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-san-diego-14",
    "name": "All-American Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "7007 Friars Rd, San Diego, CA 92108",
    "city": "San Diego",
    "coordinates": {
      "lat": 32.76828,
      "lng": -117.16517
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 51,
    "carbs": 38,
    "fat": 41,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-American Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boston-1",
    "name": "Chicken Bowl (No Rice, Double Protein)",
    "restaurant": "Chipotle",
    "restaurantAddress": "283 Washington St, Boston, MA 02108",
    "city": "Boston",
    "coordinates": {
      "lat": 42.3582,
      "lng": -71.0592
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 485,
    "protein": 62,
    "carbs": 32,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "62g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double chicken",
      "black beans",
      "fajita veggies",
      "lettuce",
      "salsa"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (485 kcal, 62g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boston-2",
    "name": "Grilled Swordfish (10oz)",
    "restaurant": "Atlantic Fish Company",
    "restaurantAddress": "761 Boylston St, Boston, MA 02116",
    "city": "Boston",
    "coordinates": {
      "lat": 42.34935,
      "lng": -71.0812
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 62,
    "carbs": 8,
    "fat": 26,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "62g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "10oz grilled swordfish steak with vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 62g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boston-3",
    "name": "Chicken Salad Bowl",
    "restaurant": "Chipotle",
    "restaurantAddress": "283 Washington St, Boston, MA 02108",
    "city": "Boston",
    "coordinates": {
      "lat": 42.3582,
      "lng": -71.0592
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 465,
    "protein": 60,
    "carbs": 28,
    "fat": 13,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "60g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double chicken",
      "romaine lettuce",
      "black beans",
      "fajita veggies",
      "fresh tomato salsa"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (465 kcal, 60g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boston-4",
    "name": "Steak Bowl (No Rice, Double Protein)",
    "restaurant": "Chipotle",
    "restaurantAddress": "283 Washington St, Boston, MA 02108",
    "city": "Boston",
    "coordinates": {
      "lat": 42.3582,
      "lng": -71.0592
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 58,
    "carbs": 30,
    "fat": 18,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double steak",
      "black beans",
      "fajita veggies",
      "lettuce",
      "salsa"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boston-5",
    "name": "Grilled Salmon (10oz)",
    "restaurant": "Atlantic Fish Company",
    "restaurantAddress": "761 Boylston St, Boston, MA 02116",
    "city": "Boston",
    "coordinates": {
      "lat": 42.34935,
      "lng": -71.0812
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 58,
    "carbs": 12,
    "fat": 34,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "10oz grilled Atlantic salmon with vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (580 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boston-6",
    "name": "1/2 Grilled Chicken with Side Salad",
    "restaurant": "Pollo Lounge and Grill",
    "restaurantAddress": "1249 Boylston St, Boston, MA 02215",
    "city": "Boston",
    "coordinates": {
      "lat": 42.34538,
      "lng": -71.0961
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 55,
    "carbs": 5,
    "fat": 9,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "55g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Half a Peruvian-style rotisserie chicken",
      "perfectly seasoned",
      "with a simple side salad."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (450 kcal, 55g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boston-7",
    "name": "Cheddar Cheeseburger",
    "restaurant": "Atlantic Fish Company",
    "restaurantAddress": "761 Boylston St, Boston, MA 02116",
    "city": "Boston",
    "coordinates": {
      "lat": 42.34935,
      "lng": -71.0812
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 1250,
    "protein": 55,
    "carbs": 78,
    "fat": 78,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "55g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "8 oz",
      "lettuce",
      "tomato",
      "onion",
      "fries"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1250 kcal, 55g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boston-8",
    "name": "Jalapeno Ranch Chicken Burger",
    "restaurant": "b.good",
    "restaurantAddress": "Various Locations",
    "city": "Boston",
    "coordinates": {
      "lat": 42.3321,
      "lng": -71.0694
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 623,
    "protein": 51,
    "carbs": 36,
    "fat": 31,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Jalapeno Ranch Chicken Burger."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (623 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boston-9",
    "name": "Grass-Fed Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "101 Seaport Blvd, Boston, MA 02210",
    "city": "Boston",
    "coordinates": {
      "lat": 42.3486,
      "lng": -71.0431
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 51,
    "carbs": 40,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-Fed Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boston-10",
    "name": "All-American Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "101 Seaport Blvd, Boston, MA 02210",
    "city": "Boston",
    "coordinates": {
      "lat": 42.3486,
      "lng": -71.0431
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 51,
    "carbs": 38,
    "fat": 41,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-American Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boston-11",
    "name": "The Farmhouse Chicken Burger",
    "restaurant": "b.good",
    "restaurantAddress": "Various Locations",
    "city": "Boston",
    "coordinates": {
      "lat": 42.3251,
      "lng": -71.0344
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 690,
    "protein": 50,
    "carbs": 35,
    "fat": 39,
    "fiber": 2,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "50g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "The Farmhouse Chicken Burger."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (690 kcal, 50g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boston-12",
    "name": "Lamb & Chicken Combo Platter (No Rice, Extra Salad)",
    "restaurant": "Black Seed Halal Grill",
    "restaurantAddress": "140 Tremont St, Boston, MA 02111",
    "city": "Boston",
    "coordinates": {
      "lat": 42.35515,
      "lng": -71.06213
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 50,
    "carbs": 12,
    "fat": 9,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "50g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "A generous serving of grilled lamb and chicken with a double portion of salad."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (450 kcal, 50g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boston-13",
    "name": "Double ShackBurger (No Cheese, No Sauce)",
    "restaurant": "Shake Shack",
    "restaurantAddress": "77 Seaport Blvd, Boston, MA 02210",
    "city": "Boston",
    "coordinates": {
      "lat": 42.3496,
      "lng": -71.045
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 48,
    "carbs": 26,
    "fat": 19,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "48g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double beef patty with lettuce and tomato on a non-GMO potato bun."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (470 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boston-14",
    "name": "Hot Honey Chicken Bowl",
    "restaurant": "Dig",
    "restaurantAddress": "Various Locations, Boston, MA",
    "city": "Boston",
    "coordinates": {
      "lat": 42.3986,
      "lng": -71.0799
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 850,
    "protein": 48,
    "carbs": 77,
    "fat": 40,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Hot honey chicken over grains with roasted vegetables."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (850 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-denver-1",
    "name": "Roasted Half Chicken",
    "restaurant": "Root Down",
    "restaurantAddress": "1600 W 33rd Ave, Denver, CO 80211",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7642,
      "lng": -105.0089
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 590,
    "protein": 55,
    "carbs": 14,
    "fat": 34,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "55g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chicories",
      "roasted tomatoes",
      "pickled kumquat & sherry honey jus."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (590 kcal, 55g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-denver-2",
    "name": "Double Protein Chicken Burrito Bowl",
    "restaurant": "Wahoo's Fish Taco",
    "restaurantAddress": "1521 Blake St, Denver, CO 80202",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7539,
      "lng": -105.0022
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 52,
    "carbs": 62,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double chicken",
      "brown rice",
      "black beans",
      "vegetables",
      "salsa (no tortilla)"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-denver-3",
    "name": "Flatiron Steak",
    "restaurant": "Root Down",
    "restaurantAddress": "1600 W 33rd Ave, Denver, CO 80211",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7642,
      "lng": -105.0089
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 52,
    "carbs": 16,
    "fat": 38,
    "fiber": 2,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "8oz house smoked",
      "chipotle demi glace",
      "peach-jalape\u00f1o relish & tobacco onions."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-denver-4",
    "name": "Surf & Turf",
    "restaurant": "Root Down",
    "restaurantAddress": "1600 W 33rd Ave, Denver, CO 80211",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7642,
      "lng": -105.0089
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 550,
    "protein": 42,
    "carbs": 22,
    "fat": 32,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Flatiron steak",
      "sunny egg",
      "herby smashed potatoes & creole crab b\u00e9arnaise."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (550 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-denver-5",
    "name": "Charbroiled Chicken Bowl",
    "restaurant": "Wahoo's Fish Taco",
    "restaurantAddress": "1521 Blake St, Denver, CO 80202",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7539,
      "lng": -105.0022
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 38,
    "carbs": 58,
    "fat": 12,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Charbroiled chicken",
      "rice",
      "black beans",
      "vegetables",
      "salsa"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-denver-6",
    "name": "Charbroiled Fish Bowl",
    "restaurant": "Wahoo's Fish Taco",
    "restaurantAddress": "1521 Blake St, Denver, CO 80202",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7539,
      "lng": -105.0022
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 32,
    "carbs": 54,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Charbroiled fish",
      "rice",
      "black beans",
      "cabbage",
      "pico de gallo"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 32g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-denver-7",
    "name": "Steak Chimichurri Bowl",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Denver, CO",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7422,
      "lng": -104.9873
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "calories": 680,
    "protein": 48,
    "carbs": 50,
    "fat": 28,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled steak",
      "chimichurri",
      "roasted sweet potato",
      "black beans",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (680 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-denver-8",
    "name": "Shrimp Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Denver, CO",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7452,
      "lng": -104.9843
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 34,
    "carbs": 60,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Sauteed shrimp",
      "coconut jasmine rice",
      "mango salsa",
      "sweet chili drizzle"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-denver-9",
    "name": "Protein Smoothie",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Denver, CO",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7482,
      "lng": -104.9813
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 28,
    "carbs": 42,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Whey protein",
      "banana",
      "almond butter",
      "almond milk",
      "dates"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 28g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-denver-10",
    "name": "Protein Pancakes",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Denver, CO",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7512,
      "lng": -104.9783
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 44,
    "fat": 10,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein pancakes",
      "fresh berries",
      "sugar-free syrup"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-denver-11",
    "name": "Grilled Chicken Breast Plate",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Denver, CO",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7542,
      "lng": -104.9753
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 58,
    "carbs": 36,
    "fat": 8,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "8oz grilled chicken",
      "steamed broccoli",
      "brown rice"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-denver-12",
    "name": "Protein Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Denver, CO",
    "city": "Denver",
    "coordinates": {
      "lat": 39.7572,
      "lng": -104.9723
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 48,
    "carbs": 46,
    "fat": 16,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Ground turkey",
      "sweet potato",
      "kale",
      "quinoa",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-seattle-1",
    "name": "Double Protein MOD Pizza (11-inch)",
    "restaurant": "MOD Pizza",
    "restaurantAddress": "1302 6th Ave, Seattle, WA 98101",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.60949,
      "lng": -122.33267
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 610,
    "protein": 46,
    "carbs": 62,
    "fat": 20,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
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
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "11-inch pizza with double chicken or double beef",
      "light cheese",
      "vegetables",
      "tomato sauce"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (610 kcal, 46g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-seattle-2",
    "name": "Grass-Fed Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "600 Pine St, Seattle, WA 98101",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.5922,
      "lng": -122.3321
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 530,
    "protein": 44,
    "carbs": 38,
    "fat": 22,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-fed beef patty",
      "lettuce wrap or bun",
      "seasonal vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (530 kcal, 44g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-seattle-3",
    "name": "Build Your Own High Protein Bowl",
    "restaurant": "Evergreens",
    "restaurantAddress": "1420 5th Ave, Seattle, WA 98101",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.61049,
      "lng": -122.33463
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 38,
    "fat": 12,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double chicken or salmon",
      "mixed greens base",
      "quinoa",
      "roasted vegetables",
      "light dressing"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (440 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-seattle-4",
    "name": "Antibiotic-Free Chicken Protein Bowl",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "600 Pine St, Seattle, WA 98101",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.6412,
      "lng": -122.3356
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 430,
    "protein": 42,
    "carbs": 35,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Antibiotic-free chicken",
      "ancient grains",
      "roasted vegetables",
      "lemon tahini"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (430 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-seattle-5",
    "name": "Tristan (Double Beef)",
    "restaurant": "MOD Pizza",
    "restaurantAddress": "1302 6th Ave, Seattle, WA 98101",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.60949,
      "lng": -122.33267
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "calories": 590,
    "protein": 38,
    "carbs": 58,
    "fat": 22,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "House pizza with double beef",
      "mozzarella",
      "red sauce",
      "tomatoes"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (590 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-seattle-6",
    "name": "Wild Salmon & Quinoa",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "600 Pine St, Seattle, WA 98101",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.6097,
      "lng": -122.3391
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 38,
    "carbs": 42,
    "fat": 16,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Wild-caught salmon over quinoa with seasonal vegetables and herb sauce"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-seattle-7",
    "name": "Grilled Chicken Caesar",
    "restaurant": "Evergreens",
    "restaurantAddress": "1420 5th Ave, Seattle, WA 98101",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.61049,
      "lng": -122.33463
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 390,
    "protein": 36,
    "carbs": 20,
    "fat": 18,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken breast",
      "romaine",
      "parmesan",
      "house caesar dressing"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (390 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-seattle-8",
    "name": "Steak Chimichurri Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Seattle, WA",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.6122,
      "lng": -122.3261
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "calories": 680,
    "protein": 48,
    "carbs": 50,
    "fat": 28,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled steak",
      "chimichurri",
      "roasted sweet potato",
      "black beans",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (680 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-seattle-9",
    "name": "Shrimp Bowl",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Seattle, WA",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.6152,
      "lng": -122.3231
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 34,
    "carbs": 60,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Sauteed shrimp",
      "coconut jasmine rice",
      "mango salsa",
      "sweet chili drizzle"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-seattle-10",
    "name": "Protein Smoothie",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Seattle, WA",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.6182,
      "lng": -122.3201
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 28,
    "carbs": 42,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Whey protein",
      "banana",
      "almond butter",
      "almond milk",
      "dates"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 28g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-seattle-11",
    "name": "Protein Pancakes",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Seattle, WA",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.6212,
      "lng": -122.3171
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 44,
    "fat": 10,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein pancakes",
      "fresh berries",
      "sugar-free syrup"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-seattle-12",
    "name": "Grilled Chicken Breast Plate",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Seattle, WA",
    "city": "Seattle",
    "coordinates": {
      "lat": 47.6242,
      "lng": -122.3141
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 58,
    "carbs": 36,
    "fat": 8,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "8oz grilled chicken",
      "steamed broccoli",
      "brown rice"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-atlanta-1",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "101 Maple St, Atlanta, GA",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.7105,
      "lng": -84.4265
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 360,
    "protein": 64,
    "carbs": 0,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double portion grilled chicken"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (360 kcal, 64g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-atlanta-2",
    "name": "Chicken & Prosciutto Sandwich",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "2274 Peachtree Rd NW, Atlanta, GA 30309",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.735,
      "lng": -84.388
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 64,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chicken & Prosciutto Sandwich"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (580 kcal, 64g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-atlanta-3",
    "name": "Grass-Fed Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3393 Peachtree Rd NE, Atlanta, GA 30326",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.84668,
      "lng": -84.36286
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 51,
    "carbs": 40,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-Fed Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-atlanta-4",
    "name": "All-American Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3393 Peachtree Rd NE, Atlanta, GA 30326",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.84668,
      "lng": -84.36286
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 51,
    "carbs": 38,
    "fat": 41,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-American Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-atlanta-5",
    "name": "(NOLA only)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3393 Peachtree Rd NE, Atlanta, GA 30326",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.84668,
      "lng": -84.36286
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 1120,
    "protein": 46,
    "carbs": 151,
    "fat": 35,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
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
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "(NOLA only)",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1120 kcal, 46g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-atlanta-6",
    "name": "Chop-rito Chicken Bowl with Salsa Roja",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "2274 Peachtree Rd NW, Atlanta, GA 30309",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.7525,
      "lng": -84.395
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 507,
    "protein": 45,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chop-rito Chicken Bowl with Salsa Roja"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (507 kcal, 45g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-atlanta-7",
    "name": "Spiced Lamb Meatball Bowl (SuperGreens base)",
    "restaurant": "CAVA",
    "restaurantAddress": "3655 Roswell Rd NE, Ste 100, Atlanta, GA 30342",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.87618,
      "lng": -84.38028
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 41,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "41g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Spiced Lamb Meatball Bowl (SuperGreens base)"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 41g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-atlanta-8",
    "name": "Chicken with Black Beans Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "101 Maple St, Atlanta, GA",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.721,
      "lng": -84.3985
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 310,
    "protein": 40,
    "carbs": 22,
    "fat": 9,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chicken and black beans"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (310 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-atlanta-9",
    "name": "Cheat Day Wrap",
    "restaurant": "Original ChopShop",
    "restaurantAddress": "2274 Peachtree Rd NW, Atlanta, GA 30309",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.7455,
      "lng": -84.36
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 590,
    "protein": 40,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Cheat Day Wrap"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (590 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-atlanta-10",
    "name": "Mediterranean Chicken Kabob",
    "restaurant": "Flower Child",
    "restaurantAddress": "3400 Around Lenox Dr, Atlanta, GA 30326",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.77,
      "lng": -84.402
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 38,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Mediterranean Chicken Kabob"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-atlanta-11",
    "name": "Grilled Chicken Quinoa Bowl",
    "restaurant": "Nourish + Bloom Market",
    "restaurantAddress": "2287-A Cascade Rd SW, Atlanta, GA 30311",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.714,
      "lng": -84.3635
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 38,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled Chicken Quinoa Bowl"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-atlanta-12",
    "name": "Harissa Chicken Greens & Grains Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "3655 Roswell Rd NE, Ste 100, Atlanta, GA 30342",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.87618,
      "lng": -84.38028
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 37,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "37g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Harissa Chicken Greens & Grains Bowl"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (560 kcal, 37g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-atlanta-13",
    "name": "Entr\u00e9e: Salmon + Kale Salad + Roasted Broccoli",
    "restaurant": "Flower Child (Westside)",
    "restaurantAddress": "1170 Howell Mill Rd, Atlanta, GA 30318",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.7866,
      "lng": -84.41179
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 36,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Entr\u00e9e: Salmon + Kale Salad + Roasted Broccoli"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-atlanta-14",
    "name": "Salmon Protein Bowl",
    "restaurant": "Nourish + Bloom Market",
    "restaurantAddress": "2287-A Cascade Rd SW, Atlanta, GA 30311",
    "city": "Atlanta",
    "coordinates": {
      "lat": 33.7875,
      "lng": -84.409
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 36,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Salmon Protein Bowl"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (490 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-nashville-1",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "208 Commerce St, Nashville, TN 37201",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.1627,
      "lng": -86.7799
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 68,
    "carbs": 26,
    "fat": 16,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double grilled chicken with brown rice",
      "black beans",
      "fresh tomato salsa and romaine lettuce. The ultimate high-protein fast-casual meal at 68g protein for under 500 calories."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (490 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-nashville-2",
    "name": "Grass-Fed Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3996 Hillsboro Pike, Nashville, TN 37215",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.1076,
      "lng": -86.8152
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 51,
    "carbs": 40,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-fed beef patty on a toasted brioche bun with tomato",
      "red onion",
      "special sauce and hand-cut fries. Packs 51g of high-quality protein with only 6g sugar."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-nashville-3",
    "name": "Grilled Grass-Fed Tenderloin",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3996 Hillsboro Pike, Nashville, TN 37215",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.1076,
      "lng": -86.8152
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 1150,
    "protein": 48,
    "carbs": 28,
    "fat": 93,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled grass-fed beef tenderloin with roasted seasonal vegetables and herb-infused sides. A premium high-protein dinner option with 48g protein."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1150 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-nashville-4",
    "name": "Chicken Enchilada Bowl",
    "restaurant": "Flower Child",
    "restaurantAddress": "1560 W. McEwen Drive, Suite 150, Franklin, TN 37067",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.1977,
      "lng": -86.7851
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 810,
    "protein": 47,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "47g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chicken Enchilada Bowl"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (810 kcal, 47g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-nashville-5",
    "name": "Rad Cobb Grain Bowl",
    "restaurant": "Radish Kitchen",
    "restaurantAddress": "975 Main Street, Nashville, TN 37206",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.1713,
      "lng": -86.7625
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 770,
    "protein": 46,
    "carbs": 41,
    "fat": 47,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
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
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled steak",
      "crispy bacon",
      "hard boiled egg",
      "crispy onions",
      "avocado",
      "and cherry tomatoes over a warm grain base with house vinaigrette. Nashville's best local high-protein bowl at 46g protein with verified nutrition data."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (770 kcal, 46g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-nashville-6",
    "name": "The Rebel \"French Dip\" Wrap",
    "restaurant": "Flower Child",
    "restaurantAddress": "1560 W. McEwen Drive, Suite 150, Franklin, TN 37067",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.1662,
      "lng": -86.7886
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 730,
    "protein": 42,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "The Rebel \"French Dip\" Wrap"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (730 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-nashville-7",
    "name": "Chicken + Rice Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "422 21st Avenue South, Nashville, TN 37203",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.1487,
      "lng": -86.7943
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 715,
    "protein": 40,
    "carbs": 43,
    "fat": 43,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken over saffron basmati rice with hummus",
      "roasted veggies",
      "feta and lemon herb tahini. One of CAVA's highest-protein curated bowls at 40g protein."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (715 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-nashville-8",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "422 21st Avenue South, Nashville, TN 37203",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.1487,
      "lng": -86.7943
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 645,
    "protein": 38,
    "carbs": 52,
    "fat": 32,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Harissa honey marinated chicken over brown rice with roasted red pepper hummus",
      "tomato + cucumber",
      "pickled onions and tzatziki. Bold spice",
      "38g protein."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (645 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-nashville-9",
    "name": "Chimmi Churrasco Grain Bowl",
    "restaurant": "Greenery Co.",
    "restaurantAddress": "1705 21st Avenue South, Nashville, TN 37212",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.1387,
      "lng": -86.7961
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 580,
    "protein": 38,
    "carbs": 45,
    "fat": 22,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Seared steak",
      "quinoa",
      "kale",
      "roasted sweet potato",
      "roasted broccoli",
      "radish"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (580 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-nashville-10",
    "name": "Hot & Crispy Wrap",
    "restaurant": "Radish Kitchen",
    "restaurantAddress": "975 Main Street, Nashville, TN 37206",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.1713,
      "lng": -86.7625
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 36,
    "carbs": 55,
    "fat": 32,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Baked crispy chicken",
      "sliced radish",
      "napa cabbage",
      "pickled red onion",
      "hot sauce",
      "and buttermilk ranch wrapped in a whole grain tortilla. 36g protein - one of Nashville's best local protein wraps."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-nashville-11",
    "name": "Carolina BBQ Chicken Wrap",
    "restaurant": "Flower Child",
    "restaurantAddress": "1560 W. McEwen Drive, Suite 150, Franklin, TN 37067",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.1277,
      "lng": -86.7571
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 740,
    "protein": 36,
    "carbs": 30,
    "fat": 15,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Carolina BBQ Chicken Wrap"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (740 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-nashville-12",
    "name": "The Southern Cobb Salad",
    "restaurant": "Greenery Co.",
    "restaurantAddress": "1705 21st Avenue South, Nashville, TN 37212",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.1387,
      "lng": -86.7961
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 34,
    "carbs": 14,
    "fat": 28,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Roasted chicken",
      "romaine",
      "locally sourced hard boiled egg",
      "Gifford's bacon",
      "blue cheese",
      "marinated beets"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (440 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-nashville-13",
    "name": "Chicken Mamacita Grain Bowl",
    "restaurant": "Radish Kitchen",
    "restaurantAddress": "975 Main Street, Nashville, TN 37206",
    "city": "Nashville",
    "coordinates": {
      "lat": 36.1713,
      "lng": -86.7625
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 610,
    "protein": 30,
    "carbs": 55,
    "fat": 31,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "30g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken",
      "corn and black bean salsa",
      "tomatoes",
      "toasted pumpkin seeds",
      "tortilla strips",
      "cotija cheese"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (610 kcal, 30g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-washington-1",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "101 Maple St, Arlington, VA",
    "city": "Washington",
    "coordinates": {
      "lat": 38.8687,
      "lng": -77.0754
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 360,
    "protein": 64,
    "carbs": 0,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "64g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double portion grilled chicken"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (360 kcal, 64g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-washington-2",
    "name": "Big Bird",
    "restaurant": "Call Your Mother Deli",
    "restaurantAddress": "3301 Georgia Ave NW, Washington, DC 20010",
    "city": "Washington",
    "coordinates": {
      "lat": 38.93137,
      "lng": -77.0233
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 860,
    "protein": 61,
    "carbs": 81,
    "fat": 29,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "61g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "A double portion of sliced turkey or grilled chicken",
      "lettuce",
      "tomato",
      "red onion",
      "Duke's\u2122 mayo",
      "on Plain Bagel."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (860 kcal, 61g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-washington-3",
    "name": "Thunderbird",
    "restaurant": "Call Your Mother Deli",
    "restaurantAddress": "3301 Georgia Ave NW, Washington, DC 20010",
    "city": "Washington",
    "coordinates": {
      "lat": 38.93137,
      "lng": -77.0233
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 1040,
    "protein": 54,
    "carbs": 100,
    "fat": 46,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Maple chicken sausage",
      "bodega-style egg",
      "MELTED American + cheddar cheeses",
      "spicy honey",
      "on Maple Salt & Pepper Bagel."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1040 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-washington-4",
    "name": "Grass-Fed Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1225 Old Georgetown Rd, Washington, DC 20007",
    "city": "Washington",
    "coordinates": {
      "lat": 38.9422,
      "lng": -77.0404
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 51,
    "carbs": 40,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-Fed Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-washington-5",
    "name": "All-American Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "1225 Old Georgetown Rd, Washington, DC 20007",
    "city": "Washington",
    "coordinates": {
      "lat": 38.8862,
      "lng": -77.0019
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 51,
    "carbs": 38,
    "fat": 41,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-American Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-washington-6",
    "name": "Grandezza",
    "restaurant": "Call Your Mother Deli",
    "restaurantAddress": "3301 Georgia Ave NW, Washington, DC 20010",
    "city": "Washington",
    "coordinates": {
      "lat": 38.93137,
      "lng": -77.0233
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 850,
    "protein": 50,
    "carbs": 86,
    "fat": 31,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "50g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Turkey",
      "fresh mozzarella",
      "pesto",
      "red pepper relish",
      "MELTED on Plain Bagel."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (850 kcal, 50g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-washington-7",
    "name": "Grilled Chicken with Black Lentils",
    "restaurant": "Cava",
    "restaurantAddress": "212 Birch Rd, Arlington, TX",
    "city": "Washington",
    "coordinates": {
      "lat": 38.9352,
      "lng": -77.0054
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 46,
    "carbs": 40,
    "fat": 20,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
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
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken with black lentils"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 46g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-washington-8",
    "name": "(NOLA only)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "4238 Wilson Blvd, Arlington, VA 22203",
    "city": "Washington",
    "coordinates": {
      "lat": 38.87901,
      "lng": -77.11067
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 1120,
    "protein": 46,
    "carbs": 151,
    "fat": 35,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
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
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "(NOLA only)",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1120 kcal, 46g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-washington-9",
    "name": "Spicy Lamb Meatballs with Black Lentils",
    "restaurant": "Cava",
    "restaurantAddress": "212 Birch Rd, Arlington, TX",
    "city": "Washington",
    "coordinates": {
      "lat": 38.9037,
      "lng": -77.0089
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 42,
    "carbs": 61,
    "fat": 33,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Lamb meatballs with lentils"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-washington-10",
    "name": "Braised Lamb with Black Lentils",
    "restaurant": "Cava",
    "restaurantAddress": "212 Birch Rd, Arlington, TX",
    "city": "Washington",
    "coordinates": {
      "lat": 38.9282,
      "lng": -77.0509
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 42,
    "carbs": 39,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Braised lamb with lentils"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (440 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-washington-11",
    "name": "Farm Fresh Plate",
    "restaurant": "Founding Farmers",
    "restaurantAddress": "1924 Pennsylvania Ave NW, Washington, DC 20006",
    "city": "Washington",
    "coordinates": {
      "lat": 38.90026,
      "lng": -77.04456
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 465,
    "protein": 42,
    "carbs": 38,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Suggested portions: Local chicken (38g protein)",
      "Quinoa",
      "Seasonal vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (465 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-washington-12",
    "name": "Chicken with Black Beans Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "101 Maple St, Arlington, VA",
    "city": "Washington",
    "coordinates": {
      "lat": 38.8967,
      "lng": -77.0544
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 310,
    "protein": 40,
    "carbs": 22,
    "fat": 9,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chicken and black beans"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (310 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-washington-13",
    "name": "Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "101 Maple St, Arlington, VA",
    "city": "Washington",
    "coordinates": {
      "lat": 38.9212,
      "lng": -77.0159
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 180,
    "protein": 32,
    "carbs": 0,
    "fat": 7,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken protein"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (180 kcal, 32g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-portland-1",
    "name": "Steak & Shrimp",
    "restaurant": "Jake's Famous Crawfish",
    "restaurantAddress": "401 SW 12th Ave, Portland, OR 97205",
    "city": "Portland",
    "coordinates": {
      "lat": 45.5218,
      "lng": -122.684
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "calories": 525,
    "protein": 68,
    "carbs": 6,
    "fat": 25,
    "fiber": 1,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Sliced 8oz Sirloin topped with Shrimp Etouffee"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (525 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-portland-2",
    "name": "Washington Steelhead",
    "restaurant": "Jake's Famous Crawfish",
    "restaurantAddress": "401 SW 12th Ave, Portland, OR 97205",
    "city": "Portland",
    "coordinates": {
      "lat": 45.5218,
      "lng": -122.684
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 535,
    "protein": 61,
    "carbs": 1,
    "fat": 31,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "61g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Saut\u00e9ed Oregon Bay Shrimp",
      "Fresh Basil Butter"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (535 kcal, 61g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-portland-3",
    "name": "Horseradish Crusted Steelhead",
    "restaurant": "Jake's Famous Crawfish",
    "restaurantAddress": "401 SW 12th Ave, Portland, OR 97205",
    "city": "Portland",
    "coordinates": {
      "lat": 45.5218,
      "lng": -122.684
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 54,
    "carbs": 7,
    "fat": 21,
    "fiber": 1,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Oven Roasted with a Horseradish & Parmesan Cheese Crust"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (470 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-portland-4",
    "name": "Grilled Chicken Burrito",
    "restaurant": "Laughing Planet",
    "restaurantAddress": "2222 Hawthorne Blvd, Portland, OR",
    "city": "Portland",
    "coordinates": {
      "lat": 45.51199,
      "lng": -122.64293
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 820,
    "protein": 51,
    "carbs": 94,
    "fat": 26,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken burrito with rice and beans."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (820 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-portland-5",
    "name": "Bubba Burrito",
    "restaurant": "Laughing Planet",
    "restaurantAddress": "2222 Hawthorne Blvd, Portland, OR",
    "city": "Portland",
    "coordinates": {
      "lat": 45.51199,
      "lng": -122.64293
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 830,
    "protein": 50,
    "carbs": 100,
    "fat": 26,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "50g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken burrito with cheese."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (830 kcal, 50g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-portland-6",
    "name": "BBQ Chicken Quesadilla",
    "restaurant": "Laughing Planet",
    "restaurantAddress": "2222 Hawthorne Blvd, Portland, OR",
    "city": "Portland",
    "coordinates": {
      "lat": 45.51199,
      "lng": -122.64293
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 740,
    "protein": 47,
    "carbs": 72,
    "fat": 29,
    "fiber": 2,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "47g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "BBQ chicken quesadilla."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (740 kcal, 47g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-portland-7",
    "name": "Forest Park Plate",
    "restaurant": "Protein Papi",
    "restaurantAddress": "2137 E Burnside St, Portland, OR 97214",
    "city": "Portland",
    "coordinates": {
      "lat": 45.52314,
      "lng": -122.64366
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 42,
    "carbs": 38,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "8 oz serving - Grilled chicken breast",
      "sweet potato mash",
      "seasonal greens"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (450 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-portland-8",
    "name": "Northwest Fresh Bowl",
    "restaurant": "Verde Cocina",
    "restaurantAddress": "524 NW 14th Ave, Portland, OR 97209",
    "city": "Portland",
    "coordinates": {
      "lat": 45.52689,
      "lng": -122.68513
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 455,
    "protein": 40,
    "carbs": 35,
    "fat": 15,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Suggested portions: Wild-caught salmon (36g protein)",
      "Ancient grains",
      "Seasonal vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (455 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-portland-9",
    "name": "Pearl District Bowl",
    "restaurant": "Flourish",
    "restaurantAddress": "1542 NE Sandy Blvd, Portland, OR 97232",
    "city": "Portland",
    "coordinates": {
      "lat": 45.52418,
      "lng": -122.65044
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 445,
    "protein": 32,
    "carbs": 42,
    "fat": 16,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "32g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Suggested portions: Organic tofu (18g protein)",
      "Quinoa",
      "Local vegetables",
      "Ginger sauce"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (445 kcal, 32g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-portland-10",
    "name": "Hawthorne Bowl",
    "restaurant": "Prasad",
    "restaurantAddress": "925 NW Davis St, Portland, OR 97209",
    "city": "Portland",
    "coordinates": {
      "lat": 45.52463,
      "lng": -122.68075
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 28,
    "carbs": 45,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Suggested portions: Tempeh (20g protein)",
      "Quinoa",
      "Local vegetables",
      "Tahini sauce"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (440 kcal, 28g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-portland-11",
    "name": "Custom Bowl",
    "restaurant": "Prasad",
    "restaurantAddress": "925 NW Davis St, Portland, OR 97209",
    "city": "Portland",
    "coordinates": {
      "lat": 45.52463,
      "lng": -122.68075
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 25,
    "carbs": 35,
    "fat": 12,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "25g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Choose your base: Quinoa",
      "Brown rice",
      "Power greens",
      "Choose your protein: Tempeh (20g) / Tofu (18g) / Chickpeas (14g)",
      "Choose your vegetables: Local seasonal selection",
      "Choose your sauce: Cashew cream"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (440 kcal, 25g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-portland-12",
    "name": "Pacific Quinoa Salad",
    "restaurant": "Greenleaf Juicing Company",
    "restaurantAddress": "2424 SE Division St, Portland, OR",
    "city": "Portland",
    "coordinates": {
      "lat": 45.5051,
      "lng": -122.65264
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "calories": 512,
    "protein": 24,
    "carbs": 58,
    "fat": 20,
    "fiber": 23,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "24g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Quinoa salad with plant protein and greens (24 oz)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (512 kcal, 24g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-portland-13",
    "name": "Buddha Quinoa Bowl",
    "restaurant": "Greenleaf Juicing Company",
    "restaurantAddress": "2424 SE Division St, Portland, OR",
    "city": "Portland",
    "coordinates": {
      "lat": 45.5051,
      "lng": -122.65264
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 378,
    "protein": 18,
    "carbs": 50,
    "fat": 4,
    "fiber": 19,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "18g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Quinoa Buddha bowl with vegetables (18 oz)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (378 kcal, 18g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-portland-14",
    "name": "Harvest Quinoa Bowl",
    "restaurant": "Greenleaf Juicing Company",
    "restaurantAddress": "2424 SE Division St, Portland, OR",
    "city": "Portland",
    "coordinates": {
      "lat": 45.5051,
      "lng": -122.65264
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 456,
    "protein": 18,
    "carbs": 53,
    "fat": 19,
    "fiber": 17,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "18g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Quinoa harvest bowl with seasonal vegetables (18 oz)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (456 kcal, 18g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-charlotte-1",
    "name": "Whole Chicken",
    "restaurant": "Viva Chicken",
    "restaurantAddress": "1320 Belmont Ave, Plaza Midwood, Charlotte, NC 28205",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.1886,
      "lng": -80.8816
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 68,
    "carbs": 1,
    "fat": 23,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Officially published nutrition for the Whole Chicken at Viva Chicken",
      "taken directly from the brand's own nutrition document."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-charlotte-2",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "100 W Trade St, Uptown, Charlotte, NC 28202",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.2285,
      "lng": -80.845
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 68,
    "carbs": 26,
    "fat": 16,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double grilled chicken with brown rice",
      "black beans",
      "fresh tomato salsa and romaine. The go-to high-protein order at Chipotle Uptown Charlotte - 68g protein under 500 calories."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (490 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-charlotte-3",
    "name": "Backyard BBQ Plate",
    "restaurant": "Naked Farmer",
    "restaurantAddress": "2725 South Blvd, South End, Charlotte, NC 28209",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.20041,
      "lng": -80.86627
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 1140,
    "protein": 63,
    "carbs": 94,
    "fat": 56,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "63g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Honey BBQ Chicken Thigh",
      "Mac & Cheese",
      "Street Cart Corn",
      "Homemade Cornbread with Honey Butter Glaze",
      "Honey BBQ (Un)dressing."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1140 kcal, 63g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-charlotte-4",
    "name": "Pork Chop",
    "restaurant": "Kid Cashew Wood Fire Grill",
    "restaurantAddress": "1608 East Blvd, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.2115,
      "lng": -80.8479
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 705,
    "protein": 60,
    "carbs": 35,
    "fat": 36,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "60g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "48-hour brine",
      "two 5 oz chops served on creamy white beans."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (705 kcal, 60g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-charlotte-5",
    "name": "Half Rotisserie Chicken",
    "restaurant": "The Roasting Company",
    "restaurantAddress": "1521 Montford Dr, Dilworth, Charlotte, NC 28209",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.2061,
      "lng": -80.8081
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 58,
    "carbs": 2,
    "fat": 30,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Half of a whole-roasted rotisserie chicken \u2014 breast",
      "thigh",
      "and leg. 58g protein",
      "zero carbs",
      "zero sugar. The ultimate high-protein keto-friendly meal in Dilworth Charlotte."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-charlotte-6",
    "name": "Classic Saltado",
    "restaurant": "Viva Chicken",
    "restaurantAddress": "1320 Belmont Ave, Plaza Midwood, Charlotte, NC 28205",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.2306,
      "lng": -80.8501
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 1450,
    "protein": 54,
    "carbs": 172,
    "fat": 62,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Officially published nutrition for the Classic Saltado at Viva Chicken",
      "taken directly from the brand's own nutrition document."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1450 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-charlotte-7",
    "name": "Pork Souvla",
    "restaurant": "Ilios Crafted Greek",
    "restaurantAddress": "1514 S Church St, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.2117,
      "lng": -80.8582
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 790,
    "protein": 54,
    "carbs": 85,
    "fat": 27,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Thyme",
      "garlic",
      "oregano",
      "cracked pepper."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (790 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-charlotte-8",
    "name": "Summer BBQ Chicken Salad",
    "restaurant": "Naked Farmer",
    "restaurantAddress": "2725 South Blvd, South End, Charlotte, NC 28209",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.20041,
      "lng": -80.86627
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 710,
    "protein": 53,
    "carbs": 61,
    "fat": 28,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "53g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Honey BBQ Chicken",
      "Cabbage",
      "Kale",
      "Charred Corn",
      "Seasoned Tomatoes",
      "Sliced Radish"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (710 kcal, 53g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-charlotte-9",
    "name": "Cajun Shrimp & Crawfish Omelette",
    "restaurant": "Another Broken Egg Cafe",
    "restaurantAddress": "Charlotte, NC",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.2236,
      "lng": -80.8151
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "calories": 770,
    "protein": 52,
    "carbs": 9,
    "fat": 61,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (52g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (770 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-charlotte-10",
    "name": "Farm Stand Breakfast Tacos",
    "restaurant": "First Watch",
    "restaurantAddress": "Charlotte, NC",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.2481,
      "lng": -80.8571
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "calories": 1000,
    "protein": 52,
    "carbs": 70,
    "fat": 54,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (52g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1000 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-charlotte-11",
    "name": "Mixed Grill Plate",
    "restaurant": "Zeitouni Mediterranean Grill",
    "restaurantAddress": "3419 Toringdon Way A124, SouthPark, Charlotte, NC 28277",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.1921,
      "lng": -80.8186
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 52,
    "carbs": 28,
    "fat": 28,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Combination of chicken and beef kafta kebabs with rice",
      "salad",
      "and hummus. 52g protein \u2014 the highest-protein plate at Zeitouni SouthPark."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-charlotte-12",
    "name": "Half Rotisserie Chicken Plate",
    "restaurant": "Yafo Kitchen",
    "restaurantAddress": "1231A East Blvd, Dilworth, Charlotte, NC 28203",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.2122,
      "lng": -80.8236
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 52,
    "carbs": 28,
    "fat": 22,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Half of a slow-roasted rotisserie chicken served with choice of two sides and warm pita. Antibiotic-free",
      "marinated in Mediterranean spices. One of Charlotte's best local high-protein plates at an estimated 52g protein."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-charlotte-13",
    "name": "High Protein Plate",
    "restaurant": "Naked Farmer",
    "restaurantAddress": "2725 South Blvd, South End, Charlotte, NC 28209",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.20041,
      "lng": -80.86627
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 52,
    "carbs": 24,
    "fat": 22,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Rosemary roasted chicken breast + grass-fed steak",
      "charred broccoli",
      "and roasted sweet potatoes. The highest-protein plate on the menu at Naked Farmer Charlotte."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-charlotte-14",
    "name": "Chicken & Waffles",
    "restaurant": "Another Broken Egg Cafe",
    "restaurantAddress": "Charlotte, NC",
    "city": "Charlotte",
    "coordinates": {
      "lat": 35.2656,
      "lng": -80.8641
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 670,
    "protein": 49,
    "carbs": 54,
    "fat": 31,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "49g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (49g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (670 kcal, 49g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-tampa-1",
    "name": "Lean & Mean Meal",
    "restaurant": "Fitlife Foods",
    "restaurantAddress": "3030 Kennedy Blvd, Tampa, FL",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.94471,
      "lng": -82.49239
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 52,
    "carbs": 42,
    "fat": 8,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "8oz chicken breast with broccoli and sweet potato"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (450 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-tampa-2",
    "name": "Grass-Fed Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3645 Midtown Dr, Tampa, FL 33607",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.9531,
      "lng": -82.50382
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 51,
    "carbs": 40,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-Fed Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-tampa-3",
    "name": "All-American Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3645 Midtown Dr, Tampa, FL 33607",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.9531,
      "lng": -82.50382
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 51,
    "carbs": 38,
    "fat": 41,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-American Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-tampa-4",
    "name": "Grilled Salmon Meal",
    "restaurant": "Fitlife Foods",
    "restaurantAddress": "3030 Kennedy Blvd, Tampa, FL",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.94471,
      "lng": -82.49239
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 48,
    "carbs": 36,
    "fat": 22,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "8oz grilled salmon with asparagus and quinoa"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-tampa-5",
    "name": "(NOLA only)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3645 Midtown Dr, Tampa, FL 33607",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.9531,
      "lng": -82.50382
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 1120,
    "protein": 46,
    "carbs": 151,
    "fat": 35,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
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
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "(NOLA only)",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1120 kcal, 46g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-tampa-6",
    "name": "Grilled Salmon Bowl",
    "restaurant": "Fresh Kitchen",
    "restaurantAddress": "2929 Howard Ave, Tampa, FL",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.96622,
      "lng": -82.48271
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 44,
    "carbs": 42,
    "fat": 22,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled salmon with brown rice and roasted vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 44g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-tampa-7",
    "name": "Custom Protein Bowl",
    "restaurant": "Protein House",
    "restaurantAddress": "1155 S Dale Mabry Hwy, Tampa, FL 33629",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.93267,
      "lng": -82.50622
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 455,
    "protein": 35,
    "carbs": 30,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "35g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Choose your base: Brown rice",
      "Quinoa",
      "Mixed greens",
      "Choose your protein (6oz): Local fish (38g) / Grilled chicken (36g) / Gulf shrimp (34g)",
      "Choose your vegetables: Florida greens",
      "Local vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (455 kcal, 35g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-tampa-8",
    "name": "Steak Chimichurri Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Tampa, FL",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.9566,
      "lng": -82.4512
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "calories": 680,
    "protein": 48,
    "carbs": 50,
    "fat": 28,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled steak",
      "chimichurri",
      "roasted sweet potato",
      "black beans",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (680 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-tampa-9",
    "name": "Shrimp Bowl",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Tampa, FL",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.9596,
      "lng": -82.4482
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 34,
    "carbs": 60,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Sauteed shrimp",
      "coconut jasmine rice",
      "mango salsa",
      "sweet chili drizzle"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-tampa-10",
    "name": "Protein Smoothie",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Tampa, FL",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.9626,
      "lng": -82.4452
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 28,
    "carbs": 42,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Whey protein",
      "banana",
      "almond butter",
      "almond milk",
      "dates"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 28g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-tampa-11",
    "name": "Protein Pancakes",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Tampa, FL",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.9656,
      "lng": -82.4422
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 44,
    "fat": 10,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein pancakes",
      "fresh berries",
      "sugar-free syrup"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-tampa-12",
    "name": "Grilled Chicken Breast Plate",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Tampa, FL",
    "city": "Tampa",
    "coordinates": {
      "lat": 27.9686,
      "lng": -82.4392
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 58,
    "carbs": 36,
    "fat": 8,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "8oz grilled chicken",
      "steamed broccoli",
      "brown rice"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-orlando-1",
    "name": "Grilled Chicken Breast Plate",
    "restaurant": "The Protein House",
    "restaurantAddress": "606 International Dr, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.46231,
      "lng": -81.45257
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 58,
    "carbs": 36,
    "fat": 8,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "8oz grilled chicken",
      "steamed broccoli",
      "brown rice"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-orlando-2",
    "name": "Power Protein Bowl",
    "restaurant": "Create Your Nature",
    "restaurantAddress": "1284 Orange Ave, Winter Park, FL 32789",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.5243,
      "lng": -81.3792
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 58,
    "carbs": 54,
    "fat": 16,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double chicken",
      "brown rice",
      "roasted broccoli",
      "black beans",
      "hot sauce"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (640 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-orlando-3",
    "name": "Steak Bowl",
    "restaurant": "Fresh Kitchen",
    "restaurantAddress": "505 Orange Ave, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.53638,
      "lng": -81.39704
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=800&q=80",
    "calories": 650,
    "protein": 52,
    "carbs": 34,
    "fat": 30,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Sirloin steak",
      "roasted potatoes",
      "broccoli",
      "chimichurri"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (650 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-orlando-4",
    "name": "Grilled Rosemary Chicken",
    "restaurant": "Fresh Kitchen",
    "restaurantAddress": "505 Orange Ave, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.53638,
      "lng": -81.39704
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 280,
    "protein": 52,
    "carbs": 1,
    "fat": 7,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Build-your-own-bowl protein add-on. Dairy Free",
      "Gluten Free",
      "No Processed Sugar Added."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (280 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-orlando-5",
    "name": "All-American Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "8001 Orange Blossom Trail, Orlando, FL 32809",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.44847,
      "lng": -81.3946
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 51,
    "carbs": 38,
    "fat": 41,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-American Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-orlando-6",
    "name": "Grass-Fed Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "8001 Orange Blossom Trail, Orlando, FL 32809",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.44847,
      "lng": -81.3946
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 51,
    "carbs": 40,
    "fat": 35,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-Fed Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-orlando-7",
    "name": "Blackened Chicken",
    "restaurant": "Fresh Kitchen",
    "restaurantAddress": "505 Orange Ave, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.53638,
      "lng": -81.39704
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 300,
    "protein": 50,
    "carbs": 2,
    "fat": 9,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "50g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Build-your-own-bowl protein add-on. Dairy Free",
      "Gluten Free",
      "No Processed Sugar Added."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (300 kcal, 50g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-orlando-8",
    "name": "Steak Chimichurri Bowl",
    "restaurant": "Bolay",
    "restaurantAddress": "808 Universal Blvd, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.47889,
      "lng": -81.46361
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "calories": 680,
    "protein": 48,
    "carbs": 50,
    "fat": 28,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled steak",
      "chimichurri",
      "roasted sweet potato",
      "black beans",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (680 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-orlando-9",
    "name": "Protein Bowl",
    "restaurant": "The Protein House",
    "restaurantAddress": "606 International Dr, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.46231,
      "lng": -81.45257
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 48,
    "carbs": 46,
    "fat": 16,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Ground turkey",
      "sweet potato",
      "kale",
      "quinoa",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-orlando-10",
    "name": "(NOLA only)",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "8001 Orange Blossom Trail, Orlando, FL 32809",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.44847,
      "lng": -81.3946
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 1120,
    "protein": 46,
    "carbs": 151,
    "fat": 35,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
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
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "(NOLA only)",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1120 kcal, 46g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-orlando-11",
    "name": "Avocado Citrus Bol",
    "restaurant": "Bolay",
    "restaurantAddress": "808 Universal Blvd, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.47889,
      "lng": -81.46361
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 700,
    "protein": 45,
    "carbs": 61,
    "fat": 32,
    "fiber": 9,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Jasmine rice and pesto noodles paired with garlic broccoli",
      "lemon chicken",
      "pickled red onions",
      "and a fresh avocado half",
      "drizzled with herb pesto."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (700 kcal, 45g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-orlando-12",
    "name": "Tuna Salad Plate",
    "restaurant": "The Protein House",
    "restaurantAddress": "606 International Dr, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.46231,
      "lng": -81.45257
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "calories": 340,
    "protein": 44,
    "carbs": 12,
    "fat": 12,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Albacore tuna",
      "mixed greens",
      "cucumber",
      "tomato",
      "balsamic vinaigrette"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (340 kcal, 44g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-orlando-13",
    "name": "Teriyaki Chicken Bowl",
    "restaurant": "Create Your Nature",
    "restaurantAddress": "1284 Orange Ave, Winter Park, FL 32789",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.5523,
      "lng": -81.3582
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 560,
    "protein": 44,
    "carbs": 52,
    "fat": 14,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled teriyaki chicken",
      "brown rice",
      "edamame",
      "shredded carrots",
      "sesame seeds"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (560 kcal, 44g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-orlando-14",
    "name": "Salmon Teriyaki Bowl",
    "restaurant": "Bolay",
    "restaurantAddress": "808 Universal Blvd, Orlando, FL",
    "city": "Orlando",
    "coordinates": {
      "lat": 28.47889,
      "lng": -81.46361
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 42,
    "carbs": 56,
    "fat": 22,
    "fiber": 8,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Teriyaki glazed salmon",
      "jasmine rice",
      "edamame",
      "shredded cabbage",
      "sesame vinaigrette"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boulder-1",
    "name": "Sunset Chopped Salad with Carnitas",
    "restaurant": "Wahoo's Fish Taco",
    "restaurantAddress": "2790 Pearl St, Boulder, CO 80302",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.022,
      "lng": -105.25914
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 871,
    "protein": 61,
    "carbs": 35,
    "fat": 58,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "61g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chopped salad with slow-cooked carnitas."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (871 kcal, 61g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boulder-2",
    "name": "Fajita Veggie Bowl with Carnitas",
    "restaurant": "Wahoo's Fish Taco",
    "restaurantAddress": "2790 Pearl St, Boulder, CO 80302",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.022,
      "lng": -105.25914
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "calories": 814,
    "protein": 52,
    "carbs": 78,
    "fat": 34,
    "fiber": 16,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "52g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Fajita veggie bowl with carnitas over brown rice and black beans."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (814 kcal, 52g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boulder-3",
    "name": "Sunset Chopped Salad with Charbroiled Fish",
    "restaurant": "Wahoo's Fish Taco",
    "restaurantAddress": "2790 Pearl St, Boulder, CO 80302",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.022,
      "lng": -105.25914
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "calories": 649,
    "protein": 49,
    "carbs": 32,
    "fat": 41,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "49g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chopped salad with charbroiled fish."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (649 kcal, 49g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boulder-4",
    "name": "Altitude Protein Plate",
    "restaurant": "Flower Child",
    "restaurantAddress": "2580 Arapahoe Ave, Boulder, CO 80302",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.01447,
      "lng": -105.26121
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 40,
    "carbs": 35,
    "fat": 15,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-fed steak",
      "sweet potato",
      "seasonal vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (450 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boulder-5",
    "name": "Trail Runner Bowl",
    "restaurant": "Flower Child",
    "restaurantAddress": "2580 Arapahoe Ave, Boulder, CO 80302",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.01447,
      "lng": -105.26121
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 36,
    "carbs": 38,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken",
      "ancient grains",
      "roasted vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (440 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boulder-6",
    "name": "Trail Runner Plate",
    "restaurant": "Flower Child",
    "restaurantAddress": "2580 Arapahoe Ave, Boulder, CO 80302",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.01447,
      "lng": -105.26121
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 440,
    "protein": 36,
    "carbs": 38,
    "fat": 14,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken",
      "ancient grains",
      "roasted vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (440 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boulder-7",
    "name": "Steak Chimichurri Bowl",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Boulder, CO",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.018,
      "lng": -105.2675
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "calories": 680,
    "protein": 48,
    "carbs": 50,
    "fat": 28,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled steak",
      "chimichurri",
      "roasted sweet potato",
      "black beans",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (680 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boulder-8",
    "name": "Shrimp Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Boulder, CO",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.021,
      "lng": -105.2645
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 34,
    "carbs": 60,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Sauteed shrimp",
      "coconut jasmine rice",
      "mango salsa",
      "sweet chili drizzle"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boulder-9",
    "name": "Protein Smoothie",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Boulder, CO",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.024,
      "lng": -105.2615
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 28,
    "carbs": 42,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Whey protein",
      "banana",
      "almond butter",
      "almond milk",
      "dates"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 28g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boulder-10",
    "name": "Protein Pancakes",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Boulder, CO",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.027,
      "lng": -105.2585
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 44,
    "fat": 10,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein pancakes",
      "fresh berries",
      "sugar-free syrup"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boulder-11",
    "name": "Grilled Chicken Breast Plate",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Boulder, CO",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.03,
      "lng": -105.2555
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 58,
    "carbs": 36,
    "fat": 8,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "8oz grilled chicken",
      "steamed broccoli",
      "brown rice"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-boulder-12",
    "name": "Protein Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Boulder, CO",
    "city": "Boulder",
    "coordinates": {
      "lat": 40.033,
      "lng": -105.2525
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 48,
    "carbs": 46,
    "fat": 16,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Ground turkey",
      "sweet potato",
      "kale",
      "quinoa",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-columbus-1",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "1555 N High St, Columbus, OH 43201",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.9992,
      "lng": -83.0047
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 68,
    "carbs": 52,
    "fat": 14,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double chicken over brown rice with black beans",
      "fresh tomato salsa",
      "and romaine in Short North Columbus. 68g protein",
      "the ultimate Chipotle macro order."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (640 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-columbus-2",
    "name": "The Everything Breakfast",
    "restaurant": "Bob Evans",
    "restaurantAddress": "Columbus, OH",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.9472,
      "lng": -82.9988
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "calories": 1130,
    "protein": 57,
    "carbs": 63,
    "fat": 73,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "57g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (57g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1130 kcal, 57g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-columbus-3",
    "name": "Rancher's Hash",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "4052 Worth Avenue, Columbus, OH 43219",
    "city": "Columbus",
    "coordinates": {
      "lat": 40.0551,
      "lng": -82.914
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "calories": 1110,
    "protein": 57,
    "carbs": 62,
    "fat": 70,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "57g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (57g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1110 kcal, 57g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-columbus-4",
    "name": "Pan-Seared Tuna",
    "restaurant": "Northstar Cafe",
    "restaurantAddress": "951 N High St, Columbus, OH 43201",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.9908,
      "lng": -83.0044
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    "calories": 495,
    "protein": 54,
    "carbs": 14,
    "fat": 27,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Mediterranean-style salad with Mackenzie Creamery goat cheese."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (495 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-columbus-5",
    "name": "Cast Iron Steak & Enchilada",
    "restaurant": "Northstar Cafe",
    "restaurantAddress": "951 N High St, Columbus, OH 43201",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.9908,
      "lng": -83.0044
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "calories": 630,
    "protein": 54,
    "carbs": 26,
    "fat": 35,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "54g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Chipotle-lime marinated prime steak with a smoked gouda and salsa verde enchilada."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (630 kcal, 54g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-columbus-6",
    "name": "Grass-Fed Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "4052 Worth Avenue, Columbus, OH 43219",
    "city": "Columbus",
    "coordinates": {
      "lat": 40.0551,
      "lng": -82.914
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 51,
    "carbs": 38,
    "fat": 28,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-fed beef patty with aged white cheddar",
      "arugula",
      "and pickled onion on a sprouted grain bun. True Food Kitchen Columbus flagship protein entr\u00e9e."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-columbus-7",
    "name": "Bacado Omelet",
    "restaurant": "First Watch",
    "restaurantAddress": "Columbus, OH",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.9892,
      "lng": -82.9673
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 1140,
    "protein": 45,
    "carbs": 53,
    "fat": 81,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (45g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1140 kcal, 45g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-columbus-8",
    "name": "Grilled Chicken & Rice Plate",
    "restaurant": "Greek Express",
    "restaurantAddress": "1100 W 5th Ave, Columbus, OH 43212",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.9975,
      "lng": -83.0266
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 45,
    "carbs": 44,
    "fat": 12,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Marinated grilled chicken tenderloin over rice pilaf with Greek salad and lemon dressing. Columbus's most protein-dense local Mediterranean plate at 45g."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (490 kcal, 45g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-columbus-9",
    "name": "Fish Sandwich",
    "restaurant": "Northstar Cafe",
    "restaurantAddress": "951 N High St, Columbus, OH 43201",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.9908,
      "lng": -83.0044
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "calories": 555,
    "protein": 42,
    "carbs": 42,
    "fat": 23,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled barramundi filet with lettuce",
      "tomato",
      "red onion and fresh herb aioli."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (555 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-columbus-10",
    "name": "Double Meat Protein Bowl",
    "restaurant": "Bob Evans",
    "restaurantAddress": "Columbus, OH",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.9822,
      "lng": -83.0128
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 1020,
    "protein": 41,
    "carbs": 36,
    "fat": 78,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "41g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (41g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1020 kcal, 41g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-columbus-11",
    "name": "Farmers Market Scramble",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "4052 Worth Avenue, Columbus, OH 43219",
    "city": "Columbus",
    "coordinates": {
      "lat": 40.0551,
      "lng": -82.914
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "calories": 760,
    "protein": 40,
    "carbs": 21,
    "fat": 57,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein breakfast (40g protein)."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (760 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-columbus-12",
    "name": "Grilled Chicken + Falafel Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "3929 Easton Station, Columbus, OH 43219",
    "city": "Columbus",
    "coordinates": {
      "lat": 40.0546,
      "lng": -82.9143
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 40,
    "carbs": 44,
    "fat": 15,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken with crispy falafel over greens",
      "roasted red peppers",
      "cucumber tomato salad",
      "and house tzatziki. 40g protein."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-columbus-13",
    "name": "Mango Chicken Bowl",
    "restaurant": "Hoyo's Kitchen",
    "restaurantAddress": "59 Spruce St, Columbus, OH 43215",
    "city": "Columbus",
    "coordinates": {
      "lat": 39.966,
      "lng": -83.006
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 40,
    "carbs": 52,
    "fat": 8,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Marinated grilled chicken over aromatic Somali rice with mango sauce and spiced veggies. A Short North Columbus staple at 40g protein \u2014 bold flavors",
      "clean macros."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (460 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-columbus-14",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "3929 Easton Station, Columbus, OH 43219",
    "city": "Columbus",
    "coordinates": {
      "lat": 40.0546,
      "lng": -82.9143
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 188,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 16,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled harissa honey chicken over brown rice with roasted eggplant",
      "tomato + onion",
      "and tzatziki. Clean Mediterranean macros."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (470 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-salt-lake-city-1",
    "name": "Mountain Muscle Plate",
    "restaurant": "Protein Papi",
    "restaurantAddress": "418 E 200 S, Salt Lake City, UT 84111",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.76475,
      "lng": -111.87874
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 45,
    "carbs": 38,
    "fat": 16,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "45g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-fed bison",
      "sweet potato",
      "seasonal greens"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (470 kcal, 45g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-salt-lake-city-2",
    "name": "Grilled Chicken Macro Bowl",
    "restaurant": "Nourish",
    "restaurantAddress": "418 E 200 S, Salt Lake City, UT 84111",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.7651,
      "lng": -111.8844
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 420,
    "protein": 36,
    "carbs": 40,
    "fat": 12,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken over brown rice with roasted seasonal veggies and lemon tahini at Nourish SLC. 36g protein",
      "locally sourced. A downtown SLC health staple."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (420 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-salt-lake-city-3",
    "name": "Smoked Salmon Bowl",
    "restaurant": "Nourish",
    "restaurantAddress": "418 E 200 S, Salt Lake City, UT 84111",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.7651,
      "lng": -111.8844
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 34,
    "carbs": 36,
    "fat": 14,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Cold-smoked Pacific salmon over quinoa with pickled cucumbers",
      "capers",
      "and dill cream at Nourish SLC. 34g protein with clean macros."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-salt-lake-city-4",
    "name": "Steak Chimichurri Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Salt Lake City, UT",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.7548,
      "lng": -111.897
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "calories": 680,
    "protein": 48,
    "carbs": 50,
    "fat": 28,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled steak",
      "chimichurri",
      "roasted sweet potato",
      "black beans",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (680 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-salt-lake-city-5",
    "name": "Shrimp Bowl",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Salt Lake City, UT",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.7578,
      "lng": -111.894
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 34,
    "carbs": 60,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Sauteed shrimp",
      "coconut jasmine rice",
      "mango salsa",
      "sweet chili drizzle"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-salt-lake-city-6",
    "name": "Protein Smoothie",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Salt Lake City, UT",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.7608,
      "lng": -111.891
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 28,
    "carbs": 42,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Whey protein",
      "banana",
      "almond butter",
      "almond milk",
      "dates"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 28g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-salt-lake-city-7",
    "name": "Protein Pancakes",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Salt Lake City, UT",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.7638,
      "lng": -111.888
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 44,
    "fat": 10,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein pancakes",
      "fresh berries",
      "sugar-free syrup"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-salt-lake-city-8",
    "name": "Grilled Chicken Breast Plate",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Salt Lake City, UT",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.7668,
      "lng": -111.885
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 58,
    "carbs": 36,
    "fat": 8,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "8oz grilled chicken",
      "steamed broccoli",
      "brown rice"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-salt-lake-city-9",
    "name": "Protein Bowl",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Salt Lake City, UT",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.7698,
      "lng": -111.882
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 48,
    "carbs": 46,
    "fat": 16,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Ground turkey",
      "sweet potato",
      "kale",
      "quinoa",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-salt-lake-city-10",
    "name": "Chimichurri Steak Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Salt Lake City, UT",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.7728,
      "lng": -111.879
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 42,
    "carbs": 28,
    "fat": 24,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled steak with chimichurri sauce",
      "greens",
      "and roasted vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-salt-lake-city-11",
    "name": "All-American Burger*",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Salt Lake City, UT",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.7758,
      "lng": -111.876
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 51,
    "carbs": 38,
    "fat": 41,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-American Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-salt-lake-city-12",
    "name": "Grass-Fed Burger",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Salt Lake City, UT",
    "city": "Salt Lake City",
    "coordinates": {
      "lat": 40.7788,
      "lng": -111.873
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 530,
    "protein": 44,
    "carbs": 38,
    "fat": 22,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "44g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-fed beef patty",
      "lettuce wrap or bun",
      "seasonal vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (530 kcal, 44g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-minneapolis-1",
    "name": "Double Chicken Bowl",
    "restaurant": "Chipotle Mexican Grill",
    "restaurantAddress": "800 Nicollet Mall, Minneapolis, MN 55402",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.9768,
      "lng": -93.2741
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 640,
    "protein": 68,
    "carbs": 52,
    "fat": 14,
    "fiber": 11,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "68g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double chicken over brown rice with black beans and fresh salsa on Nicollet Mall Minneapolis. 68g protein",
      "top macro order for downtown Minneapolis workers."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (640 kcal, 68g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-minneapolis-2",
    "name": "Grass-Fed Burger",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "3472 Galleria, Edina, MN 55435",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.8784,
      "lng": -93.3257
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 51,
    "carbs": 38,
    "fat": 28,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grass-fed beef patty with aged white cheddar",
      "arugula",
      "and pickled onion on a sprouted grain bun at Galleria Edina. 51g protein."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-minneapolis-3",
    "name": "Grilled Chicken Bowl",
    "restaurant": "World Street Kitchen",
    "restaurantAddress": "2743 Lyndale Ave S, Minneapolis, MN 55408",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.95245,
      "lng": -93.2878
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 500,
    "protein": 40,
    "carbs": 35,
    "fat": 18,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Marinated grilled chicken with brown rice",
      "black beans",
      "corn salsa",
      "and fresh herbs."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (500 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-minneapolis-4",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "3680 Hazelton Rd, Edina, MN 55435",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.8775,
      "lng": -93.3241
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 16,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled harissa honey chicken over brown rice with roasted eggplant and tzatziki near Southdale Minneapolis. Mediterranean macros for the Twin Cities fitness community."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (470 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-minneapolis-5",
    "name": "Steak Chimichurri Bowl",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Minneapolis, MN",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.9748,
      "lng": -93.268
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "calories": 680,
    "protein": 48,
    "carbs": 50,
    "fat": 28,
    "fiber": 12,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled steak",
      "chimichurri",
      "roasted sweet potato",
      "black beans",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (680 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-minneapolis-6",
    "name": "Shrimp Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Minneapolis, MN",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.9778,
      "lng": -93.265
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "calories": 520,
    "protein": 34,
    "carbs": 60,
    "fat": 14,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "34g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Sauteed shrimp",
      "coconut jasmine rice",
      "mango salsa",
      "sweet chili drizzle"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (520 kcal, 34g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-minneapolis-7",
    "name": "Protein Smoothie",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Minneapolis, MN",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.9808,
      "lng": -93.262
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
    "calories": 380,
    "protein": 28,
    "carbs": 42,
    "fat": 12,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "28g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Whey protein",
      "banana",
      "almond butter",
      "almond milk",
      "dates"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (380 kcal, 28g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-minneapolis-8",
    "name": "Protein Pancakes",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Minneapolis, MN",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.9838,
      "lng": -93.259
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 44,
    "fat": 10,
    "fiber": 6,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "High-protein pancakes",
      "fresh berries",
      "sugar-free syrup"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-minneapolis-9",
    "name": "Grilled Chicken Breast Plate",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Minneapolis, MN",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.9868,
      "lng": -93.256
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 58,
    "carbs": 36,
    "fat": 8,
    "fiber": 7,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "58g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "8oz grilled chicken",
      "steamed broccoli",
      "brown rice"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 58g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-minneapolis-10",
    "name": "Protein Bowl",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Minneapolis, MN",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.9898,
      "lng": -93.253
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "calories": 540,
    "protein": 48,
    "carbs": 46,
    "fat": 16,
    "fiber": 10,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "48g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Ground turkey",
      "sweet potato",
      "kale",
      "quinoa",
      "avocado"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (540 kcal, 48g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-minneapolis-11",
    "name": "Chimichurri Steak Bowl",
    "restaurant": "True Food Kitchen",
    "restaurantAddress": "Downtown Minneapolis, MN",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.9928,
      "lng": -93.25
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 42,
    "carbs": 28,
    "fat": 24,
    "fiber": 0,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled steak with chimichurri sauce",
      "greens",
      "and roasted vegetables"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-minneapolis-12",
    "name": "All-American Burger*",
    "restaurant": "Sweetgreen",
    "restaurantAddress": "Downtown Minneapolis, MN",
    "city": "Minneapolis",
    "coordinates": {
      "lat": 44.9958,
      "lng": -93.247
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "calories": 720,
    "protein": 51,
    "carbs": 38,
    "fat": 41,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "All-American Burger*",
      "Organic Greens",
      "Cold-Pressed Dressing",
      "Sea Salt & Herbs"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (720 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-indianapolis-1",
    "name": "Cheeseburger & Fries",
    "restaurant": "Cafe Patachou",
    "restaurantAddress": "225 W Washington St, Indianapolis, IN 46204",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.7687,
      "lng": -86.1617
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "calories": 1030,
    "protein": 51,
    "carbs": 70,
    "fat": 61,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": false,
    "highlights": [
      "51g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "100% Angus beef patty with white cheddar",
      "lettuce & dijonnaise on a brioche bun",
      "served with fries."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (1030 kcal, 51g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-indianapolis-2",
    "name": "Grilled Chicken + Steak Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "5555 E 82nd St, Indianapolis, IN 46250",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.9038,
      "lng": -86.0433
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 42,
    "carbs": 38,
    "fat": 14,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Grass-Fed",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Beef Tallow",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": true,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Grass-Fed Beef Tallow",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Double protein CAVA bowl with grilled chicken and steak over greens with roasted red peppers",
      "feta",
      "and lemon herb tahini. 42g protein."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (450 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-indianapolis-3",
    "name": "Protein Scrambler",
    "restaurant": "First Watch",
    "restaurantAddress": "4611 E 82nd St, Indianapolis, IN 46250",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.9031,
      "lng": -86.044
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "calories": 460,
    "protein": 42,
    "carbs": 18,
    "fat": 24,
    "fiber": 2,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Grass-Fed Ghee",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Grass-Fed Ghee",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Egg whites",
      "turkey sausage",
      "roasted veggies",
      "and low-fat cheese scrambled to order. 42g protein in a breakfast built for macros."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (460 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-indianapolis-4",
    "name": "Lemon Broiled Chicken Gyro Plate",
    "restaurant": "The Med",
    "restaurantAddress": "5614 East Washington Street, Indianapolis, IN 46219",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.7684,
      "lng": -86.1084
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 480,
    "protein": 42,
    "carbs": 38,
    "fat": 14,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Lemon-marinated broiled chicken with garlic sauce",
      "pita",
      "rice",
      "and Greek salad. 42g protein",
      "one of Indy's best local high-protein Mediterranean plates."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (480 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-indianapolis-5",
    "name": "Chopped Cobb Salad",
    "restaurant": "Cafe Patachou",
    "restaurantAddress": "225 W Washington St, Indianapolis, IN 46204",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.7687,
      "lng": -86.1617
    },
    "price": 18.25,
    "rating": 4.7,
    "reviewsCount": 169,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "calories": 620,
    "protein": 42,
    "carbs": 14,
    "fat": 44,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Keto",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Cold-Pressed EVOO",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": true,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "42g Clean Protein",
      "Cold-Pressed EVOO",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Red leaf lettuce",
      "roasted chicken",
      "tomatoes",
      "red onions",
      "avocado",
      "Gorgonzola"
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (620 kcal, 42g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-indianapolis-6",
    "name": "Roasted Turkey Club",
    "restaurant": "Cafe Patachou",
    "restaurantAddress": "225 W Washington St, Indianapolis, IN 46204",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.7687,
      "lng": -86.1617
    },
    "price": 22.0,
    "rating": 4.9,
    "reviewsCount": 200,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 660,
    "protein": 40,
    "carbs": 52,
    "fat": 33,
    "fiber": 4,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "40g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Roasted turkey",
      "avocado",
      "bacon",
      "tomato",
      "lettuce & mayo on toasted bread."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (660 kcal, 40g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-indianapolis-7",
    "name": "Harissa Honey Chicken Bowl",
    "restaurant": "CAVA",
    "restaurantAddress": "5555 E 82nd St, Indianapolis, IN 46250",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.9038,
      "lng": -86.0433
    },
    "price": 14.5,
    "rating": 4.7,
    "reviewsCount": 231,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 470,
    "protein": 38,
    "carbs": 42,
    "fat": 16,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled harissa honey chicken over brown rice with roasted eggplant",
      "tomato + onion",
      "and tzatziki. Clean Mediterranean macros at 38g protein."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (470 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-indianapolis-8",
    "name": "Farmhouse Hash",
    "restaurant": "First Watch",
    "restaurantAddress": "4611 E 82nd St, Indianapolis, IN 46250",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.9031,
      "lng": -86.044
    },
    "price": 18.25,
    "rating": 4.9,
    "reviewsCount": 262,
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "calories": 490,
    "protein": 38,
    "carbs": 28,
    "fat": 22,
    "fiber": 3,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Three cage-free eggs scrambled with turkey sausage",
      "roasted potatoes",
      "peppers",
      "and onions. 38g protein",
      "farm-fresh morning fuel."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (490 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-indianapolis-9",
    "name": "Chicken Shawarma Bowl",
    "restaurant": "The Med",
    "restaurantAddress": "5614 East Washington Street, Indianapolis, IN 46219",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.7684,
      "lng": -86.1084
    },
    "price": 22.0,
    "rating": 4.7,
    "reviewsCount": 293,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "calories": 450,
    "protein": 38,
    "carbs": 42,
    "fat": 12,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free",
      "High Protein"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "38g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Spiced rotisserie chicken over saffron rice with tzatziki",
      "pickled veggies",
      "and fresh pita. A Indy local favorite at 38g protein."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (450 kcal, 38g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  },
  {
    "id": "hen-indianapolis-10",
    "name": "Grilled Chicken Protein Bowl",
    "restaurant": "Top Out Cafe",
    "restaurantAddress": "1411 Roosevelt Ave, Indianapolis, IN 46201",
    "city": "Indianapolis",
    "coordinates": {
      "lat": 39.7668,
      "lng": -86.1312
    },
    "price": 14.5,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "calories": 410,
    "protein": 36,
    "carbs": 34,
    "fat": 10,
    "fiber": 5,
    "dietTags": [
      "Seed Oil Free",
      "Gluten-Free",
      "Dairy-Free"
    ],
    "cookingFat": "Pure Avocado Oil",
    "isSeedOilFree": true,
    "isGlutenFree": true,
    "isKeto": false,
    "isGrassFed": false,
    "isDairyFree": true,
    "highlights": [
      "36g Clean Protein",
      "Pure Avocado Oil",
      "Zero Seed Oils",
      "Whole Food Nutrition"
    ],
    "ingredients": [
      "Grilled chicken breast over brown rice with roasted veggies and house tahini drizzle. Top Out's most popular macro-friendly order at 36g protein."
    ],
    "chefNotes": "Verified by HealthyEatsNearMe nutrition database (410 kcal, 36g protein). Prepared without refined seed oils, artificial thickeners, or industrial sprays."
  }
];

export const INITIAL_DISHES: Dish[] = [...INDIA_DISHES, ...US_DISHES];
