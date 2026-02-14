import React from 'react';
import Banner from "../Banner";
import Footer from "../Footer";
import '../../App.css';
import photoShop from "../../data/images/Terre/USA/newyork.jpg";

export default function Projects() {
  return <>
  
  <div className='Banner_project'>
    <Banner
    text_h ='PROJECT'
    text_p = 'Buy a print and help me continuying my work. The shop will open no later than the :'
    text_button = "01/08/2023"
    link_button = "https://etsy.com/"
    // src_video = '/videos/video-1.mp4'
    image = {photoShop}
    />
  </div>

  <Footer/>

  </>;
}
