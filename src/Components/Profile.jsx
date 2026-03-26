import React from 'react';
import weddingImg from '../assets/wedding.png';
import { SiAdobepremierepro, SiDavinciresolve, SiAdobeaftereffects, SiAdobeaudition } from 'react-icons/si';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const ServiceSection = () => {
  const tools = [
    { name: 'Adobe Premiere Pro', icon: <SiAdobepremierepro className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: 'DaVinci Resolve', icon: <SiDavinciresolve className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: 'Adobe After Effects', icon: <SiAdobeaftereffects className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: 'Adobe Audition', icon: <SiAdobeaudition className="w-8 h-8 md:w-10 md:h-10" /> },
  ];

  return (
    <section className=" text-white py-12 md:py-12 px-6 overflow-hidden">
      {/* Container to center and limit width */}
      <div className="max-w-7xl mx-auto">
        
        {/* Top Content Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16 lg:mb-24">
          
          {/* Left Side: Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-belleza leading-tight">
              Visionary Director And <br className="hidden sm:block" /> Creative Storyteller
            </h1>
            <p className="text-white font-roboto leading-relaxed max-w-xl mx-auto lg:mx-0 text-sm md:text-sm text-justify lg:text-justify">
              As the driving force behind Studio VisualFX, Sasanka Dulanjana blends
               creativity, technical expertise, and storytelling mastery to craft cinematic
                experiences that resonate with audiences. With extensive experience in videography
                 and post-production, he ensures every frame reflects both artistic vision
                  and professional excellence. <br /><br />

                    Passionate about mentoring emerging talent, Sasanka fosters a culture of innovation and 
                    collaboration. His dedication to authentic storytelling and exceptional quality has made 
                    Studio VisualFX a trusted name for clients seeking memorable and engaging visual experiences.
            </p>
<div className="pt-4 flex items-center gap-2">
  <p className="text-sm font-roboto m-0">Let's Connect!</p>

  {/* WhatsApp */}
  <a 
    href="https://wa.me/your-number" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-300 hover:text-green-500 transition-colors text-lg"
  >
    <FaWhatsapp />
  </a>

  {/* Facebook */}
  <a 
    href="https://www.facebook.com/your-page" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-300 hover:text-blue-600 transition-colors text-lg"
  >
    <FaFacebookF />
  </a>

  {/* Instagram */}
  <a 
    href="https://www.instagram.com/your-profile" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-300 hover:text-pink-500 transition-colors text-lg"
  >
    <FaInstagram />
  </a>

  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/in/your-profile" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
  >
    <FaLinkedinIn />
  </a>
</div>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative group">
              {/* Optional: Simple decorative border/effect behind image */}
              <div className="absolute -inset-1  otransition duration-1000"></div>
              <img 
                src={weddingImg} 
                alt="Professional Videography" 
                className="relative w-full h-auto object-cover rounded-[16px] shadow-2xl transition duration-500"
              />
            </div>
          </div>
        </div>

        {/* Bottom Icons Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 border-t border-gray-800 pt-12 items-center lg:items-start">
          
          {/* Supporting List (Hidden on very small screens or re-arranged) */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 text-center lg:text-left text-sm font-roboto space-y-1 text-white mb-4 lg:mb-0">
            <p className="hover:text-white transition-colors cursor-default">Cinematic Storytelling</p>
            <p className="hover:text-white transition-colors cursor-default">Post-Production Mastery</p>
            <p className="hover:text-white transition-colors cursor-default">Audio & Visual Design</p>
          </div>

          {/* Dynamic Tools List */}
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 group cursor-pointer">
              <div className="text-gray-300 hover:text-white transform group-hover:scale-110 transition-all duration-300">
                {tool.icon}
              </div>
              <p className="font-roboto text-xs md:text-xs  uppercase text-gray-300 group-hover:text-white transition-colors">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;