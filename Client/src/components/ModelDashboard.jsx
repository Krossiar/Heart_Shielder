// src/components/ModelDashboard.jsx
import React, { useEffect, useState } from 'react';
import './ModelDashboard.css';
import axios from 'axios';

const ModelDashboard = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    axios.get('https://heart-backend-em2f.onrender.com')
      .then(res => setMetrics(res.data))
      .catch(err => console.error('Failed to load metrics:', err));
  }, []);

  if (!metrics) return <p>Loading model performance...</p>;

  return (
    <div className="dashboard">
      <h2>📊 Model Performance by Class</h2>
      <div className="metrics">
        <div className="metric-card">
          <h3>Class 0 - Precision</h3>
          <p>{(metrics.class_0.precision * 100).toFixed(2)}%</p>
        </div>
        <div className="metric-card">
          <h3>Class 0 - Recall</h3>
          <p>{(metrics.class_0.recall * 100).toFixed(2)}%</p>
        </div>
        <div className="metric-card">
          <h3>Class 0 - F1</h3>
          <p>{(metrics.class_0.f1 * 100).toFixed(2)}%</p>
        </div>
        <div className="metric-card">
          <h3>Class 1 - Precision</h3>
          <p>{(metrics.class_1.precision * 100).toFixed(2)}%</p>
        </div>
        <div className="metric-card">
          <h3>Class 1 - Recall</h3>
          <p>{(metrics.class_1.recall * 100).toFixed(2)}%</p>
        </div>
        <div className="metric-card">
          <h3>Class 1 - F1</h3>
          <p>{(metrics.class_1.f1 * 100).toFixed(2)}%</p>
        </div>
        <div className="metric-card">
          <h3>Overall Accuracy</h3>
          <p>{(metrics.accuracy * 100).toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};

export default ModelDashboard;
