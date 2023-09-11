import React from 'react';
import '../styles/UserDetailsPage.scss';
import Avatar from "@mui/material/Avatar"

const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <div className="user-info">
        <Avatar src={user.profilePicture} className="user-avatar" sx={{ width: 100, height: 100 }} />
        <div className="user-text">
          <h2>{user.username}</h2>
          <p>{user.email}</p>
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
