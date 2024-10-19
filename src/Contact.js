import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-purple mb-4">Contact Me</h1>
      {isSubmitted ? (
        <div className="alert alert-success text-center" role="alert">
          <h4>Thank you, {formData.name}!</h4>
          <p>Your message has been sent successfully.</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Message:</strong> {formData.message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" style={{ color: '#6f42c1' }}>Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ borderColor: '#6f42c1' }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: '#6f42c1' }}>Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ borderColor: '#6f42c1' }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: '#6f42c1' }}>Message:</label>
            <textarea
              className="form-control"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ borderColor: '#6f42c1' }}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-purple" style={{ backgroundColor: '#6f42c1', borderColor: '#6f42c1' }}>
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Contact;
