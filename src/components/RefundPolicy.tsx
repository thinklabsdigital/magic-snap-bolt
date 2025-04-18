
import React from 'react';
import { ArrowLeft, Clock, FileCheck, AlertCircle, Mail, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RefundPolicy() {
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

          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Refund Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="rounded-xl bg-rose-50/50 border border-rose-100 p-6 mb-8">
              <h2 className="text-xl font-bold text-rose-600 mb-3">Overview</h2>
              <p>At SNUGGLESHOTS, we are committed to ensuring customer satisfaction with our products. We understand that sometimes a product may not meet your expectations, and we want to address any concerns you may have.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-rose-50 group transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-rose-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors">30-Day Trial Period</h2>
                <p>We encourage you to use the product for a minimum of 30 days. During this period, please document your experience with progress videos, showcasing your efforts to follow the provided guidelines.</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-rose-50 group transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-rose-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors">Refund Eligibility</h2>
                <p className="mb-3">To be eligible for a refund, you must:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-rose-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Use the product for at least 30 days.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-rose-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Document your progress with detailed videos.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-rose-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Submit the videos to our team for review.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-rose-50 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FileCheck className="w-5 h-5 mr-2 text-rose-500" />
                Submission of Documentation
              </h2>
              <p>If you feel that the product has not delivered the desired transformation after the trial period, please send your detailed videos to us. Our team will assess your submission and determine if a refund is warranted.</p>
            </div>

            <div className="bg-rose-100/50 rounded-xl p-6 border border-rose-200 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-rose-500" />
                Important Note
              </h2>
              <p className="text-rose-700">Please be aware that if you do not provide the required documentation or do not complete the 30-day trial period, you will not qualify for a refund.</p>
            </div>

            <div className="bg-rose-50 rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-rose-600 mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-rose-500" />
                Contact Information
              </h2>
              <p className="mb-4">For any questions or to submit your documentation, please reach out to our customer support team at:</p>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-rose-600" />
                </div>
                <a href="mailto:hi.snuggleshots@gmail.com" className="text-rose-600 hover:text-rose-700 font-medium">hi.snuggleshots@gmail.com</a>
              </div>
              
              <p className="mt-6 text-center font-medium">Thank you for choosing SNUGGLESHOTS. We appreciate your understanding and look forward to assisting you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
