import React from 'react'
import { Card, Button, Link } from 'react-bootstrap';
import { useState } from 'react';
import { toast } from 'react-toastify';
import ItemCount from "./ItemCount";

const ItemDetail = ({ productos }) => {

    const [carrito, setCarrito] = useState(false)

    const onAdd = (count) => {

        console.log({item:productos, cantidad:count})

        setCarrito(!carrito)
        toast.success("Compra Exitosa !", {
        });

    }


    return (
        <ul>
            <Card border="danger" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={productos.imagen} />
                <Card.Body>
                    <Card.Title>{productos.nombre}</Card.Title>
                    <Card.Text>${productos.precio}</Card.Text>
                    <Card.Text>{productos.detalle}</Card.Text>
                    {/* <Button variant="primary">Comprar</Button> */}
                    <ItemCount stock={5} initial={1} onAdd= {onAdd} carrito={carrito}/>
                </Card.Body>
            </Card>
        </ul>
    )
}

export default ItemDetail