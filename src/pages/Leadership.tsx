import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin } from "lucide-react";

const Leadership = () => {
  const leadership = [
    {
      name: "Rev. Dr. John Smith",
      position: "Lead Pastor",
      image: "/placeholder.svg",
      bio: "Pastor John has been serving our congregation for over 15 years, bringing wisdom and compassion to his ministry.",
      email: "pastor.john@church.com",
      phone: "+254 700 123 456",
      specialties: ["Preaching", "Counseling", "Leadership"]
    },
    {
      name: "Rev. Mary Johnson",
      position: "Associate Pastor",
      image: "/placeholder.svg",
      bio: "Pastor Mary leads our youth and family ministries with passion and dedication.",
      email: "pastor.mary@church.com",
      phone: "+254 700 123 457",
      specialties: ["Youth Ministry", "Family Counseling"]
    },
    {
      name: "Elder Peter Kamau",
      position: "Church Elder",
      image: "/placeholder.svg",
      bio: "Elder Peter serves on the church board and leads our community outreach programs.",
      email: "elder.peter@church.com",
      specialties: ["Community Outreach", "Board Leadership"]
    },
    {
      name: "Deacon Sarah Wanjiku",
      position: "Head Deacon",
      image: "/placeholder.svg",
      bio: "Deacon Sarah oversees our hospitality and care ministries.",
      email: "deacon.sarah@church.com",
      specialties: ["Hospitality", "Care Ministry"]
    }
  ];

  const staff = [
    {
      name: "David Mwangi",
      position: "Worship Leader",
      email: "worship@church.com",
      department: "Music Ministry"
    },
    {
      name: "Grace Njeri",
      position: "Children's Ministry Director",
      email: "children@church.com",
      department: "Children's Ministry"
    },
    {
      name: "James Ochieng",
      position: "Administrative Assistant",
      email: "admin@church.com",
      department: "Administration"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Leadership & Staff
          </h1>
          <p className="text-xl text-muted-foreground">
            Meet the dedicated team serving our church community
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Leadership Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Church Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-muted-foreground">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-lg text-primary font-medium">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{leader.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {leader.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm">
                    {leader.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{leader.email}</span>
                      </div>
                    )}
                    {leader.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{leader.phone}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Staff Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Church Staff</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {staff.map((member, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.position}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className="mb-3">
                    {member.department}
                  </Badge>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{member.email}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Have questions or need pastoral care? Our leadership team is here for you.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>123 Church Street, Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+254 700 123 456</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@church.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leadership;