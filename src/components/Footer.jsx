// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black/80 border-t border-white/5 text-[#888888] p-6 text-center text-sm font-accent">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Abdellah Alioua. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/ABDELLAH-H2" target="_blank" rel="noopener noreferrer" className="text-[#b3b3b3] hover:text-[#ff4d5a]">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/abdellah-alioua-7b8289384/" target="_blank" rel="noopener noreferrer" className="text-[#b3b3b3] hover:text-[#ff4d5a]">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          {/* Add more social links */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;