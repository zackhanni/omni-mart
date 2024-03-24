import { ProductCardHorizontal } from "./ProductCard";

export default function TrendingDeals() {
  const products = [
    {
      name: "Product name",
      description:
        "Look at this album cover, isnt it just neato? Here is some more text",
      price: "$19.95",
      image: "/product1.jpg",
    },
    {
      name: "Product name",
      description: "This is product 2 and it has a description",
      price: "$19.95",
      image: "/product2.jpg",
    },
    {
      name: "Product name",
      description:
        "OMG its product 3. I just love the way it looks. Even more filler text for this product",
      price: "$19.95",
      image: "/product3.jpg",
    },
    {
      name: "Product name",
      description:
        "Ok, now its time for product 4. its going to be longer than the others",
      price: "$19.95",
      image: "/product4.webp",
    },
    {
      name: "Product name",
      description:
        "Item 5 needs much more text in its description. but i need to make sure its not too much at the same time or else i need to truncate it",
      price: "$19.95",
      image: "/product1.jpg",
    },
  ];

  return (
    <section className="container py-8">
      <div className="row">
        <div className="col-11">
          <h2 className="font-semibold text-2xl">Trending Deals</h2>
          <p>Up to 34% off</p>
        </div>
        <p className="col underline text-sm">view all</p>
      </div>

      <div className="row row-cols-lg-2 g-4">
        {products.map((product) => {
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
