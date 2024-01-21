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
