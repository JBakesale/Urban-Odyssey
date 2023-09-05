import React from 'react';
import '../styles/UserDetailsPage.scss';

const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <div className="user-info">
        <img src={user.profilePicture} className="user-avatar" />
        <div className="user-text">
          <h2>{user.username}</h2>
          <p>Email: {user.email}</p>
        </div>
      </div>
      <div className="user-stats">
        <div className="stat">
          <p className="stat-label">Completed Adventures</p>
          <p className="stat-value">{user.completedAdventures}</p>
        </div>
        <div className="stat">
          <p className="stat-label">Level</p>
          <p className="stat-value">{user.level}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
