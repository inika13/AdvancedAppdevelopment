import React, { useState } from 'react';
import '../assets/css/Form.css';
import { Link } from 'react-router-dom';
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedbackType, setFeedbackType] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Feedback Type:', feedbackType);
    console.log('Message:', message);
    setSubmitted(true);
  };

  const handleBack = () => {
    setSubmitted(false);
    // Clear form data
    setName('');
    setEmail('');
    setFeedbackType('');
    setMessage('');
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      {submitted ? (
        <>
          <p>Thank you for your feedback!</p>
          <button type="button" onClick={handleBack}>Back</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="feedbackType">Feedback Type:</label>
          <select id="feedbackType" value={feedbackType} onChange={(e) => setFeedbackType(e.target.value)} required>
            <option value="">Select</option>
            <option value="Bug">Bug</option>
            <option value="Feature Request">Feature Request</option>
            <option value="General Feedback">General Feedback</option>
          </select>
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          <button type="submit">Submit</button><br/><br/>
          <Link to='/Cont'><button type="submit">Back</button></Link>
        </form>
      )}
    </div>
  );
};

export default Form;
