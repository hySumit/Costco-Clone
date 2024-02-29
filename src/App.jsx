import { useState } from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Components/Home/Home'
import SlideImages from './Components/Home/Slider'
import { Products } from './Components/Products/Products'
import { Delivery } from './Components/DeliveryPage/Delivery'
import { Products2 } from './Components/Products/Products2'
import { Slider2 } from './Components/Home/Slider2'
import { ProductGrid } from './Components/Products/ProductGrid'

// import './App.css'

function App() {


  return (
    <>
    <Navbar/>
    <Home/>
    <SlideImages/>
    <Products/>
    <Delivery/>
    <Products2/>
    <Slider2/>
    <ProductGrid/>
    </>
  )
}

export default App
