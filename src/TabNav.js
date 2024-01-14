import logo from './logo.svg';
import React, { useState } from 'react';
import './tab.css'

const TabNav = () => {
    const [isActive, setIsActive] = useState(false);

    const handleHamburgerClick = () => {
        setIsActive(!isActive);
    };

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
    
        if (sectionElement) {
          sectionElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };
    return (
        <nav className={`tab-nav ${isActive ? 'active' : ''}`}>
            <div className='tab-logo-nav'>
                <img src={logo} className="tab-app-logo" alt="logo" />
            </div>
            <div className={`tab-nav-link ${isActive ? 'active' : ''}`}>
                <ul>
                <button onClick={() => scrollToSection('home-tab')}><li>Home</li></button>
                <button onClick={() => scrollToSection('about-me-tab')}><li>About Me</li></button>
                <button onClick={() => scrollToSection('skill-tab')}><li>Skill</li></button>
                <button onClick={() => scrollToSection('education-tab')}><li>Education</li></button>
                <button onClick={() => scrollToSection('project-tab')}><li>Project</li></button>
                <button onClick={() => scrollToSection('contact-tab')}><li>Contact</li></button>
                </ul>
            </div>
            <div className={`hamburgs ${isActive ? 'active' : ''}`} onClick={handleHamburgerClick}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </nav>
    );
};

export default TabNav;
