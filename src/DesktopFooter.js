import './desktop.css';

const DesktopFooter = () =>{
    return(
        <footer className='desktop-footer'>
            <div className='desktop-footer-inner'>
                <div className='desktop-port'>
                    <h2>Arnab's Portfolio</h2><br />
                    <p>Thank you for visiting my personal portfolio website contact with me over socials</p><br />
                    <p>Keep rising 🚀. Contact with me over chat</p>
                </div>
                <div className='desktop-link'>
                    <h2>Quick Links</h2><br />
                    <a href='#home-desktop'><i class="fa-solid fa-up-right-from-square"></i> Home</a><br />
                    <a href='#about-me-desktop'><i class="fa-solid fa-up-right-from-square"></i> About Me</a><br />
                    <a href='#skill-desktop'><i class="fa-solid fa-up-right-from-square"></i> Skill</a><br />
                    <a href='#education-desktop'><i class="fa-solid fa-up-right-from-square"></i> Education</a><br />
                    <a href='#project-desktop'><i class="fa-solid fa-up-right-from-square"></i> Project</a><br />
                    <a href='#contact-desktop'><i class="fa-solid fa-up-right-from-square"></i> Contact</a><br />
                </div>
                <div className='desktop-info'>
                    <h2>Contact Info</h2><br />
                    <p><span><i class="fa-solid fa-phone-volume"></i></span> +91 93394 21756</p>
                    <p><span><i class="fa-solid fa-envelope"></i></span> arnabmondal203@gmail.com</p>
                    <p><span><i class="fa-solid fa-location-dot"></i></span> Champahati, West Bengal - 743330, India</p><br />
                    <a href="https://www.facebook.com/shagor.roy.370?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook desktop-logo"></i></a>
                    <a href="https://www.instagram.com/shagor.roy.370/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram desktop-logo"></i></a>
                    <a href="https://github.com/ARNAB-BOTMAS" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github desktop-logo"></i></a>
                    <a href="https://www.linkedin.com/in/arnab-mondal-4409a5299/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin desktop-logo"></i></a>
                    <a href="https://t.me/Arnabmon" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-telegram desktop-logo"></i></a>
                    <a href="https://wa.me/919339421756" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp desktop-logo"></i></a>
                </div>
            </div>
            <div className='desktop-bottom'>
                <p>Designed With <i class="fa-solid fa-heart fa-beat desktop-heart"></i> Arnab Mondal</p>
            </div>
        </footer>
    );
}
export default DesktopFooter;