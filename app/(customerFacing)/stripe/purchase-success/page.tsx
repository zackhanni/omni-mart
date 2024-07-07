import { Button } from "@/app/components/ui/button";
import db from "@/db/db";
import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_TEST_KEY as string);

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { payment_intent: string };
}) {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    searchParams.payment_intent
  );

  if (paymentIntent.metadata.productId == null) return notFound();

  const product = await db.product.findUnique({
    where: { id: paymentIntent.metadata.productId },
  });

  if (product == null) return notFound();

  const isSuccess = paymentIntent.status === "succeeded";

  return (
    <section className="">
      <div className="max-w-5xl w-full mx-auto space-y-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            {isSuccess ? "Payment successful" : "Purchase Error"}
          </h2>
          {isSuccess && <p>Thank you for your purchase!</p>}
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex-shrink-0 w-1/3 h-48 relative">
            <Image
              src={product.imagePath}
              fill
              alt={product.name}
              className="object-contain"
            />
          </div>
          <div>
            {/* <div className="text-lg">
              {formatCurrency(product.priceInCents / 100)}
            </div> */}
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <div className="text-muted-foreground">{product.description}</div>
            <Button className="mt-4" size="lg" asChild>
              {isSuccess ? (
                <a
                  href={`/products/download/[${await createDownloadVerification(
                    product.id
                  )}]`}
                >
                  Download
                </a>
              ) : (
                <Link href={`/products/${product.id}/purchase`}>Try Again</Link>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const createDownloadVerification = async (productId: string) => {
  return (
    await db.downloadVerification.create({
      data: {
        productId,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    })
  ).id;
};
