import { ProductCardVertical } from "./ProductCard";
import { productCategory } from "./Products";

export default function FlashDeals() {
  return (
    <section id="flash_deals" className="container py-8 bg-white">
      <div className="row">
        <div className="col-11">
          <h2 className="font-semibold text-2xl">Flash Deals</h2>
          <p>Interstellar Travel Essentials</p>
        </div>
        <p className="underline text-sm col">view all</p>
      </div>
      <div className="row row-cols-lg-4 row-cols-2">
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
      </div>
    </section>
  );
}
