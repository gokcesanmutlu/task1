import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/productContext'
import { BasketContext } from "../context/basketContext";
import { toast } from "react-toastify";

const Modal = ({ closeModal }) => {
  const { selectedProduct } = useContext(ProductContext)
  const { addToBasket, basket } = useContext(BasketContext)

  const handleClick = () => {
    addToBasket(selectedProduct)
    toast.success("Product was added.")
  
  }

  return (
    <div className="card p-8" >
      <button onClick={closeModal} className="dismiss" type="button">×</button>
      <div className="product">
        <img style={{ width: "300px", height: "220px" }} src={selectedProduct ? selectedProduct.img : "logoo.jpg"} alt="" />
        <div className="flex flex-column gap-2 p-2 text-justify items-center font-mono font-md">
          <h4 className='font-semibold'>{selectedProduct ? selectedProduct.name : "Choose your favorite one !"}</h4>
          <p>{selectedProduct ? selectedProduct.description : "with Best Quality"}</p>
          <p>{selectedProduct ? "$ " + selectedProduct.price : "with Best Price"}</p>
        </div>
        <div className="actions">
          <button onClick={handleClick} className="history" type="button">{selectedProduct ? "Add to Basket": "Click, For More"}</button>
          {console.log(basket)}
          <button className={`track ${selectedProduct ? "hidden" : ""}`} type="button">Follow the Price</button>

        </div>
      </div>
    </div>
  )
}

export default Modal