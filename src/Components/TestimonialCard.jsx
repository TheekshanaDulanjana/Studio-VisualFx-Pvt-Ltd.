import React from "react";

export default function TestimonialCard({ testimonial }) {
  const { username, image, eventType, message, date } = testimonial;

  return (
    <div className="group relative rounded-2xl overflow-hidden h-72 sm:h-72 flex-none w-[280px] sm:w-[350px] md:w-[380px] lg:w-[400px] snap-center">
      <img
        src={image}
        alt={username}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Initial Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-white/20 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={image}
            alt={username}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
          />
          <div >
            <h3 className="text-black text-sm sm:text-base font-alatsi">{username}</h3>
            <p className="text-black/80 text-sm sm:text-base font-alatsi -mt-1">{eventType}</p>
          </div>
        </div>
      </div>

      {/* Hover Content for Desktop */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm p-4 sm:p-6 flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out hidden md:flex">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <img
            src={image}
            alt={username}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-white"
          />
          <div>
            <h3 className="font-alatsi text-black text-sm sm:text-base">{username}</h3>
            <p className="text-black/70 text-sm sm:text-base font-alatsi -mt-1">{eventType}</p>
          </div>
        </div>

        <p className="text-black/70 text-justify font-[Alata] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-5">
          "{message}"
        </p>

        <p className="font-[Alata] text-white text-[10px] sm:text-xs absolute bottom-2 sm:bottom-4 right-4 sm:right-6">
          {date}
        </p>
      </div>

      {/* Always Visible Content for Mobile + Tablet */}
      <div className="md:hidden absolute inset-0 bg-white/5 backdrop-blur-sm p-4 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-3">
          <img
            src={image}
            alt={username}
            className="w-10 h-10 rounded-full object-cover border border-white"
          />
          <div>
            <h3 className="font-alatsi text-black text-sm sm:text-base">{username}</h3>
            <p className="text-black/70 text-sm sm:text-base font-alatsi -mt-1">{eventType}</p>
          </div>
        </div>

        <p className="text-black/70 text-justify font-[Alata] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-5">
          "{message}"
        </p>

        <p className="font-[Alata] text-black text-[10px] sm:text-xs absolute bottom-2 sm:bottom-4 right-4 sm:right-6">
          {date}
        </p>
      </div>
    </div>
  );
}
