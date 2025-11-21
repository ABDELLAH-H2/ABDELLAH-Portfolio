import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Gemini_Generated_Image_o8j2bgo8j2bgo8j2 from '../assets/Gemini_Generated_Image_o8j2bgo8j2bgo8j2.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About <span className="text-[#ff0055]">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 bg-[#111]/50 backdrop-blur-md p-8 rounded-3xl border border-gray-800">
          {/* Left side: Image */}
          <div ref={imageRef} className="md:w-1/3 flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-[#ff0055] rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500" />
            <img
              src={Gemini_Generated_Image_o8j2bgo8j2bgo8j2}
              alt="Abdellah Alioua"
              className="relative rounded-2xl w-full object-cover shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Right side: Text content */}
          <div ref={contentRef} className="md:w-2/3 text-lg leading-relaxed text-gray-300">
            <h3 className="text-3xl font-bold text-white mb-4">
              Hi There! I'm <span className="text-[#ff0055]">Abdellah Alioua</span>
            </h3>
            <p className="text-xl text-gray-400 mb-6 font-mono">
              Full Stack Developer & Creative Coder
            </p>

            <p className="mb-8 text-gray-300">
              I’m a passionate Web Developer currently building dynamic and responsive websites using modern technologies.
              Through the OFPPT / ISTA NTIC SYBA, I’m developing strong skills in backend & WordPress development.
              I have hands-on experience with WordPress, WooCommerce, and custom projects using HTML, CSS, and Laravel.
              I aim to combine clean design, efficient code, and strong functionality to create high-quality web applications.
            </p>

            {/* Information list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10 text-sm font-mono">
              <div className="flex items-center p-3 bg-[#000]/30 rounded-lg border border-gray-800 hover:border-[#ff0055] transition-colors">
                <span className="text-[#ff0055] mr-3">Phone:</span>
                <span>+212 605-341594</span>
              </div>
              <div className="flex items-center p-3 bg-[#000]/30 rounded-lg border border-gray-800 hover:border-[#ff0055] transition-colors">
                <span className="text-[#ff0055] mr-3">Email:</span>
                <span>abdellahalioua200@gmail.com</span>
              </div>
              <div className="flex items-center p-3 bg-[#000]/30 rounded-lg border border-gray-800 hover:border-[#ff0055] transition-colors">
                <span className="text-[#ff0055] mr-3">Location:</span>
                <span>Marrakech, Morocco</span>
              </div>
              <div className="flex items-center p-3 bg-[#000]/30 rounded-lg border border-gray-800 hover:border-[#ff0055] transition-colors">
                <span className="text-[#ff0055] mr-3">Languages:</span>
                <span>Arabic, English, French</span>
              </div>
            </div>

            <a
              href="/abdellah.pdf"
              download
              className="inline-block bg-gradient-to-r from-[#ff0055] to-[#ff5555] text-white font-bold py-3 px-8 rounded-xl shadow-[0_0_20px_rgba(255,0,85,0.3)] hover:shadow-[0_0_30px_rgba(255,0,85,0.5)] transform hover:translate-y-[-2px] transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;