import React, { useState } from 'react';
import "../Styles/FormSubmit.css" 
const SubmitForm = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  const handleFocus = (e) => {
    e.target.classList.add('focused');
  };

  const handleBlur = (e) => {
    e.target.classList.remove('focused');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the server or perform other actions here
    // For example: console.log(subject, email, phone, description);

    // Reset the form values after successful submission
    setSubject('');
    setEmail('');
    setPhone('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="submit-form">
      <div className="form-group">
        <label>
          Subject:
          <input
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            placeholder="Enter your phone"
            onChange={(e) => setPhone(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Description:
          <textarea
            value={description}
            placeholder="Enter description here"
            onChange={(e) => setDescription(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="form-textarea"
          />
        </label>
      </div>
      <button type="submit" className="submit-button">Mail to</button>
    </form>
  );
};

export default SubmitForm;
