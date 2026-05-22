import React, { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-16 transition-all duration-300 ${
      scrolled ? 'bg-[rgba(10,10,15,0.9)] backdrop-blur-md border-b border-[rgba(124,111,247,0.18)]' : 'bg-transparent'
    }`}>
      <div
        onClick={() => scrollTo('home')}
        className="font-display font-extrabold text-lg text-[#a78bfa] cursor-pointer tracking-tight"
      >
        KA.
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8">
        {links.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            className="text-[#8b88b0] hover:text-[#a78bfa] text-xs font-medium uppercase tracking-widest transition-colors duration-200 bg-transparent border-none cursor-pointer"
          >
            {l}
          </button>
        ))}
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-[#8b88b0] rounded transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-[#8b88b0] rounded transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-[#8b88b0] rounded transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-[rgba(10,10,15,0.97)] border-b border-[rgba(124,111,247,0.18)] flex flex-col items-center gap-6 py-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-[#8b88b0] hover:text-[#a78bfa] text-xs font-medium uppercase tracking-widest transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
