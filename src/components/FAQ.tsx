import React from 'react';

export function FAQ() {
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
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}