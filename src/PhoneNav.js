import logo from './logo.svg';
import React, { useState } from 'react';
import './phone.css'

const PhoneNav = () => {
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
        <nav className={`phone-nav ${isActive ? 'active' : ''}`}>
            <div className='phone-logo-nav'>
            <img src={logo} className="phone-app-logo" alt="logo" />
            </div>
            <div className={`phone-nav-link ${isActive ? 'active' : ''}`}>
                <ul>
                    <a onClick={() => scrollToSection('home-phone')}><li>Home</li></a>
                    <a onClick={() => scrollToSection('about-me-phone')}><li>About Me</li></a>
                    <a onClick={() => scrollToSection('skill-phone')}><li>Skill</li></a>
                    <a onClick={() => scrollToSection('education-phone')}><li>Education</li></a>
                    <a onClick={() => scrollToSection('project-phone')}><li>Project</li></a>
                    <a onClick={() => scrollToSection('contact-phone')}><li>Contact</li></a>
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

export default PhoneNav;
