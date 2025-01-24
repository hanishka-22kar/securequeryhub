import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from '../components/DashboardSidebar';
import { MessageCircle, Headphones, Video, Settings, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const QueryDashboard = () => {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#1A1A1A]">
        <DashboardSidebar />
        <main className="flex-1 bg-background p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <header className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-10 w-10 text-primary" />
                <h1 className="text-3xl font-bold">Customer Support Center</h1>
              </div>
              <Button 
                onClick={() => navigate('/chat')}
                className="bg-primary hover:bg-primary/90"
              >
                Live Chat Support
              </Button>
            </header>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Headphones className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold">Audio Issues</h2>
                </div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>No Sound</AccordionTrigger>
                    <AccordionContent>
                      1. Check if your device is muted
                      2. Verify speaker/headphone connections
                      3. Update audio drivers
                      4. Restart the application
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Audio Quality Issues</AccordionTrigger>
                    <AccordionContent>
                      1. Check your internet connection
                      2. Close background applications
                      3. Try different audio output devices
                      4. Clear browser cache
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Video className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold">Video Issues</h2>
                </div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Buffering Problems</AccordionTrigger>
                    <AccordionContent>
                      1. Check internet speed
                      2. Lower video quality settings
                      3. Clear browser cache
                      4. Try a different browser
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Video Not Playing</AccordionTrigger>
                    <AccordionContent>
                      1. Update your browser
                      2. Check browser compatibility
                      3. Disable ad blockers
                      4. Update video drivers
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mt-6">
              <div className="flex items-center gap-2 mb-4">
                <Settings className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">General Settings & Support</h2>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Account Settings</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      <li>• How to change password</li>
                      <li>• Update profile information</li>
                      <li>• Manage notification settings</li>
                      <li>• Privacy settings</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Payment Issues</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      <li>• Supported payment methods</li>
                      <li>• Billing cycle information</li>
                      <li>• How to update payment details</li>
                      <li>• Refund policy</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Common Problems</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      <li>• Login issues</li>
                      <li>• App performance</li>
                      <li>• Device compatibility</li>
                      <li>• Data synchronization</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mt-6">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">Need More Help?</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  If you couldn't find the answer to your question, our support team is here to help.
                </p>
                <div className="flex gap-4">
                  <Button 
                    onClick={() => navigate('/chat')}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Start Live Chat
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/feedback')}
                  >
                    Submit Feedback
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default QueryDashboard;