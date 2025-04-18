
import React from 'react';
import { ArrowLeft, Shield, UserCheck, Copyright, FileText, AlertTriangle, XCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TermsOfService() {
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
              <div className="w-40 h-36 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-rose-100 overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/u8qjiw2p1/Magic%20snap/Snuggleshots%20logo.png" 
                  alt="SnuggleShots Logo" 
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="rounded-xl bg-rose-50/50 border border-rose-100 p-6 mb-8">
              <h2 className="text-xl font-bold text-rose-600 mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-rose-500" />
                Introduction
              </h2>
              <p>These Terms of Service govern your use of SnuggleShots and the services we provide. By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.</p>
            </div>

            <div className="grid gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-rose-50 group">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center group-hover:text-rose-600 transition-colors">
                  <UserCheck className="w-5 h-5 mr-2 text-rose-500" />
                  Accounts
                </h2>
                <p className="mb-4">When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.</p>
                <p>You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-rose-50 group">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center group-hover:text-rose-600 transition-colors">
                  <Copyright className="w-5 h-5 mr-2 text-rose-500" />
                  Intellectual Property
                </h2>
                <p className="mb-4">The service and its original content, features, and functionality are and will remain the exclusive property of Think Labs Digital. The service is protected by copyright, trademark, and other laws.</p>
                <p>Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Think Labs Digital.</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-rose-50 group">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center group-hover:text-rose-600 transition-colors">
                  <FileText className="w-5 h-5 mr-2 text-rose-500" />
                  User Content
                </h2>
                <p className="mb-4">Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content you post to the service, including its legality, reliability, and appropriateness.</p>
                <p>By posting content to the service, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the service.</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-rose-50 group">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center group-hover:text-rose-600 transition-colors">
                  <AlertTriangle className="w-5 h-5 mr-2 text-rose-500" />
                  Prohibited Uses
                </h2>
                <p className="mb-3">You agree not to use the service:</p>
                <ul className="space-y-3 pl-6">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>In any way that violates any applicable national or international law or regulation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-rose-50 group">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center group-hover:text-rose-600 transition-colors">
                  <XCircle className="w-5 h-5 mr-2 text-rose-500" />
                  Termination
                </h2>
                <p className="mb-4">We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                <p>Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service.</p>
              </div>
            </div>

            <div className="bg-rose-50 rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-rose-600 mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-rose-500" />
                Contact Information
              </h2>
              <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
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
