const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Site Settings...");
  await prisma.siteSettings.deleteMany();
  await prisma.siteSettings.create({
    data: {
      siteName: "SPORTSURF",
      primaryColor: "#f59e0b",
      secondaryColor: "#1e293b",
      fontHeading: "Inter",
      fontBody: "Inter",
      contactEmail: "info@sportsurf.in",
      contactPhone: "+91 9966109191",
      showCategoryBar: true,
      showTicker: true,
    }
  });
  console.log("Settings seeded!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
