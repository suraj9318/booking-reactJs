import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './login.css'
const Login = () => {
    const [credentials, setCredentials] = useState({
        username : '',
        password : ''
    })
    const {user,loading,error,dispatch} = useContext(AuthContext);
    
   const handleClick = async(e)=>{
    e.preventDefault();
    console.log("hiiiiiii");
    dispatch({type :"LOGIN_START"})

    try {
        const response = await axios.post('http://localhost:8080/api/auth/login',credentials)
        dispatch({type :  'LOGIN_SUCCESS', payload :response.data})
    } catch (error) {
        dispatch({type :"LOGIN_FAILURE", payload : error.response.data})  
    }
   }

   console.log(user);   
  return (
    <div className='login'>

        <div className="lcontainer">
            <input type="text"  value={credentials.username} onChange={(e)=>{setCredentials({...credentials,username:e.target.value})}} id="username" placeholder='username' />
            <input type="password" value={credentials.password} onChange={(e)=>{setCredentials({...credentials,password:e.target.value})}}  id="password" placeholder='password' />
            <button className="lButton" onClick={handleClick}>Login</button>
            {error && <span>{error.message}</span>}
        </div>

    </div>


  )
}

export default Login
