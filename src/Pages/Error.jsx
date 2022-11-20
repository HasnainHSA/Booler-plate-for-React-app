import React from 'react'
import { Link } from 'react-router-dom'
import '../Stylings/Error.css'
const Error = () => {
  return (
    <div className='error'>
    <div class="container">
 
      <h1 className='errorh1'>404</h1>
            <h2 className='errorh2'>Oops! Page not found.</h2>
      <p className='errorp'>We can't find the page you're looking for.</p>
      <Link to="/" className='errora'>Go back home</Link>
    </div>
    </div>
  )
}

export default Error