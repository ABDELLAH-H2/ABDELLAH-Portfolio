// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'pulse': { // Added for the background glow
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.15' },
        },
        'icon-neon-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(230, 57, 70, 0.5)) drop-shadow(0 0 10px rgba(230, 57, 70, 0.3))' }, // Red glow
          '50%': { filter: 'drop-shadow(0 0 8px rgba(230, 57, 70, 0.7)) drop-shadow(0 0 15px rgba(230, 57, 70, 0.5))' }, // Brighter red glow
        },
        'photo-slide-in-left-fade': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // NEW: Keyframe for text content slide-in-right-fade
        'content-slide-in-right-fade': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // NEW: Keyframe for underline draw
        'underline-draw': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        // NEW: Keyframe for button scale-in
        'button-scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // Keyframe for button glow on hover
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(230, 57, 70, 0.4), 0 0 10px rgba(230, 57, 70, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 10px rgba(230, 57, 70, 0.6), 0 0 20px rgba(230, 57, 70, 0.4)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        'slide-in-up': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // NEW KEYFRAMES FOR HERO SECTION
        'hero-video-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'neon-glow-bounce': {
          '0%, 100%': {
            transform: 'scale(1)',
            textShadow: '0 0 5px #ff007f, 0 0 10px #ff007f, 0 0 15px #ff007f, 0 0 20px #ff007f', // Red neon
          },
          '20%': { transform: 'scale(1.05)', textShadow: '0 0 10px #ff007f, 0 0 20px #ff007f, 0 0 30px #ff007f, 0 0 40px #ff007f' },
          '40%': { transform: 'scale(0.98)', textShadow: '0 0 2px #ff007f, 0 0 5px #ff007f, 0 0 8px #ff007f' },
          '60%': { transform: 'scale(1.02)', textShadow: '0 0 7px #ff007f, 0 0 14px #ff007f, 0 0 21px #ff007f' },
          '80%': { transform: 'scale(0.99)', textShadow: '0 0 3px #ff007f, 0 0 6px #ff007f, 0 0 9px #ff007f' },
        },
        'button-scale-bounce': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '40%': { transform: 'scale(1.05)', opacity: '1' },
          '70%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': {
            textShadow: '0 0 5px #ff007f, 0 0 10px #ff007f, 0 0 15px #ff007f',
          },
          '50%': {
            textShadow: '0 0 10px #ff007f, 0 0 20px #ff007f, 0 0 30px #ff007f',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'slide-in-up': 'slide-in-up 0.7s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
        // NEW ANIMATIONS FOR HERO SECTION
        'hero-video-fade': 'hero-video-fade-in 3s ease-in forwards', // Slower fade for video
        'text-slide-left': 'slide-in-left 0.7s ease-out forwards',
        'name-neon-bounce': 'neon-glow-bounce 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards', // Bounce timing
        'subtitle-fade-bottom': 'slide-in-up 0.7s ease-out forwards', // Reusing slide-in-up
        'button-bounce': 'button-scale-bounce 0.8s ease-out forwards',
        'name-pulse-glow': 'pulse-glow 2s infinite alternate ease-in-out', // Continuous glow pulse
        'photo-animate': 'photo-slide-in-left-fade 1s ease-out forwards',
        'content-animate': 'content-slide-in-right-fade 1s ease-out forwards',
        'underline-animate': 'underline-draw 0.7s ease-out forwards',
        'button-scale': 'button-scale-in 0.6s ease-out forwards',
        'button-glow-hover': 'glow-pulse 1.5s infinite alternate', // For continuous glow on hover
        'icon-glow': 'icon-neon-glow 1.5s infinite alternate ease-in-out',
        'blink': 'blink 1s step-end infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', // For subtle background glow
      },
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Open Sans'],
        accent: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'], // Added a monospace font

      },
    },
  },
  plugins: [],
}