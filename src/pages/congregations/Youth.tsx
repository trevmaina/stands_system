import { Calendar, Clock, Music, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const YouthCongregation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary to-accent text-secondary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Youth Congregation
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Where young hearts meet Jesus. Energy, passion, and purpose combined.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Join Our Youth Family
            </Button>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Youth Service Schedule
            </h2>
            <p className="text-lg text-muted-foreground">
              Connecting young people to God and each other
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Sunday Youth Service</CardTitle>
                <CardDescription>Contemporary worship & teaching</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">2:00 PM</p>
                <p className="text-muted-foreground">Every Sunday</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Friday Youth Night</CardTitle>
                <CardDescription>Fellowship, games & Bible study</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">7:00 PM</p>
                <p className="text-muted-foreground">Every Friday</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-muted-foreground">
              A vibrant community where young people can grow in faith
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Music className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Contemporary Worship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Modern worship music, live band, and passionate singing that connects hearts to God.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Interactive Teaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Biblical teaching that's relevant, practical, and designed specifically for young adults.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Strong Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Build lasting friendships and find your place in a welcoming community of peers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Youth Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Youth Programs
            </h2>
            <p className="text-lg text-muted-foreground">
              Various programs to help you grow and serve
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Bible Study Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Small group Bible studies throughout the week where you can dive deeper into God's word and build meaningful relationships.
                </p>
                <p className="text-sm text-primary font-medium">Wednesdays 7:00 PM</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Youth Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Serve the community through various outreach programs, from feeding the homeless to visiting children's homes.
                </p>
                <p className="text-sm text-primary font-medium">Monthly Events</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Worship Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Join our worship team and use your musical talents to lead others in worship. All skill levels welcome.
                </p>
                <p className="text-sm text-primary font-medium">Auditions Open</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Youth Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Develop leadership skills through our youth leadership program and make a difference in your community.
                </p>
                <p className="text-sm text-primary font-medium">Applications Open</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Age Groups
            </h2>
            <p className="text-lg text-muted-foreground">
              Programs tailored for different age groups
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">13-17</CardTitle>
                <CardDescription>High School Youth</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Navigating teenage years with faith, building character, and preparing for the future.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">18-25</CardTitle>
                <CardDescription>Young Adults</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  College students and young professionals discovering their purpose and calling in life.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">26-35</CardTitle>
                <CardDescription>Young Professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Career-focused individuals building relationships and establishing their faith foundation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Youth Pastor */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Connect With Us
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions about youth ministry? Want to get involved? We'd love to hear from you!
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contact Youth Pastor
            </Button>
            <Button size="lg" variant="outline">
              Join WhatsApp Group
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YouthCongregation;