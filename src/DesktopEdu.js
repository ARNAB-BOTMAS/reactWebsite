import school from './image/education/SouthGariaJadunath.jpg';
import highSchool from './image/education/Sitakundu.jpg';
import college from './image/education/Sammilani.jpg';
import './desktop.css';
const DesktopEdu = () =>{
    return(
        <div className='desktop-education' id='education-desktop'>
            <h1><i class='fa fa-book'></i> Education</h1>
            <div className='desktop-education-inner'>
                <section className='desktop-education-card'>
                    <div className='desktop-education-image'>
                        <img src={college} alt='school' className='desktop-education-image-inner'/>
                    </div>
                    <div className='desktop-education-text-inner'>
                        <h2>Bachelor In Computer Science (Hons.)</h2>
                        <p>Sammilani Mahavidyalaya | CU</p><br /><br />
                        <h3>2020-2023 | Complete</h3>
                    </div>
                </section>
                <section className='desktop-education-card'>
                    <div className='desktop-education-image'>
                        <img src={highSchool} alt='school' className='desktop-education-image-inner'/>
                    </div>
                    <div className='desktop-education-text-inner'>
                        <h2>High School, XI-XII</h2>
                        <p>Sitakundu Vidyayatan | WBCHSE</p><br /><br />
                        <h3>2018-2020 | Complete</h3>
                    </div>
                </section>
                <section className='desktop-education-card'>
                    <div className='desktop-education-image'>
                        <img src={school} alt='school' className='desktop-education-image-inner'/>
                    </div>
                    <div className='desktop-education-text-inner'>
                        <h2>Schooling, V-X</h2>
                        <p>South Garia Jadunath Vidyamandir (H.S) | WBBSE</p><br /><br />
                        <h3>2013-2018 | Complete</h3>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DesktopEdu;