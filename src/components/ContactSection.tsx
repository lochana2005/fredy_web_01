import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import GoogleReviewsSection from '@/components/GoogleReviewsSection'; // Pfad anpassen
// ...

const ContactSection = () => {
  const benefits = [
    'Über 20 Jahre Erfahrung',
    'Qualitätsgarantie auf alle Arbeiten',
    'Kostenlose Beratung & Offerten',
    'Lokaler Service in der ganzen Region'
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Kontaktieren Sie uns</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lassen Sie uns über Ihr Projekt sprechen. Wir beraten Sie gerne und erstellen Ihnen ein unverbindliches Angebot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-xl text-primary">📞 Telefon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Rufen Sie uns direkt an</p>
              <Button
                variant="default"
                className="bg-gold hover:bg-gold-dark text-white"
                asChild
              >
                <a href="tel:+41798703420">079 870 34 20</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-xl text-primary">📧 E-Mail</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Schreiben Sie uns</p>
              <Button
                variant="default"
                className="bg-gold hover:bg-gold-dark text-white font-semibold"
                asChild
              >
                <a href="mailto:Info@fredys-bodenbelaege.ch">Info@fredys-bodenbelaege.ch</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-xl text-primary">📍 Adresse</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Besuchen Sie uns</p>
              <div className="space-y-1 text-sm mb-4">
                <p>Pelzwiesenstrasse 12</p>
                <p>8157 Dielsdorf</p>
                <p>Schweiz</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a
                  href="https://maps.google.com/maps?q=Pelzwiesenstrasse%2012%2C%20Dielsdorf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Karte öffnen
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-xl text-primary">🗓️ Kostenlose Beratung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Vereinbaren Sie einen Termin für eine unverbindliche Beratung</p>
              <div className="space-y-2">
                <Button
                  variant="default"
                  size="sm"
                  className="bg-gold hover:bg-gold-dark text-white w-full"
                  asChild
                >
                  <a href="tel:+41798703420">Jetzt anrufen</a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white w-full"
                  asChild
                >
                  <a href="https://api.whatsapp.com/send?phone=%2B41798703420" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Chat mit Fredy">WhatsApp</a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white w-full"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/fredys_bodenbelage?igsh=ZnE1aTV0MXhnb21j&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📸 Instagram
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="container mx-auto px-4">
          {/* Fredy's profile image and About text */}

          {/* Partnerships Section */}
          <div className="mt-16">
            {/* ... Partnerships content ... */}
          </div>

          {/* --- HERE YOU ADD THE NEW COMPONENT --- */}
          <GoogleReviewsSection />
          <br /><br />
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-gold border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Warum Fredy's Bodenbeläge?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-gold text-xl">✓</span>
                    <span className="text-primary font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;