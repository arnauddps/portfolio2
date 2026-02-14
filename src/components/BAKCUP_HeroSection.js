import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import video_heroSection from "../data/videos/asie.mp4";

function HeroSection() {
  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      <video
        src={video_heroSection}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
      
      <motion.h1
        className="text-white text-6xl md:text-8xl lg:text-9xl font-bold mb-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ARNAUD DUPUIS
      </motion.h1>
      <motion.p
        className="text-white text-lg md:text-xl mb-8 z-10 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to my website, discover my photographs and my drone projects
      </motion.p>
      <motion.div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/photos"
        >
          PHOTOS
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          path="/drone"
        >
          PROJECTS <i className="far fa-play-circle ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}

export default HeroSection;
