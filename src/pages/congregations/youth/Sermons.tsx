import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, Play, Download } from "lucide-react";
import { Tables } from "@/integrations/supabase/types";

type Sermon = Tables<"sermons">;

const YouthSermons = () => {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchSermons();
  }, []);

  const fetchSermons = async () => {
    try {
      const { data, error } = await supabase
        .from("sermons")
        .select("*")
        .eq("congregation", "youth")
        .order("sermon_date", { ascending: false });

      if (error) throw error;
      setSermons(data || []);
    } catch (error) {
      console.error("Error fetching sermons:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredSermons = sermons.filter((sermon) =>
    sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sermon.scripture_reference?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="h-20 bg-muted rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Youth Sermons</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful, relevant messages designed to inspire and challenge young hearts
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search sermons, speakers, or scripture..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Sermons Grid */}
        {filteredSermons.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">No Sermons Found</h3>
              <p className="text-muted-foreground">
                {searchTerm 
                  ? "Try adjusting your search terms" 
                  : "Youth sermons will appear here once they're uploaded"}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSermons.map((sermon) => (
              <Card key={sermon.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">Youth</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(sermon.sermon_date)}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{sermon.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {sermon.speaker}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {sermon.scripture_reference && (
                    <div className="flex items-center text-sm text-primary mb-3">
                      <Badge variant="outline" className="text-xs">
                        {sermon.scripture_reference}
                      </Badge>
                    </div>
                  )}
                  
                  {sermon.description && (
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {sermon.description}
                    </p>
                  )}

                  <div className="flex gap-2">
                    {sermon.audio_url && (
                      <Button size="sm" variant="default" asChild>
                        <a href={sermon.audio_url} target="_blank" rel="noopener noreferrer">
                          <Play className="h-4 w-4 mr-1" />
                          Listen
                        </a>
                      </Button>
                    )}
                    {sermon.video_url && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={sermon.video_url} target="_blank" rel="noopener noreferrer">
                          <Play className="h-4 w-4 mr-1" />
                          Watch
                        </a>
                      </Button>
                    )}
                    {sermon.youtube_url && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={sermon.youtube_url} target="_blank" rel="noopener noreferrer">
                          <Play className="h-4 w-4 mr-1" />
                          YouTube
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default YouthSermons;