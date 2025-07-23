import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/placeOrder.jsx'
import Footer from './components/Footer/Footer.jsx'

export default function App() {
  return (
    <>
    
   <div className='app'> 
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="/cart" element={<Cart/>} />
        <Route path ="/order" element={<PlaceOrder/>} />
      </Routes> 
     
    </div>
    <Footer />
    
    </>
 
  )
}
