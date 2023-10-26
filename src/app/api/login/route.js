import prisma from "@/utils/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  console.log({ body });
  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  console.log(user);

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...rest } = user;
    return NextResponse.json(rest);
  }

  return NextResponse.json({ message: "Bad credentials" }, 401);
}
