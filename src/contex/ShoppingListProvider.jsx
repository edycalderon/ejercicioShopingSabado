import { createContext } from "react";

export const ShopingContex = createContext()
const ShoppingListProvider = ({children}) => {
    const useForm = {

    }

    // Agrega un nuevo artículo a la lista.
    const agregarItem = (nombre) =>{

    }

    //Elimina un artículo de la lista.
    const eliminarItem = (id) => {

    }

    //Marca o desmarca un artículo como comprado.
    const marcarComoComprado = (id) => {

    }
    return (
        <ShopingContex.Provider value={{

        }}>
            {children}
        </ShopingContex.Provider>
    );
}

export default ShoppingListProvider;