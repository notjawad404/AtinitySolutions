import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './from.css'

export const ContactUs = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f2uu41v', 'template_xqev47j', form.current, 'GLvCK2MkX1UMTmC7K')
      .then((result) => {
        console.log(result.text);
        setShowModal(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='width1'>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <input type="text" name="formsubject" className="form-control" placeholder='Subject' />
        </div>
        <div className="form-group">
          <input type="email" name="useremail" className="form-control" placeholder='Email'/>
        </div>
        <div className="form-group">
          <textarea name="message" className="form-control msg-height" placeholder='Message'/>
        </div>
        <input type="submit" value="Send" className="btn btn-primary" />
      </form>


      <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Success!</h5>
              <button type="button" className="close" onClick={closeModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Your message has been sent successfully.</p>
              <p>You will receive confirmational email shortly</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
