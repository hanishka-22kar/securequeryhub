import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LoanDashboard from "./pages/LoanDashboard";
import QueryDashboard from "./pages/QueryDashboard";
import FeedbackDashboard from "./pages/FeedbackDashboard";
import ChatbotPage from "./pages/ChatbotPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/loan" element={<LoanDashboard />} />
          <Route path="/query" element={<QueryDashboard />} />
          <Route path="/feedback" element={<FeedbackDashboard />} />
          <Route path="/chat" element={<ChatbotPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;