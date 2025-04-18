
import React, { useState } from 'react';
import { CalendarDays, Calendar, CalendarClock, Camera, Sparkles, ArrowRight, Check } from 'lucide-react';

export function Vision() {
  const [activeTab, setActiveTab] = useState(0);
  
  const timeframes = [
    {
      icon: <CalendarDays className="text-rose-500" />,
      period: "One Month From Now",
      description: "You'll be effortlessly capturing your child's radiant smiles and playful moments, each photo a vivid reflection of their personality. No more blurry images or missed opportunities—just stunning snapshots that make your heart swell with joy.",
      benefits: [
        "Master smartphone camera settings",
        "Create beautiful portraits in natural light",
        "Capture genuine expressions every time"
      ],
      image: "https://ik.imagekit.io/u8qjiw2p1/Magic%20snap/freepik__the-style-is-candid-image-photography-with-natural__214.jpeg?auto=format&fit=crop&q=80"
    },
    {
      icon: <Calendar className="text-rose-500" />,
      period: "Three Months From Now",
      description: "Your smartphone will be filled with a beautiful collection of memories. You'll have mastered the art of natural lighting and composition, transforming ordinary moments into extraordinary keepsakes.",
      benefits: [
        "Build a stunning digital photo collection",
        "Create frame-worthy images for your home",
        "Confidently photograph in any lighting condition"
      ],
      image: "https://ik.imagekit.io/u8qjiw2p1/Magic%20snap/freepik__an-indian-woman-28-years-old-blue-hair-smiling-and__23852.jpeg?auto=format&fit=crop&q=80"
    },
    {
      icon: <CalendarClock className="text-rose-500" />,
      period: "Six Months From Now",
      description: "Your family photo album will be a treasure trove of memories, each image telling a story of laughter, love, and milestones. You'll have developed a passion for photography that connects you even more deeply with your child.",
      benefits: [
        "Create professional-quality photo albums",
        "Document your child's growth journey beautifully",
        "Share impressive photos that amaze friends and family"
      ],
      image: "https://ik.imagekit.io/u8qjiw2p1/Magic%20snap/aHR0cHM6Ly90b2dldGhlci1haS1iZmwtaW1hZ2VzLXByb2QuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vaW1hZ2VzLzU4MTg5N2UyZmRlZmViYmZhZDBmOWViNmQyNmE2ZTRlZjRlMjdlY2MyMjRmOGI3MjhlOGE2ZDI3NzQzZmZiOGM_WC1BbXotQWxnb3J.webp?auto=format&fit=crop&q=80"
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
        
        {/* Stacked Tabs - 2 on top, 1 on bottom - reduced size by 25% */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-3">
            {timeframes.slice(0, 2).map((item, index) => (
              <button 
                key={index}
                onClick={() => setActiveTab(index)} 
                className={`relative p-2 rounded-xl text-xs font-semibold transition-all duration-300 flex flex-col items-center gap-1.5
                           ${activeTab === index 
                             ? 'bg-rose-500 text-white shadow-lg shadow-rose-200/50' 
                             : 'bg-white/80 text-gray-600 hover:bg-rose-100/50 border border-rose-100'}`}
              >
                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md mb-1">
                  <span className={`${activeTab === index ? 'text-rose-600' : 'text-rose-400'}`}>
                    {React.cloneElement(item.icon, { className: 'w-4 h-4' })}
                  </span>
                </div>
                <span className="text-center font-medium text-xs">{item.period}</span>
              </button>
            ))}
          </div>
          
          <div className="mb-6">
            {timeframes.slice(2).map((item, index) => (
              <button 
                key={index + 2}
                onClick={() => setActiveTab(index + 2)} 
                className={`relative p-2 rounded-xl text-xs font-semibold transition-all duration-300 flex flex-col items-center gap-1.5 w-full
                           ${activeTab === index + 2
                             ? 'bg-rose-500 text-white shadow-lg shadow-rose-200/50' 
                             : 'bg-white/80 text-gray-600 hover:bg-rose-100/50 border border-rose-100'}`}
              >
                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md mb-1">
                  <span className={`${activeTab === index + 2 ? 'text-rose-600' : 'text-rose-400'}`}>
                    {React.cloneElement(item.icon, { className: 'w-4 h-4' })}
                  </span>
                </div>
                <span className="text-center font-medium text-xs">{item.period}</span>
              </button>
            ))}
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
                    {/* Left Side - Visual with Image */}
                    <div className="md:w-2/5 flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-rose-100 rounded-2xl w-60 h-48 filter blur-xl opacity-50"></div>
                        <div className="relative w-56 h-40 rounded-2xl overflow-hidden shadow-lg">
                          <img 
                            src={item.image} 
                            alt={`Vision: ${item.period}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-rose-500/30 to-transparent"></div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-md border border-rose-200">
                          <Camera className="w-4 h-4 text-rose-500" />
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

                      <div className="mt-8">
                        <a 
                          href="https://pages.razorpay.com/magicsnap"
                          className="inline-block px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-medium 
                                   flex items-center gap-2 shadow-md shadow-rose-200/30
                                   transform hover:translate-y-[-2px] transition-all"
                        >
                          <span>Start Your Journey</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
