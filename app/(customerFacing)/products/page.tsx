import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import {
  ProductCardHorizontal,
  ProductCardHorizontalSkeleton,
} from "@/app/components/ProductCard";
import db from "@/db/db";
import React, { Suspense } from "react";

const getProducts = () => {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { name: "asc" },
  });
};

export default function ProductsPage() {
  return (
    <section className="container py-8">
      <div>
        <h2 className="font-semibold text-2xl">All products we offer</h2>
        <p>Ordered Alphabetically</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Suspense
          fallback={
            <>
              <ProductCardHorizontalSkeleton />
              <ProductCardHorizontalSkeleton />
              <ProductCardHorizontalSkeleton />
              <ProductCardHorizontalSkeleton />
            </>
          }
        >
          <ProductsSuspense />
        </Suspense>
      </div>
    </section>
  );
}
const ProductsSuspense = async () => {
  const products = await getProducts();

  return products.map((product) => (
    <ProductCardHorizontal key={product.id} {...product} />
  ));
};
