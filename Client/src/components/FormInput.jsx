import React, { useState } from 'react';
import axios from 'axios';
import './FormInput.css';
import ResultDisplay from './ResultDisplay';

const FormInput = () => {
  const [form, setForm] = useState({
    age: '',
    gender_enc: '',
    num_prev_adm: '',
    los: '',
    num_diagnoses: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      age: parseFloat(form.age),
      gender_enc: parseInt(form.gender_enc),
      num_prev_adm: parseInt(form.num_prev_adm),
      los: parseFloat(form.los),
      num_diagnoses: parseInt(form.num_diagnoses)
    };

    try {
      const res = await axios.post('http://127.0.0.1:5000/predict', payload);
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert('Error: Could not fetch prediction');
    }
  };

  return (
      <div className="form-container">
      <h2>Heart Failure Readmission Predictor</h2>
      <form onSubmit={handleSubmit}>
        <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required />
        <select name="gender_enc" value={form.gender_enc} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="0">Female</option>
          <option value="1">Male</option>
        </select>
        <input name="num_prev_adm" type="number" placeholder="# Previous Admissions" value={form.num_prev_adm} onChange={handleChange} required />
        <input name="los" type="number" placeholder="Length of Stay (days)" value={form.los} onChange={handleChange} required />
        <input name="num_diagnoses" type="number" placeholder="# Diagnoses" value={form.num_diagnoses} onChange={handleChange} required />
        <button type="submit">Predict</button>
      </form>

      {result && <ResultDisplay result={result} />}
    </div>
  );
};

export default FormInput;
