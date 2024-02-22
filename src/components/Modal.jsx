import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/productContext'
import { BasketContext } from "../context/basketContext";
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next';

const Modal = ({ closeModal }) => {
  const { t, i18n } = useTranslation();
  const { selectedProduct } = useContext(ProductContext)
  const { addToBasket, basket } = useContext(BasketContext)

  const handleClick = () => {
    addToBasket(selectedProduct)
    if (!selectedProduct) { return }
    toast.success(`${t("productAdded")}`)
  }

  return (
    <div className="card p-8" >

      <button onClick={closeModal} className="dismiss" type="button">×</button>
      <div className="product">
        <img style={{ width: "300px", height: "220px" }} src={selectedProduct ? selectedProduct.img : "logoo.jpg"} alt="" />
        <div className="flex flex-column gap-2 p-2 text-justify items-center font-mono font-md">
          <h4 className='font-semibold'>{selectedProduct ? t(`products.${selectedProduct.id}.name`) : `${t("choose")}`}</h4>
          <p>{selectedProduct ? t(`products.${selectedProduct.id}.description`) : `${t("quality")}`}</p>
          <p>{selectedProduct ? "$ " + selectedProduct.price : `${t("bestPrice")}`}</p>
        </div>
        <div className="actions">
          <button onClick={handleClick} className="history" type="button">{selectedProduct ? `${t("addToBasket")}` : `${t("clickForMore")}`}</button>
          {console.log(basket)}
          <button className={`track ${selectedProduct ? "" : "d-none"}`} type="button">{t("follow")}</button>
        </div>
      </div>
    </div>
  )
}

export default Modal