import React from 'react';
import { useInView } from 'react-intersection-observer';
import Gemini_Generated_Image_o8j2bgo8j2bgo8j2 from '../assets/Gemini_Generated_Image_o8j2bgo8j2bgo8j2.png'; // Assuming this is your profile image

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // IMPORTANT: Trigger animations only once when entering viewport
    threshold: 0.2, // Trigger when 20% of the component is in view
  });

  // Ref for the title to control its specific animation
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the title is in view
  });

  return (
    <section id="about" className="scroll-mt-24 py-20 bg-[#101010] text-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* "ABOUT ME" title - now with red accent and underline animation */}
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className={`relative text-xl font-semibold text-[#e63946] uppercase tracking-wider inline-block pb-1
            ${titleInView ? 'opacity-100' : 'opacity-0 translate-y-4' } transition-opacity duration-500`}>
            ABOUT ME
            {/* Underline element */}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[#e63946]
              ${titleInView ? 'animate-underline-animate' : 'w-0'}`}>
            </span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
          {/* Left side: Image */}
          <div className={`md:w-1/3 flex-shrink-0
            ${inView ? 'animate-photo-animate' : 'opacity-0 transform -translate-x-full'}`}>
            <img
              src={Gemini_Generated_Image_o8j2bgo8j2bgo8j2}
              alt="Your Profile"
              className="rounded-lg w-72 h-72 object-cover shadow-2xl transition-all duration-500 hover:scale-105"
            />
          </div>

          {/* Right side: Text content */}
          <div className={`md:w-2/3 text-lg leading-relaxed text-gray-300 font-body
            ${inView ? 'animate-content-animate' : 'opacity-0 transform translate-x-full'}`}>
            <h3 className="text-4xl font-bold text-white mb-4">
              Hi There! I'm <span className="text-[#e63946]">Abdellah Alioua</span>
            </h3>
            <p className="text-xl text-gray-400 mb-6">
            Web Developer (Backend & WordPress)
            </p>

            <p className="mb-8 text-gray-300">
            I’m a  Web Development , currently  building dynamic and responsive websites using modern technologies.
            Through the OFPPT / ISTA NTIC SYBA, I’m developing strong skills in backend & WordPress development.
            I have hands-on experience with WordPress, WooCommerce, and custom projects using HTML, CSS, and Laravel, allowing me to design and develop complete, functional web solutions.
            I aim to combine clean design, efficient code, and strong functionality to create high-quality web applications.
            </p>

            {/* Information list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-10 text-gray-300">
              <div className="flex items-center">
                <span className="font-semibold w-20 text-gray-400">Phone</span>
                <span className="ml-4">: +212 605-341594</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-20 text-gray-400">Email</span>
                <span className="ml-4">:abdellahalioua200@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-20 text-gray-400">From</span>
                <span className="ml-4">: Marrakech, Morocco</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-20 text-gray-400">Language</span>
                <span className="ml-4">: Arabic, English, French</span>
              </div>
            </div>

            {/* Download CV Button */}
            <button className={`bg-[#e63946] hover:bg-[#cf2a3b] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 text-lg relative group // Add relative and group for hover glow
              ${inView ? 'animate-button-scale' : 'opacity-0 scale-80'}`}>
              Download CV
              {/* Glow effect on hover */}
              <span className="absolute inset-0 bg-[#e63946] rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-button-glow-hover -z-10 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;