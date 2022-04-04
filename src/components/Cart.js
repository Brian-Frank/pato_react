import { useState } from 'react'
import { UseCartContext } from "./CartContext";
import { Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Cart = () => {
  const { cart, removeItem, clear } = UseCartContext();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      <h2>Carrito</h2>
      {loading ? <p>...Cargando</p> :
        <div >
          {
            cart.map(producto => (
              < Card border="danger" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={producto.item.imagen} />
                <Card.Body className='card'>
                  <Card.Title>{producto.item.nombre}</Card.Title>
                  <Card.Text>${producto.item.precio}</Card.Text>
                  <Card.Text>{producto.item.detalle}</Card.Text>
                  <Link to={`/item/${producto.item.id}`}>Detalles</Link>
                  <Card.Text>cantidad:{producto.cantidad}</Card.Text>
                  <button onClick={clear}>Vaciar carrito</button>

                </Card.Body>
              </Card >
            ))
          }
        </div>}
    </>
  )
}

export default Cart

