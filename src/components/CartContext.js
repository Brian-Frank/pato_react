import { createContext, useState, useContext } from "react";
export const cartContext = createContext();
const { Provider } = CartContext;


export const CartContext = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (producto, cantidad) => {
        const cartProducto = {...producto, cantidad};
        const AuxCart=[]
        if(isInCart(producto))
        {
            cartProducto = cart.find(item => item.id === producto.id);
        }
        else
        {
            const AuxCart = [...cart];
            AuxCart.push({producto, cantidad});
            setCart(AuxCart);
        }

    }
    
    const removeItem = (id) => {
        const AuxCart= cart.filter(item => item.id !== id);
        setCart(AuxCart);
    }

    const clear = () => {
        setCart([]);

    }

    const isInCart = (id) => {
        return cart.find(producto => producto.id === id);
    }




    const ValordelProvider = {
        cart,
        setCart,
        addItem,
        removeItem,
        clear,
        isInCart

    }


    return (
        <Provider value={ValordelProvider}>
            {children}
        </Provider>
    )
}


export default CartContext