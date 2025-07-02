// src/app/ifitness-locations/layout.tsx
'use client';

import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import './LocationLayout.css'; // Use renamed & scoped CSS

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="location-layout">
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
