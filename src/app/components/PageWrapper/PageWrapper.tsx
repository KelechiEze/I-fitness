// src/components/PageWrapper/PageWrapper.tsx

import React from 'react';
import Navigation from '../Navigation/Navigation';
import LocationFinder from '../LocationFinder/LocationFinder';
import FitnessSection from '../FitnessSection/FitnessSection';
import FitnessSlider from '../FitnessSlider/FitnessSlider';
// import NewsLetterSignup from '../NewsLetterSignup/NewsLetterSignup';
import Footer from '../Footer/Footer';
import './Layout.css'; // ✅ rename from Layout.css if needed

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">
        <LocationFinder />
        <FitnessSection />
        <FitnessSlider />
        {/* <NewsLetterSignup /> */}
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default PageWrapper;
