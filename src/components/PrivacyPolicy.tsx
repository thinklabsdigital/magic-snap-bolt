
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>Welcome to SnuggleShots. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

          <h2>Information We Collect</h2>
          <h3>Personal Data</h3>
          <p>We may collect personal identification information, including but not limited to:</p>
          <ul>
            <li>Name and email address</li>
            <li>Billing information and payment details</li>
            <li>Business information</li>
            <li>User-generated content and preferences</li>
          </ul>

          <h3>Usage Data</h3>
          <p>We may also collect information on how the service is accessed and used, including:</p>
          <ul>
            <li>Browser type and version</li>
            <li>Time spent on pages</li>
            <li>Access times and dates</li>
            <li>Operating system</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information to improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h2>Data Security</h2>
          <p>The security of your data is important to us. We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>

          <h2>Third-Party Services</h2>
          <p>We may employ third-party companies and individuals to facilitate our service, provide service-related services, or assist us in analyzing how our service is used. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

          <h2>Your Rights</h2>
          <p>Under data protection laws, you have rights including:</p>
          <ul>
            <li>Your right to access - You can ask for copies of your personal data.</li>
            <li>Your right to rectification - You can ask us to rectify information you think is inaccurate.</li>
            <li>Your right to erasure - You can ask us to erase your personal data in certain circumstances.</li>
            <li>Your right to restriction of processing - You can ask us to restrict the processing of your information.</li>
            <li>Your right to object to processing - You can object to the processing of your personal data in certain circumstances.</li>
          </ul>

          <h2>Contact Information</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <address>
            Think Labs Digital<br />
            Jothiswamy street<br />
            Tiruttani, Tamil Nadu<br />
            India, 631209<br />
            Email: hi.snuggleshots@gmail.com
          </address>
        </div>
      </div>
    </section>
  );
}
