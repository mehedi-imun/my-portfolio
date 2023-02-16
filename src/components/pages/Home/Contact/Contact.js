
import React, { useRef }  from 'react';
import {MdOutlineMail}from 'react-icons/md';
import {RiMessageLine}from 'react-icons/ri';
import {BsWhatsapp}from 'react-icons/bs';
import './Contact.css'
import emailjs from 'emailjs-com';
const Contact = () => {
    const form= useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_im9vdxc', 'template_k2a8rzj', form.current, '5tCvAAXPqpxJ46TYD')
        .then((result) => {
            if(result.status === 200){
                alert('send message successfully')
                e.target.reset();
            }
        }, (error) => {
            console.log(error.text);
        });
         
      };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className='contact_option'>
                         <MdOutlineMail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>mehediimun@gmail.com</h5>
                        <a href="mailto:mehediimun@gmail.com">Send  Email</a>
                    </article>
                    <article className='contact_option'>
                         <RiMessageLine className='contact_option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Mahedi Imun</h5>
                        <a href="https://m.me/mehediimun">Send a message</a>
                    </article>
                    <article className='contact_option'>
                         <BsWhatsapp className='contact_option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>+880 1611 846448</h5>
                        <a href="https://wa.me/+8801611846448">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input name='name' type="text" placeholder='Full Name' required />
                    <input name='email' type="email" placeholder='Your Email' required />
                    <textarea placeholder='message' name="message" rows="7" required ></textarea>
                    <input type="submit" value="Send Message" className='btn btn-primary' />
                </form>
            </div>
            
        </section>
    );
};

export default Contact;