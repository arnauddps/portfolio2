import React from "react";
import Banner from '../../Banner';
import Footer from '../../Footer';

import "../Gallery.css";
import "../../Navbar.css";

import photoFrance from "../../../data/images/Terre/France/flag_fr.jpg";
import photoItalie from "../../../data/images/Terre/banners/banner_ita.png";
import photoCanada from "../../../data/images/Terre/Canada/1.jpeg";
import photoUSA from "../../../data/images/Terre/USA/newyork.jpg";
import photoNorvege from "../../../data/images/Terre/Norvege/banner_norvege.jpg";

const MainGallery = () => {



  return (
    <>
    
    
{/*<div className='Banner_France'>
     <Banner
    text_h ='FRANCE'
    text_p = 'Retour aux sources'
    text_button = "DISCOVER"
    link_button = "/Gallery_france"
    // src_video = '/videos/video-2.mp4'
    image = {photoFrance}
    />
  </div> */}

  <div className='Banner_Italie'>
    <Banner
    text_h ='ITALIE'
    text_p = 'Scorpri di più'
    text_button = "DISCOVER"
    link_button = "/Gallery_italie"
    // src_video = '/videos/video-2.mp4'
    image = {photoItalie}
    />
  </div>

  <div className='Banner_Canada'>
    <Banner
    text_h ='Canada'
    text_p = 'Eastern wildness'
    text_button = "DISCOVER"
    link_button = "/Gallery_canada"
    image = {photoCanada}
    />
  </div>

  <div className='Banner_USA'>
    <Banner
    text_h ='ÉTATS-UNIS'
    text_p = 'Heart of America'
    text_button = "DISCOVER"
    link_button = "/Gallery_USA"
    // src_video = '/videos/video-2.mp4'
    image = {photoUSA}
    />
  </div>

  <div className='Banner_Norvege'>
    <Banner
    text_h ='NORVEGE'
    text_p = 'The land of the midnight sun'
    text_button = "DISCOVER"
    link_button = "/Gallery_Norvege"
    // src_video = '/videos/video-2.mp4'
    image = {photoNorvege}
    />
  </div>

  <Footer/>



    </>
      
  );
};
 
export default MainGallery;

/*




  

  */