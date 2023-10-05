import prisma from "@/utils/prisma";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(request) {
  const token = await getToken({ req: request });

  if (!token) {
    return NextResponse.json({ message: "unauthorized" }, { status: 401 });
  }

  const { movieLikes } = await prisma.user.findFirst({
    where: {
      email: token.email,
    },
    select: {
      movieLikes: true,
    },
  });

  return NextResponse.json(movieLikes);
}
