const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Starting Grand Seeder for SPORTSURF...");

  // 1. Navigation Menu
  console.log(" - Seeding Navigation Menu...");
  await prisma.navigationItem.deleteMany();
  await prisma.navigationItem.createMany({
    data: [
      { label: "Products", href: "/products", order: 10 },
      { label: "Projects", href: "/projects", order: 20 },
      { label: "About Us", href: "/about", order: 30 },
      { label: "Contact", href: "/contact", order: 40 },
    ]
  });

  // 2. Announcement Ticker
  console.log(" - Seeding Announcement Ticker...");
  await prisma.tickerUpdate.deleteMany();
  await prisma.tickerUpdate.createMany({
    data: [
      { text: "ISO 9001:2015 Certified Sports Infrastructure Provider", order: 10 },
      { text: "Free Site Visit & Expert Consultation Across India", order: 20 },
      { text: "Up to 10% Discount on First Commercial Turf Project", order: 30 },
    ]
  });

  // 3. Hero Sections
  console.log(" - Seeding Hero Sliders...");
  await prisma.heroSection.deleteMany();
  await prisma.heroSection.create({
    data: {
      page: "home",
      title: "FIFA Certified Football Turfs",
      subtitle: "Premium Synthetic Grass & Athletic Running Tracks",
      imageUrl: "https://images.unsplash.com/photo-1540742642149-c1432f78be62?q=80&w=2070",
      ctaText: "Get A Quote",
      ctaLink: "/contact",
    }
  });

  // 4. Products
  console.log(" - Seeding Products...");
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data: [
      { slug: "synthetic-grass-50mm", name: "Synthetic Grass 50mm", description: "FIFA Standard football turf with shockpad layout", category: "Surface sports", imageUrl: "https://images.unsplash.com/photo-1533560904424-a0c61dc306fe?w=400" },
      { slug: "acrylic-sports-coating", name: "Acrylic Sports Coating", description: "8-layer shock absorbing outdoor multi-court paint", category: "Surface sports", imageUrl: "https://images.unsplash.com/photo-1546519638-68e109428239?w=400" },
      { slug: "pu-indoor-decking", name: "PU Indoor Decking", description: "Premium wooden hybrid indoor basketball & gym flooring", category: "Small sports", imageUrl: "https://images.unsplash.com/photo-1574629810990-58b64e4031ae?w=400" },
    ]
  });

  // 5. Projects
  console.log(" - Seeding Projects...");
  await prisma.project.deleteMany();
  await prisma.project.createMany({
    data: [
      { name: "Global Stadium", city: "Mumbai", state: "Maharashtra", surface: "Football Turf", area: "80,000 sq ft", year: "2024", isFeatured: true, imageUrl: "https://images.unsplash.com/photo-1540742642149-c1432f78be62?w=500" },
      { name: "Royal Academy", city: "Bangalore", state: "Karnataka", surface: "Acrylic Basketball", area: "12,000 sq ft", year: "2025", isFeatured: true, imageUrl: "https://images.unsplash.com/photo-1546519638-68e109428239?w=500" },
    ]
  });

  // 6. Testimonials
  console.log(" - Seeding Testimonials...");
  await prisma.testimonial.deleteMany();
  await prisma.testimonial.createMany({
    data: [
      { name: "Rahul Sharma", institution: "DPS", quote: "SPORTSURF transformed our school playground. The turf quality is outstanding with fantastic support.", order: 10 },
      { name: "Vikram Reddy", institution: "Elevate Arena", quote: "Professional team and flawless execution. Our commercial yields jumped 40% after the upgrade.", order: 20 },
    ]
  });

  console.log("✅ Grand Seeding Complete!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
