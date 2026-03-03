import React from 'react'
import { NavLink } from 'react-router-dom';


const SideBar = () => {

  const menuItems = [
    { name: "Dashboard", href: "/" },
    { name: "Transactions", href: "/transactions" },
    { name: "New Transaction", href: "/newTransaction" },
    { name: "New Acccount", href: "/newAccount" },
  ];

  return (
    // dark:bg-zinc-900
    // dark:border-zinc-800
    <div className='z-10 h-screen bg-white min-w-68 flex flex-col border-r border-gray-200 max-sm:absolute left-0'>        
      {/* Drop down */}
      {/* <WorkspaceDropdown /> */}
      {/* Separator */}
      <hr className='border-gray-200 dark:border-zinc-800'/>
      {/* Menu */}
      <div className='flex-1 overflow-y-scroll no-scrollbar flex flex-col' >
        {/* Menu Items */}
        <div>
          {/* Menu Buttons */}
          <div className='p-4'>
            {
              menuItems.map((item)=>(
                <NavLink to={item.href} key={item.name} className= { ({isActive}) => `flex items-center gap-3 py-2 px-4 text-gray-800 cursor-pointer rounded transition-all ${ isActive ? 'bg-gray-100 ' : 'hover:bg-gray-50'}`}>
                  {item.name}
                </NavLink>
              ))
            }
          </div>
          {/* My Accounts */}
          {/* <MyAccountsSidebar /> */}
        </div>

      </div>        
    </div>
  )
}

export default SideBar