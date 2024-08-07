// src/Components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="content-container">
        <h2>Contact Me</h2>
        <p>
          Email: {' '}
          <a href="mailto:kenortiz14@gmail.com" className="contact-link">kenortiz14@gmail.com</a>
        </p>
        <p>
        Facebook: {' '}
          <a href="https://www.facebook.com/KenOrtiz" target="_blank" rel="noopener noreferrer" className="contact-link">Facebook: Ken Ortiz</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
