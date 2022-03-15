import React from 'react'
import Item from './Item';

const ItemDetail = ({productos}) => {
    return (
        <ul id='card'>
            {productos.map((producto)=>{
                return <Item key={producto.id} producto={producto}/>
            })}
        </ul>
    )
}

export default ItemDetail