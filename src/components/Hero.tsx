import React from 'react';
import { ArrowRight, Camera, Sparkles, BookOpen, Clock, Footprints, Star, Heart } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-950/50 to-gray-900/50"></div>

      {/* Animated background patterns */}
      <div className="absolute inset-0">
        {/* Main pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-curved-pattern animate-float-gentle"></div>
        </div>

        {/* Floating elements */}
        <div className="block">
          {/* Stars */}
          <Star className="absolute top-20 left-[20%] w-6 h-6 text-rose-300/20 animate-float" />
          <Star className="absolute top-40 right-[25%] w-4 h-4 text-rose-300/20 animate-float-gentle" />
          <Star className="absolute bottom-32 left-[15%] w-5 h-5 text-rose-300/20 animate-pulse" />

          {/* Hearts */}
          <Heart className="absolute top-32 right-[15%] w-5 h-5 text-rose-300/20 animate-float" />
          <Heart className="absolute bottom-40 right-[20%] w-4 h-4 text-rose-300/20 animate-pulse" />

          {/* Sparkles */}
          <Sparkles className="absolute top-60 left-[30%] w-4 h-4 text-rose-300/20 animate-float-gentle" />
          <Sparkles className="absolute bottom-20 right-[30%] w-6 h-6 text-rose-300/20 animate-float" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Pre-headline */}
            <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-rose-500/20 mb-8">
              <Footprints className="w-5 h-5 text-rose-400 animate-pulse" />
              <p className="text-rose-300 font-medium text-sm md:text-base">
                Tired of <span className="text-rose-400 font-semibold">blurry, dim photos</span> of your child's 
                <span className="text-rose-400 font-semibold"> FIRST Steps</span>?
              </p>
            </div>

            {/* Main Headline */}
            <div className="max-w-4xl mb-8">
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-white tracking-tight drop-shadow-2xl">
                Capture <span className="bg-gradient-to-r from-rose-400 to-rose-500 bg-clip-text text-transparent font-bold">Stunning Baby Photos</span> Using Your Phone in <span className="bg-gradient-to-r from-rose-400 to-rose-500 bg-clip-text text-transparent font-bold relative inline-block">
                  Just 1 Hour
                  <span className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full opacity-90 transform animate-pulse-slow"></span>
                </span>
              </h1>
            </div>

            {/* Post-headline */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-12">
              Discover how to transform <span className="text-rose-300">messy playtime</span> into 
              <span className="text-rose-300"> frame-worthy portraits</span>, no fancy gear or editing PhD needed!
            </p>

            {/* Main Image */}
            <div className="w-full max-w-4xl relative mb-12">
              <div className="aspect-[16/9] relative rounded-3xl overflow-hidden shadow-2xl shadow-rose-900/20 
                            transform hover:scale-[1.02] transition-transform">
                <img 
                  src="https://ik.imagekit.io/u8qjiw2p1/Magic%20snap/freepik__the-style-is-candid-image-photography-with-natural__7180.png?auto=format&fit=crop&q=80"
                  alt="Mother and baby sharing a joyful moment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>

              {/* Floating Images */}
              <div className="hidden md:block">
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-2xl overflow-hidden shadow-xl
                              transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://ik.imagekit.io/u8qjiw2p1/Magic%20snap/freepik__the-style-is-candid-image-photography-with-natural__21291.png?auto=format&fit=crop&q=80"
                    alt="Baby laughing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl
                              transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://ik.imagekit.io/u8qjiw2p1/Magic%20snap/freepik__the-style-is-candid-image-photography-with-natural__11403.png?auto=format&fit=crop&q=80"
                    alt="Mother kissing baby"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Feature Pills - Updated for mobile 2-column layout */}
            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 mb-12 max-w-lg md:max-w-none mx-auto">
              {[
                { icon: <Camera className="w-4 h-4" />, text: "Natural Lighting Mastery" },
                { icon: <Sparkles className="w-4 h-4" />, text: "DSLR Quality Photos" },
                { icon: <BookOpen className="w-4 h-4" />, text: "Easy Follow Guide" },
                { icon: <Clock className="w-4 h-4" />, text: "Skip Pricey Photoshoots" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-full px-4 md:px-6 py-3 
                           border border-gray-700 flex items-center gap-2 md:gap-3
                           hover:bg-gray-700/50 hover:border-rose-500/50 transition-all
                           transform hover:scale-105 cursor-pointer"
                >
                  <span className="text-rose-400">{feature.icon}</span>
                  <span className="text-gray-300 text-xs md:text-base font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <a href="https://pages.razorpay.com/magicsnap" className="group bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-full 
                               text-lg font-medium inline-flex items-center gap-3 
                               transform hover:scale-105 transition-all duration-300
                               shadow-lg shadow-rose-900/50">
                Never Miss a Giggle Again!
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-gray-400 text-sm">
                Join <span className="text-rose-400">1000s</span> of happy parents capturing beautiful moments & documenting their milestones!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}