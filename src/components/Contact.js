import React from 'react'
import envelope from '../assets/envelope.svg';

function Contact() {
  return (
    <div className='contact-form'>
        <h4>Want to get in touch?</h4>
        <p className="p-contact">I will get back to you as soon as possible</p>
        <a href="mailto:omarjab01@gmail.com" className="btn-email">
            <img src={envelope} />
            <p>Omarjab01@gmail.com</p>
        </a>
        
    </div>
  )
}

export default Contact