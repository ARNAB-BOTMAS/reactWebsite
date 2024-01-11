import school from './image/education/SouthGariaJadunath.jpg';
import highSchool from './image/education/Sitakundu.jpg';
import college from './image/education/Sammilani.jpg';
import './tab.css';
const TabEdu = () =>{
    return(
        <div className='tab-education' id='education-tab'>
            <h1><i class='fa fa-book'></i> Education</h1>
            <div className='tab-education-inner'>
                <section className='tab-education-card'>
                    <div className='tab-education-image'>
                        <img src={college} alt='school' className='tab-education-image-inner'/>
                    </div>
                    <div className='tab-education-text-inner'>
                        <h2>Bachelor In Computer Science (Hons.)</h2>
                        <p>Sammilani Mahavidyalaya | CU</p><br />
                        <h3>2020-2023 | Complete</h3>
                    </div>
                </section>
                <section className='tab-education-card'>
                    <div className='tab-education-image'>
                        <img src={highSchool} alt='school' className='tab-education-image-inner'/>
                    </div>
                    <div className='tab-education-text-inner'>
                        <h2>High School, XI-XII</h2>
                        <p>Sitakundu Vidyayatan | WBCHSE</p><br />
                        <h3>2018-2020 | Complete</h3>
                    </div>
                </section>
                <section className='tab-education-card'>
                    <div className='tab-education-image'>
                        <img src={school} alt='school' className='tab-education-image-inner'/>
                    </div>
                    <div className='tab-education-text-inner'>
                        <h2>Schooling, V-X</h2>
                        <p>South Garia Jadunath Vidyamandir (H.S) | WBBSE</p><br />
                        <h3>2013-2018 | Complete</h3>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TabEdu;