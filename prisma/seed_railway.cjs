/**
 * seed_railway.cjs
 * Seeds Railway PostgreSQL with all content.
 * Run: node prisma/seed_railway.cjs
 */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const categories = [
  { id: "surface-sports",    label: "Surface sports",       href: "/products?category=surface-sports" },
  { id: "water-sports",      label: "Water sports",         href: "/products?category=water-sports" },
  { id: "small-sports",      label: "Small sports",         href: "/products?category=small-sports" },
  { id: "budget-sports",     label: "Budget sports",        href: "/products?category=budget-sports" },
  { id: "sports-academies",  label: "Sports academies",     href: "/products?category=sports-academies" },
  { id: "play-zones",        label: "Play zones",           href: "/products?category=play-zones" },
  { id: "adventure-sports",  label: "Adventure sports games", href: "/products?category=adventure-sports" },
  { id: "challenge-courses", label: "Challenge courses",    href: "/products?category=challenge-courses" },
  { id: "talent-scout-clubs",label: "Talent scout clubs",   href: "/products?category=talent-scout-clubs" },
];

const products = [
  // Surface Sports
  { slug: "football-turf",    name: "Football Turf",          category: "Surface sports",  shortSpec: "FIFA Approved",    description: "Premium professional football turf for stadiums and clubs.", imageUrl: "/images/sports/surface_sports.png", isFeatured: true },
  { slug: "tennis-court",     name: "Tennis Court",           category: "Surface sports",  shortSpec: "All-Weather",      description: "Acrylic multi-layer tennis court surface.", imageUrl: "/images/indian_complex_detail.png", isFeatured: true },
  { slug: "running-track",    name: "Running Track",          category: "Surface sports",  shortSpec: "IAAF Certified",   description: "Professional IAAF-certified polyurethane running track.", imageUrl: "/images/sports/surface_sports.png", isFeatured: true },
  { slug: "basketball-court", name: "Basketball Court",       category: "Surface sports",  shortSpec: "FIBA Standard",    description: "Indoor/outdoor basketball hardwood and acrylic courts.", imageUrl: "/images/basketball_court.png", isFeatured: true },
  // Water Sports
  { slug: "swimming-pool-liner",  name: "Pool Liner",       category: "Water sports",  shortSpec: "UV Resistant",   description: "High-quality reinforced pool liners.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "water-polo-goals",     name: "Water Polo Goals", category: "Water sports",  shortSpec: "Floating",       description: "Professional competition water polo goals.", imageUrl: "/images/sports/surface_sports.png" },
  // Small Sports
  { slug: "badminton-mat",    name: "Badminton Mat",  category: "Small sports", shortSpec: "BWF Standard",  description: "Shock-absorbing synthetic badminton mats.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "table-tennis-pro", name: "Pro TT Table",   category: "Small sports", shortSpec: "ITTF Approved", description: "International standard table tennis tables.", imageUrl: "/images/sports/surface_sports.png" },
  // Budget Sports
  { slug: "entry-synthetic-grass", name: "Economy Grass",         category: "Budget sports", shortSpec: "Cost-Effective", description: "Balanced performance for community centers.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "basic-hoop-set",        name: "Basic Basketball Hoop", category: "Budget sports", shortSpec: "Durable Steel",  description: "Standard rim and net for schools.", imageUrl: "/images/sports/surface_sports.png" },
  // Sports Academies
  { slug: "training-cones-set", name: "Pro Training Set", category: "Sports academies", shortSpec: "Multi-Color",     description: "Essential training equipment for academies.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "digital-scoreboard", name: "LED Scoreboard",   category: "Sports academies", shortSpec: "Wireless Control", description: "High-visibility digital scoreboards.", imageUrl: "/images/sports/surface_sports.png" },
  // Play Zones
  { slug: "kids-climbing-wall", name: "Climbing Wall", category: "Play zones", shortSpec: "Safety Padded", description: "Adventure climbing walls for children.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "soft-play-area",     name: "Soft Play Gym",  category: "Play zones", shortSpec: "Toxic-Free",    description: "Safe soft play environments for indoor zones.", imageUrl: "/images/sports/surface_sports.png" },
  // Adventure Sports
  { slug: "zipline-kit",       name: "Zipline System", category: "Adventure sports games", shortSpec: "High Safety",    description: "Full zipline infrastructure for adventure parks.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "high-ropes-course", name: "Ropes Course",   category: "Adventure sports games", shortSpec: "Modular Design", description: "Challenging aerial ropes course elements.", imageUrl: "/images/sports/surface_sports.png" },
  // Challenge Courses
  { slug: "ninja-warrior-track", name: "Ninja Track",  category: "Challenge courses", shortSpec: "Obstacle Racing", description: "Professional-grade ninja warrior obstacles.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "parkour-blocks",      name: "Parkour Park", category: "Challenge courses", shortSpec: "Grip Surface",    description: "Concrete and wooden blocks for parkour.", imageUrl: "/images/sports/surface_sports.png" },
  // Talent Scout Clubs
  { slug: "performance-tracker",       name: "AI Scout Camera", category: "Talent scout clubs", shortSpec: "Auto-Tracking",  description: "Smart cameras for player performance analysis.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "scout-management-software", name: "Scout Platform",  category: "Talent scout clubs", shortSpec: "Data Analytics", description: "Integrated platform for athlete talent discovery.", imageUrl: "/images/sports/surface_sports.png" },
];

const projects = [
  { name: "Delhi Football Academy",  city: "New Delhi",  state: "Delhi",       surface: "FIFA Pro Turf",    area: "7,200 sq ft",  year: "2024", imageUrl: "/images/indian_complex_detail.png", isFeatured: true },
  { name: "Mumbai Sports Complex",   city: "Mumbai",     state: "Maharashtra", surface: "Multi-Sport Court",area: "15,000 sq ft", year: "2024", imageUrl: "/images/basketball_court.png", isFeatured: true },
  { name: "Bangalore Tennis Club",   city: "Bangalore",  state: "Karnataka",   surface: "Acrylic Court",    area: "4,500 sq ft",  year: "2023", imageUrl: "/images/indian_complex_detail.png", isFeatured: true },
  { name: "Chennai Athletics Track", city: "Chennai",    state: "Tamil Nadu",  surface: "IAAF Track",       area: "9,800 sq ft",  year: "2023", imageUrl: "/images/sports/surface_sports.png", isFeatured: false },
  { name: "Hyderabad Play Zone",     city: "Hyderabad",  state: "Telangana",   surface: "Soft Play",        area: "3,000 sq ft",  year: "2024", imageUrl: "/images/sports/play_zones.png", isFeatured: false },
];

// Note: Testimonial model uses institution + quote (not role/content)
const testimonials = [
  { name: "Rajesh Kumar", institution: "Sports Director, Delhi FA",   quote: "SportSURF delivered an exceptional FIFA-quality pitch. Outstanding professionalism.", order: 1 },
  { name: "Priya Sharma", institution: "CEO, Mumbai Sports Complex",  quote: "The multi-sport facility they built has transformed our membership. Everyone loves it.", order: 2 },
  { name: "Arun Mehta",   institution: "Athletics Coach, Tamil Nadu", quote: "The IAAF-certified track is amazing. Our athletes have already set new personal bests.", order: 3 },
  { name: "Sunita Reddy", institution: "Principal, DPS Hyderabad",   quote: "Our school play zone is beyond expectations. Safe, vibrant, and kids love it!", order: 4 },
];

const tickerItems = [
  { text: "Free site visit & consultation across India", order: 1 },
  { text: "ISO 9001:2015 Certified Company", order: 2 },
  { text: "FLAT 10% OFF on first project — Limited time!", order: 3 },
  { text: "Premium Sports Surfaces & Equipment — Pan India", order: 4 },
  { text: "500+ Projects Delivered Across 20 States", order: 5 },
];

async function main() {
  console.log("🌱 Seeding Railway database...\n");

  // Categories
  console.log(`📦 Inserting ${categories.length} categories...`);
  for (const cat of categories) {
    await prisma.category.upsert({ where: { id: cat.id }, update: cat, create: cat });
  }
  console.log("   ✅ Categories done.\n");

  // Products
  console.log(`🏐 Inserting ${products.length} products...`);
  for (const p of products) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: p,
      create: { ...p, isNew: false, heightClass: "h-[400px]" },
    });
  }
  console.log("   ✅ Products done.\n");

  // Projects
  console.log(`🏗️  Inserting ${projects.length} projects...`);
  for (const proj of projects) {
    try { await prisma.project.create({ data: proj }); } catch (e) { /* skip duplicate */ }
  }
  console.log("   ✅ Projects done.\n");

  // Testimonials
  console.log(`💬 Inserting ${testimonials.length} testimonials...`);
  await prisma.testimonial.deleteMany({});
  for (const t of testimonials) {
    await prisma.testimonial.create({ data: t });
  }
  console.log("   ✅ Testimonials done.\n");

  // Ticker
  console.log(`📰 Inserting ${tickerItems.length} ticker updates...`);
  await prisma.tickerUpdate.deleteMany({});
  for (const tk of tickerItems) {
    await prisma.tickerUpdate.create({ data: tk });
  }
  console.log("   ✅ Ticker done.\n");

  // Site Settings
  console.log("⚙️  Inserting site settings...");
  await prisma.siteSettings.upsert({
    where: { id: "global" },
    update: {},
    create: {
      id: "global",
      siteName: "SportSURF",
      showCategoryBar: true,
      showTicker: true,
      ctaTitle: "Ready to Build Your Dream Sports Facility?",
      ctaSubtitle: "Get a free consultation and site visit across India.",
      ctaButton: "REQUEST FREE ESTIMATE",
      ctaLink: "/contact",
    },
  });
  console.log("   ✅ Settings done.\n");

  console.log("🎉 Railway database fully seeded and ready!");
}

main()
  .catch((e) => { console.error("❌ Error:", e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
