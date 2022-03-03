import { useState } from "react";

const ItemCount = ({ stock, initial }) => {

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
        alert(`agregastes ${count} productos al carrito`)
    }

    return (
        <>
            <div>
                <h3>{count}</h3>
                <button onClick={incrementar}>agregar</button>
                <button onClick={decrementar}>Restar</button>
            </div>
            <div>
                <button onClick={resetear}>resetear</button>
                <button onClick={onAdd}>agregar al carrito</button>
            </div>
        </>
    )
}
export default ItemCount; 