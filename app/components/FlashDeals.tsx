import db from "@/db/db";
import { ProductCardVertical } from "./ProductCard";
import { productCategory } from "./Products";
import { Product } from "@prisma/client";

const getMostPopularProducts = () => {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { orders: { _count: "desc" } },
    take: 6,
  });
};

const getNewestProducts = () => {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { createdAt: "desc" },
    take: 6,
  });
};

export default function FlashDeals() {
  return (
    <section id="flash_deals" className="container py-8 bg-white">
      <div className="row">
        <div className="col-10">
          <h2 className="font-semibold text-2xl">Flash Deals</h2>
          <p>Interstellar Travel Essentials</p>
        </div>
        <a
          href="/"
          className="offset-lg-1 col-2 col-lg-1 underline text-sm text-black"
        >
          view all
        </a>
      </div>
      {/* <div className="row row-cols-lg-4 row-cols-2">
        {productCategory.map((product) => {
          return (
            <ProductCardVertical
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div> */}
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
      {(await productsFetcher()).map((product) => (
        <ProductCardVertical key={product.id} {...product} />
      ))}
    </div>
  );
};
