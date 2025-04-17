import React from 'react';
import { CheckCircle2 } from 'lucide-react';

function ComparisonItem({ text, negative = false }: { text: string, negative?: boolean }) {
  return (
    <div className="flex items-start mb-4">
      <CheckCircle2 className={`w-6 h-6 mr-2 flex-shrink-0 ${negative ? 'text-red-500' : 'text-green-500'}`} />
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

export function Comparison() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What Sets <span className="text-purple-600">MAGIC SNAP</span> Apart?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-purple-600 mb-6">With MAGIC SNAP</h3>
            <ComparisonItem text="Create crisp, vibrant photos using smartphone cameras through natural light mastery" />
            <ComparisonItem text="Create stunning backdrops using bedsheets and window light in 30 minutes" />
            <ComparisonItem text="Never miss first steps or messy meals with our spontaneous shooting strategies" />
            <ComparisonItem text="Capture genuine smiles and candid moments using patience-driven techniques" />
            <ComparisonItem text="Master golden hour positioning and diffused light techniques" />
            <ComparisonItem text="Achieve professional outcomes using household items" />
          </div>

          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-600 mb-6">Without Magic Snap</h3>
            <ComparisonItem text="Settle for grainy, low-quality images that fail to capture true details" negative />
            <ComparisonItem text="Drag cranky toddlers to crowded studios for underwhelming results" negative />
            <ComparisonItem text="Blurry action shots and forgotten camera during precious milestones" negative />
            <ComparisonItem text="End up with stiff, unnatural portraits from rushed sessions" negative />
            <ComparisonItem text="Struggle with unflattering midday glare or dim indoor lighting" negative />
            <ComparisonItem text="Waste money on expensive lenses and lighting kits" negative />
          </div>
        </div>
      </div>
    </section>
  );
}