import React from 'react'
import { NavLink } from 'react-router-dom';
import { assets  } from '../assets/assets';
import { CopyPlus, LayoutDashboardIcon, Logs, ArrowLeftRight } from 'lucide-react'
import MyAccountsSidebar from './MyAccountsSidebar';


const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {

  const menuItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboardIcon },
    { name: "Transactions", href: "/transactions", icon: Logs },
    { name: "New Transaction", href: "/newTransaction", icon: ArrowLeftRight },
    { name: "New Acccount", href: "/newAccount",icon: CopyPlus },
  ];

  return (
    // dark:bg-zinc-900
    // dark:border-zinc-800
    <div className={`z-10 h-screen bg-white dark:bg-zinc-900 min-w-68 flex flex-col border-r border-gray-200 dark:border-zinc-800 max-sm:absolute transition-all ${isSidebarOpen ? "left-0" : "-left-full"}`}>        
      {/* Header */}
      <div className='flex p-4'>
        <img className='w-32 block dark:hidden transition-opacity duration-300' src={assets.logo_light} alt="" />
        <img className='w-32 hidden dark:block transition-opacity duration-300' src={assets.logo_dark} alt="" />
      </div>
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
                <NavLink to={item.href} key={item.name} className= { ({isActive}) => `flex items-center gap-3 py-2 px-4 text-gray-800 dark:text-zinc-100 cursor-pointer rounded transition-all ${ isActive ? 'bg-gray-100 dark:bg-zinc-900 dark:bg-linear-to-br dark:from-zinc-800 dark:to-zinc-800/50' : 'hover:bg-gray-50 dark:hover:bg-zinc-800/60'}`}>
                  <item.icon size={16} />
                  {item.name}
                </NavLink>
              ))
            }
          </div>
          {/* My Accounts */}
          <MyAccountsSidebar />
        </div>

      </div>        
    </div>
  )
}

export default SideBar