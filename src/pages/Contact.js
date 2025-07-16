// components/Contact.js
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
       import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert('Message sent!');
      form.current.reset();
    }, () => {
      alert('Failed to send. Please try again.');
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-info">
        <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        <p><strong>Email:</strong> your.email@example.com</p>
        <p><strong>Location:</strong> Kansas City, MO</p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>

      <div className="appointment">
        <h3>Want to talk?</h3>
        <p>Schedule a call with me at your convenience.</p>
        <a
          href="https://calendly.com/your-link" 
          target="_blank"
          rel="noopener noreferrer"
          className="book-btn"
        >
          Book an Appointment
        </a>
      </div>
    </section>
  );
};

export default Contact;
