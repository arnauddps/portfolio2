import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    // Services --> Photos
    // Products --> Videos




    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ARNAUD DUPUIS
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/photos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Photos
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/drone'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

          
            <li>
              <Link
                to='/contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>


           {button && <Button buttonStyle='btn--primary' >
            <Link to='/contact' 
                  className='nav-links-contact'
            >
              Contact
            </Link>
            </Button>}



          </div>
      </nav>
    </>
  );
}

export default Navbar;










/*


OLD STYLE : BLACK BACKGROUND
2 things to update
Navbar.js
Navbar.css


import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    // Services --> Photos
    // Products --> Videos




    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            HIVAOA
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/photos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Photos
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/videos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Videos
              </Link>
            </li>

            

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

*/