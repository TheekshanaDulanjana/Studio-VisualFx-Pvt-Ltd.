import wedding from "../assets/wedding.png";
import event from "../assets/event.png";
import commercial from "../assets/commercial.png";
import music from "../assets/music.png";

export default function ProductionCategories() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

        {/* Left Content */}
        <div className="flex flex-col justify-center font-[Alata]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 font-[Alatsi]">
            Turning Moments Into <br />
            Cinematic Stories That Inspire and Captivate
          </h2>

          <p className="text-gray-300 max-w-xl text-base text-justify sm:text-lg">
            Studio VisualFX transforms your most cherished moments into
            stunning visual stories. From heartfelt weddings and lively
            events to creative commercials and music videos, we craft
            cinematic experiences that move, inspire, and leave lasting
            memories.
          </p>
        </div>

        {/* Right Highlight Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-80 ">
          <img
            src={wedding}
            alt="Creative Wedding Films"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-2xl mb-2 font-[Alatsi]">
              Creative Wedding Films
            </h3>
            <p className="text-sm text-gray-200 font-[Alata]">
              Capture your love story with cinematic moments, emotions,
              and memories that last a lifetime.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="max-w-7xl mx-auto mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
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
        ].map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group h-60"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-5 flex flex-col justify-end">
              <h4 className="text-xl mb-2 font-[Alatsi]">
                {item.title}
              </h4>
              <p className="text-sm text-gray-200 font-[Alata]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
