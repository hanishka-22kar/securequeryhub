import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from '../components/DashboardSidebar';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send } from 'lucide-react';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }]);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "I'm a demo chatbot. This is a simulated response." 
        }]);
      }, 1000);
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#1A1A1A]">
        <DashboardSidebar />
        <main className="flex-1 bg-[#1A1A1A] flex flex-col">
          <header className="bg-[#2A2A2A] border-b border-gray-800 p-4">
            <div className="max-w-4xl mx-auto flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-semibold text-white">Chat Assistant</h1>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-[#2A2A2A] text-white'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-800 bg-[#2A2A2A] p-4">
            <div className="max-w-4xl mx-auto flex gap-4">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-[#1A1A1A] border-gray-800 text-white"
              />
              <Button onClick={handleSend} className="bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ChatbotPage;