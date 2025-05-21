
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Building, Calendar, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarNavProps {
  collapsed: boolean;
}

const SidebarNav = ({ collapsed }: SidebarNavProps) => {
  const { logout } = useAuth();
  const location = useLocation();
  
  const menuItems = [
    {
      title: 'Home',
      icon: <Home />,
      path: '/dashboard',
    },
    {
      title: 'Vendors',
      icon: <Building />,
      path: '/dashboard/vendors',
    },
    {
      title: 'Customers',
      icon: <Users />,
      path: '/dashboard/customers',
    },
    {
      title: 'Rooms',
      icon: <Building />,
      path: '/dashboard/rooms',
    },
    {
      title: 'Bookings',
      icon: <Calendar />,
      path: '/dashboard/bookings',
    },
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="space-y-4">
        <div className={cn("px-3 py-2", collapsed ? "items-center" : "")}>
          {!collapsed && <h3 className="text-lg font-semibold text-sidebar-foreground mb-4">Admin Dashboard</h3>}
        </div>
        <nav className="flex flex-col gap-2 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "sidebar-item",
                location.pathname === item.path && "active",
                collapsed && "justify-center px-2"
              )}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {!collapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="mb-6 px-2">
        <Button 
          variant="ghost" 
          className={cn(
            "sidebar-item w-full justify-start",
            collapsed && "justify-center px-2"
          )}
          onClick={logout}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span>Logout</span>}
        </Button>
      </div>
    </div>
  );
};

export default SidebarNav;
