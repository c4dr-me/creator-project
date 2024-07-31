import React, { useState } from "react";
import styled from "styled-components"; 
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const ChangepwdForm = styled.form`
form input[type="text"], form input[type="password"] {
  flex-grow: 1; 
  margin-right: -14px; 
  margin-top: 0 !important;
}
 .password-input {
  position: relative;
  display: flex;
  align-items: center;
}
  .password-input-container {
  margin-bottom: 20px;
}

 .password-input input {
  width: 25vw !important; 
}

.toggle-password-visibility {
  position: absolute;
  right: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  margin: auto;
}
  .toggle-password-visibility svg {
  width: 20px; 
  height: 20px; 
}
`

const ChangePassword = ({ handlePasswordFormSubmit, setShowPasswordForm }) => {
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  return (
    <ChangepwdForm>
    <form onSubmit={(e) => handlePasswordFormSubmit(e, currentPassword, newPassword)} className="change-pwd">
      <h2>Change Password</h2>
      <div className="password-input-container">
        <label>Current Password</label>
        <div className="password-input">
          <input
            type={showCurrentPassword ? "text" : "password"}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowCurrentPassword((prev) => !prev)}
            className="toggle-password-visibility"
          >
            {showCurrentPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>
      </div>
      <div className="password-input-container">
        <label>New Password</label>
        <div className="password-input">
          <input
            type={showNewPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowNewPassword((prev) => !prev)}
            className="toggle-password-visibility"
            title={showNewPassword ? "Hide Password" : "View Password"}
          >
            {showNewPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>
      </div>
      <button type="submit" className="btn">Change Password</button>
      <button type="button" className="btn" onClick={() => setShowPasswordForm(false)}>
        Cancel
      </button>
    </form>
    </ChangepwdForm>
  );
};

export default ChangePassword;