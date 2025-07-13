import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MainCongregation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Main Congregation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Welcome to our main worship service at PCEA St Andrew's Church
            </p>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Service Times
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us for worship and fellowship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Sunday Morning Service</CardTitle>
                <CardDescription>Main worship service</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">8:00 AM</p>
                <p className="text-muted-foreground">First Service</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Sunday Service</CardTitle>
                <CardDescription>Main worship service</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">10:00 AM</p>
                <p className="text-muted-foreground">Second Service</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Evening Service</CardTitle>
                <CardDescription>Evening worship</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">5:00 PM</p>
                <p className="text-muted-foreground">Sunday Evening</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Our Main Congregation
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our main congregation is the heart of PCEA St Andrew's Church, where believers from all walks of life come together to worship, learn, and grow in faith. We offer traditional and contemporary worship styles to accommodate different preferences.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                The main sanctuary can accommodate over 500 worshippers and features modern audio-visual equipment to enhance your worship experience. We believe in creating an atmosphere where everyone feels welcome and can encounter God's presence.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Visit Us This Sunday
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">500+</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Active Members</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">3</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Services Weekly</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-muted-foreground">
              We're located at the heart of Nairobi
            </p>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    PCEA St Andrew's Church
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    State House Rd/Nyerere Rd Junction, Nairobi
                  </p>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      📞 +254(0) 707 257 000
                    </p>
                    <p className="text-muted-foreground">
                      📞 +254(0) 733 400 023
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MainCongregation;