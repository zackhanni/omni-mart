import React from "react";
import ProductCard from "./ProductCard";

export default function FlashDeals() {
  const products = [
    {
      name: "Item 1",
      price: "$19.95",
      image: "/product1.jpg",
    },
    {
      name: "Item 2",
      price: "$19.95",
      image: "/product2.jpg",
    },
    {
      name: "Item 3",
      price: "$19.95",
      image: "/product3.jpg",
    },
    {
      name: "Item 4",
      price: "$19.95",
      image: "/product4.webp",
    },
    {
      name: "Item 5",
      price: "$19.95",
      image: "/product1.jpg",
    },
  ];

  return (
    <section className="px-4 pt-8 pb-4 space-y-8">
      <div className="flex justify-between">
        <div>
          <h2>Flash Deals</h2>
          <p>Up to 75% off</p>
        </div>
        <p className="underline text-sm">view all</p>
      </div>
      <div className="flex space-x-4 overflow-x-scroll">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
      <hr />
    </section>
  );
}
