import React from 'react';

const skillCategories = [
  { category: 'Languages',       icon: '{ }', skills: ['Java', 'JavaScript', 'SQL', 'Python'] },
  { category: 'Frontend',        icon: '◱',   skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'] },
  { category: 'Backend',         icon: '⚙',   skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs'] },
  { category: 'Database',        icon: '❒',   skills: ['MongoDB', 'SQL'] },
  { category: 'Tools & Workflows', icon: '⚒', skills: ['Git', 'GitHub', 'Axios', 'Agile', 'Vercel/Render'] },
  { category: 'Soft Skills',     icon: '✦',   skills: ['Problem-Solving', 'Analytical Thinking', 'Communication', 'Teamwork'] },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-[#7c6ff7] text-xs tracking-widest uppercase font-medium mb-2">What I work with</p>
      <h2 className="font-display font-bold tracking-tight text-[#f0effe] mb-10"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="bg-[rgba(26,26,36,0.9)] border border-[rgba(124,111,247,0.18)] rounded-xl p-5 hover:border-[#7c6ff7] hover:-translate-y-1 transition-all duration-250 cursor-default"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#a78bfa] text-base leading-none">{cat.icon}</span>
              <span className="text-[#7c6ff7] text-xs uppercase tracking-widest font-medium">{cat.category}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="bg-[rgba(124,111,247,0.09)] border border-[rgba(124,111,247,0.15)] text-[#c4b5fd] text-xs px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
