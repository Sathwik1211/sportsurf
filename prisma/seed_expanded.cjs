const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const productsData = [
  // Surface Sports
  { slug: "football-turf", name: "Football Turf", category: "Surface sports", shortSpec: "FIFA Approved", description: "Premium professional football turf.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "tennis-court", name: "Tennis Court", category: "Surface sports", shortSpec: "All-Weather", description: "Acrylic multi-layer tennis court.", imageUrl: "/images/indian_complex_detail.png" },
  
  // Water Sports
  { slug: "swimming-pool-liner", name: "Pool Liner", category: "Water sports", shortSpec: "UV Resistant", description: "High-quality reinforced pool liners.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "water-polo-goals", name: "Water Polo Goals", category: "Water sports", shortSpec: "Floating", description: "Professional competition water polo goals.", imageUrl: "/images/sports/surface_sports.png" },

  // Small Sports
  { slug: "badminton-mat", name: "Badminton Mat", category: "Small sports", shortSpec: "BWF Standard", description: "Shock-absorbing synthetic badminton mats.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "table-tennis-pro", name: "Pro TT Table", category: "Small sports", shortSpec: "ITTF Approved", description: "International standard table tennis tables.", imageUrl: "/images/sports/surface_sports.png" },

  // Budget Sports
  { slug: "entry-synthetic-grass", name: "Economy Grass", category: "Budget sports", shortSpec: "Cost-Effective", description: "Balanced performance for community centers.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "basic-hoop-set", name: "Basic Basketball Hoop", category: "Budget sports", shortSpec: "Durable Steel", description: "Standard rim and net for schools.", imageUrl: "/images/sports/surface_sports.png" },

  // Sports Academies
  { slug: "training-cones-set", name: "Pro Training Set", category: "Sports academies", shortSpec: "Multi-Color", description: "Essential training equipment for academies.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "digital-scoreboard", name: "LED Scoreboard", category: "Sports academies", shortSpec: "Wireless Control", description: "High-visibility digital scoreboards.", imageUrl: "/images/sports/surface_sports.png" },

  // Play Zones
  { slug: "kids-climbing-wall", name: "Climbing Wall", category: "Play zones", shortSpec: "Safety Padded", description: "Adventure climbing walls for children.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "soft-play-area", name: "Soft Play Gym", category: "Play zones", shortSpec: "Toxic-Free", description: "Safe soft play environments for indoor zones.", imageUrl: "/images/sports/surface_sports.png" },

  // Adventure Sports
  { slug: "zipline-kit", name: "Zipline System", category: "Adventure sports games", shortSpec: "High Safety", description: "Full zipline infrastructure for adventure parks.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "high-ropes-course", name: "Ropes Course", category: "Adventure sports games", shortSpec: "Modular Design", description: "Challenging aerial ropes course elements.", imageUrl: "/images/sports/surface_sports.png" },

  // Challenge Courses
  { slug: "ninja-warrior-track", name: "Ninja Track", category: "Challenge courses", shortSpec: "Obstacle Racing", description: "Professional-grade ninja warrior obstacles.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "parkour-blocks", name: "Parkour Park", category: "Challenge courses", shortSpec: "Grip Surface", description: "Concrete and wooden blocks for parkour.", imageUrl: "/images/sports/surface_sports.png" },

  // Talent Scout Clubs
  { slug: "performance-tracker", name: "AI Scout Camera", category: "Talent scout clubs", shortSpec: "Auto-Tracking", description: "Smart cameras for player performance analysis.", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "scout-management-software", name: "Scout Platform", category: "Talent scout clubs", shortSpec: "Data Analytics", description: "Integrated platform for athlete talent discovery.", imageUrl: "/images/sports/surface_sports.png" },
];

async function main() {
  console.log("Expanding product database...");

  for (const p of productsData) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        category: p.category,
        imageUrl: p.imageUrl,
        shortSpec: p.shortSpec,
      },
      create: {
        ...p,
        isFeatured: true,
        isNew: false,
        heightClass: "h-[400px]",
        description: p.description
      },
    });
  }

  console.log("Successfully loaded products across all categories!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
