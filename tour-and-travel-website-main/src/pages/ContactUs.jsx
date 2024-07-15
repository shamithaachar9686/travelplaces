import React from 'react';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  return (
    <div className="container pt-14">
    <div className="py-10">
      <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
    Contact Us
      </h1>
    </div>
    <div className="contact-us-form">
      </div>
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;
