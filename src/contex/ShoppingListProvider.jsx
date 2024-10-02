import { createContext, useState } from "react";

export const ShopingContex = createContext()
const ShoppingListProvider = ({children}) => {
    const [Producto , setProducto] = useState('')
    const [id , setId] = useState('')
    const [Check , setCheck] = useState('')
    const [ Productos , setProductos] = useState([])
    const [ contador , setContador] = useState(0)
    const [ sacarBoleano , setSacarBoleano ] = useState()
    console.log(sacarBoleano, 'soy boleano')
    // Agrega un nuevo artículo a la lista.
    const agregarItem = () =>{

    const useForm = {
        Producto: Producto,
        id: contador + 1,
        comprado: false
    }
    setProductos([...Productos, useForm])
        setContador(contador + 1)
    }

    //Elimina un artículo de la lista.
    const eliminarItem = (tema) => {
        const filtrarProducto = Productos.filter(item => item.Producto !== tema);
        setProductos(filtrarProducto)
        setContador(contador - 1)
    }

    //Marca o desmarca un artículo como comprado.
    const marcarComoComprado = (id) => {
        const array = [...Productos]
        let encontrara = array.findIndex((e ) => e.id === id)
        array[encontrara].comprado === true ? array[encontrara].comprado = false
        :array[encontrara].comprado = true
        console.log(array, 'soy array')
        setSacarBoleano(array.map((comprados) => (comprados.comprado)))
        setProductos(array)


    }
    return (
        <ShopingContex.Provider value={{
            Producto , setProducto,
            id , setId,
            setCheck,
            agregarItem,
            Productos,
            eliminarItem,
            marcarComoComprado, 
        }}>
            {children}
        </ShopingContex.Provider>
    );
}

export default ShoppingListProvider;