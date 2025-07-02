// src/app/ifitness-locations/layout.tsx
'use client';

import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import { Poppins } from 'next/font/google';
import './LocationLayout.css'; // Scoped CSS

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`location-layout ${poppins.variable}`}>
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
