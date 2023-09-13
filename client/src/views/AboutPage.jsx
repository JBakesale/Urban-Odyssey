import React from 'react';
import '../styles/AboutUsPage.scss';

const AboutUs = () => {
  return (
    <div className="about-page">
      <img className="about-image" src={"images/about.jpg"} alt="aboutPage"/>
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          We are a team of two passionate junior developers who want to inspire and motivate
          people to embark on exciting adventures and experience the thrill of exploration on their day to day.
          <p />
          Our mission is to turn simple chores and short walks into adventures people can enjoy. This way, we aspire to make the world an adventurous playground for everyone.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
