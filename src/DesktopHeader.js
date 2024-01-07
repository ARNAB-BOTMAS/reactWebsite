import profile from './image/profile.jpg'
import './desktop.css';
const PhoneHeader = () =>{
    return(
        <header className='desktop-header'>
            <div className='desktop-profile'>
                <img src={profile} className="desktop-profile-img" alt="profile pic"/>
                <h1>
                    Hi there,<br/>
                    I'm Arnab Mondal<br/>
                    I'm into
                </h1>
            </div>
        </header>
    );
}

export default PhoneHeader;