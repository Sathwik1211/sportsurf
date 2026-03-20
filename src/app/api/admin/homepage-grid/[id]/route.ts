import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { verifyAdminToken } from "@/lib/admin-auth";

async function checkAdmin() {
  const cookieStore = cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token || !verifyAdminToken(token)) {
    throw new Error("Unauthorized");
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await checkAdmin();
    const { label, description, imageUrl, href, order } = await req.json();
    const item = await prisma.homepageGridItem.update({
      where: { id: params.id },
      data: {
        label,
        description,
        imageUrl,
        href,
        order: parseInt(order) || 0,
      }
    });
    return NextResponse.json(item);
  } catch (err: any) {
    return new NextResponse(err.message || "Error updating", { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await checkAdmin();
    const item = await prisma.homepageGridItem.delete({ where: { id: params.id } });
    return NextResponse.json(item);
  } catch (err: any) {
    return new NextResponse(err.message || "Error deleting", { status: 500 });
  }
}
