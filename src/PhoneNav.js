import logo from './logo.svg';
import React, { useState } from 'react';
import './phone.css'

const PhoneNav = () => {
    const [isActive, setIsActive] = useState(false);

    const handleHamburgerClick = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className={`phone-nav ${isActive ? 'active' : ''}`}>
            <div className='phone-logo-nav'>
            <img src={logo} className="phone-app-logo" alt="logo" />
            </div>
            <div className={`phone-nav-link ${isActive ? 'active' : ''}`}>
                <ul>
                    <a href='#home-phone'>Home</a>
                    <a href='#about-me-phone'><li>About Me</li></a>
                    <a href='#skill-phone'><li>Skill</li></a>
                    <a href='#education-phone'><li>Education</li></a>
                    <a href='#project-phone'><li>Project</li></a>
                    <a href='#contact-phone'><li>Contact</li></a>
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
