const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Fixing categories with exact includes mappings...");
  const cats = await prisma.category.findMany();
  for (const cat of cats) {
    let img = "";
    if (cat.label.includes("Surface")) img = "/images/sports/surface_sports.png";
    else if (cat.label.includes("Water")) img = "/images/sports/water_sports.png";
    else if (cat.label.includes("Small")) img = "/images/sports/small_sports.png";
    else if (cat.label.includes("Budget")) img = "/images/sports/budget_sports.png";
    else if (cat.label.includes("academies")) img = "/images/sports/academic_campus.png";
    else if (cat.label.includes("Play")) img = "/images/sports/play_zones.png";
    else if (cat.label.includes("Adventure")) img = "/images/sports/adventure_sports.png";
    else if (cat.label.includes("Challenge")) img = "/images/sports/budget_sports.png";
    else if (cat.label.includes("Talent")) img = "/images/sports/academic_campus.png";

    if (img) {
      await prisma.category.update({
        where: { id: cat.id },
        data: { imageUrl: img }
      });
      console.log(`Updated ${cat.label} to ${img}`);
    } else {
      console.log(`No match for ${cat.label}`);
    }
  }
  console.log("Categories fixed!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
