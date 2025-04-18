import React from 'react';
import { Gift, FileText, Music, ArrowRight, Sparkles, Star, Check, Clock } from 'lucide-react';

export function Bonuses() {
  const bonuses = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Magic Snap Essentials Kit",
      description: "This collection includes recommended accessories—both premium and budget-friendly (under Rs 1,000)—that will elevate your photography game. From lens attachments to stabilizers, these tools are designed to help you capture stunning images of your little one, making every moment picture-perfect.",
      value: "₹1,499"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Light Like a Pro - Cheatsheet",
      description: "This resource is packed with essential tips that will guide you in setting up the perfect shot, no matter the environment. Whether you’re indoors or outdoors, this cheatsheet will help you create beautifully lit and composed images that truly showcase your baby’s personality.",
      value: "₹1,199"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Chottu Cheers - Spotify Playlists",
      description: "These delightful tunes are tailored for photoshoots, ensuring your little one is in the best mood for capturing those adorable smiles and giggles. With the right music, every photoshoot becomes a joyful experience, making it easier to snap those cherished moments.",
      value: "₹999"
    }
  ];

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
        <div className="flex flex-col items-center justify-center mb-12">
          {/* Gift icon */}
          <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mb-6">
            <Gift className="w-10 h-10 text-rose-600" />
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center">
            Fast Action <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Bonuses</span>
          </h2>

          {/* Fast Action Banner */}
          <div className="bg-rose-200/80 backdrop-blur-sm rounded-full px-6 py-3 inline-flex items-center justify-center border border-rose-100 mb-6">
            <Clock className="w-5 h-5 text-rose-600 mr-2" />
            <p className="text-rose-700 font-medium">
              For the next 10 people who take action today!
            </p>
          </div>
        </div>

        {/* Bonus Cards in Modern Design */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden border border-rose-100 
                                        hover:shadow-rose-100 transform hover:translate-y-[-8px] transition-all duration-300">
              <div className="w-full bg-rose-100 flex items-center justify-center p-6">
                <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                  <div className="text-rose-600">{bonus.icon}</div>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Valued at {bonus.value}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {bonus.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  {bonus.description}
                </p>
                <div className="flex items-center text-rose-600 text-sm font-medium">
                  <Check className="w-4 h-4 mr-2" />
                  <span>Included with your purchase</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="https://pages.razorpay.com/magicsnap" className="inline-block bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-full 
                         font-bold shadow-lg shadow-rose-200/50 
                         transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center gap-2">
              <span>Get Magic Snap + All Bonuses</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}