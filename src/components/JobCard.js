<<<<<<< HEAD
import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-600">{job.desc}</p>
    </div>
  );
};

export default JobCard;
=======
import React from 'react';

const JobCard = (props) => {
  const { jobName, jobDescription, jobSalaryRange, numberOfApplicants, index, deleteHandler, jobId } = props
  const dltHandler = () => {
    deleteHandler(index, jobId)
  }
  
  return (
    <div className='job-card'>
      <div>
        <h2 className="text-3xl font-extralight">{jobName}</h2>
        <p className="text-gray-600 font-extralight">{jobDescription}</p>
        <p className="text-gray-600 font-extralight">Salary Range: {jobSalaryRange}</p>
        <p className="text-gray-600 font-extralight">Applicants: {numberOfApplicants}</p>
      </div>
      <div>
        <button className='job-button' onClick={dltHandler}>DELETE</button>
      </div>
    </div>
  );
}

export default JobCard;
>>>>>>> 76824e3
