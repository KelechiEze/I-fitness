// src/app/about/layout.tsx
'use client';

import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import '../Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const AboutLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      {/* Top Navigation Bar */}
      <Navigation />

      {/* Main content area */}
      <main className="main-content">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutLayout;
