import React from 'react';
import './ReadmissionFeatures.css';
import icon1 from '../assets/icon1.png'; // 30-Day Risk
import icon2 from '../assets/icon2.png'; // Patient Monitoring
import icon3 from '../assets/icon3.png'; // Reporting
import background from '../assets/bg-image.jpg'; // Background image (surgical/hospital scene)

const ReadmissionFeatures = () => {
  return (
    <section
      className="readmission-section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="readmission-overlay">
        <div className="readmission-card">
          <img src={icon1} alt="30-day risk icon" />
          <h3>30-Day<br />Readmission Risk<br />Prediction</h3>
        </div>
        <div className="readmission-card">
          <img src={icon2} alt="Targeted monitoring icon" />
          <h3>Targeted Patient<br />Monitoring</h3>
        </div>
        <div className="readmission-card">
          <img src={icon3} alt="Reporting icon" />
          <h3>Data-Driven<br />Reporting for<br />Hospitals</h3>
        </div>
      </div>
    </section>
  );
};

export default ReadmissionFeatures;
