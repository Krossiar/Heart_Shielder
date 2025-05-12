import React from 'react';
import './ContactUs.css';
import backgroundImage from '../assets/contact-background.jpg'; // replace with actual path

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    alert('Message sent successfully');
    e.target.reset(); // Optional: reset the form fields
  };

  return (
    <div
      className="contact-container"
      id="contact-1"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact us</h2>
        <div className="input-row">
          <div className="input-group">
            <label>First Name *</label>
            <input type="text" required />
          </div>
          <div className="input-group">
            <label>Last Name *</label>
            <input type="text" required />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label>Email *</label>
            <input type="email" required />
          </div>
          <div className="input-group">
            <label>Phone</label>
            <input type="tel" placeholder="+1 (___) ___-____" />
          </div>
        </div>
        <div className="input-group full-width">
          <label>How Can We Help You?</label>
          <textarea rows="4"></textarea>
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

