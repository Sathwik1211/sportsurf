import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const heroes = await prisma.hero.findMany();
  console.log("📂 Database Hero Sections:");
  heroes.forEach(h => {
    console.log(`- ${h.title}: imageUrl = ${h.imageUrl}`);
  });
}

main().catch(console.error).finally(() => prisma.$disconnect());
