import './tab.css';

const TabFooter = () =>{
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
        <footer className='tab-footer'>
            <div className='tab-footer-inner'>
                <div className='tab-port'>
                    <h2>Arnab's Portfolio</h2><br />
                    <p>Thank you for visiting my personal portfolio website contact with me over socials</p><br />
                    <p>Keep rising 🚀. Contact with me over chat</p>
                </div>
                <div className='tab-link'>
                    <h2>Quick Links</h2><br />
                    <a onClick={() => scrollToSection('home-tab')}><i class="fa-solid fa-up-right-from-square"></i> Home</a><br />
                    <a onClick={() => scrollToSection('about-me-tab')}><i class="fa-solid fa-up-right-from-square"></i> About Me</a><br />
                    <a onClick={() => scrollToSection('skill-tab')}><i class="fa-solid fa-up-right-from-square"></i> Skill</a><br />
                    <a onClick={() => scrollToSection('education-tab')}><i class="fa-solid fa-up-right-from-square"></i> Education</a><br />
                    <a onClick={() => scrollToSection('project-tab')}><i class="fa-solid fa-up-right-from-square"></i> Project</a><br />
                    <a onClick={() => scrollToSection('contact-tab')}><i class="fa-solid fa-up-right-from-square"></i> Contact</a><br />
                </div>
                <div className='tab-info'>
                    <h2>Contact Info</h2><br />
                    <p><span><i class="fa-solid fa-phone-volume"></i></span> +91 93394 21756</p>
                    <p><span><i class="fa-solid fa-envelope"></i></span> arnabmondal203@gmail.com</p>
                    <p><span><i class="fa-solid fa-location-dot"></i></span> Champahati, West Bengal - 743330, India</p><br />
                    <a href="https://www.facebook.com/shagor.roy.370?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook tab-logo"></i></a>
                    <a href="https://www.instagram.com/shagor.roy.370/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram tab-logo"></i></a>
                    <a href="https://github.com/ARNAB-BOTMAS" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github tab-logo"></i></a>
                    <a href="https://www.linkedin.com/in/arnab-mondal-4409a5299/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin tab-logo"></i></a>
                    <a href="https://t.me/Arnabmon" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-telegram tab-logo"></i></a>
                    <a href="https://wa.me/919339421756" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp tab-logo"></i></a>
                </div>
            </div>
            <div className='tab-bottom'>
                <p>Designed With <i class="fa-solid fa-heart fa-beat tab-heart"></i> Arnab Mondal</p>
            </div>
        </footer>
    );
}
export default TabFooter;