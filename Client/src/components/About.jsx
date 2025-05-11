import React from 'react';
import './About.css';
import nurseImage from '../assets/h1.jpg'; // Replace with your actual path
import infographic from '../assets/stats.jpg'; // Replace with your actual path

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <div className="text-content">
          <h2>About us</h2>
          <p>
            Empowering Healthcare with AI –<br />
            Anticipate, Act, Avoid Readmission.
          </p>
        </div>
        <div className="image-box">
          <img src={nurseImage} alt="Nurse with patient" />
        </div>
      </div>

      <div className="about-body">
        <div className="infographic">
          <img src={infographic} alt="Heart Disease & Stroke Statistics" />
        </div>
        <div className="bullet-points">
          <ul>
            <li>We use AI/ML to predict 30-day readmissions in heart failure patients.</li>
            <li>Our solution analyzes clinical data to identify high-risk individuals at discharge.</li>
            <li>This enables proactive care and targeted interventions.</li>
            <li>We utilize MIMIC-III datasets and ICD-9 codes for model development.</li>
            <li>Our goal is to reduce mortality, improve outcomes, and support healthcare systems.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
