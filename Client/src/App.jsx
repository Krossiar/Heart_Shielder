import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormInput from './components/FormInput';
import ModelDashboard from './components/ModelDashboard';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import HealthAwareness from './components/HealthAwareness';
import LoginPage from './components/LoginPage';
import './App.css';

// Home page layout
function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <HealthAwareness />
      <ContactUs />
      <Footer />
    </>
  );
}

function App() {
  // Dynamically load the chatbot scripts
  return (
    <Router>
      <div className="font-sans bg-white text-gray-800">
        <Routes>
          {/* Only the homepage has full layout */}
          <Route path="/" element={<HomePage />} />

          {/* Other pages have no header/footer */}
          <Route path="/about" element={<About />} />
          <Route path="/checkup" element={<div className="centered-page"><FormInput /></div>} />
          <Route path="/model" element={<ModelDashboard />} />
          <Route path="/Login" element={<LoginPage />} />

          {/* Optional: 404 page */}
          <Route path="*" element={<div style={{ padding: '2rem' }}>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
