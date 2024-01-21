import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import HrProfile from '../pages/HrProfile';
import HrJob from '../pages/HrJob';


const HrRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='home' replace />}></Route>
        <Route path='/home' element={<Home />} name='home'></Route>
        <Route path='/hr'>
          <Route path='signup' element={<Signup />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='profile' element={<ProtectedRoute />}>
            <Route path='' element={<HrProfile />}></Route>
          </Route>
          <Route path='job' element={<ProtectedRoute />}>
            <Route path='' element={<HrJob />}></Route>
          </Route>
          <Route path='dashboard' element={<ProtectedRoute />}>
            <Route path='' element={<Dashboard />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
    )
}

export default HrRoutes