// src/components/Contact.jsx
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'; // Import motion

const Contact = () => {
  const [state, handleSubmit] = useForm("xgvnzjkw");
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when section enters view
    threshold: 0.1,    // Trigger when 10% of the section is visible
  });

  // Framer Motion variants for the title
  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  // Framer Motion variants for the form container
  const formContainerVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.8,
        delay: 0.2, // Slight delay after title appears
      },
    },
  };

  // Framer Motion variants for input fields (staggered)
  const inputVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: i => ({ // 'i' is the index passed from animate.staggerChildren
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: i * 0.1 + 0.4, // Staggered delay, starting after form container
      },
    }),
  };

  // Framer Motion variants for the send button
  const buttonVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.8, // Appears after all inputs
      },
    },
    flash: { // For the initial flash
        opacity: [1, 0.7, 1], // Fade out and in
        backgroundColor: ["#E63946", "#ff4d5a", "#E63946"], // Red gradient flash
        scale: [1, 1.02, 1], // Slight scale up and down
        transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            delay: 1.2, // Delay for flash to happen after button slides up
        }
    }
  };


  // If the form submission is successful, show a success message
  if (state.succeeded) {
    return (
      <section id="contact" className="scroll-mt-24 py-20 bg-gradient-to-br from-[#0A0A0A] to-[#200000] flex items-center justify-center min-h-[calc(100vh-64px)] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[#E63946] mb-4"
          >
            Thank you for your message!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            I'll get back to you as soon as possible.
          </motion.p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 bg-gradient-to-br from-[#0A0A0A] to-[#200000] text-white" ref={ref}> {/* Apply gradient background */}
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-[#E63946] mb-12 font-heading"
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Get in Touch
        </motion.h2>

        <motion.div
          className="max-w-xl mx-auto bg-[#1a1a1a] p-8 rounded-lg shadow-xl" // Darker background for form
          variants={formContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="text-center text-lg mb-6 text-gray-300">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <motion.div variants={inputVariants} custom={0}> {/* custom prop for staggered delay */}
              <label htmlFor="name" className="block text-gray-200 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border border-[#333] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition duration-200 bg-[#2a2a2a] text-white placeholder-gray-500" // Styled for dark theme & glow
                placeholder="Your Name"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-400 text-xs italic mt-1"
              />
            </motion.div>

            <motion.div variants={inputVariants} custom={1}>
              <label htmlFor="email" className="block text-gray-200 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border border-[#333] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition duration-200 bg-[#2a2a2a] text-white placeholder-gray-500" // Styled for dark theme & glow
                placeholder="your.email@example.com"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-400 text-xs italic mt-1"
              />
            </motion.div>

            <motion.div variants={inputVariants} custom={2}>
              <label htmlFor="message" className="block text-gray-200 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="shadow appearance-none border border-[#333] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition duration-200 resize-y bg-[#2a2a2a] text-white placeholder-gray-500" // Styled for dark theme & glow
                placeholder="Your message..."
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-400 text-xs italic mt-1"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={state.submitting}
              className="relative bg-[#E63946] hover:bg-[#ff4d5a] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              variants={buttonVariants}
              initial="hidden"
              animate={inView ? ["visible", "flash"] : "hidden"} // Animate 'visible' then 'flash'
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            <ValidationError errors={state.errors} className="text-red-400 text-xs italic mt-1" />
          </form>

          {/* Direct links and social media icons */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">Or connect with me directly:</p>
            <p className="mt-2 text-[#E63946] hover:underline">
              <a href="mailto:abdellahalioua200@gmail.com">abdellahalioua200@gmail.com</a>
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://github.com/YourGitHub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E63946] text-3xl transition-colors duration-200">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/YourLinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E63946] text-3xl transition-colors duration-200">
                <i className="fab fa-linkedin"></i>
              </a>
              {/* Add other social media icons */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;