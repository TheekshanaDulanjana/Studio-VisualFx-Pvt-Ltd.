import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

import AlbumDefultBanner from '../assets/AlbumDefultBanner.jpg';
import AlbumMobileBanner from '../assets/AlbumMobileBanner.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const FilmGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showMore, setShowMore] = useState(false);

  const handleSearch = () => {
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm) {
      console.log('Searching for:', trimmedTerm);
    }
  };

  // Sample data
  const films = [
    { coupleName: 'Ruwan + Pathum', link: 'https://youtu.be/v0pTrChjrzk?si=r-6kFeTKL8k8x2qG' },
    { coupleName: 'Amal + Ruwan', link: 'https://youtu.be/KapXO9GBAGY?si=UxJgu_Pi_b4QlJzY' },
    { coupleName: 'Kamal + Amal', link: 'https://youtu.be/SSu75qEX3Kg?si=KoNC0XXVRuuGo1m0' },
    { coupleName: 'Nimal + Sulochana', link: 'https://youtu.be/v0pTrChjrzk?si=r-6kFeTKL8k8x2qG' },
    { coupleName: 'Ruwan + Pathum', link: 'https://youtu.be/v0pTrChjrzk?si=r-6kFeTKL8k8x2qG' },
    { coupleName: 'Amal + Ruwan', link: 'https://youtu.be/KapXO9GBAGY?si=UxJgu_Pi_b4QlJzY' },
    { coupleName: 'Kamal + Amal', link: 'https://youtu.be/SSu75qEX3Kg?si=KoNC0XXVRuuGo1m0' },
    { coupleName: 'Nimal + Sulochana', link: 'https://youtu.be/v0pTrChjrzk?si=r-6kFeTKL8k8x2qG' },
    { coupleName: 'Ruwan + Pathum', link: 'https://youtu.be/v0pTrChjrzk?si=r-6kFeTKL8k8x2qG' },
    { coupleName: 'Amal + Ruwan', link: 'https://youtu.be/KapXO9GBAGY?si=UxJgu_Pi_b4QlJzY' },
    { coupleName: 'Kamal + Amal', link: 'https://youtu.be/SSu75qEX3Kg?si=KoNC0XXVRuuGo1m0' },
    { coupleName: 'Nimal + Sulochana', link: 'https://youtu.be/v0pTrChjrzk?si=r-6kFeTKL8k8x2qG' },
    { coupleName: 'Ruwan + Pathum', link: 'https://youtu.be/v0pTrChjrzk?si=r-6kFeTKL8k8x2qG' },
    { coupleName: 'Amal + Ruwan', link: 'https://youtu.be/KapXO9GBAGY?si=UxJgu_Pi_b4QlJzY' },
    { coupleName: 'Kamal + Amal', link: 'https://youtu.be/SSu75qEX3Kg?si=KoNC0XXVRuuGo1m0' },
    { coupleName: 'Nimal + Sulochana', link: 'https://youtu.be/v0pTrChjrzk?si=r-6kFeTKL8k8x2qG' },
  ];

  // Filter based on search term
  const filteredFilms = films.filter(film =>
    film.coupleName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Decide how many to show
  const filmsToShow = showMore ? filteredFilms : filteredFilms.slice(0, 9);

  // Extract YouTube video ID
  const getVideoId = (url) => {
    if (url.includes('youtu.be')) {
      return url.split('/').pop().split('?')[0];
    } else if (url.includes('watch?v=')) {
      return url.split('watch?v=')[1].split('&')[0];
    }
    return '';
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-96 md:h-96 overflow-hidden">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
        >
          {/* Mobile Image */}
          <motion.img
            src={AlbumMobileBanner}
            alt="Album Mobile Banner"
            className="w-full h-full object-cover md:hidden"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.15 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: [0.42, 0, 0.58, 1],
            }}
          />
          {/* Desktop/Tablet Image */}
          <motion.img
            src={AlbumDefultBanner}
            alt="Album Default Banner"
            className="w-full h-full object-cover hidden md:block"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.15 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: [0.42, 0, 0.58, 1],
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-black to-transparent opacity-90 z-10" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20 mt-28">
          <motion.h1
            className="text-4xl md:text-5xl font-alatsi text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Our Films
          </motion.h1>
          <motion.p
            className="text-md md:text-lg font-[Alata] text-white mt-2 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Every frame tells a story beyond words! Dive into timeless moments captured with passion and artistry!
            Let your heart wander through memories frozen in light!
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="w-full max-w-md relative mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search your film..."
              className="w-full font-[Alata] border shadow-xl border-gray-400 hover:border-white px-4 py-2 pr-10 bg-transparent rounded-full text-white backdrop-blur-xs focus:outline-none focus:border-white transition duration-300"
            />
            <button
              onClick={handleSearch}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-300 hover:text-white"
            >
              <FaSearch className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Film Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filmsToShow.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filmsToShow.map((film, index) => {
              const videoId = getVideoId(film.link);
              const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

              return (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-lg border border-white shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition transform duration-300"
                  onClick={() => window.open(film.link, '_blank')}
                >
                  <div className="relative w-full h-50 bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                    <img
                      src={thumbnail}
                      alt={film.coupleName}
                      className="w-full h-full object-cover"
                    />
                    {/* YouTube Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                        <div className="w-0 h-0 border-l-14  border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 text-center text-white font-[Alata]">{film.coupleName}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center text-white mt-24 mb-24">
            <h2 className="text-3xl font-alatsi mb-2">No results found!</h2>
            <p className="text-lg font-[Alata]">Sorry, we couldn't find anything matching your search!</p>
          </div>
        )}

        {/* See More / Show Less */}
        {filteredFilms.length > 9 && (
          <div className="mt-8 flex items-center justify-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="w-40 h-11 flex items-center justify-center gap-2 
                        bg-white text-black font-[Alata] 
                        px-6 py-4 rounded-full 
                        hover:bg-white transition-all duration-300 cursor-pointer"
            >
              <span className="text-md">{showMore ? "Show Less" : "Show More"}</span>
              <span className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
                {showMore ? (
                  <FaArrowLeft className="text-white text-xs" />
                ) : (
                  <FaArrowRight className="text-white text-xs" />
                )}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmGallery;
