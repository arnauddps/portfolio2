import React from "react";
import Footer from '../../../Footer';
import Gallery from "../../gallery";
import "../../Gallery.css";
import "../../../Navbar.css";

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../../../data/images/Espace/galaxy', false, /\.(png|jpe?g|svg)$/));


const Gallery_galaxy = () => {
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
 
export default Gallery_galaxy;



