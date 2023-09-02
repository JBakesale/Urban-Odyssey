import React, { useState } from 'react';
import '../styles/Navbar.scss'; // Import the SCSS file

function Navbar() {
  // State to track the user's authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Function to handle login
  const handleLogin = () => {
    // Simulate a login action (you should replace this with actual authentication logic)
    // For example, you can use Firebase Authentication or your backend authentication API.
    // If authentication is successful, set isLoggedIn to true and setUserEmail with the user's email.
    setIsLoggedIn(true);
    setUserEmail('example@example.com');
  };

  // Function to handle logout
  const handleLogout = () => {
    // Simulate a logout action (you should replace this with actual logout logic)
    // If the user logs out, set isLoggedIn to false and clear the userEmail.
    setIsLoggedIn(false);
    setUserEmail('');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Urban Odyssey
        </a>
        {/* Display "Logged in as" to the left of the navigation list */}
        {isLoggedIn && (
          <span className="navbar-text">
            Logged in as: {userEmail}
          </span>
        )}
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
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            {/* Conditionally render login/logout */}
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
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
