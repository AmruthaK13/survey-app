import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { PrismaClient } from "@prisma/client";

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
  const prisma = new PrismaClient();
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  const userSubscription = await prisma.userSubscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });

  if (!userSubscription) {
    return false;
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
      Date.now();

  return !!isValid;
};
