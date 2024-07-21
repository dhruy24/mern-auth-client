import React,{createContext, useState, useEffect, Children} from 'react'
import axios from 'axios'

export const UserContext = createContext({})


function UserContextProvider({children}) {
    const [user, setUser] = useState()

    useEffect(()=>{
        if(!user){
            axios.get('http://localhost:8000/profile').then((res)=>{
                setUser(res.data)
            })
        }
    },[])

    const data = {
        user,
        setUser
    }
  return (
    <UserContext.Provider value={data}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
