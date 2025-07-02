'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, CheckCircle, X } from 'lucide-react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <button className="close-button" onClick={handleClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className="newsletter-left">
          <div className="fitness-image">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Fitness woman with dumbbells"
              width={500}
              height={400}
              className="fitness-img"
              priority
            />
          </div>
        </div>

        <div className="newsletter-right">
          <div className="newsletter-text">
            <h2>Don&apos;t miss any updates</h2>
            <h3>Get subscribed!</h3>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <Mail className="input-icon" size={20} />
              <input
                type="email"
                placeholder="Add your email...."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
              />
            </div>
            <button type="submit" className="subscribe-button">
              {isSubmitted ? <CheckCircle size={20} /> : 'Subscribe'}
            </button>
          </form>

          {isSubmitted && (
            <div className="success-message">
              <CheckCircle size={16} />
              <span>Successfully subscribed!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
