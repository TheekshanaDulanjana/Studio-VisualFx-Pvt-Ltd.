import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LandingAbout() {
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState(null);

  const handleExploreClick = () => {
    navigate("/about");
  };

  // Video data
  const videos = [
    { id: "me4-5oFdKpI", thumbnail: "https://img.youtube.com/vi/me4-5oFdKpI/hqdefault.jpg" },
    { id: "kkNuwRHeYR4", thumbnail: "https://img.youtube.com/vi/kkNuwRHeYR4/hqdefault.jpg" },
    { id: "QWDjL8RDfso", thumbnail: "https://img.youtube.com/vi/QWDjL8RDfso/hqdefault.jpg" },
  
  ];

  return (
    <section className="max-w-7xl mx-auto py-4 md:py-16 font-alata flex flex-col justify-center">

      {/* Header */}
      <div className="mb-10">
        <p className="text-white text-lg sm:text-2xl mb-4">
          The eyes behind stories!
        </p>

        <div className="w-72 border-t border-white" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 md:gap-10">

          {/* Left Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-tight mb-6 font-[Alatsi] text-white lg:col-span-2">
            Crafting Timeless Visual Stories <br />Through
            Passion, Vision, and <br />Authentic Creativity!
          </h1>

          {/* Right Content */}
          <div className="md:col-span-2 flex flex-col justify-between">

            <p className="text-white text-justify">
              At Studio VisualFX, we bring real moments to life through cinematic storytelling.
              Our team blends artistry with modern filmmaking to transform your emotions,
              celebrations, and memories into unforgettable visual experiences.
              Every frame is crafted with intention, ensuring your story feels honest,
              beautiful, and truly yours.
            </p>

            <div className="mt-8 flex items-center justify-between">
              {/* <span className="text-white text-sm leading-snug">
                Learn more about <br />
                our journey, vision,
                and creative passion.
              </span> */}

              <button
                onClick={handleExploreClick}
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

      {/* Video Section */}
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {videos.map((video) => (
            <div 
              key={video.id} 
              className="relative rounded-2xl overflow-hidden shadow-lg bg-black cursor-pointer hover:scale-[1.02] transition-transform duration-300"
              onClick={() => setActiveVideo(video.id)}
            >
              {/* Thumbnail */}
              <img src={video.thumbnail} alt="video thumbnail" className="w-full h-56 object-cover" />

              {/* Custom Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none"> 
                <div className="w-14 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-l-[14px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                </div>
              </div>

              {/* Embedded video modal */}
              {activeVideo === video.id && (
                <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                  <iframe
                    className="w-full h-full max-w-3xl max-h-[70vh]"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&controls=0&showinfo=0`}
                    title="YouTube video"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>

                  <button 
                    className="absolute top-5 right-5 text-white text-2xl font-bold" 
                    onClick={() => setActiveVideo(null)}
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
