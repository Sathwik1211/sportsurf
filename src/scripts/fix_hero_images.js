import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.hero.updateMany({
    where: { title: "FIFA Certified Football Turfs" },
    data: { imageUrl: "/images/hero_indian_arena.png" }
  });

  const all = await prisma.hero.findMany();
  for (const h of all) {
     await prisma.hero.update({
       where: { id: h.id },
       data: { imageUrl: "/images/hero_indian_arena.png" }
     });
  }

  console.log("✅ Updated all hero sections to use local verified images!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
