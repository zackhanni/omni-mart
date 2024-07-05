import db from "@/db/db";
import React from "react";

export default async function PurchasePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await db.product.findUnique({ where: { id } });
  if (product == null) return notFound();
  return <div>PurchasePage</div>;
}
