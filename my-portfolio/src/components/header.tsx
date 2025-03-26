import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Navbar from "./navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contactme');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-10 h-20 flex items-center transition-all duration-300 ${isScrolled ? 'bg-primary shadow-md' : 'bg-gradient-to-b from-primary to-primary/0'}`}>
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr]">
        <h1>
          <a href="/" className="logo" aria-label="Ayesh Perera Home">
            <img src={logo} width={50} height={50} alt="Ayesh Perera" />
          </a>
        </h1>

        <div className="relative md:justify-self-center flex items-center gap-4">
          {/* Mobile Contact Button - stays fixed in position */}
          <div className="md:hidden flex-shrink-0">
            <a 
              href="#contactme" 
              className="px-6 py-2 bg-zinc-50 text-primary rounded-full font-semibold hover:scale-110 hover:bg-buttons hover:text-zinc-100 transition-transform duration-200 block"
              onClick={handleContactClick}
            >
              Contact Me
            </a>
          </div>
          
          {/* Mobile Menu Button - stays fixed in position */}
          <button 
            onClick={() => setNavOpen(!navOpen)} 
            className="menu-btn md:hidden w-10 h-10 grid place-items-center bg-zinc-50/10 rounded-xl ring-inset ring-zinc-50/[0.02] backdrop-blur-2xl hover:bg-zinc-50/15 transition-all active:scale-95 flex-shrink-0"
          >
            {navOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>
          
          <Navbar navOpen={navOpen}/>
        </div>

        {/* Desktop Contact Button */}
        <div className="max-md:hidden md:justify-self-end flex-shrink-0">
          <a 
            href="#contactme" 
            className="px-6 py-2 bg-zinc-50 text-primary rounded-full font-semibold hover:scale-110 hover:bg-buttons hover:text-zinc-100 transition-transform duration-200"
            onClick={handleContactClick}
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;