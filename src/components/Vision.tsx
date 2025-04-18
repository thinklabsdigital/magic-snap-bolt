
import React, { useState } from 'react';
import { CalendarDays, Calendar, CalendarClock, Camera, Sparkles, ArrowRight, Check } from 'lucide-react';

export function Vision() {
  const [activeTab, setActiveTab] = useState(0);
  
  const timeframes = [
    {
      icon: <CalendarDays className="w-8 h-8 text-rose-500" />,
      period: "One Month From Now",
      description: "You'll be effortlessly capturing your child's radiant smiles and playful moments, each photo a vivid reflection of their personality. No more blurry images or missed opportunities—just stunning snapshots that make your heart swell with joy.",
      benefits: [
        "Master smartphone camera settings",
        "Create beautiful portraits in natural light",
        "Capture genuine expressions every time"
      ]
    },
    {
      icon: <Calendar className="w-8 h-8 text-rose-500" />,
      period: "Three Months From Now",
      description: "Your smartphone will be filled with a beautiful collection of memories. You'll have mastered the art of natural lighting and composition, transforming ordinary moments into extraordinary keepsakes.",
      benefits: [
        "Build a stunning digital photo collection",
        "Create frame-worthy images for your home",
        "Confidently photograph in any lighting condition"
      ]
    },
    {
      icon: <CalendarClock className="w-8 h-8 text-rose-500" />,
      period: "Six Months From Now",
      description: "Your family photo album will be a treasure trove of memories, each image telling a story of laughter, love, and milestones. You'll have developed a passion for photography that connects you even more deeply with your child.",
      benefits: [
        "Create professional-quality photo albums",
        "Document your child's growth journey beautifully",
        "Share impressive photos that amaze friends and family"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="block">
          <div className="absolute top-20 left-[10%] w-64 h-64 bg-rose-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-40 right-[5%] w-80 h-80 bg-rose-200 rounded-full filter blur-3xl opacity-20 animate-float-gentle"></div>
          
          <Camera className="absolute top-20 left-[15%] w-8 h-8 text-rose-200 animate-float" />
          <Sparkles className="absolute top-40 right-[20%] w-6 h-6 text-rose-200 animate-pulse" />
          <CalendarDays className="absolute bottom-32 left-[25%] w-7 h-7 text-rose-200 animate-float-gentle" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-sm rounded-full 
                         px-6 py-3 mb-6 border border-rose-500/20">
            <Sparkles className="w-5 h-5 text-rose-500" />
            <span className="text-rose-700 font-semibold">Your Journey Begins</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Picture <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Your Future</span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            See how your photography journey unfolds with Magic Snap. Take a glimpse into your future and imagine the beautiful moments you'll capture.
          </p>
        </div>
        
        {/* Interactive Timeline Tabs */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-md inline-flex border border-rose-100">
              {timeframes.map((item, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTab(index)} 
                  className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 min-w-max
                             ${activeTab === index 
                               ? 'bg-rose-500 text-white shadow-lg shadow-rose-200/50' 
                               : 'text-gray-600 hover:bg-rose-100/50'}`}
                >
                  <div className="w-6 h-6 flex-shrink-0">{item.icon}</div>
                  <span>{item.period}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Content Display */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-rose-100 overflow-hidden
                         transform transition-all duration-500 hover:shadow-rose-200/50">
            {timeframes.map((item, index) => (
              <div 
                key={index} 
                className={`transition-opacity duration-500 ${activeTab === index ? 'block opacity-100' : 'hidden opacity-0'}`}
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Left Side - Visual */}
                    <div className="md:w-2/5 flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-rose-100 rounded-full w-40 h-40 filter blur-xl opacity-50"></div>
                        <div className="relative bg-gradient-to-br from-rose-400 to-rose-600 rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
                          {item.icon}
                        </div>
                        <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md border border-rose-200">
                          <Camera className="w-6 h-6 text-rose-500" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Side - Content */}
                    <div className="md:w-3/5">
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">
                        {item.period}
                      </h3>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="space-y-3">
                        {item.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3 group">
                            <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center
                                         group-hover:bg-rose-200 transition-colors">
                              <Check className="w-4 h-4 text-rose-600" />
                            </div>
                            <span className="text-gray-700 group-hover:text-rose-600 transition-colors">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="h-2 bg-rose-100">
                  <div 
                    className="h-full bg-rose-500 transition-all duration-500"
                    style={{ width: `${(index + 1) * (100 / timeframes.length)}%` }}
                  ></div>
                </div>
              </div>
            ))}
            
            {/* Navigation Buttons */}
            <div className="p-4 md:p-6 bg-rose-50/50 flex justify-between">
              <button 
                onClick={() => setActiveTab(prev => (prev > 0 ? prev - 1 : prev))}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all
                           ${activeTab > 0 
                             ? 'text-rose-600 hover:bg-rose-100' 
                             : 'text-gray-400 cursor-not-allowed'}`}
                disabled={activeTab === 0}
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                <span>Previous</span>
              </button>
              
              <a 
                href="https://pages.razorpay.com/magicsnap"
                className="px-6 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-medium 
                         flex items-center gap-2 shadow-md shadow-rose-200/30
                         transform hover:translate-y-[-2px] transition-all"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <button 
                onClick={() => setActiveTab(prev => (prev < timeframes.length - 1 ? prev + 1 : prev))}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all
                           ${activeTab < timeframes.length - 1 
                             ? 'text-rose-600 hover:bg-rose-100' 
                             : 'text-gray-400 cursor-not-allowed'}`}
                disabled={activeTab === timeframes.length - 1}
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
