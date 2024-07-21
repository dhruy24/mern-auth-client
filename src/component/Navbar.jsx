import React from 'react'
import { NavLink } from 'react-router-dom'

import "../styles/navbar.css"

function Navbar() {

  let styles = ""

    
  return (
    <div className='container'>
        <NavLink className="links" to="/">Home</NavLink>
        <NavLink className="links" to="/about">About</NavLink>
        <NavLink className="links" to="/help">Help</NavLink>
        <NavLink className="links" to="/login">Login</NavLink>
        <NavLink className="links" to="/register">Register</NavLink>
    </div>
  )
}

export default Navbar