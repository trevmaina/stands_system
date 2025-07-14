import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, Eye, Plus, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Content {
  id: string;
  title: string;
  slug: string;
  status: string;
  congregation: string;
  created_at: string;
  published_at: string | null;
  category_id: string | null;
  author_id: string;
}

export default function ContentManagement() {
  const [content, setContent] = useState<Content[]>([]);
  const [filteredContent, setFilteredContent] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [congregationFilter, setCongregationFilter] = useState("all");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchContent();
  }, []);

  useEffect(() => {
    filterContent();
  }, [content, searchQuery, statusFilter, congregationFilter]);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('content')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContent(data || []);
    } catch (error) {
      console.error('Error fetching content:', error);
      toast({
        title: "Error",
        description: "Failed to fetch content",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filterContent = () => {
    let filtered = content;

    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.slug.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(item => item.status === statusFilter);
    }

    if (congregationFilter !== "all") {
      filtered = filtered.filter(item => item.congregation === congregationFilter);
    }

    setFilteredContent(filtered);
  };

  const deleteContent = async (id: string) => {
    if (!confirm("Are you sure you want to delete this content?")) return;

    try {
      const { error } = await supabase
        .from('content')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Content deleted successfully",
      });
      fetchContent();
    } catch (error) {
      console.error('Error deleting content:', error);
      toast({
        title: "Error",
        description: "Failed to delete content",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    const statusColors = {
      published: "bg-green-100 text-green-800",
      draft: "bg-yellow-100 text-yellow-800",
      archived: "bg-gray-100 text-gray-800",
    };
    return (
      <Badge className={statusColors[status as keyof typeof statusColors] || "bg-gray-100 text-gray-800"}>
        {status}
      </Badge>
    );
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
            <h1 className="text-3xl font-bold text-foreground">Content Management</h1>
            <p className="text-muted-foreground mt-2">Manage all website content</p>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => navigate('/admin')}>
              Back to Dashboard
            </Button>
            <Button onClick={() => navigate('/admin/content/new')}>
              <Plus className="h-4 w-4 mr-2" />
              New Content
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
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
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

        {/* Content Table */}
        <Card>
          <CardHeader>
            <CardTitle>Content ({filteredContent.length})</CardTitle>
            <CardDescription>
              All content items in the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Congregation</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Published</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContent.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>{getStatusBadge(item.status)}</TableCell>
                    <TableCell className="capitalize">{item.congregation}</TableCell>
                    <TableCell>{new Date(item.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      {item.published_at ? new Date(item.published_at).toLocaleDateString() : '-'}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/admin/content/edit/${item.id}`)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(`/content/${item.slug}`, '_blank')}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteContent(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {filteredContent.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No content found matching your filters.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}