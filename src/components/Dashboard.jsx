import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from './DashboardSidebar';
import DashboardContent from './DashboardContent';
import ChatbotPopup from './ChatbotPopup';

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#1A1A1A]">
        <DashboardSidebar />
        <DashboardContent />
        <ChatbotPopup />
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;