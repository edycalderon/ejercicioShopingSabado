import { createContext, useState } from "react";

export const ShopingContex = createContext()
const ShoppingListProvider = ({children}) => {
    const [Producto , setProducto] = useState('')
    const [id , setId] = useState('')
    const [Check , setCheck] = useState('')
    const [ Productos , setProductos] = useState([])
    const [ contador , setContador] = useState(0)
    const [ comparacion , setComparacion] = useState('')
    

    // Agrega un nuevo artículo a la lista.
    const agregarItem = () =>{

    const useForm = {
        Producto: Producto,
        id: id,
        contador: contador
    }
    setProductos([...Productos, useForm])
        setContador(contador + 1)
    }

    //Elimina un artículo de la lista.
    const eliminarItem = (tema) => {
        
        const filtrarProducto = Productos.filter(item => item.Producto !== tema);
        setProductos(filtrarProducto)
    }

    //Marca o desmarca un artículo como comprado.
    const marcarComoComprado = (id) => {
        const subrayar = Productos.filter(item => item.Producto === id)
        setProductos(subrayar)

    }
    return (
        <ShopingContex.Provider value={{
            Producto , setProducto,
            id , setId,
            setCheck,
            agregarItem,
            Productos,
            setComparacion,
            eliminarItem,
            marcarComoComprado
        }}>
            {children}
        </ShopingContex.Provider>
    );
}

export default ShoppingListProvider;