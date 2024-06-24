import { ProductCardHorizontal } from "./ProductCard";
import { productCategory } from "./Products";

export default function TrendingDeals() {
  return (
    <section className="container py-8 bg-white">
      <div className="row">
        <div className="col-10">
          <h2 className="font-semibold text-2xl">Trending Deals</h2>
          <p>Navigation systems and star charts</p>
        </div>
        <a
          href="/"
          className="offset-lg-1 col-2 col-lg-1 underline text-sm text-black"
        >
          view all
        </a>
      </div>

      <div className="row row-cols-lg-2 g-4">
        {productCategory.map((product) => {
          return (
            <ProductCardHorizontal
              key={product.name}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
    </section>
  );
}
