import { useState } from 'react'
import ShoppingListProvider from '../../contex/ShoppingListProvider'
import ShoppingList from '../ShoppingList/ShoppingList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ShoppingListProvider>
    <ShoppingList/>

    </ShoppingListProvider>
    <p>hola</p>
    </>
  )
}

export default App
