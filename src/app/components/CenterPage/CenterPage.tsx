'use client';

import React from 'react';
import './CenterPage.css';

interface CenterPageProps {
  centerName: string;
  mapCoordinates: { lat: number; lng: number } | null;
}

const CenterPage: React.FC<CenterPageProps> = ({ centerName, mapCoordinates }) => {
  const formattedCenter = centerName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const googleMapUrl = mapCoordinates
    ? `https://www.google.com/maps?q=${mapCoordinates.lat},${mapCoordinates.lng}&hl=es;z=14&output=embed`
    : '';

  return (
    <section className="center-page">
      <h1 className="center-heading">{formattedCenter} Fitness Center</h1>
      <p className="center-description">
        Welcome to the <strong>{formattedCenter}</strong> location. Here, we provide top-tier facilities and certified trainers to help you achieve your goals.
      </p>

      {mapCoordinates ? (
        <div className="map-container">
          <iframe
            title={`${formattedCenter} Map`}
            src={googleMapUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      ) : (
        <p>Map for this location is currently unavailable.</p>
      )}
    </section>
  );
};

export default CenterPage;
