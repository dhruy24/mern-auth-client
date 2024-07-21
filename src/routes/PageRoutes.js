import React from 'react'
import {Routes,Route} from "react-router-dom"

import Home from '../pages/Home'
import About from '../pages/About'
import Help from "../pages/Help"
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

function PageRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
  )
}

export default PageRoutes