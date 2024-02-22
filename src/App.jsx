import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Coppyright from "./components/Coppyright";
import ProductContainer from "./components/ProductContainer";
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();

  const clickHandle = async lang => {
    await i18n.changeLanguage(lang)
  }

  return (
    <>
      <div className="flex gap-2 items-center justify-center absolute top-4 right-2/3 z-40 max-[1000px]:hidden">
        <nav>
          <button onClick={() => clickHandle("tr")} className="btn border mx-2 btn-sm px-3 bg-slate-400 text-white">TR</button>
          <button onClick={() => clickHandle("en")} className="btn border btn-sm px-3 bg-slate-400 text-white">EN</button>
        </nav>
      </div>
      <Header />
      <Banner />
      <ProductContainer />
      <Footer />
      <Coppyright />
    </>
  );
}
