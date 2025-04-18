
import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I really achieve studio-quality photos with just my smartphone?",
      answer: "Absolutely! With the right techniques and a little creativity, your smartphone can capture stunning images that rival those taken in professional studios. Our Magic Snap guide walks you through the essentials of smartphone photography, including mastering natural lighting, composition, and editing—all tailored for capturing your baby's unique charm."
    },
    {
      question: "What if I don't have any photography experience?",
      answer: "No worries at all! Magic Snap is designed for everyone, from beginners to seasoned photographers. Our step-by-step instructions break down the process into manageable parts, ensuring you feel confident and empowered to capture beautiful moments."
    },
    {
      question: "How do I find the best natural lighting for my photos?",
      answer: "Natural light is your best friend when it comes to photography! We'll guide you through assessing your environment to find the perfect spots in your home where light is soft and flattering."
    },
    {
      question: "What should I dress my baby in for the photoshoot?",
      answer: "We recommend dressing your baby in soft, solid colors that complement their features and the background. Our guide includes tips on selecting outfits that not only look great but also keep your little one comfortable."
    },
    {
      question: "What is your refund policy?",
      answer: "We allow you to request a refund after using the product for at least 30 days. To qualify, you must document your experience by submitting progress videos that showcase your efforts during this trial period. Contact our support team at hi.snuggleshots@gmail.com"
    },
    {
      question: "How can I capture genuine smiles and expressions?",
      answer: "Capturing those adorable, candid moments is all about patience and connection. We share techniques to engage your baby, encouraging those genuine smiles and delightful expressions. From playful interactions to using toys, you'll learn how to create an environment that brings out your baby's personality."
    },
    {
      question: "What editing tools do I need to enhance my photos?",
      answer: "You don't need fancy software to edit your photos! Our guide introduces you to user-friendly smartphone editing apps that will help you enhance your images while maintaining a natural look. You'll learn basic editing techniques that can transform your photos into stunning keepsakes without losing their authenticity."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="block">
          <div className="absolute top-20 left-[10%] w-64 h-64 bg-rose-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-40 right-[5%] w-80 h-80 bg-rose-200 rounded-full filter blur-3xl opacity-20 animate-float-gentle"></div>
          
          <HelpCircle className="absolute top-20 left-[15%] w-8 h-8 text-rose-200 animate-float" />
          <Sparkles className="absolute top-40 right-[20%] w-6 h-6 text-rose-200 animate-pulse" />
          <HelpCircle className="absolute bottom-32 left-[25%] w-7 h-7 text-rose-200 animate-float-gentle" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-sm rounded-full 
                         px-6 py-3 mb-6 border border-rose-500/20">
            <HelpCircle className="w-5 h-5 text-rose-500" />
            <span className="text-rose-700 font-semibold">Got Questions?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Frequently Asked <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Questions</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border transition-all duration-300
                        ${openIndex === index ? 'border-rose-200 shadow-rose-100/50' : 'border-rose-100'}`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleFaq(index)}
              >
                <h3 className={`text-xl font-semibold transition-colors duration-300 ${openIndex === index ? 'text-rose-600' : 'text-gray-800'}`}>
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 
                             ${openIndex === index ? 'transform rotate-180 text-rose-500' : 'text-gray-500'}`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out 
                           ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-700">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
