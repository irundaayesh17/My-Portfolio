import { useState, useEffect } from 'react';
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
  👋 Hello, I'm Ayesh, a second-year Computer Science student at NIBM with a strong passion for crafting engaging digital experiences. As a UI/UX engineer and web developer, I focus on designing intuitive interfaces and building seamless, responsive web applications that blend aesthetics with functionality.
</motion.p>

{/* Second Paragraph */}
<motion.p
  className='text-left font-primary text-[16px] leading-8 mt-4'
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
>
  💡 My approach combines creativity with problem-solving—transforming ideas into user-friendly designs and efficient code. I’m always exploring the latest design trends, prototyping tools, and development technologies to deliver innovative solutions. Let’s collaborate and create experiences that users love! 🎨💻
</motion.p>


        </div>
      </div>
    </section>
  );
};

export default Aboutme;
