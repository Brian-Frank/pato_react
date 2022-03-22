import { useState } from "react";
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, initial, carrito }) => {

    const [count, setCount] = useState(initial);

    const incrementar = () => {
        const newValue = count + 1
        if (newValue <= stock) {
            setCount(newValue)
        }

    }
    const decrementar = () => {
        const newValue = count - 1
        if (newValue >= 1) {
            setCount(newValue)
        }
    }

    const resetear = () => {
        setCount(0)
    }

    const onAdd = () => {
        alert(`sumaste ${count} al carrito`)
    }

    return (
        <>
            <div>
                <Button onClick={onAdd} >{!carrito ? 'Comprar' : ''}</Button>
                <h3>{count}</h3>
                <button onClick={incrementar}>sumar</button>
                <button onClick={decrementar}>Restar</button>
            </div>
            <div>
                <button onClick={resetear}>resetear</button>
            </div>
        </>
    )
}
export default ItemCount; 