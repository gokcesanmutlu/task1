import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState()
  const [detailId, setDetailId] = useState(null)
  const [filtred, setFiltred] = useState([])
  const [query, setQuery] = useState("")


  //Getting all product
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('./db.json');
        setProducts(response.data.products);
        setFiltred(response.data.products)
        console.log(products)
      } catch (error) {
        console.error('Error getting products:', error);
      }
    };
    getProducts()
  }, []);

  //Getting specific product
  useEffect(() => {
    const getSelectedProduct = async () => {
      try {
        const response = await axios.get(`./db.json?id=${detailId}`);
        setSelectedProduct(response.data.products.find(product => product.id === detailId));
        //    console.log(selectedProduct)
      } catch (error) {
        console.error('Error getting specific product:', error);
      }
    };
    getSelectedProduct()
  }, [detailId]);

  return (
    <ProductContext.Provider value={{ query, setQuery, filtred, setFiltred, products, setProducts, selectedProduct, setSelectedProduct, detailId, setDetailId }}>
      {children}
    </ProductContext.Provider>
  )

}