import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from '../components/DashboardSidebar';
import { Star } from 'lucide-react';

const FeedbackDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#1A1A1A]">
        <DashboardSidebar />
        <main className="flex-1 bg-background p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <header className="flex items-center gap-3 mb-8">
              <Star className="h-10 w-10 text-primary" />
              <h1 className="text-3xl font-bold">Feedback Dashboard</h1>
            </header>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Feedback</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="font-medium">Service Quality</h3>
                    <p className="text-sm text-gray-600">Overall satisfaction with our services</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="font-medium">User Experience</h3>
                    <p className="text-sm text-gray-600">Platform usability and features</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Feedback Categories</h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Service Quality
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    User Experience
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Technical Issues
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Feature Requests
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default FeedbackDashboard;