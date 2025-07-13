import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, Download, ExternalLink, BookOpen, Star } from "lucide-react";
import { useState } from "react";

const YouthNewsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with your email service
    setSubscribed(true);
    setEmail("");
  };

  const newsletters = [
    {
      title: "Youth Vision 2024 - December Edition",
      date: "December 15, 2024",
      description: "Year-end reflections, upcoming events for 2025, and testimonies from our youth camps.",
      featured: true,
      topics: ["Year Review", "2025 Vision", "Testimonies", "Camp Stories"]
    },
    {
      title: "Faith & Friendship - November Edition",
      date: "November 20, 2024",
      description: "Building godly relationships, friendship tips, and highlights from our community outreach.",
      featured: false,
      topics: ["Relationships", "Community Service", "Friendship"]
    },
    {
      title: "Called to Serve - October Edition",
      date: "October 18, 2024",
      description: "Discovering your ministry gifts, volunteer opportunities, and mission trip preparations.",
      featured: false,
      topics: ["Ministry", "Missions", "Service", "Gifts"]
    },
    {
      title: "Growing in Grace - September Edition",
      date: "September 22, 2024",
      description: "Spiritual growth tips, Bible study guides, and personal development insights.",
      featured: false,
      topics: ["Spiritual Growth", "Bible Study", "Personal Development"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Youth Newsletter</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay connected with inspiring stories, upcoming events, and spiritual insights designed for our youth community
          </p>
        </div>

        {/* Subscription Section */}
        <div className="max-w-md mx-auto mb-16">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Subscribe to Our Newsletter</CardTitle>
              <CardDescription>
                Get the latest youth news, events, and inspirations delivered to your inbox
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Subscribe Now
                  </Button>
                </form>
              ) : (
                <div className="text-center">
                  <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                    <p className="font-semibold">Successfully Subscribed!</p>
                    <p className="text-sm">You'll receive our next newsletter in your inbox.</p>
                  </div>
                  <Button variant="outline" onClick={() => setSubscribed(false)}>
                    Subscribe Another Email
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Latest Newsletters */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Recent Newsletters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsletters.map((newsletter, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${newsletter.featured ? 'border-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    {newsletter.featured && (
                      <Badge className="mb-2">
                        <Star className="h-3 w-3 mr-1" />
                        Latest
                      </Badge>
                    )}
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {newsletter.date}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{newsletter.title}</CardTitle>
                  <CardDescription>{newsletter.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {newsletter.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <BookOpen className="h-4 w-4 mr-1" />
                      Read Online
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What You'll Find</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Inspiring Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Thought-provoking articles on faith, life, and purpose written specifically for young people
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Event Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Be the first to know about youth camps, conferences, mission trips, and special events
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Youth Spotlights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Read amazing testimonies and stories from fellow youth in our community
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Archive Section */}
        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Looking for Older Issues?</h2>
          <p className="text-muted-foreground mb-6">
            Browse our complete newsletter archive to find past articles, event recaps, and inspirational content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>
              <ExternalLink className="h-4 w-4 mr-2" />
              View Archive
            </Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouthNewsletter;