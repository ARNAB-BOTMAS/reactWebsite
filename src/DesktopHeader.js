import profile from './image/profile.jpg';
import facebook from './image/logo/Facebook.png';
import github from './image/logo/GitHub.png';
import instagrame from './image/logo/Instagram.png';
import linkedin from './image/logo/LinkedIn.png';
import telegrame from './image/logo/Telegram.png';
import whatsapp from './image/logo/WhatsApp.png';

import React, { useEffect } from 'react';
import './desktop.css'
import Typed from 'typed.js';

const DesktopHeader = () => {
  useEffect(() => {
    // Target the element with the 'auto-type' class for Typed.js
    const element = document.querySelector('.desktop-auto-type');

    // Define the options for Typed.js
    const options = {
      strings: ["Web Development", "Android Development", "Python Development"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    // Create a new instance of Typed
    const typed = new Typed(element, options);

    // Clean up the Typed instance when the component is unmounted
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <header className='desktop-header' id='home-desktop'>
      <div className='desktop-profile'>
        <img src={profile} className="desktop-profile-img" alt="profile pic" />
        <div className='desktop-profile-text'>
            <h1>
            Hi there,<br />
            I'm Arnab Mondal<br />
            </h1>
            <h2>
                I'm into <span className="desktop-auto-type"></span> 
            </h2>
            <a href='#about-me-desktop'>
              <button className='desktop-profile-button'>About Me</button>
            </a>
            <div className='desktop-profile-link'>
                <a href="https://www.facebook.com/shagor.roy.370?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer"><img src={facebook} className='desktop-profile-link-img' alt="Facebook Logo"/></a>
                <a href="https://www.instagram.com/shagor.roy.370/" target="_blank" rel="noopener noreferrer"><img src={instagrame} className='desktop-profile-link-img' alt="Instagrame Logo"/></a>
                <a href="https://github.com/ARNAB-BOTMAS" target="_blank" rel="noopener noreferrer"><img src={github} className='desktop-profile-link-img' alt="GitHub Logo"/></a>
                <a href="https://www.linkedin.com/in/arnab-mondal-4409a5299/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className='desktop-profile-link-img' alt="Linkedin Logo"/></a>
                <a href="https://t.me/Arnabmon" target="_blank" rel="noopener noreferrer"><img src={telegrame} className='desktop-profile-link-img' alt="Telegrame Logo"/></a>
                <a href="https://wa.me/919339421756" target="_blank" rel="noopener noreferrer"><img src={whatsapp} className='desktop-profile-link-img' alt="Whatsapp Logo"/></a>
            </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
