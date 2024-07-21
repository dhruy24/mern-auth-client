import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContextProvider'
import axios from 'axios'
import { toast } from 'react-hot-toast'

function About() {
  const { user, setUser } = useContext(UserContext)

  async function handleLogout() {
    try {
      let { data } = await axios.post("http://localhost:8000/logout")
      if (data.error) {
        toast.error(data.error)

      } else {
        toast.success(data.message)
        setUser(null)
      }
    } catch (err) {
      console.log("cathc error in logout")
    }
  }

  return (
    <div>
      {user ? <><h2>Hello {user.name}</h2><button onClick={handleLogout}>Logout</button></> : <div>Not Logged In</div>}
    </div>
  )
}

export default About