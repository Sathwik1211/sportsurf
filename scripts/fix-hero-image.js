const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Fix home hero - set to use the committed local image instead of an upload path
  const homeHero = await prisma.heroSection.findFirst({ where: { page: "home" } });
  if (homeHero && homeHero.imageUrl && homeHero.imageUrl.startsWith("/uploads/")) {
    console.log(`Home hero currently uses: ${homeHero.imageUrl}`);
    console.log(`This file may not exist on Vercel. User should re-upload via Cloudinary.`);
    // Set to the static fallback image that is committed to git
    await prisma.heroSection.update({
      where: { id: homeHero.id },
      data: { imageUrl: "/images/hero_indian_arena.png" }
    });
    console.log("Home hero imageUrl reset to /images/hero_indian_arena.png");
  } else {
    console.log("Home hero:", homeHero?.imageUrl);
  }
  console.log("Done!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
