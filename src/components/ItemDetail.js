import React from 'react'
import { Card, Button } from 'react-bootstrap';

const ItemDetail = ({ productos }) => {
    return (
        <ul>
            <Card border="danger" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={productos.imagen} />
                <Card.Body>
                    <Card.Title>{productos.nombre}</Card.Title>
                    <Card.Text>${productos.precio}</Card.Text>
                    <Card.Text>{productos.detalle}</Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </ul>
    )
}

export default ItemDetail