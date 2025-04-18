import React from 'react';
import { Camera, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Camera className="w-6 h-6 mr-2" />
              <span className="text-xl font-bold">SnuggleShots</span>
            </div>
            <p className="text-gray-400">
              Empowering parents to capture precious moments with professional quality using just their smartphones.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:hi.snuggleshots@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  hi.snuggleshots@gmail.com
                </a>
              </div>
              
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SnuggleShots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}