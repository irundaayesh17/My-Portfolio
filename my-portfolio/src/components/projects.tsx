import { useState, useEffect, useRef } from 'react';
import ProjectCard from './projectCard';
import fitnessapp from '../assets/2.png';
import lankabids from '../assets/2.jpg';
import FOODORDER from '../assets/3.jpg';
import portfolio from '../assets/4.png';
import underwater from '../assets/underwater.jpg';
import byft from '../assets/byft.png';

const Projects = () => {
  const [isActive, setIsActive] = useState(false);
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll handler for underline animation
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation for project cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    projectCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      projectCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id='projects' className='md:mt-10 mt-8 flex justify-center px-4'>
      <div className='container md:max-w-[740px] mx-auto'>
        {/* Divider line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent my-6"></div>

        <div className='bg-primary p-8 rounded-lg text-center shadow-xl'>
          <span
            className={`text-4xl text-center rowdies-bold text-zinc-50 font-primary md:mb-10 mb-6 relative inline-block underline-curve ${
              isActive ? 'underline-curve-active' : ''
            }`}
          >
            Projects
          </span>

          {/* Grid Layout for 2 cards per row */}
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-6'>
            <div 
              ref={(el: HTMLDivElement | null) => {
                if (el) projectCardsRef.current[0] = el;
              }}
              className="opacity-0 transition-all duration-500 ease-out"
            >
              <ProjectCard
                title="Coach@Home - AI Driven Exercise App"
                date="Sep 2024 - Dec 2024"
                description="Developed Coach@Home, an AI-powered fitness app that delivers personalized workout plans, real-time posture correction, progress tracking, and wearable integration. Built with Flutter, C++, and Swift, the app enhances user engagement through AI-driven insights and tailored meal plans for a complete fitness experience."
                tags={["Flutter", "NeonDB", "Firebase", "OpenCV"]}
                image={fitnessapp}
                githubLink="https://github.com/irundaayesh17/HND_FINAL_HOME-COACH"
                linkedinLink="https://www.linkedin.com/in/ayeshperera03/details/projects/"
              />
            </div>
            <div 
              ref={(el: HTMLDivElement | null) => {
                if (el) projectCardsRef.current[1] = el;
              }}
              className="opacity-0 transition-all duration-500 ease-out delay-100"
            >
              <ProjectCard
                title="LankaBidsLK - Online Bidding Platform"
                date="Sep 2024 - Oct 2024"
                description="Developed a secure bidding platform using Next.js, Node.js, and MySQL, featuring real-time updates, user profiles, and secure transactions with email verification and optional 2FA. Implemented robust security measures, including SQL injection protection, password encryption, and role-based access control, while ensuring a responsive UI with Tailwind CSS and seamless data validation using Zod."
                tags={["Next.Js", "Node.js", "MySQL", "Tailwind CSS", "User Authentication"]}
                image={lankabids}
                githubLink="https://github.com/irundaayesh17/LankaBidsLK"
                linkedinLink="https://www.linkedin.com/in/ayeshperera03/details/projects/"
              />
            </div>
            <div 
              ref={(el: HTMLDivElement | null) => {
                if (el) projectCardsRef.current[2] = el;
              }}
              className="opacity-0 transition-all duration-500 ease-out delay-200"
            >
              <ProjectCard
                title="FoodHouse - Online Food Ordering Platform"
                date="May 2024 - Oct 2024"
                description="FoodHouse is a user-friendly platform for seamless food ordering. It offers an intuitive menu selection, secure checkout, and account management with registration and login. Users can customize orders, make payments effortlessly, and contact the shop owner for assistance. Whether for a quick snack or a feast, FoodHouse ensures a hassle-free ordering experience."
                tags={["HTML", "Tailwind CSS", "JavaScript", "Firebase", "JSON"]}
                image={FOODORDER}
                githubLink="https://github.com/irundaayesh17/Restaurant-website-TailwindCSS"
                linkedinLink="https://www.linkedin.com/in/ayeshperera03/details/projects/"
              />
            </div>
            <div 
              ref={(el: HTMLDivElement | null) => {
                if (el) projectCardsRef.current[3] = el;
              }}
              className="opacity-0 transition-all duration-500 ease-out delay-300"
            >
              <ProjectCard
                title="Personal Portfolio Website"
                date="Mar 2024 - Mar 2024"
                description="Developed a personal portfolio website using React and Tailwind CSS, showcasing projects, skills, and experience in a clean, responsive design. Implemented smooth navigation, interactive UI elements, and optimized performance for a seamless user experience."
                tags={["React", "Tailwind CSS"]}
                image={portfolio}
                githubLink="https://github.com/your-repo"
                linkedinLink="https://www.linkedin.com/in/ayeshperera03/details/projects/"
              />
            </div>
            <div 
              ref={(el: HTMLDivElement | null) => {
                if (el) projectCardsRef.current[4] = el;
              }}
              className="opacity-0 transition-all duration-500 ease-out delay-400"
            >
              <ProjectCard
                title="UnderWater Media Enhancer using DIP"
                date="Jun 2024 - Aug 2024"
                description="Developed a Project that enhances Underwater Images / Videos using Digital processing techniques such as DCP, Guided Filtering, White Balancing, Histogram Equalization, and Contrast Stretching to dehaze the image and improve the visibility of the Image."
                tags={["Python", "OpenCV", "Digital Image Processing"]}
                image={underwater}
                githubLink="https://github.com/irundaayesh17/UnderWater_Media_Enhancer"
                linkedinLink="https://www.linkedin.com/in/ayeshperera03/details/projects/"
              />
            </div>
            <div 
              ref={(el: HTMLDivElement | null) => {
                if (el) projectCardsRef.current[5] = el;
              }}
              className="opacity-0 transition-all duration-500 ease-out delay-500"
            >
              <ProjectCard
                title="Byft -Book. Ride. Go."
                date="Nov 2024 - Nov 2024"
                description="Built a dynamic bus seat booking system with real-time seat allocation and SQLite integration. Designed custom layouts to replicate actual bus seating and included features like driver assignment search, route integration, and scalability for varying bus capacities."
                tags={["Android Development", "Java", "XML", "SQLite"]}
                image={byft}
                githubLink="https://github.com/irundaayesh17/Byft"
                linkedinLink="https://www.linkedin.com/in/ayeshperera03/details/projects/"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add this to your global CSS or CSS-in-JS solution */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;