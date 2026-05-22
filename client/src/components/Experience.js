import React from 'react';

const experiences = [
  {
    company: 'Regex Software',
    role: 'Full-Stack Developer Intern',
    location: 'Jaipur',
    period: 'Jun 2025 – Jul 2025',
    points: [
      'Developed full-stack applications with React.js and MongoDB, integrating backend APIs.',
      'Worked in Git-based collaborative workflows, handling pull requests and code reviews.',
    ],
  },
  {
    company: 'Devyut Softech',
    role: 'Frontend Developer Intern',
    location: 'Jaipur',
    period: 'Jul 2023 – Aug 2023',
    points: [
      'Built responsive UI components using HTML, CSS, and React.js.',
      'Enhanced user experience and performance through efficient rendering techniques.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-[#7c6ff7] text-xs tracking-widest uppercase font-medium mb-2">Where I've worked</p>
      <h2 className="font-display font-bold tracking-tight text-[#f0effe] mb-10"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
        Experience
      </h2>

      <div className="flex flex-col gap-0">
        {experiences.map((exp, i) => (
          <div key={i} className="grid grid-cols-[150px_32px_1fr] md:grid-cols-[180px_32px_1fr] gap-x-5 items-start">
            {/* Date */}
            <div className="text-right pt-6">
              <div className="text-[#8b88b0] text-xs leading-snug">{exp.period}</div>
              <div className="text-[rgba(139,136,176,0.5)] text-xs mt-0.5">{exp.location}</div>
            </div>

            {/* Connector */}
            <div className="flex flex-col items-center pt-6">
              <div className="w-3 h-3 rounded-full bg-[#7c6ff7] border-2 border-[#0a0a0f] outline outline-2 outline-[#7c6ff7] flex-shrink-0 z-10" />
              {i < experiences.length - 1 && (
                <div className="w-0.5 flex-1 min-h-[40px] bg-[rgba(124,111,247,0.18)] mt-1.5" />
              )}
            </div>

            {/* Body */}
            <div className="bg-[rgba(26,26,36,0.9)] border border-[rgba(124,111,247,0.18)] rounded-xl p-5 mb-6 hover:border-[#7c6ff7] transition-colors duration-200">
              <div className="font-display font-bold text-[#f0effe] text-base">{exp.company}</div>
              <div className="text-[#a78bfa] text-xs mt-0.5 mb-3">{exp.role}</div>
              <ul className="space-y-1.5">
                {exp.points.map((pt, j) => (
                  <li key={j} className="flex gap-2 text-[#8b88b0] text-sm font-light leading-relaxed">
                    <span className="text-[#7c6ff7] flex-shrink-0">–</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
