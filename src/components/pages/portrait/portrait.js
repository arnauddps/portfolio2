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
const images = importAll(require.context('../../../data/images/portrait', false, /\.(png|jpe?g|svg)$/));

const Gallery_portrait = () => {
  return (
  <>
    <Gallery
  // left = 'blue'
  // middle = 'white'
  // right = 'blue'
  images_list = {images}></Gallery>
  
  <div className="block">
    <div className="block_info">
      <h>Portraits</h>

      <div className="block_info_text">
        <p>Interested in having your own portraits ? Consider contacting me for a shooting in Paris, Normandy or elsewhere.</p>
      </div>

    </div>
    <div className="block_logos">
      <div className='block_logos_case'>
        <Button
        path= "/contact">

        {/* <i class="fa">&#xf0e0;</i> */}
        <i class= "fas fa-camera"></i>
        {'   INFO'}
        </Button>
      </div>

      <div className='block_logos_case'>
        <a href="https://www.instagram.com/arnaud__dupuis/">
        <ButtonExtern>
          <i class='fab fa-instagram' />
          <text>      INSTAGRAM</text>
        </ButtonExtern>
        </a>
      </div>


    </div>
  </div>


   <Footer/>
  </>);
};
 
export default Gallery_portrait;



