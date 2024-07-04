import db from "@/db/db";
import {
  ProductCardHorizontal,
  ProductCardHorizontalSkeleton,
} from "./ProductCard";
import { Product } from "@prisma/client";
import { Suspense } from "react";
import { cache } from "@/lib/cache";

// const getMostPopularProducts = () => {
//   return db.product.findMany({
//     where: { isAvailableForPurchase: true },
//     orderBy: { orders: { _count: "desc" } },
//     take: 6,
//   });
// };

const wait = (duration: number) => {
  // test suspense loading
  return new Promise((resolve) => setTimeout(resolve, duration));
};

const getNewestProducts = cache(
  () => {
    // await wait(2000);
    return db.product.findMany({
      where: { isAvailableForPurchase: true },
      orderBy: { createdAt: "desc" },
      take: 6,
    });
  },
  ["/", "getNewestProducts"]
  // { revalidate: 60 * 60 * 24 }
);

export default function NewestProducts() {
  return (
    <section className="container py-8 bg-white">
      <div className="row">
        <div className="col-10">
          <h2 className="font-semibold text-2xl">Newest Products</h2>
          <p>Check out our latest releases</p>
        </div>
        <a
          href="/"
          className="offset-lg-1 col-2 col-lg-1 underline text-sm text-black"
        >
          view all
        </a>
      </div>

      <ProductGridSection productsFetcher={getNewestProducts} />
    </section>
  );
}

type ProductGridSectionProps = {
  title?: string;
  productsFetcher: () => Promise<Product[]>;
};

const ProductGridSection = async ({
  productsFetcher,
  title,
}: ProductGridSectionProps) => {
  return (
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
        <ProductSuspense productsFetcher={productsFetcher} />
      </Suspense>
    </div>
  );
};

async function ProductSuspense({
  productsFetcher,
}: {
  productsFetcher: () => Promise<Product[]>;
}) {
  return (await productsFetcher()).map((product) => (
    <ProductCardHorizontal key={product.id} {...product} />
  ));
}
