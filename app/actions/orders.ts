"use server";

import db from "@/db/db";

export async function userOrderExists(email: string, productId: string) {
  return (
    (await db.order.findFirst({
      where: { user: { email }, productId },
      select: { id: true },
    })) != null
  );
}

// is there already an order for that email and that product? then it was already purchased
