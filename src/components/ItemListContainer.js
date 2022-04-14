import React from 'react'
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { db } from './Firebase';
import { getDocs, query, collection, where } from 'firebase/firestore'



export const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const { id } = useParams()


    useEffect(() => {

        if (id) {

            const q = query(collection(db, "productos"), where("categoria", "==", id))

            getDocs(q)
                .then((resp) => setProductos(resp.docs.map(p => ({ productos: p.data(), id: p.id }))))
                .catch((err) => console.log(err))

        } else {

            getDocs(collection(db, "productos"))
                .then((resp) => setProductos(resp.docs.map(p => ({ productos: p.data(), id: p.id }))))
                .catch((err) => console.log(err))

        }
    }, [id])

    return (
        <section className='itemlistcontainer'>
            <h2>
                {greeting}
            </h2>
            <ItemList productos={productos} />
        </section>
    )
}


export default ItemListContainer
