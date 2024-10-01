import { useState } from 'react'
import ShoppingListProvider from '../../contex/ShoppingListProvider'
import ShoppingList from '../ShoppingList/ShoppingList'
import AddItemForm from '../AddItemForm/AddItemForm'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
      <ShoppingListProvider>
        <Routes>
          <Route>
            <Route path="/" element={< ShoppingList />} />
            <Route path="/agregar" element={< AddItemForm />} />
          </Route>
        </Routes>
        </ShoppingListProvider>
      </BrowserRouter>
    </>
  )
}

export default App
