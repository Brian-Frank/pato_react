import React from 'react'
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    let productosIniciales = [
        {
            id: 1,
            imagen: "https://i.ibb.co/s9DM2jr/76-AD2-D7-D-A0-F3-4-BE8-99-E8-26-BD95-BA6-CF7.jpg",
            nombre: "torta 1",
            detalle: "Destalles del producto",
            precio: 100,
            stock: 6
        },
        {
            id: 2,
            imagen: "https://i.ibb.co/rtByN3B/F302-C692-4457-45-F0-9-AEC-8-A3-CD0571688.jpg",
            nombre: "torta 2",
            detalle: "Destalles del producto",
            precio: 200,
            stock: 5
        },
        {
            id: 3,
            imagen: "https://i.ibb.co/2qkbnJZ/ECCB1-BCF-BE3-C-496-F-9338-381-C0-B712-BDD.jpg",
            nombre: "torta 3",
            detalle: "Destalles del producto",
            precio: 300,
            stock: 7
        }
    ]

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(() => {


        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
                rej(productosIniciales)
            }, 3000)
        })

        promesa
            .then((respuestaDeLaApi) => {
                setProductos(productosIniciales)
            })
            .catch((errorDeLaApi) => {
                toast.error("Error en cargar los productos")
            })
            .finally(() => {
                setLoading(false)
            })
    })

    return (
        <div>
            <p className='text'>{loading ? "Cargando..." : "Productos:"}</p>
            <ItemDetail productos={productos}/>
        </div>
    )
}

export default ItemDetailContainer