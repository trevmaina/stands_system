import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              BUILDING BRIDGES OF{" "}
              <span className="text-primary">FAITH, HOPE, AND</span>{" "}
              <span className="text-accent">LOVE</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Welcome to the progressive church for every kind of human being in NYC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground">
                Join us
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Our history
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-primary-foreground mb-4">
            "Be devoted to one another in love. Honor one another above yourselves."
          </blockquote>
          <cite className="text-accent text-lg">- Romans 12:10</cite>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Discover the power of community!
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Feel God within you and find your path to faith.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-light">
                Join us
              </Button>
            </div>
            <div className="bg-muted/50 rounded-lg p-8 h-64 flex items-center justify-center">
              <p className="text-muted-foreground">Image placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground">
              Join us in our community gatherings
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event cards would go here */}
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="text-primary text-sm font-medium mb-2">04 oct 2023 | 12.00 AM - 5.00 PM</div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Holy Matrimony</h3>
              <p className="text-muted-foreground">
                Join us in celebrating this incredible milestone in Anna and Adam's lives.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="text-primary text-sm font-medium mb-2">12 Nov 2023 | 10.00 AM - 12.00 AM</div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Bible Study Session</h3>
              <p className="text-muted-foreground">
                Engage in interactive sessions to explore the wisdom and teachings of the Bible.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="text-primary text-sm font-medium mb-2">04 DEC 2023 | 11.00 AM - 01.00 PM</div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Hope in Healing</h3>
              <p className="text-muted-foreground">
                We come together to provide support and encouragement to those affected by cancer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Looking for support?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our community is here for you. Let's walk this path together.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-light">
            JOIN us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
