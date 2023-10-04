import prisma from "@/utils/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  //contains at least one lowercase letter, one uppercase letter, one special character / digit and 8 characters long
  const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!*()0123456789]).{8,}$"
  );

  if (!passwordRegex.test(body.password)) {
    return NextResponse.json({ message: "Invalid password" }, 400);
  }

  const userAlreadyExists = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (userAlreadyExists) {
    return NextResponse.json({ message: "User already exists" }, 400);
  }

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...rest } = user;
  return NextResponse.json(rest);
}
