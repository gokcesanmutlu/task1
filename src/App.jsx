import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Coppyright from "./components/Coppyright";
import ProductContainer from "./components/ProductContainer";
import { useState } from "react";

export default function App() {
  const [basket, setBasket] = useState([])

  const addToBasket = (product) => {
    const newBasket = [...basket, product];
    setBasket(newBasket);
  };

  return (
    <>
      <Header basket={basket} setBasket={setBasket} addToBasket={addToBasket} />
      <Banner />
      <ProductContainer basket={basket} setBasket={setBasket} addToBasket={addToBasket} />
      <Footer />
      <Coppyright />
    </>
  );
}
