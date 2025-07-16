import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_kunjxcj',
      'template_tkf52k7',
      form.current,
      'aQbUOPW1s2gJc6p3s'
    )
      .then(() => {
        setStatus('Message sent successfully!');
        e.target.reset();
        setTimeout(() => setStatus(''), 4000); 
      }, () => {
        setStatus('Failed to send the message, please try again.');
        setTimeout(() => setStatus(''), 4000); 
      });
  };

  return (
    <div className="contact-container" id="contact">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" required />

        <label>Email</label>
        <input type="email" name="user_email" required />

        <label>Message</label>
        <textarea name="message" rows="5" required></textarea>

        <button type="submit">Send</button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;
