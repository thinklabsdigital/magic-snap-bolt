import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { Questions } from './components/Questions';
import { Introduction } from './components/Introduction';
import { Package } from './components/Package';
import { Bonuses } from './components/Bonuses';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { Vision } from './components/Vision';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { PS } from './components/PS';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { RefundPolicy } from './components/RefundPolicy';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Questions />
      <Introduction />
      <Package />
      <Comparison />
      <About />
      <Pricing />
      <Bonuses />
      <Vision />
      <FAQ />
      <PS />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<><PrivacyPolicy /><Footer /></>} />
        <Route path="/terms-of-service" element={<><TermsOfService /><Footer /></>} />
        <Route path="/refund-policy" element={<><RefundPolicy /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;