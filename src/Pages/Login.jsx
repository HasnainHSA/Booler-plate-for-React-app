import React from 'react'
// styling 
import '../Stylings/Ctmform.css'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// Importing firebase services 
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {

   

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [successmsg, setSuccessmsg] = useState('')
    const [errormsg, setErrormsg] = useState('')

    const auth = getAuth()
    const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredentail)=> {
            setSuccessmsg("you will redirect to Home page")
    
            setEmail('')
            setPassword('')
            setErrormsg('')
    
            setTimeout(()=>{
                setSuccessmsg('')
                navigate('/')
            },3000);
        })
        .catch((error) =>{
            console.log(error.message)
            if(error.message == 'Firebase: Error (auth/invalid-email).'){
                setErrormsg("Please fill all the reqiured fields")
            }
            else if(error.message == 'Firebase: Error (auth/user-not-found).'){
                setErrormsg("Email not found")
            }
            else if(error.message == 'Firebase: Error (auth/wrong-password).'){
                setErrormsg("Wrong password")
            }
        })
    }
   
return (
    <div className="wrapper">
        <h1>login</h1>
        <form >
               {/* messages for validations */}
        {successmsg && <>
        <div className='success-msg'>
            {successmsg}
        </div></>}

        {errormsg && <>
        <div className='error-msg'>
            {errormsg}
        </div></>}

            <input  onChange={(e)=>setEmail(e.target.value)}  type="text" placeholder="Enter your email" /> 

            <input  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password" />

            <div className="terms">
             I agree to these <a href="#">Terms and condition</a>
            </div>
            <button type='submit' onClick={handleLogin}>Login</button>
            
            <div className="member">
                Create Account <Link to="/signup" >SignUp here</Link>
            </div>
        </form>
    </div>
 )
}

export default Login;