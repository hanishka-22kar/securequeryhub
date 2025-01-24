import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from '../components/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, DollarSign, TrendingUp, Clock } from 'lucide-react';

const LoanDashboard = () => {
  const loanTypes = [
    { name: "Personal Loan", rate: "8.5%", term: "1-5 years", amount: "$1,000 - $50,000" },
    { name: "Business Loan", rate: "10.5%", term: "2-7 years", amount: "$10,000 - $500,000" },
    { name: "Home Loan", rate: "6.5%", term: "15-30 years", amount: "$50,000 - $1,000,000" },
    { name: "Education Loan", rate: "7.5%", term: "5-15 years", amount: "$5,000 - $100,000" }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#1A1A1A]">
        <DashboardSidebar />
        <main className="flex-1 bg-background p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8">
            <header className="flex items-center gap-3 mb-8">
              <CreditCard className="h-10 w-10 text-primary" />
              <h1 className="text-3xl font-bold">Loan Dashboard</h1>
            </header>

            {/* Loan Statistics */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Active Loans</CardTitle>
                  <DollarSign className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$142,384</div>
                  <p className="text-xs text-muted-foreground">Across 24 active loans</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Interest Rate</CardTitle>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8.2%</div>
                  <p className="text-xs text-muted-foreground">-0.5% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
                  <Clock className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">Processing time: 2-3 days</p>
                </CardContent>
              </Card>
            </div>

            {/* Loan Types */}
            <Card>
              <CardHeader>
                <CardTitle>Available Loan Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {loanTypes.map((loan, index) => (
                    <div key={index} className="flex flex-col space-y-2 rounded-lg border p-4">
                      <h3 className="font-semibold text-lg">{loan.name}</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-muted-foreground">Interest Rate</p>
                          <p className="font-medium">{loan.rate}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Term Length</p>
                          <p className="font-medium">{loan.term}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-muted-foreground">Amount Range</p>
                          <p className="font-medium">{loan.amount}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default LoanDashboard;