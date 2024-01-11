import android from './image/skills/Android.png';
import c from './image/skills/C.png';
import cPlus from './image/skills/C++.png';
import css from './image/skills/CSS.png';
import firebase from './image/skills/FireBase.png';
import git from './image/skills/GitHub.png';
import html5 from './image/skills/HTML5.png';
import java from './image/skills/Java.png';
import js from './image/skills/JavaScript.png';
import sql from './image/skills/MySQL.png';
import node from './image/skills/NodeJS.png';
import php from './image/skills/PHP.png';
import post from './image/skills/PostgreSQL.png';
import python from './image/skills/Python.png';
import react from './image/skills/ReactJS.png';

import './phone.css';
const PhoneSkill = () =>{
    return(
        <div className="phone-skill" id='skill-phone'>
            <h1><i class="fa-solid fa-gear fa-spin"></i> Skills</h1>
            {/* <h1><i class="fa fa-gear fa-spin"></i> Skills</h1> */}
            <div className='phone-skill-inner'>
            <section className='phone-skill-card'>
                <img src={android} alt='skill' className='phone-skill-card-image'/>
                <h3>Android</h3>
            </section>
            <section className='phone-skill-card'>
                <img src={c} alt='skill' className='phone-skill-card-image'/>
                <h3>C</h3>
            </section>
            <section className='phone-skill-card'>
                <img src={cPlus} alt='skill' className='phone-skill-card-image'/>
                <h3>C++</h3>
            </section>
            <section className='phone-skill-card'>
                <img src={css} alt='skill' className='phone-skill-card-image'/>
                <h3>CSS</h3>
            </section>
            <section className='phone-skill-card'>
                <img src={firebase} alt='skill' className='phone-skill-card-image'/>
                <h3>FireBase</h3>
            </section>
            <section className='phone-skill-card'>
                <img src={git} alt='skill' className='phone-skill-card-image'/>
                <h3>GitHub</h3>
            </section>
            <section className='phone-skill-card'>
                <img src={html5} alt='skill' className='phone-skill-card-image'/>
                <h3>HTML5</h3>
            </section>
            <section className='phone-skill-card'>
                <img src={java} alt='skill' className='phone-skill-card-image'/>
                <h3>JAVA</h3>
            </section>
            <section className='phone-skill-card'>
                <img src={js} alt='skill' className='phone-skill-card-image'/>
                <h3>JavaScript</h3>
            </section>
            <section className='phone-skill-card'>
                <img src={sql} alt='skill' className='phone-skill-card-image-1'/>
                <h3>MySQL</h3>
            </section>
            <section className='phone-skill-card'>
                <img src={node} alt='skill' className='phone-skill-card-image-1'/>
                <h3>NodeJS</h3>
            </section>
            <section className='phone-skill-card'>
                <img src={php} alt='skill' className='phone-skill-card-image-2'/>
                <h3>PHP</h3>
            </section>
            <section className='phone-skill-card'>
                <img src={post} alt='skill' className='phone-skill-card-image-3'/>
                <h3>PostgreSQL</h3>
            </section>
            <section className='phone-skill-card'>
                <img src={python} alt='skill' className='phone-skill-card-image-4'/>
                <h3>Python</h3>
            </section>
            <section className='phone-skill-card'>
                <img src={react} alt='skill' className='phone-skill-card-image-5'/>
                <h3>ReactJS</h3>
            </section>
            </div>
        </div>
    );
};

export default PhoneSkill;