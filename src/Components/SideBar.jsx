import React from 'react'


const SideBar = () => {
  return (
    <div className=' h-screen bg-white w-64 '>
        <div className='flex items-center justify-between p-4 border-b border-white/20'>
            <h1 className='text-xl font-bold'>Dashboard</h1>
            <button >
            {/* <FaBars size={20} /> */}
            </button>
        </div>
    </div>
  )
}

export default SideBar