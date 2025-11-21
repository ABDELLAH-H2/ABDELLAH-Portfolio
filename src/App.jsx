import React, { useState } from 'react';
import ThreeBackground from './components/ThreeBackground.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Loader3D from './components/Loader.jsx';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Loader3D onFinished={() => setIsLoaded(true)} />
      <div className={`min-h-screen text-[#b3b3b3] font-body relative transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <ThreeBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;