import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from '../components/DashboardSidebar';
import { MessageCircle } from 'lucide-react';

const QueryDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#1A1A1A]">
        <DashboardSidebar />
        <main className="flex-1 bg-background p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <header className="flex items-center gap-3 mb-8">
              <MessageCircle className="h-10 w-10 text-primary" />
              <h1 className="text-3xl font-bold">Query Dashboard</h1>
            </header>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Common Issues</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="font-medium">Audio Issues</h3>
                    <p className="text-sm text-gray-600">Troubleshooting common audio problems</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="font-medium">Video Quality</h3>
                    <p className="text-sm text-gray-600">Resolution and streaming issues</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Support Channels</h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Live Chat Support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Email Support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Phone Support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Knowledge Base
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

export default QueryDashboard;