import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate

export default function LandingAbout() {
  const navigate = useNavigate(); // <-- Initialize navigation

  const handleExploreClick = () => {
    navigate("/about"); // <-- Navigate to /about
  };

  return (
    <section className="max-w-7xl mx-auto py-4 md:py-16 font-alata flex flex-col justify-center">

      {/* Header */}
      <div className="mb-10">
        <p className="text-white text-lg sm:text-2xl mb-4">
          The eyes behind stories!
        </p>

        <div className="w-72 border-t-2 border-white" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 md:gap-10">

          {/* Left Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-tight mb-6 font-[Alatsi] text-white lg:col-span-2">
            Crafting Timeless Visual Stories Through
            Passion, Vision, and Authentic Creativity!
          </h1>

          {/* Right Content */}
          <div className="md:col-span-2 flex flex-col justify-between">

            {/* Paragraph */}
            <p className="text-white text-justify">
              At Studio VisualFX, we bring real moments to life through cinematic storytelling.
              Our team blends artistry with modern filmmaking to transform your emotions,
              celebrations, and memories into unforgettable visual experiences.
              Every frame is crafted with intention, ensuring your story feels honest,
              beautiful, and truly yours.
            </p>

            {/* Bottom row */}
            <div className="mt-8 flex items-center justify-between">

              {/* Small text */}
              <span className="text-white text-sm leading-snug">
                Learn more about <br />
                our journey, vision,
                and creative passion.
              </span>

              {/* Button */}
              <button
                onClick={handleExploreClick} // <-- Add click handler
                className="group hidden lg:flex items-center gap-3 bg-white 
                           font-alata text-black px-4 py-2 rounded-full hover:border hover:border-white 
                           hover:bg-black hover:text-white 
                           transition-all duration-200 text-sm xl:text-sm cursor-pointer "
              >
                <span>Explore more</span>
                <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full group-hover:bg-white transition">
                  <FaArrowRight className="text-white text-xs group-hover:text-black transition" />
                </span>
              </button>

            </div>
          </div>

        </div>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Video Card */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-black hover:scale-[1.02] transition-transform duration-300">
            <iframe
              className="w-full h-56"
              src="https://www.youtube.com/embed/me4-5oFdKpI?rel=0&modestbranding=1&controls=1"
              title="YouTube video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg bg-black hover:scale-[1.02] transition-transform duration-300">
            <iframe
              className="w-full h-56"
              src="https://www.youtube.com/embed/kkNuwRHeYR4?rel=0&modestbranding=1&controls=1"
              title="YouTube video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg bg-black hover:scale-[1.02] transition-transform duration-300">
            <iframe
              className="w-full h-56"
              src="https://www.youtube.com/embed/QWDjL8RDfso?rel=0&modestbranding=1&controls=1"
              title="YouTube video 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </div>

    </section>
  );
}
