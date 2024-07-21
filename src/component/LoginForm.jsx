import React, { useState } from 'react'

import axios from 'axios'
import toast from 'react-hot-toast'

function LoginForm() {

	const [details, setDetails] = useState({
		email: "",
		password: ""
	})

	async function handleLogin() {
		console.log("login details", details)

		//axios.get("http://localhost:8000/")
		try{
			let {data} = await axios.post("http://localhost:8000/login",details)
			if(data.error){
				toast.error(data.error)
			}else{
				toast.success("success")
				setDetails({
					email: "",
					password: ""
				})
				// Navigate()
			}
		}catch(err){
			console.log("loginnn errrorrr")
		}
	}

	return (
		<div>
			<input type="email" placeholder='email' value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} />
			<input type="password" placeholder='password' value={details.password} onChange={(e) => setDetails({ ...details, password: e.target.value })} />
			<button onClick={handleLogin}>Login</button>
		</div>
	)
}

export default LoginForm