import { useState, useEffect } from 'react';

const Contactus = () => {
    const [isActive, setIsActive] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Scroll handler for underline animation
    useEffect(() => {
        const handleScroll = () => {
            setIsActive(window.scrollY > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(event.target);
        formData.append("access_key", "ef62ad24-34df-4140-8ab6-a0253d4b5a3d");
    
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(Object.fromEntries(formData))
            }).then((res) => res.json());
    
            if (res.success) {
                // Clear form inputs
                event.target.reset();
                setIsSubmitted(true);
                // Hide success message after 5 seconds
                setTimeout(() => setIsSubmitted(false), 5000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEmailClick = () => {
        window.location.href = "mailto:ayeshirunda1234@gmail.com?subject=Contact%20Request";
    };

    return (
        <section id='contactme' className='md:mt-2 mt-8 flex justify-center px-4 mb-16'>
            <div className='container md:max-w-[740px] mx-auto'>
                {/* Divider line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent my-6"></div>

                <div className='bg-primary p-8 rounded-lg text-center shadow-xl relative'>
                    {/* Success notification */}
                    {isSubmitted && (
                        <div
                            className={`absolute md:bottom-4 bottom-22 left-1/2 transform -translate-x-1/2 bg-green-400 text-primary border-0 border-black px-10 py-3 rounded-4xl shadow-lg font-semibold animate-fade-in`}
                        >
                            Message sent successfully!
                        </div>
                    )}
                    
                    <span
                        className={`text-4xl text-center rowdies-bold text-zinc-50 font-primary md:mb-10 mb-6 relative inline-block underline-curve ${
                            isActive ? 'underline-curve-active' : ''
                        }`}
                    >
                        Contact Me
                    </span>

                    <div className='contactme-form'>
                        <span className="text-zinc-50 text-lg mb-4">
                            Feel free to reach out to me directly at{' '}
                            <i><u className="cursor-pointer hover:text-blue-200" onClick={handleEmailClick}>
                                ayeshirunda1234@gmail.com
                            </u></i>{' '}
                            or through this form.
                        </span>
                        
                        <form className="space-y-4 mt-6" onSubmit={onSubmit}>
                            <div className="text-left">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 rounded-lg text-primary placeholder:text-gray-400 bg-zinc-50 border border-black focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent focus:shadow-inner"
                                    placeholder="Your name"
                                />
                            </div>
                            
                            <div className="text-left">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 rounded-lg text-primary placeholder:text-gray-400 bg-zinc-50 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            
                            <div className="text-left">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full px-4 py-2 rounded-lg text-primary placeholder:text-gray-400 bg-zinc-50 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full md:w-auto px-6 py-3 rounded-full font-medium bg-buttons text-zinc-100 hover:bg-zinc-50/10 hover:text-zinc-100 transition duration-200 cursor-pointer transform hover:scale-110 md:float-left flex items-center justify-center ${
                                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                    }`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit'}
                                    {!isSubmitting && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 ml-2"
                                        >
                                            <path d="M9.743 14.823 9.5 19.5c.5 0 .7-.2.95-.4l2.3-2.1 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.3c.3-1.3-.5-1.8-1.3-1.5L2.3 10.3c-1.3.5-1.3 1.2-.2 1.5l4.2 1.3 9.8-6.2c.5-.3 1-.1.6.2l-8 7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Add this to your global CSS or Tailwind config */}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Contactus;