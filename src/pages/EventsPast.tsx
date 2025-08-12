import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Camera, Video } from "lucide-react";

const EventsPast = () => {
  const pastEvents = [
    {
      title: "Annual Church Conference 2024",
      date: "March 15-17, 2024",
      location: "Main Sanctuary",
      attendees: "450+",
      description: "Our annual conference brought together members for worship, fellowship, and vision casting for the year ahead.",
      highlights: ["Inspiring keynote speakers", "Worship concerts", "Ministry workshops", "Community fellowship"],
      media: { photos: 150, videos: 8 },
      category: "Conference"
    },
    {
      title: "Youth Camp 2024",
      date: "January 12-14, 2024",
      location: "Lake Nakuru Retreat Center",
      attendees: "120+",
      description: "Three-day youth camp focused on spiritual growth, leadership development, and building lasting friendships.",
      highlights: ["Leadership training", "Outdoor activities", "Evening worship", "Talent showcase"],
      media: { photos: 200, videos: 12 },
      category: "Youth"
    },
    {
      title: "Christmas Celebration 2023",
      date: "December 24, 2023",
      location: "Main Sanctuary",
      attendees: "800+",
      description: "Special Christmas Eve service with carols, nativity play, and celebration of Christ's birth.",
      highlights: ["Children's nativity play", "Christmas carols", "Candlelight service", "Community dinner"],
      media: { photos: 300, videos: 15 },
      category: "Special Service"
    },
    {
      title: "Community Health Fair",
      date: "November 18, 2023",
      location: "Church Grounds",
      attendees: "500+",
      description: "Free health screening and awareness event for our community members and neighbors.",
      highlights: ["Free health screening", "Medical consultations", "Health education", "Free medication"],
      media: { photos: 100, videos: 5 },
      category: "Community Outreach"
    },
    {
      title: "Harvest Festival 2023",
      date: "October 8, 2023",
      location: "Church Grounds",
      attendees: "600+",
      description: "Annual harvest thanksgiving celebration with cultural performances and community feast.",
      highlights: ["Cultural performances", "Traditional foods", "Thanksgiving service", "Children's activities"],
      media: { photos: 250, videos: 10 },
      category: "Festival"
    },
    {
      title: "Men's Conference 2023",
      date: "September 16, 2023",
      location: "Conference Hall",
      attendees: "200+",
      description: "Men's ministry conference focusing on spiritual leadership, family, and community responsibility.",
      highlights: ["Leadership workshops", "Panel discussions", "Networking sessions", "Prayer time"],
      media: { photos: 80, videos: 6 },
      category: "Conference"
    }
  ];

  const categories = ["All", "Conference", "Youth", "Special Service", "Community Outreach", "Festival"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Past Event Highlights
          </h1>
          <p className="text-xl text-muted-foreground">
            Celebrating the wonderful moments and memories from our community gatherings
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Filter Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button key={category} variant="outline" size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pastEvents.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Camera className="h-12 w-12 text-muted-foreground" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{event.category}</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {event.attendees}
                  </div>
                </div>
                <CardTitle className="text-lg">{event.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {event.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Highlights:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {event.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Camera className="h-4 w-4" />
                      {event.media.photos}
                    </div>
                    <div className="flex items-center gap-1">
                      <Video className="h-4 w-4" />
                      {event.media.videos}
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View Gallery
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Don't Miss Our Next Event</CardTitle>
              <CardDescription>
                Stay connected with our community and be part of our upcoming celebrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>View Upcoming Events</Button>
                <Button variant="outline">Subscribe to Newsletter</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventsPast;