import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
    const navLinks = useRef([]);
    const activeBox = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (navLinks.current.length > 0) {
            updateActiveBox(navLinks.current[activeIndex]);
        }
    }, [activeIndex]);

    useEffect(() => {
        const initActiveBox = () => {
            if (navLinks.current.length > 0) {
                updateActiveBox(navLinks.current[activeIndex]);
            }
        };

        window.addEventListener('resize', initActiveBox);
        return () => window.removeEventListener('resize', initActiveBox);
    }, [activeIndex]);

    const updateActiveBox = (element) => {
        if (activeBox.current && element) {
            const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = element;
            activeBox.current.style.left = `${offsetLeft}px`;
            activeBox.current.style.top = `${offsetTop}px`;
            activeBox.current.style.width = `${offsetWidth}px`;
            activeBox.current.style.height = `${offsetHeight}px`;
        }
    };

    const handleNavClick = (e, id, index) => {
        e.preventDefault();
        setActiveIndex(index);
        
        // Scroll to the section with matching ID
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'Education', id: 'education' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Blogs', id: 'blogs' },
    ];

    return (
        <nav className={`navbar absolute top-full mt-2 right-0 min-w-40 p-2 bg-zinc-50/10 rounded-2xl ring-inset scale-90 isolate opacity-0 invisible transition md:static md:flex md:items-center md:mt-0 md:opacity-100  md:visible md:scale-100 backdrop-blur-2xl ${navOpen ? 'active opacity-100 scale-100 blur-0 visible' : ''}`}>
            {navItems.map(({ label, id }, index) => (
                <a
                    href={`#${id}`}
                    key={index}
                    ref={(el) => (navLinks.current[index] = el)}
                    className={`nav-link ${index === activeIndex ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, id, index)}
                >
                    {label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
};

export default Navbar;