import React, { useState } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'certifications':
        return <Certifications />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <nav>
          <button onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>About Me</button>
          <button onClick={() => setActiveSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</button>
          <button onClick={() => setActiveSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</button>
          <button onClick={() => setActiveSection('certifications')} className={activeSection === 'certifications' ? 'active' : ''}>Certifications</button>
          <button onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button>
        </nav>
      </header>
      <main className="content">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;