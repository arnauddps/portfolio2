import React from 'react';
import Banner from '../Banner';
import Footer from '../Footer';
import '../Banner.css';
//import '../../App.css';
//import '../HeroSection.css';
// import MainGallery from './Terre/main_gallery_terre';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import photoTerre from "../../data/images/Terre/USA/NY_-7.jpg";
import photoEspace from "../../data/images/Espace/ciel/VL3.jpg";
import photoPortrait from "../../data/images/portrait/diane_10.jpg";
import photoAviation from "../../data/images/aviation/AFI-14.jpg";


export default function Photos() {
  return (

  <>  
  <div className='Banner_portrait'>
    <Banner
    text_h ='PORTRAITS'
    text_p = 'Meet unique people'
    text_button = "MEETINGS"
    link_button = "/Gallery_portrait"
    src_video = '/videos/video-1.mp4'
    image = {photoPortrait}
    />
  </div>
  

  <div className='Banner_terre'>
    <Banner
    text_h ='EARTH'
    text_p = 'Back on track'
    text_button = "DISCOVER"
    link_button = "/mainGalleryTerre"
    // src_video = '/videos/video-2.mp4'
    image = {photoTerre}
    />
  </div>

  <div className='Banner_aviation'>
    <Banner
    text_h ='PLANES'
    text_p = 'LIFT OFF'
    text_button = "DISCOVER"
    link_button = "/Gallery_aviation"
    // src_video = '/videos/video-2.mp4'
    image = {photoAviation}
    />
  </div>

  <div className='Banner_espace'>
    <Banner
    text_h ='SPACE'
    text_p = 'Look up & explore the past'
    text_button = "DISCOVER"
    link_button = "/mainGalleryEspace"
    src_video = '/videos/video-1.mp4'
    image = {photoEspace}
    />
  </div>


  



<Footer />
  </>
    



  );
}
