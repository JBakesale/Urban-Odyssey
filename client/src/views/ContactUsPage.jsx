import React from 'react';
import '../styles/ContactUsPage.scss';

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-us-content">
        <h1>Contact Us</h1>
        <p>
          Want to get in touch with the adventurous minds behind this project? Feel free to reach out to us individually:
        </p>
        <div className="team-members">
          <div className="team-member">
            <img
              src="ahmad-image.jpg" // Replace with Ahmad's image source
              className="team-member-image"
            />
            <div>
              <h3>Ahmad Daadaa</h3>
              <p>Email: <a href="mailto:ahmad@example.com">ahmad@example.com</a></p>
            </div>
          </div>
          <div className="team-member">
            <img
              src="joshua-image.jpg" // Replace with Joshua's image source
              className="team-member-image"
            />
            <div>
              <h3>Joshua Baker</h3>
              <p>Email: <a href="mailto:joshua@example.com">joshua@example.com</a></p>
            </div>
          </div>
          <div className="team-member">
            <img
              src="lucas-image.jpg" // Replace with Lucas's image source
              className="team-member-image"
            />
            <div>
              <h3>Lucas Molina</h3>
              <p>Email: <a href="mailto:lucas@example.com">lucas@example.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
