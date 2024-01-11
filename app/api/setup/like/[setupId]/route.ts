import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]/route";
import prisma from "@/app/Utilities/prisma";

export async function POST(req: NextRequest, context: any) {
  const { params } = context;
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) {
    return NextResponse.json({ message: "AUTH ERROR" });
  }
  const foundLike = await prisma.likes.findFirst({
    where: { userId, setupId: params.setupId },
  });

  if (!foundLike) {
    await prisma.likes.create({ data: { userId, setupId: params.setupId } });
    return NextResponse.json({ message: "Liked" });
  }

  await prisma.likes.deleteMany({
    where: { userId: userId, setupId: params.setupId },
  });

  return NextResponse.json({ message: "delete" });
}
