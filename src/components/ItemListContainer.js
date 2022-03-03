import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {

    console.log(props.nombre)

  return (
    <div className='container'>
      <h1>Productos</h1>
      <ItemCount stock={5}  initial={1}/>
    </div>
  )
}

export default ItemListContainer