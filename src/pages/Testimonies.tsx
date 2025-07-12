import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Quote, Play, Volume2, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Testimony = Tables<"testimonies">;

const Testimonies = () => {
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    content: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchTestimonies();
  }, []);

  const fetchTestimonies = async () => {
    const { data, error } = await supabase
      .from("testimonies")
      .select("*")
      .eq("approved", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching testimonies:", error);
    } else {
      setTestimonies(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { error } = await supabase
      .from("testimonies")
      .insert([{
        name: formData.name,
        title: formData.title,
        content: formData.content,
        approved: false // Will need admin approval
      }]);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to submit testimony. Please try again.",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Thank you!",
        description: "Your testimony has been submitted for review.",
      });
      setFormData({ name: "", title: "", content: "" });
      setShowForm(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Stories of Impact
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Hear how God is working in the lives of our church family and community.
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            Voices of Faith
          </h2>
        </div>
      </section>

      {/* Featured Testimonies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Static testimonies matching the reference design */}
            <Card className="border-primary/20 overflow-hidden">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-primary/30 mb-4" />
                <blockquote className="text-xl md:text-2xl text-foreground mb-6 italic">
                  "The Lord restored my family after years of brokenness. I am forever grateful."
                </blockquote>
                <div className="flex items-center justify-between">
                  <cite className="text-muted-foreground font-semibold">– Mary W.</cite>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 overflow-hidden">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-primary/30 mb-4" />
                <blockquote className="text-xl md:text-2xl text-foreground mb-6 italic">
                  "After months of job searching, God opened a door I never expected."
                </blockquote>
                <div className="flex items-center justify-between">
                  <cite className="text-muted-foreground font-semibold">– Anonymous</cite>
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Video Testimony
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 overflow-hidden">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-primary/30 mb-4" />
                <blockquote className="text-xl md:text-2xl text-foreground mb-6 italic">
                  "He healed me completely – even the doctors were amazed!"
                </blockquote>
                <div className="flex items-center justify-between">
                  <cite className="text-muted-foreground font-semibold">– Samuel N.</cite>
                  <Button variant="outline" size="sm">
                    <Volume2 className="mr-2 h-4 w-4" />
                    Listen to Audio Testimony
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Dynamic testimonies from database */}
            {testimonies.map((testimony) => (
              <Card key={testimony.id} className="border-primary/20 overflow-hidden">
                <CardContent className="p-8">
                  <Quote className="h-12 w-12 text-primary/30 mb-4" />
                  {testimony.title && (
                    <h3 className="text-lg font-semibold mb-2">{testimony.title}</h3>
                  )}
                  <blockquote className="text-xl md:text-2xl text-foreground mb-6 italic">
                    "{testimony.content}"
                  </blockquote>
                  <cite className="text-muted-foreground font-semibold">– {testimony.name}</cite>
                </CardContent>
              </Card>
            ))}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button variant="outline" size="lg">
                <ChevronRight className="mr-2 h-5 w-5" />
                View More
              </Button>
              <Button 
                size="lg"
                onClick={() => setShowForm(!showForm)}
              >
                Share Your Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story Form */}
      {showForm && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Share Your Story</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title">Title (optional)</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Brief title for your testimony"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="content">Your Testimony *</Label>
                      <Textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                        placeholder="Share how God has worked in your life..."
                        rows={6}
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" className="flex-1">
                        Submit Testimony
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setShowForm(false)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Testimonies;