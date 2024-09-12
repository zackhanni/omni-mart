import CreditCardAd from "../components/CreditCardAd";
import FlashDeals from "../components/FlashDeals";
import Hero from "../components/Hero";
import NewestProducts from "../components/NewestProducts";
import ProductBlocks from "../components/ProductBlocks";
import Spacer from "../components/Spacer";
import "bootstrap/dist/css/bootstrap.css"; // importing bootstrap here because it messes up backend admin page if on layout

export default function Home() {
  return (
    <>
      <Hero />
      <NewestProducts />
      <CreditCardAd />
      <FlashDeals />
      <Spacer />
      <ProductBlocks />
    </>
  );
}
