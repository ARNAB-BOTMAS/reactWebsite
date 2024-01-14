import logo from './logo.svg';
import './desktop.css';
const DesktopNav = () =>{
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
    return(
        <nav className='desktop-nav'>
        <div className='desktop-logo-nav'>
          <img src={logo} className="desktop-app-logo" alt="logo" />
        </div>
        <div className='desktop-nav-link'>
          <ul>
              <a onClick={() => scrollToSection('home-desktop')}><li>Home</li></a>
              <a onClick={() => scrollToSection('about-me-desktop')}><li>About Me</li></a>
              <a onClick={() => scrollToSection('skill-desktop')}><li>Skill</li></a>
              <a onClick={() => scrollToSection('education-desktop')}><li>Education</li></a>
              <a onClick={() => scrollToSection('project-desktop')}><li>Project</li></a>
              <a onClick={() => scrollToSection('contact-desktop')}><li>Contact</li></a>
          </ul>
        </div>
      </nav>
    );
}

export default DesktopNav;