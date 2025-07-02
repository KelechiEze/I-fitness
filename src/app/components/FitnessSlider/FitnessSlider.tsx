'use client';

import React, { useState, useEffect } from 'react';
import { Dumbbell, Timer, Activity } from 'lucide-react';
import './FitnessSlider.css';

interface FitnessCategory {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  backgroundImage: string;
  colorTheme: string;
}

const FitnessSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const fitnessCategories: FitnessCategory[] = [
    {
      id: 1,
      title: 'TABATA',
      description:
        'High-intensity interval training that pushes your limits with 20 seconds of ultra-intense exercise followed by 10 seconds of rest.',
      icon: <Timer size={60} />,
      backgroundImage:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      colorTheme: 'tabata',
    },
    {
      id: 2,
      title: 'LES MILLS GRIT',
      description:
        'Athletic training workouts that quickly improve strength and build lean muscle to make you fitter, faster and stronger.',
      icon: <Dumbbell size={60} />,
      backgroundImage:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      colorTheme: 'grit',
    },
    {
      id: 3,
      title: 'AEROBICS',
      description:
        'Dynamic cardiovascular workouts that combine rhythmic aerobic exercise with stretching and strength training routines.',
      icon: <Activity size={60} />,
      backgroundImage:
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      colorTheme: 'aerobics',
    },
    {
      id: 4,
      title: 'SPINNING',
      description:
        'Indoor cycling workouts that simulate outdoor riding with varying intensity levels to build endurance and burn calories.',
      icon: <Dumbbell size={60} />,
      backgroundImage:
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      colorTheme: 'spinning',
    },
    {
      id: 5,
      title: 'YOGA',
      description:
        'Ancient practice combining physical postures, breathing techniques, and meditation to enhance flexibility and mindfulness.',
      icon: <Activity size={60} />,
      backgroundImage:
        'https://images.unsplash.com/photo-1506629905607-c7ba89d2e354?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      colorTheme: 'yoga',
    },
    {
      id: 6,
      title: 'CORE CARDIO',
      description:
        'Intense core-focused workouts that combine cardiovascular training with abdominal strengthening exercises.',
      icon: <Dumbbell size={60} />,
      backgroundImage:
        'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      colorTheme: 'core',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % fitnessCategories.length);
    }, 4000); // 4 seconds interval

    return () => clearInterval(interval);
  }, [fitnessCategories.length]);

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="fitness-slider-container">
      <div className="fitness-slider">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
            width: `${fitnessCategories.length * 100}vw`,
          }}
        >
          {fitnessCategories.map((category, index) => (
            <div
              key={category.id}
              className={`slide ${category.colorTheme} ${
                index === currentSlide ? 'active' : ''
              }`}
              onClick={() => handleSlideClick(index)}
            >
              <div className="slide-background">
                <img src={category.backgroundImage} alt={category.title} />
                <div className="overlay"></div>
              </div>

              <div className="slide-content">
                <div className="main-icon">{category.icon}</div>
                <h2 className="slide-title">{category.title}</h2>
                <p className="slide-description">{category.description}</p>
              </div>

              <div className="background-icon">{category.icon}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-indicators">
        {fitnessCategories.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleSlideClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FitnessSlider;
