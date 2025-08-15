import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, BookOpen, Hand } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Our Church
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a community of believers dedicated to spreading God's love and making disciples of all nations.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To glorify God by making disciples of Jesus Christ who love God, love others, and serve the world through the power of the Holy Spirit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be a church that transforms lives and communities through authentic worship, biblical teaching, and compassionate service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Love</h3>
              <p className="text-muted-foreground">Showing Christ's love in all we do</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Truth</h3>
              <p className="text-muted-foreground">Grounded in God's Word</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">Building authentic relationships</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hand className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Service</h3>
              <p className="text-muted-foreground">Serving others with compassion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Rev. John Smith", role: "Lead Pastor", image: "/placeholder.svg" },
                { name: "Sarah Johnson", role: "Worship Director", image: "/placeholder.svg" },
                { name: "Michael Brown", role: "Youth Pastor", image: "/placeholder.svg" },
              ].map((leader, index) => (
                <Card key={index} className="border-primary/20 text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold">{leader.name}</h3>
                    <p className="text-primary">{leader.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="space-y-8">
              <div className="flex gap-8">
                <div className="w-20 text-center">
                  <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium">1985</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Church Founded</h3>
                  <p className="text-muted-foreground">
                    Started as a small gathering of believers with a heart for worship and community in a home Bible study.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-8">
                <div className="w-20 text-center">
                  <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium">1992</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">First Building</h3>
                  <p className="text-muted-foreground">
                    Moved into our first dedicated church building as the congregation grew to over 100 members.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-8">
                <div className="w-20 text-center">
                  <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium">2010</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Youth & French Congregations</h3>
                  <p className="text-muted-foreground">
                    Launched specialized ministries to better serve our diverse community needs.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-8">
                <div className="w-20 text-center">
                  <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium">Today</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Growing Community</h3>
                  <p className="text-muted-foreground">
                    A vibrant community of over 500 members committed to authentic worship, biblical teaching, and compassionate service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;