import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { Pricing } from './components/Pricing';
import { Bonuses } from './components/Bonuses';
import { Questions } from './components/Questions';
import { FAQ } from './components/FAQ';
import { PS } from './components/PS';
import { Vision } from './components/Vision';
import { About } from './components/About';
import { Package } from './components/Package';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { RefundPolicy } from './components/RefundPolicy';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={
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
            <PS />
            <Footer />
          </>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;