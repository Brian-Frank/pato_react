import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom' 

const Item = ({ producto }) => {
    const {productos, id} = producto
    return (
        <ul>
            <Card border="danger" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={productos.imagen} />
                <Card.Body>
                    <Card.Title>{productos.nombre}</Card.Title>
                    <Card.Text>Precio: ${productos.precio}</Card.Text>
                    <Card.Text>Descripción: <br/> 
                        {productos.descripcion}
                    </Card.Text>
                    <Link to={`/item/${productos.id}`}>Detalles</Link>
                </Card.Body>
            </Card>
        </ul>
    )
}

export default Item
