import React from 'react';
import { Dumbbell, Users, Building } from 'lucide-react';
import FeatureCard from '../FeatureCard/FeatureCard';
import './FitnessSection.css';

const FitnessSection = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Wide Range of Fitness Programs",
      description: "Our timetable offers a wide range of low to high-intensity fitness programmes to suit your fitness lifestyle. There's something for everyone!"
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Enjoy a sense of belonging in a community that supports your fitness goals and reminds you that you are not alone!"
    },
    {
      icon: Building,
      title: "Ultra-Modern Facilities",
      description: "We have over 200 professionally certified personal trainers and ultra-modern facilities across all our branches in Lagos, Port Harcourt, Abuja and Ibadan."
    }
  ];

  return (
    <section className="fitness-section">
      <div className="fitness-container">
        <div className="fitness-content">
          <div className="fitness-image-section">
            <img 
              src="/ftnessimagu.jpg" 
              alt="Fitness gym with spinning bikes and people working out"
              className="fitness-image"
            />
          </div>
          
          <div className="fitness-info-section">
            <div className="fitness-header">
              <h3 className="fitness-brand">WHY!-FITNESS</h3>
              <h2 className="fitness-title">Unique Experiences Tailored To Your Lifestyle</h2>
            </div>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessSection;
