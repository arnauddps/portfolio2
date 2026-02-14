import React from 'react';
import Footer from '../../Footer';
import DroneShotSection from './DroneShotSection';

// import video_stadium from "../../../data/videos/stadium.mov";

function importAll(r) {
  return r.keys().map(r);
}
const images_c = importAll(require.context( "../../../data/images/drone/fwood", false, /\.(png|jpe?g|svg)$/));



const montreal_sunrise = () => {
  return (
    <>
    <DroneShotSection
    text_h = "Fwood"
    text_p = "Be proud of having a product entirely made of local and high quality wood, in France. These vinyl storages will be a key element in your living room thanks to their modern and elegant design. More info on https://fwoodvinyle.wixsite.com/home "
    // video = {video_stadium}
    url = "https://youtu.be/LhlcI-qclAw"
    b_previous = "PREVIOUS"
    b_next = "NEXT"
    images = {images_c}
    
    />

    
    <Footer/>
    </>
  );
};

export default montreal_sunrise;
