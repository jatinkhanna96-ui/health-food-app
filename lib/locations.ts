export type CountryCode = 'US' | 'IN';

export interface CityConfig {
  id: string; // unique ID e.g. 'in-delhi', 'us-austin'
  city: string; // Canonical name e.g. 'Delhi', 'Bengaluru'
  displayName: string; // Clean label e.g. 'Delhi', 'Bengaluru'
  state: string; // State code or name
  country: CountryCode;
  region: string; // e.g. 'Delhi NCR', 'West', 'South', 'North', 'East & Central'
  coordinates: {
    lat: number;
    lng: number;
  };
  zoom: number;
  aliases: string[]; // Searchable aliases (e.g. Bangalore, Bombay, Gurgaon)
  isPopular?: boolean;
}

export interface CityLocation {
  name: string;
  state: string;
  lat: number;
  lng: number;
  zoom: number;
  country?: CountryCode;
}

export const INDIAN_REGIONS = [
  'Delhi NCR',
  'South',
  'West',
  'North',
  'East & Central',
] as const;

export const INDIAN_CITIES: CityConfig[] = [
  // Delhi NCR
  {
    id: 'in-delhi',
    city: 'Delhi',
    displayName: 'Delhi',
    state: 'Delhi',
    country: 'IN',
    region: 'Delhi NCR',
    coordinates: { lat: 28.6139, lng: 77.209 },
    zoom: 12,
    aliases: ['delhi', 'new delhi', 'dilli', 'delhi ncr', 'ncr'],
    isPopular: true,
  },
  {
    id: 'in-gurugram',
    city: 'Gurugram',
    displayName: 'Gurugram',
    state: 'Haryana',
    country: 'IN',
    region: 'Delhi NCR',
    coordinates: { lat: 28.4595, lng: 77.0266 },
    zoom: 12,
    aliases: ['gurugram', 'gurgaon', 'gurugram haryana'],
    isPopular: true,
  },
  {
    id: 'in-noida',
    city: 'Noida',
    displayName: 'Noida',
    state: 'Uttar Pradesh',
    country: 'IN',
    region: 'Delhi NCR',
    coordinates: { lat: 28.5355, lng: 77.391 },
    zoom: 12,
    aliases: ['noida', 'greater noida'],
    isPopular: true,
  },
  {
    id: 'in-ghaziabad',
    city: 'Ghaziabad',
    displayName: 'Ghaziabad',
    state: 'Uttar Pradesh',
    country: 'IN',
    region: 'Delhi NCR',
    coordinates: { lat: 28.6692, lng: 77.4538 },
    zoom: 12,
    aliases: ['ghaziabad'],
    isPopular: false,
  },

  // South
  {
    id: 'in-bengaluru',
    city: 'Bengaluru',
    displayName: 'Bengaluru',
    state: 'Karnataka',
    country: 'IN',
    region: 'South',
    coordinates: { lat: 12.9716, lng: 77.5946 },
    zoom: 12,
    aliases: ['bengaluru', 'bangalore', 'banglore'],
    isPopular: true,
  },
  {
    id: 'in-hyderabad',
    city: 'Hyderabad',
    displayName: 'Hyderabad',
    state: 'Telangana',
    country: 'IN',
    region: 'South',
    coordinates: { lat: 17.385, lng: 78.4867 },
    zoom: 12,
    aliases: ['hyderabad', 'secunderabad', 'cyberabad'],
    isPopular: true,
  },
  {
    id: 'in-chennai',
    city: 'Chennai',
    displayName: 'Chennai',
    state: 'Tamil Nadu',
    country: 'IN',
    region: 'South',
    coordinates: { lat: 13.0827, lng: 80.2707 },
    zoom: 12,
    aliases: ['chennai', 'madras'],
    isPopular: true,
  },
  {
    id: 'in-kochi',
    city: 'Kochi',
    displayName: 'Kochi',
    state: 'Kerala',
    country: 'IN',
    region: 'South',
    coordinates: { lat: 9.9312, lng: 76.2673 },
    zoom: 12,
    aliases: ['kochi', 'cochin', 'ernakulam'],
    isPopular: false,
  },
  {
    id: 'in-coimbatore',
    city: 'Coimbatore',
    displayName: 'Coimbatore',
    state: 'Tamil Nadu',
    country: 'IN',
    region: 'South',
    coordinates: { lat: 11.0168, lng: 76.9558 },
    zoom: 12,
    aliases: ['coimbatore', 'kovai'],
    isPopular: false,
  },
  {
    id: 'in-mysuru',
    city: 'Mysuru',
    displayName: 'Mysuru',
    state: 'Karnataka',
    country: 'IN',
    region: 'South',
    coordinates: { lat: 12.2958, lng: 76.6394 },
    zoom: 12,
    aliases: ['mysuru', 'mysore'],
    isPopular: false,
  },
  {
    id: 'in-visakhapatnam',
    city: 'Visakhapatnam',
    displayName: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    country: 'IN',
    region: 'South',
    coordinates: { lat: 17.6868, lng: 83.2185 },
    zoom: 12,
    aliases: ['visakhapatnam', 'vizag', 'waltair'],
    isPopular: false,
  },

  // West
  {
    id: 'in-mumbai',
    city: 'Mumbai',
    displayName: 'Mumbai',
    state: 'Maharashtra',
    country: 'IN',
    region: 'West',
    coordinates: { lat: 19.076, lng: 72.8777 },
    zoom: 12,
    aliases: ['mumbai', 'bombay'],
    isPopular: true,
  },
  {
    id: 'in-pune',
    city: 'Pune',
    displayName: 'Pune',
    state: 'Maharashtra',
    country: 'IN',
    region: 'West',
    coordinates: { lat: 18.5204, lng: 73.8567 },
    zoom: 12,
    aliases: ['pune', 'poona'],
    isPopular: true,
  },
  {
    id: 'in-ahmedabad',
    city: 'Ahmedabad',
    displayName: 'Ahmedabad',
    state: 'Gujarat',
    country: 'IN',
    region: 'West',
    coordinates: { lat: 23.0225, lng: 72.5714 },
    zoom: 12,
    aliases: ['ahmedabad', 'amdavad'],
    isPopular: true,
  },
  {
    id: 'in-surat',
    city: 'Surat',
    displayName: 'Surat',
    state: 'Gujarat',
    country: 'IN',
    region: 'West',
    coordinates: { lat: 21.1702, lng: 72.8311 },
    zoom: 12,
    aliases: ['surat'],
    isPopular: false,
  },
  {
    id: 'in-vadodara',
    city: 'Vadodara',
    displayName: 'Vadodara',
    state: 'Gujarat',
    country: 'IN',
    region: 'West',
    coordinates: { lat: 22.3072, lng: 73.1812 },
    zoom: 12,
    aliases: ['vadodara', 'baroda'],
    isPopular: false,
  },
  {
    id: 'in-nashik',
    city: 'Nashik',
    displayName: 'Nashik',
    state: 'Maharashtra',
    country: 'IN',
    region: 'West',
    coordinates: { lat: 19.9975, lng: 73.7898 },
    zoom: 12,
    aliases: ['nashik', 'nasik'],
    isPopular: false,
  },
  {
    id: 'in-goa',
    city: 'Goa',
    displayName: 'Goa',
    state: 'Goa',
    country: 'IN',
    region: 'West',
    coordinates: { lat: 15.2993, lng: 74.124 },
    zoom: 11,
    aliases: ['goa', 'panaji', 'panjim', 'north goa', 'south goa', 'margao'],
    isPopular: false,
  },
  {
    id: 'in-udaipur',
    city: 'Udaipur',
    displayName: 'Udaipur',
    state: 'Rajasthan',
    country: 'IN',
    region: 'West',
    coordinates: { lat: 24.5854, lng: 73.7125 },
    zoom: 12,
    aliases: ['udaipur'],
    isPopular: false,
  },

  // North
  {
    id: 'in-jaipur',
    city: 'Jaipur',
    displayName: 'Jaipur',
    state: 'Rajasthan',
    country: 'IN',
    region: 'North',
    coordinates: { lat: 26.9124, lng: 75.7873 },
    zoom: 12,
    aliases: ['jaipur', 'pink city'],
    isPopular: true,
  },
  {
    id: 'in-chandigarh',
    city: 'Chandigarh',
    displayName: 'Chandigarh',
    state: 'Chandigarh',
    country: 'IN',
    region: 'North',
    coordinates: { lat: 30.7333, lng: 76.7794 },
    zoom: 12,
    aliases: ['chandigarh', 'mohali', 'panchkula', 'tricity'],
    isPopular: true,
  },
  {
    id: 'in-lucknow',
    city: 'Lucknow',
    displayName: 'Lucknow',
    state: 'Uttar Pradesh',
    country: 'IN',
    region: 'North',
    coordinates: { lat: 26.8467, lng: 80.9462 },
    zoom: 12,
    aliases: ['lucknow'],
    isPopular: false,
  },
  {
    id: 'in-amritsar',
    city: 'Amritsar',
    displayName: 'Amritsar',
    state: 'Punjab',
    country: 'IN',
    region: 'North',
    coordinates: { lat: 31.634, lng: 74.8723 },
    zoom: 12,
    aliases: ['amritsar'],
    isPopular: false,
  },
  {
    id: 'in-dehradun',
    city: 'Dehradun',
    displayName: 'Dehradun',
    state: 'Uttarakhand',
    country: 'IN',
    region: 'North',
    coordinates: { lat: 30.3165, lng: 78.0322 },
    zoom: 12,
    aliases: ['dehradun', 'dehra dun'],
    isPopular: false,
  },
  {
    id: 'in-rishikesh',
    city: 'Rishikesh',
    displayName: 'Rishikesh',
    state: 'Uttarakhand',
    country: 'IN',
    region: 'North',
    coordinates: { lat: 30.0869, lng: 78.2676 },
    zoom: 12,
    aliases: ['rishikesh'],
    isPopular: false,
  },

  // East & Central
  {
    id: 'in-kolkata',
    city: 'Kolkata',
    displayName: 'Kolkata',
    state: 'West Bengal',
    country: 'IN',
    region: 'East & Central',
    coordinates: { lat: 22.5726, lng: 88.3639 },
    zoom: 12,
    aliases: ['kolkata', 'calcutta'],
    isPopular: true,
  },
  {
    id: 'in-indore',
    city: 'Indore',
    displayName: 'Indore',
    state: 'Madhya Pradesh',
    country: 'IN',
    region: 'East & Central',
    coordinates: { lat: 22.7196, lng: 75.8577 },
    zoom: 12,
    aliases: ['indore'],
    isPopular: false,
  },
  {
    id: 'in-nagpur',
    city: 'Nagpur',
    displayName: 'Nagpur',
    state: 'Maharashtra',
    country: 'IN',
    region: 'East & Central',
    coordinates: { lat: 21.1458, lng: 79.0882 },
    zoom: 12,
    aliases: ['nagpur'],
    isPopular: false,
  },
  {
    id: 'in-bhopal',
    city: 'Bhopal',
    displayName: 'Bhopal',
    state: 'Madhya Pradesh',
    country: 'IN',
    region: 'East & Central',
    coordinates: { lat: 23.2599, lng: 77.4126 },
    zoom: 12,
    aliases: ['bhopal'],
    isPopular: false,
  },
  {
    id: 'in-bhubaneswar',
    city: 'Bhubaneswar',
    displayName: 'Bhubaneswar',
    state: 'Odisha',
    country: 'IN',
    region: 'East & Central',
    coordinates: { lat: 20.2961, lng: 85.8245 },
    zoom: 12,
    aliases: ['bhubaneswar', 'bhubaneshwar'],
    isPopular: false,
  },
  {
    id: 'in-patna',
    city: 'Patna',
    displayName: 'Patna',
    state: 'Bihar',
    country: 'IN',
    region: 'East & Central',
    coordinates: { lat: 25.5941, lng: 85.1376 },
    zoom: 12,
    aliases: ['patna', 'patliputra'],
    isPopular: false,
  },
];

