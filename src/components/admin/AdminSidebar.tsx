import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Users, FileText, Calendar, Image, DollarSign, Settings, BarChart3, UserCheck } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { WithRole } from '@/components/auth/WithRole';
import { Role } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    title: 'Dashboard',
    icon: BarChart3,
    path: '/admin',
    roles: [Role.SUPER_ADMIN, Role.LEAD_PASTOR, Role.CHURCH_ADMIN, Role.MINISTRY_HEAD, Role.MEDIA_TEAM, Role.EVENTS_COORDINATOR]
  },
  {
    title: 'Users',
    icon: Users,
    path: '/admin/users',
    roles: [Role.SUPER_ADMIN, Role.CHURCH_ADMIN]
  },
  {
    title: 'Content',
    icon: FileText,
    path: '/admin/content',
    roles: [Role.SUPER_ADMIN, Role.LEAD_PASTOR, Role.CHURCH_ADMIN, Role.MINISTRY_HEAD, Role.MEDIA_TEAM, Role.CONTENT_CONTRIBUTOR]
  },
  {
    title: 'Events',
    icon: Calendar,
    path: '/admin/events',
    roles: [Role.SUPER_ADMIN, Role.CHURCH_ADMIN, Role.EVENTS_COORDINATOR, Role.MINISTRY_HEAD]
  },
  {
    title: 'Media Library',
    icon: Image,
    path: '/admin/media',
    roles: [Role.SUPER_ADMIN, Role.MEDIA_TEAM, Role.CONTENT_CONTRIBUTOR]
  },
  {
    title: 'Volunteers',
    icon: UserCheck,
    path: '/admin/volunteers',
    roles: [Role.SUPER_ADMIN, Role.VOLUNTEER_COORDINATOR, Role.MINISTRY_HEAD]
  },
  {
    title: 'Finance',
    icon: DollarSign,
    path: '/admin/finance',
    roles: [Role.SUPER_ADMIN, Role.FINANCE_OFFICER]
  },
  {
    title: 'Settings',
    icon: Settings,
    path: '/admin/settings',
    roles: [Role.SUPER_ADMIN]
  }
];

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { profile } = useAuth();

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className={cn(
      "bg-card border-r transition-all duration-300 flex flex-col",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <h2 className="text-lg font-semibold">Admin Panel</h2>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="ml-auto"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <WithRole key={item.path} roles={item.roles}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted",
                  collapsed && "justify-center"
                )
              }
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          </WithRole>
        ))}
      </nav>

      {!collapsed && profile && (
        <div className="p-4 border-t">
          <div className="text-sm text-muted-foreground">
            Logged in as:
          </div>
          <div className="font-medium">
            {profile.first_name} {profile.last_name}
          </div>
          <div className="text-xs text-muted-foreground capitalize">
            {profile.role?.replace('_', ' ')}
          </div>
        </div>
      )}
    </div>
  );
}