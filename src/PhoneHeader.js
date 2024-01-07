import profile from './image/profile.jpg'
import './phone.css';
const DesktopHeader = () =>{
    return(
        <header className='phone-header'>
            <div className='phone-profile'>
                <img src={profile} className="phone-profile-img" alt="profile pic"/>
                <h1>
                    Hi there,<br/>
                    I'm Arnab Mondal<br/>
                    I'm into
                </h1>
            </div>
        </header>
    );
}

export default DesktopHeader;