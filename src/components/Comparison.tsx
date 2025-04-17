
import React, { useState } from 'react';
import { CheckCircle2, XCircle, Camera, Star, Image, Sun, Sparkles, ArrowRight } from 'lucide-react';

function ComparisonCard({ title, items, icon, isPrimary = true }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative overflow-hidden rounded-2xl p-8 lg:p-10 transition-all duration-500 
                ${isPrimary 
                  ? 'bg-gradient-to-br from-rose-50 to-white border-2 border-rose-200 shadow-xl' 
                  : 'bg-white/60 border border-rose-100/50 shadow-lg'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background particle effects */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-full filter blur-3xl opacity-20 
                    transition-all duration-700 ${isHovered ? 'scale-150' : 'scale-100'}`}></div>
      
      <div className="relative z-10">
        <div className={`w-16 h-16 ${isPrimary ? 'bg-rose-100' : 'bg-gray-100'} rounded-2xl flex items-center justify-center mb-6`}>
          <div className={`${isPrimary ? 'text-rose-600' : 'text-gray-400'}`}>
            {icon}
          </div>
        </div>
        
        <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2
                      ${isPrimary ? 'text-rose-600' : 'text-gray-400'}`}>
          {isPrimary ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
          {title}
        </h3>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-start p-3 rounded-lg transition-all duration-300
                        ${isHovered ? 'transform translate-x-2' : ''}
                        ${isPrimary ? 'hover:bg-rose-50/80' : 'hover:bg-gray-50/80'}`}
            >
              {isPrimary ? (
                <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0 text-rose-500" />
              ) : (
                <XCircle className="w-6 h-6 mr-3 flex-shrink-0 text-rose-300" />
              )}
              <p className={`${isPrimary ? 'text-gray-700' : 'text-gray-500 line-through decoration-rose-200'}`}>
                {item}
              </p>
            </div>
          ))}
        </div>
        
        {isPrimary && (
          <div className="mt-8">
            <button className="group bg-rose-600 text-white px-6 py-3 rounded-full 
                             font-medium inline-flex items-center gap-2 
                             hover:bg-rose-500 transition-all duration-300
                             shadow-lg shadow-rose-200/50">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function Comparison() {
  const withItems = [
    "Create crisp, vibrant photos using smartphone cameras through natural light mastery",
    "Create stunning backdrops using bedsheets and window light in 30 minutes",
    "Never miss first steps or messy meals with our spontaneous shooting strategies",
    "Capture genuine smiles and candid moments using patience-driven techniques",
    "Master golden hour positioning and diffused light techniques",
    "Achieve professional outcomes using household items"
  ];
  
  const withoutItems = [
    "Settle for grainy, low-quality images that fail to capture true details",
    "Drag cranky toddlers to crowded studios for underwhelming results",
    "Blurry action shots and forgotten camera during precious milestones",
    "End up with stiff, unnatural portraits from rushed sessions",
    "Struggle with unflattering midday glare or dim indoor lighting",
    "Waste money on expensive lenses and lighting kits"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
      {/* Animated shapes in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hidden md:block">
          <div className="absolute top-20 left-[10%] w-64 h-64 bg-rose-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-40 right-[5%] w-80 h-80 bg-rose-200 rounded-full filter blur-3xl opacity-20 animate-float-gentle"></div>
          
          <Camera className="absolute top-20 left-[15%] w-8 h-8 text-rose-200 animate-float" />
          <Star className="absolute top-40 right-[20%] w-6 h-6 text-rose-200 animate-pulse" />
          <Image className="absolute bottom-32 left-[25%] w-7 h-7 text-rose-200 animate-float-gentle" />
          <Sun className="absolute top-1/3 right-[15%] w-8 h-8 text-rose-200 animate-pulse" />
          <Sparkles className="absolute bottom-40 right-[30%] w-6 h-6 text-rose-200 animate-float" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-sm rounded-full 
                         px-6 py-3 mb-6 border border-rose-500/20">
            <Sparkles className="w-5 h-5 text-rose-500" />
            <span className="text-rose-700 font-semibold">The Difference</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Experience the <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Transformation</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how MAGIC SNAP transforms your photography experience and helps you capture 
            precious moments that would otherwise be lost forever.
          </p>
        </div>

        {/* Comparison cards with enhanced visual appeal */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
          <ComparisonCard 
            title="With MAGIC SNAP" 
            items={withItems}
            icon={<Camera className="w-8 h-8" />}
          />
          
          <ComparisonCard 
            title="Without Magic Snap" 
            items={withoutItems}
            icon={<Camera className="w-8 h-8" />}
            isPrimary={false}
          />
        </div>
        
        {/* Benefits highlight */}
        <div className="max-w-4xl mx-auto mt-16 text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-rose-100 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join <span className="text-rose-600">thousands of parents</span> who are capturing childhood's most precious moments!
          </h3>
          <p className="text-gray-600 mb-6">
            Don't let another magical moment slip by uncaptured. Transform your phone into a professional 
            camera with our easy-to-follow techniques.
          </p>
          <button className="group bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-full 
                           text-lg font-medium inline-flex items-center gap-3 
                           transform hover:scale-105 transition-all duration-300
                           shadow-lg shadow-rose-200">
            Start Your Photography Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
