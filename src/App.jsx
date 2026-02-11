import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage.jsx'

function App() {
  return (
    // <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-violet-500'>
    <div className=''>
      <Routes>  
        <Route path="/login" element={<LoginPage />} />
      </Routes>

    </div>
  )
}

export default App
