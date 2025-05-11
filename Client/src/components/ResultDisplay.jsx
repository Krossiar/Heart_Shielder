import React from 'react';
import './ResultDisplay.css';

const ResultDisplay = ({ result }) => {
  return (
    <div className="result-card">
      <h3>Prediction: <span className={result.prediction ? 'positive' : 'negative'}>
        {result.prediction ? 'Likely Readmission' : 'No Readmission'}
      </span></h3>
      <p>Probability: {(result.probability * 100).toFixed(2)}%</p>
    </div>
  );
};

export default ResultDisplay;
