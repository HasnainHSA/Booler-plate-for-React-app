import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// styling
import '../Stylings/Ctmcart.css'
import { remove } from '../Store/Cartslice'
import Userprofile from './Userprofile'


const Cart = () => {
  const products = useSelector((state)=> state.cart)
  const dispatch = useDispatch()

  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }

  return (
    <>
    <div>
      <h3>Cart</h3>
      <div className='cardcon'>
        {
         products.map(product =>(
           <div className='cartCard'>
            <img src={product.image} alt="" />
              <h4><a href="">{product.title}</a></h4>
              <h5>{product.price}</h5>
              <button className='btn' onClick={()=> handleRemove(product.id)}>Remove</button>
           </div>
         ))
        }
      </div>
    </div>

    <Userprofile/>
    </>
  )
}

export default Cart