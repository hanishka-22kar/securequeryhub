import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import { CreditCard, MessageCircle, Star, MessageSquare } from 'lucide-react';

const channels = [
  { id: 1, name: 'Loan Dashboard', path: '/loan', icon: CreditCard },
  { id: 2, name: 'Query Dashboard', path: '/query', icon: MessageCircle },
  { id: 3, name: 'Feedback Dashboard', path: '/feedback', icon: Star },
  { id: 4, name: 'Chat Assistant', path: '/chat', icon: MessageSquare },
];

const DashboardSidebar = () => {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-3">
          <h2 className="text-2xl font-bold text-white mb-4 font-sans">GuardAI</h2>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-white text-sm font-medium">Dashboards</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {channels.map((channel) => (
                <SidebarMenuItem key={channel.id}>
                  <SidebarMenuButton
                    onClick={() => navigate(channel.path)}
                    className="flex items-center gap-2 text-white hover:text-primary font-sans text-lg"
                  >
                    <channel.icon size={24} />
                    <span>{channel.name}</span>
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