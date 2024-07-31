import React from "react";
import { FaCamera } from "react-icons/fa";
import { IconContext } from "react-icons";

const ProfilePhoto = ({ user, setShowPhotoForm }) => (
  <div className="user-photo-container">
    <IconContext.Provider value={{ color: "#fff", size: "32px" }}>
      <img
        src={user.photo ? import.meta.env.VITE_BACKEND_URL + '/' + user.photo : './default.png'}
        alt="Profile"
        className="user-photo"
      />
      <button
        className="upload-image-btn"
        onClick={() => setShowPhotoForm(true)}
        title="Upload/Edit Image"
      >
        <FaCamera />
      </button>
    </IconContext.Provider>
  </div>
);

export default ProfilePhoto;
