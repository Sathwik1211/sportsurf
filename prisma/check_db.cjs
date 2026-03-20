const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function check() {
  const categories = await p.category.findMany({ orderBy: { order: 'asc' } });
  console.log('Categories count:', categories.length);
  console.log(JSON.stringify(categories, null, 2));
  await p.$disconnect();
}

check().catch(e => { console.error('Error:', e.message); process.exit(1); });
