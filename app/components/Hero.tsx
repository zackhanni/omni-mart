import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative sm:max-h-[425px] w-full overflow-hidden">
      <div className="h-[425px]">
        <Image
          src="/galaxy.jpeg"
          width={1920}
          height={1080}
          priority
          alt="Outer space galaxy"
          className="w-full h-full object-cover"
        />

        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white text-center w-full">
          <p className="display-5">CARGO BAY SALE</p>

          <div className="text-xs sm:text-base flex items-center space-x-2 justify-center">
            <p>
              UP
              <br /> TO
            </p>
            <p className=" text-6xl sm:text-9xl">42% OFF</p>
          </div>

          <p className="sm:text-xl px-16">
            SAVE ON FLUX CAPACITORS, POWER CONVERTERS AND MORE!
          </p>
          <div className="gap-4 grid sm:flex justify-content-center sm:h-[72px]">
            <button className="hover:bg-white outline outline-1 hover:outline-white hover:text-black rounded-full sm:px-16 px-8 sm:py-4 py-2 bg-black/30">
              <Link
                href="/products"
                className="text-white hover:text-black no-underline"
              >
                All products
              </Link>
            </button>

            <button className="hover:bg-white outline outline-1 outline-white hover:text-black rounded-full sm:px-16 px-8 sm:py-4 py-2 bg-black/30 ">
              <Link href={"#flash_deals"} className="no-underline text-white">
                Flash deals
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
