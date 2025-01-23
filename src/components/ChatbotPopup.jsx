import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 text-white"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-semibold">GuardAI Assistant</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Chat messages will go here */}
          </div>
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotPopup;