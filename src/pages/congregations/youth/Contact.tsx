import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Users, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";

const YouthContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    inquiryType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form or show success message
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const youthLeaders = [
    {
      name: "Pastor John Mwangi",
      role: "Youth Pastor",
      email: "youth@pceastandrews.org",
      phone: "+254 712 345 678",
      specialization: "Overall youth ministry leadership"
    },
    {
      name: "Sarah Wanjiku",
      role: "Assistant Youth Pastor",
      email: "sarah.youth@pceastandrews.org",
      phone: "+254 723 456 789",
      specialization: "Youth counseling & mentorship"
    },
    {
      name: "David Mutua",
      role: "Youth Worship Leader",
      email: "worship.youth@pceastandrews.org",
      phone: "+254 734 567 890",
      specialization: "Music ministry & creative arts"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect With Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to support you on your spiritual journey. Reach out to us for any questions, prayer requests, or to get involved!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="h-6 w-6 mr-2" />
                Get In Touch
              </CardTitle>
              <CardDescription>
                Send us a message and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Select onValueChange={(value) => handleInputChange("age", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="13-15">13-15 years</SelectItem>
                        <SelectItem value="16-18">16-18 years</SelectItem>
                        <SelectItem value="19-25">19-25 years</SelectItem>
                        <SelectItem value="26-30">26-30 years</SelectItem>
                        <SelectItem value="30+">30+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+254 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="inquiryType">What can we help you with?</Label>
                  <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="join">I want to join the youth group</SelectItem>
                      <SelectItem value="ministry">I'm interested in a ministry</SelectItem>
                      <SelectItem value="counseling">I need counseling/prayer</SelectItem>
                      <SelectItem value="event">Questions about events</SelectItem>
                      <SelectItem value="volunteer">I want to volunteer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us how we can help you or any questions you have..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Office Hours & Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 mr-2" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Youth Office Location</h4>
                  <p className="text-muted-foreground">
                    PCEA St Andrew's Church<br />
                    State House Rd/Nyerere Rd Junction<br />
                    Nairobi, Kenya
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Office Hours
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: After service - 3:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Youth Leaders */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  Youth Leaders
                </CardTitle>
                <CardDescription>
                  Our dedicated team is here to support and guide you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {youthLeaders.map((leader, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{leader.name}</h4>
                        <Badge variant="secondary">{leader.role}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {leader.specialization}
                      </p>
                      <div className="flex flex-col gap-1 text-sm">
                        <a href={`mailto:${leader.email}`} className="flex items-center text-primary hover:underline">
                          <Mail className="h-3 w-3 mr-1" />
                          {leader.email}
                        </a>
                        <a href={`tel:${leader.phone}`} className="flex items-center text-primary hover:underline">
                          <Phone className="h-3 w-3 mr-1" />
                          {leader.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-6 w-6 mr-2" />
                  Need Immediate Support?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For urgent prayer requests or pastoral care, please don't hesitate to reach out directly.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="tel:+254707257000">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Church Office: +254 707 257 000
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:youth@pceastandrews.org">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Youth Ministry
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouthContact;