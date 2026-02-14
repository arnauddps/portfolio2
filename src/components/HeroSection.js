import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
/*import video_heroSection from "../data/videos/asie.mp4"; */
import ReactPlayer from 'react-player/youtube'; // L'IMPORT MANQUANT
import './HeroSection.css'; // Remplacez par le vrai nom de votre fichier CSS
// Importez une icône (ex: FontAwesome) pour le bouton
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';


function HeroSection() {

  // ÉTAT : Gère si le son est coupé ou non
  const [isMuted, setIsMuted] = useState(true);


  return (
    <div className="hero-container relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full z-[-1] overflow-hidden">
        <ReactPlayer
          url="https://youtu.be/VfSuOwX8zlQ" // Replace with your URL
          playing={true}
          loop={true}
          muted={isMuted}
          width="100%"
          height="115%" // Set slightly higher to hide top/bottom bars
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          config={{
            youtube: {
              playerVars: { 
                showinfo: 0, 
                controls: 0, 
                rel: 0, 
                disablekb: 1,
                modestbranding: 1,    // Optionnel : réduit encore plus le logo YouTube
                iv_load_policy: 3     // Cache les annotations
              },
              // Indique à YouTube de viser la meilleure qualité disponible
              embedOptions: {
                suggestedQuality: 'hd1080' 
              }
            }
          }}
        />
      </div>

      {/* BOUTON DE SON : Placé en bas à droite par exemple */}
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="mute-button"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ARNAUD DUPUIS
      </motion.h1>

      
      <motion.p
        className="hero-subtitle"
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
