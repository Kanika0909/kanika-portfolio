import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(124,111,247,0.18)] py-6 px-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <span className="font-display font-extrabold text-[#a78bfa] text-base">KA.</span>
        <span className="text-[#8b88b0] text-xs">Designed & built by Kanika Agrawal · 2026</span>
        <div className="flex gap-6">
          <a href="mailto:kanikaag0909@gmail.com" className="text-[#8b88b0] hover:text-[#a78bfa] text-xs transition-colors duration-200">Email</a>
          <a href="https://www.linkedin.com/in/kanika-agrawal" target="_blank" rel="noreferrer" className="text-[#8b88b0] hover:text-[#a78bfa] text-xs transition-colors duration-200">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
