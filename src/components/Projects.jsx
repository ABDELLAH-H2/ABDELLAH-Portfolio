// src/components/Projects.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'; // Import motion for advanced animations
import pr1 from '../assets/pr1.png';
import pr2 from '../assets/pr2.png';
const projects = [
  {
    title: "Marrakech Shoes",
    description: "An e-commerce website built using WordPress and WooCommerce, with customized CSS modifications.",
    technologies: ["WordPress", "css"],
    image: pr1, // Updated to use imported asset
    liveLink: "https://marrakechshoes.com/",
    githubLink: "#",
  },
  // 'Project Beta' and 'OFPPT Final Project' entries removed
];

const Projects = () => {
  // Use a ref for the entire section to trigger animations
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="scroll-mt-24 py-20 bg-[#121212] text-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center text-white mb-12 font-heading ${sectionInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-[#e63946]">My</span> Projects
        </h2>
        {/* Only one project: center it, else use grid */}
        <div className={
          projects.length === 1
            ? "flex justify-center"
            : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        }>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} sectionInView={sectionInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Separate ProjectCard component for better organization and animation control
const ProjectCard = ({ project, index, sectionInView }) => {
  // Use a ref for each individual card to trigger its specific animation
  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the card is in view
  });

  // Framer Motion variants for the slide-up and fade-in
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.5,
        delay: index * 0.15, // Staggered delay for each card
      },
    },
  };

  // Framer Motion variants for the curtain reveal
  const curtainVariants = {
    hidden: { y: "0%" }, // Start fully covering
    visible: {
      y: "-100%", // Slide up to reveal
      transition: {
        delay: index * 0.15 + 0.3, // Delay after card appears
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1], // Custom ease for a smooth reveal
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-[#0f0f0f] rounded-lg shadow-lg overflow-hidden border border-white/5"
      variants={cardVariants}
      initial="hidden"
      animate={cardInView && sectionInView ? "visible" : "hidden"} // Only animate if both section and card are in view
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(230, 57, 70, 0.7)", // Glowing red shadow
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        {/* Curtain Reveal Overlay */}
        <motion.div
          className="absolute inset-0 bg-[#0f0f0f]" // Dark overlay
          variants={curtainVariants}
          initial="hidden"
          animate={cardInView && sectionInView ? "visible" : "hidden"}
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-[#b3b3b3] mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="bg-[#e63946]/10 text-[#e63946] text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e63946] hover:bg-[#ff4d5a] text-white px-4 py-2 rounded-md transition duration-300 relative overflow-hidden"
            whileHover={{
              animation: "pulse-once 1s ease-in-out forwards", // Apply pulsing animation on hover
            }}
            // You'll need to define the keyframes for pulse-once in your CSS
          >
            Live Demo
          </motion.a>
          {/* Render GitHub button only if githubLink exists and is non-empty */}
          {project.githubLink && project.githubLink !== "#" && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="border border-[#e63946] text-[#e63946] hover:bg-[#ff4d5a] hover:border-[#ff4d5a] hover:text-white px-4 py-2 rounded-md transition duration-300">
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;