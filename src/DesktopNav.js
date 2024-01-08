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
            <li>Home</li>
            <li>About Me</li>
            <li>Skill</li>
            <li>Education</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    );
}

export default DesktopNav;