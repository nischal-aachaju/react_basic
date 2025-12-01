import React from 'react'
import Cart from './component/Cart.jsx'
import navbar from './component/navbar.jsx'
const App = () => {

  return (
    <div> 
      
        
        
        {navbar()}
        {navbar()}
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        {navbar()}
        {navbar()}
        <Cart/>
        {navbar()}
    </div>

  )
}

export default App