import { ProductCardHorizontal } from "./ProductCard";
import { productCategory } from "./Products";

export default function TrendingDeals() {
  return (
    <section className="container py-8 bg-white">
      <div className="row">
        <div className="col-11">
          <h2 className="font-semibold text-2xl">Trending Deals</h2>
          <p>Navigation systems and star charts</p>
        </div>
        <p className="col underline text-sm">view all</p>
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
