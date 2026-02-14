import React from 'react';
import Banner from "../Banner";
import Footer from "../Footer";
import '../../App.css';

import image_madeira from "../../data/images/drone/madeira.jpg";
import image_cotentin from "../../data/images/drone/cotentin.png";
import image_stadium from "../../data/images/drone/stadium.jpg";
import image_fwood from "../../data/images/drone/fwood/meuble1.jpg";
import image_thabor from "../../data/images/drone/thabor/thabor_7.jpg";


export default function Drone() {
  return <>
  
  <div className='Banner_drone'>
    <Banner
    text_h ='MADEIRA'
    text_p = 'Far from Europe'
    text_button = "TRAVEL"
    link_button = "/madeira"
    // src_video = '/videos/video-1.mp4'
    image = {image_madeira}
    />
  </div>

  <div className='Banner_drone'>
    <Banner
    text_h ='COTENTIN'
    text_p = 'Beauty of Normandy'
    text_button = "WATCH"
    link_button = "/cotentin"
    // src_video = '/videos/video-1.mp4'
    image = {image_cotentin}
    />
  </div>

  
  <div className='Banner_drone'>
    <Banner
    text_h ='McGill Stadium'
    text_p = 'US Football'
    text_button = "WATCH"
    link_button = "/montreal_sunrise"
    // src_video = '/videos/video-1.mp4'
    image = {image_stadium}
    />
  </div>

  <div className='Banner_thabor'>
    <Banner
    text_h ='Mont Thabor'
    text_p = 'Rise upon french Alps'
    text_button = "CLIMB"
    link_button = "/thabor"
    // src_video = '/videos/video-1.mp4'
    image = {image_thabor}
    />
  </div>

  <div className='Banner_fwood'>
    <Banner
    text_h ='FWood'
    text_p = 'French vinyl storage manufacture'
    text_button = "DISCOVER"
    link_button = "/fwood"
    // src_video = '/videos/video-1.mp4'
    image = {image_fwood}
    />
  </div>


  <Footer/>

  </>;
}
