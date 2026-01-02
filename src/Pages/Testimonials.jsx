import React, { useRef, useEffect, useState } from "react";
import TestimonialCard from "../Components/TestimonialCard";

import testimonials01 from "../assets/testimonials01.jpg";
import testimonials02 from "../assets/testimonials02.jpg";
import testimonials03 from "../assets/testimonials03.jpg";
import testimonials04 from "../assets/testimonials04.jpg";
import testimonials05 from "../assets/testimonials05.jpg";

const testimonials = [
  { username: "Kavi and Navod", image: testimonials01, eventType: "Wedding", message: "Working with this team has been a game-changer for our business. They understood our needs and delivered solutions that exceeded expectations.", date: "18 September 2025" },
  { username: "Saman and Nadeesha", image: testimonials02, eventType: "Engagement", message: "Amazing team! They captured every moment beautifully and made us feel so comfortable.", date: "10 August 2025" },
  { username: "Ruwan and Anjali", image: testimonials03, eventType: "Wedding", message: "Their cinematic vision is outstanding. Every shot was perfect.", date: "5 July 2025" },
  { username: "Nimali and Roshan", image: testimonials04, eventType: "Engagement", message: "Beautifully executed and highly professional team!", date: "20 June 2025" },
  { username: "Dilani and Kasun", image: testimonials05, eventType: "Wedding", message: "We loved every moment captured by this team!", date: "12 May 2025" },
];

export default function Testimonials() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const firstThree = testimonials.slice(0, 3);
  const remainingCount = testimonials.length - firstThree.length;

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // 🔹 Auto scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    intervalRef.current = setInterval(() => {
      slider.scrollBy({ left: 320, behavior: "smooth" });
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // 🔹 Mouse wheel scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (e) => {
      e.preventDefault();
      slider.scrollBy({ left: e.deltaY > 0 ? 320 : -320, behavior: "smooth" });
    };

    slider.addEventListener("wheel", handleWheel, { passive: false });
    return () => slider.removeEventListener("wheel", handleWheel);
  }, []);

  // 🔹 Touch drag
  const handleTouchStart = (e) => { setStartX(e.touches[0].clientX); setIsDragging(true); };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
      sliderRef.current.scrollBy({ left: diff > 0 ? 320 : -320, behavior: "smooth" });
      setStartX(currentX);
    }
  };
  const handleTouchEnd = () => setIsDragging(false);

  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">

        {/* LEFT SIDE */}
        <div className="lg:w-5/12 flex flex-col justify-center font-[Alata]">
          <div className="flex items-center mb-4 bg-white rounded-full w-fit px-3 py-2">
            {firstThree.map((t, i) => (
              <img
                key={i}
                src={t.image}
                alt={t.username}
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-black object-cover ${i !== 0 ? "-ml-2" : ""}`}
              />
            ))}
            {remainingCount > 0 && (
              <span className="ml-2 text-sm sm:text-base text-black">
                +{remainingCount} Testimonials
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 font-alatsi leading-snug">
            What our clients are <br /> saying about us?
          </h2>

          <p className="text-gray-300 max-w-md text-justify sm:text-lg">
            Hear from the couples and clients whose most precious moments we’ve captured.
            Hear from the couples and clients whose most .
            Hear from the couples and clients whose most precious moments we’ve captured.
          </p>
        </div>

        {/* RIGHT SIDE – Auto Slider */}
        <div className="lg:w-7/12 relative">
          <div
            ref={sliderRef}
            onMouseEnter={() => clearInterval(intervalRef.current)}
            onMouseLeave={() => {
              intervalRef.current = setInterval(() => sliderRef.current.scrollBy({ left: 320, behavior: "smooth" }), 3000);
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="flex gap-4 sm:gap-6 overflow-hidden scroll-smooth snap-x snap-mandatory cursor-grab py-2"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>

          {/* 🔹 Gradient overlay for right shadow effect on large screens */}
          <div className="hidden lg:block absolute top-0 right-0 h-full w-34 pointer-events-none bg-linear-to-l from-black/80 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}
