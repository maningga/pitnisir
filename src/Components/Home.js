import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home"> {/* Add id="home" here */}
      <div className="home-container">
        <h1>Welcome to My Portfolio</h1>
        <p>Here’s a brief introduction to what I do.</p>
      </div>
    </section>
  );
};

export default Home;
