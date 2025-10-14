import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // State for initial mount animation

  useEffect(() => {
    setIsMounted(true); // Trigger initial animation on mount

    const ids = ['hero', 'about', 'skills', 'projects', 'contact'];
    const getSections = () => ids.map((id) => ({ id, el: document.getElementById(id) })).filter(s => s.el);
    let sections = getSections();

    const navbarOffset = 96; // approx fixed navbar height

    const updateActive = () => {
      if (!sections.length) sections = getSections();
      let current = 'about';
      let minDelta = Number.POSITIVE_INFINITY;
      sections.forEach(({ id, el }) => {
        const rect = el.getBoundingClientRect();
        const delta = Math.abs(rect.top - navbarOffset);
        if (rect.bottom > navbarOffset && delta < minDelta) {
          minDelta = delta;
          current = id;
        }
      });
      setActive(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActive();
          setIsScrolled(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  const linkBase = 'relative px-1 text-[#b3b3b3] hover:text-[#ff4d5a] transition-colors font-accent';
  const activeClasses = 'text-[#e63946]';
  const underline = 'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#e63946] after:rounded-full';

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ease-out
      ${isMounted ? 'animate-fade-in-down' : ''} // Use fade-in-down for the initial navbar animation
      ${isScrolled ? 'py-2 backdrop-blur-md bg-black/40 border-b border-white/5' : 'py-4 bg-black/60 border-b border-white/5'}`}>
      <div className={`container mx-auto flex justify-between items-center transition-all duration-300 ease-out
        ${isScrolled ? 'h-16' : 'h-24'}`}>
        <a href="#" className={`font-bold text-white font-heading transition-all duration-300 ease-out
          ${isScrolled ? 'text-xl' : 'text-2xl'}`}>Abdellah Alioua</a>
        <div className="space-x-4 flex">
          <a href="#about" className={`${linkBase} ${isMounted ? 'animate-fade-in-up' : ''} ${active === 'about' ? `${activeClasses} ${underline}` : ''}`} style={{ animationDelay: '0.2s' }}>About</a>
          <a href="#skills" className={`${linkBase} ${isMounted ? 'animate-fade-in-up' : ''} ${active === 'skills' ? `${activeClasses} ${underline}` : ''}`} style={{ animationDelay: '0.3s' }}>Skills</a>
          <a href="#projects" className={`${linkBase} ${isMounted ? 'animate-fade-in-up' : ''} ${active === 'projects' ? `${activeClasses} ${underline}` : ''}`} style={{ animationDelay: '0.4s' }}>Projects</a>
          <a href="#contact" className={`${linkBase} ${isMounted ? 'animate-fade-in-up' : ''} ${active === 'contact' ? `${activeClasses} ${underline}` : ''}`} style={{ animationDelay: '0.5s' }}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;