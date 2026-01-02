import React from 'react';
import { motion } from 'framer-motion';
import AlbumDefultBanner from '../assets/AlbumDefultBanner.jpg';
import AlbumMobileBanner from '../assets/AlbumMobileBanner.jpg';

const About = () => {
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

        {/* Title and Description */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20 mt-28">
          <motion.h1
            className="text-4xl md:text-5xl font-alatsi text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Who We Are?
          </motion.h1>
          <motion.p
            className="text-md md:text-lg font-[Alata] text-white mt-2 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Will Update <br />
            Details          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
