import React from 'react';
// import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Banner.css';



function Banner(props) {
    return (
      
      <>
      
<div className='banner-container'>
      
      
      {/* <video src = {props.src_video} autoPlay loop muted /> */}
      
    

      <img src = {props.image}></img>
        
      

      <h1>{props.text_h}</h1>
      <p1>{props.text_p}</p1>


        <div className='banner-btns'>
        {/* <Link to={props.link_button}> */}
          <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path = {props.link_button}
          element = {props.link_element}
        >
          {props.text_button}
           </Button>
           {/* </Link> */}
      </div>
</div>


</>







// </div>
    


      // <div className='hero-container'>
        
      //   <img 
      //   src = {props.src}
      //   className='banner__img'
      //   alt='Terre'
      //   />

      //   <h1>{props.text_h}</h1>
      //   <p>{props.text_p}</p>

      //   <div className='hero-btns'>
      //   <Button
      //     className='btns'
      //     buttonStyle='btn--outline'
      //     buttonSize='btn--large'
      //   >
      //     {props.text_button}
      //   </Button>
        
      //   </div>
      // </div>
      
/*       
      
      <div>
<li className='banner'>
          <Link className='banner__link' to={props.path}>
            <figure className='banner__pic-wrap' data-category={props.label}>
              <img
                className='banner__img'
                alt='Travel Image'
                src={props.src}
              />
            </figure>
            <div className='banner__info'>
              <h5 className='banner__text'>{props.text}</h5>
            </div>
          </Link>
        </li>
      </div>
         */
      
    );
  }

  export default Banner;



