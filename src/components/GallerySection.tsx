import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import gallery placeholder images
import novilonPlaceholder from '@/assets/gallery/Novilon/1.jpg';
import treppenPlaceholder from '@/assets/gallery/Treppenverkleidung_mit_Parkett/1.jpg';
import parkettMusterPlaceholder from '@/assets/gallery/Parkett_Muster/1.jpg';
import beforeAfterPlaceholder from '@/assets/gallery/Before _After/1.jpg';
import { Link } from 'react-router-dom';

const GallerySection = () => {
  const featuredItems = [
    {
      title: 'Novilon Elastische Beläge',
      description: 'Hochwertige elastische Bodenbeläge für alle Anwendungsbereiche',
      category: 'Novilon',
      image: novilonPlaceholder,
      count: 13
    },
    {
      title: 'Treppenverkleidung mit Parkett',
      description: 'Professionelle Treppenverkleidung aus hochwertigen Parkettmaterialien',
      category: 'Treppen',
      image: treppenPlaceholder,
      count: 10
    },
    {
      title: 'Parkett Muster',
      description: 'Vielfältige Parkett-Muster und Holzarten zur Auswahl',
      category: 'Parkett',
      image: parkettMusterPlaceholder,
      count: 8
    },
    {
      title: 'Before / After',
      description: 'Beeindruckende Vorher-Nachher Transformationen unserer Projekte',
      category: 'Projekte',
      image: beforeAfterPlaceholder,
      count: 11
    }
  ];

  const totalImages = 13 + 10 + 8 + 11 + 5 + 16 + 8 + 2 + 4 + 7; // Total: 84 images

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Unsere Arbeiten & Materialien</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecken Sie unsere umfangreiche Materialauswahl und professionellen Arbeiten. Von hochwertigen Musterkollektionen bis hin zu fertigen Installationen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 right-4 bg-gold text-white px-2 py-1 text-xs rounded-full font-medium">
                  {item.count} Bilder
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gold text-white px-3 py-1 text-xs rounded-full font-medium">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-gold text-gold hover:bg-gold hover:text-white"
            asChild
          >

            <Link to="/gallery">
              <p>Alle Kategorien anzeigen ({totalImages} Bilder)</p>
            </Link>
            
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;