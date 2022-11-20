import React from 'react'
// Importing firebase services 
import { auth, db } from '../Firebaseconfig'
// Importing firebase firestore database services
import { collection, getDocs, query, where } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'

const NavbarFire = () => {

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

       const navigate = useNavigate()

       const handlelogout =()=> {
             auth.signOut().then(()=>{
                navigate('/login')
             })
       }
  return (
    <>
    <div className='navbar'>
       <div className='leftcontainer'>
           <img src="" alt="" />
       </div>
       <div className='rightcontainer'>
          {<div> !loggeduser && <nav>
           <Link>home</Link>
           <Link>register</Link>
           <Link>login</Link>
          </nav>

          <div className='cart btn'> 
            <img src="" alt="" />
            <span>{loggeduser[0].cart}</span>
          </div>
          </div> 
          }

          {loggeduser && <nav>
            <Link>home</Link>
            <Link>
              <p>profile icon</p>
            </Link>
            <button className='logout' onClick={handlelogout }>logout</button>
          </nav>
          }
       </div>
    </div>
    </>
  )
}

export default NavbarFire