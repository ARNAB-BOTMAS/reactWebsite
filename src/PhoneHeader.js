import profile from './image/profile.jpg'
import React, { useEffect } from 'react';
import './phone.css';
import Typed from 'typed.js';

const PhoneHeader = () => {
  useEffect(() => {
    // Target the element with the 'auto-type' class for Typed.js
    const element = document.querySelector('.phone-auto-type');

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
    <header className='phone-header'>
      <div className='phone-profile'>
        <img src={profile} className="phone-profile-img" alt="profile pic" />
        <div className='phone-profile-text'>
            <h1>
            Hi there,<br />
            I'm Arnab Mondal<br />
            </h1>
            <h2>
                I'm into <span className="phone-auto-type"></span> 
            </h2>
            <button className='phone-profile-button'>About Me</button>
        </div>
      </div>
    </header>
  );
};

export default PhoneHeader;
