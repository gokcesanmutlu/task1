import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Modal from "./Modal"
import { useContext } from "react";
import { ProductContext } from "../context/productContext";
// import { useSearchParams } from 'react-router-dom';

const ProductContainer = () => {
  const [isModelOpen, setIsModalOpen] = useState(true)
  const {query, products, setDetailId, setFiltred, filtred } = useContext(ProductContext);

  // const urlParams = new URLSearchParams(window.location.search);
  // const query = urlParams.get('q');
  // console.log(query);

  // filtering product
  useEffect(() => {
    const q = query?.toLowerCase() || "";
    setFiltred(products?.filter((product) => product.name.toLowerCase().includes(q)));
  }, [query, products, setFiltred]);


  const openModal = (id) => {
    setIsModalOpen(true);
    setDetailId(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDetailId(null);
  };

  return (
    <>
      <div className="px-32 py-16 product-modal">
        <div >
          <h3 className="font-semibold text-gray-600">PRODUCT</h3> 
          <div className="line h-[2px] w-[75px] bg-slate-500 "></div>
          <div className="flex flex-wrap gap-0">
            {filtred?.map((product) => <ProductCard key={product.id} product={product} openModal={openModal} />)}
          </div>
        </div>
        {isModelOpen && <Modal closeModal={closeModal} setIsModalOpen={setIsModalOpen} />}
      </div>
    </>
  );
};

export default ProductContainer;
