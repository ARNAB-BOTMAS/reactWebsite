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
          <button onClick={() => scrollToSection('home-desktop')}><li>Home</li></button>
          <button onClick={() => scrollToSection('about-me-desktop')}><li>About Me</li></button>
          <button onClick={() => scrollToSection('skill-desktop')}><li>Skill</li></button>
          <button onClick={() => scrollToSection('education-desktop')}><li>Education</li></button>
          <button onClick={() => scrollToSection('project-desktop')}><li>Project</li></button>
          <button onClick={() => scrollToSection('contact-desktop')}><li>Contact</li></button>
        </ul>
        </div>
      </nav>
    );
}

export default DesktopNav;