import React from 'react';
import { Camera, Heart, Star, Award, Clock, Users, BookOpen, Lightbulb, Sparkles, ArrowRight } from 'lucide-react';

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl 
                    transition-all duration-300 transform hover:scale-[1.02]
                    border border-rose-100 hover:border-rose-200 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 
                      bg-rose-50 rounded-full text-rose-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block">
          <Star className="absolute top-20 left-[10%] w-6 h-6 text-rose-200 animate-float" />
          <Heart className="absolute bottom-40 right-[15%] w-5 h-5 text-rose-200 animate-pulse" />
          <Sparkles className="absolute top-1/2 right-[20%] w-4 h-4 text-rose-200 animate-float-gentle" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-sm rounded-full 
                         px-6 py-3 mb-6 border border-rose-500/20">
            <Camera className="w-5 h-5 text-rose-500" />
            <span className="text-rose-900 font-medium">Transform Your Photography</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            With <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Magic Snap,</span>Turn Your Balcony into a <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Baby Photo Studio</span> in under
            <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent"> 60 Seconds!</span>
          </h2>
          
          
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 lg:gap-8 max-w-7xl mx-auto">


          <FeatureCard
            icon={<Camera className="w-8 h-8" />}
            title="Achieve Flawless, Bright Images"
            description="Master natural lighting techniques to capture vibrant, clear photos that make your baby's features shine."
          />
          <FeatureCard
            icon={<Heart className="w-8 h-8" />}
            title="Build Beautiful Albums"
            description="Create stunning collections of bright, joyful images that tell your baby's unique story."
          />
          
          
          <FeatureCard
            icon={<Clock className="w-8 h-8" />}
            title="Quick & Easy Process"
            description="Transform any space into a photo studio in minutes, perfect for busy parents."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Share with Loved Ones"
            description="Create frame-worthy photos that family and friends will absolutely adore."
          />
          <FeatureCard
            icon={<BookOpen className="w-8 h-8" />}
            title="Step-by-Step Guidance"
            description="Follow our easy-to-understand guide to achieve professional results consistently."
          />
          <FeatureCard
            icon={<Lightbulb className="w-8 h-8" />}
            title="Creative Techniques"
            description="Learn insider tricks to enhance your photos using everyday household items."
          />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a href="https://pages.razorpay.com/magicsnap" className="group bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full 
                           text-lg font-medium inline-flex items-center gap-3 
                           transform hover:scale-105 transition-all duration-300
                           shadow-lg shadow-rose-200">
            Start Capturing Beautiful Moments
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}