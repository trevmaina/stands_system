import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Clock, Users } from "lucide-react";

const Livestream = () => {
  const isLive = false; // This would come from your backend/API
  const nextService = {
    title: "Sunday Morning Service",
    time: "10:00 AM",
    date: "Sunday, December 15, 2024",
    speaker: "Pastor John Smith"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Live Worship
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join us online for live worship services and connect with our community
          </p>
          {isLive ? (
            <Badge variant="destructive" className="text-lg px-4 py-2">
              🔴 LIVE NOW
            </Badge>
          ) : (
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Stream Offline
            </Badge>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Live Stream Section */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted flex items-center justify-center">
                {isLive ? (
                  <div className="text-center">
                    <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-lg">Live stream would embed here</p>
                    <p className="text-sm text-muted-foreground">YouTube/Facebook Live Player</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg">Stream is currently offline</p>
                    <p className="text-sm text-muted-foreground">Join us during our service times</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Service Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Next Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">{nextService.title}</h3>
                  <p className="text-muted-foreground">{nextService.date}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {nextService.time}
                  </span>
                  <span>Speaker: {nextService.speaker}</span>
                </div>
                <Button className="w-full">Set Reminder</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Service Times
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Sunday Morning</span>
                  <span className="font-medium">10:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday Evening</span>
                  <span className="font-medium">6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday Prayer</span>
                  <span className="font-medium">7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Youth Service</span>
                  <span className="font-medium">Fridays 7:00 PM</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Watch Options */}
        <Card>
          <CardHeader>
            <CardTitle>How to Watch</CardTitle>
            <CardDescription>
              Multiple ways to join our live services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                  <Play className="h-4 w-4 text-white" />
                </div>
                <span>YouTube Live</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <Play className="h-4 w-4 text-white" />
                </div>
                <span>Facebook Live</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <Play className="h-4 w-4 text-primary-foreground" />
                </div>
                <span>Website Stream</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Livestream;