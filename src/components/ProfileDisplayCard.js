import React, { useState } from 'react';

const ProfileDisplayCard = (props) => {
  const { heading, name, onPicChange } = props;
  const [values, setValues] = useState(name);
  const [edit, setEdit] = useState(false);

  
  return (
    <div>
      {edit ?
        <div>
          <div style={{ paddingLeft: "20px", marginTop: "30px" }}>
            <header style={{ fontFamily: "monospace", fontSize: "30px", marginTop: "20px" }}>
              {heading}
            </header>
            <div className='flex justify-between'>
              <input
                type="text"
                value={values}
                onChange={(e) => {
                  setValues(e.target.value);
                  onPicChange(e.target.value);
                }}
                style={{ fontSize: "20px" }}
              />
              <button
                style={{ backgroundColor: "grey", color: "white", padding: "5px 10px", borderRadius: "5px" }}
                onClick={(e) => {
                  setEdit(false);
                }}
              >
                SAVE
              </button>
            </div>
          </div> 
        </div>
        :
        <div style={{ paddingLeft: "20px", marginTop: "30px" }}>
          <header style={{ fontFamily: "monospace", fontSize: "30px", marginTop: "20px" }}>
            {heading}
          </header>
          <div className='flex justify-between'>
            <div style={{ fontSize: "20px" }}>{values || name}</div>
            <button
              style={{ backgroundColor: "grey", color: "white", padding: "5px 10px", borderRadius: "5px" }}
              onClick={() => {
                setEdit(true);
              }}
            >
              EDIT
            </button>
          </div>
        </div> 
      }
    </div>
  );
};

export default ProfileDisplayCard;