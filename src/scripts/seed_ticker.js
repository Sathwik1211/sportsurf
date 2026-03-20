const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const items = [
  "FREE SITE VISIT & CONSULTATION ACROSS INDIA",
  "ISO 9001:2015 CERTIFIED",
  "FLAT 10% OFF ON FIRST PROJECT",
  "PREMIUM SPORTS SURFACES & EQUIPMENT"
];

async function main() {
  console.log("Seeding ticker items...");
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    const text = items[i];
    await prisma.tickerUpdate.create({
      data: { text, order: (i + 1) * 10 }
    });
    count++;
  }
  console.log(`Successfully seeded ${count} ticker items into database!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
