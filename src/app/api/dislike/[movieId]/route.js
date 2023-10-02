import prisma from "@/utils/prisma";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function PATCH(request, { params: { movieId } }) {
  const token = await getToken({ req: request });

  if (!token) {
    return NextResponse.json({ message: "unauthorized" }, { status: 401 });
  }
  const { id: userId } = await prisma.user.findFirst({
    where: {
      email: token.email,
    },
  });

  const data = await prisma.movieLike.findMany({
    where: {
      userId: userId,
    },
  });

  const newData = data.filter((movie) => movie.movieId != movieId);

  const movieLikes = await prisma.movieLike.deleteMany({
    where: {
      userId: userId,
      movieId: movieId.toString(),
    },
  });

  return NextResponse.json(movieLikes);
}
