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
                <h1>Logo</h1>
            </div>
            <div className={`tab-nav-link ${isActive ? 'active' : ''}`}>
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skill</li>
                    <li>Education</li>
                    <li>Project</li>
                    <li>Contact</li>
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