export const US_CITIES: CityConfig[] = [
  {
    id: 'us-austin',
    city: 'Austin',
    displayName: 'Austin, TX',
    state: 'TX',
    country: 'US',
    region: 'Texas',
    coordinates: { lat: 30.2672, lng: -97.7431 },
    zoom: 13,
    aliases: ['austin', 'atx', 'austin tx'],
    isPopular: true,
  },
  {
    id: 'us-new-york',
    city: 'New York',
    displayName: 'New York, NY',
    state: 'NY',
    country: 'US',
    region: 'Northeast',
    coordinates: { lat: 40.7128, lng: -74.006 },
    zoom: 13,
    aliases: ['new york', 'nyc', 'manhattan', 'brooklyn'],
    isPopular: true,
  },
  {
    id: 'us-los-angeles',
    city: 'Los Angeles',
    displayName: 'Los Angeles, CA',
    state: 'CA',
    country: 'US',
    region: 'West Coast',
    coordinates: { lat: 34.0522, lng: -118.2437 },
    zoom: 13,
    aliases: ['los angeles', 'la', 'socal'],
    isPopular: true,
  },
  {
    id: 'us-san-francisco',
    city: 'San Francisco',
    displayName: 'San Francisco, CA',
    state: 'CA',
    country: 'US',
    region: 'West Coast',
    coordinates: { lat: 37.7749, lng: -122.4194 },
    zoom: 13,
    aliases: ['san francisco', 'sf', 'bay area'],
    isPopular: true,
  },
  {
    id: 'us-miami',
    city: 'Miami',
    displayName: 'Miami, FL',
    state: 'FL',
    country: 'US',
    region: 'Southeast',
    coordinates: { lat: 25.7617, lng: -80.1918 },
    zoom: 13,
    aliases: ['miami', 'south beach', 'miami fl'],
    isPopular: true,
  },
  {
    id: 'us-chicago',
    city: 'Chicago',
    displayName: 'Chicago, IL',
    state: 'IL',
    country: 'US',
    region: 'Midwest',
    coordinates: { lat: 41.8781, lng: -87.6298 },
    zoom: 13,
    aliases: ['chicago', 'windy city'],
    isPopular: true,
  },
  {
    id: 'us-dallas',
    city: 'Dallas',
    displayName: 'Dallas, TX',
    state: 'TX',
    country: 'US',
    region: 'Texas',
    coordinates: { lat: 32.7767, lng: -96.797 },
    zoom: 13,
    aliases: ['dallas', 'dfw'],
    isPopular: true,
  },
  {
    id: 'us-houston',
    city: 'Houston',
    displayName: 'Houston, TX',
    state: 'TX',
    country: 'US',
    region: 'Texas',
    coordinates: { lat: 29.7604, lng: -95.3698 },
    zoom: 13,
    aliases: ['houston', 'htx'],
    isPopular: true,
  },
  {
    id: 'us-phoenix',
    city: 'Phoenix',
    displayName: 'Phoenix, AZ',
    state: 'AZ',
    country: 'US',
    region: 'Southwest',
    coordinates: { lat: 33.4484, lng: -112.074 },
    zoom: 13,
    aliases: ['phoenix', 'phx'],
    isPopular: false,
  },
  {
    id: 'us-scottsdale',
    city: 'Scottsdale',
    displayName: 'Scottsdale, AZ',
    state: 'AZ',
    country: 'US',
    region: 'Southwest',
    coordinates: { lat: 33.4942, lng: -111.9261 },
    zoom: 13,
    aliases: ['scottsdale'],
    isPopular: true,
  },
  {
    id: 'us-san-diego',
    city: 'San Diego',
    displayName: 'San Diego, CA',
    state: 'CA',
    country: 'US',
    region: 'West Coast',
    coordinates: { lat: 32.7157, lng: -117.1611 },
    zoom: 13,
    aliases: ['san diego'],
    isPopular: true,
  },
  {
    id: 'us-boston',
    city: 'Boston',
    displayName: 'Boston, MA',
    state: 'MA',
    country: 'US',
    region: 'Northeast',
    coordinates: { lat: 42.3601, lng: -71.0589 },
    zoom: 13,
    aliases: ['boston'],
    isPopular: true,
  },
  {
    id: 'us-denver',
    city: 'Denver',
    displayName: 'Denver, CO',
    state: 'CO',
    country: 'US',
    region: 'Mountain West',
    coordinates: { lat: 39.7392, lng: -104.9903 },
    zoom: 13,
    aliases: ['denver'],
    isPopular: true,
  },
  {
    id: 'us-seattle',
    city: 'Seattle',
    displayName: 'Seattle, WA',
    state: 'WA',
    country: 'US',
    region: 'West Coast',
    coordinates: { lat: 47.6062, lng: -122.3321 },
    zoom: 13,
    aliases: ['seattle'],
    isPopular: true,
  },
  {
    id: 'us-atlanta',
    city: 'Atlanta',
    displayName: 'Atlanta, GA',
    state: 'GA',
    country: 'US',
    region: 'Southeast',
    coordinates: { lat: 33.749, lng: -84.388 },
    zoom: 13,
    aliases: ['atlanta', 'atl'],
    isPopular: true,
  },
  {
    id: 'us-portland',
    city: 'Portland',
    displayName: 'Portland, OR',
    state: 'OR',
    country: 'US',
    region: 'West Coast',
    coordinates: { lat: 45.5152, lng: -122.6784 },
    zoom: 13,
    aliases: ['portland', 'pdx'],
    isPopular: false,
  },
  {
    id: 'us-nashville',
    city: 'Nashville',
    displayName: 'Nashville, TN',
    state: 'TN',
    country: 'US',
    region: 'Southeast',
    coordinates: { lat: 36.1627, lng: -86.7816 },
    zoom: 13,
    aliases: ['nashville'],
    isPopular: true,
  },
  {
    id: 'us-washington',
    city: 'Washington',
    displayName: 'Washington, DC',
    state: 'DC',
    country: 'US',
    region: 'Northeast',
    coordinates: { lat: 38.9072, lng: -77.0369 },
    zoom: 13,
    aliases: ['washington', 'dc', 'washington dc'],
    isPopular: true,
  },
  {
    id: 'us-charlotte',
    city: 'Charlotte',
    displayName: 'Charlotte, NC',
    state: 'NC',
    country: 'US',
    region: 'Southeast',
    coordinates: { lat: 35.2271, lng: -80.8431 },
    zoom: 13,
    aliases: ['charlotte', 'clt'],
    isPopular: false,
  },
  {
    id: 'us-tampa',
    city: 'Tampa',
    displayName: 'Tampa, FL',
    state: 'FL',
    country: 'US',
    region: 'Southeast',
    coordinates: { lat: 27.9506, lng: -82.4572 },
    zoom: 13,
    aliases: ['tampa'],
    isPopular: false,
  },
  {
    id: 'us-orlando',
    city: 'Orlando',
    displayName: 'Orlando, FL',
    state: 'FL',
    country: 'US',
    region: 'Southeast',
    coordinates: { lat: 28.5383, lng: -81.3792 },
    zoom: 13,
    aliases: ['orlando'],
    isPopular: false,
  },
  {
    id: 'us-boulder',
    city: 'Boulder',
    displayName: 'Boulder, CO',
    state: 'CO',
    country: 'US',
    region: 'Mountain West',
    coordinates: { lat: 40.015, lng: -105.2705 },
    zoom: 13,
    aliases: ['boulder'],
    isPopular: false,
  },
  {
    id: 'us-columbus',
    city: 'Columbus',
    displayName: 'Columbus, OH',
    state: 'OH',
    country: 'US',
    region: 'Midwest',
    coordinates: { lat: 39.9612, lng: -82.9988 },
    zoom: 13,
    aliases: ['columbus'],
    isPopular: false,
  },
  {
    id: 'us-salt-lake-city',
    city: 'Salt Lake City',
    displayName: 'Salt Lake City, UT',
    state: 'UT',
    country: 'US',
    region: 'Mountain West',
    coordinates: { lat: 40.7608, lng: -111.891 },
    zoom: 13,
    aliases: ['salt lake city', 'slc'],
    isPopular: false,
  },
  {
    id: 'us-minneapolis',
    city: 'Minneapolis',
    displayName: 'Minneapolis, MN',
    state: 'MN',
    country: 'US',
    region: 'Midwest',
    coordinates: { lat: 44.9778, lng: -93.265 },
    zoom: 13,
    aliases: ['minneapolis', 'twin cities'],
    isPopular: false,
  },
  {
    id: 'us-indianapolis',
    city: 'Indianapolis',
    displayName: 'Indianapolis, IN',
    state: 'IN',
    country: 'US',
    region: 'Midwest',
    coordinates: { lat: 39.7684, lng: -86.1581 },
    zoom: 13,
    aliases: ['indianapolis', 'indy'],
    isPopular: false,
  },
  {
    id: 'us-philadelphia',
    city: 'Philadelphia',
    displayName: 'Philadelphia, PA',
    state: 'PA',
    country: 'US',
    region: 'Northeast',
    coordinates: { lat: 39.9526, lng: -75.1652 },
    zoom: 13,
    aliases: ['philadelphia', 'philly'],
    isPopular: false,
  },
  {
    id: 'us-detroit',
    city: 'Detroit',
    displayName: 'Detroit, MI',
    state: 'MI',
    country: 'US',
    region: 'Midwest',
    coordinates: { lat: 42.3314, lng: -83.0458 },
    zoom: 13,
    aliases: ['detroit'],
    isPopular: false,
  },
  {
    id: 'us-las-vegas',
    city: 'Las Vegas',
    displayName: 'Las Vegas, NV',
    state: 'NV',
    country: 'US',
    region: 'West Coast',
    coordinates: { lat: 36.1699, lng: -115.1398 },
    zoom: 13,
    aliases: ['las vegas', 'vegas'],
    isPopular: false,
  },
  {
    id: 'us-sacramento',
    city: 'Sacramento',
    displayName: 'Sacramento, CA',
    state: 'CA',
    country: 'US',
    region: 'West Coast',
    coordinates: { lat: 38.5816, lng: -121.4944 },
    zoom: 13,
    aliases: ['sacramento'],
    isPopular: false,
  },
  {
    id: 'us-portland-me',
    city: 'Portland ME',
    displayName: 'Portland, ME',
    state: 'ME',
    country: 'US',
    region: 'Northeast',
    coordinates: { lat: 43.6591, lng: -70.2568 },
    zoom: 13,
    aliases: ['portland me', 'portland maine'],
    isPopular: false,
  },
];

