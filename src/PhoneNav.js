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
                <h1>Logo</h1>
            </div>
            <div className={`phone-nav-link ${isActive ? 'active' : ''}`}>
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

export default PhoneNav;
