
import React from 'react';
import { Camera, UserCircle, Star, Heart, Sparkles, Award, Users, Clock, MapPin } from 'lucide-react';

function StatCard({ icon, value, label }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-rose-100 
                  transform hover:scale-105 transition-all duration-300">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-3">
          <div className="text-rose-600">{icon}</div>
        </div>
        <div className="text-3xl font-bold text-rose-600 mb-1">{value}</div>
        <div className="text-gray-600 text-center">{label}</div>
      </div>
    </div>
  );
}

function ValuePillar({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-4">
        <div className="text-rose-600">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

function Testimonial({ quote, name, location, children = 2 }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-rose-100 
                  transform hover:scale-[1.02] transition-all duration-300 h-full">
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="inline-block w-5 h-5 text-rose-500 mr-1" fill="#f43f5e" />
        ))}
      </div>
      <p className="text-gray-700 italic mb-4">{quote}</p>
      <div className="flex items-center justify-center">
        <div className="font-bold text-gray-900">{name}</div>
        <div className="w-1 h-1 bg-rose-300 rounded-full mx-2"></div>
        <div className="text-gray-500 flex items-center">
          <MapPin className="w-3 h-3 mr-1 text-rose-400" />
          {location}
        </div>
        <div className="w-1 h-1 bg-rose-300 rounded-full mx-2"></div>
        <div className="text-gray-500">Parent of {children}</div>
      </div>
    </div>
  );
}

export function About() {
  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "1K+", label: "Happy Parents" },
    { icon: <Clock className="w-5 h-5" />, value: "5+", label: "Years Experience" },
    { icon: <Camera className="w-5 h-5" />, value: "12K+", label: "Beautiful Photos" },
    { icon: <Award className="w-5 h-5" />, value: "96%", label: "Satisfaction Rate" }
  ];

  const values = [
    { 
      icon: <Heart className="w-6 h-6" />, 
      title: "Authentic Connections", 
      description: "We believe in capturing real moments that reflect genuine emotions and connections between family members."
    },
    { 
      icon: <Star className="w-6 h-6" />, 
      title: "Excellence & Simplicity", 
      description: "Our methods combine professional techniques with simple, accessible approaches anyone can master."
    },
    { 
      icon: <Sparkles className="w-6 h-6" />, 
      title: "Lifelong Learning", 
      description: "We're committed to continuous improvement and sharing cutting-edge photography knowledge with our community."
    }
  ];

  const testimonials = [
    {
      quote: "Magic Snap gave me the confidence to capture my baby's milestones without expensive equipment. Now my phone gallery is filled with photos I'm proud to frame!",
      name: "Priya Sharma",
      location: "Mumbai",
      children: 1
    },
    {
      quote: "As a busy working dad, I never had time for photography classes. Magic Snap's simple techniques helped me document my twins' first year beautifully.",
      name: "Rahul Mehra",
      location: "Bangalore",
      children: 2
    },
    {
      quote: "The natural lighting tips transformed our home photos. My mother-in-law can't believe these were taken on a phone! Worth every rupee.",
      name: "Ananya Patel",
      location: "Delhi",
      children: 1
    },
    {
      quote: "My daughter's first birthday photoshoot using Magic Snap techniques turned out better than professional studios we'd tried before!",
      name: "Vikram Singh",
      location: "Chennai",
      children: 1
    },
    {
      quote: "SnuggleShots transformed how I capture moments with my children. I went from taking basic snapshots to creating beautiful images that truly tell our family's story.",
      name: "Sarah M.",
      location: "Kolkata",
      children: 2
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hidden md:block">
          {/* Gradient blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-rose-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200 rounded-full filter blur-3xl opacity-20 animate-float-gentle"></div>
          
          {/* Icons */}
          <Camera className="absolute top-20 left-[15%] w-8 h-8 text-rose-200 animate-float" />
          <Star className="absolute top-40 right-[20%] w-6 h-6 text-rose-200 animate-pulse" />
          <Heart className="absolute bottom-32 left-[25%] w-7 h-7 text-rose-200 animate-float-gentle" />
          <UserCircle className="absolute top-1/3 right-[15%] w-8 h-8 text-rose-200 animate-pulse" />
          <Sparkles className="absolute bottom-40 right-[30%] w-6 h-6 text-rose-200 animate-float" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Brand Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-28 h-28 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-rose-100">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                <Camera className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full border border-rose-100 shadow-md">
              <span className="font-display font-bold text-rose-600">SnuggleShots</span>
            </div>
          </div>
        </div>
      
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-sm rounded-full 
                         px-6 py-3 mb-6 border border-rose-500/20">
            <UserCircle className="w-5 h-5 text-rose-500" />
            <span className="text-rose-700 font-semibold">Our Story</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            The Team Behind <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Your Memories</span>
          </h2>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
        
        {/* Main content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-rose-100 
                        space-y-6 text-lg text-gray-700 text-center">
            <p>
              <strong className="text-rose-600">SnuggleShots</strong> is a pioneering force in family photography education, dedicated to revolutionizing how parents capture their children's precious moments. Founded by passionate photographers and parents, we understand the challenges of documenting childhood's fleeting instances.
            </p>
            <p>
              With over 5 years of expertise in smartphone photography education, <strong className="text-rose-600">SnuggleShots</strong> has helped thousands of parents transform their everyday photos into stunning visual stories. Our unique approach combines technical expertise with practical, easy-to-follow guidance that works for busy parents.
            </p>
            <p>
              We believe that every parent deserves to capture professional-quality photos of their children without investing in expensive equipment or lengthy training. Through our carefully crafted resources and innovative teaching methods, <strong className="text-rose-600">SnuggleShots</strong> empowers parents to preserve their family's precious moments with confidence and creativity.
            </p>
          </div>
        </div>
        
        {/* Values section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {values.map((value, index) => (
            <ValuePillar 
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
        
        {/* Testimonials section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            What <span className="text-rose-600">Indian Parents</span> Are Saying
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                location={testimonial.location}
                children={testimonial.children}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
