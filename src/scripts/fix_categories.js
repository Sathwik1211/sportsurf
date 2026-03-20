const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const correctCategories = [
  { label: "Surface sports", image: "/images/sports/surface_sports.png", desc: "Synthetic turf, running tracks & multi-sport courts" },
  { label: "Water sports", image: "/images/sports/water_sports.png", desc: "Kayaking lanes, pool decking & aquatic gear" },
  { label: "Small sports", image: "/images/sports/small_sports.png", desc: "Badminton, table tennis & squash setups" },
  { label: "Budget sports", image: "/images/sports/budget_sports.png", desc: "Cost-effective solutions for schools & communities" },
  { label: "Sports academies", image: "/images/sports/academic_campus.png", desc: "Coaching, university programs & athletic training" },
  { label: "Play zones", image: "/images/sports/play_zones.png", desc: "Premium children's play areas & soft surfaces" },
  { label: "Adventure sports", image: "/images/sports/adventure_sports.png", desc: "Climbing walls, rope courses & obstacle setups" },
  { label: "Challenge courses", image: "/images/sports/budget_sports.png", desc: "Dynamic team-building hurdles & tracks" },
  { label: "Talent scout clubs", image: "/images/sports/academic_campus.png", desc: "Guidance, matching & athlete onboarding" }
];

async function main() {
  console.log("Cleaning and resetting categories...");
  for (let i = 0; i < correctCategories.length; i++) {
    const item = correctCategories[i];
    await prisma.category.updateMany({
      where: { label: item.label },
      data: { imageUrl: item.image, description: item.desc, order: (i + 1) * 10 }
    });
  }
  console.log("Categories reset correctly!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
