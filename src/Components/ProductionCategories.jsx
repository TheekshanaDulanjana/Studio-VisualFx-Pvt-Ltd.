import wedding from "../assets/wedding.png";
import event from "../assets/event.png";
import commercial from "../assets/commercial.png";
import music from "../assets/music.png";

export default function ProductionCategories() {
  const otherCategories = [
    {
      img: event,
      title: "Event Cinematography",
      desc: "Document every celebration, big or small, with artistry, precision, and timeless cinematic storytelling.",
    },
    {
      img: commercial,
      title: "Commercial Productions",
      desc: "Elevate your brand with visually striking, memorable videos that engage audiences and tell your story.",
    },
    {
      img: music,
      title: "Music Videos",
      desc: "Bring songs to life with emotional, cinematic visuals that resonate and leave lasting impressions.",
    },
  ];

  // Combine all for the Tablet/Mobile grid view
  const allCategories = [
    {
      img: wedding,
      title: "Creative Wedding Films",
      desc: "Capture your love story with cinematic moments, emotions, and memories that last a lifetime.",
    },
    ...otherCategories,
  ];

  return (
    <section className="bg-black text-white py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: Text and Highlight Card (Laptop View) */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center font-[Alata]">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 font-[Alatsi] text-center lg:text-left">
              Turning Moments Into Cinematic Stories That Inspire
            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto lg:mx-0 text-base text-center lg:text-justify sm:text-lg leading-relaxed">
              Studio VisualFX transforms your most cherished moments into
              stunning visual stories. From heartfelt weddings and lively
              events to creative commercials and music videos, we craft
              cinematic experiences that move, inspire, and leave lasting
              memories.
            </p>
          </div>

          {/* Wedding Highlight Card - Visible only on Laptop (lg+) */}
          <div className="hidden lg:block relative rounded-2xl overflow-hidden outline outline-white/30 shadow-2xl h-[350px] group">
            <img
              src={wedding}
              alt="Creative Wedding Films"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl mb-2 font-[Alatsi]">Creative Wedding Films</h3>
              <p className="text-sm text-gray-200 font-[Alata] max-w-sm">
                Capture your love story with cinematic moments, emotions, and memories that last a lifetime.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: The Grid */}
        {/* Mobile: 1 column (all 4 cards)
            Tablet: 2x2 grid (all 4 cards same size) 
            Laptop: 1x3 grid (remaining 3 cards)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          
          {/* Map through all categories for Mobile and Tablet */}
          {/* On Laptop (lg), we hide the first item (Wedding) because it's already shown in the top section */}
          {allCategories.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-xl  overflow-hidden group h-64 sm:h-72 md:h-80 outline outline-white/30 lg:h-64 
                ${index === 0 ? "lg:hidden" : "block"}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition  duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute  inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-xl mb-2 font-[Alatsi]  transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-200 font-[Alata] leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}