import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import {IconContext} from "react-icons"


const CartWidget = () => {
    return (
        <div className='Cart'>
            <IconContext.Provider value={ {size: "2.5rem"}}>
            <AiOutlineShoppingCart />
            0
            </IconContext.Provider>
        </div>
    
    )
}

export default CartWidget
