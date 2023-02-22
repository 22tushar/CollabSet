import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import { RiPhoneFill, } from 'react-icons/ri'
// import { FaAddressCard } from 'react-icons/fa'
// import { AiOutlineMail } from 'react-icons/ai'
import './nodemailer.css'
import List from './List'

const Result = () => {
    return (
        <p>Your message has been sent.</p>
    )
}

const Nodemailer = () => {

    const form = useRef();

    const [result, setResult] = useState(false);

    const sendEmail = (e) => {

        e.preventDefault();
        emailjs.sendForm('service_jmjvmpu', 'template_gqyw1he', form.current, 'user_0F0916xp78DwYZBNw0Mle')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setResult(true);
    };



    return (
        <>
            <div className="contact">
                <div className="contact_form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="contact_form_container py-5">
                                    
                                    <form ref={form} className="contact_form" onSubmit={sendEmail} >
                                        <div className='contact_form_name d-flex justify-content-between align-items-between' >
                                            <input type="email" name='email' id="contact_form_email" className='contact_form_email input-field' placeholder='email' required='true' />
                                        </div>

                                        <div className="contact_form_button">
                                            <button type='submit' className='button contact_submit_button' >Send Form</button>
                                        </div>
                                        {result ? <Result /> : ""}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <List/>
        </>
    )
}

export default Nodemailer
