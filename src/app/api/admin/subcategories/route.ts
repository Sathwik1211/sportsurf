import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { verifyAdminToken } from "@/lib/admin-auth";

async function checkAdmin() {
  const token = (await cookies()).get("admin_token")?.value;
  return token ? verifyAdminToken(token) : false;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId");

  const subCategories = await prisma.subCategory.findMany({
    where: categoryId ? { categoryId } : {},
    include: { category: true },
    orderBy: { order: "asc" },
  });
  return NextResponse.json(subCategories);
}

export async function POST(req: NextRequest) {
  if (!(await checkAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { name, categoryId, order } = await req.json();
  
  if (!name || !categoryId) return NextResponse.json({ error: "Name and Category ID required" }, { status: 400 });

  try {
    const subCategory = await prisma.subCategory.create({
      data: { name, categoryId, order: parseInt(order) || 0 },
    });
    return NextResponse.json(subCategory);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
