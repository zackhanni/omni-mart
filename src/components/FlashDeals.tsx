import { ProductCardVertical } from "./ProductCard";

export default function FlashDeals() {
  const products = [
    {
      name: "Look at this album cover, isnt it just neato?",
      price: "$19.95",
      image: "/product1.jpg",
    },
    {
      name: "This is product 2 and it has a description",
      price: "$19.95",
      image: "/product2.jpg",
    },
    {
      name: "OMG its product 3. I just love the way it looks",
      price: "$19.95",
      image: "/product3.jpg",
    },
    {
      name: "Ok, now its time for product 4. its going to be longer than the others",
      price: "$19.95",
      image: "/product4.webp",
    },
    {
      name: "Item 5 name details thing",
      price: "$19.95",
      image: "/product1.jpg",
    },
  ];

  return (
    <section className="container py-8">
      <div className="row">
        <div className="col-11">
          <h2 className="font-semibold text-2xl">Flash Deals</h2>
          <p>Up to 75% off</p>
        </div>
        <p className="underline text-sm col">view all</p>
      </div>
      <div className="row row-cols-lg-4 row-cols-2">
        {products.map((product) => {
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
