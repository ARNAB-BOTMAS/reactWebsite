import school from './image/education/SouthGariaJadunath.jpg';
import highSchool from './image/education/Sitakundu.jpg';
import college from './image/education/Sammilani.jpg';
import './phone.css';
const PhoneEdu = () =>{
    return(
        <div className='phone-education' id='education-phone'>
            <h1><i class='fa fa-book'></i> Education</h1>
            <div className='phone-education-inner'>
                <section className='phone-education-card'>
                    <div className='phone-education-image'>
                        <img src={college} alt='school' className='phone-education-image-inner'/>
                    </div>
                    <div className='phone-education-text-inner'>
                        <h2>Bachelor In Computer Science (Hons.)</h2>
                        <p>Sammilani Mahavidyalaya | CU</p><br />
                        <h3>2020-2023 | Complete</h3>
                    </div>
                </section>
                <section className='phone-education-card'>
                    <div className='phone-education-image'>
                        <img src={highSchool} alt='school' className='phone-education-image-inner'/>
                    </div>
                    <div className='phone-education-text-inner'>
                        <h2>High School, XI-XII</h2>
                        <p>Sitakundu Vidyayatan | WBCHSE</p><br />
                        <h3>2018-2020 | Complete</h3>
                    </div>
                </section>
                <section className='phone-education-card'>
                    <div className='phone-education-image'>
                        <img src={school} alt='school' className='phone-education-image-inner'/>
                    </div>
                    <div className='phone-education-text-inner'>
                        <h2>Schooling, V-X</h2>
                        <p>South Garia Jadunath Vidyamandir (H.S) | WBBSE</p><br />
                        <h3>2013-2018 | Complete</h3>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PhoneEdu;