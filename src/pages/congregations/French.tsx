import { Calendar, Clock, Globe, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FrenchCongregation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-accent to-secondary text-accent-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Congrégation Française
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Bienvenue dans notre communauté francophone - Welcome to our French-speaking community
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Rejoignez-nous / Join Us
            </Button>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Horaires des Services / Service Times
            </h2>
            <p className="text-lg text-muted-foreground">
              Services en français / Services in French
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Service Dominical / Sunday Service</CardTitle>
                <CardDescription>Culte principal en français</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">11:30 AM</p>
                <p className="text-muted-foreground">Chaque Dimanche / Every Sunday</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Étude Biblique / Bible Study</CardTitle>
                <CardDescription>Mercredi soir / Wednesday evening</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">7:00 PM</p>
                <p className="text-muted-foreground">Chaque Mercredi / Every Wednesday</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About French Congregation */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                À Propos de Notre Congrégation
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Notre congrégation française accueille les francophones de Nairobi et des environs. Nous offrons des services de culte entièrement en français, créant un environnement familier pour notre communauté francophone.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                <em>About Our Congregation:</em> Our French congregation welcomes French speakers from Nairobi and surrounding areas. We offer worship services entirely in French, creating a familiar environment for our francophone community.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Visitez-nous / Visit Us
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">80+</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Membres Actifs</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">12+</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Nationalités</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Programmes / Our Programs
            </h2>
            <p className="text-lg text-muted-foreground">
              Activities et ministères en français
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>École du Dimanche</CardTitle>
                <CardDescription>Sunday School</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Enseignement biblique pour enfants en français
                </p>
                <p className="text-sm text-primary font-medium">Dimanche 10:00 AM</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Groupe de Femmes</CardTitle>
                <CardDescription>Women's Ministry</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Fellowship et étude biblique pour femmes
                </p>
                <p className="text-sm text-primary font-medium">Samedi 2:00 PM</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Chorale Française</CardTitle>
                <CardDescription>French Choir</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Louange en français et chants traditionnels
                </p>
                <p className="text-sm text-primary font-medium">Samedi 4:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Info */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre Communauté / Our Community
            </h2>
            <p className="text-lg text-muted-foreground">
              Une famille diversifiée unie par la foi
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Diversité Culturelle</h3>
                <p className="text-muted-foreground">
                  Membres de France, Côte d'Ivoire, Cameroun, RDC, Rwanda, Burundi et plus
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Toutes Générations</h3>
                <p className="text-muted-foreground">
                  Des enfants aux anciens, une communauté intergénérationnelle
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Événements Spéciaux</h3>
                <p className="text-muted-foreground">
                  Célébrations culturelles et fêtes chrétiennes en français
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nous Rendre Visite / Visit Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Même lieu, service spécialement en français
            </p>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  PCEA St Andrew's Church
                </h3>
                <p className="text-muted-foreground mb-4">
                  State House Rd/Nyerere Rd Junction, Nairobi
                </p>
                <div className="space-y-2 text-center">
                  <p className="text-muted-foreground">
                    📞 +254(0) 707 257 000
                  </p>
                  <p className="text-muted-foreground">
                    📞 +254(0) 733 400 023
                  </p>
                  <p className="text-muted-foreground">
                    ✉️ français@pceastandrews.org
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bienvenue chez vous / Welcome Home
          </h2>
          <p className="text-xl mb-8">
            Que vous soyez de passage ou résident permanent, vous êtes les bienvenus dans notre famille francophone.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            Contactez le Pasteur / Contact Pastor
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FrenchCongregation;