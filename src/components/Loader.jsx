import React, { useState, useEffect } from 'react';

const Loader3D = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // Simulate loading
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setFinished(true);
        if (onFinished) onFinished();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, onFinished]);

  return (
    <div className={`fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-1000 ${finished ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-4 border-[#ff0055]/20 rounded-full animate-ping"></div>
        <div className="absolute inset-0 border-4 border-t-[#ff0055] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-[#ff0055] font-mono font-bold">
          {progress}%
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white tracking-widest animate-pulse">
        INITIALIZING <span className="text-[#ff0055]">SYSTEM</span>
      </h2>
    </div>
  );
};

export default Loader3D;
