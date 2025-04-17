
import React from 'react';
import { CheckCircle2, XCircle, Camera, Star, Image, Sun, Sparkles } from 'lucide-react';

function ComparisonItem({ text, negative = false }: { text: string, negative?: boolean }) {
  return (
    <div className="flex items-start mb-4 group">
      {negative ? (
        <XCircle className="w-6 h-6 mr-2 flex-shrink-0 text-rose-500" />
      ) : (
        <CheckCircle2 className="w-6 h-6 mr-2 flex-shrink-0 text-rose-500" />
      )}
      <p className={`text-gray-700 group-hover:text-gray-900 transition-colors ${negative ? 'line-through decoration-rose-300/50' : ''}`}>
        {text}
      </p>
    </div>
  );
}

export function Comparison() {
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
            <span className="text-rose-700 font-semibold">The Difference</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            What Sets <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">MAGIC SNAP</span> Apart?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-rose-100
                        transform hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-2xl font-bold text-rose-600 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              With MAGIC SNAP
            </h3>
            <div className="space-y-6">
              <ComparisonItem text="Create crisp, vibrant photos using smartphone cameras through natural light mastery" />
              <ComparisonItem text="Create stunning backdrops using bedsheets and window light in 30 minutes" />
              <ComparisonItem text="Never miss first steps or messy meals with our spontaneous shooting strategies" />
              <ComparisonItem text="Capture genuine smiles and candid moments using patience-driven techniques" />
              <ComparisonItem text="Master golden hour positioning and diffused light techniques" />
              <ComparisonItem text="Achieve professional outcomes using household items" />
            </div>
          </div>

          <div className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-rose-100/50">
            <h3 className="text-2xl font-bold text-gray-400 mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6" />
              Without Magic Snap
            </h3>
            <div className="space-y-6">
              <ComparisonItem text="Settle for grainy, low-quality images that fail to capture true details" negative />
              <ComparisonItem text="Drag cranky toddlers to crowded studios for underwhelming results" negative />
              <ComparisonItem text="Blurry action shots and forgotten camera during precious milestones" negative />
              <ComparisonItem text="End up with stiff, unnatural portraits from rushed sessions" negative />
              <ComparisonItem text="Struggle with unflattering midday glare or dim indoor lighting" negative />
              <ComparisonItem text="Waste money on expensive lenses and lighting kits" negative />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
