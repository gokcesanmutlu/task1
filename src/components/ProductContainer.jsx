import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Modal from "./Modal"

const ProductContainer = ({ setBasket, basket, addToBasket }) => {
  const [isModelOpen, setIsModalOpen] = useState(true)
  const [products, setProducts] = useState([]);
  const [detailId, setDetailId] = useState(null)

  const openModal = (id) => {
    setIsModalOpen(true);
    setDetailId(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDetailId(null);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('./db.json');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error getting products:', error);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <div className="px-32 py-16 product-modal">
        <div >
          <h3 className="font-semibold text-gray-600">PRODUCT</h3>
          <div className="line h-[2px] w-[75px] bg-slate-500 "></div>
          <div className="flex flex-wrap gap-0">
            {products?.map((product) => <ProductCard key={product.id} product={product} openModal={openModal} />)}
          </div>
        </div>
        {isModelOpen && <Modal addToBasket={addToBasket}  closeModal={closeModal} setIsModalOpen={setIsModalOpen} detailId={detailId} setBasket={setBasket} basket={basket} />}
      </div>
    </>
  );
};

export default ProductContainer;