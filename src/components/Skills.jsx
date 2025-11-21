import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import original skill images
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import git from '../assets/git.png';
import tailwind from '../assets/tailwind.png';
import php from '../assets/php.png';
import laravel from '../assets/laravel.png';
import iwordpress from '../assets/iwordpress.png';

gsap.registerPlugin(ScrollTrigger);

const SkillCard = ({ skill, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15; // Reduced sensitivity for smoothness
    const y = (e.clientY - top - height / 2) / 15;

    gsap.to(cardRef.current, {
      rotationY: x,
      rotationX: -y,
      transformPerspective: 500,
      ease: "power2.out", // Smoother easing
      duration: 0.8
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      ease: "elastic.out(1, 0.5)", // Elastic return
      duration: 1
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group w-28 h-28 md:w-36 md:h-36 bg-[#111] rounded-2xl flex flex-col items-center justify-center border border-gray-800 hover:border-[#ff0055] transition-colors duration-300 cursor-pointer shadow-lg"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[#ff0055] opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-300 rounded-xl -z-10" />
      
      <div className="w-16 h-16 mb-2 transform translate-z-10 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
        <img src={skill.iconSrc} alt={skill.name} className="w-full h-full object-contain drop-shadow-md" />
      </div>
      <span className="text-xs md:text-sm text-gray-400 font-mono transform translate-z-5 group-hover:text-white transition-colors">{skill.name}</span>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  // Restored original skills
  const skills = [
    { name: 'HTML5', iconSrc: html },
    { name: 'CSS3', iconSrc: css },
    { name: 'JavaScript', iconSrc: js },
    { name: 'React', iconSrc: react },
    { name: 'Node.js', iconSrc: node },
    { name: 'Express.js', iconSrc: express },
    { name: 'MongoDB', iconSrc: mongodb },
    { name: 'MySQL', iconSrc: mysql },
    { name: 'Git', iconSrc: git },
    { name: 'Tailwind', iconSrc: tailwind },
    { name: 'WordPress', iconSrc: iwordpress },
    { name: 'PHP', iconSrc: php },
    { name: 'Laravel', iconSrc: laravel },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation with toggleActions for re-playability
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse", // Reverses when scrolling up
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Staggered Cards Animation
      gsap.from(".skill-card-wrapper", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        scale: 0.8,
        stagger: 0.05,
        duration: 0.6,
        ease: "back.out(1.2)"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-[#ff0055]">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card-wrapper">
              <SkillCard skill={skill} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;