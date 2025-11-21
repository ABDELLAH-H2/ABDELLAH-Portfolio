import React, { useRef, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [state, handleSubmit] = useForm("xrbewplw"); // Replace with your Formspree ID
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

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

      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 px-4 flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-10 bg-[#111] border border-[#ff0055] rounded-2xl shadow-[0_0_30px_rgba(255,0,85,0.2)]">
          <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
          <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 relative z-10">
      {/* Background Particles for Contact Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff0055]/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00ffff]/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Get In <span className="text-[#ff0055]">Touch</span>
        </h2>

        <div ref={formRef} className="bg-[#0a0a0a]/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden group">
          {/* Neon Border Animation */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ff0055]/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-mono text-gray-400 ml-1">NAME</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="w-full bg-[#151515] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff0055] focus:ring-1 focus:ring-[#ff0055] transition-all duration-300"
                  placeholder="John Doe"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-mono text-gray-400 ml-1">EMAIL</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full bg-[#151515] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff0055] focus:ring-1 focus:ring-[#ff0055] transition-all duration-300"
                  placeholder="john@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-mono text-gray-400 ml-1">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full bg-[#151515] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff0055] focus:ring-1 focus:ring-[#ff0055] transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-gradient-to-r from-[#ff0055] to-[#ff5555] text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(255,0,85,0.4)] transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">SEND MESSAGE</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;