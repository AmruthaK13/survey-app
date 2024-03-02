import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { MAX_FREE_COUNTS } from "@/constants";
import { PrismaClient } from "@prisma/client";

export const increaseApiLimit = async () => {
  const prisma = new PrismaClient();
  const { userId } = await auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (userApiLimit) {
    await prisma.userApiLimit.update({
      where: {
        userId: userId,
      },
      data: { count: userApiLimit.count + 1 },
    });
  } else {
    await prisma.userApiLimit.create({
      data: {
        userId: userId,
        count: 1,
      },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();
  const prisma = new PrismaClient();

  if (!userId) {
    return false;
  }
  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      userId: userId,
    },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimitCount = async () => {
  const prisma = new PrismaClient();
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit) {
    return 0;
  }

  return userApiLimit.count;
};
