// src/components/PricingSection/PricingSection.tsx

import React from 'react';
import PricingCard from '../PricingCard/PricingCard';
import { CheckCircle, Clock, Users, Gift, Snowflake } from 'lucide-react';
import './PricingSection.css';

const PricingSection = () => {
  const pricingPlans = [
    {
      id: 'monthly',
      title: 'MONTHLY PLAN',
      discount: 'Discounted one time joining fee - ₦18,896',
      subscription: 'Monthly Subscription - ₦38,985',
      totalFee: 'Total Fee For New Member - ₦57,881',
      features: [
        { icon: <Gift size={20} />, text: '5% OFF joining fee when you pay online.' },
        { icon: <Clock size={20} />, text: 'All Day Access' },
        { icon: <Users size={20} />, text: '40+ Free Group Classes' },
        { icon: <CheckCircle size={20} />, text: 'NO Guest Passes' },
        { icon: <Snowflake size={20} />, text: 'Minimum of 5 days and maximum of 20 days Freeze Subscription Request.' }
      ],
      isRecommended: false,
      theme: 'light' as const
    },
    {
      id: 'quarterly',
      title: 'QUARTERLY PLAN',
      discount: 'Discounted one time joining fee - ₦18,896',
      subscription: 'Quarterly Subscription - ₦98,955',
      totalFee: 'Total Fee For New Member - ₦117,851',
      features: [
        { icon: <Gift size={20} />, text: '5% OFF joining fee when you pay online.' },
        { icon: <Clock size={20} />, text: 'All Day Access' },
        { icon: <Users size={20} />, text: '40+ Free Group Classes' },
        { icon: <CheckCircle size={20} />, text: 'One Guest Pass per Month' },
        { icon: <Snowflake size={20} />, text: 'Minimum of 5 days and maximum of 20 days Freeze Subscription Request.' }
      ],
      isRecommended: true,
      theme: 'dark' as const
    },
    {
      id: 'yearly',
      title: 'YEARLY PLAN',
      discount: 'Discounted one time joining fee - ₦18,896',
      subscription: 'Yearly Subscription - ₦377,820',
      totalFee: 'Total Fee For New Member - ₦396,716',
      features: [
        { icon: <Gift size={20} />, text: '5% OFF joining fee when you pay online.' },
        { icon: <Clock size={20} />, text: 'All Day Access' },
        { icon: <Users size={20} />, text: '40+ Free Group Classes' },
        { icon: <CheckCircle size={20} />, text: 'Two Guests Pass per Month' },
        { icon: <Snowflake size={20} />, text: 'Minimum of 5 days and maximum of 20 days Freeze Subscription Request.' }
      ],
      isRecommended: false,
      theme: 'light' as const
    }
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Choose Your Perfect Plan</h2>
          <p className="pricing-subtitle">Transform your fitness journey with our flexible membership options</p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
