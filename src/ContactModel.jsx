import React, { useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #222;
  padding: 32px;
  border-radius: 16px;
  width: 400px;
  max-width: 90%;
  color: #fff;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 2rem;

  input,
  textarea,
  button {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #0e76a8;
    background-color: #333;
    color: #fff;
  }

  button {
    background-color: #0e76a8;
    cursor: pointer;
    &:hover {
      background-color: #0a58a2;
    }
  }
`;

const ContactModal = ({ user, onClose }) => {
  const [message, setMessage] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipientEmail: user.email, senderEmail, message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      alert('Message sent successfully!');
      onClose(); // Close the modal
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Contact {user.name}</h2>
        <ContactForm onSubmit={handleSubmit}>
          <input
            type="email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            placeholder="Your email address"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </ContactForm>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ContactModal;
