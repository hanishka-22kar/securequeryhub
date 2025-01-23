import React from 'react';
import { 
  Sidebar, 
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton 
} from "@/components/ui/sidebar";
import { CreditCard, MessageCircle, Star } from 'lucide-react';

const channels = [
  { id: 1, name: 'loan section', icon: CreditCard },
  { id: 2, name: 'query section', icon: MessageCircle },
  { id: 3, name: 'feedback section', icon: Star },
];

const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-3">
          <h2 className="text-2xl font-bold text-white mb-4 font-sans">GuardAI</h2>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-white text-sm font-medium">Channels</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {channels.map((channel) => (
                <SidebarMenuItem key={channel.id}>
                  <SidebarMenuButton asChild>
                    <a href={`#${channel.name}`} className="flex items-center gap-2 text-white hover:text-primary font-sans text-base">
                      <channel.icon size={20} />
                      <span>{channel.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;