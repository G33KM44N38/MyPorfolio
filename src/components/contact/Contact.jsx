import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p90sqsj', 'template_7ulm2mi', form.current, 'UjF1igHzWrQfsYaSW')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_options-icon'/>
            <h4>Email</h4>
            <h5>mayanga.kylian@gmail.com</h5>
            <a href="mailto:mayanga.kylian@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className='contact_options-icon'/>
            <h4>WhatsApp</h4>
            <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=+33769757372" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your fulle Name' required/>
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact