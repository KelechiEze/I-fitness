import React from 'react';
import './PricingCard.css';

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface PricingCardProps {
  // id: string; ❌ Removed since it's unused
  title: string;
  discount: string;
  subscription: string;
  totalFee: string;
  features: Feature[];
  isRecommended: boolean;
  theme: 'light' | 'dark';
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  discount,
  subscription,
  totalFee,
  features,
  isRecommended,
  theme
}) => {
  return (
    <div className={`pricing-card ${theme} ${isRecommended ? 'recommended' : ''}`}>
      {isRecommended && (
        <div className="recommended-badge">
          <span>MOST POPULAR</span>
        </div>
      )}
      
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <p className="discount-text">{discount}</p>
      </div>
      
      <div className="pricing-info">
        <div className="subscription-price">
          <span className="price-label">Monthly Subscription</span>
          <span className="price-amount">{subscription.split('–')[1]?.trim()}</span>
        </div>
        <div className="total-fee">
          <span className="total-label">{totalFee}</span>
        </div>
      </div>
      
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">
              {feature.icon}
            </div>
            <span className="feature-text">{feature.text}</span>
          </div>
        ))}
      </div>
      
      <button className="signup-button">
        <span>SIGN UP</span>
        <div className="button-shine"></div>
      </button>
    </div>
  );
};

export default PricingCard;
