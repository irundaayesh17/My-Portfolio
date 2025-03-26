import React from 'react'
import { useState, useEffect } from 'react';
import hero from "../assets/hero.png";
import linkedin from "../assets/linkedin.png";
import CV from "../assets/Ayesh Perera.pdf";

const Hero = () => {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setIsActive(true);
    }
    , []);

    const handleDownloadCV = () => {
        window.open(CV, '_blank');
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'Ayesh_Perera_CV.pdf'; // Set the filename for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <section className="hero" id='home'>
        <div className="">
            <div className='items-center  flex flex-col gap-4'>
                <figure>
                    <img src={hero} className='w-[270px] h-[333px] md:w-[230px] md:h-[290px]' alt="hero" />
                </figure>
            </div>
            <div className='pl-12 pr-8 text-left md:text-center mt-4 gap-4 grid md:max-w-[740px]'>
            <span className="text-4xl rowdies-bold text-zinc-50 font-primary">
                Hi, I'm Ayesh Perera, a 
                <span className={`md:relative md:inline-block underline-curve ${isActive ? 'underline-curve-active' : ''}`}> Software Engineer </span>
                <span className='rowdies-regular'> & </span>
                <span className={`md:relative inline-block max-md:mt-2 underline-curve ${isActive ? 'underline-curve-active' : ''}`}> Web Developer.</span>
            </span>
            <p className='md:text-4xl text-3xl text-zinc-50 font-primary'>I love to build <span className='rowdies-bold '>Modern</span> & <span className='rowdies-bold '> Scalable</span> Websites.</p>
            </div>
            <div className='grid gap-5 md:grid-cols-2 mt-8 md:mx-32'>
                <button 
                    type="button"
                    className='bg-buttons text-zinc-100 font-bold py-3 px-4 max-md:mx-14 rounded-full hover:bg-zinc-50/10 hover:text-zinc-100 transition duration-200 cursor-pointer transform hover:scale-110'
                    onClick={handleDownloadCV}
                >
                    Resume
                </button>
                <button 
                    className='bg-transparent ring-1 ring-zinc-100 text-zinc-100 font-bold py-3 px-4 max-md:mx-14 rounded-full transition duration-200 flex justify-center items-center gap-2 cursor-pointer transform hover:scale-110'
                    onClick={() => window.open('https://www.linkedin.com/in/ayeshperera03', '_blank')}
                >
                    <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                    Linkedin
                </button>
            </div>
        </div>
    </section>
  )
}

export default Hero;