export const ALL_CITIES: CityConfig[] = [...INDIAN_CITIES, ...US_CITIES];

// Helper functions for easy querying and scalability
export function getAllCities(): CityConfig[] {
  return ALL_CITIES;
}

export function getCitiesByCountry(country: CountryCode): CityConfig[] {
  return ALL_CITIES.filter((c) => c.country === country);
}

export function getPopularCities(country?: CountryCode): CityConfig[] {
  if (country) {
    return ALL_CITIES.filter((c) => c.country === country && c.isPopular);
  }
  return ALL_CITIES.filter((c) => c.isPopular);
}

export function getIndianCitiesByRegion(): Record<string, CityConfig[]> {
  const grouped: Record<string, CityConfig[]> = {};
  INDIAN_REGIONS.forEach((region) => {
    grouped[region] = INDIAN_CITIES.filter((c) => c.region === region);
  });
  return grouped;
}

export function getCityConfigByName(name: string): CityConfig | null {
  const normalized = name.trim().toLowerCase();
  return (
    ALL_CITIES.find(
      (c) =>
        c.city.toLowerCase() === normalized ||
        c.displayName.toLowerCase() === normalized ||
        c.aliases.some((a) => a.toLowerCase() === normalized)
    ) || null
  );
}

export function toCityLocation(config: CityConfig): CityLocation {
  return {
    name: config.city,
    state: config.state,
    lat: config.coordinates.lat,
    lng: config.coordinates.lng,
    zoom: config.zoom,
    country: config.country,
  };
}

