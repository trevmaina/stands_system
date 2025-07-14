import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, Search, UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UserProfile {
  id: string;
  user_id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  role: string;
  congregation: string;
  created_at: string;
  phone: string | null;
}

export default function UserManagement() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [congregationFilter, setCongregationFilter] = useState("all");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    filterUsers();
  }, [users, searchQuery, roleFilter, congregationFilter]);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        title: "Error",
        description: "Failed to fetch users",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filterUsers = () => {
    let filtered = users;

    if (searchQuery) {
      filtered = filtered.filter(user =>
        (user.first_name && user.first_name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.last_name && user.last_name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (roleFilter !== "all") {
      filtered = filtered.filter(user => user.role === roleFilter);
    }

    if (congregationFilter !== "all") {
      filtered = filtered.filter(user => user.congregation === congregationFilter);
    }

    setFilteredUsers(filtered);
  };

  const updateUserRole = async (userId: string, newRole: string) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ role: newRole as any })
        .eq('id', userId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "User role updated successfully",
      });
      fetchUsers();
    } catch (error) {
      console.error('Error updating user role:', error);
      toast({
        title: "Error",
        description: "Failed to update user role",
        variant: "destructive",
      });
    }
  };

  const getRoleDisplayName = (role: string) => {
    const roleMap: { [key: string]: string } = {
      super_admin: "Super Administrator",
      lead_pastor: "Lead Pastor",
      church_admin: "Church Administrator",
      ministry_head: "Ministry Head",
      media_team: "Media Team",
      finance_officer: "Finance Officer",
      events_coordinator: "Events Coordinator",
      content_contributor: "Content Contributor",
      volunteer_coordinator: "Volunteer Coordinator",
      member: "Member"
    };
    return roleMap[role] || role;
  };

  const getRoleBadgeColor = (role: string) => {
    const colors = {
      super_admin: "bg-red-100 text-red-800",
      lead_pastor: "bg-purple-100 text-purple-800",
      church_admin: "bg-blue-100 text-blue-800",
      ministry_head: "bg-green-100 text-green-800",
      media_team: "bg-orange-100 text-orange-800",
      finance_officer: "bg-yellow-100 text-yellow-800",
      events_coordinator: "bg-pink-100 text-pink-800",
      content_contributor: "bg-indigo-100 text-indigo-800",
      volunteer_coordinator: "bg-teal-100 text-teal-800",
      member: "bg-gray-100 text-gray-800"
    };
    return colors[role as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">User Management</h1>
            <p className="text-muted-foreground mt-2">Manage user accounts and permissions</p>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => navigate('/admin')}>
              Back to Dashboard
            </Button>
            <Button onClick={() => navigate('/admin/users/new')}>
              <UserPlus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="super_admin">Super Administrator</SelectItem>
                  <SelectItem value="lead_pastor">Lead Pastor</SelectItem>
                  <SelectItem value="church_admin">Church Administrator</SelectItem>
                  <SelectItem value="ministry_head">Ministry Head</SelectItem>
                  <SelectItem value="media_team">Media Team</SelectItem>
                  <SelectItem value="finance_officer">Finance Officer</SelectItem>
                  <SelectItem value="events_coordinator">Events Coordinator</SelectItem>
                  <SelectItem value="content_contributor">Content Contributor</SelectItem>
                  <SelectItem value="volunteer_coordinator">Volunteer Coordinator</SelectItem>
                  <SelectItem value="member">Member</SelectItem>
                </SelectContent>
              </Select>
              <Select value={congregationFilter} onValueChange={setCongregationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by congregation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Congregations</SelectItem>
                  <SelectItem value="main">Main</SelectItem>
                  <SelectItem value="youth">Youth</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Users ({filteredUsers.length})</CardTitle>
            <CardDescription>
              All registered users in the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Congregation</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      {user.first_name || user.last_name 
                        ? `${user.first_name || ''} ${user.last_name || ''}`.trim()
                        : 'No name set'
                      }
                    </TableCell>
                    <TableCell>{user.email || 'No email'}</TableCell>
                    <TableCell>
                      <Badge className={getRoleBadgeColor(user.role)}>
                        {getRoleDisplayName(user.role)}
                      </Badge>
                    </TableCell>
                    <TableCell className="capitalize">{user.congregation}</TableCell>
                    <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Select
                          value={user.role}
                          onValueChange={(newRole) => updateUserRole(user.id, newRole)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="super_admin">Super Admin</SelectItem>
                            <SelectItem value="lead_pastor">Lead Pastor</SelectItem>
                            <SelectItem value="church_admin">Church Admin</SelectItem>
                            <SelectItem value="ministry_head">Ministry Head</SelectItem>
                            <SelectItem value="media_team">Media Team</SelectItem>
                            <SelectItem value="finance_officer">Finance Officer</SelectItem>
                            <SelectItem value="events_coordinator">Events Coord</SelectItem>
                            <SelectItem value="content_contributor">Content Contrib</SelectItem>
                            <SelectItem value="volunteer_coordinator">Volunteer Coord</SelectItem>
                            <SelectItem value="member">Member</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/admin/users/edit/${user.id}`)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {filteredUsers.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No users found matching your filters.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}