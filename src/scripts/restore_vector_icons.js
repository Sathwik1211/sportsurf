const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Restoring default vector outline icons...");
  await prisma.category.updateMany({
    data: {
      navbarIconUrl: null, // Wipe the imageURLs
    }
  });
  console.log("Restoration complete!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
