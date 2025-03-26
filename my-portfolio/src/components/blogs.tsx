import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blogs = () => {
    const [isActive, setIsActive] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => setIsActive(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    const blogs = [
        {
            title: "Firebase User Authentication with Javascript",
            date: "Aug 05, 2024",
            description: "Firebase is a product of Google that helps developers build, manage, and grow their apps easily.",
            image: b1,
            link: "https://ayeshperera19.medium.com/firebase-user-authentication-with-javascript-134d72953d52"
        },
        {
            title: "What is Tailwind CSS? Modern Web Designing",
            date: "Aug 01, 2024",
            description: "Tailwind CSS is a utility-first framework with pre-designed components.",
            image: b2,
            link: "https://ayeshperera19.medium.com/what-is-tailwind-css-modern-web-designing-dfb8f7683e55"
        },
        {
            title: "What is a Python Library?",
            date: "Jul 31, 2024",
            description: "In programming, a library is a pre-written code block that developers can use.",
            image: b3,
            link: "https://ayeshperera19.medium.com/what-is-a-python-library-0e2bb404e114"
        }
    ];

    return (
        <section id='blogs' className='w-full py-10 md:py-14 bg-primary'>
            <div className='mx-auto px-4 w-full max-w-[95vw] md:max-w-[740px]'>
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent my-6"></div>

                <div className='bg-primary p-8 rounded-lg text-center shadow-xl mb-6'>
                    <span className={`text-4xl text-center rowdies-bold text-zinc-50 font-primary relative inline-block underline-curve ${isActive ? 'underline-curve-active' : ''}`}>
                        Blogs
                    </span>
                </div>

                <div className='w-full'>
                    <Slider {...settings}>
                        {blogs.map((blog, index) => (
                            <div key={index} className='px-2 outline-none'>
                                <BlogCard {...blog} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Blogs;