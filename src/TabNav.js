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
                    <a onClick={() => scrollToSection('home-tab')}><li>Home</li></a>
                    <a onClick={() => scrollToSection('about-me-tab')}><li>About Me</li></a>
                    <a onClick={() => scrollToSection('skill-tab')}><li>Skill</li></a>
                    <a onClick={() => scrollToSection('education-tab')}><li>Education</li></a>
                    <a onClick={() => scrollToSection('project-tab')}><li>Project</li></a>
                    <a onClick={() => scrollToSection('contact-tab')}><li>Contact</li></a>
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
