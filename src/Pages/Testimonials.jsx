import React, { useRef } from "react";

import testimonials01 from "../assets/testimonials01.jpg";
import testimonials02 from "../assets/testimonials02.jpg";
import testimonials03 from "../assets/testimonials03.jpg";
import testimonials04 from "../assets/testimonials04.jpg";
import testimonials05 from "../assets/testimonials05.jpg";

// Testimonials data
const testimonials = [
  {
    username: "Kavi and Navod",
    image: testimonials01,
    eventType: "Wedding",
    message:
      "Working with this team has been a game-changer for our business. They understood our needs and delivered solutions that exceeded expectations. Their professionalism, creativity, and dedication made the process smooth and stress-free. I highly recommend their services to anyone looking for a reliable and innovative partner.",
    date: "18 September 2025",
  },
  {
    username: "Saman and Nadeesha",
    image: testimonials02,
    eventType: "Engagement",
    message:
      "Amazing team! They captured every moment beautifully and made us feel so comfortable. Highly professional and creative!",
    date: "10 August 2025",
  },
  {
    username: "Ruwan and Anjali",
    image: testimonials03,
    eventType: "Wedding",
    message:
      "Their cinematic vision is outstanding. Every shot was perfect, and the final product was beyond our expectations.",
    date: "5 July 2025",
  },
  {
    username: "Nimali and Roshan",
    image: testimonials04,
    eventType: "Engagement",
    message: "Beautifully executed and highly professional team!",
    date: "20 June 2025",
  },
  {
    username: "Dilani and Kasun",
    image: testimonials05,
    eventType: "Wedding",
    message: "We loved every moment captured by this team!",
    date: "12 May 2025",
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);


  // Helper to get first 3 testimonials and count remaining
  const firstThree = testimonials.slice(0, 3);
  const remainingCount = testimonials.length - firstThree.length;

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left Content */}
        <div className="flex flex-col justify-center font-alata">
          {/* Small top section with circles */}
          <div className="flex items-center mb-4 bg-white rounded-full w-48 pl-3 p-2">
            {firstThree.map((t, i) => (
              <img
                key={i}
                src={t.image}
                alt={t.username}
                className={`w-6 h-6 rounded-full border border-black object-cover ${
                  i !== 0 ? "-ml-2" : ""
                }`} // negative margin for overlap except first
              />
            ))}
            {remainingCount > 0 && (
              <div className="pl-2 h-6 rounded-full text-black flex items-center justify-center text-sm ">
                +{remainingCount} Testimonials
              </div>
            )}
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 font-alatsi">
            What our clients are <br />
            saying about us?
          </h2>

          <p className="text-gray-300 max-w-xl text-base text-justify sm:text-lg">
            Hear from the couples and clients whose most precious moments we’ve
            captured. Their words tell the story of our passion, craft, and
            cinematic vision. Each testimonial reflects the emotions, trust, and
            unforgettable experiences that define every frame we create.
          </p>
        </div>

        {/* Right Testimonials Slider */}
        <div className="relative bg-black">
          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 snap-x snap-mandatory overflow-hidden cursor-grab h-90   py-2"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group relative  rounded-2xl overflow-hidden shadow-lg h-80 flex-none w-[400px] snap-center"
              >
                <img
                  src={t.image}
                  alt={t.username}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* 2. Initial View Overlay (Gradient + Name/Avatar) - Disappears on Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-white/20 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.username}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    <div>
                      <h3 className="text-black font-alatsi">{t.username}</h3>
                      <p className="text-black/70 text-xs font-alata ">{t.eventType}</p>
                    </div>
                  </div>
                </div>

                
                <div className="absolute inset-0 bg-white/20 backdrop-blur-md p-6 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  {/* Header inside hover card */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={t.image}
                      alt={t.username}
                      className="w-12 h-12 rounded-full object-cover border border-white"
                    />
                    <div>
                      <h3 className="font-alatsi text-black">{t.username}</h3>
                      <p className="text-black/80 font-alata text-sm">{t.eventType}</p>
                    </div>
                  </div>

                  {/* Message (Only visible on hover) */}
                  <p className="text-black/70 text-justify font-alata text-sm leading-relaxed mb-4 line-clamp-5">
                    "{t.message}"
                  </p>

                  <p className="text-white font-alata text-xs absolute bottom-4 right-6">
                    {t.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {/* <button
            onClick={() => scroll("prev")}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            &#8592;
          </button>
          <button
            onClick={() => scroll("next")}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            &#8594;
          </button> */}
        </div>
      </div>
    </section>
  );
}