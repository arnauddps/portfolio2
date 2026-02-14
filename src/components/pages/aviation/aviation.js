import React from "react";
import Footer from '../../Footer';
import Gallery from "../gallery";
import "../Gallery.css";
import "../../Navbar.css";
import "../../Contact.css";
import { Button } from '../../Button';
import { ButtonExtern } from '../../ButtonExtern';

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../../data/images/aviation', false, /\.(png|jpe?g|svg)$/));

const Gallery_aviation = () => {
  return (
  <>
    <Gallery
  // left = 'blue'
  // middle = 'white'
  // right = 'blue'
  images_list = {images}></Gallery>
  

   <Footer/>
  </>);
};
 
export default Gallery_aviation;



