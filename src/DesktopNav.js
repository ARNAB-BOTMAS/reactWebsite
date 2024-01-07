import './desktop.css';
const DesktopNav = () =>{
    return(
        <nav className='desktop-nav'>
        <div className='desktop-logo-nav'>
          <h1>Logo</h1>
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