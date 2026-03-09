import React, { useState } from 'react'

import { useGetAccountsQuery } from '../account/accountsApiSlice';
import { selectCurrentUser} from '../auth/authSlice';

import {
  CheckSquareIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from "lucide-react";

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MyAccountsSidebar = () => {

    const user = useSelector(selectCurrentUser);

    const {
        data:accounts,
        isLoading,
        isError,
        error
    } = useGetAccountsQuery(user.id);
    console.log(accounts);

    // const accounts = [
    //     { id: '1', balance: '100', accountType: 'CHECKING', isActive: true },
    //     { id: '2', balance: '20000', accountType: 'SAVING', isActive: true },
    //     { id: '3', balance: '40', accountType: 'CHECKING', isActive: false },
    // ];
    
    const [showMyTasks, setShowMyTasks] = useState(false);


    const toggleMyTasks = () => {
    setShowMyTasks(prev => !prev);
    };


  return (
    <div className='mt-6 px-3'>
        {/* Header */}
        <div onClick={toggleMyTasks} className='flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800'>
            <div className='flex gap-3 items-center'>
                <CheckSquareIcon size={16} className='text-gray-500 dark:text-zinc-400'/>
                <span className='text-sm font-medium text-gray-700 dark:text-zinc-300'>My Accounts</span>
            </div>
            {showMyTasks ?
                <ChevronRightIcon size={16} className='text-gray-500 dark:text-zinc-400'/> :
                <ChevronDownIcon size={16} className='text-gray-500 dark:text-zinc-400'/>
             }
        </div>
        {/* Accounts List */}
        {showMyTasks && ( 
            <div className="mt-2 pl-2">
                <div className="space-y-1">
                    {accounts.length === 0 ? (
                        <div className="px-3 py-2 text-xs text-gray-500 dark:text-zinc-500 text-center">
                            No Accounts available
                        </div>
                        
                    ) : (

                        accounts.map((account) => ( 
                        <Link key={account.id} to="/"className="w-full rounded-lg transition-all duration-200 text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white">
                            <div className='flex items-start gap-2 px-3 py-2 w-full min-w-0'>
                                {/* isActive Dot */}
                                <div className={`w-2 h-2 rounded-full ${account.isActive ? 'bg-green-500' : 'bg-yellow-500 '} shrink-0`}></div>
                                {/* Text */}
                                <div className='flex-1 min-w-0'>
                                    <p className=' text-xs font-medium truncate '> {account.accountType}</p>
                                    <p className=' text-xs text-gray-500 dark:text-zinc-500 lowercase'> {account.balance} $</p>
                                </div>
                            </div>
                        </Link>
                    )))
                    }
                </div>
            </div>
         )}
    </div>
  )
}

export default MyAccountsSidebar