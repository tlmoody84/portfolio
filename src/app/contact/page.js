"use client";
import React from "react";
import { useState } from "react";

export default function DynamicContactComponent() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prevFormData => ({ ...prevFormData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSuccessMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <br></br>
        <br></br>
        <label>
          Name:
          <input className="black-text" type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br></br>
        <br></br>
        <label>
          Email:
          <input className="black-text" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br></br>
        <br></br>
        <label>
          Message:
          <textarea className="black-text" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </label>
        <br></br>
        <br></br>
        <button type="submit">Send Message</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}