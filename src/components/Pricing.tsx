import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function Pricing() {
  const features = [
    { name: "Power of Natural Lighting", price: "₹1499" },
    { name: "Preparing for Perfect Shot", price: "₹1299" },
    { name: "Mastering Composition Techniques", price: "₹999" },
    { name: "Capturing Expressions & Moments", price: "₹1299" },
    { name: "Editing Your Photos Like a Pro", price: "₹1499" },
    { name: "Hacks for Stunning Photography", price: "₹999" },
    { name: "Sharing & Preserving Your Memories", price: "₹999" },
    { name: "Troubleshooting Common Photography Challenges", price: "₹1299" }
  ];

  const bonuses = [
    { name: "Magic Snap Essentials Kit", price: "₹1499" },
    { name: "Light Like a Pro - Cheatsheet", price: "₹1199" },
    { name: "Chottu Cheers - Spotify Playlists", price: "₹999" }
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Let's Recap!</h2>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature.name}</span>
                  </div>
                  <span className="font-semibold">{feature.price}</span>
                </div>
              ))}
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="font-bold text-xl mb-4">BONUSES!</h3>
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-purple-500 mr-2" />
                      <span>{bonus.name}</span>
                    </div>
                    <span className="font-semibold">{bonus.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Total Bundle Value</span>
                  <span className="font-bold">₹12,738</span>
                </div>
                <div className="flex justify-between items-center text-xl">
                  <span className="font-bold text-purple-600">Today's Price</span>
                  <span className="font-bold text-purple-600">₹499 Only (96% Off)</span>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-8 bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center">
              Get Started Now <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}