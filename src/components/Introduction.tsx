import React from 'react';
import { Camera, Heart, Share, Clock, Star, Smile, ArrowRight, Sparkles, Image, Sun, Check } from 'lucide-react';

export function Introduction() {
  const benefits = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Simple Yet Powerful",
      description: "Master smartphone photography with easy-to-follow techniques that produce stunning results."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time-Saving Solutions",
      description: "Transform any space into a photo studio in minutes, perfect for busy parents."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Professional Quality",
      description: "Create magazine-worthy photos using just your smartphone and natural light."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Cherished Memories",
      description: "Capture those fleeting moments that tell your family's unique story."
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Natural Expressions",
      description: "Learn the secrets to capturing genuine smiles and authentic emotions."
    },
    {
      icon: <Share className="w-6 h-6" />,
      title: "Share with Pride",
      description: "Create photos worthy of sharing, printing, and passing down through generations."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hidden md:block">
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
            <span className="text-rose-700 font-semibold">Introducing</span>
          </div>
          
          <h2 className="text-5xl md:text-5xl font-display font-bold mb-8">
            
            <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent"> MAGIC SNAP</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
              Imagine capturing every giggle, every milestone, and every precious moment. 
            <span className="text-rose-600 font-semibold"> Magic Snap</span> is like a treasure map that shows you how to take stunning baby pictures. <span className="text-rose-600 font-semibold">No fancy cameras </span> — just your phone and a sprinkle of fun!

            </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          {/* Left Column - Image */}
          <div className="relative">
            <div className=" rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
              <img 
                src="https://ik.imagekit.io/u8qjiw2p1/magic-snap-cover.png?updatedAt=1744722756968"
                alt="Magic Snap Ebook Cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center
                          animate-pulse shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">60+</div>
                <div className="text-xs text-rose-700">Pro Tips</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-rose-50 rounded-full flex items-center justify-center
                          animate-float shadow-lg border-2 border-rose-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">100%</div>
                <div className="text-xs text-rose-700">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
                        
            <div className="bg-rose-200/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-300 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What Makes Magic Snap Special?</h3>
              <ul className="space-y-3">
                {[
                  "No expensive equipment needed",
                  "Works with any smartphone",
                  "Learn at your own pace",
                  "Instant results you can see",
                  "Perfect for busy parents"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-rose-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} 
                 className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-rose-100 shadow-lg
                           transform hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mb-4">
                <div className="text-rose-600">{benefit.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="group bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-full 
                           text-lg font-medium inline-flex items-center gap-3 
                           transform hover:scale-105 transition-all duration-300
                           shadow-lg shadow-rose-200">
            Start Creating Beautiful Memories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}