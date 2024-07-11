// src/EmailForm.jsx
import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('Thank you for signing up!');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-sm">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-2 mb-4 w-full text-black"
      />
      <button type="submit" className="p-2 w-full bg-white text-black hover:bg-gray-300">
        Sign Up
      </button>
      {message && <p className="mt-4">{message}</p>}
    </form>
  );
};

export default EmailForm;

