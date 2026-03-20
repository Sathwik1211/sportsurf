const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const items = await prisma.category.findMany();
  console.log("Current Categories inside Database:");
  console.log(items.map(x => ` - ${x.label}`));
}

main().catch(console.error).finally(() => prisma.$disconnect());
