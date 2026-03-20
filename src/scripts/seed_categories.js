const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const categories = [
  "Surface sports", 
  "Water sports", 
  "Small sports", 
  "Budget sports",
  "Sports academies", 
  "Play zones", 
  "Adventure sports games",
  "Challenge courses", 
  "Talent scout clubs"
];

async function main() {
  console.log("Seeding categories...");
  let count = 0;
  for (let i = 0; i < categories.length; i++) {
    const label = categories[i];
    try {
      await prisma.category.upsert({
        where: { label },
        update: {},
        create: { label, order: (i + 1) * 10 }
      });
      count++;
    } catch (err) {
      console.error(`Error seeding ${label}:`, err.message);
    }
  }
  console.log(`Successfully seeded ${count} categories into database!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
