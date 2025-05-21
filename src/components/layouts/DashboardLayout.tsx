
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarNav from './SidebarNav';
import TopNav from './TopNav';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const DashboardLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();
  
  // On mobile, sidebar is hidden by default
  const effectiveCollapsed = isMobile ? true : sidebarCollapsed;

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-sidebar flex-shrink-0 h-screen transition-all duration-300 ease-in-out overflow-y-auto",
          effectiveCollapsed ? "w-16" : "w-64"
        )}
      >
        <SidebarNav collapsed={effectiveCollapsed} />
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNav toggleSidebar={toggleSidebar} sidebarCollapsed={effectiveCollapsed} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
