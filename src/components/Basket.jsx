import { useContext, useEffect } from "react"
import { BasketContext } from "../context/basketContext"
import BasketItem from "./BasketItem"
import { useTranslation } from 'react-i18next';

const Basket = ({ isCartOpen, setIsCartOpen }) => {
  const { t, i18n } = useTranslation();
  const { basket } = useContext(BasketContext)

  var totalAmount = basket.reduce(function (accumulator, currentItem) {
    return accumulator + (currentItem.price * currentItem.amount);
  }, 0);

  return (
    <div className='px-[25px] py-[15px] absolute top-18 right-4 z-20 w-[400px] h-auto bg-[#64af8ce0] rounded-md text-white font-mono '>
      <div className="font-semibold text-center mb-3">{t("cart")} </div>
      <table width="370px" height="auto">
        <thead>
          <tr className={`font-semibold ${basket.length === 0 ? "hidden" : ""}`} >
            <th></th>
            <th>{t("price")}</th>
            <th>{t("amount")}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {basket.map((i) => <BasketItem key={i.id} i={i} />)}
        </tbody>
      </table>

      <div className=" flex flex-col gap-1 w-full items-center ">
        <p className="text-[1.2rem] font-semibold">{t("total")} {t("price")} : ${totalAmount}</p>
        <button className="btn w-1/2 btn-sm bg-[#198754] text-white font-semibold m-auto">{t("buy")}</button>
        <button onClick={() => setIsCartOpen(!isCartOpen)} className="btn w-1/2 btn-sm bg-[#1d8719] text-white font-semibold m-auto">{t("keepShopping")}</button>
      </div>
    </div>
  )
}

export default Basket
