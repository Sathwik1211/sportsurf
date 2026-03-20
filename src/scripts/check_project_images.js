import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const projects = await prisma.project.findMany();
  console.log("📂 Database Projects:");
  projects.forEach(p => {
    console.log(`- ${p.name}: imageUrl = ${p.imageUrl}`);
  });
}

main().catch(console.error).finally(() => prisma.$disconnect());
