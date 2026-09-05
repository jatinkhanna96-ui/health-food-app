import json, re, random, hashlib

with open('healthyeats_restaurants.json') as f:
    restaurants = json.load(f)

with open('healthyeats_all_meals.json') as f:
    meals = json.load(f)

rest_by_id = {r['id']: r for r in restaurants}

CITY_CONFIG = [
    {'name': 'Austin', 'state': 'TX', 'lat': 30.2672, 'lng': -97.7431, 'zoom': 13},
    {'name': 'New York', 'state': 'NY', 'lat': 40.7128, 'lng': -74.0060, 'zoom': 13},
    {'name': 'Los Angeles', 'state': 'CA', 'lat': 34.0522, 'lng': -118.2437, 'zoom': 13},
    {'name': 'San Francisco', 'state': 'CA', 'lat': 37.7749, 'lng': -122.4194, 'zoom': 13},
    {'name': 'Miami', 'state': 'FL', 'lat': 25.7617, 'lng': -80.1918, 'zoom': 13},
    {'name': 'Chicago', 'state': 'IL', 'lat': 41.8781, 'lng': -87.6298, 'zoom': 13},
    {'name': 'Dallas', 'state': 'TX', 'lat': 32.7767, 'lng': -96.7970, 'zoom': 13},
    {'name': 'Houston', 'state': 'TX', 'lat': 29.7604, 'lng': -95.3698, 'zoom': 13},
    {'name': 'Phoenix', 'state': 'AZ', 'lat': 33.4484, 'lng': -112.0740, 'zoom': 13},
    {'name': 'Scottsdale', 'state': 'AZ', 'lat': 33.4942, 'lng': -111.9261, 'zoom': 13},
    {'name': 'San Diego', 'state': 'CA', 'lat': 32.7157, 'lng': -117.1611, 'zoom': 13},
    {'name': 'Boston', 'state': 'MA', 'lat': 42.3601, 'lng': -71.0589, 'zoom': 13},
    {'name': 'Denver', 'state': 'CO', 'lat': 39.7392, 'lng': -104.9903, 'zoom': 13},
    {'name': 'Seattle', 'state': 'WA', 'lat': 47.6062, 'lng': -122.3321, 'zoom': 13},
    {'name': 'Atlanta', 'state': 'GA', 'lat': 33.7490, 'lng': -84.3880, 'zoom': 13},
    {'name': 'Nashville', 'state': 'TN', 'lat': 36.1627, 'lng': -86.7816, 'zoom': 13},
    {'name': 'Washington', 'state': 'DC', 'lat': 38.9072, 'lng': -77.0369, 'zoom': 13},
    {'name': 'Portland', 'state': 'OR', 'lat': 45.5152, 'lng': -122.6784, 'zoom': 13},
    {'name': 'Charlotte', 'state': 'NC', 'lat': 35.2271, 'lng': -80.8431, 'zoom': 13},
    {'name': 'Tampa', 'state': 'FL', 'lat': 27.9506, 'lng': -82.4572, 'zoom': 13},
    {'name': 'Orlando', 'state': 'FL', 'lat': 28.5383, 'lng': -81.3792, 'zoom': 13},
    {'name': 'Boulder', 'state': 'CO', 'lat': 40.0150, 'lng': -105.2705, 'zoom': 13},
    {'name': 'Columbus', 'state': 'OH', 'lat': 39.9612, 'lng': -82.9988, 'zoom': 13},
    {'name': 'Salt Lake City', 'state': 'UT', 'lat': 40.7608, 'lng': -111.8910, 'zoom': 13},
    {'name': 'Minneapolis', 'state': 'MN', 'lat': 44.9778, 'lng': -93.2650, 'zoom': 13},
    {'name': 'Indianapolis', 'state': 'IN', 'lat': 39.7684, 'lng': -86.1581, 'zoom': 13},
]

CITY_NORM = {
    'austin': 'Austin',
    'new york': 'New York',
    'new-york': 'New York',
    'manhattan': 'New York',
    'brooklyn': 'New York',
    'midtown manhattan': 'New York',
    'los angeles': 'Los Angeles',
    'santa monica': 'Los Angeles',
    'pasadena': 'Los Angeles',
    'long beach': 'Los Angeles',
    'san francisco': 'San Francisco',
    'miami': 'Miami',
    'brickell': 'Miami',
    'boca raton': 'Miami',
    'fort lauderdale': 'Miami',
    'chicago': 'Chicago',
    'dallas': 'Dallas',
    'plano': 'Dallas',
    'allen': 'Dallas',
    'frisco': 'Dallas',
    'fort worth': 'Dallas',
    'irving': 'Dallas',
    'houston': 'Houston',
    'the woodlands': 'Houston',
    'phoenix': 'Phoenix',
    'tempe': 'Phoenix',
    'mesa': 'Phoenix',
    'chandler': 'Phoenix',
    'glendale': 'Phoenix',
    'scottsdale': 'Scottsdale',
    'san diego': 'San Diego',
    'pacific beach': 'San Diego',
    'carlsbad': 'San Diego',
    'solana beach': 'San Diego',
    'boston': 'Boston',
    'cambridge': 'Boston',
    'denver': 'Denver',
    'boulder': 'Boulder',
    'seattle': 'Seattle',
    'atlanta': 'Atlanta',
    'nashville': 'Nashville',
    'washington': 'Washington',
    'washington-dc': 'Washington',
    'arlington': 'Washington',
    'alexandria': 'Washington',
    'portland': 'Portland',
    'pearl district': 'Portland',
    'charlotte': 'Charlotte',
    'tampa': 'Tampa',
    'orlando': 'Orlando',
    'columbus': 'Columbus',
    'salt lake city': 'Salt Lake City',
    'minneapolis': 'Minneapolis',
    'indianapolis': 'Indianapolis',
}

def parse_num(val):
    if val is None:
        return 0
    if isinstance(val, (int, float)):
        return round(float(val), 1)
    m = re.search(r'([0-9]+(?:\.[0-9]+)?)', str(val))
    return round(float(m.group(1)), 1) if m else 0

print("Test builder initialized.")
