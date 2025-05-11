import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <h1 className="hero-title">Heart shielders</h1>
      <p className="hero-subtitle">Prevent the Next Admission with AI-Driven Insights</p>
      <div className="hero-tagline">
        Caring for you is our priority
        <div className="underline">
          <svg viewBox="0 0 500 100">
            <path d="M 0 100 Q 250 -50 500 100" stroke="#000" strokeWidth="3" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
