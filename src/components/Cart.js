import React from 'react'
import { useContext } from "react"
import { CartContext } from "./CartContext";

const Cart = () => {
  const { Cart,borrarProducto } = useContext(CartContext);

  return (
    <>
      <h2>Carrito</h2>
      {
        Cart.map(producto => (
          <div key={producto.id}>
            <p>{producto.nombre}</p>
            <p>{producto.precio}</p>
            <button onClick={() => borrarProducto(producto.id)}>Borrar</button>
          </div>
        ))
      }
    </>
  )
}

export default Cart