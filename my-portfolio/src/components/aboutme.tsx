import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Aboutme = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='aboutme' className='mt-18 flex justify-center'>
      <div className='container md:max-w-[740px] mx-auto '>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent my-6"></div>
      <div className='bg-primary p-8 rounded-lg text-center shadow-xl'>
          <span className={`text-4xl text-center rowdies-bold text-zinc-50 font-primary mb-10 relative inline-block underline-curve ${isActive ? 'underline-curve-active' : ''}`}>
            About Me
          </span>

          {/* First Paragraph */}
          <motion.p
            className='text-left font-primary text-[16px] leading-8'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            👋 Hello, I'm Ayesh, a second-year Computer Science student at NIBM. I'm deeply passionate about Full Stack Development and dedicated to expanding my skills in this dynamic field. My journey involves continuous learning, staying abreast of the latest web development trends, and exploring the intricacies of the entire development stack.
          </motion.p>

          {/* Second Paragraph */}
          <motion.p
            className='text-left font-primary text-[16px] leading-8 mt-4'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            💻 As a computer science enthusiast, I thrive on challenges and creativity in the coding world. Beyond my academic pursuits, I'm eager to connect with like-minded professionals and explore the vast opportunities that the tech industry offers.
            Let's connect and share our experiences in the ever-evolving landscape of Full Stack Development!👨‍💻
          </motion.p>

        </div>
      </div>
    </section>
  );
};

export default Aboutme;
