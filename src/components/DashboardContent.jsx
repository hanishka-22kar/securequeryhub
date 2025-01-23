import React from 'react';
import { Calendar } from 'lucide-react';

const DashboardContent = () => {
  return (
    <main className="flex-1 bg-background">
      <div className="border-b border-border">
        <header className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-semibold"># project-gizmo</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-muted-foreground hover:text-foreground">
                <Calendar className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>
      </div>

      <div className="p-6">
        <div className="flex items-start space-x-4 mb-8">
          <div className="flex-shrink-0">
            <Calendar className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Google Calendar</h3>
            <p className="text-primary">Project Status Meeting</p>
            <p className="text-sm text-muted-foreground">Today from 01:30-02:00 IST</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardContent;