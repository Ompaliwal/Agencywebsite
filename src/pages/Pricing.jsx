import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <div className="pricing-page">
      {/* Added scrolling pricing text banner */}
      <div className="pricing-header">
        <div className="scroll-text">
          <span className="gradient-text">PRICING</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PRICING</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PRICING</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PRICING</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PRICING</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PRICING</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PRICING</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PRICING</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PRICING</span>&nbsp;&nbsp;&nbsp;
          <span className="gradient-text">PRICING</span>&nbsp;&nbsp;&nbsp;
        </div>
      </div>

      <div className="pricing-container">
        {/* Basic Plan */}
        <div className="pricing-card">
          <div className="pricing-tier">Basic</div>
          <div className="pricing-amount">$2,999</div>
          <div className="pricing-description">
            Perfect for small businesses and startups looking to establish their online presence
          </div>
          <ul className="features-list">
            <li className="feature-item"><span className="feature-icon">✓</span>Responsive Website Design</li>
            <li className="feature-item"><span className="feature-icon">✓</span>5 Pages Development</li>
            <li className="feature-item"><span className="feature-icon">✓</span>Contact Form Integration</li>
            <li className="feature-item"><span className="feature-icon">✓</span>Basic SEO Setup</li>
            <li className="feature-item"><span className="feature-icon">✓</span>1 Month Free Support</li>
          </ul>
          <button className="get-started-btn">Get Started</button>
        </div>

        {/* Premium Plan */}
        <div className="pricing-card premium">
          <div className="card-label">BEST VALUE</div>
          <div className="pricing-tier">Premium</div>
          <div className="pricing-amount">
            $5,999<span className="pricing-period">/mo</span>
          </div>
          <div className="pricing-description">
            Comprehensive solution for businesses requiring advanced features and functionality
          </div>
          <ul className="features-list">
            <li className="feature-item"><span className="feature-icon">✓</span>Custom Web Application</li>
            <li className="feature-item"><span className="feature-icon">✓</span>Mobile App Development</li>
            <li className="feature-item"><span className="feature-icon">✓</span>API Integration</li>
            <li className="feature-item"><span className="feature-icon">✓</span>Database Development</li>
            <li className="feature-item"><span className="feature-icon">✓</span>Advanced Security Features</li>
            <li className="feature-item"><span className="feature-icon">✓</span>3 Months Free Support</li>
          </ul>
          <button className="get-started-btn">Get Started</button>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card standard">
          <div className="card-label">CUSTOM</div>
          <div className="pricing-tier">Enterprise</div>
          <div className="pricing-amount">
            Custom<span className="pricing-period">/mo</span>
          </div>
          <div className="pricing-description">
            Tailored solutions for large enterprises with complex requirements and scalability needs
          </div>
          <ul className="features-list">
            <li className="feature-item"><span className="feature-icon">✓</span>Custom Enterprise Solution</li>
            <li className="feature-item"><span className="feature-icon">✓</span>Multi-platform Development</li>
            <li className="feature-item"><span className="feature-icon">✓</span>Advanced Analytics</li>
            <li className="feature-item"><span className="feature-icon">✓</span>Cloud Infrastructure</li>
            <li className="feature-item"><span className="feature-icon">✓</span>24/7 Priority Support</li>
            <li className="feature-item"><span className="feature-icon">✓</span>Dedicated Project Manager</li>
          </ul>
          <button className="get-started-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;