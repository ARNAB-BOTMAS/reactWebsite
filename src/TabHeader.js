import profile from './image/profile.jpg'
import './tab.css';
const TabHeader = () =>{
    return(
        <header className='tab-header'>
            <div className='tab-profile'>
                <img src={profile} className="tab-profile-img" alt="profile pic"/>
                <h1>
                    Hi there,<br/>
                    I'm Arnab Mondal<br/>
                    I'm into
                </h1>
            </div>
        </header>
    );
}

export default TabHeader;