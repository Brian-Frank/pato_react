import React from 'react'
import { Card, Button } from 'react-bootstrap';

const Item = ({ producto }) => {
    return (
        <ul>
            <Card border="danger" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>${producto.precio}</Card.Text>
                    <Card.Text>{producto.detalle}</Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </ul>
    )
}

export default Item
