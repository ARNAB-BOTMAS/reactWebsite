import profile from './image/profile.jpg'
import React, { useEffect } from 'react';
import './tab.css';
import Typed from 'typed.js';

const TabHeader = () => {
  useEffect(() => {
    // Target the element with the 'auto-type' class for Typed.js
    const element = document.querySelector('.tab-auto-type');

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
    <header className='tab-header'>
      <div className='tab-profile'>
        <img src={profile} className="tab-profile-img" alt="profile pic" />
        <div className='tab-profile-text'>
            <h1>
            Hi there,<br />
            I'm Arnab Mondal<br />
            </h1>
            <h2>
                I'm into <span className="tab-auto-type"></span> 
            </h2>
            <button className='tab-profile-button'>About Me</button>
        </div>
      </div>
    </header>
  );
};

export default TabHeader;
