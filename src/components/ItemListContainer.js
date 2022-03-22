import React from 'react'
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    let productosIniciales = [
        {
            id: 1,
            imagen: "https://i.ibb.co/s9DM2jr/76-AD2-D7-D-A0-F3-4-BE8-99-E8-26-BD95-BA6-CF7.jpg",
            nombre: "torta 1",
            detalle: "Destalles del producto",
            precio: 100,
            categoria:"torta",
            stock: 6
        },
        {
            id: 2,
            imagen: "https://i.ibb.co/rtByN3B/F302-C692-4457-45-F0-9-AEC-8-A3-CD0571688.jpg",
            nombre: "torta 2",
            detalle: "Destalles del producto",
            precio: 200,
            categoria:"torta",
            stock: 5
        },
        {
            id: 3,
            imagen: "https://i.ibb.co/2qkbnJZ/ECCB1-BCF-BE3-C-496-F-9338-381-C0-B712-BDD.jpg",
            nombre: "torta 3",
            detalle: "Destalles del producto",
            precio: 300,
            categoria:"torta",
            stock: 7
        },
        {
            id: 4,
            imagen: "https://i.ibb.co/gF8Xm2n/89970585-1-A98-4-DA0-B308-7-AE79-AE589-C0.jpg",
            nombre: "Bandeja 1",
            detalle: "Destalles del producto",
            precio: 600,
            categoria:"bandeja",
            stock: 5
        },
        {
            id: 5,
            imagen: "https://i.ibb.co/mJ6gKxF/IMG-4678.jpg",
            nombre: "Bandeja 2",
            detalle: "Destalles del producto",
            precio: 630,
            categoria:"bandeja",
            stock: 5
        },
        {
            id: 6,
            imagen: "https://i.ibb.co/JBh20js/IMG-7939.jpg",
            nombre: "Bandeja 3",
            detalle: "Destalles del producto",
            precio: 660,
            categoria:"bandeja",
            stock: 5
        },
    ]

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {id} = useParams()
    

    useEffect(() => {


        const promesa = new Promise((res) => {
            setTimeout(() => {
                res(productosIniciales)

            }, 3000)
        })

        promesa
            .then((respuestaDeLaApi) => {
                setProductos(id?respuestaDeLaApi.filter((producto) => producto.categoria == id ): respuestaDeLaApi)
            })
            .catch((errorDeLaApi) => {
                toast.error("Error en cargar los productos")
            })
            .finally(() => {
                setLoading(false)
            })
    },[id])

    return (
        <div>
            <p className='text'>{loading ? "Cargando..." : "Productos:"}</p>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer