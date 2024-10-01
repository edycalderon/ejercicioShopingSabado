import { useContext } from "react";
import { ShopingContex } from "../../contex/ShoppingListProvider";
import { Link } from "react-router-dom";

const AddItemForm = () => {
    const { setProducto,  setId, agregarItem } = useContext(ShopingContex)
    return (
        <>

            <div>
                <label for="inputname" class="block text-gray-800 font-semibold text-sm"
                > Nombre Del Producto</label
                >
                <div class="mt-2">
                    <input
                        onChange={(e) => setProducto(e.target.value)}
                        type="text"
                        name="inputname"
                        class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
            </div>
            <div>
                <label for="inputname" class="block text-gray-800 font-semibold text-sm"
                > Id Del Producto</label
                >
                <div class="mt-2">
                    <input
                        onChange={(e) => setId(e.target.value)}
                        type="text"
                        name="inputname"
                        class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
            </div>
            <Link to={'/'}>
            <button 
            onClick={agregarItem}
            class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg        
                border-blue-600
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                Agregar
            </button>
            </Link>

        </>
    );
}

export default AddItemForm;