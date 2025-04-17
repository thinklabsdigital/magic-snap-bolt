
import React from 'react';
import { Camera, UserCircle, Star, Heart, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hidden md:block">
          <Camera className="absolute top-20 left-[15%] w-8 h-8 text-rose-200 animate-float" />
          <Star className="absolute top-40 right-[20%] w-6 h-6 text-rose-200 animate-pulse" />
          <Heart className="absolute bottom-32 left-[25%] w-7 h-7 text-rose-200 animate-float-gentle" />
          <UserCircle className="absolute top-1/3 right-[15%] w-8 h-8 text-rose-200 animate-pulse" />
          <Sparkles className="absolute bottom-40 right-[30%] w-6 h-6 text-rose-200 animate-float" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-sm rounded-full 
                         px-6 py-3 mb-6 border border-rose-500/20">
            <UserCircle className="w-5 h-5 text-rose-500" />
            <span className="text-rose-700 font-semibold">Our Story</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Who are <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">We?</span>
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-rose-100 
                        space-y-6 text-lg text-gray-700 transform hover:scale-[1.01] transition-all duration-300">
            <p>
              <strong className="text-rose-600">SnuggleShots</strong> is a pioneering force in family photography education, dedicated to revolutionizing how parents capture their children's precious moments. Founded by passionate photographers and parents, we understand the challenges of documenting childhood's fleeting instances.
            </p>
            <p>
              With over 5 years of expertise in smartphone photography education, <strong className="text-rose-600">SnuggleShots</strong> has helped thousands of parents transform their everyday photos into stunning visual stories. Our unique approach combines technical expertise with practical, easy-to-follow guidance that works for busy parents.
            </p>
            <p>
              We believe that every parent deserves to capture professional-quality photos of their children without investing in expensive equipment or lengthy training. Through our carefully crafted resources and innovative teaching methods, <strong className="text-rose-600">SnuggleShots</strong> empowers parents to preserve their family's precious moments with confidence and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
