import React from "react";
import ProductCard from "./ProductCard";

export default function FlashDeals() {
  const products = [
    {
      name: "Item 1",
      price: "$19.95",
    },
    {
      name: "Item 2",
      price: "$19.95",
    },
    {
      name: "Item 3",
      price: "$19.95",
    },
    {
      name: "Item 4",
      price: "$19.95",
    },
    {
      name: "Item 5",
      price: "$19.95",
    },
  ];

  return (
    <section className="px-4 py-8 space-y-8">
      <div className="flex justify-between">
        <div>
          <h2>Flash Deals</h2>
          <p>Up to 75% off</p>
        </div>
        <p>view all</p>
      </div>
      <div className="flex space-x-4 overflow-x-scroll">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </div>
    </section>
  );
}
