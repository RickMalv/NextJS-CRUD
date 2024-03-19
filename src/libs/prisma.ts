import { PrismaClient } from "@prisma/client";

//Evita las consultas a la base de datos en cada petición
//Se extiende el objeto global para que prisma sea accesible desde cualquier parte de la aplicación
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE !== "production") global.prisma = prisma;
