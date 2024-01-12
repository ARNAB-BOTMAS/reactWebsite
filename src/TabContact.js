// import cont from './image/contacted.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import SuccessAlert from './SuccessAlert';

// import contact from './animation/contactUs.json';
// import loading from './animation/loading.json';
// import Lottie from 'lottie-react';

import './tab.css';

const TabContact = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1q1t0vl', 'template_4gbbx2g', form.current, '6U8ZoQMxHOIlO3RU8')
        .then((result) => {
            // <SuccessAlert />
            alert("Thank you for contacting us! We appreciate your message and will get back to you as soon as possible.")
            form.current.reset();

        }, (error) => {
            alert("We apologize for the inconvenience, but we are currently experiencing technical difficulties with our server. Please try again later or contact support for assistance.");
        });
    };
    return(
        <div className='tab-contact' id='contact-tab'>
            <h1><i class="fa-solid fa-mobile"></i> Get in Touch</h1>
            <div className='tab-contact-inner'>
                {/* <img src={cont} alt='contact' className='tab-contact-image'/> */}
                {/* <Lottie loop={true} animationData={contact} className='tab-contact-image'/> */}
                <div className='tab-contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type='text' placeholder='Name' name='user_name'/><br />
                        <input type='tel' placeholder='tab' name='user_tab'/><br />
                        <input type='email' placeholder='Email' name='user_email'/><br />
                        <textarea placeholder='Message' name='message'/><br />
                        <button type='submit' className='tab-send-btn'><i class="fa-solid fa-paper-plane"></i> Send </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TabContact;