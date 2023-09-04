// src/components/UserDetailsPage.js
import React from 'react';

function UserDetails() {
  // Replace with actual user data (you can fetch it from an API or state)
  const user = {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    profilePhoto: 'url-to-profile-photo.jpg',
    completedAdventures: 42,
    level: 5,
  };

  return (
    <div>
      <h1>User Details</h1>
      <div>
        <img src={user.profilePhoto} alt="User Profile" />
        <h2>{user.username}</h2>
        <p>Email: {user.email}</p>
        <p>Completed Adventures: {user.completedAdventures}</p>
        <p>Level: {user.level}</p>
      </div>
    </div>
  );
}

export default UserDetails;
