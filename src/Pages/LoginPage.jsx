import React, { use } from 'react'

import {useRef, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCredentials } from '../auth/authSlice.js';

import {useLoginMutation} from '../auth/authApiSlice.js';

import lock from '../assets/lock.png';
import mail from  '../assets/mail.png'



// useEffect

const LoginPage = () => {
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [login, {isLoading}] = useLoginMutation();

  useEffect(() => {
    console.log("entering use effect hiiiiiiiiiiiiiiiiiiiiii")
    emailRef.current.focus();
  }, []);

  // useEffect(() => {
  //   setErrMsg('');
  // }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
   
      const userData = await login({email, password}).unwrap();
      console.log(userData);
      dispatch(setCredentials({...userData, email}));
      setEmail('');
      setPassword('');
      navigate("/");

    }catch(err){
      console.log('Login Failed');
      // if(!err?.response){
      //   setErrMsg('No Server Response');
      // }else if(err.response?.status === 400){
      //   setErrMsg('Missing Email or Password');
      // }else if(err.response?.status === 401){
      //   setErrMsg('Unauthorized');
      // }else{
      //   setErrMsg('Login Failed');
      // }
      // errRef.current.focus();
    }
  }

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);


  return (
    // <div className=' bg-gray-200 flex flex-col items-center justify-center gap-4 mg-10 p-4'>
    <div className='h-screen bg-linear-to-r from-[#2A00B7] to-[#42006C] pt-1 '>
      <div className=' w-[600px] flex flex-col m-auto mt-50 pb-13 pt-13 bg-white rounded-lg'>
        <div className='flex flex-col items-center gap-2.25 w-full'>
          <h1 className=' text-[#3C009D] font-bold text-3xl '>Login Page</h1>
          <p className=' text-gray-400 text-xl'>Don't have an account yet? 
            <span className='text-[#3C009D] cursor-pointer ml-1'>Sign Up</span>
          </p>
          <div className='w-15 h-1.5 bg-[#3C009D] rounded '></div>
        </div>
        <form onSubmit={handleSubmit} className=' mt-20 flex flex-col gap-4 items-center '>
          <div  className=' w-120 h-20 flex items-center bg-[#EAEAEA] rounded focus-within:outline-none focus-within:border-2 focus-within:border-blue-500'>
            <img src={mail} alt="" className='w-7.5 mx-7.5 ' />
            <input 
              type="text" 
              placeholder='Email address' 
              ref={emailRef}
              value={email}
              onChange={handleEmailChange}
              className=' flex-1 h-full bg-transparent border-none outline-none text-gray-800 text-base' 
            />
          </div>
          <div  className=' w-120 h-20 flex items-center bg-[#EAEAEA] rounded focus-within:outline-none focus-within:border-2 focus-within:border-blue-500'>
            <img src={lock} alt="" className='w-7.5 mx-7.5 ' />
            <input 
              type="password" 
              placeholder='Password' 
              value={password}
              onChange={handlePasswordChange}
              className='flex-1 h-full bg-transparent border-none outline-none text-gray-800 text-base ' 
            />
          </div>
            <button type='submit' className='mt-20 border-none text-white rounded-2xl bg-linear-to-r from-[#2A00B7] to-[#42006C] text-2xl py-5 px-15 cursor-pointer'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage