import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import './login.css'
import Navbar from '../../components/navbar/Navbar'

const Login = () => {
    const [credentials, setCredentials] = useState({
        username : '',
        password : ''
    })
    const {loading,error,dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
   const handleClick = async(e)=>{
    e.preventDefault();
   
    if(credentials.username && credentials.password){
        dispatch({type :"LOGIN_START"})

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login',credentials)
            dispatch({type :  'LOGIN_SUCCESS', payload :response.data})
            navigate('/')
        } catch (error) {
            dispatch({type :"LOGIN_FAILURE", payload : error.response.data})  
        }
    }
    else{
        document.querySelector('.error').innerHTML ='All fields are required!!'
    }
   }
  
  return (
        <>
        <Navbar/>
    <div className='login'>
        <div className="lcontainer">
            <h2 className='headingLog'>Login</h2>
            {error && <span className='error'>{error.message}</span>}
            <input type="text"  value={credentials.username} onChange={(e)=>{setCredentials({...credentials,username:e.target.value})}} id="username" placeholder='username' />
            <input type="password" value={credentials.password} onChange={(e)=>{setCredentials({...credentials,password:e.target.value})}}  id="password" placeholder='password' />
            <button disabled={loading} className="lButton" onClick={handleClick}>Login</button>
        </div>

    </div>
        </>


  )
}

export default Login
