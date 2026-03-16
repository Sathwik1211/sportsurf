const fs = require('fs');

const categories = [
  { id: "surface-sports", label: "Surface sports" },
  { id: "water-sports", label: "Water sports" },
  { id: "small-sports", label: "Small sports" },
  { id: "budget-sports", label: "Budget sports" },
  { id: "sports-academies", label: "Sports academies" },
  { id: "play-zones", label: "Play zones" },
  { id: "adventure-sports", label: "Adventure sports games" },
  { id: "challenge-courses", label: "Challenge courses" },
  { id: "talent-scout", label: "Talent scout clubs" },
];

const subSportsMap = {
  "surface-sports": ["Football Turf", "Hockey Surface", "Tennis Court", "Athletics Track", "Multi-Sport Court", "Volleyball Court", "Netball Surface", "Kabaddi Mat", "Handball Court", "Rugby Turf"],
  "water-sports": ["Swimming Pool Blocks", "Diving Boards", "Water Polo Nets", "Pool Lane Ropes", "Aquafitness Equipment", "Starting Platforms", "Pool Timing Systems", "Water Slide Surfaces", "Surf Pool Waves", "Kayaking Simulator"],
  "small-sports": ["Table Tennis", "Badminton", "Squash", "Billiards", "Foosball", "Pickleball", "Darts Board", "Carrom", "Chess Mats", "Arm Wrestling Table"],
  "budget-sports": ["Cricket Nets", "Basic Outdoor Gym", "Gully Cricket Pitch", "Basketball Hoop", "Football Goal Post", "Volleyball Net", "Tug of War Rope", "Basic Track", "Kho-Kho Posts", "Jump Rope Arena"],
  "sports-academies": ["Cricket Academy Setup", "Football Academy Arena", "Tennis Academy Courts", "Badminton Academy", "Swimming Academy", "Athletics Academy Track", "Gymnastics Hall", "Wrestling Ring", "Boxing Ring", "Weightlifting Area"],
  "play-zones": ["Kids Soft Play", "Outdoor Playground", "Trampoline Park", "Sandpit Area", "Swing Set", "Slide Complex", "See-Saw Zone", "Climbing Frame", "Merry-Go-Round", "Splash Pad"],
  "adventure-sports": ["Rock Climbing Wall", "Zip Line", "Ropes Course", "Bungee Trampoline", "Skate Park", "Parkour Setup", "Archery Range", "Shooting Range", "BMX Track", "Paintball Arena"],
  "challenge-courses": ["Ninja Warrior Course", "Military Obstacle", "Mud Run Track", "Commando Net", "Tire Run", "Wall Climb", "Balance Beam", "Monkey Bars", "Rope Climb", "Cargo Net"],
  "talent-scout": ["Performance Testing Setup", "Video Analytics Room", "Combine Testing Turf", "Biomechanics Lab", "Scouting Pitch", "Speed Track", "Agility Grid", "Reflex Testing", "Jump Measurement", "Tactical Board Room"]
};

const categoryImagesMap = {
  "surface-sports": [
    "/images/sports/surface_sports.png",
    "/images/turf_texture.png",
    "/images/indian_complex_detail.png"
  ],
  "water-sports": [
    "/images/sports/water_sports.png",
  ],
  "small-sports": [
    "/images/sports/small_sports.png",
  ],
  "budget-sports": [
    "/images/basketball_court.png",
  ],
  "sports-academies": [
    "/images/sports/premium_sports_hero.png",
    "/images/indian_complex_detail.png"
  ],
  "play-zones": [
    "/images/sports/play_zones.png",
  ],
  "adventure-sports": [
    "/images/sports/adventure_sports.png",
  ],
  "challenge-courses": [
    "/images/turf_texture.png",
    "/images/sports/adventure_sports.png"
  ],
  "talent-scout": [
    "/images/basketball_court.png",
    "/images/indian_complex_detail.png"
  ]
};

// Fallback pool in case above runs out or we need variety
const allImages = [
    "/images/sports/surface_sports.png",
    "/images/sports/water_sports.png",
    "/images/sports/small_sports.png",
    "/images/sports/adventure_sports.png",
    "/images/sports/play_zones.png",
    "/images/sports/premium_sports_hero.png",
    "/images/turf_texture.png",
    "/images/indian_complex_detail.png",
    "/images/basketball_court.png"
];

let products = [];
let idCounter = 1;

for (let cat of categories) {
  let sports = subSportsMap[cat.id];
  for (let i = 0; i < sports.length; i++) {
    let sport = sports[i];
    let slug = sport.toLowerCase().replace(/ /g, "-");
    
    let imagesPool = categoryImagesMap[cat.id] && categoryImagesMap[cat.id].length > 0 
                     ? categoryImagesMap[cat.id] 
                     : allImages;
    let imageUrl = imagesPool[i % imagesPool.length];

    // Create realistic card data
    products.push({
      id: idCounter.toString(),
      slug: slug,
      name: sport,
      category: cat.id,
      shortSpec: cat.label + " Infrastructure",
      description: "Complete and premium setup for " + sport + " customized for maximum performance and durability.",
      specs: [
        { label: "Category", value: cat.label },
        { label: "Design", value: "Custom" }
      ],
      images: [imageUrl],
      isNew: (i % 3 === 0),
      isFeatured: (i % 4 === 0),
      heightClass: ['h-[300px]', 'h-[400px]', 'h-[450px]', 'h-[500px]'][i % 4]
    });
    idCounter++;
  }
}

const fileContent = "export const products = " + JSON.stringify(products, null, 2) + ";\n" +
"\n" +
"export const categories = [\n" +
"  { id: 'surface-sports', label: 'Surface sports', count: 10, icon: 'layers', description: 'Premium sports surfaces for multiple applications.', image: '/images/sports/surface_sports.png' },\n" +
"  { id: 'water-sports', label: 'Water sports', count: 10, icon: 'droplet', description: 'Infrastructure and equipment for water-based activities.', image: '/images/sports/water_sports.png' },\n" +
"  { id: 'small-sports', label: 'Small sports', count: 10, icon: 'circle', description: 'Facilities for table tennis, badminton, and other small sports.', image: '/images/sports/small_sports.png' },\n" +
"  { id: 'budget-sports', label: 'Budget sports', count: 10, icon: 'tag', description: 'Cost-effective sports solutions for constrained budgets.', image: '/images/basketball_court.png' },\n" +
"  { id: 'sports-academies', label: 'Sports academies', count: 10, icon: 'home', description: 'Complete setups for professional sports academies.', image: '/images/sports/premium_sports_hero.png' },\n" +
"  { id: 'play-zones', label: 'Play zones', count: 10, icon: 'smile', description: 'Safe and engaging play areas for children and communities.', image: '/images/sports/play_zones.png' },\n" +
"  { id: 'adventure-sports', label: 'Adventure sports games', count: 10, icon: 'mountain', description: 'Thrilling setups for adventure sports and climbing.', image: '/images/sports/adventure_sports.png' },\n" +
"  { id: 'challenge-courses', label: 'Challenge courses', count: 10, icon: 'flag', description: 'Obstacle and challenge courses for physical training.', image: '/images/turf_texture.png' },\n" +
"  { id: 'talent-scout', label: 'Talent scout clubs', count: 10, icon: 'users', description: 'Infrastructure tailored for talent identification and development.', image: '/images/indian_complex_detail.png' },\n" +
"];\n";

fs.writeFileSync('src/data/products.ts', fileContent);
console.log('Done replacing products.ts with realistic images');
