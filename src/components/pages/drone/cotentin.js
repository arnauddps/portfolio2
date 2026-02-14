import React from 'react';
import Footer from '../../Footer';
import DroneShotSection from './DroneShotSection';

import video from "../../../data/videos/cotentin.mp4";

function importAll(r) {
  return r.keys().map(r);
}
const images_c = importAll(require.context( "../../../data/images/drone/cotentin", false, /\.(png|jpe?g|svg)$/));

const cotentin = () => {
  return (
    <>
    <DroneShotSection
    text_h = "Cotentin, Manche"
    text_p = "Saint-Vaast, Teurthéville-Bocage, Jonville, Jobourg... from the eastern to the western coast, this video was shot in the most important places of my life. Shot in 2020 summer, this video still displays the current state of what the Cotentin looks like. Between the infinite waves coming from the Atlantic sea and the calm sea surrounding Tatihou, Cotentin shows different faces. Waking up fishing among the fishermen of Saint-Vaast La Hougue at the sunrise, the day ends at Le Nez de Jobourg with a magical and warming sunset. If the sun is more rare in winter, it makes fields of Cotentin greener and the sea even more blue in summer. This is where I was born. This is where I grew up. Now, this is where I get energy back. This, is Cotentin."
    video = {video}
    url = "https://youtu.be/G5yeQ0Ih8Jg"
    b_previous = "PREVIOUS"
    b_next = "NEXT"
    images = { images_c }
    />

  


    <Footer/>
    </>
  );
};

export default cotentin;
