
import React from 'react';
import { Gift, FileText, Music, ArrowRight, Sparkles, Star } from 'lucide-react';

export function Bonuses() {
  const bonuses = [
    {
      icon: <Gift className="w-12 h-12 text-rose-600" />,
      title: "Magic Snap Essentials Kit",
      value: "₹1499",
      description: (
        <>
          <p className="mb-4">Enhance your smartphone photography with our carefully curated Magic Snap Essentials Kit.</p>
          <p className="mb-4">This collection includes recommended accessories—both premium and budget-friendly (under Rs 1,000)—that will elevate your photography game.</p>
          <p>From lens attachments to stabilizers, these tools are designed to help you capture stunning images of your little one, making every moment picture-perfect.</p>
        </>
      )
    },
    {
      icon: <FileText className="w-12 h-12 text-rose-600" />,
      title: "Light Like a Pro - Printable Lighting & Composition Cheatsheet",
      value: "₹1199",
      description: (
        <>
          <p className="mb-4">Master the art of lighting and composition with our handy printable cheatsheet.</p>
          <p className="mb-4">This resource is packed with essential tips that will guide you in setting up the perfect shot, no matter the environment.</p>
          <p>Whether you're indoors or outdoors, this cheatsheet will help you create beautifully lit and composed images that truly showcase your baby's personality.</p>
        </>
      )
    },
    {
      icon: <Music className="w-12 h-12 text-rose-600" />,
      title: "Chottu Cheers - Curated Spotify Playlists",
      value: "₹999",
      description: (
        <>
          <p className="mb-4">Keep your baby engaged, calm, and giggling with our specially curated Spotify playlists, Chottu Cheers.</p>
          <p className="mb-4">These delightful tunes are tailored for photoshoots, ensuring your little one is in the best mood for capturing those adorable smiles and giggles.</p>
          <p>With the right music, every photoshoot becomes a joyful experience, making it easier to snap those cherished moments.</p>
        </>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hidden md:block">
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-sm rounded-full 
                         px-6 py-3 mb-6 border border-rose-500/20">
            <Gift className="w-5 h-5 text-rose-500" />
            <span className="text-rose-700 font-semibold">Limited Time Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Exclusive <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Bonuses</span>
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            For the next <span className="text-rose-600 font-semibold">10 people</span> who take action today, 
            we're offering these exclusive Fast Action Bonuses to enhance your photography journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div key={index} 
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-rose-100
                         group hover:shadow-rose-200/50 transform hover:translate-y-[-8px] transition-all duration-300">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-rose-100 rounded-full w-20 h-20 filter blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex justify-center">{bonus.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center group-hover:text-rose-600 transition-colors">
                #{index + 1} {bonus.title}
              </h3>
              <p className="text-rose-600 font-semibold text-center mb-4 flex items-center justify-center gap-1">
                <Star className="w-4 h-4" />
                <span>Valued at {bonus.value}</span>
              </p>
              <div className="text-gray-600 text-sm">{bonus.description}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-rose-100 max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 mb-6">
              That's a total value of <span className="text-rose-600 font-semibold">₹3,500</span> in free bonuses for your commitment today.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Seize this opportunity to enhance your baby photography journey and create lasting memories!
            </p>
            <a href="https://pages.razorpay.com/magicsnap" className="btn-primary group">
              <span>Claim Your Bonuses Now!</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
