import React from 'react';
import ReactPlayer from 'react-player';

import { Button } from '../../Button';
import './DroneShotSection.css';

import Gallery from "../gallery";


function DroneShotSection(props) {

  return (
    <>
    {/* <div className='shot-container'> */}
      {/* <video src= {props.video} autoPlay loop/> */}
    {/* </div> */}
    
    <div className='player-container'>
    <div className="player-wrapper">
    <ReactPlayer
      url= {props.url}
      className="react-player"
      playing
      width="100%"
      height="100%"
      controls
    />
  </div>
  </div>

    

      <div className='info-container'>
        
      <div className='info-title'>
      {props.text_h} 
      </div>

      <div className='info-text'>
      {props.text_p} 
      </div>

      </div> 

      <div className='gallerie'>
      <Gallery
  images_list = {props.images}></Gallery>
  </div>



{/* 

      <div className='button-container'>
      
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          path = '/photos'
        >
          <div>  </div>
          <i class="fa fa-angle-left"/>
          {props.b_previous}
        </Button>
        
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          path = '/videos'
        >
          {props.b_next} <i className='fa fa-angle-right' />
        </Button>
      </div> 
       */}
    
      
    </>
  );
}

export default DroneShotSection;
