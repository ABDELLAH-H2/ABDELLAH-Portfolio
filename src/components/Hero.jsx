import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(titleRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );

      // Tagline Glitch/Typewriter Effect
      const taglineText = taglineRef.current.innerText;
      const chars = taglineText.split('');
      taglineRef.current.innerText = '';
      
      chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.opacity = 0;
        taglineRef.current.appendChild(span);
        
        gsap.to(span, {
          opacity: 1,
          duration: 0.1,
          delay: 1.5 + i * 0.05,
          ease: "none"
        });
      });

      // Button Animation
      gsap.fromTo(buttonRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)", delay: 2.5 }
      );

      // Mouse movement parallax for the container
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 20;
        const y = (clientY / window.innerHeight - 0.5) * 20;
        
        gsap.to(containerRef.current, {
          x: x,
          y: y,
          duration: 1,
          ease: "power2.out"
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Lighting Effect Behind Title - Simulated with CSS/Glow for performance/simplicity integration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div ref={containerRef} className="text-center z-10 px-4">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] to-[#ff5555] drop-shadow-[0_0_10px_rgba(255,0,85,0.5)]">Abdellah Alioua</span>
        </h1>
        
        <p ref={taglineRef} className="text-xl md:text-2xl text-gray-300 mb-10 font-mono h-8">
          Full Stack Developer | Creative Coder
        </p>

        <div ref={buttonRef}>
          <a 
            href="#projects" 
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition-all duration-300 bg-transparent border border-[#ff0055] rounded-full hover:bg-[#ff0055]/10 hover:shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:scale-105"
          >
            <span className="mr-2">View My Work</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-[#ff0055]/50 transition-all duration-500" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#ff0055] rounded-full animate-[scroll_1.5s_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;