import React, { useState } from 'react'
import axios from 'axios'
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

function RegisterPage() {

    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault()
        try{
            const {data} = await axios.post('http://localhost:8000/register',details)
            console.log("dataaaaaaaaaaaaaaaaaaaaaaaa",data)
            if(data.error){
                toast.error(data.error)
            }else{
                toast.success("Sign Up Success")
                navigate('/login')
            }
        }catch(err){
            console.log("client post err", err)
        }
    }

    return (
        <>
            <form>
                <input type="name" placeholder='name' value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} />
                <input type="email" placeholder='email' value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} />
                <input type="password" placeholder='password' value={details.password} onChange={(e) => setDetails({ ...details, password: e.target.value })} />
                <button onClick={handleLogin}>Login</button>
            </form>
        </>
    )
}

export default RegisterPage