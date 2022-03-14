import React from 'react'
import { Card, Button } from 'react-bootstrap';

const ItemDetail = ({nombre, precio, imagen}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>${precio}</Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail