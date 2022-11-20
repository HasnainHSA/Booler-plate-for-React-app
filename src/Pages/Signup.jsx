import React from 'react'
// styling
import '../Stylings/Ctmform.css'
// for routing
import { Link, useNavigate, } from 'react-router-dom'
import { useState } from 'react'
// Importing firebase services 
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../Firebaseconfig'
// Importing firebase firestore database services
import { collection, addDoc } from 'firebase/firestore'
// import Navbar from './Navbar'


const Signup = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const navigate = useNavigate()

    const [successmsg, setSuccessmsg] = useState('')
    const [errormsg, setErrormsg] = useState('')

   const handelSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredentail) => {
        const user = userCredentail.user;
        const initailcartvalue = 0;
        console.log(user)

        addDoc(collection(db ,"usersData"),{
            username: username,
            email: email,
            password: password,
            phone: phone,
            cart: initailcartvalue,
            uid: user.uid
        }).then(()=> {
            setSuccessmsg("New user login succesfully,you will redirect to login page")
            setUsername('')
            setEmail('')
            setPassword('')
            setPhone('')
            setErrormsg('')

            setTimeout(()=>{
                setSuccessmsg('')
                navigate('/login')
            },4000);
        })
        .catch((error) =>{
            setErrormsg(error.message)
        })
   })
   .catch((error) =>{
    if(error.message == 'Firebase: Error (auth/invalid-email).'){
        setErrormsg("Please fill all the reqiured fields")
    }
    else if(error.message == 'Firebase: Error (auth/email-already-in-use).'){
        setErrormsg("User already exists")
    }
})

}
    return (

   
    <div className="wrapper">
    <h1>Sign up</h1>
    <form onSubmit={handelSubmit}>
        {/* messages for validations */}
        {successmsg && <>
        <div className='success-msg'>
            {successmsg}
        </div></>}

        {errormsg && <>
        <div className='error-msg'>
            {errormsg}
        </div></>}

        <input  onChange={(e)=>setUsername(e.target.value)}  type="text" placeholder="Enter Your fullname" />

        <input  onChange={(e)=>setEmail(e.target.value)}  type="text" placeholder="Enter your email" /> 

        <input  onChange={(e)=>setPhone(e.target.value)}  type="tel" placeholder="Enter your phone number" />

        <input  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password" />

        <div className="terms">
            I agree to these <a href="#">Terms and condition</a>
        </div>
        <button type='submit'>Sign up</button>
        <div className="member">
            Already a member? <Link to="/login" >Login here</Link>
        </div>
    </form>
</div>

  )
}

export default Signup