import { useContext } from "react";
import { ShopingContex } from "../../contex/ShoppingListProvider";

const ShoppingItem = () => {
    const { Productos, setComparacion , eliminarItem, marcarComoComprado, setComprado, comprado} = useContext(ShopingContex)
    return (
        <>
            {Productos.map((productoss) => (
                
                                    <ul className="flex flex-col space-y-3 mt-4">
                    <li className="flex items-center space-x-2 ">
                        <strong className="font-semibold text-gray-800">{productoss.id}</strong>
                        <input 
                        onClick={() => marcarComoComprado(productoss.id)}
                        id="default-checkbox" 
                        type="checkbox" 
                        value=""
                        
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <span
                            className={Productos.comprado ?  'text-red-600' : 'text-slate-950' }>
                            {productoss.Producto}</span
                        >
                        <button 
                        onClick={() => eliminarItem(productoss.Producto)} className="btn btn-danger">Eliminar</button>
                    </li>
                </ul>
                

            ))}


        </>
    );
}

export default ShoppingItem;