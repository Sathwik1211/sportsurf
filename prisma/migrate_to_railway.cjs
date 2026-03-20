/**
 * migrate_to_railway.cjs
 * Exports ALL data from local SQLite dev.db and upserts into Railway PostgreSQL.
 * Run with: node prisma/migrate_to_railway.cjs
 */

const { PrismaClient } = require("@prisma/client");

// Source: local SQLite
const localPrisma = new PrismaClient({
  datasources: { db: { url: "file:./prisma/dev.db" } },
});

// Destination: Railway PostgreSQL (reads from current .env DATABASE_URL)
const railwayPrisma = new PrismaClient();

async function migrate() {
  console.log("🚀 Starting migration from SQLite → Railway PostgreSQL...\n");

  try {
    // 1. Categories
    const categories = await localPrisma.category.findMany();
    console.log(`📦 Migrating ${categories.length} categories...`);
    for (const cat of categories) {
      await railwayPrisma.category.upsert({
        where: { id: cat.id },
        update: cat,
        create: cat,
      });
    }
    console.log(`   ✅ Categories done.\n`);

    // 2. Products
    const products = await localPrisma.product.findMany();
    console.log(`🏐 Migrating ${products.length} products...`);
    for (const p of products) {
      await railwayPrisma.product.upsert({
        where: { slug: p.slug },
        update: p,
        create: p,
      });
    }
    console.log(`   ✅ Products done.\n`);

    // 3. Projects
    const projects = await localPrisma.project.findMany();
    console.log(`🏗️  Migrating ${projects.length} projects...`);
    for (const proj of projects) {
      await railwayPrisma.project.upsert({
        where: { id: proj.id },
        update: proj,
        create: proj,
      });
    }
    console.log(`   ✅ Projects done.\n`);

    // 4. Testimonials
    const testimonials = await localPrisma.testimonial.findMany();
    console.log(`💬 Migrating ${testimonials.length} testimonials...`);
    for (const t of testimonials) {
      await railwayPrisma.testimonial.upsert({
        where: { id: t.id },
        update: t,
        create: t,
      });
    }
    console.log(`   ✅ Testimonials done.\n`);

    // 5. Hero Sections
    const heroes = await localPrisma.heroSection.findMany();
    console.log(`🦸 Migrating ${heroes.length} hero sections...`);
    for (const h of heroes) {
      await railwayPrisma.heroSection.upsert({
        where: { id: h.id },
        update: h,
        create: h,
      });
    }
    console.log(`   ✅ Hero sections done.\n`);

    // 6. Homepage Grid Items
    const gridItems = await localPrisma.homepageGridItem.findMany();
    console.log(`🖼️  Migrating ${gridItems.length} homepage grid items...`);
    for (const g of gridItems) {
      await railwayPrisma.homepageGridItem.upsert({
        where: { id: g.id },
        update: g,
        create: g,
      });
    }
    console.log(`   ✅ Homepage grid done.\n`);

    // 7. Ticker Updates
    const tickers = await localPrisma.tickerUpdate.findMany();
    console.log(`📰 Migrating ${tickers.length} ticker updates...`);
    for (const tk of tickers) {
      await railwayPrisma.tickerUpdate.upsert({
        where: { id: tk.id },
        update: tk,
        create: tk,
      });
    }
    console.log(`   ✅ Ticker updates done.\n`);

    // 8. Navigation
    const navItems = await localPrisma.navigationItem.findMany();
    console.log(`🧭 Migrating ${navItems.length} navigation items...`);
    for (const nav of navItems) {
      await railwayPrisma.navigationItem.upsert({
        where: { id: nav.id },
        update: nav,
        create: nav,
      });
    }
    console.log(`   ✅ Navigation done.\n`);

    // 9. Site Settings
    const settings = await localPrisma.siteSettings.findFirst();
    if (settings) {
      console.log(`⚙️  Migrating site settings...`);
      await railwayPrisma.siteSettings.upsert({
        where: { id: settings.id || "global" },
        update: settings,
        create: settings,
      });
      console.log(`   ✅ Settings done.\n`);
    }

    // 10. Users (skip passwords — keep admin only)
    const users = await localPrisma.user.findMany();
    console.log(`👤 Migrating ${users.length} users...`);
    for (const u of users) {
      await railwayPrisma.user.upsert({
        where: { email: u.email },
        update: { name: u.name, role: u.role },
        create: u,
      });
    }
    console.log(`   ✅ Users done.\n`);

    console.log("🎉 Migration complete! Your Railway database is now fully populated.");
  } catch (err) {
    console.error("❌ Migration error:", err.message);
    console.error(err);
    process.exit(1);
  } finally {
    await localPrisma.$disconnect();
    await railwayPrisma.$disconnect();
  }
}

migrate();
