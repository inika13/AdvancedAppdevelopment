import React, { useState } from 'react';
import '../assets/css/Payment.css';
import { Link } from 'react-router-dom';
const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!cardNumber || !expiry || !cvc || !name) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);

    try {
      // Simulating payment processing delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSuccess(true);
      setError(null);
    } catch (error) {
      setError('Payment failed. Please try again.');
    }

    setLoading(false);
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <h1 className="payment-title">PAYMENT</h1>
      <label className="payment-label">
        Card Number
        <input
          type="text"
          className="payment-input"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="1234 5678 9012 3456"
        />
      </label>

      <label className="payment-label">
        Expiry (MM/YY)
        <input
          type="text"
          className="payment-input"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          placeholder="MM/YY"
        />
      </label>

      <label className="payment-label">
        CVC
        <input
          type="text"
          className="payment-input"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          placeholder="CVC"
        />
      </label>

      <label className="payment-label">
        Name on Card
        <input
          type="text"
          className="payment-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
        />
      </label>

      <button type="submit" className="payment-button" disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>

      {error && <div className="payment-error">{error}</div>}
      {success && <div className="payment-success">Payment successful!</div>}
      <br />
      <br />
      <Link to='/Events'><button
        type="button"
        className="payment-back-button"
        onClick={() => console.log('Back button clicked')}
      >
        Back
         </button></Link>
    </form>
  );
};

export default Payment;
