import React from 'react'
import { Card, Button, Link } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import ItemCount from "./ItemCount";
import { UseCartContext } from "./CartContext";

const ItemDetail = ({ productos }) => {

    const [carrito, setCarrito] = useState(false)

    const { addItem } = UseCartContext()

    const onAdd = (count) => {
        const item = productos;
        const cantidad = count;

        addItem(item, cantidad)

        setCarrito(!carrito)
        toast.success("Agregaste al carrito !", {
        });

    }


    return (
        <ul>
            <Card border="danger" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={productos.imagen} />
                <Card.Body>
                    <Card.Title>{productos.nombre}</Card.Title>
                    <Card.Text>Precio:${productos.precio}</Card.Text>
                    <Card.Text>Descripción:
                        <br/>{productos.descripcion}
                    </Card.Text>
                    <ItemCount stock={5} initial={1} onAdd={onAdd} carrito={carrito} />
                </Card.Body>
            </Card>
        </ul>
    )
}

export default ItemDetail