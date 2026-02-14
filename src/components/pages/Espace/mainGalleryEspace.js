import React from "react";
import Banner from '../../Banner';
import Footer from '../../Footer';

import "../Gallery.css";
import "../../Navbar.css";

import photoAll from "../../../data/images/Espace/nebula/m27.jpg";
import photoGalaxy from "../../../data/images/Espace/galaxy/m31.jpg";
import photoNebula from "../../../data/images/Espace/nebula/cygnus.jpg";
import photoSky from "../../../data/images/Espace/ciel/mosaique.jpg";
import photoPlanet from "../../../data/images/Espace/Planet/lune.jpg";


const MainGallery = () => {

  return (
    <>
    
    <div className='Banner_all'>
    <Banner
    text_h ='ASTRO'
    text_p = 'Travel through space and time'
    text_button = "TRAVEL"
    link_button = "/Gallery_all"
    image = {photoAll}
    />
  </div>

<div className='Banner_Galaxy'>
    <Banner
    text_h ='GALAXY'
    text_p = 'Birth of stars'
    text_button = "DISCOVER"
    link_button = "/Gallery_galaxy"
    image = {photoGalaxy}
    />
  </div>

  <div className='Banner_Nebula'>
    <Banner
    text_h ='NEBULA'
    text_p = 'Birth of stars'
    text_button = "DISCOVER"
    link_button = "/Gallery_nebula"
    image = {photoNebula}
    />
  </div>

  <div className='Banner_Galaxy'>
    <Banner
    text_h ='MILKY WAY'
    text_p = 'Above the sky'
    text_button = "DISCOVER"
    link_button = "/Gallery_ciel"
    image = {photoSky}
    />
  </div>

  <div className='Banner_Planet'>
    <Banner
    text_h ='SOLAR SYSTEM'
    text_p = 'Earth neighborhood'
    text_button = "EXPLORE"
    link_button = "/Gallery_planet"
    image = {photoPlanet}
    />
  </div>

  {/* MATERIAL ? Cartes des etoiles ? */}

  <Footer/>



    </>
      
  );
};
 
export default MainGallery;

/*




  

  */