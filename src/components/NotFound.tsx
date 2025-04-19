
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle, ArrowRight } from 'lucide-react';

export function NotFound() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-rose-50 to-white relative overflow-hidden flex items-center justify-center py-20">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hidden md:block">
          {/* Gradient blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-rose-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200 rounded-full filter blur-3xl opacity-20 animate-float-gentle"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-rose-100 overflow-hidden p-8 md:p-12 text-center">
            <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <AlertTriangle className="w-12 h-12 text-rose-500" />
            </div>

            <h1 className="text-6xl md:text-8xl font-display font-bold text-rose-500 mb-6">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h2>
            
            <p className="text-gray-600 text-lg mb-8">
              The page you're looking for seems to have wandered off, just like a curious baby during a photoshoot!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="py-4 px-8 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold 
                            shadow-lg shadow-rose-200/50 group transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
                <Home className="mr-2 inline-block" />
                Return Home
                <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
