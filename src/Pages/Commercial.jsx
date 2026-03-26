import React from "react";
import FallbackImg from "../assets/fallback.png";

const Commercial = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="relative flex max-w-screen min-h-screen items-center justify-center">

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
                    <p className="text-xs font-roboto sm:text-xs md:text-xs uppercase tracking-widest ">
            Commercial Projects
          </p>
          
          
          <h1 className="text-3xl sm:text-4xl font-belleza  md:text-6xl  leading-tight mt-2">
            Studio VisualFX (Pvt) Ltd.
          </h1>

          <p className="text-sm sm:text-sm md:text-sm mt-2">
           Stay tuned for our upcoming commercial projects that will showcase our expertise in crafting compelling <br /> visual narratives for brands and businesses. We are excited to share our creative journey with you as we bring stories to life through the art of filmmaking.
          </p>
        </div>

      </section>
    </div>
  );
};

export default Commercial;
