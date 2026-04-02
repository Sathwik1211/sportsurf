import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('Fetching all database content...');

  const dbAll = {
    siteSettings: await prisma.siteSettings.findMany(),
    users: await prisma.user.findMany(),
    categories: await prisma.category.findMany(),
    subCategories: await prisma.subCategory.findMany(),
    products: await prisma.product.findMany(),
    projects: await prisma.project.findMany(),
    testimonials: await prisma.testimonial.findMany(),
    heroSections: await prisma.heroSection.findMany(),
    homepageGridItems: await prisma.homepageGridItem.findMany(),
    navigationItems: await prisma.navigationItem.findMany(),
    tickerUpdates: await prisma.tickerUpdate.findMany(),
    contactRequests: await prisma.contactRequest.findMany()
  };

  const outputPath = path.join(process.cwd(), 'database_content_dump.json');
  fs.writeFileSync(outputPath, JSON.stringify(dbAll, null, 2));

  console.log(`Successfully exported all database content to: ${outputPath}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