/**
 * Natural Language Query Resolver
 * Supports queries like:
 * - "high protein in Delhi"
 * - "healthy food in Mumbai"
 * - "low calorie food in Bengaluru"
 * - "seed-oil free in Gurugram"
 * - "vegetarian in Bangalore"
 */
export interface NLSearchResult {
  city: CityConfig | null;
  healthGoals: {
    highProtein?: boolean;
    lowCalorie?: boolean;
    lowSugar?: boolean;
    lowCarb?: boolean;
    seedOilFree?: boolean;
    vegetarian?: boolean;
    glutenFree?: boolean;
    keto?: boolean;
    dairyFree?: boolean;
  };
  cleanedSearch: string;
}

export function parseNaturalLanguageQuery(input: string): NLSearchResult {
  const lower = input.trim().toLowerCase();
  let matchedCity: CityConfig | null = null;
  let remainingText = lower;

  // Check cities and aliases from longest name to shortest to avoid partial clashes
  const sortedCities = [...ALL_CITIES].sort((a, b) => b.city.length - a.city.length);

  for (const city of sortedCities) {
    // Check main name
    const nameRegex = new RegExp(`\\b(${city.city.toLowerCase()})\\b`, 'i');
    if (nameRegex.test(remainingText)) {
      matchedCity = city;
      remainingText = remainingText.replace(nameRegex, ' ').replace(/\s+/g, ' ').trim();
      break;
    }
    // Check aliases
    let aliasFound = false;
    for (const alias of city.aliases) {
      const aliasRegex = new RegExp(`\\b(${alias.toLowerCase()})\\b`, 'i');
      if (aliasRegex.test(remainingText)) {
        matchedCity = city;
        remainingText = remainingText.replace(aliasRegex, ' ').replace(/\s+/g, ' ').trim();
        aliasFound = true;
        break;
      }
    }
    if (aliasFound) break;
  }

  // Detect health goals and remove trigger words like "in", "near", "food", "healthy"
  remainingText = remainingText
    .replace(/\b(in|around|near|at|of|for)\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const healthGoals: NLSearchResult['healthGoals'] = {};

  if (/\b(high[\s-]protein|protein|40g|post[\s-]workout)\b/i.test(remainingText)) {
    healthGoals.highProtein = true;
    remainingText = remainingText.replace(/\b(high[\s-]protein|protein|40g|post[\s-]workout)\b/gi, ' ');
  }

  if (/\b(low[\s-]cal|low[\s-]calorie|under[\s-]500|light)\b/i.test(remainingText)) {
    healthGoals.lowCalorie = true;
    remainingText = remainingText.replace(/\b(low[\s-]cal|low[\s-]calorie|under[\s-]500|light)\b/gi, ' ');
  }

  if (/\b(low[\s-]sugar|zero[\s-]sugar|sugar[\s-]free)\b/i.test(remainingText)) {
    healthGoals.lowSugar = true;
    remainingText = remainingText.replace(/\b(low[\s-]sugar|zero[\s-]sugar|sugar[\s-]free)\b/gi, ' ');
  }

  if (/\b(low[\s-]carb|keto|carb[\s-]conscious)\b/i.test(remainingText)) {
    healthGoals.lowCarb = true;
    remainingText = remainingText.replace(/\b(low[\s-]carb|keto|carb[\s-]conscious)\b/gi, ' ');
  }

  if (/\b(seed[\s-]oil[\s-]free|zero[\s-]seed[\s-]oil|no[\s-]seed[\s-]oil|tallow|ghee|olive oil)\b/i.test(remainingText)) {
    healthGoals.seedOilFree = true;
    remainingText = remainingText.replace(/\b(seed[\s-]oil[\s-]free|zero[\s-]seed[\s-]oil|no[\s-]seed[\s-]oil)\b/gi, ' ');
  }

  if (/\b(vegetarian|veg|pure[\s-]veg)\b/i.test(remainingText)) {
    healthGoals.vegetarian = true;
    remainingText = remainingText.replace(/\b(vegetarian|pure[\s-]veg)\b/gi, ' ');
  }

  if (/\b(gluten[\s-]free|no[\s-]gluten)\b/i.test(remainingText)) {
    healthGoals.glutenFree = true;
    remainingText = remainingText.replace(/\b(gluten[\s-]free|no[\s-]gluten)\b/gi, ' ');
  }

  if (/\b(dairy[\s-]free|no[\s-]dairy)\b/i.test(remainingText)) {
    healthGoals.dairyFree = true;
    remainingText = remainingText.replace(/\b(dairy[\s-]free|no[\s-]dairy)\b/gi, ' ');
  }

  // Clean remaining words like "healthy", "food", "options", "places", "clean"
  const cleanedSearch = remainingText
    .replace(/\b(healthy|food|options|places|clean|dining|dishes|eat|eating)\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return {
    city: matchedCity,
    healthGoals,
    cleanedSearch,
  };
}

/**
 * Find closest city to coordinates
 */
export function findClosestCity(lat: number, lng: number): CityConfig {
  let closest = ALL_CITIES[0];
  let minDistance = Infinity;

  for (const c of ALL_CITIES) {
    const dLat = ((c.coordinates.lat - lat) * Math.PI) / 180;
    const dLon = ((c.coordinates.lng - lng) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat * Math.PI) / 180) *
        Math.cos((c.coordinates.lat * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const dist = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    if (dist < minDistance) {
      minDistance = dist;
      closest = c;
    }
  }

  return closest;
}

/**
 * Detect user's country from browser timezone and locale heuristics (instant, zero network latency)
 */
export function detectUserCountryFromClient(): CountryCode {
  if (typeof window === 'undefined') return 'US';
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (
      tz.includes('Calcutta') ||
      tz.includes('Kolkata') ||
      tz.startsWith('Asia/Colombo') ||
      tz.startsWith('Asia/Kathmandu') ||
      tz === 'IST'
    ) {
      return 'IN';
    }
    const langs = navigator.languages || [navigator.language || ''];
    if (langs.some((l) => l.toLowerCase().endsWith('-in') || l.toLowerCase() === 'hi')) {
      return 'IN';
    }
  } catch {
    // ignore
  }
  return 'US';
}

/**
 * Get default flagship city for a country
 */
export function getDefaultCityForCountry(country: CountryCode): CityConfig {
  if (country === 'IN') {
    return INDIAN_CITIES.find((c) => c.city === 'Delhi') || INDIAN_CITIES[0];
  }
  return US_CITIES.find((c) => c.city === 'Austin') || US_CITIES[0];
}

/**
 * Intelligent Location Resolver
 * Combines coordinates, detected city name from network/IP, and country code
 */
export function resolveLocationToCity(
  lat?: number,
  lng?: number,
  detectedCity?: string,
  countryCode?: string
): CityConfig {
  const upper = (countryCode || '').trim().toUpperCase();
  let normCountry: CountryCode | undefined;

  if (
    upper === 'IN' ||
    upper === 'IND' ||
    upper === 'INDIA' ||
    upper === 'PK' || // Pakistan
    upper === 'BD' || // Bangladesh
    upper === 'NP' || // Nepal
    upper === 'LK' || // Sri Lanka
    upper === 'BT'    // Bhutan
  ) {
    normCountry = 'IN';
  } else if (
    upper === 'US' ||
    upper === 'USA' ||
    upper === 'UNITED STATES' ||
    upper === 'CA' || // Canada
    upper === 'MX'    // Mexico
  ) {
    normCountry = 'US';
  } else if (upper) {
    // If other international country: test coordinate proximity to India vs US
    if (typeof lat === 'number' && typeof lng === 'number' && !isNaN(lat) && !isNaN(lng)) {
      const distToIndia = Math.hypot(lat - 20.59, lng - 78.96);
      const distToUS = Math.hypot(lat - 37.09, lng - (-95.71));
      normCountry = distToIndia < distToUS ? 'IN' : 'US';
    } else {
      normCountry = detectUserCountryFromClient();
    }
  }

  // If a city name was detected (e.g. from IP or reverse geocode), check for exact or alias match
  if (detectedCity && detectedCity.trim()) {
    const q = detectedCity.trim().toLowerCase();
    const exact = ALL_CITIES.find(
      (c) =>
        (!normCountry || c.country === normCountry) &&
        (c.city.toLowerCase() === q ||
          c.displayName.toLowerCase() === q ||
          c.aliases.some((a) => a.toLowerCase() === q))
    );
    if (exact) return exact;

    if (q.length >= 3) {
      const partial = ALL_CITIES.find(
        (c) =>
          (!normCountry || c.country === normCountry) &&
          (c.city.toLowerCase().includes(q) ||
            c.aliases.some((a) => a.toLowerCase().includes(q) || q.includes(a.toLowerCase())))
      );
      if (partial) return partial;
    }
  }

  // If country code is known, prioritize matching country pool
  const pool =
    normCountry === 'IN'
      ? INDIAN_CITIES
      : normCountry === 'US'
      ? US_CITIES
      : ALL_CITIES;

  // If lat or lng are missing or invalid, return default city for that country
  if (typeof lat !== 'number' || typeof lng !== 'number' || isNaN(lat) || isNaN(lng)) {
    return pool[0];
  }

  let closest = pool[0];
  let minDistance = Infinity;

  for (const c of pool) {
    const dLat = ((c.coordinates.lat - lat) * Math.PI) / 180;
    const dLon = ((c.coordinates.lng - lng) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat * Math.PI) / 180) *
        Math.cos((c.coordinates.lat * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const dist = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    if (dist < minDistance) {
      minDistance = dist;
      closest = c;
    }
  }

  return closest;
}

