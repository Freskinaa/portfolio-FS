import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: '', type: '' });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_kunjxcj',
      'template_tkf52k7',
      form.current,
      'aQbUOPW1s2gJc6p3s'
    )
    .then(() => {
      setStatus({ message: 'Message sent successfully!', type: 'success' });
      e.target.reset();
      setTimeout(() => setStatus({ message: '', type: '' }), 4000);
    }, () => {
      setStatus({ message: 'Failed to send the message, please try again.', type: 'error' });
      setTimeout(() => setStatus({ message: '', type: '' }), 4000);
    });
  };

  return (
    <div className="contact-container" id="contact" data-aos="fade-up">
      <h2 data-aos="fade-down">Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form" data-aos="fade-left">
        <label>Name</label>
        <input type="text" name="user_name" required />

        <label>Email</label>
        <input type="email" name="user_email" required />

        <label>Message</label>
        <textarea name="message" rows="5" required></textarea>

        <button type="submit">Send</button>
      </form>

      {status.message && (
        <p className={`status-message ${status.type}`} data-aos="fade-up">
          {status.message}
        </p>
      )}
    </div>
  );
};

export default Contact;
