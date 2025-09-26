import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Import all service images
import parkettImage from '@/assets/parkett-verlegen.jpg';
import linoleumImage from '@/assets/linoleum-bodenbelag.jpg';
import korkImage from '@/assets/kork-bodenbelag.jpg';
import vinylImage from '@/assets/vinyl-linoleum.jpg';
import laminatImage from '@/assets/laminat-kork.jpg';
import kautschukImage from '@/assets/kautschuk-bodenbelag.jpg';
import teppichImage from '@/assets/teppich-kautschuk.jpg';
import wandschutzImage from '@/assets/wandschutz.jpg';
import steinKeramikImage from '@/assets/stein-keramik.jpg';
import sockelImage from '@/assets/sockel-installation.jpg';
import silikonImage from '@/assets/silikon-abdichtung.jpg';
import reparaturenImage from '@/assets/reparaturen.jpg';

const ServicesSection = () => {
  const services = [
    {
      title: 'Parkett Verlegen',
      subtitle: 'Schleifen, Ölen & Versiegeln',
      description: 'Professionelle Parkettverlegung, Schleifen und Versiegelung mit modernsten Techniken.',
      image: parkettImage
    },
    {
      title: 'Linoleum',
      subtitle: 'Natürliche Bodenbeläge',
      description: 'Hochwertige Linoleumböden - umweltfreundlich und langlebig.',
      image: linoleumImage
    },
    {
      title: 'Korkbeläge',
      subtitle: 'Nachhaltige Lösungen',
      description: 'Warme und komfortable Korkböden für natürliches Wohngefühl.',
      image: korkImage
    },
    {
      title: 'Vinyl',
      subtitle: 'Moderne Optik',
      description: 'Pflegeleichte und vielseitige Vinylböden in verschiedenen Designs.',
      image: vinylImage
    },
    {
      title: 'Laminat',
      subtitle: 'Vielseitige Böden',
      description: 'Robuste Laminatböden für jeden Wohnbereich.',
      image: laminatImage
    },
    {
      title: 'Kautschuk',
      subtitle: 'Strapazierfähig',
      description: 'Industrielle Kautschukbeläge für höchste Beanspruchung.',
      image: kautschukImage
    },
    {
      title: 'Teppich',
      subtitle: 'Komfort & Wärme',
      description: 'Gemütliche Teppichböden für behagliche Atmosphäre.',
      image: teppichImage
    },
    {
      title: 'Wandschutz',
      subtitle: 'Schutz & Ästhetik',
      description: 'Professioneller Wandschutz für Industrie und Gewerbe.',
      image: wandschutzImage
    },
    {
      title: 'Stein- und Keramikplatten',
      subtitle: 'Hochwertige Verlegung',
      description: 'Präzise Verlegung von Stein- und Keramikplatten nach Maß.',
      image: steinKeramikImage
    },
    {
      title: 'Sockel',
      subtitle: 'Perfekte Abschlüsse',
      description: 'Saubere Sockelarbeiten für den perfekten Raumabschluss.',
      image: sockelImage
    },
    {
      title: 'Silikon',
      subtitle: 'Professionelle Abdichtung',
      description: 'Fachgerechte Silikonarbeiten und Abdichtungen.',
      image: silikonImage
    },
    {
      title: 'Reparaturen',
      subtitle: 'Service & Wartung',
      description: 'Schnelle und zuverlässige Reparaturen aller Bodenbeläge.',
      image: reparaturenImage
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Unsere Dienstleistungen</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Von der Beratung bis zur finalen Verlegung - wir bieten Ihnen das komplette Spektrum professioneller Bodenbeläge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                <p className="text-sm font-medium text-gold">{service.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;