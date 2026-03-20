const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const updates = [
  { label: "Surface sports", navbarIconUrl: "/images/sports/surface_sports.png", href: "/products?category=surface-sports", order: 10 },
  { label: "Water sports", navbarIconUrl: "/images/sports/water_sports.png", href: "/products?category=water-sports", order: 20 },
  { label: "Small sports", navbarIconUrl: "/images/sports/small_sports.png", href: "/products?category=small-sports", order: 30 },
  { label: "Budget sports", navbarIconUrl: "/images/sports/budget_sports.png", href: "/products?category=budget-sports", order: 40 },
  { label: "Sports academies", navbarIconUrl: "/images/sports/play_zones.png", href: "/products?category=sports-academies", order: 50 },
  { label: "Play zones", navbarIconUrl: "/images/sports/play_zones.png", href: "/products?category=play-zones", order: 60 },
  { label: "Adventure sports", navbarIconUrl: "/images/sports/adventure_sports.png", href: "/products?category=adventure-sports", order: 70 },
  { label: "Challenge courses", navbarIconUrl: "/images/sports/surface_sports.png", href: "/products?category=challenge-courses", order: 80 },
  { label: "Talent scout clubs", navbarIconUrl: "/images/sports/water_sports.png", href: "/products?category=talent-scout-clubs", order: 90 },
];

async function main() {
  console.log("Seeding Category items with Icons and Hrefs...");
  await prisma.category.deleteMany();
  for (const item of updates) {
    await prisma.category.create({ data: item });
  }
  console.log("Seeding complete!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
