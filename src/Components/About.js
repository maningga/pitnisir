// src/Components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-container"> {/* Use <section> for semantic HTML */}
      <div className="content-container">
        <h2>About Me</h2>
        <p>Nothing too much, I love doing what I like.</p>
      </div>
    </section>
  );
};

export default About;
