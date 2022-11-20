import React from 'react'
// for routing
import { Link } from 'react-router-dom'
//  react icons
import {BsFillCartFill} from 'react-icons/bs'
// styling
import '../Stylings/CtmNav.css'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items = useSelector((state) => state.cart)
  return (
   <> 
   <div className='nav'>
   <div className='logo'>Navbar</div>
   <div className='navlinks'>
    <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/cart">Cart</Link></li>
       <li className="btn"><BsFillCartFill/>Cart items: {items.length}</li> 
    </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar