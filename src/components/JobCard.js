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