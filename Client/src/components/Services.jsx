import React from 'react';
import './Service.css';
import icon1 from '../assets/icon1.png'; // Replace with actual path (heart with line)
import icon2 from '../assets/heart3.png'; // Replace with actual path (heartbeat line)
import icon3 from '../assets/icon3.png'; // Replace with actual path (anatomical heart)

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-item">
          <h3>Smart Care, Better Outcomes</h3>
          <p>
            Predictive AI transforms heart failure recovery by identifying high-risk
            patients and enabling timely, personalized care after discharge.
          </p>
          <img src={icon1} alt="Heart with wire icon" />
        </div>
        <div className="service-item">
          <h3>Next-Gen Heart Care</h3>
          <p>
            AI-powered insights enable timely, proactive care to prevent heart failure
            readmissions and improve patient outcomes.
          </p>
          <img src={icon2} alt="Heartbeat icon" />
        </div>
        <div className="service-item">
          <h3>Care That Thinks Ahead</h3>
          <p>
            AI-driven insights enable early intervention to reduce heart failure
            readmissions and improve patient outcomes.
          </p>
          <img src={icon3} alt="Anatomical heart icon" />
        </div>
      </div>
    </section>
  );
};

export default Services;
