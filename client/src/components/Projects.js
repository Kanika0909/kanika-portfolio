import React from 'react';

const projects = [
  {
    title: "Smart Internship Tracker (InternTrack AI)",
    description:
      "Smart Internship Tracker (InternTrack AI) is a MERN stack web application for tracking internship applications, deadlines, and interview progress with secure authentication and an intuitive dashboard.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT Authentication",
      "Git/GitHub",
      "Vercel",
      "Render",
    ],
    link: "https://smart-internship-tracker-eta.vercel.app/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 21h6" />
      </svg>
    ),
  },

  {
    title: "E-commerce Shoe Store",
    description:
      "Responsive full-stack store with product listings, wishlist, and cart. Integrated backend APIs for authentication, product management, and order processing.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Git/GitHub",
      "Render",
      "Vercel",
    ],
    link: "https://e-commerce-beige-seven-53.vercel.app/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 21h6" />
      </svg>
    ),
  },

  {
    title: "Country Info Explorer",
    description:
      "Country Info Explorer is a full-stack web application that provides country insights such as weather, population, and cost-of-living data using integrated REST APIs. Built with React.js, Flask, and Python, it features a responsive and user-friendly interface.",
    stack: [
      "React.js",
      "Flask",
      "Python",
      "REST APIs",
      "Axios",
      "Tailwind CSS",
    ],
    link: "https://country-info-explorer-8l3w-c5rj6sfeo-kanika0909s-projects.vercel.app/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: "Bill Generator",
    description:
      "Desktop billing system built with Java OOP principles and modular file handling. Automated total/bill generation with an interactive Swing UI.",
    stack: ["Java", "Java Swing", "OOP", "File I/O"],
    link: "https://github.com/Kanika0909/Java_Bill_Generator",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-[#7c6ff7] text-xs tracking-widest uppercase font-medium mb-2">What I've built</p>
      <h2 className="font-display font-bold tracking-tight text-[#f0effe] mb-10"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-[rgba(26,26,36,0.9)] border border-[rgba(124,111,247,0.18)] rounded-2xl p-7 flex flex-col gap-4 hover:border-[#7c6ff7] hover:-translate-y-1 transition-all duration-250"
          >
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-[rgba(124,111,247,0.12)] flex items-center justify-center flex-shrink-0">
                {p.icon}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-[#a78bfa] hover:text-[#c4b5fd] text-xs font-medium transition-colors duration-200"
              >
                View ↗
              </a>
            </div>

            <div>
              <h3 className="font-display font-bold text-[#f0effe] text-base mb-2 leading-snug">{p.title}</h3>
              <p className="text-[#8b88b0] text-sm font-light leading-relaxed">{p.description}</p>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="bg-[#0a0a0f] border border-[rgba(124,111,247,0.2)] text-[#8b88b0] text-xs px-2 py-0.5 rounded-md"
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
