
import React, { useState } from 'react';
import { CheckCircle2, XCircle, Camera, Star, Image, Sun, Sparkles, ArrowRight } from 'lucide-react';

function ComparisonCard({ title, items, icon, isPrimary = true }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative overflow-hidden rounded-2xl p-6 lg:p-8 transition-all duration-500 h-full
                ${isPrimary 
                  ? 'bg-gradient-to-br from-rose-50 to-white border-2 border-rose-200 shadow-xl transform hover:-translate-y-2' 
                  : 'bg-white/60 border border-rose-100/50 shadow-lg transform hover:translate-y-2'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background particle effects */}
      <div className={`absolute top-0 right-0 w-48 h-48 bg-rose-100 rounded-full filter blur-3xl opacity-20 
                    transition-all duration-700 ${isHovered ? 'scale-150' : 'scale-100'}`}></div>
      
      <div className="relative z-10">
        <div className={`w-16 h-16 ${isPrimary ? 'bg-rose-100' : 'bg-gray-100'} rounded-full flex items-center justify-center mb-6 mx-auto transform transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
          <div className={`${isPrimary ? 'text-rose-600' : 'text-gray-400'}`}>
            {icon}
          </div>
        </div>
        
        <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 justify-center
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
                <CheckCircle2 className={`w-6 h-6 mr-3 flex-shrink-0 text-rose-500 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
              ) : (
                <XCircle className={`w-6 h-6 mr-3 flex-shrink-0 text-rose-300 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
              )}
              <p className={`${isPrimary ? 'text-gray-700' : 'text-gray-500 line-through decoration-rose-200'}`}>
                {item}
              </p>
            </div>
          ))}
        </div>
        
        {isPrimary && (
          <div className="mt-8 text-center">
           
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

  // Interactive elements
  const [activeTab, setActiveTab] = useState('with');

  return (
    <section className="py-20 bg-gradient-to-br from-white via-rose-50 to-white relative overflow-hidden">
      {/* Enhanced animated shapes in background */}
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
        {/* Enhanced Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-sm rounded-full 
                         px-6 py-3 mb-6 border border-rose-500/20 animate-pulse-slow">
            <Sparkles className="w-5 h-5 text-rose-500" />
            <span className="text-rose-700 font-semibold">The Difference</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Experience the <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Transformation</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            See how MAGIC SNAP transforms your photography experience and helps you capture 
            precious moments that would otherwise be lost forever.
          </p>
          
          {/* Mobile Tab Switcher (visible only on small screens) */}
          <div className="md:hidden bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-inner flex mb-8 mx-auto max-w-xs border border-rose-100">
            <button 
              onClick={() => setActiveTab('with')}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all ${
                activeTab === 'with' 
                  ? 'bg-rose-500 text-white shadow-lg' 
                  : 'text-gray-500 hover:text-rose-500'
              }`}
            >
              With MAGIC SNAP
            </button>
            <button 
              onClick={() => setActiveTab('without')}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all ${
                activeTab === 'without' 
                  ? 'bg-gray-500 text-white shadow-lg' 
                  : 'text-gray-500 hover:text-gray-600'
              }`}
            >
              Without MAGIC SNAP
            </button>
          </div>
        </div>

        {/* Comparison cards with responsive layout - Side by side on desktop, tabbed on mobile */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
          <ComparisonCard 
            title="With MAGIC SNAP" 
            items={withItems}
            icon={<Camera className="w-8 h-8" />}
          />
          
          <ComparisonCard 
            title="Without MAGIC SNAP" 
            items={withoutItems}
            icon={<Camera className="w-8 h-8" />}
            isPrimary={false}
          />
        </div>
        
        {/* Mobile view - tabbed content */}
        <div className="md:hidden max-w-md mx-auto">
          {activeTab === 'with' ? (
            <ComparisonCard 
              title="With MAGIC SNAP" 
              items={withItems}
              icon={<Camera className="w-8 h-8" />}
            />
          ) : (
            <ComparisonCard 
              title="Without MAGIC SNAP" 
              items={withoutItems}
              icon={<Camera className="w-8 h-8" />}
              isPrimary={false}
            />
          )}
        </div>
        
        {/* Enhanced Benefits highlight */}
        <div className="max-w-4xl mx-auto mt-16 text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-rose-100 shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join <span className="text-rose-600">1000s of parents</span> who are capturing childhood's most precious moments!
          </h3>

          <a href="https://pages.razorpay.com/magicsnap" className="group bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-500 text-white px-8 py-4 rounded-full 
                           text-lg font-medium inline-flex items-center gap-3 
                           transform hover:scale-105 transition-all duration-300
                           shadow-lg shadow-rose-200 relative overflow-hidden">
            <span className="relative z-10">Start Your Photography Journey Today!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
