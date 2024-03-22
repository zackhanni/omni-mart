import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[124px] relative sm:max-h-[625px] w-full overflow-hidden bg-black">
      <div className="">
        <div>
          <Image
            src="/galaxy.jpeg"
            width={1920}
            height={1080}
            priority
            alt="Hero image of lady holding bags"
            className="w-full h-full"
          />
        </div>
        <div className="absolute -translate-x-1/2 -translate-y-1/3 top-1/2 lg:top-1/2 left-1/2 text-white space-y-6 text-center w-full">
          <p className="text-5xl font-bold">CARGO BAY SALE</p>

          <div className="flex items-center space-x-2 justify-center">
            <p>
              UP
              <br /> TO
            </p>
            <p className="text-9xl">34% OFF</p>
          </div>

          <p className="text-xl">
            SAVE ON FLUX CAPACITORS, POWER CONVERTERS AND MORE!
          </p>
          <button className="hover:bg-white outline outline-1 hover:outline-white hover:text-black rounded-full px-16 py-4 w-fit mt-2">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
}
