
import React from 'react';
import { ArrowRight, HelpCircle, Heart, Star, Sparkles } from 'lucide-react';

export function PS() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100 to-rose-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/70 via-rose-50/30 to-transparent"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[5%] w-40 h-40 bg-rose-300/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-[5%] w-40 h-40 bg-rose-300/20 rounded-full filter blur-3xl"></div>
        <Star className="absolute top-10 left-[10%] w-6 h-6 text-rose-300 animate-pulse" />
        <Heart className="absolute top-20 right-[20%] w-8 h-8 text-rose-300/30 animate-float" />
        <Sparkles className="absolute bottom-20 left-[30%] w-6 h-6 text-rose-300 animate-float-gentle" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-rose-300 overflow-hidden transform hover:shadow-rose-200/50 transition-all duration-300">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-rose-500 to-rose-600 py-5 px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              P.S. You're Just One Click Away!
            </h2>
          </div>
          
          {/* Content */}
          <div className="p-8 md:p-10">
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                <span className="font-semibold text-rose-600">Here's the truth:</span> While we'd love to keep this special offer available forever, we simply can't. The bonuses alone are worth over ₹11,500, and we'll have to return to the regular pricing soon.
              </p>
              
              <p className="text-lg">
                This is your chance to transform your photography skills and capture those precious moments with your little one before they grow up too fast. 
              </p>
              
              <div className="bg-rose-50 rounded-xl p-6 border border-rose-100 my-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <HelpCircle className="w-8 h-8 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">
                      Ask yourself:
                    </h3>
                    <p className="text-gray-700">
                      What is the value of perfectly captured memories of your child's most precious years? Can you really put a price on the ability to preserve these fleeting moments forever?
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg">
                <span className="font-semibold text-rose-600">Remember:</span> With our 30-day satisfaction guarantee, there's absolutely no risk. If Magic Snap doesn't transform your photography skills, we'll refund every rupee.
              </p>
            </div>
            
            {/* Final CTA */}
            <div className="mt-10 text-center">
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
                <div className="text-sm font-normal mt-1 opacity-90">
                  Limited Time 96% Discount - Act Now!
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
