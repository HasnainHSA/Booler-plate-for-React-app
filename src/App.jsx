import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Navbar from './Custom components/Navbar'
import Cart from './Pages/Cart'
import Error from './Pages/Error'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
//import MuiNavbar from './Mui components/Muinavbar'
import Header from './Mui components/header2/header.jsx'
const App = () => {
  return (
    <>
      {/* <Navbar/> */}
      {/* <MuiNavbar/> */}
      <Header/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='*' element={<Error />}/>
    </Routes>

    
    </>
  )
}

export default App