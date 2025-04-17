import React from 'react';
import { Gift, FileText, Music } from 'lucide-react';

export function Bonuses() {
  const bonuses = [
    {
      icon: <Gift className="w-12 h-12 text-purple-600" />,
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
      icon: <FileText className="w-12 h-12 text-purple-600" />,
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
      icon: <Music className="w-12 h-12 text-purple-600" />,
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
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl mb-8">
            That's not all. For the next 10 people who take action today, we're excited to offer exclusive Fast Action Bonuses that will enhance your journey to capturing those beautiful moments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6 flex justify-center">{bonus.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center">#{index + 1} {bonus.title}</h3>
              <p className="text-purple-600 font-semibold text-center mb-4">Valued at {bonus.value}</p>
              <div className="text-gray-600">{bonus.description}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-700 mb-6">
            That's a total value of ₹3,500 in free bonuses for your commitment today.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Seize this opportunity to enhance your baby photography journey and create lasting memories!
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center">
            Claim Your Bonuses Now!
          </button>
        </div>
      </div>
    </section>
  );
}