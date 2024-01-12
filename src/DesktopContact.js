// import cont from './image/contacted.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import SuccessAlert from './SuccessAlert';

import contact from './animation/contactUs.json';
// import loading from './animation/loading.json';
import Lottie from 'lottie-react';

import './desktop.css';

const DesktopContact = () =>{
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
        <div className='desktop-contact' id='contact-desktop'>
            <h1><i class="fa-solid fa-mobile"></i> Get in Touch</h1>
            <div className='desktop-contact-inner'>
                {/* <img src={cont} alt='contact' className='desktop-contact-image'/> */}
                <Lottie loop={true} animationData={contact} className='desktop-contact-image'/>
                <div className='desktop-contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type='text' placeholder='Name' name='user_name' id='name'/><br />
                        <input type='tel' placeholder='Phone' name='user_phone' id='phone'/><br />
                        <input type='email' placeholder='Email' name='user_email' id='email'/><br />
                        <textarea placeholder='Message' name='message' id='message'/><br />
                        <button type='submit' className='desktop-send-btn'><i class="fa-solid fa-paper-plane"></i> Send </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DesktopContact;