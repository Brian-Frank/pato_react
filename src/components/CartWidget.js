import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    return (
        <div className='Cart'>
            <IconContext.Provider value={{ size: "2.5rem" }}>
                <Nav.Link as={Link} to="carrito" id='nav'>
                    <AiOutlineShoppingCart />Carrito
                </Nav.Link>
            </IconContext.Provider>

        </div>

    )
}

export default CartWidget