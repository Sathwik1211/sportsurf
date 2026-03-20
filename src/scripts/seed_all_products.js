const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();

async function main() {
  const filePath = "c:\\Users\\raika\\SPORTSURF\\src\\data\\products.ts";
  const fileContent = fs.readFileSync(filePath, "utf-8");
  
  // Extract products array
  const productsMatch = fileContent.match(/export const products\s*=\s*(\[[\s\S]*?\]);/);
  if (!productsMatch) {
    console.error("Could not find products array in products.ts");
    return;
  }

  const productsJson = productsMatch[1];
  let products = [];
  try {
    products = JSON.parse(productsJson);
  } catch (err) {
    console.error("JSON parse error:", err.message);
    return;
  }

  console.log(`Found ${products.length} products inside static files. Seeding...`);

  let count = 0;
  for (const p of products) {
    try {
      await prisma.product.upsert({
        where: { slug: p.slug },
        update: {},
        create: {
          slug: p.slug,
          name: p.name,
          category: p.category,
          shortSpec: p.shortSpec || "",
          description: p.description || "",
          isNew: p.isNew || false,
          isFeatured: p.isFeatured || false,
          heightClass: p.heightClass || "h-[400px]",
          imageUrl: p.images && p.images.length > 0 ? p.images[0] : null,
          specs: p.specs ? JSON.stringify(p.specs) : null,
        }
      });
      count++;
    } catch (err) {
      console.error(`Error on ${p.slug}:`, err.message);
    }
  }

  console.log(`Successfully seeded ${count} products into database!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
