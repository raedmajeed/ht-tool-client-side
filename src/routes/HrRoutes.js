<<<<<<< HEAD
import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import HrProfile from "../pages/HrProfile";
import HrJob from "../pages/HrJob";
import UserContext, { UserContextProvider } from "../utility/UserContext";
import Dashboard from "./../pages/Dashboard";
=======
// import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import HrProfile from '../pages/HrProfile';
import HrJob from '../pages/HrJob';

>>>>>>> 76824e3

const HrRoutes = () => {
  return (
    <div>
      <UserContext>
        <Routes>
          <Route path="/home" element={<Home />} name="home"></Route>
          <Route path="/hr/*" element={<HrRouteWrapper />}></Route>
          <Route path="/" element={<Navigate to="home" replace />}></Route>
        </Routes>
      </UserContext>
    </div>
  );
};

// this is a Wrapper for HR routes based on USER status
const HrRouteWrapper = () => {
  const { user } = useContext(UserContextProvider);

  return user ? <PostAuthHrRoutes /> : <PreAuthHrRoutes />;
};

// Pre Auth HR Routes
function PreAuthHrRoutes() {
  return (
    <Routes>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="/*" element={<Navigate to="signup" replace />}></Route>
    </Routes>
  );
}

// Post Auth HR Routes
function PostAuthHrRoutes() {
  return (
    <Routes>
      <Route path="profile" element={<HrProfile />}></Route>
      <Route path="job" element={<HrJob />}></Route>
      <Route path="dashboard" element={<Dashboard />}></Route>
      <Route path="/*" element={<Navigate to="dashboard" replace />}></Route>
    </Routes>
  );
}

export default HrRoutes;
