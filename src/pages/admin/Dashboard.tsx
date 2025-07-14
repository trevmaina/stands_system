import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileText, Calendar, Image, Settings, BarChart3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UserProfile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  role: string;
}

export default function AdminDashboard() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUserAccess();
  }, []);

  const checkUserAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/auth');
        return;
      }

      const { data: userProfile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error) {
        toast({
          title: "Access Denied",
          description: "Unable to verify admin access.",
          variant: "destructive",
        });
        navigate('/');
        return;
      }

      // Check if user has admin privileges
      const adminRoles = ['super_admin', 'lead_pastor', 'church_admin', 'ministry_head', 'media_team', 'events_coordinator'];
      if (!adminRoles.includes(userProfile.role)) {
        toast({
          title: "Access Denied",
          description: "You don't have permission to access the admin panel.",
          variant: "destructive",
        });
        navigate('/');
        return;
      }

      setProfile(userProfile);
    } catch (error) {
      console.error('Error checking access:', error);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const getRoleDisplayName = (role: string) => {
    const roleMap: { [key: string]: string } = {
      super_admin: "Super Administrator",
      lead_pastor: "Lead Pastor",
      church_admin: "Church Administrator",
      ministry_head: "Ministry Head",
      media_team: "Media Team",
      events_coordinator: "Events Coordinator",
      member: "Member"
    };
    return roleMap[role] || role;
  };

  const hasPermission = (requiredRoles: string[]) => {
    return profile && requiredRoles.includes(profile.role);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back, {profile.first_name} {profile.last_name} ({getRoleDisplayName(profile.role)})
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Content Management */}
          {hasPermission(['super_admin', 'lead_pastor', 'church_admin', 'ministry_head', 'media_team']) && (
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/admin/content')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Content Management
                </CardTitle>
                <CardDescription>
                  Manage sermons, articles, announcements, and other content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Manage Content
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Events Management */}
          {hasPermission(['super_admin', 'church_admin', 'ministry_head', 'events_coordinator']) && (
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/admin/events')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Events Management
                </CardTitle>
                <CardDescription>
                  Create and manage church events, registrations, and calendar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Manage Events
                </Button>
              </CardContent>
            </Card>
          )}

          {/* User Management */}
          {hasPermission(['super_admin', 'church_admin']) && (
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/admin/users')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  User Management
                </CardTitle>
                <CardDescription>
                  Manage user accounts, roles, and permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Manage Users
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Media Library */}
          {hasPermission(['super_admin', 'church_admin', 'ministry_head', 'media_team']) && (
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/admin/media')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="h-5 w-5" />
                  Media Library
                </CardTitle>
                <CardDescription>
                  Upload and manage images, videos, and documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Manage Media
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Analytics */}
          {hasPermission(['super_admin', 'lead_pastor', 'church_admin', 'media_team']) && (
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/admin/analytics')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Analytics
                </CardTitle>
                <CardDescription>
                  View website traffic, engagement, and content performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Settings */}
          {hasPermission(['super_admin', 'church_admin']) && (
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/admin/settings')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Settings
                </CardTitle>
                <CardDescription>
                  Configure site settings, permissions, and system preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Manage Settings
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => navigate('/')}>
              Back to Website
            </Button>
            {hasPermission(['super_admin', 'lead_pastor', 'church_admin', 'ministry_head', 'media_team']) && (
              <Button variant="outline" onClick={() => navigate('/admin/content/new')}>
                Create New Content
              </Button>
            )}
            {hasPermission(['super_admin', 'church_admin', 'ministry_head', 'events_coordinator']) && (
              <Button variant="outline" onClick={() => navigate('/admin/events/new')}>
                Create New Event
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}