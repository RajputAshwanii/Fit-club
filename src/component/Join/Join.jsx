import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();
  

  const showAlert = () => {
    alert('Your Email is Send to Admin');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_idxfkxe', 'template_z0z2ynw', form.current, 'tTCnYuSrPOjSTZFx3')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className='stroke-text'>WITH US ?</span>
        </div>
      </div>
      <div className='right-j'></div>

      <form ref={form} action="" className='email-container' onSubmit={sendEmail}>
        <input type="email" name='user_email' placeholder='Enter your Email address' />
        <button className="btn btn-j" onClick={showAlert}>Join Now</button>
      </form>
    </div>
  );
};

export default Join;
