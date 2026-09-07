import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, city?: string, id?: string): string {
  const isIndia = (id && id.startsWith('in-')) || (price >= 30) || (city && ['Delhi', 'Gurugram', 'Noida', 'Ghaziabad', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kochi', 'Coimbatore', 'Mysuru', 'Visakhapatnam', 'Mumbai', 'Pune', 'Ahmedabad', 'Surat', 'Vadodara', 'Nashik', 'Goa', 'Udaipur', 'Jaipur', 'Chandigarh', 'Lucknow', 'Amritsar', 'Dehradun', 'Rishikesh', 'Kolkata', 'Indore', 'Nagpur', 'Bhopal', 'Bhubaneswar', 'Patna'].includes(city));
  if (isIndia) {
    return `₹${Math.round(price)}`;
  }
  return `$${price.toFixed(2)}`;
}

/**
 * Builds an official Google Maps universal Directions URL that reliably takes the user
 * to the destination with turn-by-turn routing from their current location.
 */
export function getGoogleMapsDirectionsUrl(params: {
  restaurant: string;
  address?: string;
  city?: string;
  coordinates?: { lat: number; lng: number };
}): string {
  const { restaurant, address, city, coordinates } = params;

  // If a full street address is available, include restaurant name and address for optimal Google Maps business resolution
  if (address && address.trim()) {
    const fullAddress = address.includes(restaurant) ? address : `${restaurant}, ${address}`;
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
  }

  // If coordinates are present, route to the exact coordinates
  if (
    coordinates &&
    typeof coordinates.lat === 'number' &&
    typeof coordinates.lng === 'number' &&
    !isNaN(coordinates.lat) &&
    !isNaN(coordinates.lng)
  ) {
    return `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
  }

  // Fallback to restaurant name with city
  const fallbackQuery = city ? `${restaurant}, ${city}` : restaurant;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fallbackQuery)}`;
}
