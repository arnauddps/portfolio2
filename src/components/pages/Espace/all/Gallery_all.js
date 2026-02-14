import React from "react";
import Footer from '../../../Footer';
import Gallery from "../../gallery";
import "../../Gallery.css";
import "../../../Navbar.css";

function importAll(r) {
  return r.keys().map(r);
}
const imagesGalaxy = importAll(require.context('../../../../data/images/Espace/galaxy', false, /\.(png|jpe?g|svg)$/));
const imagesNebula = importAll(require.context('../../../../data/images/Espace/nebula', false, /\.(png|jpe?g|svg)$/));
const imagesSky = importAll(require.context('../../../../data/images/Espace/ciel', false, /\.(png|jpe?g|svg)$/));
const imagesPlanet = importAll(require.context('../../../../data/images/Espace/Planet', false, /\.(png|jpe?g|svg)$/));

const images = imagesGalaxy.concat(imagesNebula, imagesSky, imagesPlanet);

const Gallery_all = () => {
  return (
  <>
    <Gallery
  left = 'black'
  middle = 'black'
  right = 'black'
  images_list = {images}></Gallery>
   <Footer/>
  </>);
};
 
export default Gallery_all;



