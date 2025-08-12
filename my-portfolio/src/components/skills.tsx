import { useState, useEffect, ReactNode } from 'react';
import { 
  SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, 
  SiTailwindcss, SiTypescript, 
  SiAndroid, SiMysql, SiGit, SiGithub, 
  SiFigma,
  SiSass
} from 'react-icons/si';
import csharp from '../assets/csharp.svg';
import java from '../assets/java.svg';
import flutter from '../assets/flutter.svg';

const Skills = () => {
  const [isActive, setIsActive] = useState(false);

  // Scroll handler for underline animation
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='skills' className='md:mt-10 mt-8 flex justify-center px-4'>
      <div className='container md:max-w-[740px] mx-auto'>
        {/* Divider line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent my-6"></div>

        {/* Card */}
        <div className='bg-primary p-8 rounded-lg text-center shadow-xl'>
          {/* Heading with animated underline */}
          <span
            className={`text-4xl text-center rowdies-bold text-zinc-50 font-primary md:mb-10 mb-6 relative inline-block underline-curve ${
              isActive ? 'underline-curve-active' : ''
            }`}
          >
            Skills
          </span>

          {/* Icons Section */}
          <div className='flex justify-center gap-4 flex-wrap mt-6'>
            <IconWrapper label="React">
              <SiReact size={50} color="#61DAFB" />
            </IconWrapper>
            <IconWrapper label="Next.js">
              <SiNextdotjs size={50} color="#565555" />
            </IconWrapper>
            <IconWrapper label="JavaScript">
              <SiJavascript size={50} color="#F7DF1E" />
            </IconWrapper>
            <IconWrapper label="HTML5">
              <SiHtml5 size={50} color="#E34F26" />
            </IconWrapper>
            <IconWrapper label="CSS3">
              <SiCss3 size={50} color="#1572B6" />
            </IconWrapper>
            <IconWrapper label="Tailwind CSS">
              <SiTailwindcss size={50} color="#38B2AC" />
            </IconWrapper>
            <IconWrapper label="Figma">
              <SiFigma size={50} color="#F24E1E" />
            </IconWrapper>
            <IconWrapper label="Sass">
              <SiSass size={50} color="#CC6699" />
            </IconWrapper>
            <IconWrapper label="TypeScript">
              <SiTypescript size={50} color="#3178C6" />
            </IconWrapper>
            <IconWrapper label="Flutter">
              <img src={flutter} alt="Flutter" width={50} height={50} />
            </IconWrapper>
            <IconWrapper label="Android">
              <SiAndroid size={50} color="#3DDC84" />
            </IconWrapper>
            <IconWrapper label="Java">
              <img src={java} alt="Java" width={50} height={50} />
            </IconWrapper>
            <IconWrapper label="C#">
              <img src={csharp} alt="C#" width={50} height={50} />
            </IconWrapper>
            <IconWrapper label="MySQL">
              <SiMysql size={50} color="#4479A1" />
            </IconWrapper>
            <IconWrapper label="Git">
              <SiGit size={50} color="#F05032" />
            </IconWrapper>
            <IconWrapper label="GitHub">
              <SiGithub size={50} color="#565555" />
            </IconWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

// Wrapper component for icons with hover effect and label
interface IconWrapperProps {
  children: ReactNode;
  label: string;
}

const IconWrapper = ({ children, label }: IconWrapperProps) => (
  <div className="relative group">
    <div className="p-2 rounded-full bg-zinc-50/10 shadow-md hover:scale-115 transition-transform duration-200 ease-in-out">
      {children}
    </div>
    <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs bg-black rounded px-2 py-1 z-8">
      {label}
    </span>
  </div>
);

export default Skills;