import React from 'react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,111,247,0.14) 0%, transparent 70%)",
        }}
      />
      {/* Grid */}
      <div className="hero-grid-bg absolute inset-0 pointer-events-none" />

      <div className="relative text-center max-w-3xl mx-auto">
        <div className="animate-fadeUp delay-100 inline-block bg-[rgba(124,111,247,0.1)] border border-[rgba(124,111,247,0.18)] text-[#c4b5fd] text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          Available for opportunities · 2026
        </div>

        <h1
          className="animate-fadeUp delay-200 font-display font-extrabold leading-none tracking-tighter text-[#f0effe] mb-5"
          style={{
            fontSize: "clamp(3rem, 9vw, 6rem)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Kanika
          <br />
          <span className="text-[#a78bfa]">Agrawal</span>
        </h1>

        <p
          className="animate-fadeUp delay-300 text-[#8b88b0] font-light leading-relaxed max-w-lg mx-auto mb-10"
          style={{ fontSize: "1.05rem" }}
        >
          Full-Stack Developer · React · Node.js · MongoDB
          <br />
          Building scalable, performance-driven web applications.
        </p>

        <div className="animate-fadeUp delay-400 flex gap-4 justify-center flex-wrap mb-14">
          <button
            onClick={() => scrollTo("projects")}
            className="bg-[#7c6ff7] hover:bg-[#a78bfa] text-white font-medium text-sm px-7 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 border-none cursor-pointer"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-transparent border border-[rgba(124,111,247,0.18)] hover:border-[#a78bfa] text-[#c4b5fd] hover:text-[#f0effe] font-medium text-sm px-7 py-3 rounded-lg transition-all duration-200 cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        <div className="animate-fadeUp delay-500 flex gap-12 justify-center flex-wrap">
          {[
            { n: "3+", l: "Projects" },
            { n: "2", l: "Internships" },
            { n: "8.32", l: "CGPA" },
            { n: "4+", l: "Tech Stacks" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display font-bold text-[#a78bfa] text-2xl">
                {s.n}
              </div>
              <div className="text-[#8b88b0] text-xs uppercase tracking-widest mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
