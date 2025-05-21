
import { useState } from 'react';
import { Menu, X, Bell, ChevronDown } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TopNavProps {
  toggleSidebar: () => void;
  sidebarCollapsed: boolean;
}

const TopNav = ({ toggleSidebar, sidebarCollapsed }: TopNavProps) => {
  const { user, logout } = useAuth();
  const [notifications] = useState(3);

  // Extract initials from user name
  const getInitials = (name?: string) => {
    if (!name) return 'AU';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar} 
          className="mr-4 rounded-md p-1.5 hover:bg-gray-100 focus:outline-none"
        >
          {sidebarCollapsed ? <Menu className="h-6 w-6" /> : <X className="h-6 w-6" />}
        </button>
        <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button className="rounded-full p-1 hover:bg-gray-100 focus:outline-none">
            <Bell className="h-6 w-6" />
            {notifications > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {notifications}
              </span>
            )}
          </button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 rounded-full focus:outline-none">
            <Avatar className="h-8 w-8 border border-gray-200">
              <AvatarImage src={user?.avatar} alt={user?.name || 'User'} />
              <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
            </Avatar>
            <span className="hidden text-sm font-medium md:inline-block">{user?.name}</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/dashboard/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopNav;
