
import React from 'react';
import { CalendarDays, Calendar, CalendarClock, Camera, Sparkles } from 'lucide-react';

export function Vision() {
  const timeframes = [
    {
      icon: <CalendarDays className="w-8 h-8 text-rose-500" />,
      period: "One Month From Now",
      description: "You'll be effortlessly capturing your child's radiant smiles and playful moments, each photo a vivid reflection of their personality. No more blurry images or missed opportunities—just stunning snapshots that make your heart swell with joy."
    },
    {
      icon: <Calendar className="w-8 h-8 text-rose-500" />,
      period: "Three Months From Now",
      description: "Your smartphone will be filled with a beautiful collection of memories. You'll have mastered the art of natural lighting and composition, transforming ordinary moments into extraordinary keepsakes."
    },
    {
      icon: <CalendarClock className="w-8 h-8 text-rose-500" />,
      period: "Six Months From Now",
      description: "Your family photo album will be a treasure trove of memories, each image telling a story of laughter, love, and milestones. You'll have developed a passion for photography that connects you even more deeply with your child."
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-sm rounded-full 
                         px-6 py-3 mb-6 border border-rose-500/20">
            <Sparkles className="w-5 h-5 text-rose-500" />
            <span className="text-rose-700 font-semibold">Imagine Your Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Picture <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">This</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {timeframes.map((item, index) => (
            <div key={index} 
                className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-rose-100
                         hover:shadow-rose-200/50 transform hover:translate-y-[-8px] transition-all duration-300 group">
              <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-rose-200 to-rose-100 rounded-r-2xl 
                           transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></div>
              
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-rose-100 rounded-full w-16 h-16 filter blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">{item.icon}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-rose-600 transition-colors">
                {item.period}
              </h3>
              
              <p className="text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
