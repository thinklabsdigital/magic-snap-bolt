import React, { useState } from 'react';
import { Check, Heart, Sparkles, Camera, Image, Star, Sun, Aperture } from 'lucide-react';

export function Questions() {
  const [checkedQuestions, setCheckedQuestions] = useState<number[]>([]);

  const questions = [
    ["Do you often find yourself", " missing those precious moments ", "with your baby because you can't get the camera ready in time?"],
    ["Are you", " frustrated", " when your smartphone photos don't capture the ", "joy and beauty ", "of your little one's smile?"],
    ["Do you", " worry", " that your photos ", "lack the quality", " you see in professional baby photography?"],
    ["Have you ever felt", " regret ", "after realizing you didn't", " document a milestone moment ", "as beautifully as you wanted?"],
    ["Do you", " struggle ", "with understanding how to use your smartphone camera's features to get the", " best shots ", "of your baby?"],
    ["Are you", " anxious ", "about not being able to share", " stunning photos ", "with family and friends during special occasions?"],
    ["Do you find it", " overwhelming ", "to learn photography techniques when you're already juggling so many responsibilities as a parent?"],
    ["Have you ever felt", " disappointed ", "when you look back at photos that", " didn't turn out ", "as you had hoped?"],
    ["Do you wish you could create a", " beautiful visual story ", "of your baby's growth without spending a fortune on equipment?"],
    ["Are you", " concerned ", "that you'll", " miss out on capturing ", "your baby's unique personality as they grow?"],
    ["Do you feel like you", " lack the skills ", "to take photos that truly reflect the", " love and joy ", "in your family?"]
  ];

  const toggleQuestion = (index: number) => {
    setCheckedQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
          {/* Top row */}
          <Camera className="absolute top-[10%] left-[15%] w-8 h-8 text-rose-400/40 animate-float" />
          <Aperture className="absolute top-[15%] right-[20%] w-6 h-6 text-rose-500/30 animate-spin-slow" />
          <Star className="absolute top-[25%] left-[40%] w-5 h-5 text-rose-400/40 animate-pulse" />
          
          {/* Middle row */}
          <Image className="absolute top-[45%] left-[10%] w-7 h-7 text-rose-500/30 animate-float-gentle" />
          <Sun className="absolute top-[40%] right-[15%] w-8 h-8 text-rose-400/40 animate-pulse" />
          <Sparkles className="absolute top-[60%] left-[25%] w-6 h-6 text-rose-500/30 animate-float" />
          
          {/* Bottom row */}
          <Heart className="absolute bottom-[20%] right-[25%] w-7 h-7 text-rose-400/40 animate-float-gentle" />
          <Camera className="absolute bottom-[15%] left-[35%] w-6 h-6 text-rose-500/30 animate-pulse" />
          <Star className="absolute bottom-[10%] right-[10%] w-5 h-5 text-rose-400/40 animate-float" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-sm rounded-full 
                         px-6 py-3 mb-6 border border-rose-500/20">
            <Camera className="w-5 h-5 text-rose-500" />
            <span className="text-rose-700 font-medium">Let's Be Honest</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Can you relate to these
            <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent"> feelings?</span>
          </h2>
          <p className="text-rose-600/90">Click on the questions that resonate with you</p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {questions.map((questionParts, index) => (
            <button
              key={index}
              onClick={() => toggleQuestion(index)}
              className={`w-full text-left p-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.01] cursor-pointer backdrop-blur-sm
                         ${checkedQuestions.includes(index)
                           ? 'bg-white/80 border-2 border-rose-300 shadow-lg'
                           : 'bg-white/50 border border-rose-200 hover:border-rose-300 shadow-md'}`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-colors
                                flex items-center justify-center
                                ${checkedQuestions.includes(index)
                                  ? 'border-rose-500 bg-rose-500'
                                  : 'border-rose-300'}`}
                >
                  {checkedQuestions.includes(index) && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </div>
                <p className={`text-lg ${checkedQuestions.includes(index) ? 'text-gray-900' : 'text-gray-700'}`}>
                  {questionParts.map((part, i) => (
                    <span key={i} className={i % 2 === 1 ? 'text-rose-600 font-semibold' : ''}>
                      {part}
                    </span>
                  ))}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-rose-200 shadow-xl">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              If you nodded "yes" to any of these questions... Then this is for <span className="text-rose-600 font-semibold">YOU!</span>
            </h3>
            
          </div>
        </div>
      </div>
    </section>
  );
}