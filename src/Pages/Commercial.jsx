import React from "react";
import FallbackImg from "../assets/fallback.png";

const Commercial = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="relative flex w-screen min-h-screen items-center justify-center px-4">

        {/* Background Image */}
        <img
          src={FallbackImg}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-3xl flex flex-col items-start text-left text-white">
                    <p className="text-lg font-alata sm:text-2xl md:text-3xl">
            Commercial Projects
          </p>
          
          
          <h1 className="text-3xl sm:text-4xl font-alatsi md:text-6xl font-bold leading-tight mt-2">
            Studio VisualFX (Pvt) Ltd.
          </h1>

          <p className="text-sm sm:text-lg md:text-xl mt-4">
           A leading creative studio specializing in high-quality 
           visual effects, animation, and digital media solutions 
           for commercial projects.
          </p>
        </div>

      </section>
    </div>
  );
};

export default Commercial;
