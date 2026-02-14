import React from 'react';
import Footer from '../Footer';
import '../Contact.css';
import { Button } from '../Button';
import { ButtonExtern } from '../ButtonExtern';
import { Link } from 'react-router-dom';
import './Contact.css';

import photo_presentation from "../../data/images/self.jpg"

export default function Contact() {
  return <>
  


<div className="presentation">

<div className="pitch">
  <div className='pitch_title'>
  About me
  </div>

  <div className="pitch_text">
  My name is Arnaud DUPUIS. My journey began in 2021 when I got my first camera, dedicated to astrophotography using a Newtonian telescope. I then started to travel and live abroad, in Rome, Montreal and now Paris where I work as an aerospace engineer. 
  I wanted to develop my own website when living in Montreal as a way to keep a record of my travels. 
  Thanks again for visiting my website ! 
  </div>
</div>
  

  <div className='photo_presentation'>
    <img src={photo_presentation}></img>
  </div>
</div>



<div className='block'>
 
  

  <div className='block_logos'>

    <div className='block_logos_case'>
      <a href="mailto:arnauddupuis.photo@gmail.com" target="_blank" title='E-Mail' className='Mail'>
      <ButtonExtern>
      <i class="fa">&#xf0e0;</i>
      MAIL
      </ButtonExtern>
      </a>
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


  {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path = {props.link_button}
          element = {props.link_element}
        >
          {props.text_button}
           </Button> */}

<Footer />
  </>

}
