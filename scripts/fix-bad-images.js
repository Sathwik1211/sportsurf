const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("\n=== HERO SECTIONS ===");
  const heroes = await prisma.heroSection.findMany();
  heroes.forEach(h => {
    console.log(`  Page: ${h.page} | imageUrl: ${h.imageUrl} | videoUrl: ${h.videoUrl}`);
  });

  console.log("\n=== CATEGORIES ===");
  const cats = await prisma.category.findMany({ select: { label: true, imageUrl: true } });
  cats.forEach(c => {
    console.log(`  ${c.label} | imageUrl: ${c.imageUrl}`);
  });

  // Fix: clear any imageUrls that reference /images/ files (which don't exist as full paths)
  console.log("\n=== FIXING BAD CATEGORY IMAGE URLS ===");
  const badCats = await prisma.category.findMany({
    where: { imageUrl: { contains: "/images/" } }
  });
  for (const cat of badCats) {
    console.log(`  Clearing bad imageUrl for category: ${cat.label} (was: ${cat.imageUrl})`);
    await prisma.category.update({
      where: { id: cat.id },
      data: { imageUrl: null }
    });
  }

  // Fix: clear hero images that are external bad URLs (not /uploads/ and not empty)
  console.log("\n=== FIXING BAD HERO IMAGE URLS ===");
  for (const hero of heroes) {
    const url = hero.imageUrl || "";
    const isBad = url.includes("/images/") || (url.startsWith("http") && !url.includes("unsplash") && !url.includes("cloudinary"));
    if (isBad) {
      console.log(`  Clearing bad hero imageUrl for page: ${hero.page} (was: ${url})`);
      await prisma.heroSection.update({
        where: { id: hero.id },
        data: { imageUrl: null }
      });
    }
  }

  console.log("\nDone!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
