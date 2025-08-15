import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Users, Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Sunday Morning Worship",
      time: "9:00 AM & 11:00 AM",
      description: "Join us for inspiring worship, biblical teaching, and fellowship.",
      location: "Main Sanctuary",
      type: "Weekly Service"
    },
    {
      title: "Wednesday Bible Study",
      time: "7:00 PM",
      description: "Dive deeper into God's Word with interactive Bible study sessions.",
      location: "Fellowship Hall",
      type: "Weekly Study"
    },
    {
      title: "Youth Service",
      time: "6:00 PM (Fridays)",
      description: "Dynamic worship and teaching designed for teenagers and young adults.",
      location: "Youth Center",
      type: "Youth Ministry"
    },
    {
      title: "Children's Church",
      time: "During Main Service",
      description: "Age-appropriate worship and Bible lessons for children ages 4-12.",
      location: "Children's Wing",
      type: "Children's Ministry"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Come as you are and experience the transforming power of worship, community, and God's Word.
          </p>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Service Times</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {service.type}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{service.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{service.location}</span>
                  </div>
                  <p className="text-muted-foreground mt-3">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What to Expect</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Warm Welcome</h3>
                <p className="text-muted-foreground">
                  Our friendly greeters and members will help you feel at home from the moment you arrive.
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Meaningful Worship</h3>
                <p className="text-muted-foreground">
                  Experience contemporary worship music and practical, biblical teaching that applies to daily life.
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comfortable Setting</h3>
                <p className="text-muted-foreground">
                  Come as you are! We maintain a relaxed atmosphere where everyone can worship authentically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Livestream Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Watch Live</h2>
            <div className="aspect-video bg-primary/5 rounded-lg mb-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Service Starting Soon</h3>
                <p className="text-muted-foreground">Join us every Sunday at 9:00 AM & 11:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Sermons Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Sermons</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((sermon) => (
                <Card key={sermon} className="border-primary/20 hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted rounded-t-lg"></div>
                  <CardHeader>
                    <CardTitle className="text-lg">Faith in Action</CardTitle>
                    <CardDescription>Pastor John Smith • March 15, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Exploring how we can live out our faith in our daily lives and make a difference in our community.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Audio</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Video</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Notes</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Location</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>123 Faith Street</p>
                      <p>Community City, ST 12345</p>
                      <p>Phone: (555) 123-4567</p>
                      <p>Email: info@ourchurch.org</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Parking & Accessibility</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• Free parking available on-site</p>
                      <p>• Wheelchair accessible entrances</p>
                      <p>• Nursery available during services</p>
                      <p>• Children's ministry for all ages</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;