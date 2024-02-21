import { useContext } from "react"
import { BasketContext } from "../context/basketContext"
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { toast } from "react-toastify";

const BasketItem = ({ i }) => {
    const { increaseAmount, decreaseAmount, removeProduct } = useContext(BasketContext)

    const handlePlus = () => {
        increaseAmount(i.id)
        toast.success("Amount was increased.")
    }
    const handleMinus = () => {
        decreaseAmount(i.id)
        toast.warning("Amount was decreased.")
    }
    const handleRemove = () => {
        removeProduct(i.id)
        toast.error("Product was deleted.")
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
                        <button onClick={handleRemove} className="bg-red-600 p-1 text-xs">Remove</button>
                        <button onClick={handleMinus} className="bg-yellow-600 p-1"><CiCircleMinus /></button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default BasketItem