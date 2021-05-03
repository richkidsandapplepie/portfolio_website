import React from 'react';
import '../css/contact.css';
import { Fade } from 'react-animation-components';

function Contact() {
  return (
    <>
      <Fade in>
        <div className="contact-container">
          <p>richardhkwon@gmail.com</p>
          <p>LinkedIn</p>
        </div>
      </Fade>
    </>
  );
}

export default Contact;