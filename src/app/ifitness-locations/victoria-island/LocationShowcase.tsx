'use client';

import React from 'react';
import { MapPin, Mail, Clock } from 'lucide-react';
import './LocationShowcase.css';
import PricingSection from '../../components/PricingSection/PricingSection';

const locationData = {
  title: "OUR LOCATIONS – LAGOS ISLAND",
  subtitle: "i-Fitness Gym Jakande",
  address: "1st gate Jakande by FCMB, Lekki-Epe.",
  email: "HELLO@IFITNESS.NG",
  workingHours: "Mon – Fri: 6:00AM - 9:00PM | Sat: 7:00AM – 8:00PM",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7653582677243!2d3.4633384!3d6.4281004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53073c88f5b%3A0x6b8a9b3a2f7c8d9e!2sLekki%20Peninsula%20II%2C%20Lagos!5e0!3m2!1sen!2sng!4v1635789123456!5m2!1sen!2sng",
};

const LocationShowcase: React.FC = () => {
  return (
    <section className="location-showcase">
      <div className="location-container">
        <div className="map-section">
          <div className="map-wrapper">
            <iframe
              src={locationData.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
            <div className="map-overlay"></div>
          </div>
        </div>

        <div className="details-section">
          <div className="location-card">
            <div className="card-header">
              <h3 className="location-title">{locationData.title}</h3>
              <h2 className="location-subtitle">{locationData.subtitle}</h2>
            </div>

            <div className="card-content">
              <div className="detail-item">
                <div className="detail-icon">
                  <MapPin size={20} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">ADDRESS:</span>
                  <span className="detail-value">{locationData.address}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <Mail size={20} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">EMAIL:</span>
                  <span className="detail-value">{locationData.email}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <Clock size={20} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">WORKING HOURS:</span>
                  <span className="detail-value">{locationData.workingHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Pricing Section Below */}
      <PricingSection />
    </section>
  );
};

export default LocationShowcase;
