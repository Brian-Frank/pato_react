import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const UseCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        let cartProduct = { item, cantidad };

        let AuxCart = [];

        if (isInCart(item)) {
            cartProduct = cart.find((producto) => producto.item === item);
            cartProduct.cantidad = cartProduct.cantidad + cantidad;

            AuxCart = [...cart];
        } else {
            AuxCart = [cartProduct, ...cart];
        }

        setCart(AuxCart);
    };

    const removeItem = (id) => {
        const AuxCart = cart.filter((item) => item.id !== id);
        setCart(AuxCart);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (item) => {
        return cart && cart.some((producto) => producto.item === item);
    };

    return (
        <CartContext.Provider
            value={{ cart, setCart, addItem, removeItem, clear, isInCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;