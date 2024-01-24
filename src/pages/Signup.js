<<<<<<< HEAD
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { UserContextProvider } from "../utility/UserContext";

const Signup = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContextProvider);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    setUser({
      email,
      password,
      name: "Raed",
    });
    navigate("/hr/dashboard");
  };

  return (
    <div className="login-container-hero">
      <div className="login-container">
        <h1 className="mb-4 text-7xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-0xl dark:text-black">
          Signup.
        </h1>
        <div className="email-container">
          <label
            htmlFor="helper-text"
            className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@hr.com"
          ></input>
        </div>
        <div className="email-container">
          <label
            htmlFor="helper-text"
            className="block mb-3  text-2xl font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="password"
          ></input>
        </div>
        <a
          onClick={() => {
            navigate("/hr/login");
          }}
          className="font-medium text-black-600 dark:text-black-500 hover:underline cursor-pointer"
        >
          Login?
        </a>
        <button
          type="submit"
          onClick={() => submitHandler()}
          className="mt-4 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-black-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          SIGNUP
        </button>
=======
import React, { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../App.css'
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [phoneNo, setPhoneNo] = useState("")
  const [companyName, setCompanyName] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async () => {
    const reqData = {
      email,
      password,
      name,
      phoneNo,
      companyName
    }
    try {
      const response = await axios.post("http://localhost:8082/api/v1/hr/signup", reqData)
        if (response.status == 200) {
          navigate("/hr/login")
        }
    } catch(error) {
      toast.error("user already exists")
    }
  }


  
  return (
    <div className='login-container-hero'>
      <div className='signup-container'>
      <h1 className="mb-4 text-7xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-0xl dark:text-black">Signup.</h1>
        <div className='email-container'>
          <label htmlFor="helper-text" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@hr.com"></input>
        </div>
        <div className='email-container'>
          <label htmlFor="helper-text" class="block mb-3  text-2xl font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}
           id="helper-text" aria-describedby="helper-text-explanation"
           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
           placeholder="password"></input>
        </div>
        <div className='email-container'>
          <label htmlFor="helper-text" class="block mb-3  text-2xl font-medium text-gray-900 dark:text-white">Name</label>
          <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name"></input>
        </div>
        <div className='email-container'>
          <label htmlFor="helper-text" class="block mb-3  text-2xl font-medium text-gray-900 dark:text-white">Phone Number</label>
          <input type="text" value={phoneNo} onChange={(e) => {setPhoneNo(e.target.value)}} id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number"></input>
        </div>
        <div className='email-container'>
          <label htmlFor="helper-text" class="block mb-3  text-2xl font-medium text-gray-900 dark:text-white">Company Name</label>
          <input type="text" value={companyName} onChange={(e) => {setCompanyName(e.target.value)}} id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Company Name"></input>
        </div>
        <a onClick={() => {navigate('/hr/login')}} class="font-medium text-black-600 dark:text-black-500 hover:underline cursor-pointer">Login?</a>
        <button type="submit" onClick={handleSubmit} className="mt-4 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-black-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">SIGNUP</button>
>>>>>>> 76824e3
      </div>
    </div>
  );
};

export default Signup;
