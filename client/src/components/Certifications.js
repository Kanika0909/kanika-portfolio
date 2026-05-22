import React from 'react';

const certs = [
  { name: 'Python Programming', provider: 'Udemy', year: '2024' },
  { name: 'Cloud Computing',    provider: 'NPTEL', year: '2024' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-[#7c6ff7] text-xs tracking-widest uppercase font-medium mb-2">Credentials</p>
      <h2 className="font-display font-bold tracking-tight text-[#f0effe] mb-10"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
        Certifications
      </h2>

      <div className="flex flex-wrap gap-4">
        {certs.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-4 bg-[rgba(26,26,36,0.9)] border border-[rgba(124,111,247,0.18)] rounded-xl px-5 py-4 min-w-[260px] hover:border-[#7c6ff7] hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="w-9 h-9 rounded-full bg-[rgba(124,111,247,0.15)] border border-[rgba(124,111,247,0.18)] flex items-center justify-center text-[#a78bfa] font-semibold text-sm flex-shrink-0">
              ✓
            </div>
            <div>
              <div className="text-[#f0effe] font-medium text-sm">{c.name}</div>
              <div className="text-[#8b88b0] text-xs mt-0.5">{c.provider} · {c.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
