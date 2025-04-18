
import React from 'react';
import { ArrowRight, Check, Package, Tag, Sparkles, Star } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hidden md:block">
          <div className="absolute top-20 left-[10%] w-64 h-64 bg-rose-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-40 right-[5%] w-80 h-80 bg-rose-200 rounded-full filter blur-3xl opacity-20 animate-float-gentle"></div>
          
          <Package className="absolute top-20 left-[15%] w-8 h-8 text-rose-200 animate-float" />
          <Star className="absolute top-40 right-[20%] w-6 h-6 text-rose-200 animate-pulse" />
          <Tag className="absolute bottom-32 left-[25%] w-7 h-7 text-rose-200 animate-float-gentle" />
          <Sparkles className="absolute bottom-40 right-[30%] w-6 h-6 text-rose-200 animate-float" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-sm rounded-full 
                        px-6 py-3 mb-6 border border-rose-500/20">
            <Package className="w-5 h-5 text-rose-500" />
            <span className="text-rose-700 font-semibold">Value Breakdown</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Let's <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Recap!</span>
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-rose-100 
                      transform hover:scale-[1.01] transition-all duration-300">
            <div className="p-8">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex justify-between items-center group">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mr-3 
                                   group-hover:bg-rose-200 transition-colors">
                        <Check className="w-4 h-4 text-rose-600" />
                      </div>
                      <span className="group-hover:text-rose-700 transition-colors">{feature.name}</span>
                    </div>
                    <span className="font-semibold text-rose-600">{feature.price}</span>
                  </div>
                ))}
                
                <div className="border-t border-rose-100 pt-6 mt-6">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-rose-500" />
                    <span>BONUSES!</span>
                  </h3>
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="flex justify-between items-center mb-3 group">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mr-3
                                     group-hover:bg-rose-200 transition-colors">
                          <Star className="w-4 h-4 text-rose-600" />
                        </div>
                        <span className="group-hover:text-rose-700 transition-colors">{bonus.name}</span>
                      </div>
                      <span className="font-semibold text-rose-600">{bonus.price}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-rose-100 pt-6 mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-lg">Total Bundle Value</span>
                    <span className="font-bold text-lg">₹12,738</span>
                  </div>
                  <div className="flex justify-between items-center text-xl bg-rose-50 p-4 rounded-xl">
                    <span className="font-bold text-rose-600">Today's Price</span>
                    <div className="flex flex-col items-end">
                      <span className="text-gray-500 line-through text-sm">₹12,738</span>
                      <span className="font-bold text-rose-600">₹499 Only</span>
                      <span className="text-xs text-rose-500 font-medium">96% Off</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-8 btn-primary group">
                <span>Get Started Now</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
