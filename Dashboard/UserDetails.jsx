import React from "react";

const UserDetails = ({ user, handleProfileEdit, handlePasswordChange }) => (
  <>
    <div className="user-details">
      <h1 className="wlc-msg">
        Welcome<span className="wlc-user">,</span>{" "}
        <span className="wlc-user">{user.name} !!</span>
      </h1>
      <div className="user-detail-container">
        <p>Name</p> <span>{user.name}</span>
      </div>
      <div className="user-detail-container">
        <p>Email</p> <span>{user.email}</span>
      </div>
      <div className="user-detail-container">
        <p>Phone No.</p> <span>{user.telephone}</span>
      </div>
    </div>
    <div className="user-btn">
      <button className="btn" onClick={handleProfileEdit}>
        Edit Profile
      </button>
      <button className="btn" onClick={handlePasswordChange}>
        Change Password
      </button>
    </div>
  </>
);

export default UserDetails;
