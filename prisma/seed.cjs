// CommonJS seed script to avoid ESM issues with Prisma 7
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const products = [
  { slug: "football-turf", name: "Football Turf", category: "surface-sports", shortSpec: "Surface sports Infrastructure", description: "Premium Football Turf with FIFA-approved specifications.", isNew: true, isFeatured: true, heightClass: "h-[300px]", imageUrl: "/images/sports/surface_sports.png" },
  { slug: "tennis-court", name: "Tennis Court", category: "surface-sports", shortSpec: "Surface sports Infrastructure", description: "Professional Tennis Court solutions for competitive play.", isNew: false, isFeatured: true, heightClass: "h-[400px]", imageUrl: "/images/indian_complex_detail.png" },
  { slug: "basketball-court", name: "Basketball Court", category: "surface-sports", shortSpec: "FIBA Approved Flooring", description: "Professional basketball courts for schools and clubs.", isNew: false, isFeatured: false, heightClass: "h-[350px]", imageUrl: "/images/sports/surface_sports.png" },
];

async function main() {
  console.log("Seeding database...");

  // Site Settings
  await prisma.siteSettings.upsert({
    where: { id: "global" },
    update: {},
    create: { id: "global", siteName: "SPORTSURF", primaryColor: "#f59e0b", secondaryColor: "#1e293b", fontHeading: "Inter", fontBody: "Inter", contactEmail: "info@sportsurf.in", contactPhone: "+91 98765 43210" },
  });

  // Navigation
  const existingNav = await prisma.navigationItem.count();
  if (existingNav === 0) {
    const navItems = [
      { label: "Home", href: "/", order: 1 },
      { label: "Products", href: "/products", order: 2 },
      { label: "Projects", href: "/projects", order: 3 },
      { label: "About Us", href: "/about", order: 4 },
      { label: "Contact", href: "/contact", order: 5 },
    ];
    for (const item of navItems) await prisma.navigationItem.create({ data: item });
  }

  // Products
  for (const p of products) {
    await prisma.product.upsert({ where: { slug: p.slug }, update: {}, create: p });
  }

  // Projects
  const existingProjects = await prisma.project.count();
  if (existingProjects === 0) {
    await prisma.project.create({ data: { name: "Delhi Public School Sports Complex", city: "New Delhi", state: "Delhi", surface: "Synthetic Turf", area: "8,400 sqm", year: "2023", imageUrl: "/images/project_1.png" } });
    await prisma.project.create({ data: { name: "St. Xavier's International Arena", city: "Mumbai", state: "Maharashtra", surface: "Running Track", area: "4,200 sqm", year: "2022", imageUrl: "/images/project_2.png" } });
    await prisma.project.create({ data: { name: "Lalit Modi Stadium Refurbishment", city: "Bangalore", state: "Karnataka", surface: "Multi-Sport Flooring", area: "12,000 sqm", year: "2024", imageUrl: "/images/indian_urban_turf.png" } });
  }

  // Testimonials
  const existingT = await prisma.testimonial.count();
  if (existingT === 0) {
    await prisma.testimonial.create({ data: { name: "Dr. Arvind Kumar", institution: "Director, DPS Global", quote: "SportSurf Antigravity transformed our campus.", avatar: "AK", order: 1 } });
    await prisma.testimonial.create({ data: { name: "Sarah Mehra", institution: "Sports Coordinator, Heritage School", quote: "The quality of the synthetic turf is world-class.", avatar: "SM", order: 2 } });
  }

  // Hero
  await prisma.heroSection.upsert({
    where: { page: "home" },
    update: {},
    create: { page: "home", title: "YOUR COMPLETE GUIDE TO SPORTS INFRASTRUCTURE", subtitle: "SURFACES + EQUIPMENT", imageUrl: "/images/sports/premium_sports_hero.png", ctaText: "EXPLORE SOLUTIONS", ctaLink: "/products" },
  });

  console.log("Seed complete!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
