import React from 'react';

export function Vision() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Picture this:</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">One Month From Now</h3>
            <p className="text-gray-700">
              You'll be effortlessly capturing your child's radiant smiles and playful moments, each photo a vivid reflection of their personality. No more blurry images or missed opportunities—just stunning snapshots that make your heart swell with joy.
            </p>
          </div>
          
          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Three Months From Now</h3>
            <p className="text-gray-700">
              Your smartphone will be filled with a beautiful collection of memories. You'll have mastered the art of natural lighting and composition, transforming ordinary moments into extraordinary keepsakes.
            </p>
          </div>
          
          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Six Months From Now</h3>
            <p className="text-gray-700">
              Your family photo album will be a treasure trove of memories, each image telling a story of laughter, love, and milestones. You'll have developed a passion for photography that connects you even more deeply with your child.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}