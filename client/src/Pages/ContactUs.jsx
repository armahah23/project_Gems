import React from 'react';
import './ContactUs.css';
//import Footer from './components/Footer';
// import addressIcon from './assets/Address.png';
// import emailIcon from './assets/email-logo-icon-email-png-dd3fc13c3c3d6e6d110176ae0d6aa42a.png';
// import callIcon from './assets/telephone-call-computer-icons-iphone-symbol-telefono-656b7d40e24d72890e33727daf924305.png';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-info">
        <h2>Set Information</h2>
        {/* <div className="info-box">
            <p><img src={addressIcon} alt="Address" className="icon" /> Address: autocare.lk NO 139, Wanawasala Road, Colombo - 10</p>
            <p><img src={emailIcon} alt="Email" className="icon" /> Email us: sales@autocare.lk</p>
            <p><img src={callIcon} alt="Phone" className="icon" /> +94771234567</p>
        </div> */}

      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name here" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email here" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your message</label>
            <textarea id="message" placeholder="Say something..." />
          </div>
          <button type="submit" className="submit-button">SEND</button>
        </form>
      </div>
      
    </div>
  );
};

export default ContactUs;
