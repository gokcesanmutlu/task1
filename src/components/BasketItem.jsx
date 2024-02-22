import { useContext } from "react"
import { BasketContext } from "../context/basketContext"
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next';

const BasketItem = ({ i }) => {
    const { increaseAmount, decreaseAmount, removeProduct } = useContext(BasketContext)
    const { t, i18n } = useTranslation();

    // !! BUNLARI KOMPLE BASKETCONTEXT'E AL
    const handlePlus = () => {
        increaseAmount(i.id)
        toast.success(`${t("increase")}`)
    }
    const handleMinus = () => {
        decreaseAmount(i.id)
        toast.warning(`${t("decrease")}`)
    }
    const handleRemove = () => {
        removeProduct(i.id)
        toast.error(`${t("delete")}`)
    }

    return (
        <>
            <tr>
                <td>{i.name}</td>
                <td>${i.price}</td>
                <td>{i.amount && i.amount}</td>
                <td>
                    <div className="btn-group rounded-md">
                        <button onClick={handlePlus} className="bg-green-600 p-1"><CiCirclePlus /></button>
                        <button onClick={handleRemove} className="bg-red-600 p-1 text-xs">{t("remove")}</button>
                        <button onClick={handleMinus} className="bg-yellow-600 p-1"><CiCircleMinus /></button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default BasketItem