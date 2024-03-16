import React from "react";

export default function FlashDeals() {
  const products = [1, 2, 3, 4, 5];

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
            <div key={product} className="bg-yellow-800 min-w-64 h-72">
              product name
            </div>
          );
        })}
      </div>
    </section>
  );
}
