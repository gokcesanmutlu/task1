import { createContext, useState } from "react";

export const BasketContext = createContext()

export function BasketProvider({ children }) {
    const [basket, setBasket] = useState([])

    const addToBasket = (product) => {
        const found = basket.find((i) => i.id === product.id);

        if (found) {
            const updated = { ...found, amount: found.amount + 1 }

            const newBasket = basket.map((item) =>
                item.id === updated.id ? updated : item
            );
            setBasket(newBasket);
        } else {
            console.log("sepete ekleme çalıştı")
            setBasket([...basket, { ...product, amount: 1 }]);
            { }
        }
    };

    const decreaseAmount = (product_id) => {
        const found = basket.find((i) => i.id === product_id);

        if (found.amount === 1) {
            removeProduct(found.id);
        } else {
            const updated = { ...found, amount: found.amount - 1 };

            const newBasket = basket.map((item) =>
                item.id === updated.id ? updated : item
            );
            setBasket(newBasket)
        }
    }

    const increaseAmount = (product_id) => {
        const found = basket.find((i) => i.id === product_id);

        const updated = { ...found, amount: found.amount + 1 };

        const newBasket = basket.map((item) =>
            item.id === updated.id ? updated : item
        );
        setBasket(newBasket)

    }

    const removeProduct = (delete_id) => {
        const deleted = basket.filter((i) => i.id !== delete_id)
        setBasket(deleted)
    }

    return (
        <BasketContext.Provider value={{ increaseAmount, decreaseAmount, removeProduct, addToBasket, basket, setBasket }}>
            {children}
        </BasketContext.Provider>
    )
}
