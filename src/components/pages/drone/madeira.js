import React from 'react';
import Footer from '../../Footer';
import DroneShotSection from './DroneShotSection';


function importAll(r) {
  return r.keys().map(r);
}
const images_c = importAll(require.context( "../../../data/images/drone/madeira", false, /\.(png|jpe?g|svg|jpg)$/));

const madeira = () => {
  return (
    <>
    <DroneShotSection
    text_h = "Madeira Island, Portugal"
    text_p = "Funchal, Seixal, Fanal, Madeira island is the perfect dream place to free your mind and let your thoughts go away. Hiking the Pico do Arieiro was my personnal best thing to do."
    
    
    url = "https://youtu.be/QdHTb67oNLo"
    b_previous = "PREVIOUS"
    b_next = "NEXT"
    images = { images_c }
    />

  


    <Footer/>
    </>
  );
};

export default madeira;
