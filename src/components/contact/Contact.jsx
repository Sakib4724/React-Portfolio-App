import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9lm4mz8', 'template_g9qjhed', form.current, {
        publicKey: 'AfP7vmd3-gWswDrVV',
      })


      .then(
        () => {
          e.target.reset();
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <section id='contact'>

    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>sakib525226@gmail.com</h5>
          <a href="mailto:" target='_blank'>Send a Message</a>
        </article>

        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+9123626262262</h5>
          <a href="https://api.whatsapp.com/send?phone=+91" target='_blank'>Send a Message</a>
        </article>
      </div>

      {/* End of Contact Options */}
      <form ref={form} onSubmit={sendEmail}>

        <input type='text' name='name' placeholder='Your Full Name' required/>
        <input type='text' name='email' placeholder='Your Email' required/>
        <textarea name='message' rows="7" placeholder='Your Message' required/>
        <button className='btn btn-primary' type='submit'>Send Message</button>

      </form>

    </div>

    </section>
  )
}

export default Contact