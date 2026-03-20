import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.updateMany({
    where: { emailVerified: null },
    data: { emailVerified: new Date() }
  });
  console.log(`✅ Updated ${users.count} users successfully!`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
