import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Modal from "./Modal"

const ProductContainer = () => {

  const [selectedProduct, setSelectedProduct] = useState(true);
  const [products, setProducts] = useState([]);

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
            {products?.map((product) => <ProductCard product={product} />)}
          </div>
        </div>
        {selectedProduct && <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      </div>
    </>
  );
};

export default ProductContainer;