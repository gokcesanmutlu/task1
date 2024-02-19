import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Coppyright from "./components/Coppyright";
import ProductContainer from "./components/ProductContainer";
import { useState } from "react";

export default function App() {
  const [basket, setBasket] = useState([])

  return (
    <>
      <Header basket={basket} setBasket={setBasket}  />
      <Banner />
      <ProductContainer basket={basket} setBasket={setBasket} />
      <Footer />
      <Coppyright />
    </>
  );
}
