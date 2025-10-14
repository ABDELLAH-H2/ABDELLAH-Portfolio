import React from 'react';
import { useInView } from 'react-intersection-observer';

// Import your skill images
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

const skills = [
  { name: 'HTML5', iconSrc: html },
  { name: 'CSS3', iconSrc: css },
  { name: 'Node.js', iconSrc: node },
  { name: 'Express.js', iconSrc: express },
  { name: 'MongoDB', iconSrc: mongodb },
  { name: 'MySQL', iconSrc: mysql },
  { name: 'Git', iconSrc: git },
  { name: 'Tailwind CSS', iconSrc: tailwind },
  { name: 'WordPress', iconSrc: iwordpress },
  { name: 'PHP', iconSrc: php },
  { name: 'Laravel', iconSrc: laravel },
];

const Skills = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section id="skills" className="scroll-mt-24 py-20 bg-[#0d0d0d] text-white overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className={`text-4xl font-bold text-center text-white mb-12 font-heading
          ${titleInView ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[#e63946]">My</span> Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center p-6 bg-[#121212] rounded-lg shadow-md
                          transition-all duration-300 ease-out // Smooth transitions for hover effects
                          group // Enable group-hover for icon glow and new background
                          ${sectionInView ? 'animate-skill-card-entrance' : 'opacity-0 scale-80'}
                          hover:scale-105 hover:rotate-x-5 hover:-rotate-y-5 // Hover tilt and scale
                          group-hover:shadow-xl // Maintain shadow
                          group-hover:bg-gradient-to-br from-[#e63946] to-[#ff4d5a] // RED GRADIENT ON HOVER
                          `}
              style={{
                animationDelay: sectionInView ? `${0.1 * index}s` : '0s',
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              {skill.iconSrc ? (
                <img
                  src={skill.iconSrc}
                  alt={skill.name}
                  className="w-12 h-12 object-contain mb-4 transition-all duration-300 group-hover:animate-icon-glow" // ONLY red glow
                />
              ) : (
                <i className={`${skill.icon} text-5xl text-[#E63946] mb-4 transition-all duration-300 group-hover:animate-icon-glow`}></i> // ONLY red glow
              )}
              <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors duration-300">{skill.name}</h3>

              {/* Removed the reflection div to avoid conflict with the red gradient background */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;