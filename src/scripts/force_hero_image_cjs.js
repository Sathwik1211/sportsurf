const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.heroSection.updateMany({
    data: { imageUrl: "/images/hero_indian_arena.png" }
  });
  console.log(`✅ Forced updated ${result.count} heroSection items to /images/hero_indian_arena.png`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
