import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import original project images
import pr1 from '../assets/pr1.png';
// import pr2 from '../assets/pr2.png'; // Keeping commented as per previous state if needed, or just using what was there

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25; // Reduced sensitivity
    const y = (e.clientY - top - height / 2) / 25;

    gsap.to(cardRef.current, {
      rotationY: x,
      rotationX: -y,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.5
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      ease: "power2.out",
      duration: 0.5
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#ff0055] transition-all duration-500 shadow-lg"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-[#ff0055]/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
        <img 
          ref={imageRef}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-8 relative z-20 bg-[#111] transform translate-z-10">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff0055] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tag, i) => (
            <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-gray-900 text-gray-300 border border-gray-800 group-hover:border-[#ff0055]/30 transition-colors">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 rounded-xl bg-[#ff0055] text-white font-bold hover:bg-[#d9004c] transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-[#ff0055]/20">
            Live Demo
          </a>
          {/* Only show GitHub if link is valid/present */}
          {project.githubLink && project.githubLink !== "#" && (
             <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 rounded-xl border border-gray-700 text-white hover:bg-gray-800 transition-all duration-300">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  // Restored original projects data
  const projects = [
    {
      title: "Marrakech Shoes",
      description: "An e-commerce website built using WordPress and WooCommerce, with customized CSS modifications.",
      technologies: ["WordPress", "CSS"],
      image: pr1,
      liveLink: "https://marrakechshoes.com/",
      githubLink: "#",
    },
    // Add more projects here as needed
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".project-card-wrapper", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-[#ff0055]">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project, index) => (
            <div key={index} className="project-card-wrapper">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;