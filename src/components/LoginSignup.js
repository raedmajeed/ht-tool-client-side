import React from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const LoginSignup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  return (
    <div className='login-container-hero'>
      <div className='login-container'>
      <h1 className="mb-4 text-7xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Login.</h1>
        <div className='email-container'>
          <label for="helper-text" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@hr.com"></input>
        </div>
        <div className='email-container'>
          <label for="helper-text" class="block mb-3  text-2xl font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password"></input>
        </div>
        <a onClick={() => {navigate('/hr/signup')}} class="font-medium text-black-600 dark:text-black-500 hover:underline cursor-pointer">Signup?</a>
        <button type="submit" onClick={() =>navigate("/hr/dashboard")} class="mt-4 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-black-600 dark:text-black-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">LOGIN</button>
      </div>
      </div>
  )
}

export default LoginSignup