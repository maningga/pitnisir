import React from 'react';
import './Home.css';
import profileImage from '/Users/ken/Desktop/migterm/porpolyo/src/piksor/reli.JPG'; // Adjust the path if necessary

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1>Welcome to My Portfolio</h1>
        <p>Hey there! I'm Yorszen Ken T. Ortiz, 3rd year irregular student.</p>
      </div>
    </section>
  );
};

export default Home;
