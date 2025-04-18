import React from 'react';
import { ArrowRight } from 'lucide-react';

export function PS() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100 to-rose-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/70 via-rose-50/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-rose-300 overflow-hidden transform hover:shadow-rose-200/50 transition-all duration-300">
          {/* Content */}
          <div className="p-8 md:p-10 text-center">
            <h2 className="text-3xl font-display font-bold text-rose-600 mb-6">
              Don't let another precious moment slip away!
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Start capturing stunning memories today—your journey to beautiful photography begins now!
            </p>

            {/* Final CTA */}
            <div className="mt-8">
              <a 
                href="https://pages.razorpay.com/magicsnap" 
                className="inline-block bg-rose-600 text-white px-10 py-5 rounded-xl text-xl font-bold 
                         shadow-lg shadow-rose-300/30 hover:bg-rose-500 
                         transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-3">
                  <span>Get Magic Snap Now - Only ₹499 + GST</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}