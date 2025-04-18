
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TermsOfService() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>These Terms of Service govern your use of SnuggleShots and the services we provide. By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.</p>

          <h2>Accounts</h2>
          <p>When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.</p>
          <p>You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.</p>

          <h2>Intellectual Property</h2>
          <p>The service and its original content, features, and functionality are and will remain the exclusive property of Think Labs Digital. The service is protected by copyright, trademark, and other laws.</p>
          <p>Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Think Labs Digital.</p>

          <h2>User Content</h2>
          <p>Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content you post to the service, including its legality, reliability, and appropriateness.</p>
          <p>By posting content to the service, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the service.</p>

          <h2>Prohibited Uses</h2>
          <p>You agree not to use the service:</p>
          <ul>
            <li>In any way that violates any applicable national or international law or regulation</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation</li>
            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
            <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
          </ul>

          <h2>Termination</h2>
          <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          <p>Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service.</p>

          <h2>Limitation of Liability</h2>
          <p>In no event shall Think Labs Digital, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>

          <h2>Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
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
