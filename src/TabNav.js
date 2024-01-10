import logo from './logo.svg';
import React, { useState } from 'react';
import './tab.css'

const TabNav = () => {
    const [isActive, setIsActive] = useState(false);

    const handleHamburgerClick = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className={`tab-nav ${isActive ? 'active' : ''}`}>
            <div className='tab-logo-nav'>
                <img src={logo} className="tab-app-logo" alt="logo" />
            </div>
            <div className={`tab-nav-link ${isActive ? 'active' : ''}`}>
                <ul>
                    <a href='#home-tab'>Home</a>
                    <a href='#about-me-tab'><li>About Me</li></a>
                    <a href='#skill-tab'><li>Skill</li></a>
                    <a href='#education-tab'><li>Education</li></a>
                    <a href='#project-tab'><li>Project</li></a>
                    <a href='#contact-tab'><li>Contact</li></a>
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
