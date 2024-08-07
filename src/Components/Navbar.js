import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section with id ${section} not found.`);
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
      </ul>
    </nav>
  );
};


export default Navbar;
