const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const featured = [
  { label: "Surface sports", desc: "Synthetic turf, running tracks & multi-sport courts", image: "/images/sports/surface_sports.png" },
  { label: "Water sports", desc: "Kayaking lanes, pool decking & aquatic gear", image: "/images/sports/water_sports.png" },
  { label: "Small sports", desc: "Badminton, table tennis & squash setups", image: "/images/sports/small_sports.png" },
  { label: "Budget sports", desc: "Cost-effective solutions for schools & communities", image: "/images/sports/budget_sports.png" },
  { label: "Adventure sports games", desc: "Climbing walls, rope courses & obstacle setups", image: "/images/sports/adventure_sports.png" },
  { label: "Play zones", desc: "Premium children's play areas & soft surfaces", image: "/images/sports/play_zones.png" }
];

async function main() {
  console.log("Updating category descriptions and images...");
  for (const item of featured) {
    await prisma.category.updateMany({
      where: { label: item.label },
      data: { description: item.desc, imageUrl: item.image }
    });
  }
  console.log("Updated category descriptions and images successfully!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
