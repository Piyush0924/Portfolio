import React, { useState } from 'react';
import "./Contact.css";

const Contact = (props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleInputChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };

  const onSave = () => {
    if (!email) {
      setEmailError("Email is mandatory");
    } else {
      setEmailError(false);
    }

    // You can perform additional validation or save logic here

    // Reset the fields after saving if needed
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <div className='container mt-2 text-bg-light border-dark border rounded p-4'>
      <div className='row justify-content-md-center'>
        <div className="col-lg-4">
          <h1 className='mb-5 rounded-3'>Contact Me</h1>

          <div className='mb-3'>
            <label htmlFor="exampleFormControlInput1" className="form-label">Email Address</label>
            <input
              onKeyUp={onEmailChange}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              aria-required="true"
            />
            {emailError && <small className='text-danger'>{emailError}</small>}
          </div>

          <div className="mb-4 form-floating">
            <label htmlFor="subjectInput">Subject</label>
            <textarea
              className="form-control subject"
              placeholder="Subject"
              id="subjectInput"
              value={subject}
              onChange={(e) => handleInputChange(e, setSubject)}
              aria-required="true"
            ></textarea>
          </div>

          <div className="mb-3 form-floating">
            <label htmlFor="floatingTextarea">Message</label>
            <textarea
              className="form-control message"
              placeholder="Message"
              id="floatingTextarea"
              value={message}
              onChange={(e) => handleInputChange(e, setMessage)}
              aria-required="true"
            ></textarea>
          </div>

          <p className='mb-5 p-5'>
            <button onClick={onSave} className='btn btn-primary' type="button">Submit</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
