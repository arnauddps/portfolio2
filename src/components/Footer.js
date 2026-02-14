import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { ButtonExtern } from './ButtonExtern';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    
    <div className='footer-container'>
      

      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thank you for your visit on my website
        </p>

        {/* <p className='footer-subscription-text'>
          Subscribe to see the latest pictures.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}


      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          
        <div class='footer-link-items'>
            <h2>My work</h2>
            
            <Link to='/photos'>Photos</Link>
            <a href="https://www.youtube.com/channel/UCDFCs6mWozaAeB1mKN4SAPQ">Videos</a>
       
          </div>



</div>
<div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact me</h2>
            <Link to='/contact'>Contact</Link>
            <a href="https://www.etsy.com/fr/about?ref=ftr">Support</a>
          </div>

          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>

            <Link to='/' className='social-logo-dps'>
              ARNAUD DUPUIS             
            </Link>
          </div>
          <small class='website-rights'>HIVAOA © 2022</small>

          <div class='social-icons'>

          <a href="mailto:arnaud.dps@hotmail.fr" target="_blank" rel="noreferrer" title='E-Mail' className='Mail'>
    <ButtonExtern 
    className='btns'
    buttonStyle='btn--footer'
    buttonSize='btn--medium'
    >
    <i class="fa">&#xf0e0;</i>
    </ButtonExtern>
    </a>


            <a href="https://www.instagram.com/hivaooa/">
            <ButtonExtern>
            <i class='fab fa-instagram' />
            </ButtonExtern>
            </a>

            <a href="https://www.youtube.com/channel/UCDFCs6mWozaAeB1mKN4SAPQ">
            <ButtonExtern>
            <i class='fab fa-youtube' />
            </ButtonExtern>
            </a>

            <a href="https://www.linkedin.com/in/arnaud-dupuis1/">
            <ButtonExtern>
            <i class='fab fa-linkedin' />
            </ButtonExtern>
            </a>

          </div>
        </div>
      </section>
    </div>
    </>
  );

  

}

export default Footer;
