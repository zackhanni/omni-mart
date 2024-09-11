import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative sm:max-h-[425px] w-full overflow-hidden">
      <div className="h-[425px] flex">
        <Image
          src="/galaxy.jpeg"
          width={1920}
          height={1080}
          priority
          alt="Outer space galaxy"
          className="w-full h-full object-cover"
        />

        <div className="absolute text-white text-center w-full h-full flex flex-col items-center justify-center bg-black/5">
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
            <Link href="/products" className="no-underline text-white h-[72px]">
              <button className="hover:bg-white outline outline-1 outline-white hover:text-black rounded-full h-16 w-52 bg-black/30 ">
                All products
              </button>
            </Link>

            <Link
              href={"#flash_deals"}
              className="no-underline text-white h-[72px]"
            >
              <button className="hover:bg-white outline outline-1 outline-white hover:text-black rounded-full h-16 w-52 bg-black/30 ">
                Flash deals
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
