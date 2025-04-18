import React, { useState } from 'react';
import { Book, Camera, Sun, Smile, Edit, Sparkles, Share, HelpCircle, ChevronDown, ChevronUp, Star, Image, Heart } from 'lucide-react';

export function Package() {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Smartphone Photography Essentials",
      description: "Discover the capabilities of your device and how to make the most of its features. Knowing your camera is the first step toward capturing breathtaking photos.",
      details: [
        
      ]
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Power of Natural Lighting",
      description: "Explore how to harness the beauty of natural light for your photos. Learn how it enhances colors and creates a warm atmosphere, making your images truly shine.",
      details: [
        "Why Natural Light Is Essential for Great Photography",
        "Different Types of Natural Light",
        "How to Assess Lighting Conditions",
        "Creating Soft, Flattering Light Indoors"
      ]
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Preparing for the Perfect Shot",
      description: "Preparation is key to capturing great images. Discover tips to set the stage for memorable photographs.",
      details: [
        "Choosing the Right Location",
        "Decluttering Your Background",
        "Dressing Your Child for the Camera",
        "Creating a Comfortable Environment"
      ]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Mastering Composition Techniques",
      description: "Composition is vital for stunning photography. Learn to frame your subject effectively for more dynamic compositions.",
      details: [
        "The Rule of Thirds Made Simple",
        "Creative Framing Techniques",
        "Using Leading Lines",
        "Balancing Elements in Your Frame",
        "Creating Depth in Your Photos"
      ]
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Capturing Expressions and Moments",
      description: "Learn techniques to capture genuine emotions and candid moments that hold the most meaning and connection.",
      details: [
        "Getting Natural Smiles",
        "Timing Your Shots Perfectly",
        "Capturing Candid Moments",
        "Working with Different Age Groups"
      ]
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Editing Your Photos Like a Pro",
      description: "Enhance your images with editing techniques that maintain their natural beauty while elevating their impact.",
      details: [
        "Essential Editing Apps",
        "Basic Color Correction",
        "Enhancing Natural Light",
        "Creating Consistent Style",
        "Preserving Skin Tones"
      ]
    },
    {
      icon: <Share className="w-8 h-8" />,
      title: "Sharing and Preserving Your Memories",
      description: "Learn best practices for sharing and preserving your photos for generations to come.",
      details: [
        "Best Platforms for Sharing",
        "Creating Digital Albums",
        "Printing Your Photos",
        "Backup Strategies"
      ]
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Troubleshooting Common Challenges",
      description: "Overcome common photography hurdles with practical solutions that work in any situation.",
      details: [
        "Fixing Blurry Photos",
        "Dealing with Poor Lighting",
        "Managing Difficult Angles",
        "Quick Problem-Solving Tips"
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-rose-300 to-rose-400">
      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/80 via-rose-50/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-100/50 via-white/30 to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hidden md:block">
          <Camera className="absolute top-20 left-[15%] w-8 h-8 text-rose-400/40 animate-float" />
          <Star className="absolute top-40 right-[20%] w-6 h-6 text-rose-400/40 animate-pulse" />
          <Image className="absolute bottom-32 left-[25%] w-7 h-7 text-rose-400/40 animate-float-gentle" />
          <Heart className="absolute top-1/3 right-[15%] w-8 h-8 text-rose-400/40 animate-pulse" />
          <Sparkles className="absolute bottom-40 right-[30%] w-6 h-6 text-rose-400/40 animate-float" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-sm rounded-full 
                         px-6 py-3 mb-6 border border-rose-500/20">
            <Sparkles className="w-5 h-5 text-rose-500" />
            <span className="text-rose-700 font-medium">What's Inside</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Here's What You Get Inside
            <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent"> MAGIC SNAP ✨</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl border transition-all duration-300 transform hover:scale-[1.01]
                         ${expandedFeature === index ? 'border-rose-300 shadow-lg' : 'border-rose-200 shadow-md hover:border-rose-300'}`}
            >
              <button
                onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                className="w-full text-left p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-rose-600">{feature.icon}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      {expandedFeature === index ? (
                        <ChevronUp className="w-5 h-5 text-rose-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-rose-400" />
                      )}
                    </div>
                  </div>
                </div>
              </button>
              
              {/* Expandable Content */}
              {expandedFeature === index && (
                <div className="px-6 pb-6 border-t border-rose-100">
                  <div className="pt-4 mb-4 text-gray-600">{feature.description}</div>
                  <ul className="space-y-3">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-rose-400 flex-shrink-0"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold 
                           hover:bg-rose-500 transition-colors inline-flex items-center gap-2
                           transform hover:scale-105 duration-300 shadow-lg">
            Create Your Baby's Visual Story
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}