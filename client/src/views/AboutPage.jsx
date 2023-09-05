import React from 'react';
import '../styles/AboutUsPage.scss';

const AboutUs = () => {
  return (
    <div className="auth-page">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          We are a team of three passionate junior developers who want to inspire and motivate
          people to embark on exciting adventures and experience the thrill of exploration on their day to day.
          <p />
          Our mission is to turn simple chores and short walks into adventures people can enjoy. This way, we aspire to make the world an adventurous playground for everyone.
        </p>
        <div className="team-container">
        <h2>Meet the Team!</h2>
        <p />
        <div className="team-member">
        <img
            src="member-image.jpg" // Replace with the actual image source
            alt="Team Member"
            className="team-member-image"
        />
        <div>
            <h3>Ahmad Daadaa</h3>
            <p>Knows all the cool stuff</p>
        </div>
        </div>
        <div className="team-member">
        <img
            src="member-image.jpg" // Replace with the actual image source
            alt="Team Member"
            className="team-member-image"
        />
        <div>
            <h3>Joshua Baker</h3>
            <p>Has cool long hair</p>
        </div>
        </div>
        <div className="team-member">
        <img
            src="member-image.jpg" // Replace with the actual image source
            alt="Team Member"
            className="team-member-image"
        />
        <div>
            <h3>Lucas Molina</h3>
            <p>Tries really hard to be cool</p>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
