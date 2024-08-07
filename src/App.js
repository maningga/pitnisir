import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home style={{ marginTop: '120px' }} /> {/* Apply margin-top inline */}
      <div className="main-container">
        <div className="grid-item"><About /></div>
        <div className="grid-item"><Projects /></div>
        <div className="grid-item"><Skills /></div>
        <div className="grid-item"><Contact /></div>
      </div>
    </div>
  );
}

export default App;
