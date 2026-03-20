import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.project.updateMany({
    where: { name: "Global Stadium" },
    data: { imageUrl: "/images/project_1.png" }
  });

  await prisma.project.updateMany({
    where: { name: "Royal Academy" },
    data: { imageUrl: "/images/project_2.png" }
  });

  console.log("✅ Updated projects to use local verified images!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
