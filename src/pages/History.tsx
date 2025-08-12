import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Building, Award } from "lucide-react";

const History = () => {
  const timeline = [
    {
      year: "1924",
      title: "Church Foundation",
      description: "PCEA St Andrew's was established as a small congregation meeting in a local school.",
      icon: Building,
      highlight: true
    },
    {
      year: "1952",
      title: "First Church Building",
      description: "Construction completed on our first dedicated church building, accommodating 200 members.",
      icon: Building
    },
    {
      year: "1968",
      title: "Youth Ministry Launch",
      description: "Started dedicated youth programs and Sunday school ministries.",
      icon: Users
    },
    {
      year: "1985",
      title: "Community Outreach",
      description: "Launched community development programs including healthcare and education initiatives.",
      icon: Award
    },
    {
      year: "1992",
      title: "Church Expansion",
      description: "Major renovation and expansion project doubled our seating capacity.",
      icon: Building
    },
    {
      year: "2005",
      title: "French Congregation",
      description: "Established French-speaking congregation to serve the growing francophone community.",
      icon: Users
    },
    {
      year: "2015",
      title: "Digital Ministry",
      description: "Launched online streaming services and digital ministry platforms.",
      icon: Award
    },
    {
      year: "2024",
      title: "Centenary Celebration",
      description: "Celebrating 100 years of faithful service to God and our community.",
      icon: Award,
      highlight: true
    }
  ];

  const milestones = [
    { number: "100", label: "Years of Service", description: "A century of faithful ministry" },
    { number: "2,500+", label: "Current Members", description: "Growing congregation across all services" },
    { number: "50+", label: "Community Programs", description: "Active outreach and development initiatives" },
    { number: "3", label: "Congregations", description: "Main, Youth, and French congregations" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Our History
          </h1>
          <p className="text-xl text-muted-foreground">
            Celebrating 100 years of God's faithfulness and community service
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Milestones Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Key Milestones</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{milestone.number}</div>
                  <div className="font-semibold mb-1">{milestone.label}</div>
                  <div className="text-sm text-muted-foreground">{milestone.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey Through Time</h2>
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    event.highlight ? 'bg-primary' : 'bg-muted'
                  }`}>
                    <event.icon className={`h-8 w-8 ${
                      event.highlight ? 'text-primary-foreground' : 'text-muted-foreground'
                    }`} />
                  </div>
                </div>
                <div className="flex-1">
                  <Card className={event.highlight ? 'border-primary' : ''}>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={event.highlight ? 'default' : 'secondary'}>
                          {event.year}
                        </Badge>
                        {event.highlight && (
                          <Badge variant="outline">Milestone</Badge>
                        )}
                      </div>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Heritage</CardTitle>
              <CardDescription>
                Rooted in the Presbyterian tradition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                As part of the Presbyterian Church of East Africa (PCEA), we are rooted in the Reformed tradition
                that emphasizes the sovereignty of God, the authority of Scripture, and the priesthood of all believers.
              </p>
              <p className="text-muted-foreground">
                Our church has always been committed to both spiritual growth and social justice, following the
                Presbyterian values of education, healthcare, and community development.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Looking Forward</CardTitle>
              <CardDescription>
                Building on our foundation for the future
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                As we celebrate our centenary, we look forward to the next chapter of our ministry.
                We are committed to continuing our mission of making disciples, serving our community,
                and being a beacon of hope in our city.
              </p>
              <p className="text-muted-foreground">
                With new generations joining our congregation, we embrace both our rich heritage
                and innovative approaches to ministry in the digital age.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default History;