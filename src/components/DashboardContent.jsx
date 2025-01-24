import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, MessageCircle, Star, TrendingUp, Users, DollarSign } from 'lucide-react';

const DashboardContent = () => {
  return (
    <main className="flex-1 bg-background overflow-y-auto">
      <div className="border-b border-border">
        <header className="px-6 py-4">
          <h1 className="text-2xl font-semibold text-foreground">Overview Dashboard</h1>
        </header>
      </div>

      <div className="p-6 space-y-8">
        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Loans</CardTitle>
              <CreditCard className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Queries</CardTitle>
              <MessageCircle className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">12 resolved this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customer Feedback</CardTitle>
              <Star className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8/5.0</div>
              <p className="text-xs text-muted-foreground">+2.4% from last week</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { icon: CreditCard, title: "New Loan Application", desc: "Personal loan request - $25,000" },
                { icon: MessageCircle, title: "Support Query", desc: "Technical assistance requested" },
                { icon: Star, title: "New Feedback", desc: "5-star rating received" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 rounded-md border p-4">
                  <item.icon className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm font-medium leading-none">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default DashboardContent;