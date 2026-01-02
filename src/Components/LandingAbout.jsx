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
    { id: "me4-5oFdKpI", thumbnail: "https://img.youtube.com/vi/QWDjL8RDfso/hqdefault.jpg" },
    { id: "kkNuwRHeYR4", thumbnail: "https://img.youtube.com/vi/kkNuwRHeYR4/hqdefault.jpg" },
    { id: "QWDjL8RDfso", thumbnail: "https://img.youtube.com/vi/QWDjL8RDfso/hqdefault.jpg" },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6 lg:px-8 font-[Alata] flex flex-col justify-center">
      
      {/* Header Section */}
      <div className="mb-12">
        <p className="text-white text-lg sm:text-xl lg:text-2xl mb-4 opacity-90">
          The eyes behind stories!
        </p>

        <div className="w-24 sm:w-72 border-t border-white mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
          
          {/* Left Title - Takes up 7/12 of the grid on desktop */}
          <div className="lg:col-span-7">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-[1.1] font-[Alatsi] text-white">
              Crafting Timeless Visual Stories <br className="hidden sm:block" />
              Through Passion, Vision, and <br className="hidden sm:block" />
              Authentic Creativity!
            </h1>
          </div>

          {/* Right Content - Takes up 5/12 of the grid on desktop */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start">
            <p className="text-gray-200 text-base sm:text-base leading-relaxed text-justify lg:text-justify">
              At Studio VisualFX, we bring real moments to life through cinematic storytelling.
              Our team blends artistry with modern filmmaking to transform your emotions,
              celebrations, and memories into unforgettable visual experiences.
              Every frame is crafted with intention, ensuring your story feels honest.
            </p>

            <div className="mt-6 w-full flex justify-start">
              <button
                onClick={handleExploreClick}
                className="group flex items-center gap-2 bg-white 
                           font-[Alata] text-black px-4 py-2 rounded-full 
                           hover:bg-black hover:text-white border border-transparent
                           hover:border-white transition-all duration-300 
                           text-sm md:text-base cursor-pointer"
              >
                <span>Explore more</span>
                <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full group-hover:bg-white transition-colors duration-300">
                  <FaArrowRight className="text-white text-xs group-hover:text-black transition-colors duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="mt-4 md:mt-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-6">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 cursor-pointer hover:scale-[1.03] transition-transform duration-500 group"
              onClick={() => setActiveVideo(video.id)}
            >
              {/* Thumbnail */}
              {!activeVideo || activeVideo !== video.id ? (
                <>
                  <img 
                    src={video.thumbnail} 
                    alt="video thumbnail" 
                    className="w-full h-full object-cover transition-opacity duration-300" 
                  />
                  
                  {/* Custom Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300"> 
                    <div className="w-16 h-10 bg-white/30 backdrop-blur-md rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-16 border-l-white border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </>
              ) : null}

              {/* Embedded video modal logic remains the same but container is now aspect-ratio locked */}
              {activeVideo === video.id && (
                <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                    title="YouTube video"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>

                  <button 
                    className="absolute top-3 right-3 text-white cursor-pointer rounded-full flex items-center justify-center text-xl font-normal transition-colors z-20" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveVideo(null);
                    }}
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