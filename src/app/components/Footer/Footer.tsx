'use client';

import React, { useState } from 'react';
import { Youtube, Twitter, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', formData);
    // Handle form submission logic here
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column - Company Info & Socials */}
        <div className="footer-column company-info">
          <div className="logo-section">
            <img 
              src="/ifitnesslogo.png" 
              alt="i-Fitness" 
              className="footer-logo"
            />
          </div>
          
          <p className="company-description">
            We are a 360-health and wellness company and the leading and fastest-growing fitness chain. 
            With over 200 professionally certified personal trainers, ultra-modern gym facilities and 
            over 40 free fitness classes weekly, we give our members a holistic experience to suit and 
            support their fitness lifestyle.
          </p>
          
          <div className="social-icons">
            <a href="#" className="social-icon facebook" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-icon twitter" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-icon youtube" aria-label="YouTube">
              <Youtube size={20} />
            </a>
            <a href="#" className="social-icon instagram" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Middle Column - Quick Links */}
        <div className="footer-column quick-links">
          <h3 className="column-header">QUICK LINKS</h3>
          <ul className="links-list">
            <li><a href="#" className="footer-link">LOCATIONS</a></li>
            <li><a href="#" className="footer-link">CONTACT US</a></li>
            <li><a href="#" className="footer-link">ANNUAL DUES FAQ</a></li>
            <li><a href="#" className="footer-link">NEWS & EVENTS</a></li>
            <li><a href="#" className="footer-link">CORPORATE PLANS</a></li>
            <li><a href="#" className="footer-link">MEMBERSHIP PLANS</a></li>
          </ul>
        </div>

        {/* Middle Right Column - Working Hours */}
        <div className="footer-column working-hours">
          <h3 className="column-header">WORKING HOURS</h3>
          <div className="hours-list">
            <div className="hours-item">
              <span className="day">MONDAY - FRIDAY</span>
              <span className="time">6AM - 9PM</span>
            </div>
            <div className="hours-item">
              <span className="day">SATURDAY</span>
              <span className="time">7AM - 8PM</span>
            </div>
            <div className="hours-item">
              <span className="day">PUBLIC HOLIDAYS</span>
              <span className="time">7AM - 8PM</span>
            </div>
            <div className="hours-item">
              <span className="day">DEEP CLEANING</span>
              <span className="time">2PM - 3PM (DAILY)</span>
            </div>
            <div className="hours-item">
              <span className="day">CLOSED</span>
              <span className="time">JAN 1, DEC 25 & 26</span>
            </div>
          </div>
        </div>

        {/* Right Column - Newsletter Subscription */}
        <div className="footer-column newsletter">
          <div className="newsletter-label">FOR LATEST NEWS & UPDATES</div>
          <h3 className="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h3>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="newsletter-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleInputChange}
              className="newsletter-input"
              required
            />
            <button type="submit" className="subscribe-btn">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="copyright">
            © 2025 I-FITNESS CENTRE LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="footer-links">
            <a href="#" className="bottom-link">FAQS</a>
            <span className="separator">-</span>
            <a href="#" className="bottom-link">PRIVACY POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
