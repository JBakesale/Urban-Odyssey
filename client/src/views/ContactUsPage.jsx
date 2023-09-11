import React from 'react';
import '../styles/ContactUsPage.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-us-content">
        <h1>Contact Us</h1>
        <p className="contact-text">
          Want to get in touch with the adventurous minds behind this project? Feel free to reach out to us individually:
        </p>
        <div className="team-members">
          <div className="team-member">
            <img
              src="/images/lucas.jpg" // Replace with Lucas' image source
              className="team-member-image"
            />
            <div>
            <h3>Lucas Molina</h3>
              <div className="contact-info">
                <div className="icon">
                  <EmailIcon />
                </div>
                <div className="email-info">
                  <a href="mailto:molina.lucasg@gmail.com">molina.lucasg@gmail.com</a>
                </div>
              </div>
              <div className="contact-info">
                <div className="icon">
                  <GitHubIcon />
                </div>
                <div className="link">
                  <a href="https://github.com/LucasMolinag">LucasMolinag</a>
                </div>
              </div>
            </div>
            </div>
          <div className="team-member">
            <img
              src="/images/josh.jpg" // Replace with Joshua's image source
              className="team-member-image"
            />
            <div>
              <h3>Joshua Baker</h3>
              <div className="contact-info">
                <div className="icon">
                  <EmailIcon />
                </div>
                <div className="email-info">
                  <a href="mailto:joshuadfbaker@gmail.com">joshuadfbaker@gmail.com</a>
                </div>
              </div>
              <div className="contact-info">
                <div className="icon">
                  <GitHubIcon />
                </div>
                <div className="link">
                  <a href="https://github.com/JBakesale">JBakesale</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
