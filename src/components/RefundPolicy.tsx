
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RefundPolicy() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2>Overview</h2>
          <p>At SNUGGLESHOTS, we are committed to ensuring customer satisfaction with our products. We understand that sometimes a product may not meet your expectations, and we want to address any concerns you may have.</p>

          <h2>30-Day Trial Period</h2>
          <p>We encourage you to use the product for a minimum of 30 days. During this period, please document your experience with progress videos, showcasing your efforts to follow the provided guidelines.</p>

          <h2>Refund Eligibility</h2>
          <p>To be eligible for a refund, you must:</p>
          <ul>
            <li>Use the product for at least 30 days.</li>
            <li>Document your progress with detailed videos.</li>
            <li>Submit the videos to our team for review.</li>
          </ul>

          <h2>Submission of Documentation</h2>
          <p>If you feel that the product has not delivered the desired transformation after the trial period, please send your detailed videos to us. Our team will assess your submission and determine if a refund is warranted.</p>

          <h2>Important Note</h2>
          <p>Please be aware that if you do not provide the required documentation or do not complete the 30-day trial period, you will not qualify for a refund.</p>

          <h2>Contact Information</h2>
          <p>For any questions or to submit your documentation, please reach out to our customer support team at <a href="mailto:hi.snuggleshots@gmail.com">hi.snuggleshots@gmail.com</a></p>

          <p>Thank you for choosing SNUGGLESHOTS. We appreciate your understanding and look forward to assisting you.</p>
        </div>
      </div>
    </section>
  );
}
