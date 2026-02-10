import React from 'react'

import lock from '../assets/lock.png';
import mail from  '../assets/mail.png'

const LoginPage = () => {
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
        <form className=' mt-20 flex flex-col gap-4 items-center '>
          <div className=' w-120 h-20 flex items-center bg-[#EAEAEA] rounded'>
            <img src={mail} alt="" className='w-7.5 mx-7.5 ' />
            <input type="text" placeholder='Email address' className=' flex-1 h-full bg-transparent border-none outline-none text-gray-800 text-base' />
          </div>
          <div  className=' w-120 h-20 flex items-center bg-[#EAEAEA] rounded'>
            <img src={lock} alt="" className='w-7.5 mx-7.5 ' />
            <input type="password" placeholder='Password' className='flex-1 h-full bg-transparent border-none outline-none text-gray-800 text-base' />
          </div>
            <button type='submit' className='mt-20 border-none text-white rounded-2xl bg-linear-to-r from-[#2A00B7] to-[#42006C] text-2xl py-5 px-15 cursor-pointer'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage