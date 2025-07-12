import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Download, Calendar, User, BookOpen } from "lucide-react";
import { format } from "date-fns";

const Sermons = () => {
  const { data: sermons, isLoading } = useQuery({
    queryKey: ["sermons"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("sermons")
        .select("*")
        .order("sermon_date", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading sermons...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Sermons
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Listen to inspiring messages that will strengthen your faith and guide you in your spiritual journey.
          </p>
        </div>
      </section>

      {/* Sermons List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {sermons && sermons.length > 0 ? (
            <div className="space-y-6">
              {sermons.map((sermon) => (
                <Card key={sermon.id} className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{sermon.title}</CardTitle>
                        <CardDescription>
                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              <span>{sermon.speaker}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{format(new Date(sermon.sermon_date), "PPP")}</span>
                            </div>
                            {sermon.scripture_reference && (
                              <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                <Badge variant="outline">{sermon.scripture_reference}</Badge>
                              </div>
                            )}
                          </div>
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        {sermon.video_url && (
                          <Button variant="default" size="sm">
                            <Play className="h-4 w-4 mr-2" />
                            Watch
                          </Button>
                        )}
                        {sermon.audio_url && (
                          <Button variant="outline" size="sm">
                            <Play className="h-4 w-4 mr-2" />
                            Listen
                          </Button>
                        )}
                        {sermon.audio_url && (
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  {sermon.description && (
                    <CardContent>
                      <p className="text-muted-foreground">{sermon.description}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Play className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No Sermons Available</h3>
              <p className="text-muted-foreground">
                Check back soon for new sermon recordings and messages.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us for Worship</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience these messages live by joining us for worship. We'd love to have you be part of our church family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Plan Your Visit
            </Button>
            <Button variant="outline" size="lg">
              Service Times
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sermons;