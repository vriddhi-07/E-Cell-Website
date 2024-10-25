import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for error messages
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Basic form validation
  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email address is invalid";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.message) formErrors.message = "Brevity is the soul of wit, but we need your message to have text it :)";
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      emailjs.send(
        'service_2vph5lo',
        'template_wskcb9k',
        formData,
        '0c5MRULasSPLQz6BF' // Replace with your user ID
      ).then((result) => {
        console.log(result.text);
        setSuccessMessage("Thank you! Your message has been sent.");
      }).catch((error) => {
        console.log(error.text);
        alert("Failed to send message.");
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {successMessage && <p className="success">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p className="error">{errors.subject}</p>}
        </div>

        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;