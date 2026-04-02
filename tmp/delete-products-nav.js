const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const deletedCount = await prisma.navigationItem.deleteMany({
    where: {
      label: {
        equals: 'Products',
        mode: 'insensitive'
      }
    }
  });
  console.log('Deleted nav items:', deletedCount);
  
  const items = await prisma.navigationItem.findMany({ orderBy: { order: "asc" } });
  console.log('Remaining nav items:', items.map(i => i.label));
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(() => prisma.$disconnect());
