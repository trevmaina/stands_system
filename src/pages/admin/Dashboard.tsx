import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, FileText, Calendar, Image, Settings, BarChart3, Activity, TrendingUp, Eye, MessageSquare } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent-muted/20 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent rounded-3xl"></div>
          <div className="relative p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-muted-foreground mt-2 text-lg">
                  Welcome back, <span className="font-semibold text-foreground">{profile.first_name} {profile.last_name}</span>
                </p>
                <Badge variant="secondary" className="mt-2 bg-accent/20 text-accent-foreground border-accent/30">
                  {getRoleDisplayName(profile.role)}
                </Badge>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Activity className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">System Status</p>
                        <p className="text-xs text-muted-foreground">All systems operational</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600/80">Total Content</p>
                  <p className="text-2xl font-bold text-blue-700">24</p>
                  <p className="text-xs text-blue-500 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% this month
                  </p>
                </div>
                <div className="bg-blue-500/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600/80">Active Users</p>
                  <p className="text-2xl font-bold text-green-700">142</p>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +5% this week
                  </p>
                </div>
                <div className="bg-green-500/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600/80">Upcoming Events</p>
                  <p className="text-2xl font-bold text-purple-700">8</p>
                  <p className="text-xs text-purple-500 flex items-center mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    Next: Sunday Service
                  </p>
                </div>
                <div className="bg-purple-500/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600/80">Monthly Views</p>
                  <p className="text-2xl font-bold text-orange-700">1.2k</p>
                  <p className="text-xs text-orange-500 flex items-center mt-1">
                    <Eye className="h-3 w-3 mr-1" />
                    +18% increase
                  </p>
                </div>
                <div className="bg-orange-500/10 p-3 rounded-full">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Management Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Content Management */}
          {hasPermission(['super_admin', 'lead_pastor', 'church_admin', 'ministry_head', 'media_team']) && (
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-card to-muted/30 border-0 shadow-md overflow-hidden" onClick={() => navigate('/admin/content')}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                    Active
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  Content Management
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Create and manage sermons, articles, announcements, and all website content with rich editing tools.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-xl font-bold text-primary">24</p>
                      <p className="text-xs text-muted-foreground">Published</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-orange-500">5</p>
                      <p className="text-xs text-muted-foreground">Drafts</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary-light shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <FileText className="h-4 w-4 mr-2" />
                  Manage Content
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Events Management */}
          {hasPermission(['super_admin', 'church_admin', 'ministry_head', 'events_coordinator']) && (
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-card to-muted/30 border-0 shadow-md overflow-hidden" onClick={() => navigate('/admin/events')}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <div className="bg-green-500/10 p-3 rounded-full group-hover:bg-green-500/20 transition-colors duration-300">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <Badge variant="outline" className="bg-green-500/5 text-green-600 border-green-500/20">
                    8 Upcoming
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-green-600 transition-colors duration-300">
                  Events Management
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Plan, schedule, and manage church events, handle registrations, and maintain the community calendar.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-xl font-bold text-green-600">8</p>
                      <p className="text-xs text-muted-foreground">This Month</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-blue-500">142</p>
                      <p className="text-xs text-muted-foreground">Attendees</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Calendar className="h-4 w-4 mr-2" />
                  Manage Events
                </Button>
              </CardContent>
            </Card>
          )}

          {/* User Management */}
          {hasPermission(['super_admin', 'church_admin']) && (
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-card to-muted/30 border-0 shadow-md overflow-hidden" onClick={() => navigate('/admin/users')}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <div className="bg-purple-500/10 p-3 rounded-full group-hover:bg-purple-500/20 transition-colors duration-300">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <Badge variant="outline" className="bg-purple-500/5 text-purple-600 border-purple-500/20">
                    142 Users
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-purple-600 transition-colors duration-300">
                  User Management
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Manage member accounts, assign roles, control permissions, and oversee community access.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-xl font-bold text-purple-600">142</p>
                      <p className="text-xs text-muted-foreground">Total</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-pink-500">12</p>
                      <p className="text-xs text-muted-foreground">New</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Users
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Media Library */}
          {hasPermission(['super_admin', 'church_admin', 'ministry_head', 'media_team']) && (
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-card to-muted/30 border-0 shadow-md overflow-hidden" onClick={() => navigate('/admin/media')}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <div className="bg-orange-500/10 p-3 rounded-full group-hover:bg-orange-500/20 transition-colors duration-300">
                    <Image className="h-6 w-6 text-orange-600" />
                  </div>
                  <Badge variant="outline" className="bg-orange-500/5 text-orange-600 border-orange-500/20">
                    2.1 GB
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-orange-600 transition-colors duration-300">
                  Media Library
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Upload, organize, and manage all media assets including images, videos, and documents.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-xl font-bold text-orange-600">156</p>
                      <p className="text-xs text-muted-foreground">Files</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-red-500">24</p>
                      <p className="text-xs text-muted-foreground">Videos</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Image className="h-4 w-4 mr-2" />
                  Manage Media
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Analytics */}
          {hasPermission(['super_admin', 'lead_pastor', 'church_admin', 'media_team']) && (
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-card to-muted/30 border-0 shadow-md overflow-hidden" onClick={() => navigate('/admin/analytics')}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <div className="bg-blue-500/10 p-3 rounded-full group-hover:bg-blue-500/20 transition-colors duration-300">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="outline" className="bg-blue-500/5 text-blue-600 border-blue-500/20">
                    +18% ↗
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">
                  Analytics
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Track website performance, user engagement, and content analytics with detailed insights.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-xl font-bold text-blue-600">1.2k</p>
                      <p className="text-xs text-muted-foreground">Monthly</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-cyan-500">89%</p>
                      <p className="text-xs text-muted-foreground">Engagement</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Settings */}
          {hasPermission(['super_admin', 'church_admin']) && (
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-card to-muted/30 border-0 shadow-md overflow-hidden" onClick={() => navigate('/admin/settings')}>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <div className="bg-gray-500/10 p-3 rounded-full group-hover:bg-gray-500/20 transition-colors duration-300">
                    <Settings className="h-6 w-6 text-gray-600" />
                  </div>
                  <Badge variant="outline" className="bg-gray-500/5 text-gray-600 border-gray-500/20">
                    System
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-gray-600 transition-colors duration-300">
                  Settings
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Configure system settings, manage permissions, and customize platform preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-600">12</p>
                      <p className="text-xs text-muted-foreground">Modules</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-slate-500">5</p>
                      <p className="text-xs text-muted-foreground">Updates</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-gray-600 hover:bg-gray-700 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Settings className="h-4 w-4 mr-2" />
                  Manage Settings
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Quick Actions */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-card to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button onClick={() => navigate('/')} variant="outline" className="h-16 text-left justify-start hover:bg-primary/5 hover:border-primary/30 transition-all duration-300">
                  <div>
                    <p className="font-medium">Back to Website</p>
                    <p className="text-xs text-muted-foreground">View public site</p>
                  </div>
                </Button>
                {hasPermission(['super_admin', 'lead_pastor', 'church_admin', 'ministry_head', 'media_team']) && (
                  <Button variant="outline" onClick={() => navigate('/admin/content/new')} className="h-16 text-left justify-start hover:bg-green-500/5 hover:border-green-500/30 transition-all duration-300">
                    <div>
                      <p className="font-medium">Create New Content</p>
                      <p className="text-xs text-muted-foreground">Add sermon, article, etc.</p>
                    </div>
                  </Button>
                )}
                {hasPermission(['super_admin', 'church_admin', 'ministry_head', 'events_coordinator']) && (
                  <Button variant="outline" onClick={() => navigate('/admin/events/new')} className="h-16 text-left justify-start hover:bg-blue-500/5 hover:border-blue-500/30 transition-all duration-300">
                    <div>
                      <p className="font-medium">Create New Event</p>
                      <p className="text-xs text-muted-foreground">Schedule church event</p>
                    </div>
                  </Button>
                )}
                <Button variant="outline" className="h-16 text-left justify-start hover:bg-purple-500/5 hover:border-purple-500/30 transition-all duration-300">
                  <div>
                    <p className="font-medium">View Reports</p>
                    <p className="text-xs text-muted-foreground">System analytics</p>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-gradient-to-br from-card to-accent/5 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-accent-foreground" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-500/10 p-1 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New user registered</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/10 p-1 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Event updated</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 p-1 rounded-full">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Content published</p>
                  <p className="text-xs text-muted-foreground">3 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/10 p-1 rounded-full">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Media uploaded</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}