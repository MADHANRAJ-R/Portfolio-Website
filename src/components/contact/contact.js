import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eff1wqj', 'template_dye6c68', form.current, '4bo8pwLC9lbwoYsrg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact" >
        <div className="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
             <form  className="contactform" ref={form} onSubmit={sendEmail}>
                <input type="text" className="fullname" placeholder='Your Name' name='from_name' />
                <input type="email" className="email" placeholder='Your Email' name='from_email' />
                <textarea name="message" rows="5" className="msg" placeholder='Your Message'></textarea> <br />
                <button type='submit' value='Send' className="submitbtn">Submit</button>
             </form>
        </div>
    </section>
    
  )
}

export default Contact;