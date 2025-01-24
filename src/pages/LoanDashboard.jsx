import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from '../components/DashboardSidebar';
import { CreditCard } from 'lucide-react';

const LoanDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#1A1A1A]">
        <DashboardSidebar />
        <main className="flex-1 bg-background p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <header className="flex items-center gap-3 mb-8">
              <CreditCard className="h-10 w-10 text-primary" />
              <h1 className="text-3xl font-bold">Loan Dashboard</h1>
            </header>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Active Loans</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="font-medium">Personal Loan</h3>
                    <p className="text-sm text-gray-600">Amount: $10,000</p>
                    <p className="text-sm text-gray-600">Status: Active</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="font-medium">Home Loan</h3>
                    <p className="text-sm text-gray-600">Amount: $250,000</p>
                    <p className="text-sm text-gray-600">Status: In Progress</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Available Loan Types</h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Personal Loans
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Business Loans
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Home Loans
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Education Loans
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

export default LoanDashboard;