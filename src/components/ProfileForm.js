import React, { useState } from 'react'
import ProfileDisplayCard from './ProfileDisplayCard'
import ProfileImageDisplay from './ProfileImageDisplay'
import { useEffect } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

const ProfileForm = () => {
  const [profiles, setProfile] = useState([]);
  const [pic, setPic] = useState(profiles.ProfileImg);
  const [name, setName] = useState(profiles.Name);
  const [no, setNo] = useState(profiles.PhoneNumber);
  const [email, setEmail] = useState(profiles.Email);
  const [company, setCompany] = useState(profiles.CompanyName);

  const handleSubmit = async () => {
    console.log(pic);
    const reqData = {
      email: email || profiles.Email,
      name: name || profiles.Name,
      phoneNumber: no || profiles.PhoneNumber,
      companyName: company || profiles.CompanyName,
      profileImg: pic || profiles.ProfilePic
    }
    console.log("reqdata",reqData)
    try {
      const token = localStorage.getItem("token")
      const response = await axios.put("http://localhost:8082/api/v1/hr/profile/set", reqData, {
        headers: {
          "Authorization": "Bearer " + token
        }
      })
        if (response.status == 200) {
          toast.success("successfully updated")
        }
    } catch(error) {
      console.log(error);
      toast.error("user already exists")
    }
  }

  const handlePicChange = (newPic) => {
    setPic(newPic);
  };
  
  const handleNameChange = (newName) => {
    setName(newName);
  };
  
  const handleNoChange = (newNo) => {
    setNo(newNo);
  };
  
  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };
  
  const handleCompanyChange = (newCompany) => {
    setCompany(newCompany);
  };

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const token = localStorage.getItem('token');
      const resp = await axios.get('http://localhost:8082/api/v1/hr/profile/get', {
        headers: {
          "Authorization": "Bearer " + token
        }
      });
      const profile = resp.data.data;
      console.log("profile",profile)
      setProfile(profile);
    } catch(error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <div style={{
        display: "flex", justifyContent: "center", height: "100vh", alignItems: "center",}}>
        <div style={{
          height: "800px", 
          width: "600px", 
          border: "0.3px solid", 
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          }}>
          <ul>
            {profiles &&
            <>
            <ProfileImageDisplay img={profiles.ProfileImg} onPicChange={handlePicChange}/>
            <ProfileDisplayCard heading="Name" name={profiles.Name} onPicChange={handleNameChange}/>
            <ProfileDisplayCard heading="Phone Number" name={profiles.PhoneNumber} onPicChange={handleNoChange}/>
            <ProfileDisplayCard heading="Email" name={profiles.Email} onPicChange={handleEmailChange}/>
            <ProfileDisplayCard heading="Company Name" name={profiles.CompanyName} onPicChange={handleCompanyChange}/>
            </>
}
          </ul>
          <div style={{
            display: "flex",
            flexDirection: "column"
          }}>
            <button style={{
              marginTop: "40px",
              alignItems: "center",
              fontSize: "30px",
              border: "0.2px solid"
            }}
            onClick={handleSubmit}
            >APPLY</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileForm