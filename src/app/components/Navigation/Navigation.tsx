'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Membership', href: '/membership' },
    { name: 'Corporate', href: '/corporate' },
    { name: 'About Us', href: '/about' },
    { name: 'Shop', href: '/shop' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Deals', href: '#', hasDropdown: true },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo-container">
          <img 
            src="/ifitnesslogo.png" 
            alt="i-Fitness Logo" 
            className="logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className="nav-link">
              {link.name}
              {link.hasDropdown && <ChevronDown className="dropdown-icon" />}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button className="hamburger-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X className="hamburger-icon" /> : <Menu className="hamburger-icon" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="mobile-dropdown-icon" />}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
