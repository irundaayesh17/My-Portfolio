import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react'; // You can also use "→" as text if you prefer

interface EducationCardProps {
  logo: string;
  university: string;
  course: string;
  year: string;
  link: string;
}


const EducationCard = ({ logo, university, course, year, link } : EducationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-between items-center bg-primary rounded-xl px-4 mb-4 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
      >
        {/* Left section with logo and text */}
        <div className="flex items-center gap-4">
          <div className="md:w-14 md:h-14 w-10 h-10 rounded-full overflow-hidden border border-gray-500">
            <img src={logo} alt={`${university} logo`} className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            {/* University name and arrow */}
            <h3 className="md:text-[17px] text-[16px] font-semibold text-white flex items-center gap-1">
              {university}
              <span
                className={`transform transition-all duration-300 ${
                  isHovered ? 'opacity-100 translate-x-1' : 'opacity-0 translate-x-0'
                }`}
              >
                <ChevronRight size={18} />
              </span>
            </h3>
            {/* Course name */}
            <p className="text-gray-300 md:text-[13px] text-[12px]">{course}</p>
          </div>
        </div>
        {/* Right section with years */}
        <div className="text-right">
          <p className="text-gray-300 max-md:text-[12px]">{year}</p>
        </div>
      </motion.div>
    </a>
  );
};

export default EducationCard;
