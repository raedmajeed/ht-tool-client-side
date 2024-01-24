<<<<<<< HEAD
import React from "react";
import { useContext } from "react";
import { UserContextProvider } from "../utility/UserContext";

const HrProfile = () => {
  const { user } = useContext(UserContextProvider);
=======
import React from 'react'
import Header from '../components/Header'
import ViewProfile from './ViewProfile'

const HrProfile = () => {
  return (
    <div>
      <Header />
      <ViewProfile />
    </div>
  )
}
>>>>>>> 76824e3

  return (
    <div className=" p-2">
      <div className=" text-4xl text-blue">My Profile</div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
        <div>
          <span className="text-gray-600">Email: </span>
          <span className="text-gray-600">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default HrProfile;
