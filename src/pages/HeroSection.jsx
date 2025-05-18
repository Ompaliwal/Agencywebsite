// HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom'; // At the top

import avatarImg1 from '../assets/avatar1.png';
import avatarImg2 from '../assets/avatar2.png';
import avatarImg3 from '../assets/avatar3.png';
import avatarImg4 from '../assets/avatar4.png';
import avatarImg5 from '../assets/avatar5.png';

function HeroSection() {
  return (
    <div className="hero-container">



      <main className="main-content">


        <h1 className="main-heading">
          Your Premium Pass To Elite<br />
          Development services.
        </h1>

        {/* <div className="wave-divider">
          <svg viewBox="0 0 800 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C100,10 200,50 300,30 C400,10 500,50 600,30 C700,10 800,50 800,30 L800,60 L0,60 Z" fill="#00B8D9" />
          </svg>
        </div>
         */}
        <div className="testimonials">
          <div className="avatar-container">
            <img src={avatarImg1} alt="Customer avatar" className="avatar" />
            <img src={avatarImg2} alt="Customer avatar" className="avatar" />
            <img src={avatarImg3} alt="Customer avatar" className="avatar" />
            <img src={avatarImg4} alt="Customer avatar" className="avatar" />
            <img src={avatarImg5} alt="Customer avatar" className="avatar" />
          </div>
          <div className="rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <p className="rating-text">Loved by 1000+ customers</p>
        </div>

        <div className="tagline-container">
          <p className="tagline-main">Supercharge Your Growth: Our Awesome Team of Developers</p>
          <p className="tagline-sub">Transforms Your Content to Skyrocket Your Success in the Digital World! 🚀</p>
        </div>

        <div className="cta-buttons">
          <Link to="/form-inquiry">
            <button className="get-started-btn main-btn">Get Started</button>
          </Link>
          <a
            href="https://cal.com/bagora-agency-pfnups/secret"
            target="_blank"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <button className="book-call-btn">Book a Call</button>
          </a>
        </div>
      </main>
    </div>
  );
}

export default HeroSection;