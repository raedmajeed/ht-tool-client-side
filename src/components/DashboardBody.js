<<<<<<< HEAD
import React, { useEffect } from "react";
import JobCard from "./JobCard";
import api from "./../utility/api";

const jobs = [
  {
    id: 1,
    title: "React Developer",
    desc: "Want a good Dev",
  },
  {
    id: 2,
    title: "Node Developer",
    desc: "Want a good Dev",
  },
  {
    id: 3,
    title: "Go Developer",
    desc: "Want a good Dev",
  },
  {
    id: 4,
    title: "Java Developer",
    desc: "Want a good Dev",
  },
];

const DashboardBody = () => {
  useEffect(() => {
    async function getJobs() {
      const fakeTodos = await api.hr.getJobs();
      console.log(fakeTodos);
    }

    getJobs();
  }, []);

  return (
    <div className=" p-2">
      <div className=" text-4xl text-blue">Jobs Listed</div>
      <div className="text-blue">
        {jobs.map((job) => (
          <div key={job.id}>
            <JobCard job={job} />
          </div>
        ))}
=======
import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import axios from 'axios';
import toast from 'react-hot-toast';

const DashboardBody = () => {
  const [jobs, setJobs] = useState([]);

  const deleteHandler = async (index, jobId) => {
    setJobs(jobs.filter((v, i) => i !== index));
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8082/api/v1/hr/job/${jobId}`, {
        headers: {
          "Authorization": "Bearer " + token
        }
      });
      toast.success(`successfuly deleted`)
    } catch(error) {
      toast.error(`not deleted`)
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem('token');
      const resp = await axios.get('http://localhost:8082/api/v1/hr/job/getHrJobs', {
        headers: {
          "Authorization": "Bearer " + token
        }
      });
      console.log(resp.data.data, "DATA");
      setJobs(resp.data.data);
    } catch(error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <div className='dashboard-container'>
        <div style={{fontFamily: "monospace", fontSize: "30px"}}>
          Jobs Listed
        </div>
        <div className='job-cards-container'>
          {jobs.map((v, i) => (
            <JobCard
              key={v.ID}
              jobName={v.JobName}
              jobDescription={v.JobDescription}
              jobSalaryRange={v.Salary}
              numberOfApplicants={v.NumberOfApplicants}
              deleteHandler={deleteHandler}
              jobId={v.ID}
              index={i}
            />
          ))}
        </div>
>>>>>>> 76824e3
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default DashboardBody;
=======
export default DashboardBody;
>>>>>>> 76824e3
