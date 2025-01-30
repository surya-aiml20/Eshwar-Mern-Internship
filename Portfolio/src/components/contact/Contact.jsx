import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_zal07pp', 'template_5sf2xsd', form.current, {
          publicKey: 'dWB0aHBxMTvF1fb1G',
        })
        e.target.reset()
        
    };

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in Touch</h2>
        <span className="section__subtitle">Contct Me</span>

        <div className="contact__container container grid">
            
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">surya.j2023aiml@sece.ac.in</span>

                        <a href="mailto:examplemail@gmail.com.com" className="contact__button">Write me{""}<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">+91 9342691995</span>

                        <a href="https://api.whatsapp.com/send?
                        phone=62214408789&text=Hello, more information!" className="contact__button">Write me{" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Mail me </h3>

                <form ref={form} onSubmit={sendEmail}
                     className="contact__form">

                <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input 
                        type="text" name="name" 
                        className='contact__form-input' 
                        placeholder='Insert your name'
                        />
                    </div>
                    
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input 
                        type="email" name="email" 
                        className='contact__form-input' 
                        placeholder='Insert your email'
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Message</label>
                        <textarea name="message" cols="30" rows="10" 
                        className='contact__form-input' placeholder='Write your message'></textarea>
                    </div>

                    <button className="button button--flex">
                     Send Message 
            
                     <svg className='my-svg' width="20px" height="20px" viewBox="0 0 24 24" fill="var(--container-color)" xmlns="http://www.w3.org/2000/svg"><path d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z" fill="var(--container-color)"/><path d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z" fill="var(--container-color)"/></svg>
            
                    </button>

                </form>
            </div>

        </div>
    </section>
  )
}

export default Contact
