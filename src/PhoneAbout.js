import img from './image/aboutme.png';
import './phone.css';

function download(){
    var pdfPath = './document/CV2.pdf';

    // Create an anchor element
    var link = document.createElement('a');

    // Set the download attribute and the file path
    link.download = 'ArnabResume.pdf';
    link.href = pdfPath;
    link.target = "_blank";

    // Append the anchor element to the document
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Remove the anchor element from the document
    document.body.removeChild(link);
}

const PhoneAbout = () =>{
    return(
        <div className="phone-about" id='about-me-phone'>
            <h1>About Me</h1>
            <div className='phone-about-inner'>
                <div className="phone-about-image">
                    <img src={img} className='phone-about-inner-image'alt='Arnab Mondal'/>
                </div>
                <div className="phone-about-text">
                    <h2>I'm Arnab</h2>
                    <h3>Full Stack Developer</h3><br/><br/>
                    <p>I am a highly motivated and detailoriented computer science student with a passion for programming and a focus on delivering high-quality results. Skilled in Ms Office, web development, and programming in JAVA, C, C++, Python, I enjoy tackling complex problems and developing innovative solutions. As a strong team player with excellent communication skills, I am always eager to collaborate with others to achieve common goals.</p>
                    <br /><p><b>Email</b> : arnabmondal203@gmail.com.</p>
                    <p><b>Place</b> : Champahati, West Bengal - 743330, India.</p><br/>
                    <button className='download-resume-phone' onClick={download}><i class="fa fa-download"></i> Resume</button>
                </div>
            </div>    
        </div>
    );
};

export default PhoneAbout;