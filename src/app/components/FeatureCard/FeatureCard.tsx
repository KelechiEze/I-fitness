import React from 'react';
import { LucideIcon } from 'lucide-react';
import './FeatureCard.css';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <div 
      className="feature-card"
      style={{ animationDelay: `${1 + index * 0.2}s` }}
    >
      <div className="feature-icon-wrapper">
        <Icon className="feature-icon" size={24} />
      </div>
      <div className="feature-content">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
