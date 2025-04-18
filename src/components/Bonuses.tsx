
import React from 'react';
import { Gift, FileText, Music, ArrowRight, Sparkles, Star, Check, Clock } from 'lucide-react';

export function Bonuses() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="block">
          <div className="absolute top-20 left-[10%] w-64 h-64 bg-rose-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-40 right-[5%] w-80 h-80 bg-rose-200 rounded-full filter blur-3xl opacity-20 animate-float-gentle"></div>

          <Gift className="absolute top-20 left-[15%] w-8 h-8 text-rose-200 animate-float" />
          <Star className="absolute top-40 right-[20%] w-6 h-6 text-rose-200 animate-pulse" />
          <Music className="absolute bottom-32 left-[25%] w-7 h-7 text-rose-200 animate-float-gentle" />
          <FileText className="absolute top-1/3 right-[15%] w-8 h-8 text-rose-200 animate-pulse" />
          <Sparkles className="absolute bottom-40 right-[30%] w-6 h-6 text-rose-200 animate-float" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-sm rounded-full 
                         px-6 py-3 mb-6 border border-rose-500/20">
            <Gift className="w-5 h-5 text-rose-500" />
            <span className="text-rose-700 font-semibold">Limited Time Offer</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Fast Action <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Bonuses</span>
          </h2>

          {/* Fast Action Banner */}
          <div className="bg-rose-50/80 backdrop-blur-sm rounded-full px-6 py-3 inline-flex items-center justify-center border border-rose-300/50 mb-8">
            <Clock className="w-5 h-5 text-rose-600 mr-2" />
            <p className="text-rose-700 font-medium">
              For the next <span className="text-rose-600 font-bold">10 people</span> who take action today!
            </p>
          </div>
          
          {/* Total Value Pill */}
          <div className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 rounded-full px-6 py-3 mb-8 shadow-lg">
            <p className="text-white font-bold flex items-center">
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              Total Value: ₹11,500
            </p>
          </div>
        </div>

        {/* Bonus Cards in New Design */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-b from-indigo-900 to-indigo-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-indigo-200/30 transform hover:translate-y-[-8px] transition-all duration-300">
            <div className="h-28 bg-gradient-to-r from-indigo-600 to-indigo-500 flex items-center justify-center p-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="p-6 text-center">
              <div className="inline-block bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full -mt-10 mb-4 relative">
                Valued at ₹1,500
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                49 Winning Product Niches
              </h3>
              <p className="text-indigo-100 mb-4 text-sm">
                Discover proven niches that convert! Save countless hours of research with our carefully curated list of winning product opportunities.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-indigo-200 text-sm">
                  <Check className="w-4 h-4 mr-2 text-indigo-300" />
                  <span>Proven market demand</span>
                </div>
                <div className="flex items-center text-indigo-200 text-sm">
                  <Check className="w-4 h-4 mr-2 text-indigo-300" />
                  <span>Target audience insights</span>
                </div>
              </div>
              <a href="https://pages.razorpay.com/magicsnap" className="block w-full py-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg font-medium transition-colors">
                Claim Now
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-b from-blue-900 to-blue-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-blue-200/30 transform hover:translate-y-[-8px] transition-all duration-300">
            <div className="h-28 bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center p-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="p-6 text-center">
              <div className="inline-block bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full -mt-10 mb-4 relative">
                Valued at ₹5,000
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Step by Step Training
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get comprehensive training that walks you through the entire process of launching and scaling your digital products.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-blue-200 text-sm">
                  <Check className="w-4 h-4 mr-2 text-blue-300" />
                  <span>Video tutorials</span>
                </div>
                <div className="flex items-center text-blue-200 text-sm">
                  <Check className="w-4 h-4 mr-2 text-blue-300" />
                  <span>Implementation tips</span>
                </div>
              </div>
              <a href="https://pages.razorpay.com/magicsnap" className="block w-full py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-medium transition-colors">
                Claim Now
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-b from-purple-900 to-purple-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-purple-200/30 transform hover:translate-y-[-8px] transition-all duration-300">
            <div className="h-28 bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center p-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                <Gift className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="p-6 text-center">
              <div className="inline-block bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full -mt-10 mb-4 relative">
                Valued at ₹5,000
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                No Restrictions
              </h3>
              <p className="text-purple-100 mb-4 text-sm">
                Launch unlimited products! Explore multiple ideas and markets without any restrictions on your creativity.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-purple-200 text-sm">
                  <Check className="w-4 h-4 mr-2 text-purple-300" />
                  <span>Unlimited products</span>
                </div>
                <div className="flex items-center text-purple-200 text-sm">
                  <Check className="w-4 h-4 mr-2 text-purple-300" />
                  <span>Multiple niches</span>
                </div>
              </div>
              <a href="https://pages.razorpay.com/magicsnap" className="block w-full py-3 bg-purple-500 hover:bg-purple-400 text-white rounded-lg font-medium transition-colors">
                Claim Now
              </a>
            </div>
          </div>
        </div>

        {/* Limited Time Offer */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-rose-50 border border-rose-200 rounded-lg px-6 py-3 shadow-md">
            <div className="flex items-center justify-center gap-2 text-rose-700">
              <Clock className="w-5 h-5 text-rose-600" />
              <p className="font-semibold">Limited Time Offer - Only 10 spots available!</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="https://pages.razorpay.com/magicsnap" className="group bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-full 
                           text-lg font-medium inline-flex items-center gap-3 
                           transform hover:scale-105 transition-all duration-300
                           shadow-lg shadow-rose-200">
            <span>Claim All Bonuses Now!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
