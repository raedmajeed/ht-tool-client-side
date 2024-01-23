import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { image, imagedlt } from '../utility/hrSlice';

const ProfileImageDisplay = (props) => {
  const { img, onPicChange } = props;
  const [edit, setEdit] = useState(false);
  const [newImg, setNewImg] = useState(img);
  const dispatch = useDispatch()

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    let img = URL.createObjectURL(file)
    dispatch(imagedlt())
    dispatch(image(img))
    onPicChange(img)
    setNewImg(img);
  };

  return (
    <div>
      {edit ? (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <div><img className="round-image" src={newImg || img} alt="Profile Picture" /></div>
          <input type="file" onChange={handleFileChange} />
          <button
            style={{ backgroundColor: "grey", color: "white", padding: "5px 10px", borderRadius: "5px" }}
            onClick={(e) => {
              setEdit(false);
              // handleFileChange(e)
            }}
          >
            SAVE IMG
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <div><img className="round-image" src={newImg || img} alt="Profile Picture" /></div>
          <button
            style={{ backgroundColor: "grey", color: "white", padding: "5px 10px", borderRadius: "5px" }}
            onClick={() => setEdit(true)}
          >
            EDIT IMG
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileImageDisplay;