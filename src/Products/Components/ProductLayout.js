import React from 'react'
import Header from './Header'
import AddButton from './AddButton'
import ListProducts from './ListProducts'

const ProductLayout = () => {

    // const state = useState(true)

    // return (
    //     <>
    //         <Header title = "productsApp"></Header>
    //         <AddButton></AddButton>
    //         <Button onClick =  { () => state[1](!state[0]) }> Llamada a la funcion  </Button>


    //         {
    //             state[0] ? <Loading></Loading> : 'data of API'

    //         }
    //     </>
    // )


    // El hook se fue al componente ListProducts
    // const [isLoading, setIsLoading] = useState(true) 
    return (
        <>
            <Header title = "productsApp"></Header>
            <AddButton></AddButton>
            {/* Nos LLevamos la logica a un subComponent para mantener el principio de responsabilidad unica */}
            {/* <Button onClick =  { () => setIsLoading(!isLoading) }> Llamada a la funcion  </Button>
            {
                isLoading ? <Loading></Loading> : 'data of API'

            } */}
            <ListProducts></ListProducts>
        </>
    )

}



export default ProductLayout