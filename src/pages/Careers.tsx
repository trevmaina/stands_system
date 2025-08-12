import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, GraduationCap, Heart } from "lucide-react";

const Careers = () => {
  const positions = [
    {
      title: "Youth Pastor",
      department: "Ministry",
      type: "Full-time",
      location: "Nairobi, Kenya",
      salary: "Competitive package",
      description: "Lead and develop our vibrant youth ministry program for teenagers and young adults.",
      requirements: [
        "Bachelor's degree in Theology or related field",
        "3+ years of youth ministry experience",
        "Strong leadership and communication skills",
        "Passion for working with young people"
      ],
      responsibilities: [
        "Plan and lead youth services and programs",
        "Mentor and counsel young people",
        "Coordinate youth activities and events",
        "Train and manage youth volunteers"
      ],
      status: "Open"
    },
    {
      title: "Worship Leader",
      department: "Music Ministry",
      type: "Part-time",
      location: "Nairobi, Kenya",
      salary: "KSh 40,000 - 60,000",
      description: "Lead our congregation in worship through music during services and special events.",
      requirements: [
        "Strong musical background and vocal ability",
        "Experience leading worship teams",
        "Knowledge of contemporary Christian music",
        "Heart for worship and ministry"
      ],
      responsibilities: [
        "Lead worship during Sunday services",
        "Coordinate with musicians and vocalists",
        "Select appropriate songs and liturgy",
        "Organize special musical events"
      ],
      status: "Open"
    },
    {
      title: "Administrative Assistant",
      department: "Administration",
      type: "Full-time",
      location: "Nairobi, Kenya",
      salary: "KSh 35,000 - 45,000",
      description: "Provide administrative support to pastoral staff and church operations.",
      requirements: [
        "Diploma in Business Administration or related field",
        "2+ years of administrative experience",
        "Proficiency in Microsoft Office",
        "Strong organizational skills"
      ],
      responsibilities: [
        "Manage church correspondence and communications",
        "Coordinate meetings and appointments",
        "Maintain church records and databases",
        "Assist with event planning and coordination"
      ],
      status: "Open"
    },
    {
      title: "Children's Ministry Coordinator",
      department: "Ministry",
      type: "Part-time",
      location: "Nairobi, Kenya",
      salary: "KSh 25,000 - 35,000",
      description: "Coordinate and develop programs for children's ministry and Sunday school.",
      requirements: [
        "Experience working with children",
        "Creative and organizational skills",
        "Background in education or child development preferred",
        "Heart for children's ministry"
      ],
      responsibilities: [
        "Plan and coordinate children's programs",
        "Train and supervise Sunday school teachers",
        "Organize children's events and activities",
        "Develop age-appropriate curriculum"
      ],
      status: "Coming Soon"
    }
  ];

  const internships = [
    {
      title: "Ministry Internship Program",
      duration: "6-12 months",
      type: "Internship",
      description: "Hands-on ministry training program for recent graduates or those exploring ministry calling.",
      areas: ["Pastoral Ministry", "Youth Ministry", "Children's Ministry", "Worship Ministry", "Community Outreach"],
      benefits: ["Mentorship from experienced pastors", "Practical ministry experience", "Leadership development", "Certificate upon completion"]
    },
    {
      title: "Media & Communications Intern",
      duration: "3-6 months",
      type: "Internship",
      description: "Learn digital ministry and communications while supporting our media team.",
      areas: ["Social Media Management", "Video Production", "Graphic Design", "Website Management"],
      benefits: ["Portfolio development", "Professional training", "Industry connections", "Reference letters"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Meaningful Work",
      description: "Make a real difference in people's lives and community"
    },
    {
      icon: Users,
      title: "Supportive Team",
      description: "Work alongside dedicated and passionate team members"
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Opportunities for training, conferences, and skill development"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible schedules and time for personal spiritual growth"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore opportunities to serve God and build His kingdom through meaningful work
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{position.title}</CardTitle>
                        <Badge variant={position.status === "Open" ? "default" : "secondary"}>
                          {position.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">{position.description}</CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Badge variant="outline">{position.department}</Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {position.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {position.salary}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t">
                    <Button disabled={position.status !== "Open"}>
                      {position.status === "Open" ? "Apply Now" : "Position Not Available"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Internship Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Internship Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {internships.map((internship, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{internship.title}</CardTitle>
                    <Badge variant="outline">{internship.type}</Badge>
                  </div>
                  <CardDescription>{internship.description}</CardDescription>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Duration: {internship.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Focus Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.areas.map((area, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Program Benefits:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {internship.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div>
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle>Application Process</CardTitle>
              <CardDescription>
                Here's how our hiring process works
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Submit Application</h3>
                  <p className="text-sm text-muted-foreground">
                    Send your CV and cover letter
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Initial Review</h3>
                  <p className="text-sm text-muted-foreground">
                    We review your application
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Interview Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Meet with our leadership team
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Welcome Aboard</h3>
                  <p className="text-sm text-muted-foreground">
                    Join our ministry team
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Ready to join our team? Send your application to: <strong>careers@church.com</strong>
                </p>
                <Button>Contact HR Department</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Careers;