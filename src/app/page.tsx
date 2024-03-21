import CreditCardAd from "@/components/CreditCardAd";
import FlashDeals from "@/components/FlashDeals";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ProductBlocks from "@/components/ProductBlocks";
import Spacer from "@/components/Spacer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Hero />
      <div className="max-w-screen-2xl mx-auto px-4">
        <CreditCardAd />
        <FlashDeals />
        <Spacer />
        <ProductBlocks />
        <CreditCardAd />
      </div>
      <Footer />
    </main>
  );
}
