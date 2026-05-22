import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-[#7c6ff7] text-xs tracking-widest uppercase font-medium mb-2">Who I am</p>
      <h2 className="font-display font-bold tracking-tight text-[#f0effe] mb-10"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4 text-[#8b88b0] font-light leading-relaxed text-sm">
          <p>
            I'm a final-year Computer Science Engineering student at Poornima College of Engineering,
            graduating in June 2026 with a CGPA of{' '}
            <span className="text-[#a78bfa] font-medium">8.32</span>.
          </p>
          <p>
            I specialize in building full-stack web applications using the MERN stack — React.js,
            Node.js, Express, and MongoDB — along with Python/Flask for API integrations.
          </p>
          <p>
            I thrive in collaborative environments, love solving real-world problems with
            technology, and bring strong communication and analytical thinking to every project.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* CGPA card */}
          <div className="flex items-center gap-4 bg-[rgba(124,111,247,0.08)] border border-[rgba(124,111,247,0.18)] rounded-xl px-5 py-4">
            <span className="font-display font-bold text-[#a78bfa] text-4xl leading-none">8.32</span>
            <div>
              <div className="text-[#f0effe] font-medium text-sm">CGPA</div>
              <div className="text-[#8b88b0] text-xs mt-0.5">B.Tech CSE · 2022 – 2026</div>
            </div>
          </div>

          {/* Education card */}
          <div className="bg-[rgba(26,26,36,0.9)] border border-[rgba(124,111,247,0.18)] rounded-xl px-5 py-5">
            <div className="text-[#8b88b0] text-xs uppercase tracking-widest mb-4">Education</div>
            <div className="mb-3">
              <div className="text-[#f0effe] font-medium text-sm">Poornima College Of Engineering</div>
              <div className="text-[#8b88b0] text-xs mt-0.5">B.Tech Computer Science · Jun 2022 – Jun 2026</div>
            </div>
            <hr className="border-[rgba(124,111,247,0.18)] mb-3" />
            <div>
              <div className="text-[#f0effe] font-medium text-sm">Ramakrishna Academy</div>
              <div className="text-[#8b88b0] text-xs mt-0.5">High School · 89.4% · Jun 2022</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
