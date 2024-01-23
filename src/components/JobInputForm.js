import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { axiosInterceptors } from '../lib/axiosInterceptors';

const JobInputForm = () => {
  const [jobName, setJobName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobSalaryRange, setJobSalaryRange] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = {
      JobName: jobName,
      JobDescription: jobDescription,
      Salary: jobSalaryRange
    }
    const token = localStorage.getItem("token")
    try {
      const resp =  await axios.post("http://localhost:8082/api/v1/hr/job/", data, {
        headers: {
          "Authorization": 'Bearer ' + token
        }
      })
      if (resp.status === 200) {
        toast.success("JOB ADDED SUCCESFULLY")
        navigate("/hr/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error("check your input");
    }
  }

  return (
    <div className='login-container-hero'>
      <div className='login-container'>
        <h1 className="mb-4 text-7xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Add a Job</h1>
        <div className='job-details'>
          <div className='job-input'>
            <label htmlFor="job-name" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Job Name</label>
            <input
              type="text"
              value={jobName}
              onChange={(e) => {setJobName(e.target.value)}}
              id="job-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter job name"
            />
          </div>
          <div className='job-input'>
            <label htmlFor="job-description" className="block mb-3 text-2xl font-medium text-gray-900 dark:text-white">Job Description</label>
            <textarea
              value={jobDescription}
              onChange={(e) => {setJobDescription(e.target.value)}}
              id="job-description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter job description"
            />
          </div>
          <div className='job-input'>
            <label htmlFor="job-salary" className="block mb-3 text-2xl font-medium text-gray-900 dark:text-white">Salary Range</label>
            <input
              type="text"
              value={jobSalaryRange}
              onChange={(e) => {setJobSalaryRange(e.target.value)}}
              id="job-salary"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter salary range"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-black-600 dark:text-black-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Add Job
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobInputForm;