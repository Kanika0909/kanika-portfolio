import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <Hero />
      <div className="max-w-5xl mx-auto px-6"><hr className="border-[rgba(124,111,247,0.18)]" /></div>
      <About />
      <div className="max-w-5xl mx-auto px-6"><hr className="border-[rgba(124,111,247,0.18)]" /></div>
      <Skills />
      <div className="max-w-5xl mx-auto px-6"><hr className="border-[rgba(124,111,247,0.18)]" /></div>
      <Projects />
      <div className="max-w-5xl mx-auto px-6"><hr className="border-[rgba(124,111,247,0.18)]" /></div>
      <Experience />
      <div className="max-w-5xl mx-auto px-6"><hr className="border-[rgba(124,111,247,0.18)]" /></div>
      <Certifications />
      <div className="max-w-5xl mx-auto px-6"><hr className="border-[rgba(124,111,247,0.18)]" /></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
