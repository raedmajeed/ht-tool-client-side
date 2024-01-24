import React from 'react'
import { Outlet } from 'react-router'
import Login from '../pages/Login';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const loggedInUser = useSelector((store) => store.hrSlice.user);
  let user = false
  if (loggedInUser.length == 1) {
    user = true
  }

  return (
    <div>{
      user ?
      <Outlet />:
      <Login />
    }</div>
  )
}

export default ProtectedRoute