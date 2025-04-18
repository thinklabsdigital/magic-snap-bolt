import React from 'react';
import { ArrowRight, Check, Package, Tag, Sparkles, Star, Clock } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-b from-rose-100 to-rose-200 relative overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/90 via-rose-50/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-50/60 via-white/40 to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="block">
          <div className="absolute top-20 left-[10%] w-64 h-64 bg-rose-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-40 right-[5%] w-80 h-80 bg-rose-200 rounded-full filter blur-3xl opacity-20 animate-float-gentle"></div>

          <Package className="absolute top-20 left-[15%] w-8 h-8 text-rose-200 animate-float" />
          <Star className="absolute top-40 right-[20%] w-6 h-6 text-rose-200 animate-pulse" />
          <Tag className="absolute bottom-32 left-[25%] w-7 h-7 text-rose-200 animate-float-gentle" />
          <Sparkles className="absolute bottom-40 right-[30%] w-6 h-6 text-rose-200 animate-float" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-sm rounded-full 
                        px-6 py-3 mb-4 border border-rose-500/20">
            <Clock className="w-5 h-5 text-rose-500" />
            <span className="text-rose-700 font-semibold">Limited Time Offer - 96% OFF</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            Here's <span className="text-rose-600">Everything You Get</span> When You Sign Up Today
          </h2>
        </div>

        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-rose-100 
                      transform hover:scale-[1.01] transition-all duration-300">

          {/* Features List */}
          <div className="p-8">
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <Check className="w-5 h-5 text-rose-500 mr-2" />
              Core Program Features:
            </h3>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex justify-between items-center group py-2 border-b border-rose-50">
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
            </div>

            {/* Bonuses Section */}
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <Sparkles className="w-5 h-5 text-rose-500 mr-2" />
              Exclusive Bonuses:
            </h3>

            <div className="space-y-4 mb-8">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex justify-between items-center group py-2 border-b border-rose-50">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mr-3
                                 group-hover:bg-rose-200 transition-colors">
                      <Star className="w-4 h-4 text-rose-600" />
                    </div>
                    <span className="group-hover:text-rose-700 transition-colors">Bonus {index + 1}: {bonus.name}</span>
                  </div>
                  <span className="font-semibold text-rose-600">{bonus.price}</span>
                </div>
              ))}
            </div>

            {/* Total Value */}
            <div className="bg-rose-50 p-6 rounded-xl mb-6">
              <div className="text-center">
                <p className="font-semibold mb-3 line-through decoration-rose-500 decoration-2">Total Value: ₹12,738</p>
                <div className="mb-1">
                  <h3 className="text-2xl font-bold text-rose-600">Today's Price: ₹499</h3>
                  <p className="text-sm text-rose-500">96% Discount - Limited Time Offer!</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a href="https://pages.razorpay.com/magicsnap" className="w-full py-4 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold 
                             shadow-lg shadow-rose-200/50 group transition-all duration-300 flex items-center justify-center">
              Click Here to Buy Magic Snap Method
              <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Footer Badges */}
          <div className="grid grid-cols-4 border-t border-rose-100">
            <div className="py-4 px-2 flex flex-col items-center justify-center text-center border-r border-rose-100">
              <Package className="w-5 h-5 text-rose-500 mb-1" />
              <span className="text-xs text-gray-600">Secure Payment</span>
            </div>
            <div className="py-4 px-2 flex flex-col items-center justify-center text-center border-r border-rose-100">
              <Clock className="w-5 h-5 text-rose-500 mb-1" />
              <span className="text-xs text-gray-600">Instant Access</span>
            </div>
            <div className="py-4 px-2 flex flex-col items-center justify-center text-center border-r border-rose-100">
              <Sparkles className="w-5 h-5 text-rose-500 mb-1" />
              <span className="text-xs text-gray-600">Bonus Content</span>
            </div>
            <div className="py-4 px-2 flex flex-col items-center justify-center text-center">
              <Check className="w-5 h-5 text-rose-500 mb-1" />
              <span className="text-xs text-gray-600">24/7 Support</span>
            </div>
          </div>

          {/* Parents enrolled - Moved to bottom */}
          <div className="bg-rose-50/80 p-4 text-center">
            <p className="text-sm text-rose-600 flex items-center justify-center gap-1">
              <Star className="w-4 h-4" />
              <span>3,247 parents already enrolled</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}