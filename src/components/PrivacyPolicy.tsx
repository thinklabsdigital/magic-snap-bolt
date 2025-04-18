
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  return (
    <section className="py-16 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="block">
          <div className="absolute top-20 left-[10%] w-64 h-64 bg-rose-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-40 right-[5%] w-80 h-80 bg-rose-200 rounded-full filter blur-3xl opacity-20 animate-float-gentle"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <Link to="/" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8 group transition-all duration-300">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-rose-100 overflow-hidden p-8 md:p-12">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-rose-100 overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/u8qjiw2p1/Magic%20snap/Snuggleshots%20logo.png" 
                  alt="SnuggleShots Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="rounded-xl bg-rose-50/50 border border-rose-100 p-6 mb-8">
              <h2 className="text-xl font-bold text-rose-600 mb-3">Introduction</h2>
              <p>Welcome to SnuggleShots. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 border-l-4 border-rose-400 pl-4 mb-6">Information We Collect</h2>
              
              <div className="bg-white rounded-xl shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-rose-600 mb-3">Personal Data</h3>
                <p className="mb-4">We may collect personal identification information, including but not limited to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Name and email address</li>
                  <li>Billing information and payment details</li>
                  <li>Business information</li>
                  <li>User-generated content and preferences</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-rose-600 mb-3">Usage Data</h3>
                <p className="mb-4">We may also collect information on how the service is accessed and used, including:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Browser type and version</li>
                  <li>Time spent on pages</li>
                  <li>Access times and dates</li>
                  <li>Operating system</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 border-l-4 border-rose-400 pl-4 mb-6">How We Use Your Information</h2>
              <p className="mb-4">We use the collected data for various purposes:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow border border-rose-50 flex items-start">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>To provide and maintain our service</span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow border border-rose-50 flex items-start">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>To notify you about changes to our service</span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow border border-rose-50 flex items-start">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>To provide customer support</span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow border border-rose-50 flex items-start">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>To gather analysis or valuable information</span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow border border-rose-50 flex items-start">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>To monitor the usage of our service</span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow border border-rose-50 flex items-start">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>To detect, prevent and address technical issues</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 border-l-4 border-rose-400 pl-4 mb-6">Data Security</h2>
              <div className="p-6 bg-white rounded-xl shadow-md border border-rose-50">
                <p>The security of your data is important to us. We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 border-l-4 border-rose-400 pl-4 mb-6">Your Rights</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="mb-4">Under data protection laws, you have rights including:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 border border-rose-100 rounded-lg hover:bg-rose-50 transition-colors">
                    <h4 className="font-bold text-rose-600 mb-2">Right to Access</h4>
                    <p className="text-sm">You can ask for copies of your personal data.</p>
                  </div>
                  <div className="p-4 border border-rose-100 rounded-lg hover:bg-rose-50 transition-colors">
                    <h4 className="font-bold text-rose-600 mb-2">Right to Rectification</h4>
                    <p className="text-sm">You can ask us to rectify information you think is inaccurate.</p>
                  </div>
                  <div className="p-4 border border-rose-100 rounded-lg hover:bg-rose-50 transition-colors">
                    <h4 className="font-bold text-rose-600 mb-2">Right to Erasure</h4>
                    <p className="text-sm">You can ask us to erase your personal data in certain circumstances.</p>
                  </div>
                  <div className="p-4 border border-rose-100 rounded-lg hover:bg-rose-50 transition-colors">
                    <h4 className="font-bold text-rose-600 mb-2">Right to Restriction</h4>
                    <p className="text-sm">You can ask us to restrict the processing of your information.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-rose-50 rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-rose-600 mb-4">Contact Information</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <address className="not-italic">
                  <div className="font-bold">Think Labs Digital</div>
                  Jothiswamy street<br />
                  Tiruttani, Tamil Nadu<br />
                  India, 631209<br />
                  <a href="mailto:hi.snuggleshots@gmail.com" className="text-rose-600 hover:text-rose-700 font-medium">hi.snuggleshots@gmail.com</a>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
