// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import backgroundImage from '../assets/sky.jpg'; // Keep your background image import

const Hero = () => {
  // Split the text to apply different colors
  const staticPrefix = "Hi, I'm ";
  const dynamicName = "Abdellah Alioua";
  const textToType = staticPrefix + dynamicName;

  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0); // Current character index
  const typingSpeed = 70; // milliseconds per character
  const erasingSpeed = 50; // milliseconds per character
  const pauseTime = 2000; // 2 seconds pause after typing
  const loopDelay = 1000; // Delay before starting new loop

  // Use useInView to trigger the animation when the component is visible
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView) return; // Only run effect when component is in view

    let typer;

    const handleTyping = () => {
      setDisplayedText(textToType.substring(0, index));

      if (!isDeleting && index < textToType.length) {
        // Typing
        typer = setTimeout(() => setIndex(prev => prev + 1), typingSpeed);
      } else if (isDeleting && index > 0) {
        // Erasing
        typer = setTimeout(() => setIndex(prev => prev - 1), erasingSpeed);
      } else if (!isDeleting && index === textToType.length) {
        // Paused after typing, start erasing
        typer = setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && index === 0) {
        // Erased, reset for next loop
        setIsDeleting(false);
        typer = setTimeout(() => setIndex(0), loopDelay); // Short delay before starting next type
      }
    };

    handleTyping();

    return () => clearTimeout(typer); // Cleanup timeout on unmount or re-render
  }, [index, isDeleting, inView, textToType]); // Dependencies

  // Determine the color of each part of the displayed text
  const renderTypingText = () => {
    const prefixLength = staticPrefix.length;
    let rendered = [];

    for (let i = 0; i < displayedText.length; i++) {
      if (i < prefixLength) {
        // "Hi, I'm " part - Red glow
        rendered.push(
          <span key={i} className="text-red-400" style={{ textShadow: '0 0 5px #ff2b2b, 0 0 10px #ff2b2b' }}>
            {displayedText[i]}
          </span>
        );
      } else {
        // "Abdellah Alioua" part - White glow
        rendered.push(
          <span key={i} className="text-white" style={{ textShadow: '0 0 5px #ffffff, 0 0 10px #ffffff' }}>
            {displayedText[i]}
          </span>
        );
      }
    }
    return rendered;
  };


  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[#0b0b0b] text-white pt-16">
      {/* Background Image - kept from your previous version */}
      <div
        className="pointer-events-none absolute inset-0 w-full h-full object-cover z-0"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

      {/* Existing Overlay - ensure it's above the image but below text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70 z-10" />


      <div ref={ref} className="relative z-20 text-center p-8 animate-slide-in-up">
        {/* Typing text */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white font-heading">
          <span className="font-mono text-4xl md:text-6xl">
            {renderTypingText()}
          </span>
          {/* Blinking Cursor - changed to a more neutral white glow */}
          <span className="inline-block w-2 h-10 md:h-16 ml-1 bg-white align-middle animate-blink"
                style={{ textShadow: '0 0 5px #ffffff, 0 0 10px #ffffff' }}>
            &nbsp;
          </span>
        </h1>
        <p className="mt-4 text-2xl md:text-3xl font-light text-[#b3b3b3] font-body animate-slide-in-right">
          A Web Developer (Backend & WordPress)
        </p>

        <div className="mt-8 animate-fade-in">
          <a href="#projects" className="bg-[#e63946] text-white hover:bg-[#ff4d5a] px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300 ease-in-out font-accent">
            View My Work
          </a>
          <a href="#contact" className="ml-4 border-2 border-[#e63946] text-[#e63946] hover:bg-[#ff4d5a] hover:border-[#ff4d5a] hover:text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out font-accent">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;