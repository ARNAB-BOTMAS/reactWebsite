import ai from './image/back-project/AI.jpg';
import time from './image/back-project/overtime.jpg';
import album from './image/back-project/photoAlbum.jpeg';
import react from './image/back-project/reactjs.jpg';

import './phone.css';


const PhoneProject = () =>{
    return(
        <div className='phone-project' id='project-phone'>
            <h1><i class="fa fa-diagram-project"></i> Project</h1>
            <div className='phone-inner-project'>
                <section className='phone-project-card'>
                    <a href="https://github.com/ARNAB-BOTMAS/Srishti_project" target='blank'>
                        <img src={ai} alt='AI' className='phone-project-card-image'/>
                        <div className='phone-back-color'>Go to the Project <i class="fa-solid fa-arrow-right-long"></i></div>
                        <h4>SRISHTI AI Project</h4>
                    </a>
                </section>
                <section className='phone-project-card'>
                    <a href="https://github.com/ARNAB-BOTMAS/AddTime" target="blank">
                        <img src={time} alt='AI' className='phone-project-card-image'/>
                        <div className='phone-back-color'>Go to the Project <i class="fa-solid fa-arrow-right-long"></i></div>
                        <h4>Overtime Calculation App Part-I</h4>
                    </a>
                </section>
                <section className='phone-project-card'>
                    <a href="https://github.com/ARNAB-BOTMAS/ApplicationOvertime" target="blank">
                        <img src={time} alt='AI' className='phone-project-card-image'/>
                        <div className='phone-back-color'>Go to the Project <i class="fa-solid fa-arrow-right-long"></i></div>
                        <h4>Overtime Calculation App Part-II</h4>
                    </a>
                </section>
                <section className='phone-project-card'>
                    <a href="https://github.com/ARNAB-BOTMAS/PhotoAlbum" target="blank">
                        <img src={album} alt='AI' className='phone-project-card-image'/>
                        <div className='phone-back-color'>Go to the Project <i class="fa-solid fa-arrow-right-long"></i></div>
                        <h4>Photo Album App</h4>
                    </a>
                </section>
                <section className='phone-project-card'>
                    <a href="https://github.com/ARNAB-BOTMAS/reactWebsite" target="blank">
                        <img src={react} alt='AI' className='phone-project-card-image'/>
                        <div className='phone-back-color'>Go to the Project <i class="fa-solid fa-arrow-right-long"></i></div>
                        <h4>React Website</h4>
                    </a>
                </section>
            </div>
            <a href="https://github.com/ARNAB-BOTMAS" target='blank'>
                <button className='phone-more'>View More <span><i class="fa-solid fa-arrow-right-long"></i></span></button>
            </a>
        </div>
    );
}

export default PhoneProject;