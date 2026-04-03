const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.category.count();
  const products = await prisma.product.count();
  const heroes = await prisma.heroSection.count();
  
  console.log(`Verifying Database Contents:`);
  console.log(` - Categories: ${categories}`);
  console.log(` - Products: ${products}`);
  console.log(` - Heroes: ${heroes}`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
