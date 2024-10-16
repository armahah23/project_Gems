import React, { useState } from 'react';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="contact-us">
      <div className="contact-info">
        <h1>GET IN TOUCH</h1>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i> Address: autocare.lk <br />
          NO 139, Wanawasala Road, Colombo - 10
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i> Email us: sales@autocare.lk
        </div>
        <div className="info-item">
          <i className="fas fa-phone"></i> +94771234567
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <h3>Your Name</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter your name here"
            value={formData.name}
            onChange={handleChange}
          />

          <h3>Your Email</h3>
          <input
            type="email"
            name="email"
            placeholder="Enter your email here"
            value={formData.email}
            onChange={handleChange}
          />

          <h3>Subject</h3>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <h3>Your message</h3>
          <textarea
            name="message"
            placeholder="Say something..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
