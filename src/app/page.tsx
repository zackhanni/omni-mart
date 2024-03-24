import CreditCardAd from "@/components/CreditCardAd";
import FlashDeals from "@/components/FlashDeals";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ProductBlocks from "@/components/ProductBlocks";
import Spacer from "@/components/Spacer";
import TrendingDeals from "@/components/TrendingDeals";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Hero />
      <TrendingDeals />
      <CreditCardAd />
      <FlashDeals />
      <Spacer />
      <ProductBlocks />
      <Footer />
    </main>
  );
}
