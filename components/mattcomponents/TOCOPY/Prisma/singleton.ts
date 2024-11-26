import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const SignletonPrisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default SignletonPrisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = SignletonPrisma