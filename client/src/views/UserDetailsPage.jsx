import React from 'react';
import UserDetails from '../components/UserDetails'; // Import the UserDetails component
import '../styles/UserDetailsPage.scss'; // Import the CSS file for UserDetailsPage

const UserDetailsPage = () => {
  // Sample user object
  const user = {
    profilePicture: 'images/poncedeleon.jpg',
    username: 'Ponce De Leon',
    email: 'fountain@youth.com',
    completedAdventures: 10,
    level: '5',
  };

  return (
    <div className="user-details-page">
      <header className="header">
        <h1>User Profile</h1>
      </header>
      <UserDetails user={user} /> {/* Render UserDetails component */}
      <div className="achievements">
        {/* Add any achievements content you want here */}
      </div>
      <footer className="footer">
      </footer>
    </div>
  );
};

export default UserDetailsPage;
