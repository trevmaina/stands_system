import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, Users, Heart, BookOpen, Mic, Camera, Globe, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const YouthMinistries = () => {
  const ministries = [
    {
      name: "Youth Worship Team",
      description: "Lead our congregation in passionate worship through music, singing, and creative expression.",
      icon: Music,
      leader: "David Mutua",
      meetingTime: "Saturdays 2:00 PM",
      tags: ["Music", "Worship", "Creative"],
      requirements: "Musical talent or willingness to learn",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      name: "Youth Cell Groups",
      description: "Small group Bible studies and fellowship meetings throughout the week for deeper connection.",
      icon: Users,
      leader: "Sarah Wanjiku",
      meetingTime: "Wednesdays 6:00 PM",
      tags: ["Fellowship", "Bible Study", "Community"],
      requirements: "Open to all youth",
      color: "bg-green-500/10 text-green-600"
    },
    {
      name: "Youth Outreach Team",
      description: "Reach out to communities in need through evangelism, charity work, and social impact programs.",
      icon: Heart,
      leader: "James Kipchoge",
      meetingTime: "Saturdays 9:00 AM",
      tags: ["Outreach", "Service", "Evangelism"],
      requirements: "Heart for service",
      color: "bg-red-500/10 text-red-600"
    },
    {
      name: "Youth Bible Study Leaders",
      description: "Train to facilitate Bible discussions and mentor younger members in their faith journey.",
      icon: BookOpen,
      leader: "Grace Achieng",
      meetingTime: "Sundays 3:00 PM",
      tags: ["Teaching", "Mentorship", "Leadership"],
      requirements: "Strong biblical foundation",
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      name: "Youth Media Team",
      description: "Handle photography, videography, and social media to document and share our ministry activities.",
      icon: Camera,
      leader: "Michael Ochieng",
      meetingTime: "Fridays 4:00 PM",
      tags: ["Media", "Technology", "Creative"],
      requirements: "Interest in media production",
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      name: "Youth Drama & Arts",
      description: "Express faith through drama, dance, poetry, and various artistic performances.",
      icon: Mic,
      leader: "Faith Mwangi",
      meetingTime: "Thursdays 5:00 PM",
      tags: ["Arts", "Performance", "Creative"],
      requirements: "Creative passion",
      color: "bg-pink-500/10 text-pink-600"
    },
    {
      name: "Youth Missions Team",
      description: "Organize and participate in local and international mission trips and cultural exchange programs.",
      icon: Globe,
      leader: "Peter Kamau",
      meetingTime: "Monthly planning meetings",
      tags: ["Missions", "Travel", "Cross-cultural"],
      requirements: "Passion for missions",
      color: "bg-teal-500/10 text-teal-600"
    },
    {
      name: "Youth Sports & Recreation",
      description: "Build community through sports, games, and recreational activities that bring people together.",
      icon: Gamepad2,
      leader: "Victor Mburu",
      meetingTime: "Saturdays 10:00 AM",
      tags: ["Sports", "Recreation", "Community"],
      requirements: "Love for sports and fun",
      color: "bg-indigo-500/10 text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Youth Ministries</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover your calling and use your gifts to serve God and build His kingdom through our diverse ministry opportunities
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {ministries.map((ministry, index) => {
            const IconComponent = ministry.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${ministry.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="mb-2">{ministry.name}</CardTitle>
                      <CardDescription className="mb-3">
                        {ministry.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {ministry.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ministry Leader:</span>
                      <span className="font-medium">{ministry.leader}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Meeting Time:</span>
                      <span className="font-medium">{ministry.meetingTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Requirements:</span>
                      <span className="font-medium">{ministry.requirements}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link to="/congregations/youth/contact">Join This Ministry</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Can't Find Your Passion?</h2>
          <p className="text-muted-foreground mb-6">
            We believe everyone has unique gifts and calling. If you don't see a ministry that fits your passion, 
            let's talk about creating something new together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/congregations/youth/contact">Start a New Ministry</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/congregations/youth/contact">Speak with Youth Pastor</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouthMinistries;