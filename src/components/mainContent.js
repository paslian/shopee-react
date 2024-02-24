import FlashSale from "./flashSale";
import Hero from "./hero";
import List from "./list";
import Promo from "./promo";
import Rekomendasi from "./rekomendasi";

// import Hero from '././hero'
const MainContent = () => {
  return (
    <>
      <Hero></Hero>
      <List></List>
      <FlashSale></FlashSale>
      <Promo></Promo>
      <Rekomendasi></Rekomendasi>
    </>
  );
};

export default MainContent;
