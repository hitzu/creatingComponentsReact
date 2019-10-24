import React, { useState, useEffect }  from 'react'
import Loading from './Loading'
import {getProducts} from '../services/'


const ListProducts = () => {

    const [isLoading, setIsLoading] = useState(true) 
    const [users, setProducts] = useState([])

    useEffect(  () => {
        async function loadProducts () {
            const response = await getProducts()
            console.log("desde el useEffect",response)
            return response
        }

        loadProducts()
    })

    return (
        isLoading ? <Loading></Loading> : 'data of API'
    )

    {/* <Button onClick =  { () => setIsLoading(!isLoading) }> Llamada a la funcion  </Button>
        {
            isLoading ? <Loading></Loading> : 'data of API'

        } 
    */}
}

export default ListProducts
