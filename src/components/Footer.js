import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
    <div id='footer'>
        <a href='https://github.com/EldenBear' className='footer-image-container'> 
        <img src='../../github (1).png' alt='github' className='logo'>
          </img>
          </a>
          <a href='https://www.linkedin.com/in/ladonte-taylor/' className='footer-image-container'>
            <img src='../../linkedin (1).png' alt='linkedin' className='logo'>

            </img>
          </a>
    </div>
    </footer>
  );
}
