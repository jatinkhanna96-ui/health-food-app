export type ReelCity =
  | "Austin, TX"
  | "New York, NY"
  | "Los Angeles, CA"
  | "San Francisco, CA"
  | "Miami, FL"
  | "Chicago, IL"
  | "Denver, CO"
  | "Seattle, WA"
  | "San Diego, CA"
  | "Nashville, TN"
  | "Washington, DC";

export type CookingFat =
  | "Beef Tallow"
  | "Cold-Pressed EVOO"
  | "Grass-Fed Ghee"
  | "Avocado Oil"
  | "Bone Marrow"
  | "Zero Acre";

export type Reel = {
  id: string;
  city: ReelCity;
  restaurant: string;
  reel_url: string; // Instagram/Facebook public reel — embed via oEmbed, DO NOT re-upload
  creator_handle: string;
  eating_type: string; // e.g. "creator eating burger at table"
  cooking_fat: CookingFat;
  tags: string[]; // ["seed-oil-free", "grass-fed", "organic"]
  caption_for_app: string; // short viral hook
  macros_text: string;
  views: string;
  verified: boolean;
  dish_name?: string;
  thumbnail?: string;
};

export const REELS_DATA: Reel[] = [
  // NEW YORK, NY
  {
    id: "ny1",
    city: "New York, NY",
    restaurant: "Happier Grocery",
    reel_url: "https://www.instagram.com/reel/DXwyzu3xkTK/",
    creator_handle: "@cleanbites_mikes",
    cooking_fat: "Beef Tallow",
    tags: ["grass-fed", "seed-oil-free", "sourdough"],
    caption_for_app: "Healthiest zero-free burger in NYC — 100% grass-fed, no seed oils, raw cheese, sourdough bun",
    views: "7.2k",
    macros_text: "42g Protein",
    verified: true,
    eating_type: "creator eating burger at table",
    dish_name: "100% Grass-Fed Raw Cheese Burger",
    thumbnail: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ny2",
    city: "New York, NY",
    restaurant: "Metro Marché",
    reel_url: "https://www.instagram.com/reel/DbvjMSwxjtf/",
    creator_handle: "@metromarche_nyc",
    cooking_fat: "Cold-Pressed EVOO",
    tags: ["seed-oil-free"],
    caption_for_app: "Your favorite seed-oil-free spot in NYC — steak bowl + chicken katsu",
    views: "5.1k",
    macros_text: "38g Protein",
    verified: true,
    eating_type: "creator tasting steak bowl",
    dish_name: "Steak Bowl & Crispy Chicken Katsu",
    thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ny3",
    city: "New York, NY",
    restaurant: "Impact Kitchen",
    reel_url: "https://www.instagram.com/reel/DOm4F0sDQUj/",
    creator_handle: "@impactkitchen",
    cooking_fat: "Avocado Oil",
    tags: ["seed-oil-free", "pasture-raised"],
    caption_for_app: "Pre-opening tasting — green smoothie + protein bowl — seed-oil-free",
    views: "3.4k",
    macros_text: "32g Protein",
    verified: true,
    eating_type: "creator enjoying protein bowl",
    dish_name: "Green Smoothie & Pasture Protein Bowl",
    thumbnail: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },

  // LOS ANGELES, CA
  {
    id: "la1",
    city: "Los Angeles, CA",
    restaurant: "Talo Organic",
    reel_url: "https://www.instagram.com/reel/DP1YpYTkeoX/",
    creator_handle: "@taloorganic",
    cooking_fat: "Beef Tallow",
    tags: ["grass-fed", "organic", "seed-oil-free"],
    caption_for_app: "I quit my 9-5 to launch seed-oil-free — fries in beef tallow at 2:20AM, line around block",
    views: "17.4k",
    macros_text: "Tallow Fries",
    verified: true,
    eating_type: "creator eating beef tallow fries",
    dish_name: "Organic Beef Tallow Hand-Cut Fries",
    thumbnail: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "la2",
    city: "Los Angeles, CA",
    restaurant: "3rd St Market",
    reel_url: "https://www.instagram.com/reel/Dby_YoePvU6/",
    creator_handle: "@3rdstmarket",
    cooking_fat: "Avocado Oil",
    tags: ["seed-oil-free", "mexican"],
    caption_for_app: "Where can I find Mexican Brunch with no seed oils? — menudo + chilaquiles",
    views: "9.2k",
    macros_text: "28g Protein",
    verified: true,
    eating_type: "creator eating chilaquiles brunch",
    dish_name: "Seed-Oil-Free Chilaquiles Brunch",
    thumbnail: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "la3",
    city: "Los Angeles, CA",
    restaurant: "BOA Steakhouse",
    reel_url: "https://www.instagram.com/reel/DPR6VLaDcn0/",
    creator_handle: "@boasteakhouse",
    cooking_fat: "Beef Tallow",
    tags: ["seed-oil-free", "grass-fed"],
    caption_for_app: "First seed-oil-free steakhouse in US — Wagyu Cigars + 18oz ribeye",
    views: "11.1k",
    macros_text: "58g Protein",
    verified: true,
    eating_type: "creator carving 18oz ribeye",
    dish_name: "Wagyu Cigars & 18oz Prime Ribeye",
    thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },

  // AUSTIN, TX
  {
    id: "aus1",
    city: "Austin, TX",
    restaurant: "Oria",
    reel_url: "https://www.instagram.com/reel/DalxwZPD1DP/",
    creator_handle: "@austinfoodheads",
    cooking_fat: "Avocado Oil",
    tags: ["wood-fired", "seed-oil-free"],
    caption_for_app: "Charcoal + wood-fired Mediterranean — no seed oils",
    views: "8.9k",
    macros_text: "36g Protein",
    verified: true,
    eating_type: "creator dining wood-fired feast",
    dish_name: "Wood-Fired Mediterranean Lamb Kebab",
    thumbnail: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "aus2",
    city: "Austin, TX",
    restaurant: "Radius Butcher",
    reel_url: "https://www.instagram.com/reel/DZZFexhOU61/",
    creator_handle: "@radiusbutcher",
    cooking_fat: "Grass-Fed Ghee",
    tags: ["grass-fed", "non-toxic"],
    caption_for_app: "Healthiest grocery in America — founder left $10B tech — 100% grass-fed",
    views: "21.5k",
    macros_text: "48g Protein",
    verified: true,
    eating_type: "founder tasting grass-fed cut",
    dish_name: "100% Grass-Fed Ribeye Cast Iron Sear",
    thumbnail: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "aus3",
    city: "Austin, TX",
    restaurant: "The Well",
    reel_url: "https://www.instagram.com/reel/DW6tHeyjpPh/",
    creator_handle: "@eatwellatx",
    cooking_fat: "Cold-Pressed EVOO",
    tags: ["organic", "regenerative"],
    caption_for_app: "Blueprint for future dining — 100% organic, seed-oil-free",
    views: "12.3k",
    macros_text: "40g Protein",
    verified: true,
    eating_type: "creator reviewing organic dishes",
    dish_name: "Regenerative Salmon & Sweet Potato Bowl",
    thumbnail: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80"
  },

  // DENVER, CO
  {
    id: "den1",
    city: "Denver, CO",
    restaurant: "Just BE Kitchen",
    reel_url: "https://www.instagram.com/p/DcCW_wuGKbT/",
    creator_handle: "@justbekitchen",
    cooking_fat: "Grass-Fed Ghee",
    tags: ["gluten-free", "seed-oil-free"],
    caption_for_app: "America's first 100% gluten-free seed-oil-free fast casual",
    views: "6.7k",
    macros_text: "34g Protein",
    verified: true,
    eating_type: "creator tasting allergen-free meal",
    dish_name: "Grain-Free Chicken & Herb Dumplings",
    thumbnail: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "den2",
    city: "Denver, CO",
    restaurant: "True Food Kitchen",
    reel_url: "https://www.instagram.com/reel/DY2z3QMvVNp/",
    creator_handle: "@livetruefood",
    cooking_fat: "Avocado Oil",
    tags: ["seed-oil-free"],
    caption_for_app: "100% seed-oil-free chain — 46 locations",
    views: "4.2k",
    macros_text: "30g Protein",
    verified: true,
    eating_type: "creator tasting anti-inflammatory bowl",
    dish_name: "Anti-Inflammatory Teriyaki Quinoa Bowl",
    thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
  },

  // CHICAGO, IL
  {
    id: "chi1",
    city: "Chicago, IL",
    restaurant: "Fare Kitchen",
    reel_url: "https://www.instagram.com/reel/DQZkj-ajoq1/",
    creator_handle: "@farekitchen",
    cooking_fat: "Cold-Pressed EVOO",
    tags: ["seed-oil-free"],
    caption_for_app: "Seed Oil Free fast-casual — nutrition coach eating bowl",
    views: "3.1k",
    macros_text: "35g Protein",
    verified: true,
    eating_type: "nutrition coach eating bowl",
    dish_name: "Roasted Herb Chicken & Warm Greens Bowl",
    thumbnail: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "chi2",
    city: "Chicago, IL",
    restaurant: "Public Landing",
    reel_url: "https://www.instagram.com/reel/DXiKdPEARsj/",
    creator_handle: "@publiclanding",
    cooking_fat: "Avocado Oil",
    tags: ["real-food", "seed-oil-free"],
    caption_for_app: "Seed oil free. Real food only. Summer's coming.",
    views: "2.8k",
    macros_text: "31g Protein",
    verified: true,
    eating_type: "creator enjoying real food plate",
    dish_name: "Summer Real-Food Fire Plate",
    thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },

  // MIAMI, FL
  {
    id: "mia1",
    city: "Miami, FL",
    restaurant: "Pat & Phil",
    reel_url: "https://www.instagram.com/reel/DcOeXPCzUFB/",
    creator_handle: "@patandphil_doral",
    cooking_fat: "Avocado Oil",
    tags: ["grass-fed", "pasture-raised"],
    caption_for_app: "Miami's healthiest lunch under $25 — grass-fed burger, French toast sourdough + coconut milk",
    views: "8.9k",
    macros_text: "44g Protein",
    verified: true,
    eating_type: "creator reviewing grass-fed burger",
    dish_name: "Grass-Fed Smash Burger & Sourdough Toast",
    thumbnail: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },

  // SEATTLE, WA
  {
    id: "sea1",
    city: "Seattle, WA",
    restaurant: "Haps Burgers & Taps",
    reel_url: "https://www.instagram.com/reel/DaGcrb3v2Ib/",
    creator_handle: "@benjimantv",
    cooking_fat: "Beef Tallow",
    tags: ["grass-fed", "beef-tallow"],
    caption_for_app: "Best French fries because beef tallow — prefers grass-fed patties",
    views: "5.5k",
    macros_text: "40g Protein",
    verified: true,
    eating_type: "creator tasting tallow fries",
    dish_name: "Crispy Beef Tallow Fries & Double Smash",
    thumbnail: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sea2",
    city: "Seattle, WA",
    restaurant: "Sano",
    reel_url: "https://www.instagram.com/reel/DcjmAWbh9bu/",
    creator_handle: "@sano_kirkland",
    cooking_fat: "Cold-Pressed EVOO",
    tags: ["organic", "grass-fed", "no-seed-oils"],
    caption_for_app: "FOOD YOU CAN TRUST — Organic. Grass fed. No seed oils.",
    views: "2.9k",
    macros_text: "33g Protein",
    verified: true,
    eating_type: "creator reviewing clean table",
    dish_name: "Organic Mediterranean Bowl in EVOO",
    thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
  },

  // SAN DIEGO, CA
  {
    id: "sd1",
    city: "San Diego, CA",
    restaurant: "Pichudo Mexican Grill",
    reel_url: "https://www.instagram.com/reel/DZGdDoiBl_s/",
    creator_handle: "@minandchloe",
    cooking_fat: "Beef Tallow",
    tags: ["grass-fed", "beef-tallow"],
    caption_for_app: "Fries everything in beef tallow — grass-fed beef burrito, Oaxacan queso — 9.3/10",
    views: "11.4k",
    macros_text: "50g Protein",
    verified: true,
    eating_type: "creators eating tallow burrito at table",
    dish_name: "Tallow-Fried Grass-Fed Beef Burrito",
    thumbnail: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sd2",
    city: "San Diego, CA",
    restaurant: "Farm To Smash",
    reel_url: "https://www.facebook.com/reel/2068813210393247/",
    creator_handle: "@farmtosmash",
    cooking_fat: "Beef Tallow",
    tags: ["seed-oil-free", "grass-fed"],
    caption_for_app: "100% seed-oil free smash burgers — mukbang eating at table",
    views: "9.8k",
    macros_text: "46g Protein",
    verified: true,
    eating_type: "creator mukbang smash burger",
    dish_name: "Farm To Smash Tallow Double Burger",
    thumbnail: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sd3",
    city: "San Diego, CA",
    restaurant: "Goop Kitchen",
    reel_url: "https://www.instagram.com/reel/DcuKl7ZhgtF/",
    creator_handle: "@goopkitchen",
    cooking_fat: "Avocado Oil",
    tags: ["seed-oil-free"],
    caption_for_app: "Gwyneth Paltrow's first sit-down Goop Kitchen — seed-oil-free Del Mar",
    views: "13.2k",
    macros_text: "32g Protein",
    verified: true,
    eating_type: "creator touring sit-down Goop kitchen",
    dish_name: "Del Mar Sit-Down Avocado Herb Bowl",
    thumbnail: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sd4",
    city: "San Diego, CA",
    restaurant: "Van Man's",
    reel_url: "https://www.instagram.com/reel/DcuPbHSuHZe/",
    creator_handle: "@vanmans_sd",
    cooking_fat: "Beef Tallow",
    tags: ["grass-finished", "seed-oil-free"],
    caption_for_app: "Seed-oil free & grass-finished beef burger — eating review",
    views: "4.5k",
    macros_text: "45g Protein",
    verified: true,
    eating_type: "creator eating grass-finished burger",
    dish_name: "Van Man Grass-Finished Tallow Burger",
    thumbnail: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
  },

  // WASHINGTON, DC
  {
    id: "dc1",
    city: "Washington, DC",
    restaurant: "AMA",
    reel_url: "https://www.instagram.com/reel/DWeIp-DkceG/",
    creator_handle: "@morganstuphealth",
    cooking_fat: "Cold-Pressed EVOO",
    tags: ["seed-oil-free", "grass-fed"],
    caption_for_app: "The HEALTHIEST Restaurant in America — work from home + salmon + avocado toast",
    views: "6.1k",
    macros_text: "39g Protein",
    verified: true,
    eating_type: "creator working and eating salmon toast",
    dish_name: "Wild Salmon & Sourdough Avocado Toast",
    thumbnail: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dc2",
    city: "Washington, DC",
    restaurant: "Char'd",
    reel_url: "https://www.instagram.com/reel/Da3qjVFMSJZ/",
    creator_handle: "@alliegoneaway",
    cooking_fat: "Beef Tallow",
    tags: ["tallow-fried"],
    caption_for_app: "New burger joint 1409 T St NW — double cheeseburger + tallow fries",
    views: "7.8k",
    macros_text: "48g Protein",
    verified: true,
    eating_type: "creator eating double cheeseburger and fries",
    dish_name: "Double Cheeseburger & Tallow Fries",
    thumbnail: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  }
];

