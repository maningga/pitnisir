import React, { useState, useRef } from 'react';
import './Navbar.css';
import backgroundMusic from '../piksor/water.mp3'; // Import the audio file

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const handleClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section with id ${section} not found.`);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li className={activeSection === 'home' ? 'active' : ''}>
          <a href="#home" onClick={() => handleClick('home')}>Home</a>
        </li>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <a href="#about" onClick={() => handleClick('about')}>About</a>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <a href="#projects" onClick={() => handleClick('projects')}>Projects</a>
        </li>
        <li className={activeSection === 'skills' ? 'active' : ''}>
          <a href="#skills" onClick={() => handleClick('skills')}>Skills</a>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={() => handleClick('contact')}>Contact</a>
        </li>
        <li>
          <button onClick={toggleMute} className="mute-button">
            {isMuted ? '🔇' : '🔊'}
          </button>
        </li>
      </ul>
      <audio ref={audioRef} autoPlay loop>
        <source src={backgroundMusic} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </nav>
  );
};

export default Navbar;
