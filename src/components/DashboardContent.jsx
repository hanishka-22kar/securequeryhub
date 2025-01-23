import React from 'react';
import { CreditCard, MessageCircle, Star } from 'lucide-react';

const DashboardContent = () => {
  return (
    <main className="flex-1 bg-background overflow-y-auto">
      <div className="border-b border-border">
        <header className="px-6 py-4">
          <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
        </header>
      </div>

      <div className="p-6 space-y-8">
        {/* Loan Section */}
        <section id="loan section" className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="h-8 w-8 text-primary" />
            <h2 className="text-xl font-semibold">Loan Section</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Active Loans</h3>
              <p className="text-gray-600">View and manage your current loans. Track payments and loan status.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Available Loan Types</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Personal Loans</li>
                <li>Business Loans</li>
                <li>Home Loans</li>
                <li>Education Loans</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Query Section */}
        <section id="query section" className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="h-8 w-8 text-primary" />
            <h2 className="text-xl font-semibold">Query Section</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Customer Support</h3>
              <p className="text-gray-600">Get help with audio/video related queries through our chat support system.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Common Issues</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Audio troubleshooting</li>
                <li>Video quality issues</li>
                <li>Connection problems</li>
                <li>Device compatibility</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section id="feedback section" className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Star className="h-8 w-8 text-primary" />
            <h2 className="text-xl font-semibold">Feedback Section</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Share Your Experience</h3>
              <p className="text-gray-600">We value your feedback! Help us improve our services by sharing your thoughts and suggestions.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Feedback Categories</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Service Quality</li>
                <li>User Experience</li>
                <li>Technical Issues</li>
                <li>Feature Requests</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DashboardContent;