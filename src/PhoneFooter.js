import './phone.css';

const PhoneFooter = () =>{
      const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
    return(
        <footer className='phone-footer'>
            <div className='phone-footer-inner'>
                <div className='phone-port'>
                    <h2>Arnab's Portfolio</h2><br />
                    <p>Thank you for visiting my personal portfolio website contact with me over socials</p><br />
                    <p>Keep rising 🚀. Contact with me over chat</p>
                </div>
                <div className='phone-link'>
                    <h2>Quick Links</h2><br />
                    <button onClick={() => scrollToSection('home-phone')}><i className="fa-solid fa-up-right-from-square"></i> Home</button><br />
                    <button onClick={() => scrollToSection('about-me-phone')}><i className="fa-solid fa-up-right-from-square"></i> About Me</button><br />
                    <button onClick={() => scrollToSection('skill-phone')}><i className="fa-solid fa-up-right-from-square"></i> Skill</button><br />
                    <button onClick={() => scrollToSection('education-phone')}><i className="fa-solid fa-up-right-from-square"></i> Education</button><br />
                    <button onClick={() => scrollToSection('project-phone')}><i className="fa-solid fa-up-right-from-square"></i> Project</button><br />
                    <button onClick={() => scrollToSection('contact-phone')}><i className="fa-solid fa-up-right-from-square"></i> Contact</button><br />
                </div>
                <div className='phone-info'>
                    <h2>Contact Info</h2><br />
                    <p><span><i class="fa-solid fa-phone-volume"></i></span> +91 93394 21756</p>
                    <p><span><i class="fa-solid fa-envelope"></i></span> arnabmondal203@gmail.com</p>
                    <p><span><i class="fa-solid fa-location-dot"></i></span> Champahati, West Bengal - 743330, India</p><br />
                    <a href="https://www.facebook.com/shagor.roy.370?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook phone-logo"></i></a>
                    <a href="https://www.instagram.com/shagor.roy.370/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram phone-logo"></i></a>
                    <a href="https://github.com/ARNAB-BOTMAS" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github phone-logo"></i></a>
                    <a href="https://www.linkedin.com/in/arnab-mondal-4409a5299/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin phone-logo"></i></a>
                    <a href="https://t.me/Arnabmon" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-telegram phone-logo"></i></a>
                    <a href="https://wa.me/919339421756" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp phone-logo"></i></a>
                </div>
            </div>
            <div className='phone-bottom'>
                <p>Designed With <i class="fa-solid fa-heart fa-beat phone-heart"></i> Arnab Mondal</p>
            </div>
        </footer>
    );
}
export default PhoneFooter;