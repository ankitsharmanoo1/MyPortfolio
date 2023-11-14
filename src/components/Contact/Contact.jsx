import React, {useState } from 'react';
// import emailjs from '@emailjs/browser';
import './Contact.css';
import { db } from '../../Firebase/Firebase';
const Contact = () => {
  // const [message, setMessage] = useState(false);
  // const formRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async(e) => {
    e.preventDefault();
        await db.collection('messages').add({
          name,
          email,
          message
        });    
        setName('');
        setEmail('');
        setMessage('');
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-subtitle">Contact Me</h2>
      <div className="main-container">
        
        <form  onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
            className="contact-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
            className="contact-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
            className="contact-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}

          ></textarea>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
          {message && <span className="contact-success">Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;




