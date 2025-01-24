import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from '../components/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ThumbsUp, ThumbsDown, MessageCircle, TrendingUp } from 'lucide-react';

const FeedbackDashboard = () => {
  const recentFeedback = [
    { type: 'positive', message: "Great customer service experience!", rating: 5, date: "2 hours ago" },
    { type: 'positive', message: "Quick loan approval process", rating: 4, date: "5 hours ago" },
    { type: 'negative', message: "App could be more user-friendly", rating: 3, date: "1 day ago" },
    { type: 'positive', message: "Very helpful support team", rating: 5, date: "2 days ago" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#1A1A1A]">
        <DashboardSidebar />
        <main className="flex-1 bg-background p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8">
            <header className="flex items-center gap-3 mb-8">
              <Star className="h-10 w-10 text-primary" />
              <h1 className="text-3xl font-bold">Feedback Dashboard</h1>
            </header>

            {/* Feedback Statistics */}
            <div className="grid gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                  <Star className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8/5.0</div>
                  <p className="text-xs text-muted-foreground">From 2,389 ratings</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Positive Feedback</CardTitle>
                  <ThumbsUp className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                  <p className="text-xs text-muted-foreground">+5% this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
                  <MessageCircle className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">98%</div>
                  <p className="text-xs text-muted-foreground">Average 2h response</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Trending</CardTitle>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+24%</div>
                  <p className="text-xs text-muted-foreground">More feedback this week</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Feedback */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFeedback.map((feedback, index) => (
                    <div key={index} className="flex items-start space-x-4 rounded-md border p-4">
                      {feedback.type === 'positive' ? (
                        <ThumbsUp className="h-5 w-5 text-primary mt-1" />
                      ) : (
                        <ThumbsDown className="h-5 w-5 text-destructive mt-1" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < feedback.rating ? 'text-primary' : 'text-muted'
                                }`}
                                fill={i < feedback.rating ? 'currentColor' : 'none'}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">{feedback.date}</span>
                        </div>
                        <p className="mt-1 text-sm">{feedback.message}</p>
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

export default FeedbackDashboard;