import React from "react";
import Footer from '../../../Footer';
import Gallery from "../../gallery";
import "../../Gallery.css";
import "../../../Navbar.css";

function importAll(r) {
  return r.keys().map(r);
}
const images1 = importAll(require.context('../../../../data/images/Terre/USA', false, /\.(png|jpe?g|svg)$/));
const images2 = importAll(require.context('../../../../data/images/Terre/USA/chinatown', false, /\.(png|jpe?g|svg)$/));
const images = images2.concat(images1);


const Gallery_canada = () => {
  return (
  <>
    <Gallery
  left = 'red'
  middle = 'white'
  right = 'red'
  images_list = {images}></Gallery>

{/* <Gallery
  left = 'red'
  middle = 'white'
  right = 'red'
  images_list = {images2}></Gallery> */}

   <Footer/>

  </>);
};
 
export default Gallery_canada;



