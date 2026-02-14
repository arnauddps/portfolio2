import React from 'react';
import Footer from '../../Footer';
import DroneShotSection from './DroneShotSection';

// import video_stadium from "../../../data/videos/stadium.mov";

function importAll(r) {
  return r.keys().map(r);
}
const images_c = importAll(require.context( "../../../data/images/drone/stadium", false, /\.(png|jpe?g|svg)$/));



const montreal_sunrise = () => {
  return (
    <>
    <DroneShotSection
    text_h = "McGill Stadium"
    text_p = "Shot in Montreal, McGill University. After 9pm, when everyone is chilling at home or enjoying a party in the Downtown of Montréal, these students keep training, hoping to be among the next Carabines."
    // video = {video_stadium}
    url = "https://youtu.be/Y2Dx32Dwl5c"
    b_previous = "PREVIOUS"
    b_next = "NEXT"
    images = {images_c}
    
    />

    
    <Footer/>
    </>
  );
};

export default montreal_sunrise;
