import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, BookOpen, Mail, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const YouthIndex = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              PCEA St Andrew's Youth
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A vibrant community of young believers growing together in faith, friendship, and purpose. 
              Join us as we discover God's amazing plan for our generation!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/congregations/youth/events">Join Our Events</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/congregations/youth/contact">Connect With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/congregations/youth/sermons">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Youth Sermons</CardTitle>
                <CardDescription>
                  Powerful messages tailored for young hearts and minds
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/congregations/youth/ministries">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Youth Ministries</CardTitle>
                <CardDescription>
                  Find your place in worship, service, and fellowship
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/congregations/youth/events">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>
                  Youth camps, conferences, and fun activities
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/congregations/youth/newsletter">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Mail className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Youth Newsletter</CardTitle>
                <CardDescription>
                  Stay updated with youth news and inspirations
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/congregations/youth/contact">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Get Connected</CardTitle>
                <CardDescription>
                  Join our community and find your spiritual family
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Star className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Youth Vision</CardTitle>
              <CardDescription>
                Empowering young lives to impact the world for Christ
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* About Youth Section */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Our Youth Ministry</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our youth ministry is more than just a program - it's a movement of young people 
              passionate about following Jesus and making a difference in our community and beyond. 
              We believe that age is no barrier to being used powerfully by God.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Learn & Grow</h3>
                <p className="text-muted-foreground">
                  Deepen your faith through engaging Bible studies and mentorship
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect & Serve</h3>
                <p className="text-muted-foreground">
                  Build lasting friendships while serving others in love
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lead & Impact</h3>
                <p className="text-muted-foreground">
                  Develop leadership skills to impact your generation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Join Our Youth Family?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Don't just attend church - be part of a community that will challenge, 
          support, and celebrate with you as you grow in faith.
        </p>
        <Button size="lg" asChild>
          <Link to="/congregations/youth/contact">Get Started Today</Link>
        </Button>
      </div>
    </div>
  );
};

export default YouthIndex;