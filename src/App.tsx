
import React from 'react';
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

function App() {
  return (
    <>
      <Hero />
      <Introduction />
      <Features />
      <Comparison />
      <Questions />
      <Vision />
      <About />
      <Package />
      <Bonuses />
      <Pricing />
      <FAQ />
      <PS />
      <Footer />
    </>
  );
}

export default App;
