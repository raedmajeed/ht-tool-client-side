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
      </div>
    </div>
  );
};

export default DashboardBody;