export const CITIES_LIST: { id: ReelCity; name: string; state: string }[] = [
  { id: "Austin, TX", name: "Austin", state: "TX" },
  { id: "New York, NY", name: "New York", state: "NY" },
  { id: "Los Angeles, CA", name: "Los Angeles", state: "CA" },
  { id: "San Francisco, CA", name: "San Francisco", state: "CA" },
  { id: "Miami, FL", name: "Miami", state: "FL" },
  { id: "Chicago, IL", name: "Chicago", state: "IL" },
  { id: "Denver, CO", name: "Denver", state: "CO" },
  { id: "Seattle, WA", name: "Seattle", state: "WA" },
  { id: "San Diego, CA", name: "San Diego", state: "CA" },
  { id: "Nashville, TN", name: "Nashville", state: "TN" },
  { id: "Washington, DC", name: "Washington", state: "DC" },
];

export function getEmbedUrl(reelUrl: string): string {
  if (reelUrl.includes("facebook.com")) {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
      reelUrl
    )}&show_text=0`;
  }
  const match = reelUrl.match(/\/(?:reel|p)\/([A-Za-z0-9_-]+)/);
  if (match && match[1]) {
    const type = reelUrl.includes("/p/") ? "p" : "reel";
    return `https://www.instagram.com/${type}/${match[1]}/embed/`;
  }
  return reelUrl;
}
