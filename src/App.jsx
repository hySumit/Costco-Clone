
import Login from './Components/Login/Login'
import { Allroutes } from './Components/Routes/Allroutes'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './Components/Login/Signup'
import { Cart } from './Components/Login/Cart'
import { useContext } from 'react'
import { AuthContext } from './Components/AuthContext/AuthContext'
import { SingleProduct } from './Components/Login/SingleProduct'

// import './App.css'

function App() {
  const {isAuth} = useContext(AuthContext)


  return (
    <>
    <Routes>
      <Route path='/' element={<Allroutes/>}/>

      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/cart' element={isAuth ? <Cart/> : <Login/>}/>
      <Route path='/product/:productId' element={<SingleProduct />} />
    </Routes>
    </>
  )
}

export default App
