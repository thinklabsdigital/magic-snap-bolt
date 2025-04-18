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

function App() {
  return (
    <div className="min-h-screen bg-white">
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
      
      
      {/* Final CTA */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-8">P.S. Don't let another precious moment slip away!</p>
          <a href="https://pages.razorpay.com/magicsnap" className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Grab your Copy Now!
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;