import React from 'react';
import './HealthAwareness.css';

import img1 from '../assets/h2.jpg'; // Replace with your real images
import img2 from '../assets/h3.jpg';
import img3 from '../assets/h4.png';
import img4 from '../assets/h5.webp';
import img5 from '../assets/h6.jpg';
import img6 from '../assets/h7.jpg';

const HealthAwareness = () => {
  return (
    <div className="health-tips-container">
      <h1 className="headline alert">Stay Alert!</h1>
      <div className="images-row">
        <img src={img1} alt="Tip 1" />
        <img src={img2} alt="Tip 2" />
        <img src={img3} alt="Tip 3" />
      </div>

      <h1 className="headline healthy">Stay Healthy!</h1>
      <div className="images-row">
        <img src={img4} alt="Tip 4" />
        <img src={img5} alt="Tip 5" />
        <img src={img6} alt="Tip 6" />
      </div>
    </div>
  );
};

export default HealthAwareness;
