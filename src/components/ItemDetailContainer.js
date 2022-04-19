import React from 'react'
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { db } from './Firebase';
import { getDocs, query,getDoc,doc, collection, where } from 'firebase/firestore'

export const ItemDetailContainer = () => {

    const [productos, setProductos] = useState({})
    const { id } = useParams()


    useEffect(() => {
        const q = query(collection(db, "productos"), where("id", "==", id))

        getDocs(q)
            .then((resp) => setProductos(resp.docs.map(p => ({ productos: p.data() }))))

        const docRef = doc(db, 'productos', id);
        getDoc(docRef)
            .then((res) => setProductos(res.data()))


    }, [id])
    return (
        <div className='itemdetailcontainer'>
            <ItemDetail productos={productos} />
        </div>
    )
}


export default ItemDetailContainer