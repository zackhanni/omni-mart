import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[124px] relative sm:h-screen w-full overflow-hidden bg-purple-300">
      <div className="">
        <div>
          <Image
            src="/hero-shopping.jpg"
            width={1920}
            height={1080}
            alt="Hero image of lady holding bags"
            className="w-full h-full"
          />
        </div>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 lg:top-1/2 left-1/3 text-white bg-black/20 p-4">
          <p>NEW ARRIVALS</p>
          <h1 className="text-4xl">Best Prices This Millenia</h1>
          <p>Flux capacitors</p>
          <p>Our Price: $99.99</p>
          <button className="bg-purple-600 hover:bg-purple-800 rounded-full px-4 py-1 w-fit mt-2">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
}
