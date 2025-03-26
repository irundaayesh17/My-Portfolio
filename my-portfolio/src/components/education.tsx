import { useState, useEffect } from 'react';
import EducationCard from './educationCard';
import nibmlogo from '../assets/nibm.jpg';
import esoftlogo from '../assets/esoft.png';
import schoollogo from '../assets/school.png';


const Education = () => {
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
    <section id='education' className='education mt-6 flex justify-center'>
        <div className='container md:max-w-[740px] mx-auto text-center'>
            <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8'></div>
            <span className={`text-4xl text-center rowdies-bold text-zinc-50 font-primary mb-10 relative inline-block underline-curve ${isActive ? 'underline-curve-active' : ''}`}>Education</span>
            <div className="mt-6 space-y-4">
            <EducationCard
              logo={nibmlogo}
              university="NIBM"
              course="Bachelor's Degree of Computing (BSc)"
              year="2022 - Present"
              link={'https://www.nibm.lk/course/bsc-hons-computing'}
            />
            <EducationCard
              logo={nibmlogo}
              university="NIBM"
              course="Foundation Certificate in Software Engineering"
              year="2022 - 2022"
              link={'https://www.nibm.lk/course/certificate-in-software-engineering'}
            />
            <EducationCard
              logo={esoftlogo}
              university="Esoft Metro Campus"
              course="HND in Computing (BiTEC)"
              year="2021 - 2023"
              link={'https://esoft.lk/esoft-courses/level-5-pearson-btec-hnd-in-computing-general/'}
            />
            <EducationCard
              logo={esoftlogo}
              university="Esoft Metro Campus"
              course="Diploma in Software Engineering (DiTEC)"
              year="2021 - 2021"
              link={'https://esoft.lk/esoft-courses/l3-diploma-in-it-and-diploma-in-english-bundle-offer/'}
            />
            <EducationCard
              logo={schoollogo}
              university="Sri Sumangala College"
              course="G.C.E Ordinary Level"
              year="2010 - 2021"
              link={'https://srisumangalacollege.lk/'}
            />
            </div>
        </div>  
    </section>
  )
}

export default Education;
