import React from 'react';
import { Camera } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-rose-950/30"></div>

      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-curved-pattern animate-float-gentle"></div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Camera className="w-16 h-16 text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Who are we?</h2>
          <div className="space-y-6 text-lg text-gray-200">
            <p>
              <strong>SnuggleShots</strong> is a pioneering force in family photography education, dedicated to revolutionizing how parents capture their children's precious moments. Founded by passionate photographers and parents, we understand the challenges of documenting childhood's fleeting instances.
            </p>
            <p>
              With over 5 years of expertise in smartphone photography education, <strong>SnuggleShots</strong> has helped thousands of parents transform their everyday photos into stunning visual stories. Our unique approach combines technical expertise with practical, easy-to-follow guidance that works for busy parents.
            </p>
            <p>
              We believe that every parent deserves to capture professional-quality photos of their children without investing in expensive equipment or lengthy training. Through our carefully crafted resources and innovative teaching methods, <strong>SnuggleShots</strong> empowers parents to preserve their family's precious moments with confidence and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}