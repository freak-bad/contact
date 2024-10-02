import React, { useState } from 'react';

const ContactSection = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form Data:', formData); // You can replace this with actual form submission logic
    alert('Form submitted successfully!');
    // Optionally, reset the form after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p><i className="fas fa-envelope"></i>DantewadaGovernment123@gmail.com</p>
          <p><i className="fas fa-phone"></i> +255 773 696 310</p>
          <p><i className="fas fa-phone"></i> +255 773 696 355</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="team-image">
          <img src="https://cdn.pixabay.com/photo/2024/01/08/17/59/dandelion-8496044_1280.jpg" alt="Team" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
