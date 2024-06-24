import CreditCardAd from "./components/CreditCardAd";
import FlashDeals from "./components/FlashDeals";
import Hero from "./components/Hero";
import ProductBlocks from "./components/ProductBlocks";
import Spacer from "./components/Spacer";
import TrendingDeals from "./components/TrendingDeals";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <TrendingDeals />
      <CreditCardAd />
      <FlashDeals />
      <Spacer />
      <ProductBlocks />
    </main>
  );
}
