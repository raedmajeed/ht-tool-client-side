import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userLogout, imagedlt } from '../utility/hrSlice'
import { useDispatch } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  image= useSelector((store) => store.hrSlice.img)
  
  console.log("redux-img", image[0]);

  const handleLogout = () => {
    dispatch(userLogout());
    dispatch(imagedlt());
  }

  const handleJobClick = () => {
    navigate('/hr/job');
  };

  const handleProfileClick = () => {
    navigate('/hr/profile');
  };

  const handleLogoClick = () => {
    navigate('/hr/dashboard');
  };

  return (
    <div className='header-container'>
      <div className='logo-side my-3' onClick={handleLogoClick}>
        <p style={{
          fontFamily: "sans-serif",
          fontSize: "30px",
          marginLeft: "30px",
          cursor: "pointer"
          }}>HR TOOL</p>
      </div>
      <div className='about-side my-3'>
        <div style={{ display: 'flex' }}>
          <button
            style={{
              border: "0.1px solid rgb(0, 0, 0.3",
              borderRadius: "4px",
              padding: "5px 10px",
              marginRight: "20px"
            }}
            onClick={handleJobClick}
          >
            ADD A JOB
          </button>
          <div style={{
            border: "0.1px solid rgb(0, 0, 0.3",
            borderRadius: "4px",
            padding: "12px 10px",
            marginRight: "40px"
          }}
          onClick={handleLogout}
          >
            LOGOUT
          </div>
          <img
            src={image[0]}
            alt="Profile"
            className='profile-img'
            onClick={handleProfileClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;