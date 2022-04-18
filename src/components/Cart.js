import { useState } from 'react'
import { UseCartContext } from "./CartContext";
import { Card} from 'react-bootstrap';
import { db } from './Firebase';
import { serverTimestamp, collection, addDoc } from 'firebase/firestore';


const Cart = () => {
  const { cart, removeItem, clear} = UseCartContext();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const handleClick = () => {

    const orden = {
        buyer : {
            nombre : "brian",
            telefono : "522222",
            email : "brianfrank@gmail.com"
        },
        items : cart,
        date : serverTimestamp(),
        total : cart.reduce((total, item) => total + item.cantidad * item.productos.precio, 0)
    }
    const ordenesCollection = collection(db, "ordenes")
    const pedido = addDoc(ordenesCollection,orden)

    pedido
    .then(res=>{
        console.log(res.id)
    })

}

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
                  <Card.Text>Precio: ${producto.item.precio}</Card.Text>
                  <Card.Text>Descripción:  {producto.item.descripcion}</Card.Text>
                  <Card.Text>cantidad:{producto.cantidad}</Card.Text>
                  <button onClick={clear}>Vaciar carrito</button>
                </Card.Body>
              </Card >
              
            ))
          }
        </div>
      }
    </>
  )
}

export default Cart

