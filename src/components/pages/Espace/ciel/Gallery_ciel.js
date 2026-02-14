import React from "react";
import Footer from '../../../Footer';
import Gallery from "../../gallery";
import "../../Gallery.css";
import "../../../Navbar.css";

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../../../data/images/Espace/ciel', false, /\.(png|jpe?g|svg)$/));


const Gallery_ciel = () => {
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
 
export default Gallery_ciel;



