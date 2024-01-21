import React from 'react';
import imgsrc from '../assets/tempImageTC9KqN.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleJobClick = () => {
    navigate('/hr/job');
  };

  const handleProfileClick = () => {
    navigate('/hr/profile');
  };

  return (
    <div className='header-container'>
      <div className='logo-side my-3'>
        <mark className="px-2 text-white bg-blue-600 rounded dark:bg-grey-500">HR TOOL</mark>
      </div>
      <div className='about-side my-3'>
        <div style={{ display: 'flex' }}>
          <button
            className='mx-10 text-white px-2 bg-blue-600 rounded dark:bg-grey-500'
            onClick={handleJobClick}
          >
            ADD A JOB
          </button>
          <img
            src={imgsrc}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
            onClick={handleProfileClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;