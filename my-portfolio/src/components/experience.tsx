import { useState, useEffect } from 'react';
import ExperienceCard from './experienceCard';
import bl360 from '../assets/bl360.jpg';



const Experience = () => {
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
    <section id='experience' className='education mt-6 flex justify-center'>
        <div className='container md:max-w-[740px] mx-auto text-center'>
            <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent my-12'></div>
            <span className={`text-4xl text-center rowdies-bold text-zinc-50 font-primary mb-10 relative inline-block underline-curve ${isActive ? 'underline-curve-active' : ''}`}>Experience</span>
            <div className="mt-6 space-y-4">
            <ExperienceCard
              logo={bl360}
              company="Blue Lotus 360 (PVT) Ltd"
              position="UI/UX Engineer Intern"
              duration="2025 Apr - Present"
              link={'https://bluelotus360.com/lk/'}
            />
            
            </div>
        </div>  
    </section>
  )
}

export default Experience;
