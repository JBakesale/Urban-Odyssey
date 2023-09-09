import React, { useState } from 'react';
import '../styles/Navbar.scss'; // Import the SCSS file
import logo from "../images/logo_transparent.png"
import { useUserLocation } from '../providers/UserLocationContext';


function Navbar() {
  // State to track the user's authentication status, latitude, and longitude
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const { userLocation, setUserLocation } = useUserLocation();

  // Function to handle login
  const handleLogin = () => {
    // Simulate a login action (you should replace this with actual authentication logic)
    // For example, you can use Firebase Authentication or your backend authentication API.
    // If authentication is successful, set isLoggedIn to true, setUserEmail with the user's email,
    // and retrieve the user's location.
    setIsLoggedIn(true);
    setUsername('Ponce de Leon');

    // Retrieve the user's location using geolocation API
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setUserLocation({ lat: latitude, lng: longitude });
        console.log("inside geolocation function !!!!!!!");
      });
    } else {
      // Geolocation is not available in the user's browser
      console.error('Geolocation is not supported by this browser.');
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    // Simulate a logout action (you should replace this with actual logout logic)
    // If the user logs out, set isLoggedIn to false, clear the userEmail, and userLocation.
    setIsLoggedIn(false);
    setUsername('');
    setUserLocation(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact-us">
                Contact
              </a>
            </li>
            {/* Conditionally render login/logout */}
            {isLoggedIn ? (
                <>
                <li className="nav-item">
                  <a className="nav-link" href="/user-details">
                    User
                  </a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
                ) : (
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogin}>
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;