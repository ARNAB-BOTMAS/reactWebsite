import ai from './image/back-project/AI.jpg';
import time from './image/back-project/overtime.jpg';
import album from './image/back-project/photoAlbum.jpeg';
import react from './image/back-project/reactjs.jpg';

import './desktop.css';


const DesktopProject = () =>{
    return(
        <div className='desktop-project' id='project-desktop'>
            <h1><i class="fa fa-diagram-project"></i> Project</h1>
            <div className='desktop-inner-project'>
                <section className='desktop-project-card'>
                    <a href="https://github.com/ARNAB-BOTMAS/Srishti_project" target='blank'>
                        <img src={ai} alt='AI' className='desktop-project-card-image'/>
                        <div className='desktop-back-color'>Go to the Project <i class="fa-solid fa-arrow-right-long"></i></div>
                        <h4>SRISHTI AI Project</h4>
                    </a>
                </section>
                <section className='desktop-project-card'>
                    <a href="https://github.com/ARNAB-BOTMAS/AddTime" target="blank">
                        <img src={time} alt='AI' className='desktop-project-card-image'/>
                        <div className='desktop-back-color'>Go to the Project <i class="fa-solid fa-arrow-right-long"></i></div>
                        <h4>Overtime Calculation App Part-I</h4>
                    </a>
                </section>
                <section className='desktop-project-card'>
                    <a href="https://github.com/ARNAB-BOTMAS/ApplicationOvertime" target="blank">
                        <img src={time} alt='AI' className='desktop-project-card-image'/>
                        <div className='desktop-back-color'>Go to the Project <i class="fa-solid fa-arrow-right-long"></i></div>
                        <h4>Overtime Calculation App Part-II</h4>
                    </a>
                </section>
                <section className='desktop-project-card'>
                    <a href="https://github.com/ARNAB-BOTMAS/PhotoAlbum" target="blank">
                        <img src={album} alt='AI' className='desktop-project-card-image'/>
                        <div className='desktop-back-color'>Go to the Project <i class="fa-solid fa-arrow-right-long"></i></div>
                        <h4>Photo Album App</h4>
                    </a>
                </section>
                <section className='desktop-project-card'>
                    <a href="https://github.com/ARNAB-BOTMAS/reactWebsite" target="blank">
                        <img src={react} alt='AI' className='desktop-project-card-image'/>
                        <div className='desktop-back-color'>Go to the Project <i class="fa-solid fa-arrow-right-long"></i></div>
                        <h4>React Website</h4>
                    </a>
                </section>
            </div>
            <a href="https://github.com/ARNAB-BOTMAS" target='blank'>
                <button className='desktop-more'>View More <span><i class="fa-solid fa-arrow-right-long"></i></span></button>
            </a>
        </div>
    );
}

export default DesktopProject;