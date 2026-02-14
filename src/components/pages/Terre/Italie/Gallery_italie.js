import React,{useState} from "react";
// import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import "../../Gallery.css";
import Footer from '../../../Footer';
import "../../../Navbar.css";
import Gallery from "../../gallery";


function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../../../data/images/Terre/Italie', false, /\.(png|jpe?g|svg)$/));


const Gallery_italie = () => {
return (
    <>
    <Gallery
  left = 'green'
  middle = 'white'
  right = 'red'
  images_list = {images}></Gallery>
   

   <Footer/>
    </>
      
  );
};
 
export default Gallery_italie;


