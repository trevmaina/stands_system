import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Clock, Users, Heart, Calendar, CheckCircle } from "lucide-react";

const Volunteer = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<string>("");

  const opportunities = [
    {
      id: "worship-team",
      title: "Worship Team",
      ministry: "Music Ministry",
      description: "Join our music ministry as a vocalist or instrumentalist for Sunday services and special events.",
      timeCommitment: "2-3 hours/week",
      skills: ["Musical talent", "Commitment", "Team player"],
      schedule: "Sundays 8:00 AM - 12:00 PM",
      contact: "worship@church.com"
    },
    {
      id: "children-ministry",
      title: "Children's Ministry Helper",
      ministry: "Children's Ministry",
      description: "Help teach and care for children during Sunday school and special children's programs.",
      timeCommitment: "2 hours/week",
      skills: ["Love for children", "Patience", "Creativity"],
      schedule: "Sundays 9:00 AM - 11:00 AM",
      contact: "children@church.com"
    },
    {
      id: "ushering",
      title: "Usher/Greeter",
      ministry: "Hospitality",
      description: "Welcome visitors and members, assist with seating, and help with offering collection.",
      timeCommitment: "3 hours/week",
      skills: ["Friendly personality", "Punctuality", "Service heart"],
      schedule: "Sundays 9:30 AM - 12:30 PM",
      contact: "hospitality@church.com"
    },
    {
      id: "youth-mentor",
      title: "Youth Mentor",
      ministry: "Youth Ministry",
      description: "Mentor and guide young people in their spiritual growth and life decisions.",
      timeCommitment: "4-5 hours/week",
      skills: ["Leadership", "Communication", "Mentoring experience"],
      schedule: "Fridays 6:00 PM - 9:00 PM",
      contact: "youth@church.com"
    },
    {
      id: "sound-tech",
      title: "Sound Technician",
      ministry: "Media Team",
      description: "Operate sound equipment during services and events to ensure quality audio.",
      timeCommitment: "3-4 hours/week",
      skills: ["Technical aptitude", "Attention to detail", "Reliability"],
      schedule: "Sundays 8:30 AM - 12:30 PM",
      contact: "media@church.com"
    },
    {
      id: "community-outreach",
      title: "Community Outreach Volunteer",
      ministry: "Community Service",
      description: "Participate in community service projects and outreach programs.",
      timeCommitment: "4-6 hours/month",
      skills: ["Compassion", "Flexibility", "Service heart"],
      schedule: "Various weekends",
      contact: "outreach@church.com"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in volunteering. We'll contact you soon.",
    });
    setShowForm(false);
  };

  const handleApply = (opportunityId: string) => {
    setSelectedOpportunity(opportunityId);
    setShowForm(true);
  };

  if (showForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Volunteer Application
              </CardTitle>
              <CardDescription>
                Thank you for your interest in serving! Please fill out this form and we'll get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" required />
                </div>

                <div>
                  <Label htmlFor="opportunity">Role of Interest</Label>
                  <Select value={selectedOpportunity} onValueChange={setSelectedOpportunity} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an opportunity" />
                    </SelectTrigger>
                    <SelectContent>
                      {opportunities.map((opp) => (
                        <SelectItem key={opp.id} value={opp.id}>
                          {opp.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="availability">Availability</Label>
                  <Textarea id="availability" placeholder="Please describe your availability..." />
                </div>

                <div>
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Textarea id="experience" placeholder="Tell us about any relevant experience or skills..." />
                </div>

                <div>
                  <Label htmlFor="motivation">Why do you want to volunteer?</Label>
                  <Textarea id="motivation" placeholder="Share your motivation for serving..." />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    Submit Application
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Back to Opportunities
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Volunteer Opportunities
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Use your gifts and talents to serve God and our community
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>50+ Active Volunteers</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Flexible Schedules</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <span>Make a Difference</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Why Volunteer Section */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle>Why Volunteer with Us?</CardTitle>
              <CardDescription>
                Volunteering is more than just helping out – it's about being part of God's work in our community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Serve Others</h3>
                  <p className="text-sm text-muted-foreground">
                    Use your gifts to bless and serve your church family and community
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Build Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with like-minded believers and build lasting friendships
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Grow Spiritually</h3>
                  <p className="text-sm text-muted-foreground">
                    Develop your faith and discover new areas of spiritual growth
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Opportunities Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">Current Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opportunity) => (
              <Card key={opportunity.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{opportunity.ministry}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {opportunity.timeCommitment}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">Schedule:</span>
                      </div>
                      <p className="text-sm">{opportunity.schedule}</p>
                    </div>

                    <Button 
                      className="w-full" 
                      onClick={() => handleApply(opportunity.id)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Questions About Volunteering?</CardTitle>
              <CardDescription>
                Our volunteer coordinator is here to help you find the perfect opportunity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  Contact Volunteer Coordinator
                </Button>
                <Button variant="outline">
                  Download Volunteer Handbook
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;