import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyPlatform</Link>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
      <i class="fa-solid fa-bars"></i>
      </button>
      <div className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/post-job">Post a Job</Link>
      </div>
      {/* <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div> */}
      <div className={`navbar-icons ${isOpen ? 'show' : ''}`}>
        {isAuthenticated && (
          <>
            <Link to="/notifications">Notifications</Link>
            <Link to="/messages">Messages</Link>
            <div className="navbar-profile">
              <img src={user.profilePicture} alt="Profile" />
              <div className="navbar-dropdown">
                <Link to="/profile">My Profile</Link>
                <Link to="/my-jobs">My Jobs</Link>
                <Link to="/settings">Settings</Link>
                <button onClick={onLogout}>Logout</button>
              </div>
            </div>
          </>
        )}
        {!isAuthenticated && (
          <div className="navbar-auth">
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;