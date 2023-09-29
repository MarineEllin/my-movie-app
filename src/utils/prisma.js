import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.MODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
