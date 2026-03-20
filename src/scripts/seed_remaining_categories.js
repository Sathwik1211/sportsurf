const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const unseeded = [
  { label: "Sports academies", image: "/images/sports/sports_academies.png", desc: "Coaching, talent programs & training facilities" },
  { label: "Adventure sports", image: "/images/sports/adventure_sports.png", desc: "Climbing walls, rope courses & obstacle setups" },
  { label: "Challenge courses", image: "/images/sports/challenge_courses.png", desc: "Dynamic team-building & fitness paths" },
  { label: "Talent scout clubs", image: "/images/sports/talent_scout.png", desc: "Guidance, matching & athlete onboarding" }
];

async function main() {
  console.log("Updating remaining category images...");
  for (const item of unseeded) {
    await prisma.category.updateMany({
      where: { label: { contains: item.label.split(" ")[0] } }, // Match starting word
      data: { imageUrl: item.image, description: item.desc }
    });
  }
  console.log("Updated remaining images successfully!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
