/**
 * seed_grid.cjs
 * Seeds the HomepageGridItem table for the portfolio grid section.
 * Run: node prisma/seed_grid.cjs
 */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const gridItems = [
  {
    label: "Surface sports",
    description: "Synthetic turf, running tracks & multi-sport courts",
    imageUrl: "/images/sports/surface_sports.png",
    href: "/products?category=surface-sports",
    order: 1,
  },
  {
    label: "Water sports",
    description: "Kayaking lanes, pool decking & aquatic gear",
    imageUrl: "/images/sports/water_sports.png",
    href: "/products?category=water-sports",
    order: 2,
  },
  {
    label: "Small sports",
    description: "Badminton, table tennis & squash setups",
    imageUrl: "/images/sports/small_sports.png",
    href: "/products?category=small-sports",
    order: 3,
  },
  {
    label: "Budget sports",
    description: "Cost-effective solutions for schools & communities",
    imageUrl: "/images/sports/budget_sports.png",
    href: "/products?category=budget-sports",
    order: 4,
  },
  {
    label: "Adventure sports games",
    description: "Climbing walls, rope courses & obstacle setups",
    imageUrl: "/images/sports/adventure_sports.png",
    href: "/products?category=adventure-sports",
    order: 5,
  },
  {
    label: "Play zones",
    description: "Premium children play areas & soft surfaces",
    imageUrl: "/images/sports/play_zones.png",
    href: "/products?category=play-zones",
    order: 6,
  },
];

async function main() {
  console.log("🖼️  Seeding homepage grid items...\n");

  for (const item of gridItems) {
    await prisma.homepageGridItem.upsert({
      where: { label: item.label },
      update: item,
      create: item,
    });
    console.log(`   ✅ ${item.label}`);
  }

  console.log("\n🎉 Homepage grid populated! The portfolio section will now show all categories.");
}

main()
  .catch((e) => { console.error("❌ Error:", e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
