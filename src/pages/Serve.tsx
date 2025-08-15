import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Users, Music, Baby, Coffee, Building, GraduationCap, MapPin, Clock, Calendar } from "lucide-react";

const Serve = () => {
  const volunteerOpportunities = [
    {
      title: "Worship Team",
      ministry: "Music Ministry",
      commitment: "Weekly rehearsal + Sunday service",
      description: "Join our worship team as a vocalist or instrumentalist to lead the congregation in praise.",
      icon: Music,
      skills: "Musical ability, heart for worship"
    },
    {
      title: "Children's Ministry Helper",
      ministry: "Children's Ministry", 
      commitment: "One Sunday per month",
      description: "Help create a fun and safe environment for children to learn about God's love.",
      icon: Baby,
      skills: "Love for children, patience"
    },
    {
      title: "Hospitality Team",
      ministry: "Guest Services",
      commitment: "Flexible schedule",
      description: "Welcome guests and help create a warm, inviting atmosphere for all who visit.",
      icon: Coffee,
      skills: "Friendly personality, welcoming spirit"
    },
    {
      title: "Tech Team",
      ministry: "Media Ministry",
      commitment: "Training + Sunday rotation",
      description: "Operate sound, lighting, or projection equipment during services.",
      icon: Building,
      skills: "Technical aptitude, reliability"
    },
    {
      title: "Small Group Leader",
      ministry: "Discipleship",
      commitment: "Weekly meetings",
      description: "Lead a small group Bible study and help build community among members.",
      icon: Users,
      skills: "Leadership, biblical knowledge"
    },
    {
      title: "Outreach Coordinator",
      ministry: "Community Outreach",
      commitment: "Monthly events",
      description: "Help organize and execute community service projects and evangelism efforts.",
      icon: Heart,
      skills: "Organization, heart for service"
    }
  ];

  const staffPositions = [
    {
      title: "Assistant Youth Pastor",
      type: "Full-time",
      department: "Youth Ministry",
      location: "Main Campus",
      description: "Support the Youth Pastor in developing and implementing programs for teenagers and young adults.",
      requirements: ["Bachelor's degree in Ministry or related field", "2+ years youth ministry experience", "Strong communication skills"]
    },
    {
      title: "Worship Coordinator",
      type: "Part-time",
      department: "Music Ministry",
      location: "Main Campus", 
      description: "Coordinate worship services across all congregations and manage volunteer musicians.",
      requirements: ["Music degree or equivalent experience", "Leadership experience", "Multi-lingual preferred"]
    },
    {
      title: "Administrative Assistant",
      type: "Full-time",
      department: "Church Administration",
      location: "Main Campus",
      description: "Provide administrative support to pastoral staff and manage office operations.",
      requirements: ["High school diploma required", "Office experience preferred", "Strong organizational skills"]
    },
    {
      title: "Media Intern",
      type: "Internship",
      department: "Media Ministry",
      location: "Flexible",
      description: "Gain hands-on experience in church media production, live streaming, and content creation.",
      requirements: ["Pursuing degree in Communications/Media", "Basic video/audio editing skills", "Creative mindset"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Serve With Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Use your God-given gifts and talents to make a difference in our church and community.
          </p>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Volunteer Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {volunteerOpportunities.map((opportunity, index) => {
                const IconComponent = opportunity.icon;
                return (
                  <Card key={index} className="border-primary/20 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                          <CardDescription className="text-primary">{opportunity.ministry}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">
                        {opportunity.description}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{opportunity.commitment}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-muted-foreground" />
                          <span>{opportunity.skills}</span>
                        </div>
                      </div>
                      <Button className="w-full" variant="outline">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Apply to Volunteer</h2>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  
                  <div>
                    <Label htmlFor="interests">Areas of Interest</Label>
                    <Textarea 
                      id="interests" 
                      placeholder="Tell us which volunteer opportunities interest you and why"
                      rows={4}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Textarea 
                      id="availability" 
                      placeholder="When are you available to serve? (days, times, frequency)"
                      rows={3}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Staff Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Staff Positions & Internships</h2>
            <div className="space-y-6">
              {staffPositions.map((position, index) => (
                <Card key={index} className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-xl font-semibold">{position.title}</h3>
                          <div className="flex gap-2">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{position.type}</span>
                            <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">{position.department}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <MapPin className="h-4 w-4" />
                          <span>{position.location}</span>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">
                          {position.description}
                        </p>
                        
                        <div>
                          <h4 className="font-medium mb-2">Requirements:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {position.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="lg:w-auto">
                        <Button>Apply Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Serving?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to help you find the perfect place to use your gifts and talents. Contact us to learn more about serving opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Contact Our Team
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Serve;