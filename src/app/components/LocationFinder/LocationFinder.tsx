'use client';

import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import './LocationFinder.css';

const LocationFinder = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const locations = [
    {
      name: 'LAGOS',
      centers: ['Victoria Island', 'Lekki', 'Ikeja', 'Surulere', 'Yaba', 'Gbagada', 'Ajah', 'Ikoyi', 'Magodo', 'Festac'],
    },
    {
      name: 'ABUJA',
      centers: ['Wuse 2', 'Garki', 'Maitama', 'Gwarinpa', 'Asokoro'],
    },
    {
      name: 'PORT HARCOURT',
      centers: ['GRA', 'D-Line', 'Ada George', 'Trans Amadi'],
    },
    {
      name: 'IBADAN',
      centers: ['UI', 'Bodija', 'Ring Road', 'Dugbe'],
    },
  ];

  const openModal = (locationName: string) => {
    setActiveModal(locationName);
    setSearchQuery('');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCenterClick = (centerName: string) => {
    const formattedPath = centerName.toLowerCase().replace(/\s+/g, '-');
    router.push(`/ifitness-locations/${formattedPath}`);
    closeModal();
  };

  const getFilteredCenters = () => {
    const currentLocation = locations.find((loc) => loc.name === activeModal);
    if (!currentLocation) return [];
    return currentLocation.centers.filter((center) =>
      center.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <section className="location-finder">
      <div className="location-container">
        <h1 className="location-title">Find a centre close to you</h1>

        <div className="location-buttons-grid">
          {locations.map((location, index) => (
            <div key={index} className="location-dropdown-wrapper">
              <button className="location-btn" onClick={() => openModal(location.name)}>
                <span className="location-name">{location.name}</span>
                <ChevronDown className="chevron-icon" />
              </button>
            </div>
          ))}
        </div>

        {activeModal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title">{activeModal} Locations</h2>
                <button className="modal-close-btn" onClick={closeModal}>
                  <X className="close-icon" />
                </button>
              </div>

              <div className="modal-body">
                <input
                  type="text"
                  placeholder="Search for a center..."
                  className="location-search-input"
                  value={searchQuery}
                  onChange={handleSearch}
                />

                <div className="locations-scroll-container">
                  {getFilteredCenters().map((center, centerIndex) => (
                    <div 
                      key={centerIndex} 
                      className="location-card clickable-card"
                      onClick={() => handleCenterClick(center)}
                    >
                      <span className="location-card-name">{center}</span>
                      <ChevronDown className="card-arrow" />
                    </div>
                  ))}
                  {getFilteredCenters().length === 0 && (
                    <p className="no-results-text">No matching centers found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LocationFinder;
