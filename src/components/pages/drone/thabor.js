import React from 'react';
import Footer from '../../Footer';
import DroneShotSection from './DroneShotSection';

import video from "../../../data/videos/cotentin.mp4";

function importAll(r) {
  return r.keys().map(r);
}
const images_c = importAll(require.context( "../../../data/images/drone/thabor", false, /\.(png|jpe?g|svg|JPG)$/));

const thabor = () => {
  return (
    <>
    <DroneShotSection
    text_h = "Mont Thabor, Alpes"
    text_p = "3 days of hiking towards the summit of Thabor peak located at approximately 3200m high. The view is as breathtaking as the way is demanding. "
    video = {video}
    url = "https://youtu.be/fOwqt-6okE8"
    b_previous = "PREVIOUS"
    b_next = "NEXT"
    images = { images_c }
    />

  


    <Footer/>
    </>
  );
};

export default thabor;
