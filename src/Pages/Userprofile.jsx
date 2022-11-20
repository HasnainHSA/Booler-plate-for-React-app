import React from 'react'
import { useState, useEffect } from 'react'
// Importing firebase services 
import { auth, db } from '../Firebaseconfig'
// Importing firebase firestore database services
import { collection, getDocs, query, where } from 'firebase/firestore'

const Userprofile = () => {

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

  return (
    <div>
        {loggeduser? <div>
            <p>your account details</p>
            <div className='data-row'> 
                <span>yourname</span>
                <span>{loggeduser[0].username}</span>
            </div>
            <div className='data-row'> 
                <span>your email: </span>
                <span>{loggeduser[0].email}</span>
            </div>
            <div className='data-row'> 
                <span>your phone number: </span>
                <span>{loggeduser[0].phone}</span>
            </div>
        </div>:<div></div> }
    </div>
  )
}

export default Userprofile