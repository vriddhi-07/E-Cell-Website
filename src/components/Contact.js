import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email address is invalid";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.message) formErrors.message = "Message cannot be empty";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      emailjs.send(
        'service_2vph5lo',
        'template_wskcb9k',
        formData,
        '0c5MRULasSPLQz6BF'
      ).then(() => {
        setSuccessMessage("Thank you! Your message has been sent.");
      }).catch(() => {
        alert("Failed to send message.");
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <div className="contact-content">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          {successMessage && <p className="success">{successMessage}</p>}

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '70%' }}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '70%' }}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={{ width: '70%' }}
            />
            {errors.subject && <p className="error">{errors.subject}</p>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ width: '80%', height: '100px' }}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-details">
          <h3 className="hover-underline">Get in Touch</h3>

          <div>
            <FaMapMarkerAlt size={24} style={{ marginRight: '8px', color: 'white' }} /> <p>IIIT Bangalore, 26/C, <br />
              Electronics City Phase 1, <br/>
              Hosur Road, <br />
              Bengaluru - 560100</p>
          </div>

          <div>
          <a 
            href="mailto:ecell@iiitb.ac.in" 
            className="email-link"
          >
          <FaEnvelope size={24} style={{ marginRight: '8px' }} />
          ecell@iiitb.ac.in
          </a>
          <br /> <br /> <br />
          </div>

          <div>
          <a
            href="https://www.instagram.com/ecell_iiitb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <FaInstagram size={24} style={{ marginRight: '8px' }} /> {/* Instagram Icon */}
            ecell_iiitb
          </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
