import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
import { selectCurrentToken } from './authSlice';

const RequireAuth = () => {
    // const state = getState();
    const token = useSelector(selectCurrentToken);
  
    if(!token){
        return <Navigate to="/unauthorized" replace />;
    }
    return <Outlet/>;
  
}

export default RequireAuth