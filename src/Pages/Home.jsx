import React from 'react'
// hooks
import { useState, useEffect } from 'react'
import Product from '../Custom components/Product'
import MuiFooter from '../Mui components/Muifooter'
import Hero from '../Mui components/Muihero'
import Card from '../Mui components/muiCart'
// Importing firebase services 
import { auth, db } from '../Firebaseconfig'
// Importing firebase firestore database services
import { collection, getDocs, query, where } from 'firebase/firestore'

const Home = () => {

  const Getcurrentdata = () =>{
    const [user, setUser] = useState("")
    const collectionRef = collection(db ,"usersData")
 
    useEffect(()=>{
     auth.onAuthStateChanged(userlogged=>{
       if (userlogged) {
         const getUsers = async () =>{
           const q = query(collection(db ,"usersData"), where("uid", "==", userlogged.uid))
           // console.log(q)
           const data = await getDocs(q)
           setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
         }
         getUsers()
       }
       else{
         setUser(null)
       }
     })
    },[])
    return user
   }
   
   const loggeduser = Getcurrentdata()
   if(loggeduser){console.log(loggeduser[0].email)}

  return (
    <>
    <Hero />
    <p id='para1'>Username: {loggeduser? loggeduser[0].username:"no data"}</p>
    <div>Home</div>
    <Product/>
    <Card/>
    <MuiFooter/>
    </>
  )
}

export default Home