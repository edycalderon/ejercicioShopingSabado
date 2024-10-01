import { Link } from "react-router-dom";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

const ShoppingList = () => {

    return (


        <div className="rounded-2xl shadow-lg p-3 bg-indigo-500 text-gray-600 max-w-xs">
            <div
                className="relative flex flex-col items-center p-5 pt-10 bg-blue-100 rounded-xl"
            >
                <span
                    className="mt-[-12px] absolute top-0 right-0 flex items-center bg-indigo-500 rounded-l-full py-2 px-3 text-xl font-semibold text-amber-100"
                >
                    $49 <small className="text-xs ml-1 text-white">/ Mis Productos</small>
                </span>
                <p
                    className="text-xl font-semibold text-blue-800 bg-indigo-200 px-2 py-1 rounded-lg"
                >
                    Lista De Pruductos
                </p>
                    <ShoppingItem/>
                <div className="w-full flex justify-end mt-6">
                    <Link
                        to={'/agregar'}
                        className="w-full py-3 text-center text-white bg-indigo-600 rounded-lg font-medium text-lg hover:bg-indigo-700 focus:outline-none"

                    >
                        Agregar Producto
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default ShoppingList;