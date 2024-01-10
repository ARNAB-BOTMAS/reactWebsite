import logo from './logo.svg';
import './desktop.css';
const DesktopNav = () =>{
    return(
        <nav className='desktop-nav'>
        <div className='desktop-logo-nav'>
          <img src={logo} className="desktop-app-logo" alt="logo" />
        </div>
        <div className='desktop-nav-link'>
          <ul>
              <a href='#home-desktop'>Home</a>
              <a href='#about-me-desktop'><li>About Me</li></a>
              <a href='#skill-desktop'><li>Skill</li></a>
              <a href='#education-desktop'><li>Education</li></a>
              <a href='#project-desktop'><li>Project</li></a>
              <a href='#contact-desktop'><li>Contact</li></a>
          </ul>
        </div>
      </nav>
    );
}

export default DesktopNav;